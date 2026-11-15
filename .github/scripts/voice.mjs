// Generates the site's voice clips with Gemini text-to-speech. Safe to re-run: existing clips are skipped.
// Several lines are recorded per request (free tier allows few requests a day) and cut apart at the pauses between them.
import fs from 'node:fs';
import { execFileSync, spawnSync } from 'node:child_process';
const KEY = process.env.GEMINI_API_KEY, dir = 'assets/audio';
const cfg = JSON.parse(fs.readFileSync(`${dir}/lines.json`, 'utf8'));
const have = () => fs.readdirSync(dir).filter((f) => f.endsWith('.mp3')).map((f) => f.slice(0, -4)).sort();
const writeManifest = () => fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify(have()));
if (!KEY) { console.log('No GEMINI_API_KEY secret yet, so nothing was generated.'); writeManifest(); process.exit(0); }
const MODELS = (process.env.TTS_MODELS || 'gemini-3.8-flash-tts,gemini-3.1-flash-tts-preview,gemini-3.8-flash-lite-tts').split(',').map((id) => ({ id, dead: false, style: true }));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const SEP = ' <short pause> <short pause> <short pause> ';
async function call(m, text, v) {
  const part = { type: 'text', text };
  if (m.style) part.annotations = [{ type: 'speech_metadata', style: v.style }];
  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
    method: 'POST', headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: m.id, input: [{ type: 'user_input', content: [part] }], response_format: { type: 'audio' }, generation_config: { speech_config: [{ voice: v.voice }] } })
  });
  if (res.ok) {
    const j = await res.json();
    const parts = (j.steps || []).filter((s) => s.type === 'model_output').flatMap((s) => s.content || []).filter((c) => c.type === 'audio' && c.data);
    return parts.length ? { wav: Buffer.from(parts[parts.length - 1].data, 'base64') } : { err: 'no audio', status: 0 };
  }
  return { status: res.status, err: (await res.text()).slice(0, 260).replace(/\s+/g, ' ') };
}
async function tts(text, v) {
  for (const m of MODELS) {
    if (m.dead) continue;
    for (let tries = 0; tries < 4; tries++) {
      const r = await call(m, text, v);
      if (r.wav) return { wav: r.wav, model: m.id };
      console.log(`  ${m.id}: HTTP ${r.status} ${r.err}`);
      if (r.status === 400 && /metadata/i.test(r.err) && m.style) { m.style = false; continue; }
      if (r.status === 429 && /per day|daily|retry in \d+h/i.test(r.err)) { m.dead = true; break; }
      if (r.status === 429 || r.status === 503 || r.status === 500) { await sleep(30000); continue; }
      m.dead = true; break;
    }
    if (!m.dead && MODELS.indexOf(m) < MODELS.length) m.dead = true;   // gave up on this one for this run
  }
  return null;
}
function probe(file) {
  const r = spawnSync('ffmpeg', ['-hide_banner', '-i', file, '-af', 'silencedetect=noise=-36dB:d=0.22', '-f', 'null', '-'], { encoding: 'utf8' });
  const out = r.stderr || '', dur = (() => { const m = /Duration: (\d+):(\d+):([\d.]+)/.exec(out); return m ? +m[1] * 3600 + +m[2] * 60 + +m[3] : 0; })();
  const sil = []; let s = null;
  for (const line of out.split('\n')) {
    const a = /silence_start: ([\d.]+)/.exec(line), b = /silence_end: ([\d.]+)/.exec(line);
    if (a) s = +a[1]; if (b && s !== null) { sil.push([s, +b[1]]); s = null; }
  }
  return { dur, sil: sil.filter(([a, b]) => a > 0.15 && b < dur - 0.15) };
}
function cut(file, lines) {
  const { dur, sil } = probe(file);
  if (lines.length === 1) return [[0, dur]];
  if (sil.length < lines.length - 1) return null;
  const picks = [...sil].sort((x, y) => (y[1] - y[0]) - (x[1] - x[0])).slice(0, lines.length - 1).sort((x, y) => x[0] - y[0]);
  const edges = [0, ...picks.map(([a, b]) => (a + b) / 2), dur], segs = lines.map((_, i) => [edges[i], edges[i + 1]]);
  const rate = dur / lines.reduce((n, l) => n + l.text.length, 0);   // seconds per character across the batch
  const ok = segs.every(([a, b], i) => { const k = (b - a) / (lines[i].text.length * rate); return k > 0.45 && k < 2.2; });
  return ok ? segs : null;
}
function save(file, seg, id) {
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-ss', seg[0].toFixed(3), '-to', seg[1].toFixed(3), '-i', file,
    '-af', 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse', '-ac', '1', '-b:a', '64k', `${dir}/${id}.mp3`]);
}
const done = new Set(have()); let made = 0;
for (const tag of Object.keys(cfg.voices)) {
  const todo = cfg.lines.filter((l) => l.tag === tag && !done.has(l.id)); let size = 4;
  while (todo.length) {
    if (MODELS.every((m) => m.dead)) break;
    const batch = []; let chars = 0;
    while (todo.length && batch.length < size && (chars + todo[0].text.length <= 700 || !batch.length)) { chars += todo[0].text.length; batch.push(todo.shift()); }
    const r = await tts(batch.map((l) => l.text).join(SEP), cfg.voices[tag]);
    if (!r) { todo.unshift(...batch); break; }
    fs.writeFileSync('/tmp/v.wav', r.wav);
    const segs = cut('/tmp/v.wav', batch);
    if (!segs) { console.log(`  could not cut a batch of ${batch.length} cleanly; ${batch.length > 1 ? 'retrying those one at a time' : 'skipping'}`); if (batch.length > 1) { todo.unshift(...batch); size = 1; } continue; }
    batch.forEach((l, i) => { save('/tmp/v.wav', segs[i], l.id); made++; console.log(`ok ${l.id} [${tag}] ${(segs[i][1] - segs[i][0]).toFixed(1)}s for ${l.text.length} chars via ${r.model}`); });
    await sleep(7000);
  }
}
writeManifest();
console.log(`Made ${made} clips; ${have().length} of ${cfg.lines.length} exist; models used up: ${MODELS.filter((m) => m.dead).map((m) => m.id).join(', ') || 'none'}.`);
