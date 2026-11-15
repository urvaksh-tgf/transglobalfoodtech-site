var Fs=2;var ri=1,ai=2;class xn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ts=Math.PI/180,Ps=180/Math.PI;function oi(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ve[t&255]+ve[t>>8&255]+ve[t>>16&255]+ve[t>>24&255]+"-"+ve[e&255]+ve[e>>8&255]+"-"+ve[e>>16&15|64]+ve[e>>24&255]+"-"+ve[n&63|128]+ve[n>>8&255]+"-"+ve[n>>16&255]+ve[n>>24&255]+ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]).toLowerCase()}function _e(t,e,n){return Math.max(e,Math.min(n,t))}function Ja(t,e){return(t%e+e)%e}function es(t,e,n){return(1-n)*t+n*e}function Jn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("Invalid component type.")}}function Se(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,i,s,r,a,o,l){if(Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],m=n[8],v=i[0],_=i[3],p=i[6],f=i[1],b=i[4],x=i[7],E=i[2],O=i[5],A=i[8];return s[0]=r*v+a*f+o*E,s[3]=r*_+a*b+o*O,s[6]=r*p+a*x+o*A,s[1]=l*v+c*f+u*E,s[4]=l*_+c*b+u*O,s[7]=l*p+c*x+u*A,s[2]=d*v+h*f+m*E,s[5]=d*_+h*b+m*O,s[8]=d*p+h*x+m*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,m=e*u+n*d+i*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*l-c*n)*v,t[2]=(a*n-i*r)*v,t[3]=d*v,t[4]=(c*e-i*o)*v,t[5]=(i*s-a*e)*v,t[6]=h*v,t[7]=(n*o-l*e)*v,t[8]=(r*e-n*s)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ns.makeScale(t,e)),this}rotate(t){return this.premultiply(ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(ns.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var ns=new Gt;function sa(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gi(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $a(){let t=Gi("canvas");return t.style.display="block",t}var hr={};function ti(t){if(t in hr)return;hr[t]=!0,console.warn(t)}function Ka(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Qa(t){let e=t.elements;e[2]=0.5*e[2]+0.5*e[3],e[6]=0.5*e[6]+0.5*e[7],e[10]=0.5*e[10]+0.5*e[11],e[14]=0.5*e[14]+0.5*e[15]}function ja(t){let e=t.elements;if(e[11]===-1)e[10]=-e[10]-1,e[14]=-e[14];else e[10]=-e[10],e[14]=-e[14]+1}var Yt={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;if(this.spaces[e].transfer==="srgb")t.r=Ke(t.r),t.g=Ke(t.g),t.b=Ke(t.b);if(this.spaces[e].primaries!==this.spaces[n].primaries)t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ);if(this.spaces[n].transfer==="srgb")t.r=Bn(t.r),t.g=Bn(t.g),t.b=Bn(t.b);return t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){if(t==="")return"linear";return this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ke(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function Bn(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ur=[0.64,0.33,0.3,0.6,0.15,0.06],dr=[0.2126,0.7152,0.0722],fr=[0.3127,0.329],pr=new Gt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mr=new Gt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);Yt.define({["srgb-linear"]:{primaries:ur,whitePoint:fr,transfer:"linear",toXYZ:pr,fromXYZ:mr,luminanceCoefficients:dr,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:ur,whitePoint:fr,transfer:"srgb",toXYZ:pr,fromXYZ:mr,luminanceCoefficients:dr,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}});var wn;class ra{static getDataURL(t){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{if(wn===void 0)wn=Gi("canvas");wn.width=t.width,wn.height=t.height;let n=wn.getContext("2d");if(t instanceof ImageData)n.putImageData(t,0,0);else n.drawImage(t,0,0,t.width,t.height);e=wn}if(e.width>2048||e.height>2048)return console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",0.6);else return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Gi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Ke(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Ke(e[n]/255)*255);else e[n]=Ke(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var to=0;class Ns{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:to++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(is(i[r].image));else s.push(is(i[r]))}else s=is(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function is(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return ra.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return console.warn("THREE.Texture: Unable to serialize Texture."),{}}var eo=0;class be extends xn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=be.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:eo++}),this.uuid=oi(),this.name="",this.source=new Ns(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=300;be.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],m=o[9],v=o[2],_=o[6],p=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-v)<0.01&&Math.abs(m-_)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+v)<0.1&&Math.abs(m+_)<0.1&&Math.abs(l+h+p-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,x=(h+1)/2,E=(p+1)/2,O=(c+d)/4,A=(u+v)/4,T=(m+_)/4;if(b>x&&b>E)if(b<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(b),i=O/n,s=A/n;else if(x>E)if(x<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(x),n=O/i,s=T/i;else if(E<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(E),n=A/s,i=T/s;return this.set(n,i,s,e),this}let f=Math.sqrt((_-m)*(_-m)+(u-v)*(u-v)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(_-m)/f,this.y=(u-v)/f,this.z=(d-c)/f,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aa extends xn{constructor(t=1,e=1,n={}){super();this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);if(this.texture.source=new Ns(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends aa{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Os extends be{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oa extends be{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],m=s[r+2],v=s[r+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=h,t[e+2]=m,t[e+3]=v;return}if(u!==v||o!==d||l!==h||c!==m){let _=1-a,p=o*d+l*h+c*m+u*v,f=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let E=Math.sqrt(b),O=Math.atan2(E,p*f);_=Math.sin(_*O)/E,a=Math.sin(a*O)/E}let x=a*f;if(o=o*_+d*x,l=l*_+h*x,c=c*_+m*x,u=u*_+v*x,_===1-a){let E=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=E,l*=E,c*=E,u*=E}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],m=s[r+3];return t[e]=a*m+c*u+o*h-l*d,t[e+1]=o*m+c*d+l*u-a*h,t[e+2]=l*m+c*h+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),m=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"YXZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"ZXY":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"ZYX":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"YZX":this._x=d*c*u+l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u-d*h*m;break;case"XZY":this._x=d*c*u-l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u+d*h*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<Number.EPSILON)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,a=r*t._w+n*t._x+i*t._y+s*t._z;if(a<0)this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a;else this.copy(t);if(a>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let o=1-a*a;if(o<=Number.EPSILON){let h=1-e;return this._w=h*r+e*this._w,this._x=h*n+e*this._x,this._y=h*i+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}let l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gr.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ss.copy(this).projectOnVector(t),this.sub(ss)}reflect(t){return this.sub(ss.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ss=new D,gr=new yn;class kn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(De.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(De.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=De.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,De);else De.fromBufferAttribute(s,r);De.applyMatrix4(t.matrixWorld),this.expandByPoint(De)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();gi.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();gi.copy(n.boundingBox)}gi.applyMatrix4(t.matrixWorld),this.union(gi)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,De),De.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($n),_i.subVectors(this.max,$n),An.subVectors(t.a,$n),En.subVectors(t.b,$n),Tn.subVectors(t.c,$n),en.subVectors(En,An),nn.subVectors(Tn,En),un.subVectors(An,Tn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-un.z,un.y,en.z,0,-en.x,nn.z,0,-nn.x,un.z,0,-un.x,-en.y,en.x,0,-nn.y,nn.x,0,-un.y,un.x,0];if(!rs(e,An,En,Tn,_i))return!1;if(e=[1,0,0,0,1,0,0,0,1],!rs(e,An,En,Tn,_i))return!1;return vi.crossVectors(en,nn),e=[vi.x,vi.y,vi.z],rs(e,An,En,Tn,_i)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,De).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(De).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}var qe=[new D,new D,new D,new D,new D,new D,new D,new D],De=new D,gi=new kn,An=new D,En=new D,Tn=new D,en=new D,nn=new D,un=new D,$n=new D,_i=new D,vi=new D,dn=new D;function rs(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){dn.fromArray(t,r);let o=s.x*Math.abs(dn.x)+s.y*Math.abs(dn.y)+s.z*Math.abs(dn.z),l=e.dot(dn),c=n.dot(dn),u=i.dot(dn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var no=new kn,Kn=new D,as=new D;class li{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else no.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kn.subVectors(t,this.center);let e=Kn.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Kn,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else as.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kn.copy(t.center).add(as)),this.expandByPoint(Kn.copy(t.center).sub(as));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}var Ye=new D,os=new D,xi=new D,sn=new D,ls=new D,yi=new D,cs=new D;class Bs{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ye.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){os.copy(t).add(e).multiplyScalar(0.5),xi.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(os);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(xi),a=sn.dot(this.direction),o=-sn.dot(xi),l=sn.lengthSq(),c=Math.abs(1-r*r),u,d,h,m;if(c>0)if(u=r*o-a,d=r*a-o,m=s*c,u>=0)if(d>=-m)if(d<=m){let v=1/c;u*=v,d*=v,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-m)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=m)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(os).addScaledVector(xi,d);return h}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);let n=Ye.dot(this.direction),i=Ye.dot(Ye)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u;else a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,i,s){ls.subVectors(e,t),yi.subVectors(n,t),cs.crossVectors(ls,yi);let r=this.direction.dot(cs),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;sn.subVectors(this.origin,t);let o=a*this.direction.dot(yi.crossVectors(sn,yi));if(o<0)return null;let l=a*this.direction.dot(ls.cross(sn));if(l<0)return null;if(o+l>r)return null;let c=-a*sn.dot(cs);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,_){if(le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,_)}set(t,e,n,i,s,r,a,o,l,c,u,d,h,m,v,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=a,p[13]=o,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Rn.setFromMatrixColumn(t,0).length(),s=1/Rn.setFromMatrixColumn(t,1).length(),r=1/Rn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*c,h=r*u,m=a*c,v=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+m*l,e[5]=d-v*l,e[9]=-a*o,e[2]=v-d*l,e[6]=m+h*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,h=o*u,m=l*c,v=l*u;e[0]=d+v*a,e[4]=m*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-m,e[6]=v+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,h=o*u,m=l*c,v=l*u;e[0]=d-v*a,e[4]=-r*u,e[8]=m+h*a,e[1]=h+m*a,e[5]=r*c,e[9]=v-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,h=r*u,m=a*c,v=a*u;e[0]=o*c,e[4]=m*l-h,e[8]=d*l+v,e[1]=o*u,e[5]=v*l+d,e[9]=h*l-m,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,h=r*l,m=a*o,v=a*l;e[0]=o*c,e[4]=v-d*u,e[8]=m*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+m,e[10]=d-v*u}else if(t.order==="XZY"){let d=r*o,h=r*l,m=a*o,v=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+v,e[5]=r*c,e[9]=h*u-m,e[2]=m*u-h,e[6]=a*c,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(io,t,so)}lookAt(t,e,n){let i=this.elements;if(Ee.subVectors(t,e),Ee.lengthSq()===0)Ee.z=1;if(Ee.normalize(),rn.crossVectors(n,Ee),rn.lengthSq()===0){if(Math.abs(n.z)===1)Ee.x+=0.0001;else Ee.z+=0.0001;Ee.normalize(),rn.crossVectors(n,Ee)}return rn.normalize(),Mi.crossVectors(Ee,rn),i[0]=rn.x,i[4]=Mi.x,i[8]=Ee.x,i[1]=rn.y,i[5]=Mi.y,i[9]=Ee.y,i[2]=rn.z,i[6]=Mi.z,i[10]=Ee.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],m=n[2],v=n[6],_=n[10],p=n[14],f=n[3],b=n[7],x=n[11],E=n[15],O=i[0],A=i[4],T=i[8],H=i[12],M=i[1],S=i[5],R=i[9],N=i[13],L=i[2],B=i[6],q=i[10],z=i[14],et=i[3],W=i[7],ht=i[11],ut=i[15];return s[0]=r*O+a*M+o*L+l*et,s[4]=r*A+a*S+o*B+l*W,s[8]=r*T+a*R+o*q+l*ht,s[12]=r*H+a*N+o*z+l*ut,s[1]=c*O+u*M+d*L+h*et,s[5]=c*A+u*S+d*B+h*W,s[9]=c*T+u*R+d*q+h*ht,s[13]=c*H+u*N+d*z+h*ut,s[2]=m*O+v*M+_*L+p*et,s[6]=m*A+v*S+_*B+p*W,s[10]=m*T+v*R+_*q+p*ht,s[14]=m*H+v*N+_*z+p*ut,s[3]=f*O+b*M+x*L+E*et,s[7]=f*A+b*S+x*B+E*W,s[11]=f*T+b*R+x*q+E*ht,s[15]=f*H+b*N+x*z+E*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],h=t[14],m=t[3],v=t[7],_=t[11],p=t[15];return m*(+s*o*u-i*l*u-s*a*d+n*l*d+i*a*h-n*o*h)+v*(+e*o*h-e*l*d+s*r*d-i*r*h+i*l*c-s*o*c)+_*(+e*l*u-e*a*h-s*r*u+n*r*h+s*a*c-n*l*c)+p*(-i*a*c-e*o*u+e*a*d+i*r*u-n*r*d+n*o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11],m=t[12],v=t[13],_=t[14],p=t[15],f=u*_*l-v*d*l+v*o*h-a*_*h-u*o*p+a*d*p,b=m*d*l-c*_*l-m*o*h+r*_*h+c*o*p-r*d*p,x=c*v*l-m*u*l+m*a*h-r*v*h-c*a*p+r*u*p,E=m*u*o-c*v*o-m*a*d+r*v*d+c*a*_-r*u*_,O=e*f+n*b+i*x+s*E;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/O;return t[0]=f*A,t[1]=(v*d*s-u*_*s-v*i*h+n*_*h+u*i*p-n*d*p)*A,t[2]=(a*_*s-v*o*s+v*i*l-n*_*l-a*i*p+n*o*p)*A,t[3]=(u*o*s-a*d*s-u*i*l+n*d*l+a*i*h-n*o*h)*A,t[4]=b*A,t[5]=(c*_*s-m*d*s+m*i*h-e*_*h-c*i*p+e*d*p)*A,t[6]=(m*o*s-r*_*s-m*i*l+e*_*l+r*i*p-e*o*p)*A,t[7]=(r*d*s-c*o*s+c*i*l-e*d*l-r*i*h+e*o*h)*A,t[8]=x*A,t[9]=(m*u*s-c*v*s-m*n*h+e*v*h+c*n*p-e*u*p)*A,t[10]=(r*v*s-m*a*s+m*n*l-e*v*l-r*n*p+e*a*p)*A,t[11]=(c*a*s-r*u*s-c*n*l+e*u*l+r*n*h-e*a*h)*A,t[12]=E*A,t[13]=(c*v*i-m*u*i+m*n*d-e*v*d-c*n*_+e*u*_)*A,t[14]=(m*a*i-r*v*i-m*n*o+e*v*o+r*n*_-e*a*_)*A,t[15]=(r*u*i-c*a*i+c*n*o-e*u*o-r*n*d+e*a*d)*A,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,m=s*u,v=r*c,_=r*u,p=a*u,f=o*l,b=o*c,x=o*u,{x:E,y:O,z:A}=n;return i[0]=(1-(v+p))*E,i[1]=(h+x)*E,i[2]=(m-b)*E,i[3]=0,i[4]=(h-x)*O,i[5]=(1-(d+p))*O,i[6]=(_+f)*O,i[7]=0,i[8]=(m+b)*A,i[9]=(_-f)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Rn.set(i[0],i[1],i[2]).length(),r=Rn.set(i[4],i[5],i[6]).length(),a=Rn.set(i[8],i[9],i[10]).length();if(this.determinant()<0)s=-s;t.x=i[12],t.y=i[13],t.z=i[14],Ue.copy(this);let l=1/s,c=1/r,u=1/a;return Ue.elements[0]*=l,Ue.elements[1]*=l,Ue.elements[2]*=l,Ue.elements[4]*=c,Ue.elements[5]*=c,Ue.elements[6]*=c,Ue.elements[8]*=u,Ue.elements[9]*=u,Ue.elements[10]*=u,e.setFromRotationMatrix(Ue),n.x=s,n.y=r,n.z=a,this}makePerspective(t,e,n,i,s,r,a=2000){let o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),h,m;if(a===2000)h=-(r+s)/(r-s),m=-2*r*s/(r-s);else if(a===2001)h=-r/(r-s),m=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000){let o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(r-s),d=(e+t)*l,h=(n+i)*c,m,v;if(a===2000)m=(r+s)*u,v=-2*u;else if(a===2001)m=s*u,v=-1*u;else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=v,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Rn=new D,Ue=new le,io=new D(0,0,0),so=new D(1,1,1),rn=new D,Mi=new D,Ee=new D,_r=new le,vr=new yn;class Qe{constructor(t=0,e=0,n=0,i=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(_e(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-_e(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-_e(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(_e(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-_e(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return _r.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_r,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vr.setFromEuler(this),this.setFromQuaternion(vr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class zs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var ro=0,xr=new D,Cn=new yn,Ze=new le,Si=new D,Qn=new D,ao=new D,oo=new yn,yr=new D(1,0,0),Mr=new D(0,1,0),Sr=new D(0,0,1),br={type:"added"},lo={type:"removed"},In={type:"childadded",child:null},hs={type:"childremoved",child:null};class we extends xn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:ro++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();let t=new D,e=new Qe,n=new yn,i=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new le},normalMatrix:{value:new Gt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.multiply(Cn),this}rotateOnWorldAxis(t,e){return Cn.setFromAxisAngle(t,e),this.quaternion.premultiply(Cn),this}rotateX(t){return this.rotateOnAxis(yr,t)}rotateY(t){return this.rotateOnAxis(Mr,t)}rotateZ(t){return this.rotateOnAxis(Sr,t)}translateOnAxis(t,e){return xr.copy(t).applyQuaternion(this.quaternion),this.position.add(xr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yr,t)}translateY(t){return this.translateOnAxis(Mr,t)}translateZ(t){return this.translateOnAxis(Sr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ze.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Si.copy(t);else Si.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Qn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Ze.lookAt(Qn,Si,this.up);else Ze.lookAt(Si,Qn,this.up);if(this.quaternion.setFromRotationMatrix(Ze),i)Ze.extractRotation(i.matrixWorld),Cn.setFromRotationMatrix(Ze),this.quaternion.premultiply(Cn.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(br),In.child=t,this.dispatchEvent(In),In.child=null;else console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(lo),hs.child=t,this.dispatchEvent(hs),hs.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),Ze.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),Ze.multiply(t.parent.matrixWorld);return t.applyMatrix4(Ze),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(br),In.child=t,this.dispatchEvent(In),In.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,t,ao),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qn,oo,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null)n.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((a)=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius};if(this.boundingBox!==null)i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),h=r(t.animations),m=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(m.length>0)n.nodes=m}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new D(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=new D,Je=new D,us=new D,$e=new D,Pn=new D,Ln=new D,wr=new D,ds=new D,fs=new D,ps=new D,ms=new ce,gs=new ce,_s=new ce;class Ne{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fe.subVectors(t,e),i.cross(Fe);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Fe.subVectors(i,e),Je.subVectors(n,e),us.subVectors(t,e);let r=Fe.dot(Fe),a=Fe.dot(Je),o=Fe.dot(us),l=Je.dot(Je),c=Je.dot(us),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,m=(r*c-a*o)*d;return s.set(1-h-m,m,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,$e)===null)return!1;return $e.x>=0&&$e.y>=0&&$e.x+$e.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,$e)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,$e.x),o.addScaledVector(r,$e.y),o.addScaledVector(a,$e.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return ms.setScalar(0),gs.setScalar(0),_s.setScalar(0),ms.fromBufferAttribute(t,e),gs.fromBufferAttribute(t,n),_s.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(ms,s.x),r.addScaledVector(gs,s.y),r.addScaledVector(_s,s.z),r}static isFrontFacing(t,e,n,i){return Fe.subVectors(n,e),Je.subVectors(t,e),Fe.cross(Je).dot(i)<0?!0:!1}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),Fe.cross(Je).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return Ne.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ne.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Ne.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Ne.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ne.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;Pn.subVectors(i,n),Ln.subVectors(s,n),ds.subVectors(t,n);let o=Pn.dot(ds),l=Ln.dot(ds);if(o<=0&&l<=0)return e.copy(n);fs.subVectors(t,i);let c=Pn.dot(fs),u=Ln.dot(fs);if(c>=0&&u<=c)return e.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(Pn,r);ps.subVectors(t,s);let h=Pn.dot(ps),m=Ln.dot(ps);if(m>=0&&h<=m)return e.copy(s);let v=h*l-o*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ln,a);let _=c*m-h*u;if(_<=0&&u-c>=0&&h-m>=0)return wr.subVectors(s,i),a=(u-c)/(u-c+(h-m)),e.copy(i).addScaledVector(wr,a);let p=1/(_+v+d);return r=v*p,a=d*p,e.copy(n).addScaledVector(Pn,r).addScaledVector(Ln,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}var la={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},bi={h:0,s:0,l:0};function vs(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Ja(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=vs(r,s,t+0.3333333333333333),this.g=vs(r,s,t),this.b=vs(r,s,t-0.3333333333333333)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=la[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else console.warn("THREE.Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ke(t.r),this.g=Ke(t.g),this.b=Ke(t.b),this}copyLinearToSRGB(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return Yt.fromWorkingColorSpace(xe.copy(this),t),Math.round(_e(xe.r*255,0,255))*65536+Math.round(_e(xe.g*255,0,255))*256+Math.round(_e(xe.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(xe.copy(this),e);let{r:n,g:i,b:s}=xe,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t="srgb"){Yt.fromWorkingColorSpace(xe.copy(this),t);let{r:e,g:n,b:i}=xe;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(bi);let n=es(an.h,bi.h,e),i=es(an.s,bi.s,e),s=es(an.l,bi.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var xe=new qt;qt.NAMES=la;var co=0;class Gn extends xn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:co++}),this.uuid=oi(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends Gn{static get type(){return"MeshBasicMaterial"}constructor(t){super();this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var he=new D,wi=new Rt;class Ht{constructor(t,e,n=!1){if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)wi.fromBufferAttribute(this,e),wi.applyMatrix3(t),this.setXY(e,wi.x,wi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=Jn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=Se(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=Jn(e,this.array);return e}setX(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=Jn(e,this.array);return e}setY(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=Jn(e,this.array);return e}setZ(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=Jn(e,this.array);return e}setW(t,e){if(this.normalized)e=Se(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=Se(e,this.array),n=Se(n,this.array),i=Se(i,this.array),s=Se(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}}class ks extends Ht{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gs extends Ht{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Ht{constructor(t,e,n){super(new Float32Array(t),e,n)}}var ho=0,Ie=new le,xs=new we,Dn=new D,Te=new kn,jn=new kn,fe=new D;class ne extends xn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ho++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((sa(t))?Gs:ks)(t,1);else this.index=t;return this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,n){return Ie.makeTranslation(t,e,n),this.applyMatrix4(Ie),this}scale(t,e,n){return Ie.makeScale(t,e,n),this.applyMatrix4(Ie),this}lookAt(t){return xs.lookAt(t),xs.updateMatrix(),this.applyMatrix4(xs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ae(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}if(t.length>e.count)console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new kn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(Te.setFromBufferAttribute(s),this.morphTargetsRelative)fe.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(fe);else this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new li;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(jn.setFromBufferAttribute(a),this.morphTargetsRelative)fe.addVectors(Te.min,jn.min),Te.expandByPoint(fe),fe.addVectors(Te.max,jn.max),Te.expandByPoint(fe);else Te.expandByPoint(jn.min),Te.expandByPoint(jn.max)}Te.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(fe.fromBufferAttribute(a,l),o)Dn.fromBufferAttribute(t,l),fe.add(Dn);i=Math.max(i,n.distanceToSquared(fe))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],o=[];for(let T=0;T<n.count;T++)a[T]=new D,o[T]=new D;let l=new D,c=new D,u=new D,d=new Rt,h=new Rt,m=new Rt,v=new D,_=new D;function p(T,H,M){l.fromBufferAttribute(n,T),c.fromBufferAttribute(n,H),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,H),m.fromBufferAttribute(s,M),c.sub(l),u.sub(l),h.sub(d),m.sub(d);let S=1/(h.x*m.y-m.x*h.y);if(!isFinite(S))return;v.copy(c).multiplyScalar(m.y).addScaledVector(u,-h.y).multiplyScalar(S),_.copy(u).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(S),a[T].add(v),a[H].add(v),a[M].add(v),o[T].add(_),o[H].add(_),o[M].add(_)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let T=0,H=f.length;T<H;++T){let M=f[T],{start:S,count:R}=M;for(let N=S,L=S+R;N<L;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new D,x=new D,E=new D,O=new D;function A(T){E.fromBufferAttribute(i,T),O.copy(E);let H=a[T];b.copy(H),b.sub(E.multiplyScalar(E.dot(H))).normalize(),x.crossVectors(O,H);let S=x.dot(o[T])<0?-1:1;r.setXYZW(T,b.x,b.y,b.z,S)}for(let T=0,H=f.length;T<H;++T){let M=f[T],{start:S,count:R}=M;for(let N=S,L=S+R;N<L;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D;if(t)for(let d=0,h=t.count;d<h;d+=3){let m=t.getX(d+0),v=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),a.add(c),o.add(c),l.add(c),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,m=0;for(let v=0,_=o.length;v<_;v++){if(a.isInterleavedBufferAttribute)h=o[v]*a.data.stride+a.offset;else h=o[v]*c;for(let p=0;p<c;p++)d[m++]=l[h++]}return new Ht(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new ne,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=t(d,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere={center:a.center.toArray(),radius:a.radius};return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var Ar=new le,fn=new Bs,Ai=new li,Er=new D,Ei=new D,Ti=new D,Ri=new D,ys=new D,Ci=new D,Tr=new D,Ii=new D;class me extends we{constructor(t=new ne,e=new ci){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Ci.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(ys.fromBufferAttribute(u,t),r)Ci.addScaledVector(ys,c);else Ci.addScaledVector(ys.sub(e),c)}e.add(Ci)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ai.copy(n.boundingSphere),Ai.applyMatrix4(s),fn.copy(t.ray).recast(t.near),Ai.containsPoint(fn.origin)===!1){if(fn.intersectSphere(Ai,Er)===null)return;if(fn.origin.distanceToSquared(Er)>(t.far-t.near)**2)return}if(Ar.copy(s).invert(),fn.copy(t.ray).applyMatrix4(Ar),n.boundingBox!==null){if(fn.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,fn)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){let _=d[m],p=r[_.materialIndex],f=Math.max(_.start,h.start),b=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let x=f,E=b;x<E;x+=3){let O=a.getX(x),A=a.getX(x+1),T=a.getX(x+2);if(i=Pi(this,p,t,n,l,c,u,O,A,T),i)i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let _=m,p=v;_<p;_+=3){let f=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);if(i=Pi(this,r,t,n,l,c,u,f,b,x),i)i.faceIndex=Math.floor(_/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let m=0,v=d.length;m<v;m++){let _=d[m],p=r[_.materialIndex],f=Math.max(_.start,h.start),b=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let x=f,E=b;x<E;x+=3){let O=x,A=x+1,T=x+2;if(i=Pi(this,p,t,n,l,c,u,O,A,T),i)i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,e.push(i)}}else{let m=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let _=m,p=v;_<p;_+=3){let f=_,b=_+1,x=_+2;if(i=Pi(this,r,t,n,l,c,u,f,b,x),i)i.faceIndex=Math.floor(_/3),e.push(i)}}}}function uo(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Ii.copy(o),Ii.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Ii);if(c<n.near||c>n.far)return null;return{distance:c,point:Ii.clone(),object:t}}function Pi(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,Ei),t.getVertexPosition(l,Ti),t.getVertexPosition(c,Ri);let u=uo(t,e,n,i,Ei,Ti,Ri,Tr);if(u){let d=new D;if(Ne.getBarycoord(Tr,Ei,Ti,Ri,d),s)u.uv=Ne.getInterpolatedAttribute(s,o,l,c,d,new Rt);if(r)u.uv1=Ne.getInterpolatedAttribute(r,o,l,c,d,new Rt);if(a){if(u.normal=Ne.getInterpolatedAttribute(a,o,l,c,d,new D),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new D,materialIndex:0};Ne.getNormal(Ei,Ti,Ri,h.normal),u.face=h,u.barycoord=d}return u}class hi extends ne{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;m("z","y","x",-1,-1,n,e,t,r,s,0),m("z","y","x",1,-1,n,e,-t,r,s,1),m("x","z","y",1,1,t,n,e,i,r,2),m("x","z","y",1,-1,t,n,-e,i,r,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(u,2));function m(v,_,p,f,b,x,E,O,A,T,H){let M=x/A,S=E/T,R=x/2,N=E/2,L=O/2,B=A+1,q=T+1,z=0,et=0,W=new D;for(let ht=0;ht<q;ht++){let ut=ht*S-N;for(let yt=0;yt<B;yt++){let Lt=yt*M-R;W[v]=Lt*f,W[_]=ut*b,W[p]=L,l.push(W.x,W.y,W.z),W[v]=0,W[_]=0,W[p]=O>0?1:-1,c.push(W.x,W.y,W.z),u.push(yt/A),u.push(1-ht/T),z+=1}}for(let ht=0;ht<T;ht++)for(let ut=0;ut<A;ut++){let yt=d+ut+B*ht,Lt=d+ut+B*(ht+1),C=d+(ut+1)+B*(ht+1),G=d+(ut+1)+B*ht;o.push(yt,Lt,G),o.push(Lt,C,G),et+=6}a.addGroup(h,et,H),h+=et,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zn(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion))if(s.isRenderTargetTexture)console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))e[n][i]=s.slice();else e[n][i]=s}}return e}function ye(t){let e={};for(let n=0;n<t.length;n++){let i=zn(t[n]);for(let s in i)e[s]=i[s]}return e}function fo(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ca(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return Yt.workingColorSpace}var po={clone:zn,merge:ye},mo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class re extends Gn{static get type(){return"ShaderMaterial"}constructor(t){super();if(this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mo,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zn(t.uniforms),this.uniformsGroups=fo(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}}class Hs extends we{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=2000}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}var on=new D,Rr=new Rt,Cr=new Rt;class pe extends Hs{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ts*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(ts*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){on.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(on.x,on.y).multiplyScalar(-t/on.z),on.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(on.x,on.y).multiplyScalar(-t/on.z)}getViewSize(t,e){return this.getViewBounds(t,Rr,Cr),e.subVectors(Cr,Rr)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ts*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}var Un=-90,Fn=1;class ha extends we{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new pe(Un,Fn,t,e);i.layers=this.layers,this.add(i);let s=new pe(Un,Fn,t,e);s.layers=this.layers,this.add(s);let r=new pe(Un,Fn,t,e);r.layers=this.layers,this.add(r);let a=new pe(Un,Fn,t,e);a.layers=this.layers,this.add(a);let o=new pe(Un,Fn,t,e);o.layers=this.layers,this.add(o);let l=new pe(Un,Fn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,o),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ws extends be{constructor(t,e,n,i,s,r,a,o,l,c){t=t!==void 0?t:[],e=e!==void 0?e:301;super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ua extends cn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ws(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:1006}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hi(5,5,5),s=new re({name:"CubemapFromEquirect",uniforms:zn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=e;let r=new me(i,s),a=e.minFilter;if(e.minFilter===1008)e.minFilter=1006;return new ha(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}var Ms=new D,_o=new D,vo=new Gt;class ln{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ms.subVectors(n,e).cross(_o.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ms),i=this.normal.dot(n);if(i===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let s=-(t.start.dot(this.normal)+this.constant)/i;if(s<0||s>1)return null;return e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vo.getNormalMatrix(t),i=this.coplanarPoint(Ms).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var pn=new li,Li=new D;class Vs{constructor(t=new ln,e=new ln,n=new ln,i=new ln,s=new ln,r=new ln){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000){let n=this.planes,i=t.elements,s=i[0],r=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],m=i[9],v=i[10],_=i[11],p=i[12],f=i[13],b=i[14],x=i[15];if(n[0].setComponents(o-s,d-l,_-h,x-p).normalize(),n[1].setComponents(o+s,d+l,_+h,x+p).normalize(),n[2].setComponents(o+r,d+c,_+m,x+f).normalize(),n[3].setComponents(o-r,d-c,_-m,x-f).normalize(),n[4].setComponents(o-a,d-u,_-v,x-b).normalize(),e===2000)n[5].setComponents(o+a,d+u,_+v,x+b).normalize();else if(e===2001)n[5].setComponents(a,u,v,b).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pn)}intersectsSprite(t){return pn.center.set(0,0,0),pn.radius=0.7071067811865476,pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(pn)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Li.x=i.normal.x>0?t.max.x:t.min.x,Li.y=i.normal.y>0?t.max.y:t.min.y,Li.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Li)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function da(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function xo(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)m=t.HALF_FLOAT;else m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<d.length;m++){let v=d[h],_=d[m];if(_.start<=v.start+v.count+1)v.count=Math.max(v.count,_.start+_.count-v.start);else++h,d[h]=_}d.length=h+1;for(let m=0,v=d.length;m<v;m++){let _=d[m];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Hi extends ne{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,h=[],m=[],v=[],_=[];for(let p=0;p<c;p++){let f=p*d-r;for(let b=0;b<l;b++){let x=b*u-s;m.push(x,-f,0),v.push(0,0,1),_.push(b/a),_.push(1-p/o)}}for(let p=0;p<o;p++)for(let f=0;f<a;f++){let b=f+l*p,x=f+l*(p+1),E=f+1+l*(p+1),O=f+1+l*p;h.push(b,x,O),h.push(x,E,O)}this.setIndex(h),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hi(t.width,t.height,t.widthSegments,t.heightSegments)}}var yo=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mo=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,So=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bo=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ao=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eo=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,To=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ro=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Co=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Io=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Po=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Do=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fo=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,No=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Oo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zo=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ko=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Go=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ho=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wo=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xo=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zo=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$o="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ko=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qo=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,el=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,il=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,al=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ol=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ll=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ul=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ml=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gl=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_l=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xl=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`;var yl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ml=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bl=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wl=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Al=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,El=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tl=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cl=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Il=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ll=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ul=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ol=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gl=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hl=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wl=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vl=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xl=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ql=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yl=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zl=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jl=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$l=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kl=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ql=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ec=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nc=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ic=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ac=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lc=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pc=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gc=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_c=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sc=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ac=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ec=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ic=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Uc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oc=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Bc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gc=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$c=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:yo,alphahash_pars_fragment:Mo,alphamap_fragment:So,alphamap_pars_fragment:bo,alphatest_fragment:wo,alphatest_pars_fragment:Ao,aomap_fragment:Eo,aomap_pars_fragment:To,batching_pars_vertex:Ro,batching_vertex:Co,begin_vertex:Io,beginnormal_vertex:Po,bsdfs:Lo,iridescence_fragment:Do,bumpmap_pars_fragment:Uo,clipping_planes_fragment:Fo,clipping_planes_pars_fragment:No,clipping_planes_pars_vertex:Oo,clipping_planes_vertex:Bo,color_fragment:zo,color_pars_fragment:ko,color_pars_vertex:Go,color_vertex:Ho,common:Wo,cube_uv_reflection_fragment:Vo,defaultnormal_vertex:Xo,displacementmap_pars_vertex:qo,displacementmap_vertex:Yo,emissivemap_fragment:Zo,emissivemap_pars_fragment:Jo,colorspace_fragment:$o,colorspace_pars_fragment:Ko,envmap_fragment:Qo,envmap_common_pars_fragment:jo,envmap_pars_fragment:tl,envmap_pars_vertex:el,envmap_physical_pars_fragment:dl,envmap_vertex:nl,fog_vertex:il,fog_pars_vertex:sl,fog_fragment:rl,fog_pars_fragment:al,gradientmap_pars_fragment:ol,lightmap_pars_fragment:ll,lights_lambert_fragment:cl,lights_lambert_pars_fragment:hl,lights_pars_begin:ul,lights_toon_fragment:fl,lights_toon_pars_fragment:pl,lights_phong_fragment:ml,lights_phong_pars_fragment:gl,lights_physical_fragment:_l,lights_physical_pars_fragment:vl,lights_fragment_begin:xl,lights_fragment_maps:yl,lights_fragment_end:Ml,logdepthbuf_fragment:Sl,logdepthbuf_pars_fragment:bl,logdepthbuf_pars_vertex:wl,logdepthbuf_vertex:Al,map_fragment:El,map_pars_fragment:Tl,map_particle_fragment:Rl,map_particle_pars_fragment:Cl,metalnessmap_fragment:Il,metalnessmap_pars_fragment:Pl,morphinstance_vertex:Ll,morphcolor_vertex:Dl,morphnormal_vertex:Ul,morphtarget_pars_vertex:Fl,morphtarget_vertex:Nl,normal_fragment_begin:Ol,normal_fragment_maps:Bl,normal_pars_fragment:zl,normal_pars_vertex:kl,normal_vertex:Gl,normalmap_pars_fragment:Hl,clearcoat_normal_fragment_begin:Wl,clearcoat_normal_fragment_maps:Vl,clearcoat_pars_fragment:Xl,iridescence_pars_fragment:ql,opaque_fragment:Yl,packing:Zl,premultiplied_alpha_fragment:Jl,project_vertex:$l,dithering_fragment:Kl,dithering_pars_fragment:Ql,roughnessmap_fragment:jl,roughnessmap_pars_fragment:tc,shadowmap_pars_fragment:ec,shadowmap_pars_vertex:nc,shadowmap_vertex:ic,shadowmask_pars_fragment:sc,skinbase_vertex:rc,skinning_pars_vertex:ac,skinning_vertex:oc,skinnormal_vertex:lc,specularmap_fragment:cc,specularmap_pars_fragment:hc,tonemapping_fragment:uc,tonemapping_pars_fragment:dc,transmission_fragment:fc,transmission_pars_fragment:pc,uv_pars_fragment:mc,uv_pars_vertex:gc,uv_vertex:_c,worldpos_vertex:vc,background_vert:xc,background_frag:yc,backgroundCube_vert:Mc,backgroundCube_frag:Sc,cube_vert:bc,cube_frag:wc,depth_vert:Ac,depth_frag:Ec,distanceRGBA_vert:Tc,distanceRGBA_frag:Rc,equirect_vert:Cc,equirect_frag:Ic,linedashed_vert:Pc,linedashed_frag:Lc,meshbasic_vert:Dc,meshbasic_frag:Uc,meshlambert_vert:Fc,meshlambert_frag:Nc,meshmatcap_vert:Oc,meshmatcap_frag:Bc,meshnormal_vert:zc,meshnormal_frag:kc,meshphong_vert:Gc,meshphong_frag:Hc,meshphysical_vert:Wc,meshphysical_frag:Vc,meshtoon_vert:Xc,meshtoon_frag:qc,points_vert:Yc,points_frag:Zc,shadow_vert:Jc,shadow_frag:$c,sprite_vert:Kc,sprite_frag:Qc},ft={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Rt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},He={basic:{uniforms:ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:ye([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:ye([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:ye([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new qt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:ye([ft.points,ft.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:ye([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:ye([ft.common,ft.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:ye([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:ye([ft.sprite,ft.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:ye([ft.common,ft.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:ye([ft.lights,ft.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};He.physical={uniforms:ye([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Di={r:0,b:0,g:0},mn=new Qe,jc=new le;function th(t,e,n,i,s,r,a){let o=new qt(0),l=r===!0?0:1,c,u,d=null,h=0,m=null;function v(b){let x=b.isScene===!0?b.background:null;if(x&&x.isTexture)x=(b.backgroundBlurriness>0?n:e).get(x);return x}function _(b){let x=!1,E=v(b);if(E===null)f(o,l);else if(E&&E.isColor)f(E,1),x=!0;let O=t.xr.getEnvironmentBlendMode();if(O==="additive")i.buffers.color.setClear(0,0,0,1,a);else if(O==="alpha-blend")i.buffers.color.setClear(0,0,0,0,a);if(t.autoClear||x)i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function p(b,x){let E=v(x);if(E&&(E.isCubeTexture||E.mapping===306)){if(u===void 0)u=new me(new hi(1,1,1),new re({name:"BackgroundCubeMaterial",uniforms:zn(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u);if(mn.copy(x.backgroundRotation),mn.x*=-1,mn.y*=-1,mn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1)mn.y*=-1,mn.z*=-1;if(u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jc.makeRotationFromEuler(mn)),u.material.toneMapped=Yt.getTransfer(E.colorSpace)!=="srgb",d!==E||h!==E.version||m!==t.toneMapping)u.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping;u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)}else if(E&&E.isTexture){if(c===void 0)c=new me(new Hi(2,2),new re({name:"BackgroundMaterial",uniforms:zn(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c);if(c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(E.colorSpace)!=="srgb",E.matrixAutoUpdate===!0)E.updateMatrix();if(c.material.uniforms.uvTransform.value.copy(E.matrix),d!==E||h!==E.version||m!==t.toneMapping)c.material.needsUpdate=!0,d=E,h=E.version,m=t.toneMapping;c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)}}function f(b,x){b.getRGB(Di,ca(t)),i.buffers.color.setClear(Di.r,Di.g,Di.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(o,l)},render:_,addToRenderList:p}}function eh(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(S,R,N,L,B){let q=!1,z=d(L,N,R);if(r!==z)r=z,c(r.object);if(q=m(S,L,N,B),q)v(S,L,N,B);if(B!==null)e.update(B,t.ELEMENT_ARRAY_BUFFER);if(q||a){if(a=!1,E(S,R,N,L),B!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer)}}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,R,N){let L=N.wireframe===!0,B=i[S.id];if(B===void 0)B={},i[S.id]=B;let q=B[R.id];if(q===void 0)q={},B[R.id]=q;let z=q[L];if(z===void 0)z=h(l()),q[L]=z;return z}function h(S){let R=[],N=[],L=[];for(let B=0;B<n;B++)R[B]=0,N[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:L,object:S,attributes:{},index:null}}function m(S,R,N,L){let B=r.attributes,q=R.attributes,z=0,et=N.getAttributes();for(let W in et)if(et[W].location>=0){let ut=B[W],yt=q[W];if(yt===void 0){if(W==="instanceMatrix"&&S.instanceMatrix)yt=S.instanceMatrix;if(W==="instanceColor"&&S.instanceColor)yt=S.instanceColor}if(ut===void 0)return!0;if(ut.attribute!==yt)return!0;if(yt&&ut.data!==yt.data)return!0;z++}if(r.attributesNum!==z)return!0;if(r.index!==L)return!0;return!1}function v(S,R,N,L){let B={},q=R.attributes,z=0,et=N.getAttributes();for(let W in et)if(et[W].location>=0){let ut=q[W];if(ut===void 0){if(W==="instanceMatrix"&&S.instanceMatrix)ut=S.instanceMatrix;if(W==="instanceColor"&&S.instanceColor)ut=S.instanceColor}let yt={};if(yt.attribute=ut,ut&&ut.data)yt.data=ut.data;B[W]=yt,z++}r.attributes=B,r.attributesNum=z,r.index=L}function _(){let S=r.newAttributes;for(let R=0,N=S.length;R<N;R++)S[R]=0}function p(S){f(S,0)}function f(S,R){let N=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;if(N[S]=1,L[S]===0)t.enableVertexAttribArray(S),L[S]=1;if(B[S]!==R)t.vertexAttribDivisor(S,R),B[S]=R}function b(){let S=r.newAttributes,R=r.enabledAttributes;for(let N=0,L=R.length;N<L;N++)if(R[N]!==S[N])t.disableVertexAttribArray(N),R[N]=0}function x(S,R,N,L,B,q,z){if(z===!0)t.vertexAttribIPointer(S,R,N,B,q);else t.vertexAttribPointer(S,R,N,L,B,q)}function E(S,R,N,L){_();let B=L.attributes,q=N.getAttributes(),z=R.defaultAttributeValues;for(let et in q){let W=q[et];if(W.location>=0){let ht=B[et];if(ht===void 0){if(et==="instanceMatrix"&&S.instanceMatrix)ht=S.instanceMatrix;if(et==="instanceColor"&&S.instanceColor)ht=S.instanceColor}if(ht!==void 0){let ut=ht.normalized,yt=ht.itemSize,Lt=e.get(ht);if(Lt===void 0)continue;let{buffer:C,type:G,bytesPerElement:Y}=Lt,xt=G===t.INT||G===t.UNSIGNED_INT||ht.gpuType===1013;if(ht.isInterleavedBufferAttribute){let lt=ht.data,Mt=lt.stride,Dt=ht.offset;if(lt.isInstancedInterleavedBuffer){for(let At=0;At<W.locationSize;At++)f(W.location+At,lt.meshPerAttribute);if(S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=lt.meshPerAttribute*lt.count}else for(let At=0;At<W.locationSize;At++)p(W.location+At);t.bindBuffer(t.ARRAY_BUFFER,C);for(let At=0;At<W.locationSize;At++)x(W.location+At,yt/W.locationSize,G,ut,Mt*Y,(Dt+yt/W.locationSize*At)*Y,xt)}else{if(ht.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)f(W.location+lt,ht.meshPerAttribute);if(S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0)L._maxInstanceCount=ht.meshPerAttribute*ht.count}else for(let lt=0;lt<W.locationSize;lt++)p(W.location+lt);t.bindBuffer(t.ARRAY_BUFFER,C);for(let lt=0;lt<W.locationSize;lt++)x(W.location+lt,yt/W.locationSize,G,ut,yt*Y,yt/W.locationSize*lt*Y,xt)}}else if(z!==void 0){let ut=z[et];if(ut!==void 0)switch(ut.length){case 2:t.vertexAttrib2fv(W.location,ut);break;case 3:t.vertexAttrib3fv(W.location,ut);break;case 4:t.vertexAttrib4fv(W.location,ut);break;default:t.vertexAttrib1fv(W.location,ut)}}}}b()}function O(){H();for(let S in i){let R=i[S];for(let N in R){let L=R[N];for(let B in L)u(L[B].object),delete L[B];delete R[N]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;let R=i[S.id];for(let N in R){let L=R[N];for(let B in L)u(L[B].object),delete L[B];delete R[N]}delete i[S.id]}function T(S){for(let R in i){let N=i[R];if(N[S.id]===void 0)continue;let L=N[S.id];for(let B in L)u(L[B].object),delete L[B];delete N[S.id]}}function H(){if(M(),a=!0,r===s)return;r=s,c(r.object)}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:H,resetDefaultState:M,dispose:O,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function nh(t,e,n){let i;function s(c){i=c}function r(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,d){if(d===0)return;t.drawArraysInstanced(i,c,u,d),n.update(u,i,d)}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];n.update(m,i,1)}function l(c,u,d,h){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*h[_];n.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ih(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){if(T!==1023&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(T){let H=T===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(T!==1009&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==1015&&!H)return!1;return!0}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),O=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:O,maxSamples:A}}function sh(t){let e=this,n=null,i=0,s=!1,r=!1,a=new ln,o=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||s;return s=h,i=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){let{clippingPlanes:v,clipIntersection:_,clipShadows:p}=d,f=t.get(d);if(!s||v===null||v.length===0||r&&!p)if(r)u(null);else c();else{let b=r?0:i,x=b*4,E=f.clippingState||null;l.value=E,E=u(v,h,x,m);for(let O=0;O!==x;++O)E[O]=n[O];f.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(d,h,m,v){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,v!==!0||p===null){let f=m+_*4,b=h.matrixWorldInverse;if(o.getNormalMatrix(b),p===null||p.length<f)p=new Float32Array(f);for(let x=0,E=m;x!==_;++x,E+=4)a.copy(d[x]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function rh(t){let e=new WeakMap;function n(a,o){if(o===303)a.mapping=301;else if(o===304)a.mapping=302;return a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===303||o===304)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ua(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);if(l!==void 0)e.delete(o),l.dispose()}function r(){e=new WeakMap}return{get:i,dispose:r}}class fa extends Hs{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}var On=4,Ir=[0.125,0.215,0.35,0.446,0.526,0.582],vn=20,Ss=new fa,Pr=new qt,bs=null,ws=0,As=0,Es=!1,_n=(1+Math.sqrt(5))/2,Nn=1/_n,Lr=[new D(-_n,Nn,0),new D(_n,Nn,0),new D(-Nn,0,_n),new D(Nn,0,_n),new D(0,_n,-Nn),new D(0,_n,Nn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ls{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=0.1,i=100){bs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();if(s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0)this._blur(s,0,0,e);return this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Fr(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Ur(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bs,ws,As),this._renderer.xr.enabled=Es,t.scissorTest=!1,Ui(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===301||t.mapping===302)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);bs=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),As=this._renderer.getActiveMipmapLevel(),Es=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:"srgb-linear",depthBuffer:!1},i=Dr(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=Dr(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ah(s)),this._blurMaterial=oh(s,t,e)}return i}_compileMaterial(t){let e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Ss)}_sceneToCubeUV(t,e,n,i){let a=new pe(90,1,e,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,{autoClear:u,toneMapping:d}=c;c.getClearColor(Pr),c.toneMapping=0,c.autoClear=!1;let h=new ci({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),m=new me(new hi,h),v=!1,_=t.background;if(_){if(_.isColor)h.color.copy(_),t.background=null,v=!0}else h.color.copy(Pr),v=!0;for(let p=0;p<6;p++){let f=p%3;if(f===0)a.up.set(0,o[p],0),a.lookAt(l[p],0,0);else if(f===1)a.up.set(0,0,o[p]),a.lookAt(0,l[p],0);else a.up.set(0,o[p],0),a.lookAt(0,0,l[p]);let b=this._cubeSize;if(Ui(i,f*b,p>2?b:0,b,b),c.setRenderTarget(i),v)c.render(m,a);c.render(t,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=u,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===301||t.mapping===302;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Fr();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Ur();let s=i?this._cubemapMaterial:this._equirectMaterial,r=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Ui(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,Ss)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lr[(i-s-1)%Lr.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")console.error("blur direction must be either latitudinal or longitudinal!");let c=3,u=new me(this._lodPlanes[i],l),d=l.uniforms,h=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*vn-1),v=s/m,_=isFinite(s)?1+Math.floor(c*v):vn;if(_>vn)console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${vn}`);let p=[],f=0;for(let A=0;A<vn;++A){let T=A/v,H=Math.exp(-T*T/2);if(p.push(H),A===0)f+=H;else if(A<_)f+=2*H}for(let A=0;A<p.length;A++)p[A]=p[A]/f;if(d.envMap.value=t.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a)d.poleAxis.value=a;let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;let x=this._sizeLods[i],E=3*x*(i>b-On?i-b+On:0),O=4*(this._cubeSize-x);Ui(e,E,O,3*x,2*x),o.setRenderTarget(e),o.render(u,Ss)}}function ah(t){let e=[],n=[],i=[],s=t,r=t-On+1+Ir.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;if(a>t-On)l=Ir[a-t+On-1];else if(a===0)l=0;i.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,_=3,p=2,f=1,b=new Float32Array(_*v*m),x=new Float32Array(p*v*m),E=new Float32Array(f*v*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,H=A>2?0:-1,M=[T,H,0,T+0.6666666666666666,H,0,T+0.6666666666666666,H+1,0,T,H,0,T+0.6666666666666666,H+1,0,T,H+1,0];b.set(M,_*v*A),x.set(h,p*v*A);let S=[A,A,A,A,A,A];E.set(S,f*v*A)}let O=new ne;if(O.setAttribute("position",new Ht(b,_)),O.setAttribute("uv",new Ht(x,p)),O.setAttribute("faceIndex",new Ht(E,f)),e.push(O),s>On)s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Dr(t,e,n){let i=new cn(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ui(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function oh(t,e,n){let i=new Float32Array(vn),s=new D(0,1,0);return new re({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ur(){return new re({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fr(){return new re({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Xs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lh(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===303||l===304,u=l===301||l===302;if(c||u){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h){if(n===null)n=new Ls(t);return d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture}else if(d!==void 0)return d.texture;else{let m=o.image;if(c&&m&&m.height>0||u&&m&&s(m)){if(n===null)n=new Ls(t);return d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)if(o[u]!==void 0)l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);if(c!==void 0)e.delete(l),c.dispose()}function a(){if(e=new WeakMap,n!==null)n.dispose(),n=null}return{get:i,dispose:a}}function ch(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)ti("THREE.WebGLRenderer: "+i+" extension not supported.");return s}}}function hh(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;if(h.index!==null)e.remove(h.index);for(let v in h.attributes)e.remove(h.attributes[v]);for(let v in h.morphAttributes){let _=h.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete s[h.id];let m=r.get(h);if(m)e.remove(m),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(d,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(d){let h=d.attributes;for(let v in h)e.update(h[v],t.ARRAY_BUFFER);let m=d.morphAttributes;for(let v in m){let _=m[v];for(let p=0,f=_.length;p<f;p++)e.update(_[p],t.ARRAY_BUFFER)}}function c(d){let h=[],m=d.index,v=d.attributes.position,_=0;if(m!==null){let b=m.array;_=m.version;for(let x=0,E=b.length;x<E;x+=3){let O=b[x+0],A=b[x+1],T=b[x+2];h.push(O,A,A,T,T,O)}}else if(v!==void 0){let b=v.array;_=v.version;for(let x=0,E=b.length/3-1;x<E;x+=3){let O=x+0,A=x+1,T=x+2;h.push(O,A,A,T,T,O)}}else return;let p=new((sa(h))?Gs:ks)(h,1);p.version=_;let f=r.get(d);if(f)e.remove(f);r.set(d,p)}function u(d){let h=r.get(d);if(h){let m=d.index;if(m!==null){if(h.version<m.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function uh(t,e,n){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,m){t.drawElements(i,m,r,h*a),n.update(m,i,1)}function c(h,m,v){if(v===0)return;t.drawElementsInstanced(i,m,r,h*a,v),n.update(m,i,v)}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];n.update(p,i,1)}function d(h,m,v,_){if(v===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<h.length;f++)c(h[f]/a,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,_,0,v);let f=0;for(let b=0;b<v;b++)f+=m[b]*_[b];n.update(f,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function dh(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function fh(t,e,n){let i=new WeakMap,s=new ce;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",M)};if(h!==void 0)h.texture.dispose();let m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],x=0;if(m===!0)x=1;if(v===!0)x=2;if(_===!0)x=3;let E=o.attributes.position.count*x,O=1;if(E>e.maxTextureSize)O=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize;let A=new Float32Array(E*O*4*d),T=new Os(A,E,O,d);T.type=1015,T.needsUpdate=!0;let H=x*4;for(let S=0;S<d;S++){let R=p[S],N=f[S],L=b[S],B=E*O*4*S;for(let q=0;q<R.count;q++){let z=q*H;if(m===!0)s.fromBufferAttribute(R,q),A[B+z+0]=s.x,A[B+z+1]=s.y,A[B+z+2]=s.z,A[B+z+3]=0;if(v===!0)s.fromBufferAttribute(N,q),A[B+z+4]=s.x,A[B+z+5]=s.y,A[B+z+6]=s.z,A[B+z+7]=0;if(_===!0)s.fromBufferAttribute(L,q),A[B+z+8]=s.x,A[B+z+9]=s.y,A[B+z+10]=s.z,A[B+z+11]=L.itemSize===4?s.w:1}}h={count:d,texture:T,size:new Rt(E,O)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function ph(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c)e.update(d),s.set(d,c);if(l.isInstancedMesh){if(l.hasEventListener("dispose",o)===!1)l.addEventListener("dispose",o);if(s.get(l)!==c){if(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null)n.update(l.instanceColor,t.ARRAY_BUFFER);s.set(l,c)}}if(l.isSkinnedMesh){let h=l.skeleton;if(s.get(h)!==c)h.update(),s.set(h,c)}return d}function a(){s=new WeakMap}function o(l){let c=l.target;if(c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null)n.remove(c.instanceColor)}return{update:r,dispose:a}}class qs extends be{constructor(t,e,n,i,s,r,a,o,l,c=1026){if(c!==1026&&c!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");if(n===void 0&&c===1026)n=1014;if(n===void 0&&c===1027)n=1020;super(null,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:1003,this.minFilter=o!==void 0?o:1003,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}var pa=new be,Nr=new qs(1,1),ma=new Os,ga=new oa,_a=new Ws,Or=[],Br=[],zr=new Float32Array(16),kr=new Float32Array(9),Gr=new Float32Array(4);function Hn(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Or[s];if(r===void 0)r=new Float32Array(s),Or[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function ue(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function de(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Wi(t,e){let n=Br[e];if(n===void 0)n=new Int32Array(e),Br[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function mh(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function gh(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ue(n,e))return;t.uniform2fv(this.addr,e),de(n,e)}}function _h(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(ue(n,e))return;t.uniform3fv(this.addr,e),de(n,e)}}function vh(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ue(n,e))return;t.uniform4fv(this.addr,e),de(n,e)}}function xh(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ue(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),de(n,e)}else{if(ue(n,i))return;Gr.set(i),t.uniformMatrix2fv(this.addr,!1,Gr),de(n,i)}}function yh(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ue(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),de(n,e)}else{if(ue(n,i))return;kr.set(i),t.uniformMatrix3fv(this.addr,!1,kr),de(n,i)}}function Mh(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(ue(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),de(n,e)}else{if(ue(n,i))return;zr.set(i),t.uniformMatrix4fv(this.addr,!1,zr),de(n,i)}}function Sh(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function bh(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ue(n,e))return;t.uniform2iv(this.addr,e),de(n,e)}}function wh(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ue(n,e))return;t.uniform3iv(this.addr,e),de(n,e)}}function Ah(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ue(n,e))return;t.uniform4iv(this.addr,e),de(n,e)}}function Eh(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function Th(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(ue(n,e))return;t.uniform2uiv(this.addr,e),de(n,e)}}function Rh(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(ue(n,e))return;t.uniform3uiv(this.addr,e),de(n,e)}}function Ch(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(ue(n,e))return;t.uniform4uiv(this.addr,e),de(n,e)}}function Ih(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Nr.compareFunction=515,r=Nr;else r=pa;n.setTexture2D(e||r,s)}function Ph(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||ga,s)}function Lh(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||_a,s)}function Dh(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||ma,s)}function Uh(t){switch(t){case 5126:return mh;case 35664:return gh;case 35665:return _h;case 35666:return vh;case 35674:return xh;case 35675:return yh;case 35676:return Mh;case 5124:case 35670:return Sh;case 35667:case 35671:return bh;case 35668:case 35672:return wh;case 35669:case 35673:return Ah;case 5125:return Eh;case 36294:return Th;case 36295:return Rh;case 36296:return Ch;case 35678:case 36198:case 36298:case 36306:case 35682:return Ih;case 35679:case 36299:case 36307:return Ph;case 35680:case 36300:case 36308:case 36293:return Lh;case 36289:case 36303:case 36311:case 36292:return Dh}}function Fh(t,e){t.uniform1fv(this.addr,e)}function Nh(t,e){let n=Hn(e,this.size,2);t.uniform2fv(this.addr,n)}function Oh(t,e){let n=Hn(e,this.size,3);t.uniform3fv(this.addr,n)}function Bh(t,e){let n=Hn(e,this.size,4);t.uniform4fv(this.addr,n)}function zh(t,e){let n=Hn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kh(t,e){let n=Hn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Gh(t,e){let n=Hn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Hh(t,e){t.uniform1iv(this.addr,e)}function Wh(t,e){t.uniform2iv(this.addr,e)}function Vh(t,e){t.uniform3iv(this.addr,e)}function Xh(t,e){t.uniform4iv(this.addr,e)}function qh(t,e){t.uniform1uiv(this.addr,e)}function Yh(t,e){t.uniform2uiv(this.addr,e)}function Zh(t,e){t.uniform3uiv(this.addr,e)}function Jh(t,e){t.uniform4uiv(this.addr,e)}function $h(t,e,n){let i=this.cache,s=e.length,r=Wi(n,s);if(!ue(i,r))t.uniform1iv(this.addr,r),de(i,r);for(let a=0;a!==s;++a)n.setTexture2D(e[a]||pa,r[a])}function Kh(t,e,n){let i=this.cache,s=e.length,r=Wi(n,s);if(!ue(i,r))t.uniform1iv(this.addr,r),de(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||ga,r[a])}function Qh(t,e,n){let i=this.cache,s=e.length,r=Wi(n,s);if(!ue(i,r))t.uniform1iv(this.addr,r),de(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||_a,r[a])}function jh(t,e,n){let i=this.cache,s=e.length,r=Wi(n,s);if(!ue(i,r))t.uniform1iv(this.addr,r),de(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||ma,r[a])}function tu(t){switch(t){case 5126:return Fh;case 35664:return Nh;case 35665:return Oh;case 35666:return Bh;case 35674:return zh;case 35675:return kh;case 35676:return Gh;case 5124:case 35670:return Hh;case 35667:case 35671:return Wh;case 35668:case 35672:return Vh;case 35669:case 35673:return Xh;case 5125:return qh;case 36294:return Yh;case 36295:return Zh;case 36296:return Jh;case 35678:case 36198:case 36298:case 36306:case 35682:return $h;case 35679:case 36299:case 36307:return Kh;case 35680:case 36300:case 36308:case 36293:return Qh;case 36289:case 36303:case 36311:case 36292:return jh}}class va{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uh(e.type)}}class xa{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tu(e.type)}}class ya{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Ts=/(\w+)(\])?(\[|\.)?/g;function Hr(t,e){t.seq.push(e),t.map[e.id]=e}function eu(t,e,n){let i=t.name,s=i.length;Ts.lastIndex=0;while(!0){let r=Ts.exec(i),a=Ts.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Hr(n,c===void 0?new va(o,t,e):new xa(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new ya(o),Hr(n,d);n=d}}}class ni{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);eu(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Wr(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var nu=37297,iu=0;function su(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Vr=new Gt;function ru(t){Yt._getMatrix(Vr,Yt.workingColorSpace,t);let e=`mat3( ${Vr.elements.map((n)=>n.toFixed(4))} )`;switch(Yt.getTransfer(t)){case"linear":return[e,"LinearTransferOETF"];case"srgb":return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xr(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+su(t.getShaderSource(e),a)}else return s}function au(t,e){let n=ru(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function ou(t,e){let n;switch(e){case 1:n="Linear";break;case 2:n="Reinhard";break;case 3:n="Cineon";break;case 4:n="ACESFilmic";break;case 6:n="AgX";break;case 7:n="Neutral";break;case 5:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Fi=new D;function lu(){Yt.getLuminanceCoefficients(Fi);let t=Fi.x.toFixed(4),e=Fi.y.toFixed(4),n=Fi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function cu(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ei).join(`
`)}function hu(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function uu(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ei(t){return t!==""}function qr(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yr(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var du=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ds(t){return t.replace(du,pu)}var fu=new Map;function pu(t,e){let n=Vt[e];if(n===void 0){let i=fu.get(e);if(i!==void 0)n=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("Can not resolve #include <"+e+">")}return Ds(n)}var mu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zr(t){return t.replace(mu,gu)}function gu(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jr(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}function _u(t){let e="SHADOWMAP_TYPE_BASIC";if(t.shadowMapType===1)e="SHADOWMAP_TYPE_PCF";else if(t.shadowMapType===2)e="SHADOWMAP_TYPE_PCF_SOFT";else if(t.shadowMapType===3)e="SHADOWMAP_TYPE_VSM";return e}function vu(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xu(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case 302:e="ENVMAP_MODE_REFRACTION";break}return e}function yu(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function Mu(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Su(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=_u(n),c=vu(n),u=xu(n),d=yu(n),h=Mu(n),m=cu(n),v=hu(r),_=s.createProgram(),p,f,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ei).join(`
`),p.length>0)p+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ei).join(`
`),f.length>0)f+=`
`}else p=[Jr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),f=[Jr(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Vt.tonemapping_pars_fragment:"",n.toneMapping!==0?ou("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,au("linearToOutputTexel",n.outputColorSpace),lu(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ei).join(`
`);if(a=Ds(a),a=qr(a,n),a=Yr(a,n),o=Ds(o),o=qr(o,n),o=Yr(o,n),a=Zr(a),o=Zr(o),n.isRawShaderMaterial!==!0)b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let x=b+p+a,E=b+f+o,O=Wr(s,s.VERTEX_SHADER,x),A=Wr(s,s.FRAGMENT_SHADER,E);if(s.attachShader(_,O),s.attachShader(_,A),n.index0AttributeName!==void 0)s.bindAttribLocation(_,0,n.index0AttributeName);else if(n.morphTargets===!0)s.bindAttribLocation(_,0,"position");s.linkProgram(_);function T(R){if(t.debug.checkShaderErrors){let N=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(O).trim(),B=s.getShaderInfoLog(A).trim(),q=!0,z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,_,O,A);else{let et=Xr(s,O,"vertex"),W=Xr(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+et+`
`+W)}else if(N!=="")console.warn("THREE.WebGLProgram: Program Info Log:",N);else if(L===""||B==="")z=!1;if(z)R.diagnostics={runnable:q,programLog:N,vertexShader:{log:L,prefix:p},fragmentShader:{log:B,prefix:f}}}s.deleteShader(O),s.deleteShader(A),H=new ni(s,_),M=uu(s,_)}let H;this.getUniforms=function(){if(H===void 0)T(this);return H};let M;this.getAttributes=function(){if(M===void 0)T(this);return M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(S===!1)S=s.getProgramParameter(_,nu);return S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iu++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=A,this}var bu=0;class Ma{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let{vertexShader:e,fragmentShader:n}=t,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);if(r.has(i)===!1)r.add(i),i.usedTimes++;if(r.has(s)===!1)r.add(s),s.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Sa(t),e.set(t,n);return n}}class Sa{constructor(t){this.id=bu++,this.code=t,this.usedTimes=0}}function wu(t,e,n,i,s,r,a){let o=new zs,l=new Ma,c=new Set,u=[],{logarithmicDepthBuffer:d,vertexTextures:h,precision:m}=s,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){if(c.add(M),M===0)return"uv";return`uv${M}`}function p(M,S,R,N,L){let B=N.fog,q=L.geometry,z=M.isMeshStandardMaterial?N.environment:null,et=(M.isMeshStandardMaterial?n:e).get(M.envMap||z),W=!!et&&et.mapping===306?et.image.height:null,ht=v[M.type];if(M.precision!==null){if(m=s.getMaxPrecision(M.precision),m!==M.precision)console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead.")}let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=ut!==void 0?ut.length:0,Lt=0;if(q.morphAttributes.position!==void 0)Lt=1;if(q.morphAttributes.normal!==void 0)Lt=2;if(q.morphAttributes.color!==void 0)Lt=3;let C,G,Y,xt;if(ht){let $t=He[ht];C=$t.vertexShader,G=$t.fragmentShader}else C=M.vertexShader,G=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);let lt=t.getRenderTarget(),Mt=t.state.buffers.depth.getReversed(),Dt=L.isInstancedMesh===!0,At=L.isBatchedMesh===!0,Et=!!M.map,Xt=!!M.matcap,I=!!et,Zt=!!M.aoMap,Ft=!!M.lightMap,Ot=!!M.bumpMap,J=!!M.normalMap,Tt=!!M.displacementMap,ot=!!M.emissiveMap,dt=!!M.metalnessMap,w=!!M.roughnessMap,g=M.anisotropy>0,k=M.clearcoat>0,Q=M.dispersion>0,nt=M.iridescence>0,Z=M.sheen>0,j=M.transmission>0,st=g&&!!M.anisotropyMap,at=k&&!!M.clearcoatMap,It=k&&!!M.clearcoatNormalMap,it=k&&!!M.clearcoatRoughnessMap,pt=nt&&!!M.iridescenceMap,zt=nt&&!!M.iridescenceThicknessMap,Pt=Z&&!!M.sheenColorMap,mt=Z&&!!M.sheenRoughnessMap,Ut=!!M.specularMap,Bt=!!M.specularColorMap,te=!!M.specularIntensityMap,P=j&&!!M.transmissionMap,rt=j&&!!M.thicknessMap,K=!!M.gradientMap,tt=!!M.alphaMap,vt=M.alphaTest>0,gt=!!M.alphaHash,Wt=!!M.extensions,oe=0;if(M.toneMapped){if(lt===null||lt.isXRRenderTarget===!0)oe=t.toneMapping}let ge={shaderID:ht,shaderType:M.type,shaderName:M.name,vertexShader:C,fragmentShader:G,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:At,batchingColor:At&&L._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&L.instanceColor!==null,instancingMorph:Dt&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:lt===null?t.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:"srgb-linear",alphaToCoverage:!!M.alphaToCoverage,map:Et,matcap:Xt,envMap:I,envMapMode:I&&et.mapping,envMapCubeUVHeight:W,aoMap:Zt,lightMap:Ft,bumpMap:Ot,normalMap:J,displacementMap:h&&Tt,emissiveMap:ot,normalMapObjectSpace:J&&M.normalMapType===1,normalMapTangentSpace:J&&M.normalMapType===0,metalnessMap:dt,roughnessMap:w,anisotropy:g,anisotropyMap:st,clearcoat:k,clearcoatMap:at,clearcoatNormalMap:It,clearcoatRoughnessMap:it,dispersion:Q,iridescence:nt,iridescenceMap:pt,iridescenceThicknessMap:zt,sheen:Z,sheenColorMap:Pt,sheenRoughnessMap:mt,specularMap:Ut,specularColorMap:Bt,specularIntensityMap:te,transmission:j,transmissionMap:P,thicknessMap:rt,gradientMap:K,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:vt,alphaHash:gt,combine:M.combine,mapUv:Et&&_(M.map.channel),aoMapUv:Zt&&_(M.aoMap.channel),lightMapUv:Ft&&_(M.lightMap.channel),bumpMapUv:Ot&&_(M.bumpMap.channel),normalMapUv:J&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:ot&&_(M.emissiveMap.channel),metalnessMapUv:dt&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:at&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:It&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ut&&_(M.specularMap.channel),specularColorMapUv:Bt&&_(M.specularColorMap.channel),specularIntensityMapUv:te&&_(M.specularIntensityMap.channel),transmissionMapUv:P&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:tt&&_(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(J||g),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!q.attributes.uv&&(Et||tt),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Mt,skinning:L.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:Et&&M.map.isVideoTexture===!0&&Yt.getTransfer(M.map.colorSpace)==="srgb",decodeVideoTextureEmissive:ot&&M.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(M.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Wt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&M.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function f(M){let S=[];if(M.shaderID)S.push(M.shaderID);else S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);if(M.isRawShaderMaterial===!1)b(S,M),x(S,M),S.push(t.outputColorSpace);return S.push(M.customProgramCacheKey),S.join()}function b(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){if(o.disableAll(),S.supportsVertexTextures)o.enable(0);if(S.instancing)o.enable(1);if(S.instancingColor)o.enable(2);if(S.instancingMorph)o.enable(3);if(S.matcap)o.enable(4);if(S.envMap)o.enable(5);if(S.normalMapObjectSpace)o.enable(6);if(S.normalMapTangentSpace)o.enable(7);if(S.clearcoat)o.enable(8);if(S.iridescence)o.enable(9);if(S.alphaTest)o.enable(10);if(S.vertexColors)o.enable(11);if(S.vertexAlphas)o.enable(12);if(S.vertexUv1s)o.enable(13);if(S.vertexUv2s)o.enable(14);if(S.vertexUv3s)o.enable(15);if(S.vertexTangents)o.enable(16);if(S.anisotropy)o.enable(17);if(S.alphaHash)o.enable(18);if(S.batching)o.enable(19);if(S.dispersion)o.enable(20);if(S.batchingColor)o.enable(21);if(M.push(o.mask),o.disableAll(),S.fog)o.enable(0);if(S.useFog)o.enable(1);if(S.flatShading)o.enable(2);if(S.logarithmicDepthBuffer)o.enable(3);if(S.reverseDepthBuffer)o.enable(4);if(S.skinning)o.enable(5);if(S.morphTargets)o.enable(6);if(S.morphNormals)o.enable(7);if(S.morphColors)o.enable(8);if(S.premultipliedAlpha)o.enable(9);if(S.shadowMapEnabled)o.enable(10);if(S.doubleSided)o.enable(11);if(S.flipSided)o.enable(12);if(S.useDepthPacking)o.enable(13);if(S.dithering)o.enable(14);if(S.transmission)o.enable(15);if(S.sheen)o.enable(16);if(S.opaque)o.enable(17);if(S.pointsUvs)o.enable(18);if(S.decodeVideoTexture)o.enable(19);if(S.decodeVideoTextureEmissive)o.enable(20);if(S.alphaToCoverage)o.enable(21);M.push(o.mask)}function E(M){let S=v[M.type],R;if(S){let N=He[S];R=po.clone(N.uniforms)}else R=M.uniforms;return R}function O(M,S){let R;for(let N=0,L=u.length;N<L;N++){let B=u[N];if(B.cacheKey===S){R=B,++R.usedTimes;break}}if(R===void 0)R=new Su(t,S,M,r),u.push(R);return R}function A(M){if(--M.usedTimes===0){let S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function T(M){l.remove(M)}function H(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:O,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:H}}function Au(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Eu(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function $r(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Kr(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,h,m,v,_,p){let f=t[e];if(f===void 0)f={id:d.id,object:d,geometry:h,material:m,groupOrder:v,renderOrder:d.renderOrder,z:_,group:p},t[e]=f;else f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=_,f.group=p;return e++,f}function o(d,h,m,v,_,p){let f=a(d,h,m,v,_,p);if(m.transmission>0)i.push(f);else if(m.transparent===!0)s.push(f);else n.push(f)}function l(d,h,m,v,_,p){let f=a(d,h,m,v,_,p);if(m.transmission>0)i.unshift(f);else if(m.transparent===!0)s.unshift(f);else n.unshift(f)}function c(d,h){if(n.length>1)n.sort(d||Eu);if(i.length>1)i.sort(h||$r);if(s.length>1)s.sort(h||$r)}function u(){for(let d=e,h=t.length;d<h;d++){let m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Tu(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Kr,t.set(i,[a]);else if(s>=r.length)a=new Kr,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ru(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new D,color:new qt};break;case"SpotLight":n={position:new D,direction:new D,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new qt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":n={color:new qt,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function Cu(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Iu=0;function Pu(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Lu(t){let e=new Ru,n=Cu(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new le,a=new le;function o(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,v=0,_=0,p=0,f=0,b=0,x=0,E=0,O=0,A=0,T=0;c.sort(Pu);for(let M=0,S=c.length;M<S;M++){let R=c[M],{color:N,intensity:L,distance:B}=R,q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*L,d+=N.g*L,h+=N.b*L;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],L);T++}else if(R.isDirectionalLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let et=R.shadow,W=n.get(R);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=R.shadow.matrix,b++}i.directional[m]=z,m++}else if(R.isSpotLight){let z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(N).multiplyScalar(L),z.distance=B,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[_]=z;let et=R.shadow;if(R.map){if(i.spotLightMap[O]=R.map,O++,et.updateMatrices(R),R.castShadow)A++}if(i.spotLightMatrix[_]=et.matrix,R.castShadow){let W=n.get(R);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=q,E++}_++}else if(R.isRectAreaLight){let z=e.get(R);z.color.copy(N).multiplyScalar(L),z.halfWidth.set(R.width*0.5,0,0),z.halfHeight.set(0,R.height*0.5,0),i.rectArea[p]=z,p++}else if(R.isPointLight){let z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){let et=R.shadow,W=n.get(R);W.shadowIntensity=et.intensity,W.shadowBias=et.bias,W.shadowNormalBias=et.normalBias,W.shadowRadius=et.radius,W.shadowMapSize=et.mapSize,W.shadowCameraNear=et.camera.near,W.shadowCameraFar=et.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=q,i.pointShadowMatrix[v]=R.shadow.matrix,x++}i.point[v]=z,v++}else if(R.isHemisphereLight){let z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(L),z.groundColor.copy(R.groundColor).multiplyScalar(L),i.hemi[f]=z,f++}}if(p>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2;else i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let H=i.hash;if(H.directionalLength!==m||H.pointLength!==v||H.spotLength!==_||H.rectAreaLength!==p||H.hemiLength!==f||H.numDirectionalShadows!==b||H.numPointShadows!==x||H.numSpotShadows!==E||H.numSpotMaps!==O||H.numLightProbes!==T)i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=E+O-A,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,H.directionalLength=m,H.pointLength=v,H.spotLength=_,H.rectAreaLength=p,H.hemiLength=f,H.numDirectionalShadows=b,H.numPointShadows=x,H.numSpotShadows=E,H.numSpotMaps=O,H.numLightProbes=T,i.version=Iu++}function l(c,u){let d=0,h=0,m=0,v=0,_=0,p=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){let x=c[f];if(x.isDirectionalLight){let E=i.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),d++}else if(x.isSpotLight){let E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),m++}else if(x.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(x.width*0.5,0,0),E.halfHeight.set(0,x.height*0.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){let E=i.point[h];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){let E=i.hemi[_];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function Qr(t){let e=new Lu(t),n=[],i=[];function s(u){c.camera=u,n.length=0,i.length=0}function r(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Du(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Qr(t),e.set(s,[o]);else if(r>=a.length)o=new Qr(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}class ba extends Gn{static get type(){return"MeshDepthMaterial"}constructor(t){super();this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wa extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super();this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}var Uu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nu(t,e,n){let i=new Vs,s=new Rt,r=new Rt,a=new ce,o=new ba({depthPacking:3201}),l=new wa,c={},u=n.maxTextureSize,d={[0]:1,[1]:0,[2]:2},h=new re({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Uu,fragmentShader:Fu}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let v=new ne;v.setAttribute("position",new Ht(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let _=new me(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(A,T,H){if(p.enabled===!1)return;if(p.autoUpdate===!1&&p.needsUpdate===!1)return;if(A.length===0)return;let M=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),N=t.state;N.setBlending(0),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=f!==3&&this.type===3,B=f===3&&this.type!==3;for(let q=0,z=A.length;q<z;q++){let et=A[q],W=et.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ht=W.getFrameExtents();if(s.multiply(ht),r.copy(W.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,W.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,W.mapSize.y=r.y}if(W.map===null||L===!0||B===!0){let yt=this.type!==3?{minFilter:1003,magFilter:1003}:{};if(W.map!==null)W.map.dispose();W.map=new cn(s.x,s.y,yt),W.map.texture.name=et.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();let ut=W.getViewportCount();for(let yt=0;yt<ut;yt++){let Lt=W.getViewport(yt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),N.viewport(a),W.updateMatrices(et,yt),i=W.getFrustum(),E(T,H,W.camera,et,this.type)}if(W.isPointLightShadow!==!0&&this.type===3)b(W,H);W.needsUpdate=!1}f=this.type,p.needsUpdate=!1,t.setRenderTarget(M,S,R)};function b(A,T){let H=e.update(_);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new cn(s.x,s.y);h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,H,h,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,H,m,_,null)}function x(A,T,H,M){let S=null,R=H.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=H.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=S.uuid,L=T.uuid,B=c[N];if(B===void 0)B={},c[N]=B;let q=B[L];if(q===void 0)q=S.clone(),B[L]=q,T.addEventListener("dispose",O);S=q}if(S.visible=T.visible,S.wireframe=T.wireframe,M===3)S.side=T.shadowSide!==null?T.shadowSide:T.side;else S.side=T.shadowSide!==null?T.shadowSide:d[T.side];if(S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,H.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=t.properties.get(S);N.light=H}return S}function E(A,T,H,M,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&S===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld);let L=e.update(A),B=A.material;if(Array.isArray(B)){let q=L.groups;for(let z=0,et=q.length;z<et;z++){let W=q[z],ht=B[W.materialIndex];if(ht&&ht.visible){let ut=x(A,ht,M,S);A.onBeforeShadow(t,A,T,H,L,ut,W),t.renderBufferDirect(H,null,L,ut,A,W),A.onAfterShadow(t,A,T,H,L,ut,W)}}}else if(B.visible){let q=x(A,B,M,S);A.onBeforeShadow(t,A,T,H,L,q,null),t.renderBufferDirect(H,null,L,q,A,null),A.onAfterShadow(t,A,T,H,L,q,null)}}}let N=A.children;for(let L=0,B=N.length;L<B;L++)E(N[L],T,H,M,S)}function O(A){A.target.removeEventListener("dispose",O);for(let H in c){let M=c[H],S=A.target.uuid;if(S in M)M[S].dispose(),delete M[S]}}}var Ou={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};function Bu(t,e){function n(){let P=!1,rt=new ce,K=null,tt=new ce(0,0,0,0);return{setMask:function(vt){if(K!==vt&&!P)t.colorMask(vt,vt,vt,vt),K=vt},setLocked:function(vt){P=vt},setClear:function(vt,gt,Wt,oe,ge){if(ge===!0)vt*=oe,gt*=oe,Wt*=oe;if(rt.set(vt,gt,Wt,oe),tt.equals(rt)===!1)t.clearColor(vt,gt,Wt,oe),tt.copy(rt)},reset:function(){P=!1,K=null,tt.set(-1,0,0,0)}}}function i(){let P=!1,rt=!1,K=null,tt=null,vt=null;return{setReversed:function(gt){if(rt!==gt){let Wt=e.get("EXT_clip_control");if(rt)Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT);else Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT);let oe=vt;vt=null,this.setClear(oe)}rt=gt},getReversed:function(){return rt},setTest:function(gt){if(gt)lt(t.DEPTH_TEST);else Mt(t.DEPTH_TEST)},setMask:function(gt){if(K!==gt&&!P)t.depthMask(gt),K=gt},setFunc:function(gt){if(rt)gt=Ou[gt];if(tt!==gt){switch(gt){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}tt=gt}},setLocked:function(gt){P=gt},setClear:function(gt){if(vt!==gt){if(rt)gt=1-gt;t.clearDepth(gt),vt=gt}},reset:function(){P=!1,K=null,tt=null,vt=null,rt=!1}}}function s(){let P=!1,rt=null,K=null,tt=null,vt=null,gt=null,Wt=null,oe=null,ge=null;return{setTest:function($t){if(!P)if($t)lt(t.STENCIL_TEST);else Mt(t.STENCIL_TEST)},setMask:function($t){if(rt!==$t&&!P)t.stencilMask($t),rt=$t},setFunc:function($t,Ve,ke){if(K!==$t||tt!==Ve||vt!==ke)t.stencilFunc($t,Ve,ke),K=$t,tt=Ve,vt=ke},setOp:function($t,Ve,ke){if(gt!==$t||Wt!==Ve||oe!==ke)t.stencilOp($t,Ve,ke),gt=$t,Wt=Ve,oe=ke},setLocked:function($t){P=$t},setClear:function($t){if(ge!==$t)t.clearStencil($t),ge=$t},reset:function(){P=!1,rt=null,K=null,tt=null,vt=null,gt=null,Wt=null,oe=null,ge=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h=new WeakMap,m=[],v=null,_=!1,p=null,f=null,b=null,x=null,E=null,O=null,A=null,T=new qt(0,0,0),H=0,M=!1,S=null,R=null,N=null,L=null,B=null,q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,et=0,W=t.getParameter(t.VERSION);if(W.indexOf("WebGL")!==-1)et=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=et>=1;else if(W.indexOf("OpenGL ES")!==-1)et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=et>=2;let ht=null,ut={},yt=t.getParameter(t.SCISSOR_BOX),Lt=t.getParameter(t.VIEWPORT),C=new ce().fromArray(yt),G=new ce().fromArray(Lt);function Y(P,rt,K,tt){let vt=new Uint8Array(4),gt=t.createTexture();t.bindTexture(P,gt),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Wt=0;Wt<K;Wt++)if(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)t.texImage3D(rt,0,t.RGBA,1,1,tt,0,t.RGBA,t.UNSIGNED_BYTE,vt);else t.texImage2D(rt+Wt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,vt);return gt}let xt={};xt[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),xt[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xt[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(t.DEPTH_TEST),a.setFunc(3),Ot(!1),J(1),lt(t.CULL_FACE),Zt(0);function lt(P){if(u[P]!==!0)t.enable(P),u[P]=!0}function Mt(P){if(u[P]!==!1)t.disable(P),u[P]=!1}function Dt(P,rt){if(d[P]!==rt){if(t.bindFramebuffer(P,rt),d[P]=rt,P===t.DRAW_FRAMEBUFFER)d[t.FRAMEBUFFER]=rt;if(P===t.FRAMEBUFFER)d[t.DRAW_FRAMEBUFFER]=rt;return!0}return!1}function At(P,rt){let K=m,tt=!1;if(P){if(K=h.get(rt),K===void 0)K=[],h.set(rt,K);let vt=P.textures;if(K.length!==vt.length||K[0]!==t.COLOR_ATTACHMENT0){for(let gt=0,Wt=vt.length;gt<Wt;gt++)K[gt]=t.COLOR_ATTACHMENT0+gt;K.length=vt.length,tt=!0}}else if(K[0]!==t.BACK)K[0]=t.BACK,tt=!0;if(tt)t.drawBuffers(K)}function Et(P){if(v!==P)return t.useProgram(P),v=P,!0;return!1}let Xt={[100]:t.FUNC_ADD,[101]:t.FUNC_SUBTRACT,[102]:t.FUNC_REVERSE_SUBTRACT};Xt[103]=t.MIN,Xt[104]=t.MAX;let I={[200]:t.ZERO,[201]:t.ONE,[202]:t.SRC_COLOR,[204]:t.SRC_ALPHA,[210]:t.SRC_ALPHA_SATURATE,[208]:t.DST_COLOR,[206]:t.DST_ALPHA,[203]:t.ONE_MINUS_SRC_COLOR,[205]:t.ONE_MINUS_SRC_ALPHA,[209]:t.ONE_MINUS_DST_COLOR,[207]:t.ONE_MINUS_DST_ALPHA,[211]:t.CONSTANT_COLOR,[212]:t.ONE_MINUS_CONSTANT_COLOR,[213]:t.CONSTANT_ALPHA,[214]:t.ONE_MINUS_CONSTANT_ALPHA};function Zt(P,rt,K,tt,vt,gt,Wt,oe,ge,$t){if(P===0){if(_===!0)Mt(t.BLEND),_=!1;return}if(_===!1)lt(t.BLEND),_=!0;if(P!==5){if(P!==p||$t!==M){if(f!==100||E!==100)t.blendEquation(t.FUNC_ADD),f=100,E=100;if($t)switch(P){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,x=null,O=null,A=null,T.set(0,0,0),H=0,p=P,M=$t}return}if(vt=vt||rt,gt=gt||K,Wt=Wt||tt,rt!==f||vt!==E)t.blendEquationSeparate(Xt[rt],Xt[vt]),f=rt,E=vt;if(K!==b||tt!==x||gt!==O||Wt!==A)t.blendFuncSeparate(I[K],I[tt],I[gt],I[Wt]),b=K,x=tt,O=gt,A=Wt;if(oe.equals(T)===!1||ge!==H)t.blendColor(oe.r,oe.g,oe.b,ge),T.copy(oe),H=ge;p=P,M=!1}function Ft(P,rt){P.side===2?Mt(t.CULL_FACE):lt(t.CULL_FACE);let K=P.side===1;if(rt)K=!K;Ot(K),P.blending===1&&P.transparent===!1?Zt(0):Zt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let tt=P.stencilWrite;if(o.setTest(tt),tt)o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass);ot(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?lt(t.SAMPLE_ALPHA_TO_COVERAGE):Mt(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){if(S!==P){if(P)t.frontFace(t.CW);else t.frontFace(t.CCW);S=P}}function J(P){if(P!==0){if(lt(t.CULL_FACE),P!==R)if(P===1)t.cullFace(t.BACK);else if(P===2)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Mt(t.CULL_FACE);R=P}function Tt(P){if(P!==N){if(z)t.lineWidth(P);N=P}}function ot(P,rt,K){if(P){if(lt(t.POLYGON_OFFSET_FILL),L!==rt||B!==K)t.polygonOffset(rt,K),L=rt,B=K}else Mt(t.POLYGON_OFFSET_FILL)}function dt(P){if(P)lt(t.SCISSOR_TEST);else Mt(t.SCISSOR_TEST)}function w(P){if(P===void 0)P=t.TEXTURE0+q-1;if(ht!==P)t.activeTexture(P),ht=P}function g(P,rt,K){if(K===void 0)if(ht===null)K=t.TEXTURE0+q-1;else K=ht;let tt=ut[K];if(tt===void 0)tt={type:void 0,texture:void 0},ut[K]=tt;if(tt.type!==P||tt.texture!==rt){if(ht!==K)t.activeTexture(K),ht=K;t.bindTexture(P,rt||xt[P]),tt.type=P,tt.texture=rt}}function k(){let P=ut[ht];if(P!==void 0&&P.type!==void 0)t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function zt(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(P){if(C.equals(P)===!1)t.scissor(P.x,P.y,P.z,P.w),C.copy(P)}function mt(P){if(G.equals(P)===!1)t.viewport(P.x,P.y,P.z,P.w),G.copy(P)}function Ut(P,rt){let K=c.get(rt);if(K===void 0)K=new WeakMap,c.set(rt,K);let tt=K.get(P);if(tt===void 0)tt=t.getUniformBlockIndex(rt,P.name),K.set(P,tt)}function Bt(P,rt){let tt=c.get(rt).get(P);if(l.get(rt)!==tt)t.uniformBlockBinding(rt,tt,P.__bindingPointIndex),l.set(rt,tt)}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ht=null,ut={},d={},h=new WeakMap,m=[],v=null,_=!1,p=null,f=null,b=null,x=null,E=null,O=null,A=null,T=new qt(0,0,0),H=0,M=!1,S=null,R=null,N=null,L=null,B=null,C.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:Mt,bindFramebuffer:Dt,drawBuffers:At,useProgram:Et,setBlending:Zt,setMaterial:Ft,setFlipSided:Ot,setCullFace:J,setLineWidth:Tt,setPolygonOffset:ot,setScissorTest:dt,activeTexture:w,bindTexture:g,unbindTexture:k,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:pt,texImage3D:zt,updateUBOMapping:Ut,uniformBlockBinding:Bt,texStorage2D:It,texStorage3D:it,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:st,compressedTexSubImage3D:at,scissor:Pt,viewport:mt,reset:te}}function jr(t,e,n,i){let s=zu(i);switch(n){case 1021:return t*e;case 1024:return t*e;case 1025:return t*e*2;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function zu(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${t}.`)}function ku(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,u=new WeakMap,d,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(w){}function v(w,g){return m?new OffscreenCanvas(w,g):Gi("canvas")}function _(w,g,k){let Q=1,nt=dt(w);if(nt.width>k||nt.height>k)Q=k/Math.max(nt.width,nt.height);if(Q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Z=Math.floor(Q*nt.width),j=Math.floor(Q*nt.height);if(d===void 0)d=v(Z,j);let st=g?v(Z,j):d;return st.width=Z,st.height=j,st.getContext("2d").drawImage(w,0,0,Z,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Z+"x"+j+")."),st}else{if("data"in w)console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+").");return w}return w}function p(w){return w.generateMipmaps}function f(w){t.generateMipmap(w)}function b(w){if(w.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(w.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function x(w,g,k,Q,nt=!1){if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=g;if(g===t.RED){if(k===t.FLOAT)Z=t.R32F;if(k===t.HALF_FLOAT)Z=t.R16F;if(k===t.UNSIGNED_BYTE)Z=t.R8}if(g===t.RED_INTEGER){if(k===t.UNSIGNED_BYTE)Z=t.R8UI;if(k===t.UNSIGNED_SHORT)Z=t.R16UI;if(k===t.UNSIGNED_INT)Z=t.R32UI;if(k===t.BYTE)Z=t.R8I;if(k===t.SHORT)Z=t.R16I;if(k===t.INT)Z=t.R32I}if(g===t.RG){if(k===t.FLOAT)Z=t.RG32F;if(k===t.HALF_FLOAT)Z=t.RG16F;if(k===t.UNSIGNED_BYTE)Z=t.RG8}if(g===t.RG_INTEGER){if(k===t.UNSIGNED_BYTE)Z=t.RG8UI;if(k===t.UNSIGNED_SHORT)Z=t.RG16UI;if(k===t.UNSIGNED_INT)Z=t.RG32UI;if(k===t.BYTE)Z=t.RG8I;if(k===t.SHORT)Z=t.RG16I;if(k===t.INT)Z=t.RG32I}if(g===t.RGB_INTEGER){if(k===t.UNSIGNED_BYTE)Z=t.RGB8UI;if(k===t.UNSIGNED_SHORT)Z=t.RGB16UI;if(k===t.UNSIGNED_INT)Z=t.RGB32UI;if(k===t.BYTE)Z=t.RGB8I;if(k===t.SHORT)Z=t.RGB16I;if(k===t.INT)Z=t.RGB32I}if(g===t.RGBA_INTEGER){if(k===t.UNSIGNED_BYTE)Z=t.RGBA8UI;if(k===t.UNSIGNED_SHORT)Z=t.RGBA16UI;if(k===t.UNSIGNED_INT)Z=t.RGBA32UI;if(k===t.BYTE)Z=t.RGBA8I;if(k===t.SHORT)Z=t.RGBA16I;if(k===t.INT)Z=t.RGBA32I}if(g===t.RGB){if(k===t.UNSIGNED_INT_5_9_9_9_REV)Z=t.RGB9_E5}if(g===t.RGBA){let j=nt?"linear":Yt.getTransfer(Q);if(k===t.FLOAT)Z=t.RGBA32F;if(k===t.HALF_FLOAT)Z=t.RGBA16F;if(k===t.UNSIGNED_BYTE)Z=j==="srgb"?t.SRGB8_ALPHA8:t.RGBA8;if(k===t.UNSIGNED_SHORT_4_4_4_4)Z=t.RGBA4;if(k===t.UNSIGNED_SHORT_5_5_5_1)Z=t.RGB5_A1}if(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)e.get("EXT_color_buffer_float");return Z}function E(w,g){let k;if(w){if(g===null||g===1014||g===1020)k=t.DEPTH24_STENCIL8;else if(g===1015)k=t.DEPTH32F_STENCIL8;else if(g===1012)k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(g===null||g===1014||g===1020)k=t.DEPTH_COMPONENT24;else if(g===1015)k=t.DEPTH_COMPONENT32F;else if(g===1012)k=t.DEPTH_COMPONENT16;return k}function O(w,g){if(p(w)===!0||w.isFramebufferTexture&&w.minFilter!==1003&&w.minFilter!==1006)return Math.log2(Math.max(g.width,g.height))+1;else if(w.mipmaps!==void 0&&w.mipmaps.length>0)return w.mipmaps.length;else if(w.isCompressedTexture&&Array.isArray(w.image))return g.mipmaps.length;else return 1}function A(w){let g=w.target;if(g.removeEventListener("dispose",A),H(g),g.isVideoTexture)u.delete(g)}function T(w){let g=w.target;g.removeEventListener("dispose",T),S(g)}function H(w){let g=i.get(w);if(g.__webglInit===void 0)return;let k=w.source,Q=h.get(k);if(Q){let nt=Q[g.__cacheKey];if(nt.usedTimes--,nt.usedTimes===0)M(w);if(Object.keys(Q).length===0)h.delete(k)}i.remove(w)}function M(w){let g=i.get(w);t.deleteTexture(g.__webglTexture);let k=w.source,Q=h.get(k);delete Q[g.__cacheKey],a.memory.textures--}function S(w){let g=i.get(w);if(w.depthTexture)w.depthTexture.dispose(),i.remove(w.depthTexture);if(w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(g.__webglFramebuffer[Q]))for(let nt=0;nt<g.__webglFramebuffer[Q].length;nt++)t.deleteFramebuffer(g.__webglFramebuffer[Q][nt]);else t.deleteFramebuffer(g.__webglFramebuffer[Q]);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer[Q])}else{if(Array.isArray(g.__webglFramebuffer))for(let Q=0;Q<g.__webglFramebuffer.length;Q++)t.deleteFramebuffer(g.__webglFramebuffer[Q]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer)t.deleteRenderbuffer(g.__webglDepthbuffer);if(g.__webglMultisampledFramebuffer)t.deleteFramebuffer(g.__webglMultisampledFramebuffer);if(g.__webglColorRenderbuffer){for(let Q=0;Q<g.__webglColorRenderbuffer.length;Q++)if(g.__webglColorRenderbuffer[Q])t.deleteRenderbuffer(g.__webglColorRenderbuffer[Q])}if(g.__webglDepthRenderbuffer)t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let k=w.textures;for(let Q=0,nt=k.length;Q<nt;Q++){let Z=i.get(k[Q]);if(Z.__webglTexture)t.deleteTexture(Z.__webglTexture),a.memory.textures--;i.remove(k[Q])}i.remove(w)}let R=0;function N(){R=0}function L(){let w=R;if(w>=s.maxTextures)console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures);return R+=1,w}function B(w){let g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function q(w,g){let k=i.get(w);if(w.isVideoTexture)Tt(w);if(w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let Q=w.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(k,w,g);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+g)}function z(w,g){let k=i.get(w);if(w.version>0&&k.__version!==w.version){G(k,w,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+g)}function et(w,g){let k=i.get(w);if(w.version>0&&k.__version!==w.version){G(k,w,g);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+g)}function W(w,g){let k=i.get(w);if(w.version>0&&k.__version!==w.version){Y(k,w,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+g)}let ht={[1000]:t.REPEAT,[1001]:t.CLAMP_TO_EDGE,[1002]:t.MIRRORED_REPEAT},ut={[1003]:t.NEAREST,[1004]:t.NEAREST_MIPMAP_NEAREST,[1005]:t.NEAREST_MIPMAP_LINEAR,[1006]:t.LINEAR,[1007]:t.LINEAR_MIPMAP_NEAREST,[1008]:t.LINEAR_MIPMAP_LINEAR},yt={[512]:t.NEVER,[519]:t.ALWAYS,[513]:t.LESS,[515]:t.LEQUAL,[514]:t.EQUAL,[518]:t.GEQUAL,[516]:t.GREATER,[517]:t.NOTEQUAL};function Lt(w,g){if(g.type===1015&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008))console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(w,t.TEXTURE_WRAP_S,ht[g.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,ht[g.wrapT]),w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)t.texParameteri(w,t.TEXTURE_WRAP_R,ht[g.wrapR]);if(t.texParameteri(w,t.TEXTURE_MAG_FILTER,ut[g.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction)t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,yt[g.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003)return;if(g.minFilter!==1005&&g.minFilter!==1008)return;if(g.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function C(w,g){let k=!1;if(w.__webglInit===void 0)w.__webglInit=!0,g.addEventListener("dispose",A);let Q=g.source,nt=h.get(Q);if(nt===void 0)nt={},h.set(Q,nt);let Z=B(g);if(Z!==w.__cacheKey){if(nt[Z]===void 0)nt[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0;nt[Z].usedTimes++;let j=nt[w.__cacheKey];if(j!==void 0){if(nt[w.__cacheKey].usedTimes--,j.usedTimes===0)M(g)}w.__cacheKey=Z,w.__webglTexture=nt[Z].texture}return k}function G(w,g,k){let Q=t.TEXTURE_2D;if(g.isDataArrayTexture||g.isCompressedArrayTexture)Q=t.TEXTURE_2D_ARRAY;if(g.isData3DTexture)Q=t.TEXTURE_3D;let nt=C(w,g),Z=g.source;n.bindTexture(Q,w.__webglTexture,t.TEXTURE0+k);let j=i.get(Z);if(Z.version!==j.__version||nt===!0){n.activeTexture(t.TEXTURE0+k);let st=Yt.getPrimaries(Yt.workingColorSpace),at=g.colorSpace===""?null:Yt.getPrimaries(g.colorSpace),It=g.colorSpace===""||st===at?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let it=_(g.image,!1,s.maxTextureSize);it=ot(g,it);let pt=r.convert(g.format,g.colorSpace),zt=r.convert(g.type),Pt=x(g.internalFormat,pt,zt,g.colorSpace,g.isVideoTexture);Lt(Q,g);let mt,Ut=g.mipmaps,Bt=g.isVideoTexture!==!0,te=j.__version===void 0||nt===!0,P=Z.dataReady,rt=O(g,it);if(g.isDepthTexture){if(Pt=E(g.format===1027,g.type),te)if(Bt)n.texStorage2D(t.TEXTURE_2D,1,Pt,it.width,it.height);else n.texImage2D(t.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,zt,null)}else if(g.isDataTexture)if(Ut.length>0){if(Bt&&te)n.texStorage2D(t.TEXTURE_2D,rt,Pt,Ut[0].width,Ut[0].height);for(let K=0,tt=Ut.length;K<tt;K++)if(mt=Ut[K],Bt){if(P)n.texSubImage2D(t.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,zt,mt.data)}else n.texImage2D(t.TEXTURE_2D,K,Pt,mt.width,mt.height,0,pt,zt,mt.data);g.generateMipmaps=!1}else if(Bt){if(te)n.texStorage2D(t.TEXTURE_2D,rt,Pt,it.width,it.height);if(P)n.texSubImage2D(t.TEXTURE_2D,0,0,0,it.width,it.height,pt,zt,it.data)}else n.texImage2D(t.TEXTURE_2D,0,Pt,it.width,it.height,0,pt,zt,it.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){if(Bt&&te)n.texStorage3D(t.TEXTURE_2D_ARRAY,rt,Pt,Ut[0].width,Ut[0].height,it.depth);for(let K=0,tt=Ut.length;K<tt;K++)if(mt=Ut[K],g.format!==1023)if(pt!==null)if(Bt){if(P)if(g.layerUpdates.size>0){let vt=jr(mt.width,mt.height,g.format,g.type);for(let gt of g.layerUpdates){let Wt=mt.data.subarray(gt*vt/mt.data.BYTES_PER_ELEMENT,(gt+1)*vt/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,gt,mt.width,mt.height,1,pt,Wt)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,it.depth,pt,mt.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pt,mt.width,mt.height,it.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Bt){if(P)n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,mt.width,mt.height,it.depth,pt,zt,mt.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pt,mt.width,mt.height,it.depth,0,pt,zt,mt.data)}else{if(Bt&&te)n.texStorage2D(t.TEXTURE_2D,rt,Pt,Ut[0].width,Ut[0].height);for(let K=0,tt=Ut.length;K<tt;K++)if(mt=Ut[K],g.format!==1023)if(pt!==null)if(Bt){if(P)n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,mt.data)}else n.compressedTexImage2D(t.TEXTURE_2D,K,Pt,mt.width,mt.height,0,mt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(Bt){if(P)n.texSubImage2D(t.TEXTURE_2D,K,0,0,mt.width,mt.height,pt,zt,mt.data)}else n.texImage2D(t.TEXTURE_2D,K,Pt,mt.width,mt.height,0,pt,zt,mt.data)}else if(g.isDataArrayTexture)if(Bt){if(te)n.texStorage3D(t.TEXTURE_2D_ARRAY,rt,Pt,it.width,it.height,it.depth);if(P)if(g.layerUpdates.size>0){let K=jr(it.width,it.height,g.format,g.type);for(let tt of g.layerUpdates){let vt=it.data.subarray(tt*K/it.data.BYTES_PER_ELEMENT,(tt+1)*K/it.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,tt,it.width,it.height,1,pt,zt,vt)}g.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,pt,zt,it.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pt,it.width,it.height,it.depth,0,pt,zt,it.data);else if(g.isData3DTexture)if(Bt){if(te)n.texStorage3D(t.TEXTURE_3D,rt,Pt,it.width,it.height,it.depth);if(P)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,pt,zt,it.data)}else n.texImage3D(t.TEXTURE_3D,0,Pt,it.width,it.height,it.depth,0,pt,zt,it.data);else if(g.isFramebufferTexture){if(te)if(Bt)n.texStorage2D(t.TEXTURE_2D,rt,Pt,it.width,it.height);else{let K=it.width,tt=it.height;for(let vt=0;vt<rt;vt++)n.texImage2D(t.TEXTURE_2D,vt,Pt,K,tt,0,pt,zt,null),K>>=1,tt>>=1}}else if(Ut.length>0){if(Bt&&te){let K=dt(Ut[0]);n.texStorage2D(t.TEXTURE_2D,rt,Pt,K.width,K.height)}for(let K=0,tt=Ut.length;K<tt;K++)if(mt=Ut[K],Bt){if(P)n.texSubImage2D(t.TEXTURE_2D,K,0,0,pt,zt,mt)}else n.texImage2D(t.TEXTURE_2D,K,Pt,pt,zt,mt);g.generateMipmaps=!1}else if(Bt){if(te){let K=dt(it);n.texStorage2D(t.TEXTURE_2D,rt,Pt,K.width,K.height)}if(P)n.texSubImage2D(t.TEXTURE_2D,0,0,0,pt,zt,it)}else n.texImage2D(t.TEXTURE_2D,0,Pt,pt,zt,it);if(p(g))f(Q);if(j.__version=Z.version,g.onUpdate)g.onUpdate(g)}w.__version=g.version}function Y(w,g,k){if(g.image.length!==6)return;let Q=C(w,g),nt=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+k);let Z=i.get(nt);if(nt.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+k);let j=Yt.getPrimaries(Yt.workingColorSpace),st=g.colorSpace===""?null:Yt.getPrimaries(g.colorSpace),at=g.colorSpace===""||j===st?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let It=g.isCompressedTexture||g.image[0].isCompressedTexture,it=g.image[0]&&g.image[0].isDataTexture,pt=[];for(let tt=0;tt<6;tt++){if(!It&&!it)pt[tt]=_(g.image[tt],!0,s.maxCubemapSize);else pt[tt]=it?g.image[tt].image:g.image[tt];pt[tt]=ot(g,pt[tt])}let zt=pt[0],Pt=r.convert(g.format,g.colorSpace),mt=r.convert(g.type),Ut=x(g.internalFormat,Pt,mt,g.colorSpace),Bt=g.isVideoTexture!==!0,te=Z.__version===void 0||Q===!0,P=nt.dataReady,rt=O(g,zt);Lt(t.TEXTURE_CUBE_MAP,g);let K;if(It){if(Bt&&te)n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Ut,zt.width,zt.height);for(let tt=0;tt<6;tt++){K=pt[tt].mipmaps;for(let vt=0;vt<K.length;vt++){let gt=K[vt];if(g.format!==1023)if(Pt!==null)if(Bt){if(P)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,gt.width,gt.height,Pt,gt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ut,gt.width,gt.height,0,gt.data);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(Bt){if(P)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,0,0,gt.width,gt.height,Pt,mt,gt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt,Ut,gt.width,gt.height,0,Pt,mt,gt.data)}}}else{if(K=g.mipmaps,Bt&&te){if(K.length>0)rt++;let tt=dt(pt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,rt,Ut,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(it){if(Bt){if(P)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,pt[tt].width,pt[tt].height,Pt,mt,pt[tt].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,pt[tt].width,pt[tt].height,0,Pt,mt,pt[tt].data);for(let vt=0;vt<K.length;vt++){let Wt=K[vt].image[tt].image;if(Bt){if(P)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Wt.width,Wt.height,Pt,mt,Wt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ut,Wt.width,Wt.height,0,Pt,mt,Wt.data)}}else{if(Bt){if(P)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Pt,mt,pt[tt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ut,Pt,mt,pt[tt]);for(let vt=0;vt<K.length;vt++){let gt=K[vt];if(Bt){if(P)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,0,0,Pt,mt,gt.image[tt])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+tt,vt+1,Ut,Pt,mt,gt.image[tt])}}}if(p(g))f(t.TEXTURE_CUBE_MAP);if(Z.__version=nt.version,g.onUpdate)g.onUpdate(g)}w.__version=g.version}function xt(w,g,k,Q,nt,Z){let j=r.convert(k.format,k.colorSpace),st=r.convert(k.type),at=x(k.internalFormat,j,st,k.colorSpace),It=i.get(g),it=i.get(k);if(it.__renderTarget=g,!It.__hasExternalTextures){let pt=Math.max(1,g.width>>Z),zt=Math.max(1,g.height>>Z);if(nt===t.TEXTURE_3D||nt===t.TEXTURE_2D_ARRAY)n.texImage3D(nt,Z,at,pt,zt,g.depth,0,j,st,null);else n.texImage2D(nt,Z,at,pt,zt,0,j,st,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,w),J(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,nt,it.__webglTexture,0,Ot(g));else if(nt===t.TEXTURE_2D||nt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,Q,nt,it.__webglTexture,Z);n.bindFramebuffer(t.FRAMEBUFFER,null)}function lt(w,g,k){if(t.bindRenderbuffer(t.RENDERBUFFER,w),g.depthBuffer){let Q=g.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,Z=E(g.stencilBuffer,nt),j=g.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,st=Ot(g);if(J(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,st,Z,g.width,g.height);else if(k)t.renderbufferStorageMultisample(t.RENDERBUFFER,st,Z,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,w)}else{let Q=g.textures;for(let nt=0;nt<Q.length;nt++){let Z=Q[nt],j=r.convert(Z.format,Z.colorSpace),st=r.convert(Z.type),at=x(Z.internalFormat,j,st,Z.colorSpace),It=Ot(g);if(k&&J(g)===!1)t.renderbufferStorageMultisample(t.RENDERBUFFER,It,at,g.width,g.height);else if(J(g))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It,at,g.width,g.height);else t.renderbufferStorage(t.RENDERBUFFER,at,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Mt(w,g){if(g&&g.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=i.get(g.depthTexture);if(Q.__renderTarget=g,!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0;q(g.depthTexture,0);let nt=Q.__webglTexture,Z=Ot(g);if(g.depthTexture.format===1026)if(J(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,nt,0,Z);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,nt,0);else if(g.depthTexture.format===1027)if(J(g))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,nt,0,Z);else t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,nt,0);else throw Error("Unknown depthTexture format")}function Dt(w){let g=i.get(w),k=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){let Q=w.depthTexture;if(g.__depthDisposeCallback)g.__depthDisposeCallback();if(Q){let nt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),g.__depthDisposeCallback=nt}g.__boundDepthTexture=Q}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(k)throw Error("target.depthTexture not supported in Cube render targets");Mt(g.__webglFramebuffer,w)}else if(k){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]===void 0)g.__webglDepthbuffer[Q]=t.createRenderbuffer(),lt(g.__webglDepthbuffer[Q],w,!1);else{let nt=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,nt,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=t.createRenderbuffer(),lt(g.__webglDepthbuffer,w,!1);else{let Q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,nt),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,nt)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(w,g,k){let Q=i.get(w);if(g!==void 0)xt(Q.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(k!==void 0)Dt(w)}function Et(w){let g=w.texture,k=i.get(w),Q=i.get(g);w.addEventListener("dispose",T);let nt=w.textures,Z=w.isWebGLCubeRenderTarget===!0,j=nt.length>1;if(!j){if(Q.__webglTexture===void 0)Q.__webglTexture=t.createTexture();Q.__version=g.version,a.memory.textures++}if(Z){k.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[st]=[];for(let at=0;at<g.mipmaps.length;at++)k.__webglFramebuffer[st][at]=t.createFramebuffer()}else k.__webglFramebuffer[st]=t.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)k.__webglFramebuffer[st]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(j)for(let st=0,at=nt.length;st<at;st++){let It=i.get(nt[st]);if(It.__webglTexture===void 0)It.__webglTexture=t.createTexture(),a.memory.textures++}if(w.samples>0&&J(w)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let st=0;st<nt.length;st++){let at=nt[st];k.__webglColorRenderbuffer[st]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[st]);let It=r.convert(at.format,at.colorSpace),it=r.convert(at.type),pt=x(at.internalFormat,It,it,at.colorSpace,w.isXRRenderTarget===!0),zt=Ot(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,zt,pt,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+st,t.RENDERBUFFER,k.__webglColorRenderbuffer[st])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer)k.__webglDepthRenderbuffer=t.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,w,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Lt(t.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)xt(k.__webglFramebuffer[st][at],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+st,at);else xt(k.__webglFramebuffer[st],w,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);if(p(g))f(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(j){for(let st=0,at=nt.length;st<at;st++){let It=nt[st],it=i.get(It);if(n.bindTexture(t.TEXTURE_2D,it.__webglTexture),Lt(t.TEXTURE_2D,It),xt(k.__webglFramebuffer,w,It,t.COLOR_ATTACHMENT0+st,t.TEXTURE_2D,0),p(It))f(t.TEXTURE_2D)}n.unbindTexture()}else{let st=t.TEXTURE_2D;if(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)st=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(st,Q.__webglTexture),Lt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let at=0;at<g.mipmaps.length;at++)xt(k.__webglFramebuffer[at],w,g,t.COLOR_ATTACHMENT0,st,at);else xt(k.__webglFramebuffer,w,g,t.COLOR_ATTACHMENT0,st,0);if(p(g))f(st);n.unbindTexture()}if(w.depthBuffer)Dt(w)}function Xt(w){let g=w.textures;for(let k=0,Q=g.length;k<Q;k++){let nt=g[k];if(p(nt)){let Z=b(w),j=i.get(nt).__webglTexture;n.bindTexture(Z,j),f(Z),n.unbindTexture()}}}let I=[],Zt=[];function Ft(w){if(w.samples>0){if(J(w)===!1){let{textures:g,width:k,height:Q}=w,nt=t.COLOR_BUFFER_BIT,Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=i.get(w),st=g.length>1;if(st)for(let at=0;at<g.length;at++)n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+at,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+at,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let at=0;at<g.length;at++){if(w.resolveDepthBuffer){if(w.depthBuffer)nt|=t.DEPTH_BUFFER_BIT;if(w.stencilBuffer&&w.resolveStencilBuffer)nt|=t.STENCIL_BUFFER_BIT}if(st){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,j.__webglColorRenderbuffer[at]);let It=i.get(g[at]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,It,0)}if(t.blitFramebuffer(0,0,k,Q,0,0,k,Q,nt,t.NEAREST),l===!0){if(I.length=0,Zt.length=0,I.push(t.COLOR_ATTACHMENT0+at),w.depthBuffer&&w.resolveDepthBuffer===!1)I.push(Z),Zt.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Zt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,I)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),st)for(let at=0;at<g.length;at++){n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+at,t.RENDERBUFFER,j.__webglColorRenderbuffer[at]);let It=i.get(g[at]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+at,t.TEXTURE_2D,It,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let g=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[g])}}}function Ot(w){return Math.min(s.maxSamples,w.samples)}function J(w){let g=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Tt(w){let g=a.render.frame;if(u.get(w)!==g)u.set(w,g),w.update()}function ot(w,g){let{colorSpace:k,format:Q,type:nt}=w;if(w.isCompressedTexture===!0||w.isVideoTexture===!0)return g;if(k!=="srgb-linear"&&k!=="")if(Yt.getTransfer(k)==="srgb"){if(Q!==1023||nt!==1009)console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else console.error("THREE.WebGLTextures: Unsupported texture color space:",k);return g}function dt(w){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement)c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height;else if(typeof VideoFrame<"u"&&w instanceof VideoFrame)c.width=w.displayWidth,c.height=w.displayHeight;else c.width=w.width,c.height=w.height;return c}this.allocateTextureUnit=L,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=z,this.setTexture3D=et,this.setTextureCube=W,this.rebindTextures=At,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=J}function Gu(t,e){function n(i,s=""){let r,a=Yt.getTransfer(s);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1024)return t.LUMINANCE;if(i===1025)return t.LUMINANCE_ALPHA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===36196||i===37492)return a==="srgb"?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===37808)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===36492)return a==="srgb"?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===36492)return r.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===1020)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}class Aa extends pe{constructor(t=[]){super();this.isArrayCamera=!0,this.cameras=t}}class Oe extends we{constructor(){super();this.isGroup=!0,this.type="Group"}}var Hu={type:"move"};class ki{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let v of t.hand.values()){let _=e.getJointPose(v,n),p=this._getHandJoint(l,v);if(_!==null)p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius;p.visible=_!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,m=0.005;if(l.inputState.pinching&&d>h+m)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=h-m)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Hu)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Wu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ea{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new be,s=t.properties.get(i);if(s.__webglTexture=e.texture,e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)this.depthNear=e.depthNear,this.depthFar=e.depthFar;this.texture=i}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new re({vertexShader:Wu,fragmentShader:Vu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new Hi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ta extends xn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,m=null,v=new Ea,_=e.getContextAttributes(),p=null,f=null,b=[],x=[],E=new Rt,O=null,A=new pe;A.viewport=new ce;let T=new pe;T.viewport=new ce;let H=[A,T],M=new Aa,S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(C){let G=b[C];if(G===void 0)G=new ki,b[C]=G;return G.getTargetRaySpace()},this.getControllerGrip=function(C){let G=b[C];if(G===void 0)G=new ki,b[C]=G;return G.getGripSpace()},this.getHand=function(C){let G=b[C];if(G===void 0)G=new ki,b[C]=G;return G.getHandSpace()};function N(C){let G=x.indexOf(C.inputSource);if(G===-1)return;let Y=b[G];if(Y!==void 0)Y.update(C.inputSource,C.frame,l||r),Y.dispatchEvent({type:C.type,data:C.inputSource})}function L(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",B);for(let C=0;C<b.length;C++){let G=x[C];if(G===null)continue;x[C]=null,b[C].disconnect(G)}S=null,R=null,v.reset(),t.setRenderTarget(p),h=null,d=null,u=null,i=null,f=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(O),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(C){if(s=C,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(C){if(a=C,n.isPresenting===!0)console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(C){l=C},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(C){if(i=C,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",L),i.addEventListener("inputsourceschange",B),_.xrCompatible!==!0)await e.makeXRCompatible();if(O=t.getPixelRatio(),t.getSize(E),i.renderState.layers===void 0){let G={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),f=new cn(h.framebufferWidth,h.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let G=null,Y=null,xt=null;if(_.depth)xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=_.stencil?1027:1026,Y=_.stencil?1020:1014;let lt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),f=new cn(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new qs(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}f.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),Lt.setContext(i),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(C){for(let G=0;G<C.removed.length;G++){let Y=C.removed[G],xt=x.indexOf(Y);if(xt>=0)x[xt]=null,b[xt].disconnect(Y)}for(let G=0;G<C.added.length;G++){let Y=C.added[G],xt=x.indexOf(Y);if(xt===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=x.length){x.push(Y),xt=Mt;break}else if(x[Mt]===null){x[Mt]=Y,xt=Mt;break}if(xt===-1)break}let lt=b[xt];if(lt)lt.connect(Y)}}let q=new D,z=new D;function et(C,G,Y){q.setFromMatrixPosition(G.matrixWorld),z.setFromMatrixPosition(Y.matrixWorld);let xt=q.distanceTo(z),lt=G.projectionMatrix.elements,Mt=Y.projectionMatrix.elements,Dt=lt[14]/(lt[10]-1),At=lt[14]/(lt[10]+1),Et=(lt[9]+1)/lt[5],Xt=(lt[9]-1)/lt[5],I=(lt[8]-1)/lt[0],Zt=(Mt[8]+1)/Mt[0],Ft=Dt*I,Ot=Dt*Zt,J=xt/(-I+Zt),Tt=J*-I;if(G.matrixWorld.decompose(C.position,C.quaternion,C.scale),C.translateX(Tt),C.translateZ(J),C.matrixWorld.compose(C.position,C.quaternion,C.scale),C.matrixWorldInverse.copy(C.matrixWorld).invert(),lt[10]===-1)C.projectionMatrix.copy(G.projectionMatrix),C.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let ot=Dt+J,dt=At+J,w=Ft-Tt,g=Ot+(xt-Tt),k=Et*At/dt*ot,Q=Xt*At/dt*ot;C.projectionMatrix.makePerspective(w,g,k,Q,ot,dt),C.projectionMatrixInverse.copy(C.projectionMatrix).invert()}}function W(C,G){if(G===null)C.matrixWorld.copy(C.matrix);else C.matrixWorld.multiplyMatrices(G.matrixWorld,C.matrix);C.matrixWorldInverse.copy(C.matrixWorld).invert()}this.updateCamera=function(C){if(i===null)return;let{near:G,far:Y}=C;if(v.texture!==null){if(v.depthNear>0)G=v.depthNear;if(v.depthFar>0)Y=v.depthFar}if(M.near=T.near=A.near=G,M.far=T.far=A.far=Y,S!==M.near||R!==M.far)i.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,R=M.far;A.layers.mask=C.layers.mask|2,T.layers.mask=C.layers.mask|4,M.layers.mask=A.layers.mask|T.layers.mask;let xt=C.parent,lt=M.cameras;W(M,xt);for(let Mt=0;Mt<lt.length;Mt++)W(lt[Mt],xt);if(lt.length===2)et(M,A,T);else M.projectionMatrix.copy(A.projectionMatrix);ht(C,M,xt)};function ht(C,G,Y){if(Y===null)C.matrix.copy(G.matrixWorld);else C.matrix.copy(Y.matrixWorld),C.matrix.invert(),C.matrix.multiply(G.matrixWorld);if(C.matrix.decompose(C.position,C.quaternion,C.scale),C.updateMatrixWorld(!0),C.projectionMatrix.copy(G.projectionMatrix),C.projectionMatrixInverse.copy(G.projectionMatrixInverse),C.isPerspectiveCamera)C.fov=Ps*2*Math.atan(1/C.projectionMatrix.elements[5]),C.zoom=1}this.getCamera=function(){return M},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(C){if(o=C,d!==null)d.fixedFoveation=C;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=C},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let ut=null;function yt(C,G){if(c=G.getViewerPose(l||r),m=G,c!==null){let Y=c.views;if(h!==null)t.setRenderTargetFramebuffer(f,h.framebuffer),t.setRenderTarget(f);let xt=!1;if(Y.length!==M.cameras.length)M.cameras.length=0,xt=!0;for(let Mt=0;Mt<Y.length;Mt++){let Dt=Y[Mt],At=null;if(h!==null)At=h.getViewport(Dt);else{let Xt=u.getViewSubImage(d,Dt);if(At=Xt.viewport,Mt===0)t.setRenderTargetTextures(f,Xt.colorTexture,d.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(f)}let Et=H[Mt];if(Et===void 0)Et=new pe,Et.layers.enable(Mt),Et.viewport=new ce,H[Mt]=Et;if(Et.matrix.fromArray(Dt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(Dt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(At.x,At.y,At.width,At.height),Mt===0)M.matrix.copy(Et.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale);if(xt===!0)M.cameras.push(Et)}let lt=i.enabledFeatures;if(lt&&lt.includes("depth-sensing")){let Mt=u.getDepthInformation(Y[0]);if(Mt&&Mt.isValid&&Mt.texture)v.init(t,Mt,i.renderState)}}for(let Y=0;Y<b.length;Y++){let xt=x[Y],lt=b[Y];if(xt!==null&&lt!==void 0)lt.update(xt,G,l||r)}if(ut)ut(C,G);if(G.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:G});m=null}let Lt=new da;Lt.setAnimationLoop(yt),this.setAnimationLoop=function(C){ut=C},this.dispose=function(){}}}var gn=new Qe,Xu=new le;function qu(t,e){function n(p,f){if(p.matrixAutoUpdate===!0)p.updateMatrix();f.value.copy(p.matrix)}function i(p,f){if(f.color.getRGB(p.fogColor.value,ca(t)),f.isFog)p.fogNear.value=f.near,p.fogFar.value=f.far;else if(f.isFogExp2)p.fogDensity.value=f.density}function s(p,f,b,x,E){if(f.isMeshBasicMaterial)r(p,f);else if(f.isMeshLambertMaterial)r(p,f);else if(f.isMeshToonMaterial)r(p,f),d(p,f);else if(f.isMeshPhongMaterial)r(p,f),u(p,f);else if(f.isMeshStandardMaterial){if(r(p,f),h(p,f),f.isMeshPhysicalMaterial)m(p,f,E)}else if(f.isMeshMatcapMaterial)r(p,f),v(p,f);else if(f.isMeshDepthMaterial)r(p,f);else if(f.isMeshDistanceMaterial)r(p,f),_(p,f);else if(f.isMeshNormalMaterial)r(p,f);else if(f.isLineBasicMaterial){if(a(p,f),f.isLineDashedMaterial)o(p,f)}else if(f.isPointsMaterial)l(p,f,b,x);else if(f.isSpriteMaterial)c(p,f);else if(f.isShadowMaterial)p.color.value.copy(f.color),p.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(p,f){if(p.opacity.value=f.opacity,f.color)p.diffuse.value.copy(f.color);if(f.emissive)p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.bumpMap){if(p.bumpMap.value=f.bumpMap,n(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===1)p.bumpScale.value*=-1}if(f.normalMap){if(p.normalMap.value=f.normalMap,n(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===1)p.normalScale.value.negate()}if(f.displacementMap)p.displacementMap.value=f.displacementMap,n(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias;if(f.emissiveMap)p.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,p.emissiveMapTransform);if(f.specularMap)p.specularMap.value=f.specularMap,n(f.specularMap,p.specularMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest;let b=e.get(f),{envMap:x,envMapRotation:E}=b;if(x){if(p.envMap.value=x,gn.copy(E),gn.x*=-1,gn.y*=-1,gn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1)gn.y*=-1,gn.z*=-1;p.envMapRotation.value.setFromMatrix4(Xu.makeRotationFromEuler(gn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio}if(f.lightMap)p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,p.lightMapTransform);if(f.aoMap)p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,p.aoMapTransform)}function a(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map)p.map.value=f.map,n(f.map,p.mapTransform)}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,b,x){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*b,p.scale.value=x*0.5,f.map)p.map.value=f.map,n(f.map,p.uvTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function c(p,f){if(p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map)p.map.value=f.map,n(f.map,p.mapTransform);if(f.alphaMap)p.alphaMap.value=f.alphaMap,n(f.alphaMap,p.alphaMapTransform);if(f.alphaTest>0)p.alphaTest.value=f.alphaTest}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,0.0001)}function d(p,f){if(f.gradientMap)p.gradientMap.value=f.gradientMap}function h(p,f){if(p.metalness.value=f.metalness,f.metalnessMap)p.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,p.metalnessMapTransform);if(p.roughness.value=f.roughness,f.roughnessMap)p.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,p.roughnessMapTransform);if(f.envMap)p.envMapIntensity.value=f.envMapIntensity}function m(p,f,b){if(p.ior.value=f.ior,f.sheen>0){if(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)p.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,p.sheenColorMapTransform);if(f.sheenRoughnessMap)p.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,p.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)p.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,p.clearcoatMapTransform);if(f.clearcoatRoughnessMap)p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(p.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1)p.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)p.dispersion.value=f.dispersion;if(f.iridescence>0){if(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)p.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,p.iridescenceMapTransform);if(f.iridescenceThicknessMap)p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform)}if(f.transmission>0){if(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap)p.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,p.transmissionMapTransform);if(p.thickness.value=f.thickness,f.thicknessMap)p.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,p.thicknessMapTransform);p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)p.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,p.anisotropyMapTransform)}if(p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap)p.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,p.specularColorMapTransform);if(f.specularIntensityMap)p.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,p.specularIntensityMapTransform)}function v(p,f){if(f.matcap)p.matcap.value=f.matcap}function _(p,f){let b=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yu(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let E=x.program;i.uniformBlockBinding(b,E)}function c(b,x){let E=s[b.id];if(E===void 0)v(b),E=u(b),s[b.id]=E,b.addEventListener("dispose",p);let O=x.program;i.updateUBOMapping(b,O);let A=e.render.frame;if(r[b.id]!==A)h(b),r[b.id]=A}function u(b){let x=d();b.__bindingPointIndex=x;let E=t.createBuffer(),{__size:O,usage:A}=b;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,O,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){let x=s[b.id],{uniforms:E,__cache:O}=b;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,T=E.length;A<T;A++){let H=Array.isArray(E[A])?E[A]:[E[A]];for(let M=0,S=H.length;M<S;M++){let R=H[M];if(m(R,A,M,O)===!0){let N=R.__offset,L=Array.isArray(R.value)?R.value:[R.value],B=0;for(let q=0;q<L.length;q++){let z=L[q],et=_(z);if(typeof z==="number"||typeof z==="boolean")R.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,N+B,R.__data);else if(z.isMatrix3)R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0;else z.toArray(R.__data,B),B+=et.storage/Float32Array.BYTES_PER_ELEMENT}t.bufferSubData(t.UNIFORM_BUFFER,N,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(b,x,E,O){let A=b.value,T=x+"_"+E;if(O[T]===void 0){if(typeof A==="number"||typeof A==="boolean")O[T]=A;else O[T]=A.clone();return!0}else{let H=O[T];if(typeof A==="number"||typeof A==="boolean"){if(H!==A)return O[T]=A,!0}else if(H.equals(A)===!1)return H.copy(A),!0}return!1}function v(b){let x=b.uniforms,E=0,O=16;for(let T=0,H=x.length;T<H;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,R=M.length;S<R;S++){let N=M[S],L=Array.isArray(N.value)?N.value:[N.value];for(let B=0,q=L.length;B<q;B++){let z=L[B],et=_(z),W=E%O,ht=W%et.boundary,ut=W+ht;if(E+=ht,ut!==0&&O-ut<et.storage)E+=O-ut;N.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=E,E+=et.storage}}}let A=E%O;if(A>0)E+=O-A;return b.__size=E,b.__cache={},this}function _(b){let x={boundary:0,storage:0};if(typeof b==="number"||typeof b==="boolean")x.boundary=4,x.storage=4;else if(b.isVector2)x.boundary=8,x.storage=8;else if(b.isVector3||b.isColor)x.boundary=16,x.storage=12;else if(b.isVector4)x.boundary=16,x.storage=16;else if(b.isMatrix3)x.boundary=48,x.storage=48;else if(b.isMatrix4)x.boundary=64,x.storage=64;else if(b.isTexture)console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.");else console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b);return x}function p(b){let x=b.target;x.removeEventListener("dispose",p);let E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(let b in s)t.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Vi{constructor(t={}){let{canvas:e=$a(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=r;let m=new Uint32Array(4),v=new Int32Array(4),_=null,p=null,f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace="srgb",this.toneMapping=0,this.toneMappingExposure=1;let x=this,E=!1,O=0,A=0,T=null,H=-1,M=null,S=new ce,R=new ce,N=null,L=new qt(0),B=0,{width:q,height:z}=e,et=1,W=null,ht=null,ut=new ce(0,0,q,z),yt=new ce(0,0,q,z),Lt=!1,C=new Vs,G=!1,Y=!1,xt=new le,lt=new le,Mt=new D,Dt=new ce,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Xt(){return T===null?et:1}let I=n;function Zt(y,F){return e.getContext(y,F)}try{let y={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine","three.js r170");if(e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),I===null){if(I=Zt("webgl2",y),I===null)if(Zt("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ft,Ot,J,Tt,ot,dt,w,g,k,Q,nt,Z,j,st,at,It,it,pt,zt,Pt,mt,Ut,Bt,te;function P(){if(Ft=new ch(I),Ft.init(),Ut=new Gu(I,Ft),Ot=new ih(I,Ft,t,Ut),J=new Bu(I,Ft),Ot.reverseDepthBuffer&&d)J.buffers.depth.setReversed(!0);Tt=new dh(I),ot=new Au,dt=new ku(I,Ft,J,ot,Ot,Ut,Tt),w=new rh(x),g=new lh(x),k=new xo(I),Bt=new eh(I,k),Q=new hh(I,k,Tt,Bt),nt=new ph(I,Q,k,Tt),zt=new fh(I,Ot,dt),It=new sh(ot),Z=new wu(x,w,g,Ft,Ot,Bt,It),j=new qu(x,ot),st=new Tu,at=new Du(Ft),pt=new th(x,w,g,J,nt,h,o),it=new Nu(x,nt,Ot),te=new Yu(I,Tt,Ot,J),Pt=new nh(I,Ft,Tt),mt=new uh(I,Ft,Tt),Tt.programs=Z.programs,x.capabilities=Ot,x.extensions=Ft,x.properties=ot,x.renderLists=st,x.shadowMap=it,x.state=J,x.info=Tt}P();let rt=new Ta(x,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let y=Ft.get("WEBGL_lose_context");if(y)y.loseContext()},this.forceContextRestore=function(){let y=Ft.get("WEBGL_lose_context");if(y)y.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(y){if(y===void 0)return;et=y,this.setSize(q,z,!1)},this.getSize=function(y){return y.set(q,z)},this.setSize=function(y,F,V=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}if(q=y,z=F,e.width=Math.floor(y*et),e.height=Math.floor(F*et),V===!0)e.style.width=y+"px",e.style.height=F+"px";this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set(q*et,z*et).floor()},this.setDrawingBufferSize=function(y,F,V){q=y,z=F,et=V,e.width=Math.floor(y*V),e.height=Math.floor(F*V),this.setViewport(0,0,y,F)},this.getCurrentViewport=function(y){return y.copy(S)},this.getViewport=function(y){return y.copy(ut)},this.setViewport=function(y,F,V,X){if(y.isVector4)ut.set(y.x,y.y,y.z,y.w);else ut.set(y,F,V,X);J.viewport(S.copy(ut).multiplyScalar(et).round())},this.getScissor=function(y){return y.copy(yt)},this.setScissor=function(y,F,V,X){if(y.isVector4)yt.set(y.x,y.y,y.z,y.w);else yt.set(y,F,V,X);J.scissor(R.copy(yt).multiplyScalar(et).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(y){J.setScissorTest(Lt=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){ht=y},this.getClearColor=function(y){return y.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor.apply(pt,arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha.apply(pt,arguments)},this.clear=function(y=!0,F=!0,V=!0){let X=0;if(y){let U=!1;if(T!==null){let ct=T.texture.format;U=ct===1033||ct===1031||ct===1029}if(U){let ct=T.texture.type,_t=ct===1009||ct===1014||ct===1012||ct===1020||ct===1017||ct===1018,St=pt.getClearColor(),bt=pt.getClearAlpha(),{r:Nt,g:kt,b:wt}=St;if(_t)m[0]=Nt,m[1]=kt,m[2]=wt,m[3]=bt,I.clearBufferuiv(I.COLOR,0,m);else v[0]=Nt,v[1]=kt,v[2]=wt,v[3]=bt,I.clearBufferiv(I.COLOR,0,v)}else X|=I.COLOR_BUFFER_BIT}if(F)X|=I.DEPTH_BUFFER_BIT;if(V)X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),st.dispose(),at.dispose(),ot.dispose(),w.dispose(),g.dispose(),nt.dispose(),Bt.dispose(),te.dispose(),Z.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",ke),rt.removeEventListener("sessionend",ir),hn.stop()};function K(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let y=Tt.autoReset,F=it.enabled,V=it.autoUpdate,X=it.needsUpdate,U=it.type;P(),Tt.autoReset=y,it.enabled=F,it.autoUpdate=V,it.needsUpdate=X,it.type=U}function vt(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function gt(y){let F=y.target;F.removeEventListener("dispose",gt),Wt(F)}function Wt(y){oe(y),ot.remove(y)}function oe(y){let F=ot.get(y).programs;if(F!==void 0){if(F.forEach(function(V){Z.releaseProgram(V)}),y.isShaderMaterial)Z.releaseShaderCache(y)}}this.renderBufferDirect=function(y,F,V,X,U,ct){if(F===null)F=At;let _t=U.isMesh&&U.matrixWorld.determinant()<0,St=qa(y,F,V,X,U);J.setMaterial(X,_t);let bt=V.index,Nt=1;if(X.wireframe===!0){if(bt=Q.getWireframeAttribute(V),bt===void 0)return;Nt=2}let kt=V.drawRange,wt=V.attributes.position,Jt=kt.start*Nt,ee=(kt.start+kt.count)*Nt;if(ct!==null)Jt=Math.max(Jt,ct.start*Nt),ee=Math.min(ee,(ct.start+ct.count)*Nt);if(bt!==null)Jt=Math.max(Jt,0),ee=Math.min(ee,bt.count);else if(wt!==void 0&&wt!==null)Jt=Math.max(Jt,0),ee=Math.min(ee,wt.count);let ie=ee-Jt;if(ie<0||ie===1/0)return;Bt.setup(U,X,St,V,bt);let Me,Kt=Pt;if(bt!==null)Me=k.get(bt),Kt=mt,Kt.setIndex(Me);if(U.isMesh)if(X.wireframe===!0)J.setLineWidth(X.wireframeLinewidth*Xt()),Kt.setMode(I.LINES);else Kt.setMode(I.TRIANGLES);else if(U.isLine){let Ct=X.linewidth;if(Ct===void 0)Ct=1;if(J.setLineWidth(Ct*Xt()),U.isLineSegments)Kt.setMode(I.LINES);else if(U.isLineLoop)Kt.setMode(I.LINE_LOOP);else Kt.setMode(I.LINE_STRIP)}else if(U.isPoints)Kt.setMode(I.POINTS);else if(U.isSprite)Kt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(!Ft.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ct,_multiDrawCounts:Xe,_multiDrawCount:Qt}=U,Le=bt?k.get(bt).bytesPerElement:1,bn=ot.get(X).currentProgram.getUniforms();for(let Ae=0;Ae<Qt;Ae++)bn.setValue(I,"_gl_DrawID",Ae),Kt.render(Ct[Ae]/Le,Xe[Ae])}else Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)Kt.renderInstances(Jt,ie,U.count);else if(V.isInstancedBufferGeometry){let Ct=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Xe=Math.min(V.instanceCount,Ct);Kt.renderInstances(Jt,ie,Xe)}else Kt.render(Jt,ie)};function ge(y,F,V){if(y.transparent===!0&&y.side===2&&y.forceSinglePass===!1)y.side=1,y.needsUpdate=!0,mi(y,F,V),y.side=0,y.needsUpdate=!0,mi(y,F,V),y.side=2;else mi(y,F,V)}this.compile=function(y,F,V=null){if(V===null)V=y;if(p=at.get(V),p.init(F),b.push(p),V.traverseVisible(function(U){if(U.isLight&&U.layers.test(F.layers)){if(p.pushLight(U),U.castShadow)p.pushShadow(U)}}),y!==V)y.traverseVisible(function(U){if(U.isLight&&U.layers.test(F.layers)){if(p.pushLight(U),U.castShadow)p.pushShadow(U)}});p.setupLights();let X=new Set;return y.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let ct=U.material;if(ct)if(Array.isArray(ct))for(let _t=0;_t<ct.length;_t++){let St=ct[_t];ge(St,V,U),X.add(St)}else ge(ct,V,U),X.add(ct)}),b.pop(),p=null,X},this.compileAsync=function(y,F,V=null){let X=this.compile(y,F,V);return new Promise((U)=>{function ct(){if(X.forEach(function(_t){if(ot.get(_t).currentProgram.isReady())X.delete(_t)}),X.size===0){U(y);return}setTimeout(ct,10)}if(Ft.get("KHR_parallel_shader_compile")!==null)ct();else setTimeout(ct,10)})};let $t=null;function Ve(y){if($t)$t(y)}function ke(){hn.stop()}function ir(){hn.start()}let hn=new da;if(hn.setAnimationLoop(Ve),typeof self<"u")hn.setContext(self);this.setAnimationLoop=function(y){$t=y,rt.setAnimationLoop(y),y===null?hn.stop():hn.start()},rt.addEventListener("sessionstart",ke),rt.addEventListener("sessionend",ir),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0)y.updateMatrixWorld();if(F.parent===null&&F.matrixWorldAutoUpdate===!0)F.updateMatrixWorld();if(rt.enabled===!0&&rt.isPresenting===!0){if(rt.cameraAutoUpdate===!0)rt.updateCamera(F);F=rt.getCamera()}if(y.isScene===!0)y.onBeforeRender(x,y,F,T);if(p=at.get(y,b.length),p.init(F),b.push(p),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),C.setFromProjectionMatrix(lt),Y=this.localClippingEnabled,G=It.init(this.clippingPlanes,Y),_=st.get(y,f.length),_.init(),f.push(_),rt.enabled===!0&&rt.isPresenting===!0){let ct=x.xr.getDepthSensingMesh();if(ct!==null)ji(ct,F,-1/0,x.sortObjects)}if(ji(y,F,0,x.sortObjects),_.finish(),x.sortObjects===!0)_.sort(W,ht);if(Et=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Et)pt.addToRenderList(_,y);if(this.info.render.frame++,G===!0)It.beginShadows();let V=p.state.shadowsArray;if(it.render(V,y,F),G===!0)It.endShadows();if(this.info.autoReset===!0)this.info.reset();let X=_.opaque,U=_.transmissive;if(p.setupLights(),F.isArrayCamera){let ct=F.cameras;if(U.length>0)for(let _t=0,St=ct.length;_t<St;_t++){let bt=ct[_t];rr(X,U,y,bt)}if(Et)pt.render(y);for(let _t=0,St=ct.length;_t<St;_t++){let bt=ct[_t];sr(_,y,bt,bt.viewport)}}else{if(U.length>0)rr(X,U,y,F);if(Et)pt.render(y);sr(_,y,F)}if(T!==null)dt.updateMultisampleRenderTarget(T),dt.updateRenderTargetMipmap(T);if(y.isScene===!0)y.onAfterRender(x,y,F);if(Bt.resetDefaultState(),H=-1,M=null,b.pop(),b.length>0){if(p=b[b.length-1],G===!0)It.setGlobalState(x.clippingPlanes,p.state.camera)}else p=null;if(f.pop(),f.length>0)_=f[f.length-1];else _=null};function ji(y,F,V,X){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD){if(y.autoUpdate===!0)y.update(F)}else if(y.isLight){if(p.pushLight(y),y.castShadow)p.pushShadow(y)}else if(y.isSprite){if(!y.frustumCulled||C.intersectsSprite(y)){if(X)Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(lt);let _t=nt.update(y),St=y.material;if(St.visible)_.push(y,_t,St,V,Dt.z,null)}}else if(y.isMesh||y.isLine||y.isPoints){if(!y.frustumCulled||C.intersectsObject(y)){let _t=nt.update(y),St=y.material;if(X){if(y.boundingSphere!==void 0){if(y.boundingSphere===null)y.computeBoundingSphere();Dt.copy(y.boundingSphere.center)}else{if(_t.boundingSphere===null)_t.computeBoundingSphere();Dt.copy(_t.boundingSphere.center)}Dt.applyMatrix4(y.matrixWorld).applyMatrix4(lt)}if(Array.isArray(St)){let bt=_t.groups;for(let Nt=0,kt=bt.length;Nt<kt;Nt++){let wt=bt[Nt],Jt=St[wt.materialIndex];if(Jt&&Jt.visible)_.push(y,_t,Jt,V,Dt.z,wt)}}else if(St.visible)_.push(y,_t,St,V,Dt.z,null)}}}let ct=y.children;for(let _t=0,St=ct.length;_t<St;_t++)ji(ct[_t],F,V,X)}function sr(y,F,V,X){let{opaque:U,transmissive:ct,transparent:_t}=y;if(p.setupLightsView(V),G===!0)It.setGlobalState(x.clippingPlanes,V);if(X)J.viewport(S.copy(X));if(U.length>0)pi(U,F,V);if(ct.length>0)pi(ct,F,V);if(_t.length>0)pi(_t,F,V);J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function rr(y,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget[X.id]===void 0)p.state.transmissionRenderTarget[X.id]=new cn(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace});let ct=p.state.transmissionRenderTarget[X.id],_t=X.viewport||S;ct.setSize(_t.z,_t.w);let St=x.getRenderTarget();if(x.setRenderTarget(ct),x.getClearColor(L),B=x.getClearAlpha(),B<1)x.setClearColor(16777215,0.5);if(x.clear(),Et)pt.render(V);let bt=x.toneMapping;x.toneMapping=0;let Nt=X.viewport;if(X.viewport!==void 0)X.viewport=void 0;if(p.setupLightsView(X),G===!0)It.setGlobalState(x.clippingPlanes,X);if(pi(y,V,X),dt.updateMultisampleRenderTarget(ct),dt.updateRenderTargetMipmap(ct),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let wt=0,Jt=F.length;wt<Jt;wt++){let ee=F[wt],{object:ie,geometry:Me,material:Kt,group:Ct}=ee;if(Kt.side===2&&ie.layers.test(X.layers)){let Xe=Kt.side;Kt.side=1,Kt.needsUpdate=!0,ar(ie,V,X,Me,Kt,Ct),Kt.side=Xe,Kt.needsUpdate=!0,kt=!0}}if(kt===!0)dt.updateMultisampleRenderTarget(ct),dt.updateRenderTargetMipmap(ct)}if(x.setRenderTarget(St),x.setClearColor(L,B),Nt!==void 0)X.viewport=Nt;x.toneMapping=bt}function pi(y,F,V){let X=F.isScene===!0?F.overrideMaterial:null;for(let U=0,ct=y.length;U<ct;U++){let _t=y[U],{object:St,geometry:bt}=_t,Nt=X===null?_t.material:X,kt=_t.group;if(St.layers.test(V.layers))ar(St,F,V,bt,Nt,kt)}}function ar(y,F,V,X,U,ct){if(y.onBeforeRender(x,F,V,X,U,ct),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),U.onBeforeRender(x,F,V,X,y,ct),U.transparent===!0&&U.side===2&&U.forceSinglePass===!1)U.side=1,U.needsUpdate=!0,x.renderBufferDirect(V,F,X,U,y,ct),U.side=0,U.needsUpdate=!0,x.renderBufferDirect(V,F,X,U,y,ct),U.side=2;else x.renderBufferDirect(V,F,X,U,y,ct);y.onAfterRender(x,F,V,X,U,ct)}function mi(y,F,V){if(F.isScene!==!0)F=At;let X=ot.get(y),U=p.state.lights,ct=p.state.shadowsArray,_t=U.state.version,St=Z.getParameters(y,U.state,ct,F,V),bt=Z.getProgramCacheKey(St),Nt=X.programs;if(X.environment=y.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(y.isMeshStandardMaterial?g:w).get(y.envMap||X.environment),X.envMapRotation=X.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,Nt===void 0)y.addEventListener("dispose",gt),Nt=new Map,X.programs=Nt;let kt=Nt.get(bt);if(kt!==void 0){if(X.currentProgram===kt&&X.lightsStateVersion===_t)return lr(y,St),kt}else St.uniforms=Z.getUniforms(y),y.onBeforeCompile(St,x),kt=Z.acquireProgram(St,bt),Nt.set(bt,kt),X.uniforms=St.uniforms;let wt=X.uniforms;if(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)wt.clippingPlanes=It.uniform;if(lr(y,St),X.needsLights=Za(y),X.lightsStateVersion=_t,X.needsLights)wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix;return X.currentProgram=kt,X.uniformsList=null,kt}function or(y){if(y.uniformsList===null){let F=y.currentProgram.getUniforms();y.uniformsList=ni.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function lr(y,F){let V=ot.get(y);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function qa(y,F,V,X,U){if(F.isScene!==!0)F=At;dt.resetTextureUnits();let ct=F.fog,_t=X.isMeshStandardMaterial?F.environment:null,St=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:"srgb-linear",bt=(X.isMeshStandardMaterial?g:w).get(X.envMap||_t),Nt=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,ee=!!V.morphAttributes.color,ie=0;if(X.toneMapped){if(T===null||T.isXRRenderTarget===!0)ie=x.toneMapping}let Me=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Kt=Me!==void 0?Me.length:0,Ct=ot.get(X),Xe=p.state.lights;if(G===!0){if(Y===!0||y!==M){let Ce=y===M&&X.id===H;It.setState(X,y,Ce)}}let Qt=!1;if(X.version===Ct.__version){if(Ct.needsLights&&Ct.lightsStateVersion!==Xe.state.version)Qt=!0;else if(Ct.outputColorSpace!==St)Qt=!0;else if(U.isBatchedMesh&&Ct.batching===!1)Qt=!0;else if(!U.isBatchedMesh&&Ct.batching===!0)Qt=!0;else if(U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null)Qt=!0;else if(U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null)Qt=!0;else if(U.isInstancedMesh&&Ct.instancing===!1)Qt=!0;else if(!U.isInstancedMesh&&Ct.instancing===!0)Qt=!0;else if(U.isSkinnedMesh&&Ct.skinning===!1)Qt=!0;else if(!U.isSkinnedMesh&&Ct.skinning===!0)Qt=!0;else if(U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null)Qt=!0;else if(U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null)Qt=!0;else if(U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null)Qt=!0;else if(U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null)Qt=!0;else if(Ct.envMap!==bt)Qt=!0;else if(X.fog===!0&&Ct.fog!==ct)Qt=!0;else if(Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==It.numPlanes||Ct.numIntersection!==It.numIntersection))Qt=!0;else if(Ct.vertexAlphas!==Nt)Qt=!0;else if(Ct.vertexTangents!==kt)Qt=!0;else if(Ct.morphTargets!==wt)Qt=!0;else if(Ct.morphNormals!==Jt)Qt=!0;else if(Ct.morphColors!==ee)Qt=!0;else if(Ct.toneMapping!==ie)Qt=!0;else if(Ct.morphTargetsCount!==Kt)Qt=!0}else Qt=!0,Ct.__version=X.version;let Le=Ct.currentProgram;if(Qt===!0)Le=mi(X,F,U);let bn=!1,Ae=!1,Yn=!1,se=Le.getUniforms(),Ge=Ct.uniforms;if(J.useProgram(Le.program))bn=!0,Ae=!0,Yn=!0;if(X.id!==H)H=X.id,Ae=!0;if(bn||M!==y){if(J.buffers.depth.getReversed())xt.copy(y.projectionMatrix),Qa(xt),ja(xt),se.setValue(I,"projectionMatrix",xt);else se.setValue(I,"projectionMatrix",y.projectionMatrix);se.setValue(I,"viewMatrix",y.matrixWorldInverse);let je=se.map.cameraPosition;if(je!==void 0)je.setValue(I,Mt.setFromMatrixPosition(y.matrixWorld));if(Ot.logarithmicDepthBuffer)se.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2));if(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)se.setValue(I,"isOrthographic",y.isOrthographicCamera===!0);if(M!==y)M=y,Ae=!0,Yn=!0}if(U.isSkinnedMesh){se.setOptional(I,U,"bindMatrix"),se.setOptional(I,U,"bindMatrixInverse");let Ce=U.skeleton;if(Ce){if(Ce.boneTexture===null)Ce.computeBoneTexture();se.setValue(I,"boneTexture",Ce.boneTexture,dt)}}if(U.isBatchedMesh){if(se.setOptional(I,U,"batchingTexture"),se.setValue(I,"batchingTexture",U._matricesTexture,dt),se.setOptional(I,U,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",U._indirectTexture,dt),se.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null)se.setValue(I,"batchingColorTexture",U._colorsTexture,dt)}let Zn=V.morphAttributes;if(Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)zt.update(U,V,Le);if(Ae||Ct.receiveShadow!==U.receiveShadow)Ct.receiveShadow=U.receiveShadow,se.setValue(I,"receiveShadow",U.receiveShadow);if(X.isMeshGouraudMaterial&&X.envMap!==null)Ge.envMap.value=bt,Ge.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1;if(X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null)Ge.envMapIntensity.value=F.environmentIntensity;if(Ae){if(se.setValue(I,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights)Ya(Ge,Yn);if(ct&&X.fog===!0)j.refreshFogUniforms(Ge,ct);j.refreshMaterialUniforms(Ge,X,et,z,p.state.transmissionRenderTarget[y.id]),ni.upload(I,or(Ct),Ge,dt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0)ni.upload(I,or(Ct),Ge,dt),X.uniformsNeedUpdate=!1;if(X.isSpriteMaterial)se.setValue(I,"center",U.center);if(se.setValue(I,"modelViewMatrix",U.modelViewMatrix),se.setValue(I,"normalMatrix",U.normalMatrix),se.setValue(I,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let Ce=X.uniformsGroups;for(let je=0,tn=Ce.length;je<tn;je++){let cr=Ce[je];te.update(cr,Le),te.bind(cr,Le)}}return Le}function Ya(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Za(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}if(this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(y,F,V){ot.get(y.texture).__webglTexture=F,ot.get(y.depthTexture).__webglTexture=V;let X=ot.get(y);if(X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=V===void 0,!X.__autoAllocateDepthBuffer){if(Ft.has("WEBGL_multisampled_render_to_texture")===!0)console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1}},this.setRenderTargetFramebuffer=function(y,F){let V=ot.get(y);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(y,F=0,V=0){T=y,O=F,A=V;let X=!0,U=null,ct=!1,_t=!1;if(y){let bt=ot.get(y);if(bt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(I.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)dt.setupRenderTarget(y);else if(bt.__hasExternalTextures)dt.rebindTextures(y,ot.get(y.texture).__webglTexture,ot.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let wt=y.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&ot.has(wt)&&(y.width!==wt.image.width||y.height!==wt.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");dt.setupDepthRenderbuffer(y)}}let Nt=y.texture;if(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)_t=!0;let kt=ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget){if(Array.isArray(kt[F]))U=kt[F][V];else U=kt[F];ct=!0}else if(y.samples>0&&dt.useMultisampledRTT(y)===!1)U=ot.get(y).__webglMultisampledFramebuffer;else if(Array.isArray(kt))U=kt[V];else U=kt;S.copy(y.viewport),R.copy(y.scissor),N=y.scissorTest}else S.copy(ut).multiplyScalar(et).floor(),R.copy(yt).multiplyScalar(et).floor(),N=Lt;if(J.bindFramebuffer(I.FRAMEBUFFER,U)&&X)J.drawBuffers(y,U);if(J.viewport(S),J.scissor(R),J.setScissorTest(N),ct){let bt=ot.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,V)}else if(_t){let bt=ot.get(y.texture),Nt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,V||0,Nt)}H=-1},this.readRenderTargetPixels=function(y,F,V,X,U,ct,_t){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0)St=St[_t];if(St){J.bindFramebuffer(I.FRAMEBUFFER,St);try{let bt=y.texture,{format:Nt,type:kt}=bt;if(!Ot.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(F>=0&&F<=y.width-X&&(V>=0&&V<=y.height-U))I.readPixels(F,V,X,U,Ut.convert(Nt),Ut.convert(kt),ct)}finally{let bt=T!==null?ot.get(T).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(y,F,V,X,U,ct,_t){if(!(y&&y.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=ot.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_t!==void 0)St=St[_t];if(St){let bt=y.texture,{format:Nt,type:kt}=bt;if(!Ot.textureFormatReadable(Nt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(kt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=y.width-X&&(V>=0&&V<=y.height-U)){J.bindFramebuffer(I.FRAMEBUFFER,St);let wt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.bufferData(I.PIXEL_PACK_BUFFER,ct.byteLength,I.STREAM_READ),I.readPixels(F,V,X,U,Ut.convert(Nt),Ut.convert(kt),0);let Jt=T!==null?ot.get(T).__webglFramebuffer:null;J.bindFramebuffer(I.FRAMEBUFFER,Jt);let ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ka(I,ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,wt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ct),I.deleteBuffer(wt),I.deleteSync(ee),ct}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,F=null,V=0){if(y.isTexture!==!0)ti("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1];let X=Math.pow(2,-V),U=Math.floor(y.image.width*X),ct=Math.floor(y.image.height*X),_t=F!==null?F.x:0,St=F!==null?F.y:0;dt.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,V,0,0,_t,St,U,ct),J.unbindTexture()},this.copyTextureToTexture=function(y,F,V=null,X=null,U=0){if(y.isTexture!==!0)ti("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,y=arguments[1],F=arguments[2],U=arguments[3]||0,V=null;let ct,_t,St,bt,Nt,kt,wt,Jt,ee,ie=y.isCompressedTexture?y.mipmaps[U]:y.image;if(V!==null)ct=V.max.x-V.min.x,_t=V.max.y-V.min.y,St=V.isBox3?V.max.z-V.min.z:1,bt=V.min.x,Nt=V.min.y,kt=V.isBox3?V.min.z:0;else ct=ie.width,_t=ie.height,St=ie.depth||1,bt=0,Nt=0,kt=0;if(X!==null)wt=X.x,Jt=X.y,ee=X.z;else wt=0,Jt=0,ee=0;let Me=Ut.convert(F.format),Kt=Ut.convert(F.type),Ct;if(F.isData3DTexture)dt.setTexture3D(F,0),Ct=I.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)dt.setTexture2DArray(F,0),Ct=I.TEXTURE_2D_ARRAY;else dt.setTexture2D(F,0),Ct=I.TEXTURE_2D;I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);let Xe=I.getParameter(I.UNPACK_ROW_LENGTH),Qt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Le=I.getParameter(I.UNPACK_SKIP_PIXELS),bn=I.getParameter(I.UNPACK_SKIP_ROWS),Ae=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,bt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,kt);let Yn=y.isDataArrayTexture||y.isData3DTexture,se=F.isDataArrayTexture||F.isData3DTexture;if(y.isRenderTargetTexture||y.isDepthTexture){let Ge=ot.get(y),Zn=ot.get(F),Ce=ot.get(Ge.__renderTarget),je=ot.get(Zn.__renderTarget);J.bindFramebuffer(I.READ_FRAMEBUFFER,Ce.__webglFramebuffer),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let tn=0;tn<St;tn++){if(Yn)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(y).__webglTexture,U,kt+tn);if(y.isDepthTexture){if(se)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ot.get(F).__webglTexture,U,ee+tn);I.blitFramebuffer(bt,Nt,ct,_t,wt,Jt,ct,_t,I.DEPTH_BUFFER_BIT,I.NEAREST)}else if(se)I.copyTexSubImage3D(Ct,U,wt,Jt,ee+tn,bt,Nt,ct,_t);else I.copyTexSubImage2D(Ct,U,wt,Jt,ee+tn,bt,Nt,ct,_t)}J.bindFramebuffer(I.READ_FRAMEBUFFER,null),J.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(se)if(y.isDataTexture||y.isData3DTexture)I.texSubImage3D(Ct,U,wt,Jt,ee,ct,_t,St,Me,Kt,ie.data);else if(F.isCompressedArrayTexture)I.compressedTexSubImage3D(Ct,U,wt,Jt,ee,ct,_t,St,Me,ie.data);else I.texSubImage3D(Ct,U,wt,Jt,ee,ct,_t,St,Me,Kt,ie);else if(y.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,U,wt,Jt,ct,_t,Me,Kt,ie.data);else if(y.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,U,wt,Jt,ie.width,ie.height,Me,ie.data);else I.texSubImage2D(I.TEXTURE_2D,U,wt,Jt,ct,_t,Me,Kt,ie);if(I.pixelStorei(I.UNPACK_ROW_LENGTH,Xe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,bn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ae),U===0&&F.generateMipmaps)I.generateMipmap(Ct);J.unbindTexture()},this.copyTextureToTexture3D=function(y,F,V=null,X=null,U=0){if(y.isTexture!==!0)ti("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,X=arguments[1]||null,y=arguments[2],F=arguments[3],U=arguments[4]||0;return ti('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,F,V,X,U)},this.initRenderTarget=function(y){if(ot.get(y).__webglFramebuffer===void 0)dt.setupRenderTarget(y)},this.initTexture=function(y){if(y.isCubeTexture)dt.setTextureCube(y,0);else if(y.isData3DTexture)dt.setTexture3D(y,0);else if(y.isDataArrayTexture||y.isCompressedArrayTexture)dt.setTexture2DArray(y,0);else dt.setTexture2D(y,0);J.unbindTexture()},this.resetState=function(){O=0,A=0,T=null,J.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2000}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Mn extends we{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wn extends Ht{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}class Ra extends Gn{static get type(){return"PointsMaterial"}constructor(t){super();this.isPointsMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var ta=new le,Us=new Bs,Ni=new li,Oi=new D;class Be extends we{constructor(t=new ne,e=new Ra){super();this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Ni.copy(n.boundingSphere),Ni.applyMatrix4(i),Ni.radius+=s,t.ray.intersectsSphere(Ni)===!1)return;ta.copy(i).invert(),Us.copy(t.ray).applyMatrix4(ta);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,r.start),h=Math.min(l.count,r.start+r.count);for(let m=d,v=h;m<v;m++){let _=l.getX(m);Oi.fromBufferAttribute(u,_),ea(Oi,_,o,i,t,e,this)}}else{let d=Math.max(0,r.start),h=Math.min(u.count,r.start+r.count);for(let m=d,v=h;m<v;m++)Oi.fromBufferAttribute(u,m),ea(Oi,m,o,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ea(t,e,n,i,s,r,a){let o=Us.distanceSqToPoint(t);if(o<n){let l=new D;Us.closestPointToPoint(t,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new Rt:new D);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new D,i=[],s=[],r=[],a=new D,o=new le;for(let h=0;h<=t;h++){let m=h/t;i[h]=this.getTangentAt(m,new D)}s[0]=new D,r[0]=new D;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(_e(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,m))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(_e(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let m=1;m<=t;m++)s[m].applyMatrix4(o.makeRotationAxis(i[m],h*m)),r[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xi extends ze{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new Rt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ca extends Xi{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function Ys(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,m*=u,s(a,o,h,m)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Bi=new D,Rs=new Ys,Cs=new Ys,Is=new Ys;class Ia extends ze{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Bi.subVectors(i[0],i[1]).add(i[0]),l=Bi;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Bi.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Bi;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,m=Math.pow(l.distanceToSquared(u),h),v=Math.pow(u.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(c),h);if(v<0.0001)v=1;if(m<0.0001)m=v;if(_<0.0001)_=v;Rs.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,m,v,_),Cs.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,m,v,_),Is.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,m,v,_)}else if(this.curveType==="catmullrom")Rs.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Cs.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Is.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set(Rs.calc(o),Cs.calc(o),Is.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function na(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Zu(t,e){let n=1-t;return n*n*e}function Ju(t,e){return 2*(1-t)*t*e}function $u(t,e){return t*t*e}function ii(t,e,n,i){return Zu(t,e)+Ju(t,n)+$u(t,i)}function Ku(t,e){let n=1-t;return n*n*n*e}function Qu(t,e){let n=1-t;return 3*n*n*t*e}function ju(t,e){return 3*(1-t)*t*t*e}function td(t,e){return t*t*t*e}function si(t,e,n,i,s){return Ku(t,e)+Qu(t,n)+ju(t,i)+td(t,s)}class Zs extends ze{constructor(t=new Rt,e=new Rt,n=new Rt,i=new Rt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Rt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(si(t,i.x,s.x,r.x,a.x),si(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pa extends ze{constructor(t=new D,e=new D,n=new D,i=new D){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(si(t,i.x,s.x,r.x,a.x),si(t,i.y,s.y,r.y,a.y),si(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Js extends ze{constructor(t=new Rt,e=new Rt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class La extends ze{constructor(t=new D,e=new D){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $s extends ze{constructor(t=new Rt,e=new Rt,n=new Rt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ii(t,i.x,s.x,r.x),ii(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Da extends ze{constructor(t=new D,e=new D,n=new D){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(ii(t,i.x,s.x,r.x),ii(t,i.y,s.y,r.y),ii(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ks extends ze{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(na(a,o.x,l.x,c.x,u.x),na(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Rt().fromArray(i))}return this}}var ia=Object.freeze({__proto__:null,ArcCurve:Ca,CatmullRomCurve3:Ia,CubicBezierCurve:Zs,CubicBezierCurve3:Pa,EllipseCurve:Xi,LineCurve:Js,LineCurve3:La,QuadraticBezierCurve:$s,QuadraticBezierCurve3:Da,SplineCurve:Ks});class Ua extends ze{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ia[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ia[i.type]().fromJSON(i))}return this}}class Fa extends Ua{constructor(t){super();if(this.type="Path",this.currentPoint=new Rt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Js(this.currentPoint.clone(),new Rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new $s(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Zs(this.currentPoint.clone(),new Rt(t,e),new Rt(n,i),new Rt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ks(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new Xi(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Qs extends ne{constructor(t=[new Rt(0,-0.5),new Rt(0.5,0),new Rt(0,0.5)],e=12,n=0,i=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=_e(i,0,Math.PI*2);let s=[],r=[],a=[],o=[],l=[],c=1/e,u=new D,d=new Rt,h=new D,m=new D,v=new D,_=0,p=0;for(let f=0;f<=t.length-1;f++)switch(f){case 0:_=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-_,h.z=p*0,v.copy(h),h.normalize(),o.push(h.x,h.y,h.z);break;case t.length-1:o.push(v.x,v.y,v.z);break;default:_=t[f+1].x-t[f].x,p=t[f+1].y-t[f].y,h.x=p*1,h.y=-_,h.z=p*0,m.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),o.push(h.x,h.y,h.z),v.copy(m)}for(let f=0;f<=e;f++){let b=n+f*c*i,x=Math.sin(b),E=Math.cos(b);for(let O=0;O<=t.length-1;O++){u.x=t[O].x*x,u.y=t[O].y,u.z=t[O].x*E,r.push(u.x,u.y,u.z),d.x=f/e,d.y=O/(t.length-1),a.push(d.x,d.y);let A=o[3*O+0]*x,T=o[3*O+1],H=o[3*O+0]*E;l.push(A,T,H)}}for(let f=0;f<e;f++)for(let b=0;b<t.length-1;b++){let x=b+f*t.length,E=x,O=x+t.length,A=x+t.length+1,T=x+1;s.push(E,O,T),s.push(A,T,O)}this.setIndex(s),this.setAttribute("position",new ae(r,3)),this.setAttribute("uv",new ae(a,2)),this.setAttribute("normal",new ae(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.points,t.segments,t.phiStart,t.phiLength)}}class qi extends Qs{constructor(t=1,e=1,n=4,i=8){let s=new Fa;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*0.5);super(s.getPoints(n),i);this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:i}}static fromJSON(t){return new qi(t.radius,t.length,t.capSegments,t.radialSegments)}}class Yi extends ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new D,c=new Rt;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let u=0,d=3;u<=e;u++,d+=3){let h=n+u/e*i;l.x=t*Math.cos(h),l.y=t*Math.sin(h),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[d]/t+1)/2,c.y=(r[d+1]/t+1)/2,o.push(c.x,c.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(a,3)),this.setAttribute("uv",new ae(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class js extends ne{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],d=[],h=[],m=0,v=[],_=n/2,p=0;if(f(),r===!1){if(t>0)b(!0);if(e>0)b(!1)}this.setIndex(c),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(h,2));function f(){let x=new D,E=new D,O=0,A=(e-t)/n;for(let T=0;T<=s;T++){let H=[],M=T/s,S=M*(e-t)+t;for(let R=0;R<=i;R++){let N=R/i,L=N*o+a,B=Math.sin(L),q=Math.cos(L);E.x=S*B,E.y=-M*n+_,E.z=S*q,u.push(E.x,E.y,E.z),x.set(B,A,q).normalize(),d.push(x.x,x.y,x.z),h.push(N,1-M),H.push(m++)}v.push(H)}for(let T=0;T<i;T++)for(let H=0;H<s;H++){let M=v[H][T],S=v[H+1][T],R=v[H+1][T+1],N=v[H][T+1];if(t>0||H!==0)c.push(M,S,N),O+=3;if(e>0||H!==s-1)c.push(S,R,N),O+=3}l.addGroup(p,O,0),p+=O}function b(x){let E=m,O=new Rt,A=new D,T=0,H=x===!0?t:e,M=x===!0?1:-1;for(let R=1;R<=i;R++)u.push(0,_*M,0),d.push(0,M,0),h.push(0.5,0.5),m++;let S=m;for(let R=0;R<=i;R++){let L=R/i*o+a,B=Math.cos(L),q=Math.sin(L);A.x=H*q,A.y=_*M,A.z=H*B,u.push(A.x,A.y,A.z),d.push(0,M,0),O.x=B*0.5+0.5,O.y=q*0.5*M+0.5,h.push(O.x,O.y),m++}for(let R=0;R<i;R++){let N=E+R,L=S+R;if(x===!0)c.push(L,L+1,N);else c.push(L+1,L,N);T+=3}l.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zi extends js{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Zi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ui extends ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new D,d=new D,h=[],m=[],v=[],_=[];for(let p=0;p<=n;p++){let f=[],b=p/n,x=0;if(p===0&&r===0)x=0.5/e;else if(p===n&&o===Math.PI)x=-0.5/e;for(let E=0;E<=e;E++){let O=E/e;u.x=-t*Math.cos(i+O*s)*Math.sin(r+b*a),u.y=t*Math.cos(r+b*a),u.z=t*Math.sin(i+O*s)*Math.sin(r+b*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),_.push(O+x,1-b),f.push(l++)}c.push(f)}for(let p=0;p<n;p++)for(let f=0;f<e;f++){let b=c[p][f+1],x=c[p][f],E=c[p+1][f],O=c[p+1][f+1];if(p!==0||r>0)h.push(b,x,O);if(p!==n-1||o<Math.PI)h.push(x,E,O)}this.setIndex(h),this.setAttribute("position",new ae(m,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ji extends ne{constructor(t=1,e=0.4,n=12,i=48,s=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let r=[],a=[],o=[],l=[],c=new D,u=new D,d=new D;for(let h=0;h<=n;h++)for(let m=0;m<=i;m++){let v=m/i*s,_=h/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(v),u.y=(t+e*Math.cos(_))*Math.sin(v),u.z=e*Math.sin(_),a.push(u.x,u.y,u.z),c.x=t*Math.cos(v),c.y=t*Math.sin(v),d.subVectors(u,c).normalize(),o.push(d.x,d.y,d.z),l.push(m/i),l.push(h/n)}for(let h=1;h<=n;h++)for(let m=1;m<=i;m++){let v=(i+1)*h+m-1,_=(i+1)*(h-1)+m-1,p=(i+1)*(h-1)+m,f=(i+1)*h+m;r.push(v,_,f),r.push(_,p,f)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function zi(t,e,n){if(!t||!n&&t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}function ed(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}class di{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class Na extends di{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),v=m*m,_=v*m,p=-d*_+2*d*v-d*m,f=(1+d)*_+(-1.5-2*d)*v+(-0.5+d)*m+1,b=(-1-h)*_+(1.5+h)*v+0.5*m,x=h*_-h*v;for(let E=0;E!==a;++E)s[E]=p*r[c+E]+f*r[l+E]+b*r[o+E]+x*r[u+E];return s}}class Oa extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class Ba extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class We{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zi(e,this.TimeBufferType),this.values=zi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zi(t.times,Array),values:zi(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(ed(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[d+m]||v!==e[h+m]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)e[d+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}We.prototype.TimeBufferType=Float32Array;We.prototype.ValueBufferType=Float32Array;We.prototype.DefaultInterpolation=2301;class Vn extends We{constructor(t,e,n){super(t,e,n)}}Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=2300;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;class za extends We{}za.prototype.ValueTypeName="color";class ka extends We{}ka.prototype.ValueTypeName="number";class Ga extends di{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)yn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class tr extends We{InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xn extends We{constructor(t,e,n){super(t,e,n)}}Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=2300;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ha extends We{}Ha.prototype.ValueTypeName="vector";class Wa{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],m=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return m}return null}}}var nd=new Wa;class Va{constructor(t){this.manager=t!==void 0?t:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Va.DEFAULT_MATERIAL_NAME="__DEFAULT";class $i extends ne{constructor(){super();this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}var er="\\[\\]\\.:\\/",id=new RegExp("["+er+"]","g"),nr="[^"+er+"]",sd="[^"+er.replace("\\.","")+"]",rd=/((?:WC+[\/:])*)/.source.replace("WC",nr),ad=/(WCOD+)?/.source.replace("WCOD",sd),od=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nr),ld=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nr),cd=new RegExp("^"+rd+ad+od+ld+"$"),hd=["material","materials","bones","map"];class Xa{constructor(t,e,n){let i=n||jt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class jt{constructor(t,e,n){this.path=e,this.parsedPath=n||jt.parseTrackName(e),this.node=jt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new jt(t,e,n);else return new jt.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(id,"")}static parseTrackName(t){let e=cd.exec(t);if(e===null)throw Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(hd.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=jt.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.needsUpdate!==void 0)a=this.Versioning.NeedsUpdate;else if(t.matrixWorldNeedsUpdate!==void 0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jt.Composite=Xa;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ud=new Float32Array(1);if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));if(typeof window<"u")if(window.__THREE__)console.warn("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="170";var qn=()=>(navigator.hardwareConcurrency||4)<=4||matchMedia("(max-width: 700px)").matches,Re=(t,e,n)=>Math.min(n,Math.max(e,t)),Pe=(t)=>{let e=parseInt(t.slice(1),16);return new qt().setRGB((e>>16&255)/255,(e>>8&255)/255,(e&255)/255)};function Ki(t){let e=new Vi({alpha:t,antialias:!1,powerPreference:"low-power",premultipliedAlpha:!0});e.setPixelRatio(Math.min(window.devicePixelRatio||1,qn()?1.5:1.75));let n=e.domElement;return n.setAttribute("aria-hidden","true"),n.className="tg-gl",e}function Qi(t,e){let n=!1,i=0,s=performance.now(),r=!document.hidden,a=(l)=>{let c=Math.min(0.05,(l-s)/1000);s=l,e(c,l/1000),i=requestAnimationFrame(a)},o=()=>{let l=n&&r;if(l&&!i)s=performance.now(),i=requestAnimationFrame(a);if(!l&&i)cancelAnimationFrame(i),i=0};new IntersectionObserver(([l])=>{n=l.isIntersecting,o()},{rootMargin:"80px"}).observe(t),document.addEventListener("visibilitychange",()=>{r=!document.hidden,o()})}function fi(t=60,e=14){return{x:0,v:0,to:0,step(n){return this.v+=((this.to-this.x)*t-this.v*e)*n,this.x+=this.v*n,this.x}}}var Sn=`
  varying vec3 vColor; varying float vAlpha;
  void main(){
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    if (a * vAlpha < 0.01) discard;
    gl_FragColor = vec4(vColor * a * vAlpha, a * vAlpha);
  }`;function pd(t,e){let n=qn(),i=Ki(!0),s=i.domElement;s.classList.add("tg-gl-orbit"),t.appendChild(s);let r=new Mn,a=new pe(35,1,0.1,100);a.position.set(0,0,10);let o=new Oe;r.add(o);let l={value:0},c={value:0},u={value:1},d={value:1};function h(N,L,B,q,z,et){let W=new ne,ht=new Float32Array(N),ut=new Float32Array(N*2),yt=new Float32Array(N);for(let G=0;G<N;G++)ht[G]=Math.random()*Math.PI*2,ut[G*2]=Math.random()-0.5,ut[G*2+1]=(Math.random()-0.5)*0.25,yt[G]=Math.random();W.setAttribute("position",new Ht(new Float32Array(N*3),3)),W.setAttribute("aAngle",new Ht(ht,1)),W.setAttribute("aOff",new Ht(ut,2)),W.setAttribute("aSeed",new Ht(yt,1));let Lt=new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,depthTest:!1,blending:ri,uniforms:{uTime:c,uIntro:l,uFade:u,uPx:d,uSpeed:{value:z},uWidth:{value:et},uA:{value:Pe(L)},uB:{value:Pe(B)},uHi:{value:Pe(q)}},vertexShader:`
        attribute float aAngle; attribute vec2 aOff; attribute float aSeed;
        uniform float uTime, uIntro, uFade, uPx, uSpeed, uWidth;
        uniform vec3 uA, uB, uHi;
        varying vec3 vColor; varying float vAlpha;
        void main(){
          float t = uTime * uSpeed;
          float a = aAngle + t;
          // ribbon twists as it travels, like the swirl in the logo
          float w = uWidth * (0.35 + 0.65 * abs(sin(a * 1.0 + 0.6)));
          float r = 1.0 + aOff.x * w * 0.35 + (1.0 - uIntro) * 0.25;
          vec3 p = vec3(cos(a) * r, aOff.y * w + aOff.x * w * 0.5 * cos(a * 2.0), sin(a) * r);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          // front half bright, back half faint: reads as passing behind the globe
          vec4 c = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
          float front = smoothstep(-0.25, 0.35, (mv.z - c.z));
          float head = pow(0.5 + 0.5 * cos(aAngle - 2.2), 10.0);
          float sparkle = step(0.985, fract(aSeed * 91.7 + uTime * 0.35));
          // grows around the ring on arrival
          float shown = step(fract(aAngle / 6.2831853), uIntro);
          vColor = mix(mix(uA, uB, aSeed), uHi, clamp(head * 0.8 + sparkle, 0.0, 1.0));
          vAlpha = shown * uFade * mix(0.10, 1.0, front) * (0.6 + 0.4 * aSeed);
          gl_PointSize = uPx * (2.4 + 3.4 * aSeed + head * 4.0 + sparkle * 4.0) * mix(0.7, 1.2, front);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:Sn}),C=new Be(W,Lt);return C.frustumCulled=!1,C}let m=n?1800:3400,v=h(m,"#C38B32","#E8BC62","#FFF4D6",0.16,0.34);v.rotation.set(0.34,0,-0.3);let _=h(Math.round(m*0.7),"#1E7A35","#53A843","#C9EE97",-0.11,0.26);_.rotation.set(0.46,0,0.36),_.scale.setScalar(0.9),o.add(v,_);let p=n?140:260,f=new ne,b=new Float32Array(p*3),x=new Float32Array(p);for(let N=0;N<p;N++)b[N*3]=(Math.random()-0.5)*2,b[N*3+1]=Math.random(),b[N*3+2]=Math.random(),x[N]=Math.random();f.setAttribute("position",new Ht(b,3)),f.setAttribute("aSeed",new Ht(x,1));let E=new Be(f,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,depthTest:!1,blending:ri,uniforms:{uTime:c,uFade:u,uPx:d,uSize:{value:new Float32Array([7,4])}},vertexShader:`
      attribute float aSeed; uniform float uTime, uFade, uPx; uniform vec2 uSize;
      varying vec3 vColor; varying float vAlpha;
      void main(){
        float y = fract(position.y + uTime * (0.012 + 0.02 * aSeed));
        vec3 p = vec3(position.x * uSize.x * 0.5 + sin(uTime * 0.4 + aSeed * 30.0) * 0.18,
                      (y - 0.5) * uSize.y, (position.z - 0.5) * 3.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vColor = mix(vec3(0.80, 0.58, 0.22), vec3(0.93, 0.74, 0.36), aSeed);
        vAlpha = uFade * smoothstep(0.0, 0.15, y) * smoothstep(1.0, 0.8, y) * (0.18 + 0.32 * aSeed);
        gl_PointSize = uPx * (1.4 + 2.6 * aSeed) * (10.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));E.frustumCulled=!1,r.add(E);let O=1,A=1,T=1;function H(){let N=t.getBoundingClientRect();O=N.width,A=N.height,i.setSize(O,A,!1),s.style.width=O+"px",s.style.height=A+"px",a.aspect=O/A,a.updateProjectionMatrix();let L=2*a.position.z*Math.tan(a.fov*Math.PI/360);T=L/A,d.value=i.getPixelRatio(),E.material.uniforms.uSize.value[0]=L*a.aspect,E.material.uniforms.uSize.value[1]=L;let B=e.getBoundingClientRect(),q=B.left-N.left+B.width*0.505,z=B.top-N.top+B.height*0.29;o.position.set((q-O/2)*T,-(z-A/2)*T,0),o.userData.base=B.width*0.33*T}H(),new ResizeObserver(H).observe(t);let M=fi(40,12),S=fi(40,12);addEventListener("pointermove",(N)=>{if(N.pointerType!=="mouse")return;S.to=(N.clientX/innerWidth-0.5)*0.35,M.to=(N.clientY/innerHeight-0.5)*0.22},{passive:!0});let R=performance.now()/1000;requestAnimationFrame(()=>s.classList.add("is-on")),Qi(t,(N,L)=>{c.value=L;let B=L-R;l.value=Re(B/2.4,0,1)**0.6;let q=t.getBoundingClientRect(),z=Re(-q.top/q.height,0,1);u.value=1-z*0.9;let et=(o.userData.base||1)*(1+z*0.35);o.scale.setScalar(et),o.rotation.x=M.step(N)+z*0.25,o.rotation.y=S.step(N),i.render(r,a)})}function md(t){let e=qn(),n=Ki(!1),i=Pe("#0D2418");n.setClearColor(new qt("#0D2418"),1);let s=n.domElement;s.classList.add("tg-gl-field"),t.prepend(s);let r=new Mn,a=new pe(40,1,0.1,80);a.position.set(0,1,7),a.lookAt(0,1.7,-6);let o={value:0},l={value:new Float32Array([0,-99])},c={value:1},u=6,d=[],h=[],m=[];for(let L=0;L<=u;L++){let B=L/u,q=0.035*(1-B*0.85);if(d.push(-q,B,0,q,B,0),h.push(0,B,1,B),L<u){let z=L*2;m.push(z,z+1,z+2,z+1,z+3,z+2)}}let v=new $i;v.setAttribute("position",new Ht(new Float32Array(d),3)),v.setAttribute("uv",new Ht(new Float32Array(h),2)),v.setIndex(m);let _=e?2600:6500,p=new Float32Array(_*3),f=new Float32Array(_*3);for(let L=0;L<_;L++){let B=-Math.pow(Math.random(),0.7)*26+3.5,q=6+(3.5-B)*0.75;p[L*3]=(Math.random()-0.5)*q*2,p[L*3+1]=0,p[L*3+2]=B,f[L*3]=0.35+Math.random()*0.75,f[L*3+1]=Math.random()*6.283,f[L*3+2]=Math.random()}v.setAttribute("aOff",new Wn(p,3)),v.setAttribute("aInfo",new Wn(f,3)),v.instanceCount=_;let b=new me(v,new re({side:Fs,uniforms:{uTime:o,uGust:l,uBg:{value:i}},vertexShader:`
      attribute vec3 aOff; attribute vec3 aInfo; uniform float uTime; uniform vec2 uGust;
      varying float vY; varying float vTint; varying float vFog;
      void main(){
        float h = aInfo.x; float y = position.y;
        float wind = sin(uTime * 1.1 + aOff.x * 0.35 + aOff.z * 0.22) * 0.5
                   + sin(uTime * 2.3 + aInfo.y) * 0.18;
        // a gust rolls through from where the visitor's pointer last crossed
        float g = exp(-pow((aOff.x - uGust.x) * 0.35 - (uTime - uGust.y) * 3.0 + 4.0, 2.0) * 0.4);
        float bend = (wind * 0.28 + g * 0.6) * y * y;
        vec3 p = vec3(aOff.x + position.x + bend, y * h, aOff.z + bend * 0.3);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vY = y; vTint = aInfo.z;
        vFog = smoothstep(4.0, 24.0, -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uBg; varying float vY; varying float vTint; varying float vFog;
      void main(){
        vec3 root = vec3(0.05, 0.16, 0.09);
        vec3 mid  = mix(vec3(0.17, 0.36, 0.16), vec3(0.30, 0.42, 0.18), vTint);
        vec3 tip  = mix(vec3(0.78, 0.60, 0.30), vec3(0.95, 0.80, 0.48), vTint);
        vec3 c = mix(root, mid, smoothstep(0.0, 0.5, vY));
        c = mix(c, tip, smoothstep(0.55, 1.0, vY));
        c = mix(c, uBg, vFog * 0.85);
        gl_FragColor = vec4(c, 1.0);
      }`}));b.frustumCulled=!1,r.add(b);let x=new ne;x.setAttribute("position",new Ht(new Float32Array([-60,-2,-30,60,-2,-30,60,30,-30,-60,30,-30]),3)),x.setIndex([0,1,2,0,2,3]);let E=new me(x,new re({depthWrite:!1,uniforms:{uTime:o,uBg:{value:i}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 uBg; uniform float uTime; varying vec3 vP;
      void main(){
        float d = length(vec2(vP.x * 0.12, (vP.y - 1.0) * 0.55));
        float glow = exp(-d * d * 2.2) * (0.92 + 0.08 * sin(uTime * 0.3));
        vec3 c = mix(uBg, vec3(0.62, 0.42, 0.16), glow * 0.55);
        c = mix(c, vec3(0.98, 0.80, 0.45), pow(glow, 6.0) * 0.5);
        gl_FragColor = vec4(c, 1.0);
      }`}));E.frustumCulled=!1,E.renderOrder=-1,r.add(E);let O=e?120:260,A=new ne,T=new Float32Array(O*3),H=new Float32Array(O);for(let L=0;L<O;L++)T[L*3]=(Math.random()-0.5)*18,T[L*3+1]=Math.random(),T[L*3+2]=-Math.random()*16+2,H[L]=Math.random();A.setAttribute("position",new Ht(T,3)),A.setAttribute("aSeed",new Ht(H,1));let M=new Be(A,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:ai,uniforms:{uTime:o,uPx:c},vertexShader:`
      attribute float aSeed; uniform float uTime, uPx; varying vec3 vColor; varying float vAlpha;
      void main(){
        float y = fract(position.y + uTime * (0.02 + 0.03 * aSeed));
        vec3 p = vec3(position.x + sin(uTime * 0.5 + aSeed * 40.0) * 0.4, 0.2 + y * 4.0, position.z);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float tw = 0.5 + 0.5 * sin(uTime * (1.5 + aSeed * 2.0) + aSeed * 50.0);
        vColor = mix(vec3(1.0, 0.78, 0.38), vec3(1.0, 0.93, 0.7), aSeed);
        vAlpha = smoothstep(0.0, 0.2, y) * smoothstep(1.0, 0.6, y) * (0.35 + 0.65 * tw);
        gl_PointSize = uPx * (2.0 + 4.0 * aSeed) * (8.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));M.frustumCulled=!1,r.add(M);let S=1.7;function R(){let L=t.getBoundingClientRect();n.setSize(L.width,L.height,!1),s.style.width=L.width+"px",s.style.height=L.height+"px",a.aspect=L.width/L.height,a.fov=a.aspect<1?55:40,S=a.aspect<1?2.7:1.7,a.updateProjectionMatrix(),c.value=n.getPixelRatio()}R(),new ResizeObserver(R).observe(t);let N=fi(20,9);t.addEventListener("pointermove",(L)=>{let B=t.getBoundingClientRect(),q=(L.clientX-B.left)/B.width-0.5;N.to=q*0.8;let z=o.value;if(z-l.value[1]>2.2)l.value[0]=q*14-6,l.value[1]=z},{passive:!0}),requestAnimationFrame(()=>s.classList.add("is-on")),Qi(t,(L,B)=>{o.value=B;let q=t.getBoundingClientRect(),z=Re(1-(q.top+q.height)/(innerHeight+q.height),0,1);a.position.x=N.step(L)+Math.sin(B*0.07)*0.6,a.position.z=7-z*1.6,a.position.y=1+z*0.15,a.lookAt(a.position.x*0.4,S,-6),n.render(r,a)})}async function gd(t,e,n={}){let i=qn(),s=await fetch(e).then((j)=>{if(!j.ok)throw Error("land");return j.arrayBuffer()}),r=new Uint16Array(s),a=Ki(!0),o=a.domElement;o.classList.add("tg-gl-globe"),t.appendChild(o);let l=new Mn,c=new pe(30,1,0.1,50);c.position.set(0,0,4.6);let u=new Oe,d=new Oe;u.add(d),l.add(u);let h={value:0},m={value:0},v={value:1},_={value:1},p={value:0},f=Math.PI/180,b=(j,st,at=1)=>[Math.cos(st*f)*Math.sin(j*f)*at,Math.sin(st*f)*at,Math.cos(st*f)*Math.cos(j*f)*at],x=[78,21],E=b(x[0],x[1]),O={value:new Float32Array(E)},A=new me(new ui(0.992,48,32),new re({uniforms:{uA:{value:Pe("#0E2E1D")},uB:{value:Pe("#17432B")},uRim:{value:Pe("#E0B56A")}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform vec3 uA, uB, uRim; varying vec3 vN; varying vec3 vV;
      void main(){
        float f = 1.0 - max(dot(normalize(vN), normalize(vV)), 0.0);
        float light = clamp(dot(normalize(vN), normalize(vec3(0.5, 0.45, 0.75))), 0.0, 1.0);
        vec3 c = mix(uA, uB, light);
        c = mix(c, uRim, pow(f, 3.2) * 0.75);
        gl_FragColor = vec4(c, 1.0);
      }`}));d.add(A);let T=i?2:1,H=Math.floor(r.length/2/T),M=new Float32Array(H*3),S=new Float32Array(H);for(let j=0;j<H;j++){let st=r[j*T*2]/65535*360-180,at=r[j*T*2+1]/65535*180-90,It=b(st,at,1);M[j*3]=It[0],M[j*3+1]=It[1],M[j*3+2]=It[2],S[j]=Math.random()}let R=new ne;R.setAttribute("position",new Ht(M,3)),R.setAttribute("aSeed",new Ht(S,1));let N=new Be(R,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:ri,uniforms:{uTime:h,uIntro:m,uPx:v,uZoom:_,uHub:O,uA:{value:Pe("#D2A14E")},uB:{value:Pe("#F0CB80")},uHi:{value:Pe("#FFF6DC")}},vertexShader:`
      attribute float aSeed; uniform float uTime, uIntro, uPx, uZoom; uniform vec3 uHub, uA, uB, uHi;
      varying vec3 vColor; varying float vAlpha;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 nrm = normalize(normalMatrix * position);
        float facing = smoothstep(-0.05, 0.35, nrm.z);
        float ang = acos(clamp(dot(position, uHub), -1.0, 1.0));           // distance from India, radians
        // a wave of light leaves India and crosses the world, again and again
        float wave = exp(-pow((ang - fract(uTime * 0.11) * 3.6) * 3.2, 2.0));
        float near = smoothstep(0.42, 0.0, ang);
        float tw = 0.75 + 0.25 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 40.0);
        float shown = smoothstep(ang / 3.1416, ang / 3.1416 + 0.12, uIntro * 1.15);  // the world lights up from India outward
        vColor = mix(mix(uA, uB, aSeed), uHi, clamp(wave * 0.9 + near * 0.55, 0.0, 1.0));
        vAlpha = shown * facing * tw * (0.85 + 0.15 * aSeed + wave * 0.4);
        gl_PointSize = uPx * uZoom * (2.6 + 1.8 * aSeed + wave * 3.0 + near * 1.4) * min(2.0, 4.6 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));N.frustumCulled=!1,d.add(N);let L=[[-0.1,51.5],[-74,40.7],[55.3,25.2],[103.8,1.3],[151.2,-33.9],[139.7,35.7],[36.8,-1.3],[-46.6,-23.5],[-118.2,34],[13.4,52.5],[-79.4,43.7],[18.4,-33.9]],B=i?70:110,q=L.length*B,z=new Float32Array(q*3),et=new Float32Array(q),W=new Float32Array(q);L.forEach((j,st)=>{let at=b(j[0],j[1]),It=Re(E[0]*at[0]+E[1]*at[1]+E[2]*at[2],-1,1),it=Math.acos(It),pt=Math.sin(it),zt=0.1+0.34*it/Math.PI,Pt=Math.random();for(let mt=0;mt<B;mt++){let Ut=mt/(B-1),Bt=Math.sin((1-Ut)*it)/pt,te=Math.sin(Ut*it)/pt,P=1.005+zt*Math.sin(Math.PI*Ut),rt=(st*B+mt)*3;z[rt]=(E[0]*Bt+at[0]*te)*P,z[rt+1]=(E[1]*Bt+at[1]*te)*P,z[rt+2]=(E[2]*Bt+at[2]*te)*P,et[st*B+mt]=Ut,W[st*B+mt]=Pt}});let ht=new ne;ht.setAttribute("position",new Ht(z,3)),ht.setAttribute("aU",new Ht(et,1)),ht.setAttribute("aSeed",new Ht(W,1));let ut=new Be(ht,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:ai,uniforms:{uTime:h,uIntro:m,uPx:v},vertexShader:`
      attribute float aU, aSeed; uniform float uTime, uIntro, uPx; varying vec3 vColor; varying float vAlpha;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float head = fract(uTime * (0.16 + 0.07 * aSeed) + aSeed * 7.0) * 1.35;   // runs past the end, then rests
        float d = head - aU;
        float comet = d > 0.0 ? exp(-d * 9.0) : exp(d * 60.0);
        float grown = step(aU, uIntro * 1.6 - 0.5);
        float ends = smoothstep(0.0, 0.04, aU) ;
        vColor = mix(vec3(0.86, 0.66, 0.30), vec3(1.0, 0.96, 0.82), comet);
        vAlpha = grown * ends * (0.16 + comet * 0.95);
        gl_PointSize = uPx * (1.3 + comet * 4.2) * (4.6 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));ut.frustumCulled=!1,d.add(ut);let yt=L.length+1,Lt=new Float32Array(yt*3),C=new Float32Array(yt);Lt.set(b(x[0],x[1],1.012),0),C[0]=1,L.forEach((j,st)=>{Lt.set(b(j[0],j[1],1.012),(st+1)*3),C[st+1]=0});let G=new ne;G.setAttribute("position",new Ht(Lt,3)),G.setAttribute("aKind",new Ht(C,1));let Y=new Be(G,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:ai,uniforms:{uTime:h,uIntro:m,uPx:v},vertexShader:`
      attribute float aKind; uniform float uIntro, uPx; varying float vKind; varying float vShow;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 nrm = normalize(normalMatrix * position);
        vKind = aKind; vShow = smoothstep(0.0, 0.3, nrm.z) * smoothstep(0.0, 0.3, uIntro - (1.0 - aKind) * 0.6);
        gl_PointSize = uPx * mix(9.0, 64.0, aKind) * (4.6 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uTime; varying float vKind; varying float vShow;
      void main(){
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float core = smoothstep(mix(1.0, 0.2, vKind), 0.0, d);
        float r1 = fract(uTime * 0.45), r2 = fract(uTime * 0.45 + 0.5);
        float ring = (smoothstep(0.06, 0.0, abs(d - r1)) * (1.0 - r1) + smoothstep(0.06, 0.0, abs(d - r2)) * (1.0 - r2)) * vKind;
        float a = clamp(core * core + ring * 0.8, 0.0, 1.0) * vShow;
        if (a < 0.01) discard;
        gl_FragColor = vec4(vec3(1.0, 0.93, 0.74) * a, a);
      }`}));Y.frustumCulled=!1,d.add(Y);let xt=i?260:620,lt=new Float32Array(xt*3),Mt=new Float32Array(xt);for(let j=0;j<xt;j++)lt[j*3]=(Math.random()-0.5)*14,lt[j*3+1]=(Math.random()-0.5)*9,lt[j*3+2]=Math.random()*15,Mt[j]=Math.random();let Dt=new ne;Dt.setAttribute("position",new Ht(lt,3)),Dt.setAttribute("aSeed",new Ht(Mt,1));let At=new Be(Dt,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,depthTest:!1,blending:ai,uniforms:{uTime:h,uDive:p,uPx:v},vertexShader:`
      attribute float aSeed; uniform float uTime, uDive, uPx; varying vec3 vColor; varying float vAlpha;
      void main(){
        float z = mod(position.z + uDive * 22.0 + uTime * 0.05, 15.0) - 11.5;
        vec4 mv = viewMatrix * vec4(position.xy, z, 1.0);
        float tw = 0.6 + 0.4 * sin(uTime * (0.8 + aSeed * 2.0) + aSeed * 60.0);
        vColor = mix(vec3(0.95, 0.80, 0.50), vec3(1.0, 0.97, 0.88), aSeed);
        vAlpha = tw * (0.25 + 0.5 * aSeed) * smoothstep(-0.3, -1.6, mv.z) * smoothstep(-16.0, -11.0, mv.z);
        gl_PointSize = uPx * (1.0 + 1.6 * aSeed) * min(4.0, 5.0 / -mv.z) * (1.0 + uDive * 1.5);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));At.frustumCulled=!1,At.renderOrder=-2,l.add(At);let Et=0,Xt=0,I=1,Zt=1,Ft=-1;function Ot(){let j=t.getBoundingClientRect();if(!j.width)return;a.setSize(j.width,j.height,!1),o.style.width=j.width+"px",o.style.height=j.height+"px",c.aspect=j.width/j.height,c.updateProjectionMatrix();let st=2*c.position.z*Math.tan(c.fov*f/2)/j.height,at=n.box;if(at)Et=(at.offsetLeft-j.width/2)*st,Xt=-(at.offsetTop-j.height/2)*st,I=at.offsetWidth*0.813/2*st;Zt=Math.min(j.width,j.height)*0.36*st,v.value=a.getPixelRatio()*Math.max(0.7,Math.min(1.25,(at?at.offsetWidth*0.813:j.width)/460))}Ot(),new ResizeObserver(Ot).observe(t);let J=-x[0]*f+0.1,Tt=0.3,ot=0,dt=0,w=!1,g=0,k=0,Q=fi(30,10);o.style.pointerEvents="auto",o.style.touchAction="pan-y",o.style.cursor="grab",o.addEventListener("pointerdown",(j)=>{if(p.value>0.03)return;w=!0,g=j.clientX,dt=0,o.setPointerCapture(j.pointerId),o.style.cursor="grabbing"}),o.addEventListener("pointermove",(j)=>{let st=t.getBoundingClientRect();if(k=(j.clientY-st.top)/st.height-0.5,!w)return;let at=(j.clientX-g)/st.width*3.2;g=j.clientX,ot+=at,dt=at*60});let nt=()=>{w=!1,o.style.cursor="grab"};o.addEventListener("pointerup",nt),o.addEventListener("pointercancel",nt),o.addEventListener("pointerleave",()=>{k=0});let Z=0;t.classList.add("is-live"),requestAnimationFrame(()=>o.classList.add("is-on")),Qi(t,(j,st)=>{if(h.value=st,Z+=j,m.value=Re(Z/2.6,0,1),!w)ot+=dt*j,dt*=Math.pow(0.05,j),ot+=(0-ot)*Math.min(1,j*0.35)*(Math.abs(dt)<0.2?1:0);let at=0;if(n.section){let Pt=n.section.getBoundingClientRect();at=Re(-Pt.top/Math.max(1,Pt.height-innerHeight),0,1)}Ft=Ft<0?at:Ft+(at-Ft)*Math.min(1,j*6);let It=Re(Ft/0.4,0,1),it=It*It*It*(It*(It*6-15)+10),pt=it;p.value=it*0.1,_.value=1+it*0.2,Q.to=k*0.35,d.rotation.y=-x[0]*f+(0.1+Math.sin(st*0.09)*0.3+ot)*(1-it),u.rotation.x=(Tt+Q.step(j))*(1-it)+x[1]*f*it,u.rotation.z=-0.12*(1-it),u.position.set(Et*(1-pt),Xt*(1-pt),0);let zt=0.9+0.1*(1-Math.pow(1-m.value,3));u.scale.setScalar((I+(Zt-I)*it)*zt),a.render(l,c)})}function _d(t,e={}){let n=qn(),i=Ki(!1);i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1:1.5));let s=i.domElement;s.classList.add("tg-gl-world"),t.appendChild(s);let r=new Mn,a=new pe(42,1,0.1,90),o={value:0},l={value:1},c={value:0},u={value:0},d={value:1},h={value:new qt},m={value:new qt},v={value:new qt},_={value:new Float32Array([0,0])},p={value:new Float32Array([0,-99])},f=(J)=>{let Tt=parseInt(J.slice(1),16);return[(Tt>>16&255)/255,(Tt>>8&255)/255,(Tt&255)/255]},b=[{p:0,top:f("#A9CBD2"),bot:f("#F9DDB0"),sun:f("#FFE2A8"),sx:-0.55,sy:0.1,light:0.92,night:0},{p:0.3,top:f("#8EC3D9"),bot:f("#F4EED6"),sun:f("#FFF6DA"),sx:-0.62,sy:0.66,light:1.05,night:0},{p:0.62,top:f("#E2A65A"),bot:f("#F9CF85"),sun:f("#FFE9B0"),sx:0.42,sy:0.16,light:0.98,night:0},{p:0.84,top:f("#27433A"),bot:f("#C17B3C"),sun:f("#FFB870"),sx:0.62,sy:0,light:0.55,night:0.45},{p:1,top:f("#06130D"),bot:f("#143524"),sun:f("#DDE8D2"),sx:-0.35,sy:0.55,light:0.3,night:1}],x=(J,Tt,ot)=>J+(Tt-J)*ot;function E(J){let Tt=0;while(Tt<b.length-2&&J>b[Tt+1].p)Tt++;let ot=b[Tt],dt=b[Tt+1],w=Re((J-ot.p)/(dt.p-ot.p),0,1),g=w*w*(3-2*w);h.value.setRGB(x(ot.top[0],dt.top[0],g),x(ot.top[1],dt.top[1],g),x(ot.top[2],dt.top[2],g)),m.value.setRGB(x(ot.bot[0],dt.bot[0],g),x(ot.bot[1],dt.bot[1],g),x(ot.bot[2],dt.bot[2],g)),v.value.setRGB(x(ot.sun[0],dt.sun[0],g),x(ot.sun[1],dt.sun[1],g),x(ot.sun[2],dt.sun[2],g)),_.value[0]=x(ot.sx,dt.sx,g),_.value[1]=x(ot.sy,dt.sy,g),d.value=x(ot.light,dt.light,g),u.value=x(ot.night,dt.night,g)}let O=new ne;O.setAttribute("position",new Ht(new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,1,0]),3)),O.setIndex([0,1,2,0,2,3]);let A={value:1},T={value:0},H={value:0.42},M=new me(O,new re({depthWrite:!1,depthTest:!1,uniforms:{uTime:o,uTop:h,uBot:m,uSun:v,uSunPos:_,uNight:u,uLight:d,uAspect:A,uPan:T,uHorizon:H},vertexShader:"varying vec2 vUv; void main(){ vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 1.0, 1.0); }",fragmentShader:`
      uniform float uTime, uNight, uLight, uAspect, uPan, uHorizon; uniform vec3 uTop, uBot, uSun; uniform vec2 uSunPos; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float ridge(float x, float s){ return sin(x * 1.3 + s) * 0.5 + sin(x * 2.9 + s * 2.3) * 0.25 + sin(x * 6.1 + s * 5.1) * 0.08; }
      void main(){
        float h = (vUv.y - uHorizon) / (1.0 - uHorizon);                       // 0 at horizon, 1 at top
        vec3 c = mix(uBot, uTop, smoothstep(0.0, 0.9, h));
        vec2 sp = vec2((vUv.x - 0.5) * uAspect, h) - vec2(uSunPos.x * uAspect * 0.5, uSunPos.y);
        float d = length(sp);
        c += uSun * exp(-d * d * 14.0) * mix(0.42, 0.22, uNight);               // glow
        c = mix(c, uSun, smoothstep(0.062, 0.052, d) * mix(1.0, 0.9, uNight)); // the disc
        // stars come out
        vec2 g = floor(vUv * vec2(uAspect, 1.0) * 150.0); float st = hash(g);
        float tw = 0.6 + 0.4 * sin(uTime * (1.0 + st * 3.0) + st * 40.0);
        c += vec3(1.0, 0.95, 0.85) * step(0.992, st) * tw * smoothstep(0.3, 0.9, uNight) * smoothstep(0.05, 0.4, h);
        // hills
        float x = (vUv.x - 0.5) * uAspect;
        for (int i = 0; i < 3; i++) {
          float fi = float(i);
          float y = 0.06 + 0.11 * (2.0 - fi) / 2.0 + ridge(x * (1.4 + fi * 0.9) + uPan * (0.2 + fi * 0.25), fi * 3.7) * (0.075 - fi * 0.018);
          vec3 hill = mix(uBot, vec3(0.10, 0.27, 0.17) * uLight, 0.34 + fi * 0.2);
          c = mix(c, hill, smoothstep(0.004, 0.0, h - y));
        }
        if (vUv.y < uHorizon) c = mix(uBot, vec3(0.10, 0.27, 0.17) * uLight, 0.74);
        gl_FragColor = vec4(c, 1.0);
      }`}));M.frustumCulled=!1,M.renderOrder=-10,r.add(M);let S=5,R=[],N=[],L=[];for(let J=0;J<=S;J++){let Tt=J/S,ot=0.04*(1-Tt*0.85);if(R.push(-ot,Tt,0,ot,Tt,0),N.push(0,Tt,1,Tt),J<S){let dt=J*2;L.push(dt,dt+1,dt+2,dt+1,dt+3,dt+2)}}let B=new $i;B.setAttribute("position",new Ht(new Float32Array(R),3)),B.setAttribute("uv",new Ht(new Float32Array(N),2)),B.setIndex(L);let q=n?3000:9000,z=30,et=new Float32Array(q*3),W=new Float32Array(q*3);for(let J=0;J<q;J++)et[J*3]=(Math.random()-0.5)*2,et[J*3+1]=0,et[J*3+2]=Math.pow(Math.random(),1.5)*z,W[J*3]=0.32+Math.random()*0.55,W[J*3+1]=Math.random()*6.283,W[J*3+2]=Math.random();B.setAttribute("aOff",new Wn(et,3)),B.setAttribute("aInfo",new Wn(W,3)),B.instanceCount=q;let ht=new me(B,new re({side:Fs,uniforms:{uTime:o,uGust:p,uCamZ:c,uBot:m,uLight:d,uNight:u},vertexShader:`
      attribute vec3 aOff; attribute vec3 aInfo; uniform float uTime, uCamZ; uniform vec2 uGust;
      varying float vY; varying float vTint; varying float vFog;
      void main(){
        float dz = mod(aOff.z + uCamZ, ${z}.0);                 // distance ahead of the camera, wraps
        float z = uCamZ - dz + 1.5;
        float x = aOff.x * (7.0 + dz * 0.95);
        float h = aInfo.x; float y = position.y;
        float wind = sin(uTime * 1.1 + x * 0.35 + z * 0.22) * 0.5 + sin(uTime * 2.3 + aInfo.y) * 0.18;
        float g = exp(-pow((x - uGust.x) * 0.35 - (uTime - uGust.y) * 3.0 + 4.0, 2.0) * 0.4);
        float bend = (wind * 0.28 + g * 0.6) * y * y;
        float rise = smoothstep(${z}.0, ${z-5}.0, dz);    // far blades fade up out of the haze
        vec3 p = vec3(x + position.x + bend, y * h * rise, z + bend * 0.3);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vY = y; vTint = aInfo.z; vFog = smoothstep(5.0, ${z-3}.0, dz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uBot; uniform float uLight, uNight; varying float vY; varying float vTint; varying float vFog;
      void main(){
        vec3 root = vec3(0.06, 0.22, 0.11);
        vec3 mid  = mix(vec3(0.20, 0.44, 0.18), vec3(0.36, 0.52, 0.20), vTint);
        vec3 tip  = mix(vec3(0.82, 0.66, 0.30), vec3(0.97, 0.84, 0.48), vTint);
        vec3 c = mix(root, mid, smoothstep(0.0, 0.5, vY));
        c = mix(c, tip, smoothstep(0.55, 1.0, vY));
        c *= uLight; c = mix(c, c * vec3(0.55, 0.8, 0.9), uNight * 0.6);
        c = mix(c, mix(uBot, vec3(0.10, 0.27, 0.17) * uLight, 0.74), vFog);
        gl_FragColor = vec4(c, 1.0);
      }`}));ht.frustumCulled=!1,r.add(ht);let ut=n?140:320,yt=new Float32Array(ut*3),Lt=new Float32Array(ut);for(let J=0;J<ut;J++)yt[J*3]=(Math.random()-0.5)*2,yt[J*3+1]=Math.random(),yt[J*3+2]=Math.random()*18,Lt[J]=Math.random();let C=new ne;C.setAttribute("position",new Ht(yt,3)),C.setAttribute("aSeed",new Ht(Lt,1));let G=new Be(C,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,blending:ri,uniforms:{uTime:o,uPx:l,uCamZ:c,uNight:u},vertexShader:`
      attribute float aSeed; uniform float uTime, uPx, uCamZ, uNight; varying vec3 vColor; varying float vAlpha;
      void main(){
        float dz = mod(position.z + uCamZ, 18.0);
        float y = fract(position.y + uTime * (0.02 + 0.03 * aSeed));
        vec3 p = vec3(position.x * (5.0 + dz * 0.7) + sin(uTime * 0.5 + aSeed * 40.0) * 0.4, 0.2 + y * 4.2, uCamZ - dz + 1.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float tw = 0.5 + 0.5 * sin(uTime * (1.5 + aSeed * 2.0) + aSeed * 50.0);
        vColor = mix(vec3(1.0, 0.97, 0.88), vec3(1.0, 0.86, 0.45), uNight);
        vAlpha = smoothstep(0.0, 0.2, y) * smoothstep(1.0, 0.6, y) * mix(0.55, 0.35 + 0.65 * tw, uNight) * smoothstep(0.5, 2.5, dz) * smoothstep(18.0, 13.0, dz);
        gl_PointSize = uPx * (2.0 + 4.0 * aSeed) * (1.0 + uNight * 0.8) * (8.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:Sn}));G.frustumCulled=!1,r.add(G);function Y(){let J=t.clientWidth||innerWidth,Tt=t.clientHeight||innerHeight;i.setSize(J,Tt,!1),s.style.width=J+"px",s.style.height=Tt+"px",a.aspect=J/Tt,a.fov=a.aspect<1?58:42,a.updateProjectionMatrix(),A.value=a.aspect,l.value=i.getPixelRatio()}Y(),addEventListener("resize",Y);let xt=fi(20,9);addEventListener("pointermove",(J)=>{let Tt=J.clientX/innerWidth-0.5;xt.to=Tt*0.9;let ot=o.value;if(ot-p.value[1]>2.4)p.value[0]=Tt*14-6,p.value[1]=ot},{passive:!0});let lt=!0,Mt=!document.hidden,Dt=0,At=performance.now(),Et=0,Xt=!0,I=At,Zt=e.progress||(()=>Re(scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),0,1));function Ft(J){let Tt=Math.min(0.05,(J-At)/1000);At=J;let ot=J/1000;o.value=ot;let dt=Zt();Et=Xt?dt:Et+(dt-Et)*Math.min(1,(J-I)/1000*6),Xt=!1,I=J,E(Et);let w=-Et*70;c.value=w;let g=xt.step(Tt)+Math.sin(ot*0.07)*0.5;a.position.set(g,1.2+Math.sin(ot*0.3)*0.03,w+4);let k=a.aspect<1?4.6:3.3;a.lookAt(g*0.4,k,w-9),T.value=g*0.15+Et*2,H.value=0.5-Math.tan(Math.atan2(k-a.position.y,13))/Math.tan(a.fov*Math.PI/360)*0.5,i.render(r,a),Dt=requestAnimationFrame(Ft)}let Ot=()=>{let J=lt&&Mt;if(J&&!Dt)At=performance.now(),Xt=!0,Dt=requestAnimationFrame(Ft);if(!J&&Dt)cancelAnimationFrame(Dt),Dt=0};return document.addEventListener("visibilitychange",()=>{Mt=!document.hidden,Ot()}),requestAnimationFrame(()=>s.classList.add("is-on")),Ot(),{setActive(J){lt=J,Ot()}}}function vd(t,e={}){let n=e.small!==void 0?e.small:qn(),i=new Vi({alpha:!0,antialias:!n,powerPreference:"low-power",premultipliedAlpha:!0,preserveDrawingBuffer:!!e.preserve});i.setPixelRatio(Math.min(window.devicePixelRatio||1,n?1.5:2));let s=i.domElement;s.setAttribute("aria-hidden","true"),s.className="tg-gl tg-gl-party",t.appendChild(s);let r=new Mn,a=new pe(34,1,0.1,80),o={value:0},l={value:1},c="varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",u=`
    uniform vec3 uColor; uniform float uGloss; varying vec3 vN; varying vec3 vV;
    void main(){
      vec3 n = normalize(vN), v = normalize(vV), l = normalize(vec3(0.35, 0.85, 0.55));
      float d = dot(n, l) * 0.5 + 0.5;
      vec3 c = uColor * mix(0.52, 1.12, d * d);
      c += vec3(1.0, 0.97, 0.9) * pow(max(dot(n, normalize(l + v)), 0.0), 38.0) * uGloss;
      c += uColor * pow(1.0 - max(dot(n, v), 0.0), 2.6) * 0.38;
      gl_FragColor = vec4(c, 1.0);
    }`,d={},h=(C,G=0.4)=>d[C+G]||(d[C+G]=new re({uniforms:{uColor:{value:Pe(C)},uGloss:{value:G}},vertexShader:c,fragmentShader:u})),m={ball:new ui(1,n?20:28,n?14:20),cap:new qi(0.5,1,6,n?14:20),cone:new Zi(1,1,n?14:20),smile:new Ji(0.2,0.045,8,16,Math.PI),disc:new Yi(1,20)},v=new ci({color:401423,transparent:!0,opacity:0.2,depthWrite:!1}),_=(C,G,Y,xt,lt,Mt=0,Dt=0,At=0)=>{let Et=new me(C,G);return Et.scale.set(Y,xt,lt),Et.position.set(Mt,Dt,At),Et},p=[(C)=>{C.add(_(m.ball,h("#FFB21F"),0.84,1.02,0.8,0,1.02,0));let G=_(m.ball,h("#1FA24A"),0.3,0.07,0.15,0.26,2.05,0);return G.rotation.z=0.5,C.add(G),C.add(_(m.cap,h("#6B4A1E"),0.1,0.16,0.1,0,2.08,0)),{y:1.2,z:0.74,e:0.27}},(C)=>{C.add(_(m.ball,h("#D92B3A",0.6),0.9,0.9,0.9,0,0.9,0));let G=_(m.cone,h("#B81E2E"),0.26,0.3,0.26,0,1.92,0);return G.rotation.x=Math.PI,C.add(G),{y:1.05,z:0.84,e:0.3}},(C)=>{C.add(_(m.ball,h("#FF8A1F"),0.86,0.82,0.86,0,0.82,0)),C.add(_(m.cap,h("#1FA24A"),0.12,0.12,0.12,0,1.68,0));let G=_(m.ball,h("#27B356"),0.26,0.06,0.13,0.22,1.72,0);return G.rotation.z=0.35,C.add(G),{y:0.95,z:0.8,e:0.28}},(C)=>{let G=_(m.cone,h("#E63B2E",0.7),0.5,2,0.5,0,1,0);return G.rotation.x=Math.PI,C.add(G),C.add(_(m.ball,h("#E63B2E",0.7),0.5,0.3,0.5,0,2,0)),C.add(_(m.cone,h("#1FA24A"),0.3,0.3,0.3,0,2.32,0)),{y:1.62,z:0.4,e:0.17}},(C)=>(C.add(_(m.cap,h("#5B2A86",0.7),1.25,1,1.25,0,1,0)),C.add(_(m.cone,h("#2E8B3D"),0.5,0.36,0.5,0,2.08,0)),C.add(_(m.cap,h("#2E8B3D"),0.12,0.2,0.12,0,2.3,0)),{y:1.3,z:0.6,e:0.22}),(C)=>{C.add(_(m.cap,h("#E0941E",0.2),1.1,0.85,1.05,0,0.9,0));let G=_(m.cap,h("#D0851A",0.2),0.5,0.36,0.5,0.56,1.25,0);G.rotation.z=-0.9,C.add(G);let Y=_(m.cap,h("#D0851A",0.2),0.45,0.3,0.45,-0.52,0.7,0);return Y.rotation.z=1,C.add(Y),{y:1.15,z:0.53,e:0.2}},(C)=>(C.add(_(m.ball,h("#8CCB3F",0.6),0.72,0.68,0.72,0,0.68,0)),C.add(_(m.cap,h("#5E8F1F"),0.08,0.1,0.08,0,1.4,0)),{y:0.78,z:0.67,e:0.24}),(C)=>(C.add(_(m.cone,h("#5FA83A"),0.46,2.1,0.46,0,1.05,0)),C.add(_(m.ball,h("#5FA83A"),0.46,0.22,0.46,0,0.05,0)),{y:0.75,z:0.36,e:0.16})],f=h("#FFFDF6",0.9),b=h("#1A0E0A",1.2),x=h("#3A1410",0.2),E=h("#FF6B6B",0.3),O=e.count||(n?18:44),A=[],T=n?3:4;for(let C=0;C<O;C++){let G=C%T,Y=Math.floor(C/T),xt=Math.ceil(O/T),lt=2.6-G*2.1+(Math.random()-0.5)*0.5,Mt=(n?3.6:10.5)+G*1.5,Dt=((Y+0.5+G%2*0.5)/xt-0.5)*2*Mt+(Math.random()-0.5)*0.5,At=new Oe,Et=new Oe;At.add(Et);let Xt=p[(C*5+Y*3)%p.length](Et),I=[];for(let Ot of[-1,1]){let J=0.2+Math.random()*0.04,Tt=_(m.ball,f,J,J*1.08,J*0.85,Ot*Xt.e,Xt.y,Xt.z),ot=_(m.ball,b,0.48,0.48,0.3,0,0,0.82);Tt.add(ot),Et.add(Tt),I.push({eye:Tt,pupil:ot,ry:J*1.08})}if(C%3===0)Et.add(_(m.ball,x,0.17,0.13,0.05,0,Xt.y-0.33,Xt.z+0.02)),Et.add(_(m.ball,E,0.09,0.05,0.04,0,Xt.y-0.38,Xt.z+0.05));else{let Ot=_(m.smile,x,0.9,0.9,0.9,0,Xt.y-0.22,Xt.z+0.02);Ot.rotation.z=Math.PI,Et.add(Ot)}let Zt=new me(m.disc,v);Zt.rotation.x=-Math.PI/2,Zt.position.y=0.01,Zt.renderOrder=-1,At.add(Zt);let Ft=0.7+Math.random()*0.38+(G===0?0.1:0);At.position.set(Dt,0,lt),At.scale.setScalar(Ft),At.rotation.y=(Math.random()-0.5)*0.5,r.add(At),A.push({g:At,body:Et,sh:Zt,eyes:I,x:Dt,z:lt,size:Ft,ph:Math.random()*6.283,beat:2.6+Math.random()*1.6,j:0,jv:0,lean:0,leanV:0,blink:2+Math.random()*5,delay:0.25+(T-G)*0.12+Math.random()*0.5,kick:-1})}let H=n?90:220,M=new Float32Array(H*3),S=new Float32Array(H*3),R=new Float32Array(H),N=["#FFD23F","#E63B2E","#1FA24A","#FF8A1F","#FFF8E7","#5B2A86"].map(Pe);for(let C=0;C<H;C++){M[C*3]=(Math.random()-0.5)*26,M[C*3+1]=Math.random(),M[C*3+2]=-8+Math.random()*12;let G=N[C%N.length];S[C*3]=G.r,S[C*3+1]=G.g,S[C*3+2]=G.b,R[C]=Math.random()}let L=new ne;L.setAttribute("position",new Ht(M,3)),L.setAttribute("aColor",new Ht(S,3)),L.setAttribute("aSeed",new Ht(R,1));let B=new Be(L,new re({transparent:!0,premultipliedAlpha:!0,depthWrite:!1,uniforms:{uTime:o,uPx:l},vertexShader:`
      attribute vec3 aColor; attribute float aSeed; uniform float uTime, uPx; varying vec3 vColor; varying float vSpin;
      void main(){
        float y = 1.0 - fract(position.y + uTime * (0.05 + 0.06 * aSeed));
        vec3 p = vec3(position.x + sin(uTime * (0.8 + aSeed) + aSeed * 30.0) * 0.5, y * 9.0 - 0.5, position.z);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vColor = aColor; vSpin = uTime * (2.0 + aSeed * 4.0) + aSeed * 20.0;
        gl_PointSize = uPx * (9.0 + 12.0 * aSeed) * (10.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying vec3 vColor; varying float vSpin;
      void main(){ vec2 q = gl_PointCoord - 0.5; float c = cos(vSpin), s = sin(vSpin); q = vec2(q.x * c - q.y * s, q.x * s + q.y * c);
        if (abs(q.x) > 0.36 || abs(q.y) > 0.36 * abs(cos(vSpin * 0.7)) + 0.05) discard; gl_FragColor = vec4(vColor, 1.0); }`}));B.frustumCulled=!1,r.add(B);function q(){let C=t.getBoundingClientRect();if(!C.width)return;i.setSize(C.width,C.height,!1),s.style.width=C.width+"px",s.style.height=C.height+"px",a.aspect=C.width/C.height;let G=a.aspect<1;a.fov=G?46:32,a.position.set(0,G?4.2:3.4,G?17:17.5),a.lookAt(0,G?4.6:3.6,0),a.updateProjectionMatrix(),l.value=i.getPixelRatio()}q(),new ResizeObserver(q).observe(t);let z=new D(0,1.5,50),et=new D,W=!1;function ht(C){let G=t.getBoundingClientRect();et.set((C.clientX-G.left)/G.width*2-1,-((C.clientY-G.top)/G.height*2-1),0.5).unproject(a).sub(a.position).normalize();let Y=(1.1-a.position.y)/et.y;if(Y>0&&Y<60)z.copy(a.position).addScaledVector(et,Y),W=!0}t.addEventListener("pointermove",ht,{passive:!0}),t.addEventListener("pointerleave",()=>{W=!1}),t.addEventListener("pointerdown",(C)=>{ht(C);let G=o.value;A.forEach((Y)=>{Y.kick=G+Math.hypot(Y.x-z.x,Y.z-z.z)*0.07})},{passive:!0});let ut=scrollY,yt=0;addEventListener("scroll",()=>{yt=Math.min(1,yt+Math.abs(scrollY-ut)*0.004),ut=scrollY},{passive:!0});let Lt=0;return requestAnimationFrame(()=>s.classList.add("is-on")),Qi(t,(C,G)=>{o.value=G,Lt+=C,yt*=Math.pow(0.02,C);for(let Y of A){let xt=Y.x-z.x,lt=Y.z-z.z,Mt=Math.hypot(xt,lt),Dt=W?Math.max(0,1-Mt/2.6):0;if(Y.kick>0&&G>=Y.kick)Y.jv+=7.5+Math.random()*2,Y.kick=-1;if(Dt>0.2&&Y.j<0.05&&Y.jv<=0)Y.jv+=4.5*Dt;if(Y.jv-=22*C,Y.j+=Y.jv*C,Y.j<0)Y.j=0,Y.jv=0;let At=Math.abs(Math.sin(G*Y.beat+Y.ph)),Et=At*(0.16+yt*0.5),Xt=Re((Lt-Y.delay)/0.7,0,1),I=1-Math.pow(1-Xt,3)+Math.sin(Xt*Math.PI)*0.18,Zt=Et+Y.j,Ft=1+(0.5-At)*0.14-Math.min(0.2,Y.j*0.06)+(Y.jv>2?0.12:0);Y.g.position.y=Zt*Y.size-(1-Xt)*4,Y.body.scale.set(1/Math.sqrt(Ft),Ft,1/Math.sqrt(Ft));let Ot=Dt*Re(xt,-1,1)*0.35;Y.leanV+=((Ot-Y.lean)*60-Y.leanV*9)*C,Y.lean+=Y.leanV*C,Y.body.rotation.z=Math.sin(G*Y.beat*0.5+Y.ph)*0.13-Y.lean,Y.g.scale.setScalar(Y.size*I),Y.sh.scale.setScalar(Math.max(0.3,0.95-Zt*0.35)),Y.sh.position.y=0.01-Zt;let J=W?Re((z.x-Y.x)*0.25,-1,1):Math.sin(G*0.6+Y.ph)*0.4,Tt=W?Re((z.z-Y.z)*0.12+0.1,-0.6,0.8):0.15;Y.blink-=C;let ot=Y.blink<0.12;if(Y.blink<0)Y.blink=2+Math.random()*5;for(let dt of Y.eyes)dt.pupil.position.x=J*0.34,dt.pupil.position.y=-Tt*0.3,dt.eye.scale.y=ot?dt.ry*0.12:dt.ry}i.render(r,a)}),{canvas:s,poke(){let C=o.value;A.forEach((G)=>{G.kick=C+Math.random()*0.5})}}}export{md as mountField,gd as mountGlobe,pd as mountOrbit,vd as mountParty,_d as mountWorld};
