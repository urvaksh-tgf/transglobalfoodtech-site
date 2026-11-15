// Generates the site's voice clips once, with Gemini text-to-speech. Safe to re-run: existing clips are skipped.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const KEY = process.env.GEMINI_API_KEY, dir = 'assets/audio';
const cfg = JSON.parse(fs.readFileSync(`${dir}/lines.json`, 'utf8'));
const have = () => fs.readdirSync(dir).filter((f) => f.endsWith('.mp3')).map((f) => f.slice(0, -4)).sort();
const writeManifest = () => fs.writeFileSync(`${dir}/manifest.json`, JSON.stringify(have()));
if (!KEY) { console.log('No GEMINI_API_KEY secret yet, so nothing was generated.'); writeManifest(); process.exit(0); }
const MODELS = (process.env.TTS_MODELS || 'gemini-3.1-flash-tts-preview,gemini-3.8-flash-lite-tts,gemini-3.8-flash-tts').split(',');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let mi = 0;
async function tts(line) {
  const v = cfg.voices[line.tag];
  for (let tries = 0; ;) {
    if (mi >= MODELS.length) throw new Error('quota');
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST', headers: { 'x-goog-api-key': KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: MODELS[mi], input: [{ type: 'user_input', content: [{ type: 'text', text: line.text, annotations: [{ type: 'speech_metadata', style: v.style }] }] }],
        response_format: { type: 'audio' }, generation_config: { speech_config: [{ voice: v.voice }] } })
    });
    if (res.ok) {
      const j = await res.json();
      const parts = (j.steps || []).filter((s) => s.type === 'model_output').flatMap((s) => s.content || []).filter((c) => c.type === 'audio' && c.data);
      if (parts.length) return Buffer.from(parts[parts.length - 1].data, 'base64');
      console.log(`  ${MODELS[mi]}: reply had no audio`); mi++; continue;
    }
    const body = (await res.text()).slice(0, 300).replace(/\s+/g, ' ');
    if (res.status === 429 && tries < 3 && !/day|daily/i.test(body)) { tries++; console.log('  rate limit, waiting 35s'); await sleep(35000); continue; }
    console.log(`  ${MODELS[mi]}: HTTP ${res.status} ${body}`); mi++; tries = 0;
  }
}
const done = new Set(have()); let made = 0, left = 0;
for (const line of cfg.lines) {
  if (done.has(line.id)) continue;
  if (mi >= MODELS.length) { left++; continue; }
  try {
    const wav = await tts(line); fs.writeFileSync('/tmp/v.wav', wav);
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', '/tmp/v.wav', '-ac', '1', '-b:a', '64k', `${dir}/${line.id}.mp3`]);
    made++; console.log(`ok ${line.id} [${line.tag}] via ${MODELS[mi]}`); await sleep(7000);
  } catch (e) { left++; console.log(`stopped at ${line.id}: ${e.message}`); }
}
writeManifest();
console.log(`Made ${made} clips; ${have().length} of ${cfg.lines.length} exist; ${left} still to do.`);
