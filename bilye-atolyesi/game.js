(()=>{var Nd=0,Tu=1,Ud=2;var hs=1,kd=2,cr=3,Vi=0,en=1,Bt=2,ci=0,ur=1,hr=2,wu=3,Au=4,Fd=5;var ds=100,Bd=101,Od=102,zd=103,Hd=104,Gd=200,Vd=201,Wd=202,Xd=203,Ru=204,Cu=205,qd=206,$d=207,Yd=208,Zd=209,Jd=210,Kd=211,jd=212,Qd=213,ef=214,Bo=0,Oo=1,zo=2,Ys=3,Ho=4,Go=5,Vo=6,Wo=7,Ml=0,tf=1,nf=2,Hn=0,Iu=1,Pu=2,Lu=3,Aa=4,Du=5,Nu=6,Uu=7;var ku=300,Wi=301,fs=302,Sl=303,bl=304,Ra=306,ki=1e3,jn=1001,Xo=1002,Yt=1003,sf=1004;var Ca=1005;var jt=1006,El=1007;var Xi=1008;var yn=1009,Fu=1010,Bu=1011,dr=1012,Tl=1013,Gn=1014,Pn=1015,Vn=1016,wl=1017,Al=1018,fr=1020,Ou=35902,zu=35899,Hu=1021,Gu=1022,Ln=1023,ti=1026,qi=1027,Rl=1028,Cl=1029,$i=1030,Il=1031;var Pl=1033,Ia=33776,Pa=33777,La=33778,Da=33779,Ll=35840,Dl=35841,Nl=35842,Ul=35843,kl=36196,Fl=37492,Bl=37496,Ol=37488,zl=37489,Na=37490,Hl=37491,Gl=37808,Vl=37809,Wl=37810,Xl=37811,ql=37812,$l=37813,Yl=37814,Zl=37815,Jl=37816,Kl=37817,jl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,Ua=36285,oc=36286;var Wr=2300,qo=2301,ko=2302,hu=2303,du=2400,fu=2401,pu=2402;var rf=3200;var ka=0,af=1,Wn="",an="srgb",Xr="srgb-linear",qr="linear",mt="srgb";var Fo=7680;var of=519,lf=512,cf=513,uf=514,lc=515,hf=516,df=517,cc=518,ff=519,Vu=35044;var Wu="300 es",On=2e3,Zs=2001;function nm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function im(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){let i=$r("canvas");return i.style.display="block",i}var Jh={},Js=null;function Yr(...i){let e="THREE."+i.shift();Js?Js("log",e,...i):console.log(e,...i)}function mf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=mf(i);let e="THREE."+i.shift();if(Js)Js("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=mf(i);let e="THREE."+i.shift();if(Js)Js("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function rs(...i){let e=i.join(" ");e in Jh||(Jh[e]=!0,qe(...i))}function gf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xf={[Bo]:Oo,[zo]:Vo,[Ho]:Wo,[Ys]:Go,[Oo]:Bo,[Vo]:zo,[Wo]:Ho,[Go]:Ys},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kh=1234567,zr=Math.PI/180,as=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function st(i,e,t){return Math.max(e,Math.min(t,i))}function Xu(i,e){return(i%e+e)%e}function sm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rm(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function am(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function om(i,e=1){return e-Math.abs(Xu(i,e*2)-e)}function lm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function um(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hm(i,e){return i+Math.random()*(e-i)}function dm(i){return i*(.5-Math.random())}function fm(i){i!==void 0&&(Kh=i);let e=Kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pm(i){return i*zr}function mm(i){return i*as}function gm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function xm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ym(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _m(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function yt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yi={DEG2RAD:zr,RAD2DEG:as,generateUUID:ei,clamp:st,euclideanModulo:Xu,mapLinear:sm,inverseLerp:rm,lerp:Hr,damp:am,pingpong:om,smoothstep:lm,smootherstep:cm,randInt:um,randFloat:hm,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:xm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:_m,normalize:yt,denormalize:Bn},Ku=class Ku{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ku.prototype.isVector2=!0;var be=Ku,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*v;m<0&&(d=-d,h=-h,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),L=Math.sin(w);p=Math.sin(p*w)/L,o=Math.sin(o*w)/L,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+v*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+v*o;let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ju=class ju{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ju.prototype.isVector3=!0;var k=ju,Oc=new k,jh=new mn,Qu=class Qu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],w=s[1],L=s[4],M=s[7],_=s[2],T=s[5],D=s[8];return r[0]=a*v+o*w+l*_,r[3]=a*m+o*L+l*T,r[6]=a*p+o*M+l*D,r[1]=c*v+u*w+f*_,r[4]=c*m+u*L+f*T,r[7]=c*p+u*M+f*D,r[2]=d*v+h*w+g*_,r[5]=d*m+h*L+g*T,r[8]=d*p+h*M+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,g=t*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zc.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zc.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qu.prototype.isMatrix3=!0;var Ke=Qu,zc=new Ke,Qh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ed=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vm(){let i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=Mi(s.r),s.g=Mi(s.g),s.b=Mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=$s(s.r),s.g=$s(s.g),s.b=$s(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:e,whitePoint:n,transfer:qr,toXYZ:Qh,fromXYZ:ed,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Qh,fromXYZ:ed,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),i}var lt=vm();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cs,$o=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=$r("canvas")),Cs.width=e.width,Cs.height=e.height;let s=Cs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$r("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Mm=0,Ks=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hc(s[a].image)):r.push(Hc(s[a]))}else r=Hc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$o.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var Sm=0,Gc=new k,dn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jn,s=jn,r=jt,a=Xi,o=Ln,l=yn,c=i.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=ei(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gc).x}get height(){return this.source.getSize(Gc).y}get depth(){return this.source.getSize(Gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ku;dn.DEFAULT_ANISOTROPY=1;var eh=class eh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(c+1)/2,M=(h+1)/2,_=(p+1)/2,T=(u+d)/4,D=(f+v)/4,y=(g+m)/4;return L>M&&L>_?L<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(L),s=T/n,r=D/n):M>_?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=D/r,s=y/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;var Lt=eh,Yo=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new dn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends dn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var vl=class vl{constructor(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,g=c*u,v=c*f;t[0]=d+v*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,g=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bm,e,Em)}lookAt(e,t,n){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Pi.crossVectors(n,Sn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Pi.crossVectors(n,Sn)),Pi.normalize(),ao.crossVectors(Sn,Pi),s[0]=Pi.x,s[4]=ao.x,s[8]=Sn.x,s[1]=Pi.y,s[5]=ao.y,s[9]=Sn.y,s[2]=Pi.z,s[6]=ao.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],w=n[3],L=n[7],M=n[11],_=n[15],T=s[0],D=s[4],y=s[8],I=s[12],B=s[1],V=s[5],Y=s[9],ee=s[13],C=s[2],Z=s[6],ae=s[10],oe=s[14],fe=s[3],te=s[7],he=s[11],ce=s[15];return r[0]=a*T+o*B+l*C+c*fe,r[4]=a*D+o*V+l*Z+c*te,r[8]=a*y+o*Y+l*ae+c*he,r[12]=a*I+o*ee+l*oe+c*ce,r[1]=u*T+f*B+d*C+h*fe,r[5]=u*D+f*V+d*Z+h*te,r[9]=u*y+f*Y+d*ae+h*he,r[13]=u*I+f*ee+d*oe+h*ce,r[2]=g*T+v*B+m*C+p*fe,r[6]=g*D+v*V+m*Z+p*te,r[10]=g*y+v*Y+m*ae+p*he,r[14]=g*I+v*ee+m*oe+p*ce,r[3]=w*T+L*B+M*C+_*fe,r[7]=w*D+L*V+M*Z+_*te,r[11]=w*y+L*Y+M*ae+_*he,r[15]=w*I+L*ee+M*oe+_*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],w=l*h-c*d,L=o*h-c*f,M=o*d-l*f,_=a*h-c*u,T=a*d-l*u,D=a*f-o*u;return t*(v*w-m*L+p*M)-n*(g*w-m*_+p*T)+s*(g*L-v*_+p*D)-r*(g*M-v*T+m*D)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=t*o-n*a,L=t*l-s*a,M=t*c-r*a,_=n*l-s*o,T=n*c-r*o,D=s*c-r*l,y=u*v-f*g,I=u*m-d*g,B=u*p-h*g,V=f*m-d*v,Y=f*p-h*v,ee=d*p-h*m,C=w*ee-L*Y+M*V+_*B-T*I+D*y;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/C;return e[0]=(o*ee-l*Y+c*V)*Z,e[1]=(s*Y-n*ee-r*V)*Z,e[2]=(v*D-m*T+p*_)*Z,e[3]=(d*T-f*D-h*_)*Z,e[4]=(l*B-a*ee-c*I)*Z,e[5]=(t*ee-s*B+r*I)*Z,e[6]=(m*M-g*D-p*L)*Z,e[7]=(u*D-d*M+h*L)*Z,e[8]=(a*Y-o*B+c*y)*Z,e[9]=(n*B-t*Y-r*y)*Z,e[10]=(g*T-v*M+p*w)*Z,e[11]=(f*M-u*T-h*w)*Z,e[12]=(o*I-a*V-l*y)*Z,e[13]=(t*V-n*I+s*y)*Z,e[14]=(v*L-g*_-m*w)*Z,e[15]=(u*_-f*L+d*w)*Z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,g=r*f,v=a*u,m=a*f,p=o*f,w=l*c,L=l*u,M=l*f,_=n.x,T=n.y,D=n.z;return s[0]=(1-(v+p))*_,s[1]=(h+M)*_,s[2]=(g-L)*_,s[3]=0,s[4]=(h-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+L)*D,s[9]=(m-w)*D,s[10]=(1-(d+v))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,u=1/o,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Zs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),h=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===On)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Zs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};vl.prototype.isMatrix4=!0;var ct=vl,Is=new k,Un=new ct,bm=new k(0,0,0),Em=new k(1,1,1),Pi=new k,ao=new k,Sn=new k,td=new ct,nd=new mn,ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return td.makeRotationFromQuaternion(e),this.setFromRotationMatrix(td,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nd.setFromEuler(this),this.setFromQuaternion(nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tm=0,id=new k,Ps=new mn,mi=new ct,oo=new k,Cr=new k,wm=new k,Am=new mn,sd=new k(1,0,0),rd=new k(0,1,0),ad=new k(0,0,1),od={type:"added"},Rm={type:"removed"},Ls={type:"childadded",child:null},Vc={type:"childremoved",child:null},Nt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new k,t=new ii,n=new mn,s=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ke}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(sd,e)}rotateY(e){return this.rotateOnAxis(rd,e)}rotateZ(e){return this.rotateOnAxis(ad,e)}translateOnAxis(e,t){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sd,e)}translateY(e){return this.translateOnAxis(rd,e)}translateZ(e){return this.translateOnAxis(ad,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oo.copy(e):oo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Cr,oo,this.up):mi.lookAt(oo,Cr,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(mi),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(od),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),Vc.child=e,this.dispatchEvent(Vc),Vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(od),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,e,wm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cr,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Nt.DEFAULT_UP=new k(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var St=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cm={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Wc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Xu(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Wc(a,r,e+1/3),this.g=Wc(a,r,e),this.b=Wc(a,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=an){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){let n=yf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return lt.workingToColorSpace(rn.copy(this),e),Math.round(st(rn.r*255,0,255))*65536+Math.round(st(rn.g*255,0,255))*256+Math.round(st(rn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(rn.copy(this),t);let n=rn.r,s=rn.g,r=rn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=an){lt.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,s=rn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(lo);let n=Hr(Li.h,lo.h,t),s=Hr(Li.s,lo.s,t),r=Hr(Li.l,lo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Ue;Ue.NAMES=yf;var Jr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},En=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new k,gi=new k,Xc=new k,xi=new k,Ds=new k,Ns=new k,ld=new k,qc=new k,$c=new k,Yc=new k,Zc=new Lt,Jc=new Lt,Kc=new Lt,vi=class i{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),kn.subVectors(e,t),s.cross(kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){kn.subVectors(s,t),gi.subVectors(n,t),Xc.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(gi),l=kn.dot(Xc),c=gi.dot(gi),u=gi.dot(Xc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Zc.setScalar(0),Jc.setScalar(0),Kc.setScalar(0),Zc.fromBufferAttribute(e,t),Jc.fromBufferAttribute(e,n),Kc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Zc,r.x),a.addScaledVector(Jc,r.y),a.addScaledVector(Kc,r.z),a}static isFrontFacing(e,t,n,s){return kn.subVectors(n,t),gi.subVectors(e,t),kn.cross(gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ds.subVectors(s,n),Ns.subVectors(r,n),qc.subVectors(e,n);let l=Ds.dot(qc),c=Ns.dot(qc);if(l<=0&&c<=0)return t.copy(n);$c.subVectors(e,s);let u=Ds.dot($c),f=Ns.dot($c);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ds,a);Yc.subVectors(e,r);let h=Ds.dot(Yc),g=Ns.dot(Yc);if(g>=0&&h<=g)return t.copy(r);let v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ns,o);let m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return ld.subVectors(r,s),o=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(ld,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Ds,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ir),uo.subVectors(this.max,Ir),Us.subVectors(e.a,Ir),ks.subVectors(e.b,Ir),Fs.subVectors(e.c,Ir),Di.subVectors(ks,Us),Ni.subVectors(Fs,ks),ts.subVectors(Us,Fs);let t=[0,-Di.z,Di.y,0,-Ni.z,Ni.y,0,-ts.z,ts.y,Di.z,0,-Di.x,Ni.z,0,-Ni.x,ts.z,0,-ts.x,-Di.y,Di.x,0,-Ni.y,Ni.x,0,-ts.y,ts.x,0];return!jc(t,Us,ks,Fs,uo)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,Us,ks,Fs,uo))?!1:(ho.crossVectors(Di,Ni),t=[ho.x,ho.y,ho.z],jc(t,Us,ks,Fs,uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new k,new k,new k,new k,new k,new k,new k,new k],Fn=new k,co=new si,Us=new k,ks=new k,Fs=new k,Di=new k,Ni=new k,ts=new k,Ir=new k,uo=new k,ho=new k,ns=new k;function jc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ns.fromArray(i,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),u=n.dot(ns);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var zt=new k,fo=new be,Im=0,Ht=class extends ni{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Im++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Vu,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Kr=class extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var jr=class extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}},Pm=new si,Pr=new k,Qc=new k,ri=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Qc)),this.expandByPoint(Pr.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lm=0,Cn=new ct,eu=new Nt,Bs=new k,bn=new si,Lr=new si,$t=new k,vt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?jr:Kr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,t,n){return Cn.makeTranslation(e,t,n),this.applyMatrix4(Cn),this}scale(e,t,n){return Cn.makeScale(e,t,n),this.applyMatrix4(Cn),this}lookAt(e){return eu.lookAt(e),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];bn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let n=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(bn.min,Lr.min),bn.expandByPoint($t),$t.addVectors(bn.max,Lr.max),bn.expandByPoint($t)):(bn.expandByPoint(Lr.min),bn.expandByPoint(Lr.max))}bn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),$t.add(Bs)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ht(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new k,l[y]=new k;let c=new k,u=new k,f=new k,d=new be,h=new be,g=new be,v=new k,m=new k;function p(y,I,B){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,I),f.fromBufferAttribute(n,B),d.fromBufferAttribute(r,y),h.fromBufferAttribute(r,I),g.fromBufferAttribute(r,B),u.sub(c),f.sub(c),h.sub(d),g.sub(d);let V=1/(h.x*g.y-g.x*h.y);isFinite(V)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(V),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(V),o[y].add(v),o[I].add(v),o[B].add(v),l[y].add(m),l[I].add(m),l[B].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let y=0,I=w.length;y<I;++y){let B=w[y],V=B.start,Y=B.count;for(let ee=V,C=V+Y;ee<C;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}let L=new k,M=new k,_=new k,T=new k;function D(y){_.fromBufferAttribute(s,y),T.copy(_);let I=o[y];L.copy(I),L.sub(_.multiplyScalar(_.dot(I))).normalize(),M.crossVectors(T,I);let V=M.dot(l[y])<0?-1:1;a.setXYZW(y,L.x,L.y,L.z,V)}for(let y=0,I=w.length;y<I;++y){let B=w[y],V=B.start,Y=B.count;for(let ee=V,C=V+Y;ee<C;ee+=3)D(e.getX(ee+0)),D(e.getX(ee+1)),D(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Ht(d,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Vu,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},hn=new k,er=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),s=yt(s,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Yr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},tu=new k,Dm=new k,Nm=new Ke,Kt=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=tu.subVectors(n,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(tu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(tu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Um=0,In=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=ur,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ru,this.blendDst=Cu,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tr=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Os,Dr=new k,zs=new k,Hs=new k,Gs=new be,Nr=new be,_f=new ct,po=new k,Ur=new k,mo=new k,cd=new be,nu=new be,ud=new be,ea=class extends Nt{constructor(e=new tr){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qr(t,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new er(n,3,0,!1)),Os.setAttribute("uv",new er(n,2,3,!1))}this.geometry=Os,this.material=e,this.center=new be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),_f.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;go(po.set(-.5,-.5,0),Hs,a,zs,s,r),go(Ur.set(.5,-.5,0),Hs,a,zs,s,r),go(mo.set(.5,.5,0),Hs,a,zs,s,r),cd.set(0,0),nu.set(1,0),ud.set(1,1);let o=e.ray.intersectTriangle(po,Ur,mo,!1,Dr);if(o===null&&(go(Ur.set(-.5,.5,0),Hs,a,zs,s,r),nu.set(0,1),o=e.ray.intersectTriangle(po,mo,Ur,!1,Dr),o===null))return;let l=e.ray.origin.distanceTo(Dr);l<e.near||l>e.far||t.push({distance:l,point:Dr.clone(),uv:vi.getInterpolation(Dr,po,Ur,mo,cd,nu,ud,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function go(i,e,t,n,s,r){Gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Nr.x=r*Gs.x-s*Gs.y,Nr.y=s*Gs.x+r*Gs.y):Nr.copy(Gs),i.copy(e),i.x+=Nr.x,i.y+=Nr.y,i.applyMatrix4(_f)}var _i=new k,iu=new k,xo=new k,yo=new k,os=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){iu.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(iu);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=yo.dot(this.direction),l=-yo.dot(xo),c=yo.lengthSq(),u=Math.abs(1-a*a),f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){let v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(iu).addScaledVector(xo,d),h}intersectSphere(e,t){if(e.radius<0)return null;_i.subVectors(e.center,this.origin);let n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,L=n.z-a.z,M=Math.abs(l),_=Math.abs(c),T=Math.abs(u),D,y,I,B,V,Y,ee,C,Z,ae,oe,fe;if(M>=_&&M>=T?(I=l,Y=f,Z=g,fe=p,l>=0?(D=c,y=u,B=d,V=h,ee=v,C=m,ae=w,oe=L):(D=u,y=c,B=h,V=d,ee=m,C=v,ae=L,oe=w)):_>=T?(I=c,Y=d,Z=v,fe=w,c>=0?(D=u,y=l,B=h,V=f,ee=m,C=g,ae=L,oe=p):(D=l,y=u,B=f,V=h,ee=g,C=m,ae=p,oe=L)):(I=u,Y=h,Z=m,fe=L,u>=0?(D=l,y=c,B=f,V=d,ee=g,C=v,ae=p,oe=w):(D=c,y=l,B=d,V=f,ee=v,C=g,ae=w,oe=p)),I===0)return null;let te=D/I,he=y/I,ce=1/I,Ee=B-te*Y,Ce=V-he*Y,et=ee-te*Z,Ye=C-he*Z,je=ae-te*fe,le=oe-he*fe,pe=je*Ye-le*et,Te=Ee*le-Ce*je,He=et*Ce-Ye*Ee;if(s){if(pe<0||Te<0||He<0)return null}else if((pe<0||Te<0||He<0)&&(pe>0||Te>0||He>0))return null;let we=pe+Te+He;if(we===0)return null;let ze=ce*(pe*Y+Te*Z+He*fe);return(we>0?ze<0:ze>0)?null:this.at(ze/we,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hd=new ct,is=new os,_o=new ri,dd=new k,vo=new k,Mo=new k,So=new k,su=new k,bo=new k,fd=new k,Eo=new k,Oe=class extends Nt{constructor(e=new vt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(su.fromBufferAttribute(f,e),a?bo.addScaledVector(su,u):bo.addScaledVector(su.sub(t),u))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(_o.containsPoint(is.origin)===!1&&(is.intersectSphere(_o,dd)===null||is.origin.distanceToSquared(dd)>(e.far-e.near)**2))&&(hd.copy(r).invert(),is.copy(e.ray).applyMatrix4(hd),!(n.boundingBox!==null&&is.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,h.start),L=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=w,_=L;M<_;M+=3){let T=o.getX(M),D=o.getX(M+1),y=o.getX(M+2);s=To(this,p,e,n,c,u,f,T,D,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let w=o.getX(m),L=o.getX(m+1),M=o.getX(m+2);s=To(this,a,e,n,c,u,f,w,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,h.start),L=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=w,_=L;M<_;M+=3){let T=M,D=M+1,y=M+2;s=To(this,p,e,n,c,u,f,T,D,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let w=m,L=m+1,M=m+2;s=To(this,a,e,n,c,u,f,w,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function km(i,e,t,n,s,r,a,o){let l;if(e.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:i}}function To(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,vo),i.getVertexPosition(l,Mo),i.getVertexPosition(c,So);let u=km(i,e,t,n,vo,Mo,So,fd);if(u){let f=new k;vi.getBarycoord(fd,vo,Mo,So,f),s&&(u.uv=vi.getInterpolatedAttribute(s,o,l,c,f,new be)),r&&(u.uv1=vi.getInterpolatedAttribute(r,o,l,c,f,new be)),a&&(u.normal=vi.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};vi.getNormal(vo,Mo,So,d.normal),u.face=d,u.barycoord=f}return u}var ta=class extends dn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,u=Yt,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends Ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new ct,pd=new ct,wo=[],md=new si,Fm=new ct,kr=new Oe,Fr=new ri,Fi=class extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Fm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),md.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Fr.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vs),pd.multiplyMatrices(n,Vs),kr.matrixWorld=pd,kr.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){let l=wo[a];l.instanceId=r,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ta(new Float32Array(s*this.count),s,this.count,Rl,Pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ss=new ri,Bm=new be(.5,.5),Ao=new k,ir=class{constructor(e=new Kt,t=new Kt,n=new Kt,s=new Kt,r=new Kt,a=new Kt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],L=r[13],M=r[14],_=r[15];if(s[0].setComponents(c-a,h-u,p-g,_-w).normalize(),s[1].setComponents(c+a,h+u,p+g,_+w).normalize(),s[2].setComponents(c+o,h+f,p+v,_+L).normalize(),s[3].setComponents(c-o,h-f,p-v,_-L).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,h-d,p-m,_-M).normalize();else if(s[4].setComponents(c-l,h-d,p-m,_-M).normalize(),t===On)s[5].setComponents(c+l,h+d,p+m,_+M).normalize();else if(t===Zs)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=Bm.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var na=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new k,Ko=new k,gd=new ct,Br=new os,Ro=new ri,ru=new k,xd=new k,ia=class extends Nt{constructor(e=new vt,t=new na){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jo.fromBufferAttribute(t,s-1),Ko.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jo.distanceTo(Ko);e.setAttribute("lineDistance",new ot(n,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;gd.copy(s).invert(),Br.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){let p=u.getX(v),w=u.getX(v+1),L=Co(this,e,Br,l,p,w,v);L&&t.push(L)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(h),p=Co(this,e,Br,l,v,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){let p=Co(this,e,Br,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Co(this,e,Br,l,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Co(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),Ko.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,Ko,ru,xd)>n)return;ru.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ru);if(!(c<e.near||c>e.far))return{distance:c,point:xd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var jo=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yd=new ct,mu=new os,Io=new ri,Po=new k,sa=class extends Nt{constructor(e=new vt,t=new jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;yd.copy(s).invert(),mu.copy(e.ray).applyMatrix4(yd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=d,v=h;g<v;g++){let m=c.getX(g);Po.fromBufferAttribute(f,m),_d(Po,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,v=h;g<v;g++)Po.fromBufferAttribute(f,g),_d(Po,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _d(i,e,t,n,s,r,a){let o=mu.distanceSqToPoint(i);if(o<t){let l=new k;mu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends dn{constructor(e=[],t=Wi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends dn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends dn{constructor(e,t,n=Gn,s,r,a,o=Yt,l=Yt,c,u=ti,f=1){if(u!==ti&&u!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qo=class extends Bi{constructor(e,t=Gn,n=Wi,s,r,a=Yt,o=Yt,l,c=ti){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2));function g(v,m,p,w,L,M,_,T,D,y,I){let B=M/D,V=_/y,Y=M/2,ee=_/2,C=T/2,Z=D+1,ae=y+1,oe=0,fe=0,te=new k;for(let he=0;he<ae;he++){let ce=he*V-ee;for(let Ee=0;Ee<Z;Ee++){let Ce=Ee*B-Y;te[v]=Ce*w,te[m]=ce*L,te[p]=C,c.push(te.x,te.y,te.z),te[v]=0,te[m]=0,te[p]=T>0?1:-1,u.push(te.x,te.y,te.z),f.push(Ee/D),f.push(1-he/y),oe+=1}}for(let he=0;he<y;he++)for(let ce=0;ce<D;ce++){let Ee=d+ce+Z*he,Ce=d+ce+Z*(he+1),et=d+(ce+1)+Z*(he+1),Ye=d+(ce+1)+Z*he;l.push(Ee,Ce,Ye),l.push(Ce,et,Ye),fe+=6}o.addGroup(h,fe,I),h+=fe,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Si=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new k,u=new be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let h=n+f/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],g=0,v=[],m=n/2,p=0;w(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(u),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(h,2));function w(){let M=new k,_=new k,T=0,D=(t-e)/n;for(let y=0;y<=r;y++){let I=[],B=y/r,V=B*(t-e)+e;for(let Y=0;Y<=s;Y++){let ee=Y/s,C=ee*l+o,Z=Math.sin(C),ae=Math.cos(C);_.x=V*Z,_.y=-B*n+m,_.z=V*ae,f.push(_.x,_.y,_.z),M.set(Z,D,ae).normalize(),d.push(M.x,M.y,M.z),h.push(ee,1-B),I.push(g++)}v.push(I)}for(let y=0;y<s;y++)for(let I=0;I<r;I++){let B=v[I][y],V=v[I+1][y],Y=v[I+1][y+1],ee=v[I][y+1];(e>0||I!==0)&&(u.push(B,V,ee),T+=3),(t>0||I!==r-1)&&(u.push(V,Y,ee),T+=3)}c.addGroup(p,T,0),p+=T}function L(M){let _=g,T=new be,D=new k,y=0,I=M===!0?e:t,B=M===!0?1:-1;for(let Y=1;Y<=s;Y++)f.push(0,m*B,0),d.push(0,B,0),h.push(.5,.5),g++;let V=g;for(let Y=0;Y<=s;Y++){let C=Y/s*l+o,Z=Math.cos(C),ae=Math.sin(C);D.x=I*ae,D.y=m*B,D.z=I*Z,f.push(D.x,D.y,D.z),d.push(0,B,0),T.x=Z*.5+.5,T.y=ae*.5*B+.5,h.push(T.x,T.y),g++}for(let Y=0;Y<s;Y++){let ee=_+Y,C=V+Y;M===!0?u.push(C,C+1,ee):u.push(C+1,C,ee),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},la=class i extends on{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new be:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new k,s=[],r=[],a=[],o=new k,l=new ct;for(let h=0;h<=e;h++){let g=h/e;s[h]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(st(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(st(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sr=class extends Tn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var vd=new k,Md=new k,au=new qu,ou=new qu,lu=new qu,rr=class extends Tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new k){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Md.subVectors(s[0],s[1]).add(s[0]),c=Md);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(vd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=vd),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),au.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),ou.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),lu.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(au.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),ou.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),lu.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(au.calc(l),ou.calc(l),lu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Om(i,e){let t=1-i;return t*t*e}function zm(i,e){return 2*(1-i)*i*e}function Hm(i,e){return i*i*e}function Gr(i,e,t,n){return Om(i,e)+zm(i,t)+Hm(i,n)}function Gm(i,e){let t=1-i;return t*t*t*e}function Vm(i,e){let t=1-i;return 3*t*t*i*e}function Wm(i,e){return 3*(1-i)*i*i*e}function Xm(i,e){return i*i*i*e}function Vr(i,e,t,n,s){return Gm(i,e)+Vm(i,t)+Wm(i,n)+Xm(i,s)}var ca=class extends Tn{constructor(e=new be,t=new be,n=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends Tn{constructor(e=new k,t=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Vr(e,s.x,r.x,a.x,o.x),Vr(e,s.y,r.y,a.y,o.y),Vr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends Tn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends Tn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ha=class extends Tn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gr(e,s.x,r.x,a.x),Gr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Tn{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Gr(e,s.x,r.x,a.x),Gr(e,s.y,r.y,a.y),Gr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Sd(o,l.x,c.x,u.x,f.x),Sd(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new be().fromArray(s))}return this}},il=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:rr,CubicBezierCurve:ca,CubicBezierCurve3:tl,EllipseCurve:sr,LineCurve:ua,LineCurve3:nl,QuadraticBezierCurve:ha,QuadraticBezierCurve3:da,SplineCurve:fa}),sl=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new il[s.type]().fromJSON(s))}return this}},pa=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ua(this.currentPoint.clone(),new be(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ha(this.currentPoint.clone(),new be(e,t),new be(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ca(this.currentPoint.clone(),new be(e,t),new be(n,s),new be(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new sr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},bi=class extends pa{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new pa().fromJSON(s))}return this}};function qm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Km(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let d=t;d<s;d+=t){let h=i[d],g=i[d+1];h<o&&(o=h),g<l&&(l=g),h>u&&(u=h),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return ma(r,a,t,o,l,c,0),a}function vf(i,e,t,n,s){let r;if(s===l0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bd(a/n|0,i[a],i[a+1],r);return r&&ar(r,r.next)&&(xa(r),r=r.next),r}function ls(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ar(t,t.next)||Dt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ma(i,e,t,n,s,r,a){if(!i)return;!a&&r&&n0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ym(i,n,s,r):$m(i)){e.push(l.i,i.i,c.i),xa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Zm(ls(i),e),ma(i,e,t,n,s,r,2)):a===2&&Jm(i,e,t,n,s,r):ma(ls(i),e,t,n,s,r,1);break}}}function $m(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),h=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&Or(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ym(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,h=Math.min(o,l,c),g=Math.min(u,f,d),v=Math.max(o,l,c),m=Math.max(u,f,d),p=gu(h,g,e,t,n),w=gu(v,m,e,t,n),L=i.prevZ,M=i.nextZ;for(;L&&L.z>=p&&M&&M.z<=w;){if(L.x>=h&&L.x<=v&&L.y>=g&&L.y<=m&&L!==s&&L!==a&&Or(o,u,l,f,c,d,L.x,L.y)&&Dt(L.prev,L,L.next)>=0||(L=L.prevZ,M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,f,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;L&&L.z>=p;){if(L.x>=h&&L.x<=v&&L.y>=g&&L.y<=m&&L!==s&&L!==a&&Or(o,u,l,f,c,d,L.x,L.y)&&Dt(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;M&&M.z<=w;){if(M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,f,c,d,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Zm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ar(n,s)&&Sf(n,t,t.next,s)&&ga(n,s)&&ga(s,n)&&(e.push(n.i,t.i,s.i),xa(t),xa(t.next),t=i=s),t=t.next}while(t!==i);return ls(t)}function Jm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r0(a,o)){let l=bf(a,o);a=ls(a,a.next),l=ls(l,l.next),ma(a,e,t,n,s,r,0),ma(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Km(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vf(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(s0(c))}s.sort(jm);for(let r=0;r<s.length;r++)t=Qm(s[r],t);return t}function jm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Qm(i,e){let t=e0(i,e);if(!t)return e;let n=bf(t,i);return ls(n,n.next),ls(t,t.next)}function e0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ar(i,t))return t;do{if(ar(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Mf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ga(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&t0(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function t0(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function n0(i,e,t,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,i0(s)}function i0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function gu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function s0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Or(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mf(i,e,t,n,s,r,a,o)}function r0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!a0(i,e)&&(ga(i,e)&&ga(e,i)&&o0(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||ar(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ar(i,e){return i.x===e.x&&i.y===e.y}function Sf(i,e,t,n){let s=Do(Dt(i,e,t)),r=Do(Dt(i,e,n)),a=Do(Dt(t,n,i)),o=Do(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Lo(i,t,e)||r===0&&Lo(i,n,e)||a===0&&Lo(t,i,n)||o===0&&Lo(t,e,n))}function Lo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Do(i){return i>0?1:i<0?-1:0}function a0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ga(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function o0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bf(i,e){let t=xu(i.i,i.x,i.y),n=xu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bd(i,e,t,n){let s=xu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yu=class{static triangulate(e,t,n=2){return qm(e,t,n)}},Qn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ed(e),Td(n,e);let a=e.length;t.forEach(Ed);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Td(n,t[l]);let o=yu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ed(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Td(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ya=class i extends vt{constructor(e=new bi([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ot(s,3)),this.setAttribute("uv",new ot(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:c0,L,M=!1,_,T,D,y;if(p){L=p.getSpacedPoints(u),M=!0,d=!1;let me=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(u,me),T=new k,D=new k,y=new k}d||(m=0,h=0,g=0,v=0);let I=o.extractPoints(c),B=I.shape,V=I.holes;if(!Qn.isClockWise(B)){B=B.reverse();for(let me=0,_e=V.length;me<_e;me++){let Me=V[me];Qn.isClockWise(Me)&&(V[me]=Me.reverse())}}function ee(me){let Me=10000000000000001e-36,ve=me[0];for(let Se=1;Se<=me.length;Se++){let Ge=Se%me.length,Ve=me[Ge],ke=Ve.x-ve.x,Xe=Ve.y-ve.y,O=ke*ke+Xe*Xe,rt=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(ve.x),Math.abs(ve.y)),Ze=Me*rt*rt;if(O<=Ze){me.splice(Ge,1),Se--;continue}ve=Ve}}ee(B),V.forEach(ee);let C=V.length,Z=B;for(let me=0;me<C;me++){let _e=V[me];B=B.concat(_e)}function ae(me,_e,Me){return _e||$e("ExtrudeGeometry: vec does not exist"),me.clone().addScaledVector(_e,Me)}let oe=B.length;function fe(me,_e,Me){let ve,Se,Ge,Ve=me.x-_e.x,ke=me.y-_e.y,Xe=Me.x-me.x,O=Me.y-me.y,rt=Ve*Ve+ke*ke,Ze=Ve*O-ke*Xe;if(Math.abs(Ze)>Number.EPSILON){let R=Math.sqrt(rt),x=Math.sqrt(Xe*Xe+O*O),E=_e.x-ke/R,A=_e.y+Ve/R,P=Me.x-O/x,$=Me.y+Xe/x,j=((P-E)*O-($-A)*Xe)/(Ve*O-ke*Xe);ve=E+Ve*j-me.x,Se=A+ke*j-me.y;let K=ve*ve+Se*Se;if(K<=2)return new be(ve,Se);Ge=Math.sqrt(K/2)}else{let R=!1;Ve>Number.EPSILON?Xe>Number.EPSILON&&(R=!0):Ve<-Number.EPSILON?Xe<-Number.EPSILON&&(R=!0):Math.sign(ke)===Math.sign(O)&&(R=!0),R?(ve=-ke,Se=Ve,Ge=Math.sqrt(rt)):(ve=Ve,Se=ke,Ge=Math.sqrt(rt/2))}return new be(ve/Ge,Se/Ge)}let te=[];for(let me=0,_e=Z.length,Me=_e-1,ve=me+1;me<_e;me++,Me++,ve++)Me===_e&&(Me=0),ve===_e&&(ve=0),te[me]=fe(Z[me],Z[Me],Z[ve]);let he=[],ce,Ee=te.concat();for(let me=0,_e=C;me<_e;me++){let Me=V[me];ce=[];for(let ve=0,Se=Me.length,Ge=Se-1,Ve=ve+1;ve<Se;ve++,Ge++,Ve++)Ge===Se&&(Ge=0),Ve===Se&&(Ve=0),ce[ve]=fe(Me[ve],Me[Ge],Me[Ve]);he.push(ce),Ee=Ee.concat(ce)}let Ce;if(m===0)Ce=Qn.triangulateShape(Z,V);else{let me=[],_e=[];for(let Me=0;Me<m;Me++){let ve=Me/m,Se=h*Math.cos(ve*Math.PI/2),Ge=g*Math.sin(ve*Math.PI/2)+v;for(let Ve=0,ke=Z.length;Ve<ke;Ve++){let Xe=ae(Z[Ve],te[Ve],Ge);Te(Xe.x,Xe.y,-Se),ve===0&&me.push(Xe)}for(let Ve=0,ke=C;Ve<ke;Ve++){let Xe=V[Ve];ce=he[Ve];let O=[];for(let rt=0,Ze=Xe.length;rt<Ze;rt++){let R=ae(Xe[rt],ce[rt],Ge);Te(R.x,R.y,-Se),ve===0&&O.push(R)}ve===0&&_e.push(O)}}Ce=Qn.triangulateShape(me,_e)}let et=Ce.length,Ye=g+v;for(let me=0;me<oe;me++){let _e=d?ae(B[me],Ee[me],Ye):B[me];M?(D.copy(_.normals[0]).multiplyScalar(_e.x),T.copy(_.binormals[0]).multiplyScalar(_e.y),y.copy(L[0]).add(D).add(T),Te(y.x,y.y,y.z)):Te(_e.x,_e.y,0)}for(let me=1;me<=u;me++)for(let _e=0;_e<oe;_e++){let Me=d?ae(B[_e],Ee[_e],Ye):B[_e];M?(D.copy(_.normals[me]).multiplyScalar(Me.x),T.copy(_.binormals[me]).multiplyScalar(Me.y),y.copy(L[me]).add(D).add(T),Te(y.x,y.y,y.z)):Te(Me.x,Me.y,f/u*me)}for(let me=m-1;me>=0;me--){let _e=me/m,Me=h*Math.cos(_e*Math.PI/2),ve=g*Math.sin(_e*Math.PI/2)+v;for(let Se=0,Ge=Z.length;Se<Ge;Se++){let Ve=ae(Z[Se],te[Se],ve);Te(Ve.x,Ve.y,f+Me)}for(let Se=0,Ge=V.length;Se<Ge;Se++){let Ve=V[Se];ce=he[Se];for(let ke=0,Xe=Ve.length;ke<Xe;ke++){let O=ae(Ve[ke],ce[ke],ve);M?Te(O.x,O.y+L[u-1].y,L[u-1].x+Me):Te(O.x,O.y,f+Me)}}}je(),le();function je(){let me=s.length/3;if(d){let _e=0,Me=oe*_e;for(let ve=0;ve<et;ve++){let Se=Ce[ve];He(Se[2]+Me,Se[1]+Me,Se[0]+Me)}_e=u+m*2,Me=oe*_e;for(let ve=0;ve<et;ve++){let Se=Ce[ve];He(Se[0]+Me,Se[1]+Me,Se[2]+Me)}}else{for(let _e=0;_e<et;_e++){let Me=Ce[_e];He(Me[2],Me[1],Me[0])}for(let _e=0;_e<et;_e++){let Me=Ce[_e];He(Me[0]+oe*u,Me[1]+oe*u,Me[2]+oe*u)}}n.addGroup(me,s.length/3-me,0)}function le(){let me=s.length/3,_e=0;pe(Z,_e),_e+=Z.length;for(let Me=0,ve=V.length;Me<ve;Me++){let Se=V[Me];pe(Se,_e),_e+=Se.length}n.addGroup(me,s.length/3-me,1)}function pe(me,_e){let Me=me.length;for(;--Me>=0;){let ve=Me,Se=Me-1;Se<0&&(Se=me.length-1);for(let Ge=0,Ve=u+m*2;Ge<Ve;Ge++){let ke=oe*Ge,Xe=oe*(Ge+1),O=_e+ve+ke,rt=_e+Se+ke,Ze=_e+Se+Xe,R=_e+ve+Xe;we(O,rt,Ze,R)}}}function Te(me,_e,Me){l.push(me),l.push(_e),l.push(Me)}function He(me,_e,Me){ze(me),ze(_e),ze(Me);let ve=s.length/3,Se=w.generateTopUV(n,s,ve-3,ve-2,ve-1);tt(Se[0]),tt(Se[1]),tt(Se[2])}function we(me,_e,Me,ve){ze(me),ze(_e),ze(ve),ze(_e),ze(Me),ze(ve);let Se=s.length/3,Ge=w.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);tt(Ge[0]),tt(Ge[1]),tt(Ge[3]),tt(Ge[1]),tt(Ge[2]),tt(Ge[3])}function ze(me){s.push(l[me*3+0]),s.push(l[me*3+1]),s.push(l[me*3+2])}function tt(me){r.push(me.x),r.push(me.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return u0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new il[s.type]().fromJSON(s)),new i(n,e.options)}},c0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new be(r,a),new be(o,l),new be(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[s*3],h=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new be(a,1-l),new be(c,1-f),new be(d,1-g),new be(v,1-p)]:[new be(o,1-l),new be(u,1-f),new be(h,1-g),new be(m,1-p)]}};function u0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ai=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let w=p*d-a;for(let L=0;L<c;L++){let M=L*f-r;g.push(M,-w,0),v.push(0,0,1),m.push(L/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let L=w+c*p,M=w+c*(p+1),_=w+1+c*(p+1),T=w+1+c*p;h.push(L,M,T),h.push(M,_,T)}this.setIndex(h),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},cs=class i extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,d=(t-e)/s,h=new k,g=new be;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let w=p+m,L=w,M=w+n+1,_=w+n+2,T=w+1;o.push(L,M,T),o.push(M,_,T)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},_a=class i extends vt{constructor(e=new bi([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ot(s,3)),this.setAttribute("normal",new ot(r,3)),this.setAttribute("uv",new ot(a,2));function c(u){let f=s.length/3,d=u.extractPoints(t),h=d.shape,g=d.holes;Qn.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,p=g.length;m<p;m++){let w=g[m];Qn.isClockWise(w)===!0&&(g[m]=w.reverse())}let v=Qn.triangulateShape(h,g);for(let m=0,p=g.length;m<p;m++){let w=g[m];h=h.concat(w)}for(let m=0,p=h.length;m<p;m++){let w=h[m];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let m=0,p=v.length;m<p;m++){let w=v[m],L=w[0]+f,M=w[1]+f,_=w[2]+f;n.push(L,M,_),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return h0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function h0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Oi=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new k,d=new k,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let w=[],L=p/n,M=a+L*o,_=e*Math.cos(M),T=Math.sqrt(e*e-_*_),D=0;p===0&&a===0?D=.5/t:p===n&&l===Math.PI&&(D=-.5/t);for(let y=0;y<=t;y++){let I=y/t,B=s+I*r;f.x=-T*Math.cos(B),f.y=_,f.z=T*Math.sin(B),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(I+D,1-L),w.push(c++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let L=u[p][w+1],M=u[p][w],_=u[p+1][w],T=u[p+1][w+1];(p!==0||a>0)&&h.push(L,M,T),(p!==n-1||l<Math.PI)&&h.push(M,_,T)}this.setIndex(h),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(v,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var oi=class i extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],d=new k,h=new k,g=new k;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let w=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(w),h.y=(e+t*Math.cos(m))*Math.sin(w),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(w),d.y=e*Math.sin(w),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,w=(s+1)*(v-1)+m-1,L=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,w,M),l.push(w,L,M)}this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var va=class i extends vt{constructor(e=new da(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new be,u=new k,f=[],d=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ot(f,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(h,2));function v(){for(let L=0;L<t;L++)m(L);m(r===!1?t:0),w(),p()}function m(L){u=e.getPointAt(L/t,u);let M=a.normals[L],_=a.binormals[L];for(let T=0;T<=s;T++){let D=T/s*Math.PI*2,y=Math.sin(D),I=-Math.cos(D);l.x=I*M.x+y*_.x,l.y=I*M.y+y*_.y,l.z=I*M.z+y*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let L=1;L<=t;L++)for(let M=1;M<=s;M++){let _=(s+1)*(L-1)+(M-1),T=(s+1)*L+(M-1),D=(s+1)*L+M,y=(s+1)*(L-1)+M;g.push(_,T,y),g.push(T,D,y)}}function w(){for(let L=0;L<=t;L++)for(let M=0;M<=s;M++)c.x=L/t,c.y=M/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(wd(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(wd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=ps(i[t]);for(let s in n)e[s]=n[s]}return e}function wd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function d0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $u(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Ef={clone:ps,merge:ln},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,p0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=p0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=d0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new be().fromArray(s.value);break;case"v3":this.uniforms[n].value=new k().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rl=class extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ut=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ma=class extends In{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ka,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},al=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Sa=class extends na{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ws(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ll=class extends zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fu:r=e,o=2*t-n;break;case pu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fu:a=e,l=2*n-t;break;case pu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,L=(-1-h)*m+(1.5+h)*v+.5*g,M=h*m-h*v;for(let _=0;_!==o;++_)r[_]=p*a[u+_]+w*a[c+_]+L*a[l+_]+M*a[f+_];return r}},cl=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},ul=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hl=class extends zi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,h=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=h*d+g*2,w=f[p],L=f[p+1],M=e*d+g*2,_=u[M],T=u[M+1],D=g0(n,t,w,_,s);r[g]=Tf(D,v,L,T,m)}return r}};function Tf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function m0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function g0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Tf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=m0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ws(t,this.TimeBufferType),this.values=Ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ws(e.times,Array),values:Ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),cu(e.settings)&&(n.settings={inTangents:Ws(e.settings.inTangents,Array),outTangents:Ws(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new hl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Wr:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break;case hu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return hu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;cu(this.settings)&&(Ad(this.settings.inTangents,e),Ad(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&im(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[d+g]||v!==t[h+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,cu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ad(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=qo;var Hi=class extends wn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Wr;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var dl=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};dl.prototype.ValueTypeName="color";var fl=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="number";var pl=class extends zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ba=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}};ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends wn{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Wr;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};ml.prototype.ValueTypeName="vector";var gl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wf=new gl,xl=class{constructor(e){this.manager=e!==void 0?e:wf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var us=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zn=class extends us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uu=new ct,Rd=new k,Cd=new k,or=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ir,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Zs||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},No=new k,Uo=new mn,Kn=new k,Ea=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(No,Uo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(No,Uo,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ui=new k,Id=new be,Pd=new be,Pt=class extends Ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Id,Pd),t.subVectors(Pd,Id)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_u=class extends or{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=as*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ta=class extends us{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _u}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},vu=class extends or{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0}},Ei=class extends us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},lr=class extends Ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mu=class extends or{constructor(){super(new lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},li=class extends us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Mu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Xs=-90,qs=1,yl=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pt(Xs,qs,e,t);s.layers=this.layers,this.add(s);let r=new Pt(Xs,qs,e,t);r.layers=this.layers,this.add(r);let a=new Pt(Xs,qs,e,t);a.layers=this.layers,this.add(a);let o=new Pt(Xs,qs,e,t);o.layers=this.layers,this.add(o);let l=new Pt(Xs,qs,e,t);l.layers=this.layers,this.add(l);let c=new Pt(Xs,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_l=class extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yu="\\[\\]\\.:\\/",x0=new RegExp("["+Yu+"]","g"),Zu="[^"+Yu+"]",y0="[^"+Yu.replace("\\.","")+"]",_0=/((?:WC+[\/:])*)/.source.replace("WC",Zu),v0=/(WCOD+)?/.source.replace("WCOD",y0),M0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),S0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),b0=new RegExp("^"+_0+v0+M0+S0+"$"),E0=["material","materials","bones","map"],Su=class{constructor(e,t,n){let s=n||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ct=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x0,"")}static parseTrackName(e){let t=b0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);E0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Su;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kv=new Float32Array(1);var Ld=new ct,wa=class{constructor(e,t,n=0,s=1/0){this.ray=new os(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ld),this}intersectObject(e,t=!0,n=[]){return bu(e,this,n,t),n.sort(Dd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bu(e[s],this,n,t);return n.sort(Dd),n}};function Dd(i,e){return i.distance-e.distance}function bu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)bu(r[a],e,t,!0)}}var th=class th{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};th.prototype.isMatrix2=!0;var Eu=th;function Ju(i,e,t,n){let s=T0(n);switch(t){case Hu:return i*e;case Rl:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case $i:return i*e*2/s.components*s.byteLength;case Il:return i*e*2/s.components*s.byteLength;case Gu:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case Pl:return i*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case kl:case Fl:case Ol:case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Na:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case ac:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ua:case oc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T0(i){switch(i){case yn:case Fu:return{byteLength:1,components:1};case dr:case Bu:case Vn:return{byteLength:2,components:1};case wl:case Al:return{byteLength:2,components:4};case Gn:case Tl:case Pn:return{byteLength:4,components:1};case Ou:case zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function I0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let v=f[h];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var P0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,k0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F0=`#ifdef USE_AOMAP
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
#endif`,B0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O0=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,z0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,K0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,eg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ng=`vec3 transformedNormal = objectNormal;
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
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",lg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,_g=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Cg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ig=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,gx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,Mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ox=`#define DISTANCE
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
}`,zx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vx=`uniform float scale;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#include <common>
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
}`,qx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Yx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,jx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qx=`#define PHONG
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
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ty=`#define STANDARD
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
}`,ny=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,iy=`#define TOON
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
}`,sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,ry=`uniform float size;
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
}`,ay=`uniform vec3 diffuse;
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
}`,oy=`#include <common>
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
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,cy=`uniform float rotation;
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
}`,uy=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:P0,alphahash_pars_fragment:L0,alphamap_fragment:D0,alphamap_pars_fragment:N0,alphatest_fragment:U0,alphatest_pars_fragment:k0,aomap_fragment:F0,aomap_pars_fragment:B0,batching_pars_vertex:O0,batching_vertex:z0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:q0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:K0,color_pars_vertex:j0,color_vertex:Q0,common:eg,cube_uv_reflection_fragment:tg,defaultnormal_vertex:ng,displacementmap_pars_vertex:ig,displacementmap_vertex:sg,emissivemap_fragment:rg,emissivemap_pars_fragment:ag,colorspace_fragment:og,colorspace_pars_fragment:lg,envmap_fragment:cg,envmap_common_pars_fragment:ug,envmap_pars_fragment:hg,envmap_pars_vertex:dg,envmap_physical_pars_fragment:bg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:xg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:_g,lights_lambert_fragment:vg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:wg,lights_phong_pars_fragment:Ag,lights_physical_fragment:Rg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Ig,lights_fragment_maps:Pg,lights_fragment_end:Lg,lightprobes_pars_fragment:Dg,logdepthbuf_fragment:Ng,logdepthbuf_pars_fragment:Ug,logdepthbuf_pars_vertex:kg,logdepthbuf_vertex:Fg,map_fragment:Bg,map_pars_fragment:Og,map_particle_fragment:zg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:$g,morphtarget_vertex:Yg,normal_fragment_begin:Zg,normal_fragment_maps:Jg,normal_pars_fragment:Kg,normal_pars_vertex:jg,normal_vertex:Qg,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:nx,clearcoat_pars_fragment:ix,iridescence_pars_fragment:sx,opaque_fragment:rx,packing:ax,premultiplied_alpha_fragment:ox,project_vertex:lx,dithering_fragment:cx,dithering_pars_fragment:ux,roughnessmap_fragment:hx,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:px,shadowmap_vertex:mx,shadowmask_pars_fragment:gx,skinbase_vertex:xx,skinning_pars_vertex:yx,skinning_vertex:_x,skinnormal_vertex:vx,specularmap_fragment:Mx,specularmap_pars_fragment:Sx,tonemapping_fragment:bx,tonemapping_pars_fragment:Ex,transmission_fragment:Tx,transmission_pars_fragment:wx,uv_pars_fragment:Ax,uv_pars_vertex:Rx,uv_vertex:Cx,worldpos_vertex:Ix,background_vert:Px,background_frag:Lx,backgroundCube_vert:Dx,backgroundCube_frag:Nx,cube_vert:Ux,cube_frag:kx,depth_vert:Fx,depth_frag:Bx,distance_vert:Ox,distance_frag:zx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Vx,linedashed_frag:Wx,meshbasic_vert:Xx,meshbasic_frag:qx,meshlambert_vert:$x,meshlambert_frag:Yx,meshmatcap_vert:Zx,meshmatcap_frag:Jx,meshnormal_vert:Kx,meshnormal_frag:jx,meshphong_vert:Qx,meshphong_frag:ey,meshphysical_vert:ty,meshphysical_frag:ny,meshtoon_vert:iy,meshtoon_frag:sy,points_vert:ry,points_frag:ay,shadow_vert:oy,shadow_frag:ly,sprite_vert:cy,sprite_frag:uy},Re={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},hi={basic:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ue(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:ln([Re.common,Re.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:ln([Re.lights,Re.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};hi.physical={uniforms:ln([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var uc={r:0,b:0,g:0},hy=new ct,Zf=new Ke;Zf.set(-1,0,0,0,1,0,0,0,1);function dy(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,u=null,f=0,d=null;function h(w){let L=w.isScene===!0?w.background:null;if(L&&L.isTexture){let M=w.backgroundBlurriness>0;L=e.get(L,M)}return L}function g(w){let L=!1,M=h(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),L=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(w,L){let M=h(L);M&&(M.isCubeTexture||M.mapping===Ra)?(c===void 0&&(c=new Oe(new Qt(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:ps(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hy.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zf),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==mt,(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Oe(new ai(2,2),new fn({name:"BackgroundMaterial",uniforms:ps(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,L){w.getRGB(uc,$u(i)),t.buffers.color.setClear(uc.r,uc.g,uc.b,L,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,L=1){a.set(w),o=L,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:v,dispose:p}}function fy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(V,Y,ee,C,Z){let ae=!1,oe=f(V,C,ee,Y);r!==oe&&(r=oe,c(r.object)),ae=h(V,C,ee,Z),ae&&g(V,C,ee,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,M(V,Y,ee,C),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function u(V){return i.deleteVertexArray(V)}function f(V,Y,ee,C){let Z=C.wireframe===!0,ae=n[Y.id];ae===void 0&&(ae={},n[Y.id]=ae);let oe=V.isInstancedMesh===!0?V.id:0,fe=ae[oe];fe===void 0&&(fe={},ae[oe]=fe);let te=fe[ee.id];te===void 0&&(te={},fe[ee.id]=te);let he=te[Z];return he===void 0&&(he=d(l()),te[Z]=he),he}function d(V){let Y=[],ee=[],C=[];for(let Z=0;Z<t;Z++)Y[Z]=0,ee[Z]=0,C[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ee,attributeDivisors:C,object:V,attributes:{},index:null}}function h(V,Y,ee,C){let Z=r.attributes,ae=Y.attributes,oe=0,fe=ee.getAttributes();for(let te in fe)if(fe[te].location>=0){let ce=Z[te],Ee=ae[te];if(Ee===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(Ee=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(Ee=V.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;oe++}return r.attributesNum!==oe||r.index!==C}function g(V,Y,ee,C){let Z={},ae=Y.attributes,oe=0,fe=ee.getAttributes();for(let te in fe)if(fe[te].location>=0){let ce=ae[te];ce===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(ce=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(ce=V.instanceColor));let Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),Z[te]=Ee,oe++}r.attributes=Z,r.attributesNum=oe,r.index=C}function v(){let V=r.newAttributes;for(let Y=0,ee=V.length;Y<ee;Y++)V[Y]=0}function m(V){p(V,0)}function p(V,Y){let ee=r.newAttributes,C=r.enabledAttributes,Z=r.attributeDivisors;ee[V]=1,C[V]===0&&(i.enableVertexAttribArray(V),C[V]=1),Z[V]!==Y&&(i.vertexAttribDivisor(V,Y),Z[V]=Y)}function w(){let V=r.newAttributes,Y=r.enabledAttributes;for(let ee=0,C=Y.length;ee<C;ee++)Y[ee]!==V[ee]&&(i.disableVertexAttribArray(ee),Y[ee]=0)}function L(V,Y,ee,C,Z,ae,oe){oe===!0?i.vertexAttribIPointer(V,Y,ee,Z,ae):i.vertexAttribPointer(V,Y,ee,C,Z,ae)}function M(V,Y,ee,C){v();let Z=C.attributes,ae=ee.getAttributes(),oe=Y.defaultAttributeValues;for(let fe in ae){let te=ae[fe];if(te.location>=0){let he=Z[fe];if(he===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(he=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(he=V.instanceColor)),he!==void 0){let ce=he.normalized,Ee=he.itemSize,Ce=e.get(he);if(Ce===void 0)continue;let et=Ce.buffer,Ye=Ce.type,je=Ce.bytesPerElement,le=Ye===i.INT||Ye===i.UNSIGNED_INT||he.gpuType===Tl;if(he.isInterleavedBufferAttribute){let pe=he.data,Te=pe.stride,He=he.offset;if(pe.isInstancedInterleavedBuffer){for(let we=0;we<te.locationSize;we++)p(te.location+we,pe.meshPerAttribute);V.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<te.locationSize;we++)m(te.location+we);i.bindBuffer(i.ARRAY_BUFFER,et);for(let we=0;we<te.locationSize;we++)L(te.location+we,Ee/te.locationSize,Ye,ce,Te*je,(He+Ee/te.locationSize*we)*je,le)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<te.locationSize;pe++)p(te.location+pe,he.meshPerAttribute);V.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<te.locationSize;pe++)m(te.location+pe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let pe=0;pe<te.locationSize;pe++)L(te.location+pe,Ee/te.locationSize,Ye,ce,Ee*je,Ee/te.locationSize*pe*je,le)}}else if(oe!==void 0){let ce=oe[fe];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(te.location,ce);break;case 3:i.vertexAttrib3fv(te.location,ce);break;case 4:i.vertexAttrib4fv(te.location,ce);break;default:i.vertexAttrib1fv(te.location,ce)}}}}w()}function _(){I();for(let V in n){let Y=n[V];for(let ee in Y){let C=Y[ee];for(let Z in C){let ae=C[Z];for(let oe in ae)u(ae[oe].object),delete ae[oe];delete C[Z]}}delete n[V]}}function T(V){if(n[V.id]===void 0)return;let Y=n[V.id];for(let ee in Y){let C=Y[ee];for(let Z in C){let ae=C[Z];for(let oe in ae)u(ae[oe].object),delete ae[oe];delete C[Z]}}delete n[V.id]}function D(V){for(let Y in n){let ee=n[Y];for(let C in ee){let Z=ee[C];if(Z[V.id]===void 0)continue;let ae=Z[V.id];for(let oe in ae)u(ae[oe].object),delete ae[oe];delete Z[V.id]}}}function y(V){for(let Y in n){let ee=n[Y],C=V.isInstancedMesh===!0?V.id:0,Z=ee[C];if(Z!==void 0){for(let ae in Z){let oe=Z[ae];for(let fe in oe)u(oe[fe].object),delete oe[fe];delete Z[ae]}delete ee[C],Object.keys(ee).length===0&&delete n[Y]}}}function I(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:B,dispose:_,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function py(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function my(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Ln&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let y=D===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==yn&&D!==Pn&&!y&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:M,maxSamples:_,samples:T}}function gy(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kt,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,L=w*4,M=p.clippingState||null;l.value=M,M=u(g,d,L,h);for(let _=0;_!==L;++_)M[_]=t[_];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=h+v*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let L=0,M=h;L!==v;++L,M+=4)a.copy(f[L]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var mr=4,xy=6,yy=20,_y=256,Fa=new lr,Af=new Ue,nh=null,ih=0,sh=0,rh=!1,vy=new k,ms=new k,xr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=vy}=r;nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,sh),this._renderer.xr.enabled=rh,e.scissorTest=!1,pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Vn,format:Ln,colorSpace:Xr,depthBuffer:!1},s=Rf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=My(r)),this._blurMaterial=by(r,e,t),this._ggxMaterial=Sy(r,e,t)}return s}_compileMaterial(e){let t=new Oe(new vt,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,s,r){let l=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Af),f.toneMapping=Hn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Qt,new Zt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Af),p=!0);for(let L=0;L<6;L++){let M=L%3;M===0?(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[L],r.y,r.z)):M===1?(l.up.set(0,0,c[L]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[L],r.z)):(l.up.set(0,c[L],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[L]));let _=this._cubeSize;pr(s,M*_,L>2?_:0,_,_),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Wi||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;pr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Fa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,h=f*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-mr?n-g+mr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,pr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Fa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,pr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Fa)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-mr?s-this._lodMax+mr:0),d=4*(this._cubeSize-u);pr(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,Fa)}};function My(i){let e=[],t=[],n=i,s=i-mr+1+xy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,h=3,g=new Float32Array(h*d*f),v=new Float32Array(h*d*f);for(let p=0;p<f;p++){let w=p%3*2/3-1,L=p>2?0:-1,M=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];g.set(M,h*d*p);for(let _=0;_<d;_++){let T=u[_*2]*2-1,D=u[_*2+1]*2-1;p===0?ms.set(1,D,T):p===1?ms.set(-T,1,-D):p===2?ms.set(-T,D,1):p===3?ms.set(-1,D,-T):p===4?ms.set(-T,-1,D):ms.set(T,D,-1),ms.toArray(v,(p*d+_)*h)}}let m=new vt;m.setAttribute("position",new Ht(g,h)),m.setAttribute("outputDirection",new Ht(v,h)),t.push(new Oe(m,null)),n>mr&&n--}return{lodMeshes:t,sizeLods:e}}function Rf(i,e,t){let n=new gn(i,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sy(i,e,t){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_y,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function by(i,e,t){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Cf(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function If(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ci});r.uniforms.tEquirect.value=t;let a=new Oe(s,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=jt),new yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Ey(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===Sl||h===bl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new dc(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let h=d.mapping,g=h===Sl||h===bl,v=h===Wi||h===fs;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let w=d.image;return g&&w&&w.height>0||v&&w&&l(w)?(n===null&&(n=new xr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===Sl?d.mapping=Wi:h===bl&&(d.mapping=fs),d}function l(d){let h=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&h++;return h===g}function c(d){let h=d.target;h.removeEventListener("dispose",c);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ty(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function wy(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(h!==null){let w=h.array;v=h.version;for(let L=0,M=w.length;L<M;L+=3){let _=w[L+0],T=w[L+1],D=w[L+2];d.push(_,T,T,D,D,_)}}else{let w=g.array;v=g.version;for(let L=0,M=w.length/3-1;L<M;L+=3){let _=L+0,T=L+1,D=L+2;d.push(_,T,T,D,D,_)}}let m=new(g.count>=65535?jr:Kr)(d,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Ay(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,h);let v=0;for(let m=0;m<h;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ry(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cy(i,e,t){let n=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let I=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",I)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],L=0;h===!0&&(L=1),g===!0&&(L=2),v===!0&&(L=3);let M=o.attributes.position.count*L,_=1;M>e.maxTextureSize&&(_=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*_*4*f),D=new Zr(T,M,_,f);D.type=Pn,D.needsUpdate=!0;let y=L*4;for(let B=0;B<f;B++){let V=m[B],Y=p[B],ee=w[B],C=M*_*4*B;for(let Z=0;Z<V.count;Z++){let ae=Z*y;h===!0&&(s.fromBufferAttribute(V,Z),T[C+ae+0]=s.x,T[C+ae+1]=s.y,T[C+ae+2]=s.z,T[C+ae+3]=0),g===!0&&(s.fromBufferAttribute(Y,Z),T[C+ae+4]=s.x,T[C+ae+5]=s.y,T[C+ae+6]=s.z,T[C+ae+7]=0),v===!0&&(s.fromBufferAttribute(ee,Z),T[C+ae+8]=s.x,T[C+ae+9]=s.y,T[C+ae+10]=s.z,T[C+ae+11]=ee.itemSize===4?s.w:1)}}d={count:f,texture:D,size:new be(M,_)},n.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Iy(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Py={[Iu]:"LINEAR_TONE_MAPPING",[Pu]:"REINHARD_TONE_MAPPING",[Lu]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Nu]:"AGX_TONE_MAPPING",[Uu]:"NEUTRAL_TONE_MAPPING",[Du]:"CUSTOM_TONE_MAPPING"};function Ly(i,e,t,n,s,r){let a=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new vt;c.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ot([0,2,0,0,2,0],2));let u=new rl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Oe(c,u),d=new lr(-1,1,1,-1,0,1),h=null,g=null,v=!1,m,p=null,w=[],L=!1;this.setSize=function(M,_){a.setSize(M,_),o!==null&&o.setSize(M,_),l!==null&&l.setSize(M,_);for(let T=0;T<w.length;T++){let D=w[T];D.setSize&&D.setSize(M,_)}},this.setEffects=function(M){w=M,L=w.length>0&&w[0].isRenderPass===!0;let _=a.width,T=a.height;w.length>0&&o===null&&(o=new gn(_,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),l=new gn(_,T,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<w.length;D++){let y=w[D];y.setSize&&y.setSize(_,T)}},this.begin=function(M,_){if(v||M.toneMapping===Hn&&w.length===0)return!1;if(p=_,_!==null){let T=_.width,D=_.height;(a.width!==T||a.height!==D)&&this.setSize(T,D)}return L===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Hn,!0},this.hasRenderPass=function(){return L},this.end=function(M,_){M.toneMapping=m,v=!0;let T=a,D=o;for(let y=0;y<w.length;y++){let I=w[y];I.enabled!==!1&&(I.render(M,D,T,_),I.needsSwap!==!1&&(T=D,D=D===o?l:o))}if(h!==M.outputColorSpace||g!==M.toneMapping){h=M.outputColorSpace,g=M.toneMapping,u.defines={},lt.getTransfer(h)===mt&&(u.defines.SRGB_TRANSFER="");let y=Py[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(p),M.render(f,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Jf=new dn,lh=new Bi(1,1),Kf=new Zr,jf=new Zo,Qf=new ra,Pf=[],Lf=[],Df=new Float32Array(16),Nf=new Float32Array(9),Uf=new Float32Array(4);function yr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Pf[s];if(r===void 0&&(r=new Float32Array(s),Pf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mc(i,e){let t=Lf[e];t===void 0&&(t=new Int32Array(e),Lf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Dy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ny(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Uy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function ky(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function Fy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Uf.set(n),i.uniformMatrix2fv(this.addr,!1,Uf),Xt(t,n)}}function By(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Nf.set(n),i.uniformMatrix3fv(this.addr,!1,Nf),Xt(t,n)}}function Oy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;Df.set(n),i.uniformMatrix4fv(this.addr,!1,Df),Xt(t,n)}}function zy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function Gy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function Vy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function Wy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function $y(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function Yy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=t.isReversedDepthBuffer()?cc:lc,r=lh):r=Jf,t.setTexture2D(e||r,s)}function Zy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jf,s)}function Jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Qf,s)}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Kf,s)}function jy(i){switch(i){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return ky;case 35674:return Fy;case 35675:return By;case 35676:return Oy;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Yy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Ky}}function Qy(i,e){i.uniform1fv(this.addr,e)}function e_(i,e){let t=yr(e,this.size,2);i.uniform2fv(this.addr,t)}function t_(i,e){let t=yr(e,this.size,3);i.uniform3fv(this.addr,t)}function n_(i,e){let t=yr(e,this.size,4);i.uniform4fv(this.addr,t)}function i_(i,e){let t=yr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function s_(i,e){let t=yr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function r_(i,e){let t=yr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function a_(i,e){i.uniform1iv(this.addr,e)}function o_(i,e){i.uniform2iv(this.addr,e)}function l_(i,e){i.uniform3iv(this.addr,e)}function c_(i,e){i.uniform4iv(this.addr,e)}function u_(i,e){i.uniform1uiv(this.addr,e)}function h_(i,e){i.uniform2uiv(this.addr,e)}function d_(i,e){i.uniform3uiv(this.addr,e)}function f_(i,e){i.uniform4uiv(this.addr,e)}function p_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=lh:a=Jf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function m_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jf,r[a])}function g_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Qf,r[a])}function x_(i,e,t){let n=this.cache,s=e.length,r=mc(t,s);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Kf,r[a])}function y_(i){switch(i){case 5126:return Qy;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return a_;case 35667:case 35671:return o_;case 35668:case 35672:return l_;case 35669:case 35673:return c_;case 5125:return u_;case 36294:return h_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}var ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=jy(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y_(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ah=/(\w+)(\])?(\[|\.)?/g;function kf(i,e){i.seq.push(e),i.map[e.id]=e}function __(i,e,t){let n=i.name,s=n.length;for(ah.lastIndex=0;;){let r=ah.exec(n),a=ah.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){kf(t,c===void 0?new ch(o,i,e):new uh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new hh(o),kf(t,f)),t=f}}}var gr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);__(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var v_=37297,M_=0;function S_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bf=new Ke;function b_(i){lt._getMatrix(Bf,lt.workingColorSpace,i);let e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+S_(i.getShaderSource(e),o)}else return r}function E_(i,e){let t=b_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var T_={[Iu]:"Linear",[Pu]:"Reinhard",[Lu]:"Cineon",[Aa]:"ACESFilmic",[Nu]:"AgX",[Uu]:"Neutral",[Du]:"Custom"};function w_(i,e){let t=T_[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hc=new k;function A_(){lt.getLuminanceCoefficients(hc);let i=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function C_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function I_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Oa(i){return i!==""}function zf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var P_=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(i){return i.replace(P_,D_)}var L_=new Map;function D_(i,e){let t=it[e];if(t===void 0){let n=L_.get(e);if(n!==void 0)t=it[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return dh(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gf(i){return i.replace(N_,U_)}function U_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var k_={[hs]:"SHADOWMAP_TYPE_PCF",[cr]:"SHADOWMAP_TYPE_VSM"};function F_(i){return k_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var B_={[Wi]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE_UV"};function O_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":B_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var z_={[fs]:"ENVMAP_MODE_REFRACTION"};function H_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":z_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G_={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[tf]:"ENVMAP_BLENDING_MIX",[nf]:"ENVMAP_BLENDING_ADD"};function V_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":G_[i.combine]||"ENVMAP_BLENDING_NONE"}function W_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function X_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=F_(t),c=O_(t),u=H_(t),f=V_(t),d=W_(t),h=R_(t),g=C_(r),v=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(m=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[Vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?it.tonemapping_pars_fragment:"",t.toneMapping!==Hn?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,E_("linearToOutputTexel",t.outputColorSpace),A_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),a=dh(a),a=zf(a,t),a=Hf(a,t),o=dh(o),o=zf(o,t),o=Hf(o,t),a=Gf(a),o=Gf(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let L=w+m+a,M=w+p+o,_=Ff(s,s.VERTEX_SHADER,L),T=Ff(s,s.FRAGMENT_SHADER,M);s.attachShader(v,_),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function D(V){if(i.debug.checkShaderErrors){let Y=s.getProgramInfoLog(v)||"",ee=s.getShaderInfoLog(_)||"",C=s.getShaderInfoLog(T)||"",Z=Y.trim(),ae=ee.trim(),oe=C.trim(),fe=!0,te=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(fe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,_,T);else{let he=Of(s,_,"vertex"),ce=Of(s,T,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+Z+`
`+he+`
`+ce)}else Z!==""?qe("WebGLProgram: Program Info Log:",Z):(ae===""||oe==="")&&(te=!1);te&&(V.diagnostics={runnable:fe,programLog:Z,vertexShader:{log:ae,prefix:m},fragmentShader:{log:oe,prefix:p}})}s.deleteShader(_),s.deleteShader(T),y=new gr(s,v),I=I_(s,v)}let y;this.getUniforms=function(){return y===void 0&&D(this),y};let I;this.getAttributes=function(){return I===void 0&&D(this),I};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(v,v_)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=M_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=_,this.fragmentShader=T,this}var q_=0,fh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ph(e),t.set(e,n)),n}},ph=class{constructor(e){this.id=q_++,this.code=e,this.usedTimes=0}};function $_(i){return i===$i||i===Na||i===Ua}function Y_(i,e,t,n,s,r){let a=new js,o=new fh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,I,B,V,Y,ee){let C=V.fog,Z=Y.geometry,ae=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,oe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,fe=e.get(y.envMap||ae,oe),te=fe&&fe.mapping===Ra?fe.image.height:null,he=h[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let ce=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ee=ce!==void 0?ce.length:0,Ce=0;Z.morphAttributes.position!==void 0&&(Ce=1),Z.morphAttributes.normal!==void 0&&(Ce=2),Z.morphAttributes.color!==void 0&&(Ce=3);let et,Ye,je,le;if(he){let Le=hi[he];et=Le.vertexShader,Ye=Le.fragmentShader}else{et=y.vertexShader,Ye=y.fragmentShader;let Le=o.getVertexShaderStage(y),Ae=o.getFragmentShaderStage(y);o.update(y,Le,Ae),je=Le.id,le=Ae.id}let pe=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),He=Y.isInstancedMesh===!0,we=Y.isBatchedMesh===!0,ze=!!y.map,tt=!!y.matcap,me=!!fe,_e=!!y.aoMap,Me=!!y.lightMap,ve=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,Ge=!!y.displacementMap,Ve=!!y.emissiveMap,ke=!!y.metalnessMap,Xe=!!y.roughnessMap,O=y.anisotropy>0,rt=y.clearcoat>0,Ze=y.dispersion>0,R=y.retroreflectivity>0,x=y.iridescence>0,E=y.sheen>0,A=y.transmission>0,P=O&&!!y.anisotropyMap,$=rt&&!!y.clearcoatMap,j=rt&&!!y.clearcoatNormalMap,K=rt&&!!y.clearcoatRoughnessMap,se=x&&!!y.iridescenceMap,F=x&&!!y.iridescenceThicknessMap,G=E&&!!y.sheenColorMap,X=E&&!!y.sheenRoughnessMap,H=!!y.specularMap,Q=!!y.specularColorMap,re=!!y.specularIntensityMap,de=A&&!!y.transmissionMap,U=A&&!!y.thicknessMap,ye=!!y.gradientMap,b=!!y.alphaMap,N=y.alphaTest>0,J=!!y.alphaHash,q=!!y.extensions,ge=Hn;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=i.toneMapping);let xe={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:Ye,defines:y.defines,customVertexShaderID:je,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:we,batchingColor:we&&Y._colorsTexture!==null,instancing:He,instancingColor:He&&Y.instanceColor!==null,instancingMorph:He&&Y.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:tt,envMap:me,envMapMode:me&&fe.mapping,envMapCubeUVHeight:te,aoMap:_e,lightMap:Me,bumpMap:ve,normalMap:Se,displacementMap:Ge,emissiveMap:Ve,normalMapObjectSpace:Se&&y.normalMapType===af,normalMapTangentSpace:Se&&y.normalMapType===ka,packedNormalMap:Se&&y.normalMapType===ka&&$_(y.normalMap.format),metalnessMap:ke,roughnessMap:Xe,anisotropy:O,anisotropyMap:P,clearcoat:rt,clearcoatMap:$,clearcoatNormalMap:j,clearcoatRoughnessMap:K,dispersion:Ze,retroreflection:R,iridescence:x,iridescenceMap:se,iridescenceThicknessMap:F,sheen:E,sheenColorMap:G,sheenRoughnessMap:X,specularMap:H,specularColorMap:Q,specularIntensityMap:re,transmission:A,transmissionMap:de,thicknessMap:U,gradientMap:ye,opaque:y.transparent===!1&&y.blending===ur&&y.alphaToCoverage===!1,alphaMap:b,alphaTest:N,alphaHash:J,combine:y.combine,mapUv:ze&&g(y.map.channel),aoMapUv:_e&&g(y.aoMap.channel),lightMapUv:Me&&g(y.lightMap.channel),bumpMapUv:ve&&g(y.bumpMap.channel),normalMapUv:Se&&g(y.normalMap.channel),displacementMapUv:Ge&&g(y.displacementMap.channel),emissiveMapUv:Ve&&g(y.emissiveMap.channel),metalnessMapUv:ke&&g(y.metalnessMap.channel),roughnessMapUv:Xe&&g(y.roughnessMap.channel),anisotropyMapUv:P&&g(y.anisotropyMap.channel),clearcoatMapUv:$&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:j&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:F&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:G&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:X&&g(y.sheenRoughnessMap.channel),specularMapUv:H&&g(y.specularMap.channel),specularColorMapUv:Q&&g(y.specularColorMap.channel),specularIntensityMapUv:re&&g(y.specularIntensityMap.channel),transmissionMapUv:de&&g(y.transmissionMap.channel),thicknessMapUv:U&&g(y.thicknessMap.channel),alphaMapUv:b&&g(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Se||O),vertexNormals:!!Z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Z.attributes.uv&&(ze||b),fog:!!C,useFog:y.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||Z.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:Z.attributes.position!==void 0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ce,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&lt.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:Ve&&y.emissiveMap.isVideoTexture===!0&&lt.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bt,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:q&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(q&&y.extensions.multiDraw===!0||we)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function m(y){let I=[];if(y.shaderID?I.push(y.shaderID):(I.push(y.customVertexShaderID),I.push(y.customFragmentShaderID)),y.defines!==void 0)for(let B in y.defines)I.push(B),I.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(p(I,y),w(I,y),I.push(i.outputColorSpace)),I.push(y.customProgramCacheKey),I.join()}function p(y,I){y.push(I.precision),y.push(I.outputColorSpace),y.push(I.envMapMode),y.push(I.envMapCubeUVHeight),y.push(I.mapUv),y.push(I.alphaMapUv),y.push(I.lightMapUv),y.push(I.aoMapUv),y.push(I.bumpMapUv),y.push(I.normalMapUv),y.push(I.displacementMapUv),y.push(I.emissiveMapUv),y.push(I.metalnessMapUv),y.push(I.roughnessMapUv),y.push(I.anisotropyMapUv),y.push(I.clearcoatMapUv),y.push(I.clearcoatNormalMapUv),y.push(I.clearcoatRoughnessMapUv),y.push(I.iridescenceMapUv),y.push(I.iridescenceThicknessMapUv),y.push(I.sheenColorMapUv),y.push(I.sheenRoughnessMapUv),y.push(I.specularMapUv),y.push(I.specularColorMapUv),y.push(I.specularIntensityMapUv),y.push(I.transmissionMapUv),y.push(I.thicknessMapUv),y.push(I.combine),y.push(I.fogExp2),y.push(I.sizeAttenuation),y.push(I.morphTargetsCount),y.push(I.morphAttributeCount),y.push(I.numSunLights),y.push(I.numDirLights),y.push(I.numPointLights),y.push(I.numSpotLights),y.push(I.numSpotLightMaps),y.push(I.numHemiLights),y.push(I.numRectAreaLights),y.push(I.numSunLightShadows),y.push(I.numDirLightShadows),y.push(I.numPointLightShadows),y.push(I.numSpotLightShadows),y.push(I.numSpotLightShadowsWithMaps),y.push(I.numLightProbes),y.push(I.shadowMapType),y.push(I.toneMapping),y.push(I.numClippingPlanes),y.push(I.numClipIntersection),y.push(I.depthPacking)}function w(y,I){a.disableAll(),I.instancing&&a.enable(0),I.instancingColor&&a.enable(1),I.instancingMorph&&a.enable(2),I.matcap&&a.enable(3),I.envMap&&a.enable(4),I.normalMapObjectSpace&&a.enable(5),I.normalMapTangentSpace&&a.enable(6),I.clearcoat&&a.enable(7),I.iridescence&&a.enable(8),I.alphaTest&&a.enable(9),I.vertexColors&&a.enable(10),I.vertexAlphas&&a.enable(11),I.vertexUv1s&&a.enable(12),I.vertexUv2s&&a.enable(13),I.vertexUv3s&&a.enable(14),I.vertexTangents&&a.enable(15),I.anisotropy&&a.enable(16),I.alphaHash&&a.enable(17),I.batching&&a.enable(18),I.dispersion&&a.enable(19),I.retroreflection&&a.enable(24),I.batchingColor&&a.enable(20),I.gradientMap&&a.enable(21),I.packedNormalMap&&a.enable(22),I.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.reversedDepthBuffer&&a.enable(4),I.skinning&&a.enable(5),I.morphTargets&&a.enable(6),I.morphNormals&&a.enable(7),I.morphColors&&a.enable(8),I.premultipliedAlpha&&a.enable(9),I.shadowMapEnabled&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),I.decodeVideoTextureEmissive&&a.enable(20),I.alphaToCoverage&&a.enable(21),I.numLightProbeGrids>0&&a.enable(22),I.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function L(y){let I=h[y.type],B;if(I){let V=hi[I];B=Ef.clone(V.uniforms)}else B=y.uniforms;return B}function M(y,I){let B=u.get(I);return B!==void 0?++B.usedTimes:(B=new X_(i,I,y,s),c.push(B),u.set(I,B)),B}function _(y){if(--y.usedTimes===0){let I=c.indexOf(y);c[I]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function D(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:L,acquireProgram:M,releaseProgram:_,releaseShaderCache:T,programs:c,dispose:D}}function Z_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,v,m,p){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=w):(w.id=d.id,w.object=d,w.geometry=h,w.material=g,w.materialVariant=a(d),w.groupOrder=v,w.renderOrder=d.renderOrder,w.z=m,w.group=p),e++,w}function l(d,h,g,v,m,p,w){w.reversedDepth===!0&&(m=-m);let L=o(d,h,g,v,m,p);g.transmission>0?n.push(L):g.transparent===!0?s.push(L):t.push(L)}function c(d,h,g,v,m,p){let w=o(d,h,g,v,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?s.unshift(w):t.unshift(w)}function u(d,h){t.length>1&&t.sort(d||J_),n.length>1&&n.sort(h||Wf),s.length>1&&s.sort(h||Wf)}function f(){for(let d=e,h=i.length;d<h;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function K_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xf,i.set(n,[a])):s>=r.length?(a=new Xf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function j_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new Ue};break;case"SpotLight":t={position:new k,direction:new k,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Q_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ev=0;function tv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nv(i){let e=new j_,t=Q_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new ct,a=new ct;function o(c){let u=0,f=0,d=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,w=0,L=0,M=0,_=0,T=0,D=0,y=0,I=0,B=0;c.sort(tv);for(let Y=0,ee=c.length;Y<ee;Y++){let C=c[Y],Z=C.color,ae=C.intensity,oe=C.distance,fe=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===$i?fe=C.shadow.map.texture:fe=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=Z.r*ae,f+=Z.g*ae,d+=Z.b*ae;else if(C.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(C.sh.coefficients[te],ae);B++}else if(C.isSunLight){let te=e.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let he=C.shadow,ce=t.get(C);ce.shadowIntensity=he.intensity,ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize.copy(he.mapSize).multiply(he.getFrameExtents()),n.sunShadow[g]=ce,n.sunShadowMap[g]=fe;let Ee=he.getViewportCount();for(let Ce=0;Ce<Ee;Ce++)n.sunShadowMatrix[v+Ce]=he.getMatrix(Ce),n.sunShadowCascade[v+Ce]=he._cascadeData[Ce];v+=Ee,g++}n.sun[h]=te,h++}else if(C.isDirectionalLight){let te=e.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let he=C.shadow,ce=t.get(C);ce.shadowIntensity=he.intensity,ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,n.directionalShadow[m]=ce,n.directionalShadowMap[m]=fe,n.directionalShadowMatrix[m]=C.shadow.matrix,_++}n.directional[m]=te,m++}else if(C.isSpotLight){let te=e.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(Z).multiplyScalar(ae),te.distance=oe,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,n.spot[w]=te;let he=C.shadow;if(C.map&&(n.spotLightMap[y]=C.map,y++,he.updateMatrices(C),C.castShadow&&I++),n.spotLightMatrix[w]=he.matrix,C.castShadow){let ce=t.get(C);ce.shadowIntensity=he.intensity,ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,n.spotShadow[w]=ce,n.spotShadowMap[w]=fe,D++}w++}else if(C.isRectAreaLight){let te=e.get(C);te.color.copy(Z).multiplyScalar(ae),te.halfWidth.set(C.width*.5,0,0),te.halfHeight.set(0,C.height*.5,0),n.rectArea[L]=te,L++}else if(C.isPointLight){let te=e.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity),te.distance=C.distance,te.decay=C.decay,C.castShadow){let he=C.shadow,ce=t.get(C);ce.shadowIntensity=he.intensity,ce.shadowBias=he.bias,ce.shadowNormalBias=he.normalBias,ce.shadowRadius=he.radius,ce.shadowMapSize=he.mapSize,ce.shadowCameraNear=he.camera.near,ce.shadowCameraFar=he.camera.far,n.pointShadow[p]=ce,n.pointShadowMap[p]=fe,n.pointShadowMatrix[p]=C.shadow.matrix,T++}n.point[p]=te,p++}else if(C.isHemisphereLight){let te=e.get(C);te.skyColor.copy(C.color).multiplyScalar(ae),te.groundColor.copy(C.groundColor).multiplyScalar(ae),n.hemi[M]=te,M++}}L>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let V=n.hash;(V.sunLength!==h||V.directionalLength!==m||V.pointLength!==p||V.spotLength!==w||V.rectAreaLength!==L||V.hemiLength!==M||V.numSunShadows!==g||V.numDirectionalShadows!==_||V.numPointShadows!==T||V.numSpotShadows!==D||V.numSpotMaps!==y||V.numLightProbes!==B)&&(n.sun.length=h,n.directional.length=m,n.spot.length=w,n.rectArea.length=L,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+y-I,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=B,V.sunLength=h,V.directionalLength=m,V.pointLength=p,V.spotLength=w,V.rectAreaLength=L,V.hemiLength=M,V.numSunShadows=g,V.numDirectionalShadows=_,V.numPointShadows=T,V.numSpotShadows=D,V.numSpotMaps=y,V.numLightProbes=B,n.version=ev++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let w=0,L=c.length;w<L;w++){let M=c[w];if(M.isSunLight){let _=n.sun[f];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(M.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function qf(i){let e=new nv(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function iv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qf(i),e.set(s,[o])):r>=a.length?(o=new qf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,av=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],ov=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],$f=new ct,Ba=new k,oh=new k;function lv(i,e,t){let n=new ir,s=new be,r=new be,a=new Lt,o=new al,l=new ol,c={},u=t.maxTextureSize,f={[Vi]:en,[en]:Vi,[Bt]:Bt},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs;let p=this.type;this.render=function(T,D,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===kd&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=hs);let I=i.getRenderTarget(),B=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(ci),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let ee=p!==this.type;ee&&D.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(Z=>Z.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,Z=T.length;C<Z;C++){let ae=T[C],oe=ae.shadow;if(oe===void 0){qe("WebGLShadowMap:",ae,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;s.copy(oe.mapSize);let fe=oe.getFrameExtents();s.multiply(fe),r.copy(oe.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/fe.x),s.x=r.x*fe.x,oe.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/fe.y),s.y=r.y*fe.y,oe.mapSize.y=r.y));let te=i.state.buffers.depth.getReversed();if(oe.camera._reversedDepth=te,oe.map===null||ee===!0){if(oe.map!==null&&(oe.map.depthTexture!==null&&(oe.map.depthTexture.dispose(),oe.map.depthTexture=null),oe.map.dispose()),this.type===cr){if(ae.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}oe.map=new gn(s.x,s.y,{format:$i,type:Vn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),oe.map.texture.name=ae.name+".shadowMap",oe.map.depthTexture=new Bi(s.x,s.y,Pn),oe.map.depthTexture.name=ae.name+".shadowMapDepth",oe.map.depthTexture.format=ti,oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=Yt,oe.map.depthTexture.magFilter=Yt}else ae.isPointLight?(oe.map=new dc(s.x),oe.map.depthTexture=new Qo(s.x,Gn)):(oe.map=new gn(s.x,s.y),oe.map.depthTexture=new Bi(s.x,s.y,Gn)),oe.map.depthTexture.name=ae.name+".shadowMap",oe.map.depthTexture.format=ti,this.type===hs?(oe.map.depthTexture.compareFunction=te?cc:lc,oe.map.depthTexture.minFilter=jt,oe.map.depthTexture.magFilter=jt):(oe.map.depthTexture.compareFunction=null,oe.map.depthTexture.minFilter=Yt,oe.map.depthTexture.magFilter=Yt);oe.camera.updateProjectionMatrix()}oe.map.isWebGLCubeRenderTarget!==!0&&(oe.map.width!==s.x||oe.map.height!==s.y)&&oe.map.setSize(s.x,s.y);let he=oe.map.isWebGLCubeRenderTarget?6:oe.getViewportCount();ae.isPointLight!==!0&&oe.updateMatrices(ae,y);for(let ce=0;ce<he;ce++){let Ee=oe.getCamera(ce);if(ae.isPointLight){let Ce=oe.camera,et=oe.matrix,Ye=ae.distance||Ce.far;Ye!==Ce.far&&(Ce.far=Ye,Ce.updateProjectionMatrix()),Ba.setFromMatrixPosition(ae.matrixWorld),Ce.position.copy(Ba),oh.copy(Ce.position),oh.add(av[ce]),Ce.up.copy(ov[ce]),Ce.lookAt(oh),Ce.updateMatrixWorld(),et.makeTranslation(-Ba.x,-Ba.y,-Ba.z),$f.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),oe._frustum.setFromProjectionMatrix($f,Ce.coordinateSystem,Ce.reversedDepth)}if(oe.map.isWebGLCubeRenderTarget)i.setRenderTarget(oe.map,ce),i.clear();else{ce===0&&(i.setRenderTarget(oe.map),i.clear());let Ce=oe.getViewport(ce);a.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),Y.viewport(a)}n=oe.getFrustum(ce),M(D,y,Ee,ae,this.type)}oe.isPointLightShadow!==!0&&this.type===cr&&w(oe,y),oe.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(I,B,V)};function w(T,D){let y=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:$i,type:Vn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(D,null,y,d,v,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(D,null,y,h,v,null)}function L(T,D,y,I){let B=null,V=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(V!==void 0)B=V;else if(B=y.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let Y=B.uuid,ee=D.uuid,C=c[Y];C===void 0&&(C={},c[Y]=C);let Z=C[ee];Z===void 0&&(Z=B.clone(),C[ee]=Z,D.addEventListener("dispose",_)),B=Z}if(B.visible=D.visible,B.wireframe=D.wireframe,I===cr?B.side=D.shadowSide!==null?D.shadowSide:D.side:B.side=D.shadowSide!==null?D.shadowSide:f[D.side],B.alphaMap=D.alphaMap,B.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,B.map=D.map,B.clipShadows=D.clipShadows,B.clippingPlanes=D.clippingPlanes,B.clipIntersection=D.clipIntersection,B.displacementMap=D.displacementMap,B.displacementScale=D.displacementScale,B.displacementBias=D.displacementBias,B.wireframeLinewidth=D.wireframeLinewidth,B.linewidth=D.linewidth,y.isPointLight===!0&&B.isMeshDistanceMaterial===!0){let Y=i.properties.get(B);Y.light=y}return B}function M(T,D,y,I,B){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let ee=e.update(T),C=T.material;if(Array.isArray(C)){let Z=ee.groups;for(let ae=0,oe=Z.length;ae<oe;ae++){let fe=Z[ae],te=C[fe.materialIndex];if(te&&te.visible){let he=L(T,te,I,B);T.onBeforeShadow(i,T,D,y,ee,he,fe),i.renderBufferDirect(y,null,ee,he,T,fe),T.onAfterShadow(i,T,D,y,ee,he,fe)}}}else if(C.visible){let Z=L(T,C,I,B);T.onBeforeShadow(i,T,D,y,ee,Z,null),i.renderBufferDirect(y,null,ee,Z,T,null),T.onAfterShadow(i,T,D,y,ee,Z,null)}}let Y=T.children;for(let ee=0,C=Y.length;ee<C;ee++)M(Y[ee],D,y,I,B)}function _(T){T.target.removeEventListener("dispose",_);for(let y in c){let I=c[y],B=T.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function cv(i,e){function t(){let U=!1,ye=new Lt,b=null,N=new Lt(0,0,0,0);return{setMask:function(J){b!==J&&!U&&(i.colorMask(J,J,J,J),b=J)},setLocked:function(J){U=J},setClear:function(J,q,ge,xe,Le){Le===!0&&(J*=xe,q*=xe,ge*=xe),ye.set(J,q,ge,xe),N.equals(ye)===!1&&(i.clearColor(J,q,ge,xe),N.copy(ye))},reset:function(){U=!1,b=null,N.set(-1,0,0,0)}}}function n(){let U=!1,ye=!1,b=null,N=null,J=null;return{setReversed:function(q){if(ye!==q){let ge=e.get("EXT_clip_control");q?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),ye=q;let xe=J;J=null,this.setClear(xe)}},getReversed:function(){return ye},setTest:function(q){q?pe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(q){b!==q&&!U&&(i.depthMask(q),b=q)},setFunc:function(q){if(ye&&(q=xf[q]),N!==q){switch(q){case Bo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}N=q}},setLocked:function(q){U=q},setClear:function(q){J!==q&&(J=q,ye&&(q=1-q),i.clearDepth(q))},reset:function(){U=!1,b=null,N=null,J=null,ye=!1}}}function s(){let U=!1,ye=null,b=null,N=null,J=null,q=null,ge=null,xe=null,Le=null;return{setTest:function(Ae){U||(Ae?pe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Ae){ye!==Ae&&!U&&(i.stencilMask(Ae),ye=Ae)},setFunc:function(Ae,xt,wt){(b!==Ae||N!==xt||J!==wt)&&(i.stencilFunc(Ae,xt,wt),b=Ae,N=xt,J=wt)},setOp:function(Ae,xt,wt){(q!==Ae||ge!==xt||xe!==wt)&&(i.stencilOp(Ae,xt,wt),q=Ae,ge=xt,xe=wt)},setLocked:function(Ae){U=Ae},setClear:function(Ae){Le!==Ae&&(i.clearStencil(Ae),Le=Ae)},reset:function(){U=!1,ye=null,b=null,N=null,J=null,q=null,ge=null,xe=null,Le=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,w=null,L=null,M=null,_=null,T=null,D=null,y=new Ue(0,0,0),I=0,B=!1,V=null,Y=null,ee=null,C=null,Z=null,ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,fe=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(te)[1]),oe=fe>=1):te.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),oe=fe>=2);let he=null,ce={},Ee=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),et=new Lt().fromArray(Ee),Ye=new Lt().fromArray(Ce);function je(U,ye,b,N){let J=new Uint8Array(4),q=i.createTexture();i.bindTexture(U,q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<b;ge++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,N,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(ye+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return q}let le={};le[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(i.DEPTH_TEST),a.setFunc(Ys),ve(!1),Se(Tu),pe(i.CULL_FACE),_e(ci);function pe(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Te(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function He(U,ye){return d[U]!==ye?(i.bindFramebuffer(U,ye),d[U]=ye,U===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),U===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function we(U,ye){let b=g,N=!1;if(U){b=h.get(ye),b===void 0&&(b=[],h.set(ye,b));let J=U.textures;if(b.length!==J.length||b[0]!==i.COLOR_ATTACHMENT0){for(let q=0,ge=J.length;q<ge;q++)b[q]=i.COLOR_ATTACHMENT0+q;b.length=J.length,N=!0}}else b[0]!==i.BACK&&(b[0]=i.BACK,N=!0);N&&i.drawBuffers(b)}function ze(U){return v!==U?(i.useProgram(U),v=U,!0):!1}let tt={[ds]:i.FUNC_ADD,[Bd]:i.FUNC_SUBTRACT,[Od]:i.FUNC_REVERSE_SUBTRACT};tt[zd]=i.MIN,tt[Hd]=i.MAX;let me={[Gd]:i.ZERO,[Vd]:i.ONE,[Wd]:i.SRC_COLOR,[Ru]:i.SRC_ALPHA,[Jd]:i.SRC_ALPHA_SATURATE,[Yd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[Xd]:i.ONE_MINUS_SRC_COLOR,[Cu]:i.ONE_MINUS_SRC_ALPHA,[Zd]:i.ONE_MINUS_DST_COLOR,[$d]:i.ONE_MINUS_DST_ALPHA,[Kd]:i.CONSTANT_COLOR,[jd]:i.ONE_MINUS_CONSTANT_COLOR,[Qd]:i.CONSTANT_ALPHA,[ef]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(U,ye,b,N,J,q,ge,xe,Le,Ae){if(U===ci){m===!0&&(Te(i.BLEND),m=!1);return}if(m===!1&&(pe(i.BLEND),m=!0),U!==Fd){if(U!==p||Ae!==B){if((w!==ds||_!==ds)&&(i.blendEquation(i.FUNC_ADD),w=ds,_=ds),Ae)switch(U){case ur:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hr:i.blendFunc(i.ONE,i.ONE);break;case wu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",U);break}else switch(U){case ur:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wu:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",U);break}L=null,M=null,T=null,D=null,y.set(0,0,0),I=0,p=U,B=Ae}return}J=J||ye,q=q||b,ge=ge||N,(ye!==w||J!==_)&&(i.blendEquationSeparate(tt[ye],tt[J]),w=ye,_=J),(b!==L||N!==M||q!==T||ge!==D)&&(i.blendFuncSeparate(me[b],me[N],me[q],me[ge]),L=b,M=N,T=q,D=ge),(xe.equals(y)===!1||Le!==I)&&(i.blendColor(xe.r,xe.g,xe.b,Le),y.copy(xe),I=Le),p=U,B=!1}function Me(U,ye){U.side===Bt?Te(i.CULL_FACE):pe(i.CULL_FACE);let b=U.side===en;ye&&(b=!b),ve(b),U.blending===ur&&U.transparent===!1?_e(ci):_e(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);let N=U.stencilWrite;o.setTest(N),N&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ve(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(U){V!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),V=U)}function Se(U){U!==Nd?(pe(i.CULL_FACE),U!==Y&&(U===Tu?i.cullFace(i.BACK):U===Ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),Y=U}function Ge(U){U!==ee&&(oe&&i.lineWidth(U),ee=U)}function Ve(U,ye,b){U?(pe(i.POLYGON_OFFSET_FILL),(C!==ye||Z!==b)&&(C=ye,Z=b,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,b))):Te(i.POLYGON_OFFSET_FILL)}function ke(U){U?pe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function Xe(U){U===void 0&&(U=i.TEXTURE0+ae-1),he!==U&&(i.activeTexture(U),he=U)}function O(U,ye,b){b===void 0&&(he===null?b=i.TEXTURE0+ae-1:b=he);let N=ce[b];N===void 0&&(N={type:void 0,texture:void 0},ce[b]=N),(N.type!==U||N.texture!==ye)&&(he!==b&&(i.activeTexture(b),he=b),i.bindTexture(U,ye||le[U]),N.type=U,N.texture=ye)}function rt(){let U=ce[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function x(){try{i.texSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function E(){try{i.texSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function A(){try{i.compressedTexSubImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function P(){try{i.compressedTexSubImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function $(){try{i.texStorage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function j(){try{i.texStorage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function K(){try{i.texImage2D(...arguments)}catch(U){$e("WebGLState:",U)}}function se(){try{i.texImage3D(...arguments)}catch(U){$e("WebGLState:",U)}}function F(U){return f[U]!==void 0?f[U]:i.getParameter(U)}function G(U,ye){f[U]!==ye&&(i.pixelStorei(U,ye),f[U]=ye)}function X(U){et.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),et.copy(U))}function H(U){Ye.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Ye.copy(U))}function Q(U,ye){let b=c.get(ye);b===void 0&&(b=new WeakMap,c.set(ye,b));let N=b.get(U);N===void 0&&(N=i.getUniformBlockIndex(ye,U.name),b.set(U,N))}function re(U,ye){let N=c.get(ye).get(U);l.get(ye)!==N&&(i.uniformBlockBinding(ye,N,U.__bindingPointIndex),l.set(ye,N))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},he=null,ce={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,w=null,L=null,M=null,_=null,T=null,D=null,y=new Ue(0,0,0),I=0,B=!1,V=null,Y=null,ee=null,C=null,Z=null,et.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:pe,disable:Te,bindFramebuffer:He,drawBuffers:we,useProgram:ze,setBlending:_e,setMaterial:Me,setFlipSided:ve,setCullFace:Se,setLineWidth:Ge,setPolygonOffset:Ve,setScissorTest:ke,activeTexture:Xe,bindTexture:O,unbindTexture:rt,compressedTexImage2D:Ze,compressedTexImage3D:R,texImage2D:K,texImage3D:se,pixelStorei:G,getParameter:F,updateUBOMapping:Q,uniformBlockBinding:re,texStorage2D:$,texStorage3D:j,texSubImage2D:x,texSubImage3D:E,compressedTexSubImage2D:A,compressedTexSubImage3D:P,scissor:X,viewport:H,reset:de}}function uv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap,f=new Set,d,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return g?new OffscreenCanvas(R,x):$r("canvas")}function m(R,x,E){let A=1,P=Ze(R);if((P.width>E||P.height>E)&&(A=E/Math.max(P.width,P.height)),A<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(A*P.width),j=Math.floor(A*P.height);d===void 0&&(d=v($,j));let K=x?v($,j):d;return K.width=$,K.height=j,K.getContext("2d").drawImage(R,0,0,$,j),qe("WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+$+"x"+j+")."),K}else return"data"in R&&qe("WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),R;return R}function p(R){return R.generateMipmaps}function w(R){i.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,x,E,A,P,$=!1){if(R!==null){if(i[R]!==void 0)return i[R];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let j;A&&(j=e.get("EXT_texture_norm16"),j||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(E===i.FLOAT&&(K=i.R32F),E===i.HALF_FLOAT&&(K=i.R16F),E===i.UNSIGNED_BYTE&&(K=i.R8),E===i.UNSIGNED_SHORT&&j&&(K=j.R16_EXT),E===i.SHORT&&j&&(K=j.R16_SNORM_EXT)),x===i.RED_INTEGER&&(E===i.UNSIGNED_BYTE&&(K=i.R8UI),E===i.UNSIGNED_SHORT&&(K=i.R16UI),E===i.UNSIGNED_INT&&(K=i.R32UI),E===i.BYTE&&(K=i.R8I),E===i.SHORT&&(K=i.R16I),E===i.INT&&(K=i.R32I)),x===i.RG&&(E===i.FLOAT&&(K=i.RG32F),E===i.HALF_FLOAT&&(K=i.RG16F),E===i.UNSIGNED_BYTE&&(K=i.RG8),E===i.UNSIGNED_SHORT&&j&&(K=j.RG16_EXT),E===i.SHORT&&j&&(K=j.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(E===i.UNSIGNED_BYTE&&(K=i.RG8UI),E===i.UNSIGNED_SHORT&&(K=i.RG16UI),E===i.UNSIGNED_INT&&(K=i.RG32UI),E===i.BYTE&&(K=i.RG8I),E===i.SHORT&&(K=i.RG16I),E===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(E===i.UNSIGNED_BYTE&&(K=i.RGB8UI),E===i.UNSIGNED_SHORT&&(K=i.RGB16UI),E===i.UNSIGNED_INT&&(K=i.RGB32UI),E===i.BYTE&&(K=i.RGB8I),E===i.SHORT&&(K=i.RGB16I),E===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(E===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),E===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),E===i.UNSIGNED_INT&&(K=i.RGBA32UI),E===i.BYTE&&(K=i.RGBA8I),E===i.SHORT&&(K=i.RGBA16I),E===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(E===i.UNSIGNED_SHORT&&j&&(K=j.RGB16_EXT),E===i.SHORT&&j&&(K=j.RGB16_SNORM_EXT),E===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),E===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let se=$?qr:lt.getTransfer(P);E===i.FLOAT&&(K=i.RGBA32F),E===i.HALF_FLOAT&&(K=i.RGBA16F),E===i.UNSIGNED_BYTE&&(K=se===mt?i.SRGB8_ALPHA8:i.RGBA8),E===i.UNSIGNED_SHORT&&j&&(K=j.RGBA16_EXT),E===i.SHORT&&j&&(K=j.RGBA16_SNORM_EXT),E===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),E===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(R,x){let E;return R?x===null||x===Gn||x===fr?E=i.DEPTH24_STENCIL8:x===Pn?E=i.DEPTH32F_STENCIL8:x===dr&&(E=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Gn||x===fr?E=i.DEPTH_COMPONENT24:x===Pn?E=i.DEPTH_COMPONENT32F:x===dr&&(E=i.DEPTH_COMPONENT16),E}function T(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function D(R){let x=R.target;x.removeEventListener("dispose",D),I(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function y(R){let x=R.target;x.removeEventListener("dispose",y),V(x)}function I(R){let x=n.get(R);if(x.__webglInit===void 0)return;let E=R.source,A=h.get(E);if(A){let P=A[x.__cacheKey];P.usedTimes--,P.usedTimes===0&&B(R),Object.keys(A).length===0&&h.delete(E)}n.remove(R)}function B(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let E=R.source,A=h.get(E);delete A[x.__cacheKey],a.memory.textures--}function V(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(x.__webglFramebuffer[A]))for(let P=0;P<x.__webglFramebuffer[A].length;P++)i.deleteFramebuffer(x.__webglFramebuffer[A][P]);else i.deleteFramebuffer(x.__webglFramebuffer[A]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[A])}else{if(Array.isArray(x.__webglFramebuffer))for(let A=0;A<x.__webglFramebuffer.length;A++)i.deleteFramebuffer(x.__webglFramebuffer[A]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let A=0;A<x.__webglColorRenderbuffer.length;A++)x.__webglColorRenderbuffer[A]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[A]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let E=R.textures;for(let A=0,P=E.length;A<P;A++){let $=n.get(E[A]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(E[A])}n.remove(R)}let Y=0;function ee(){Y=0}function C(){return Y}function Z(R){Y=R}function ae(){let R=Y;return R>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function oe(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function fe(R,x){let E=n.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&E.__version!==R.version){let A=R.image;if(A===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Te(E,R,x);return}}else R.isExternalTexture&&(E.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,E.__webglTexture,i.TEXTURE0+x)}function te(R,x){let E=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&E.__version!==R.version){Te(E,R,x);return}else R.isExternalTexture&&(E.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,E.__webglTexture,i.TEXTURE0+x)}function he(R,x){let E=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&E.__version!==R.version){Te(E,R,x);return}t.bindTexture(i.TEXTURE_3D,E.__webglTexture,i.TEXTURE0+x)}function ce(R,x){let E=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&E.__version!==R.version){He(E,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+x)}let Ee={[ki]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},Ce={[Yt]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[Ca]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[El]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},et={[lf]:i.NEVER,[ff]:i.ALWAYS,[cf]:i.LESS,[lc]:i.LEQUAL,[uf]:i.EQUAL,[cc]:i.GEQUAL,[hf]:i.GREATER,[df]:i.NOTEQUAL};function Ye(R,x){if(x.type===Pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===El||x.magFilter===Ca||x.magFilter===Xi||x.minFilter===jt||x.minFilter===El||x.minFilter===Ca||x.minFilter===Xi)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Ee[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Ee[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Ee[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ce[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ce[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Yt||x.minFilter!==Ca&&x.minFilter!==Xi||x.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let E=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,E.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function je(R,x){let E=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",D));let A=x.source,P=h.get(A);P===void 0&&(P={},h.set(A,P));let $=oe(x);if($!==R.__cacheKey){P[$]===void 0&&(P[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,E=!0),P[$].usedTimes++;let j=P[R.__cacheKey];j!==void 0&&(P[R.__cacheKey].usedTimes--,j.usedTimes===0&&B(x)),R.__cacheKey=$,R.__webglTexture=P[$].texture}return E}function le(R,x,E){return Math.floor(Math.floor(R/E)/x)}function pe(R,x,E,A){let $=R.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,E,A,x.data);else{$.sort((G,X)=>G.start-X.start);let j=0;for(let G=1;G<$.length;G++){let X=$[j],H=$[G],Q=X.start+X.count,re=le(H.start,x.width,4),de=le(X.start,x.width,4);H.start<=Q+1&&re===de&&le(H.start+H.count-1,x.width,4)===re?X.count=Math.max(X.count,H.start+H.count-X.start):(++j,$[j]=H)}$.length=j+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),F=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let G=0,X=$.length;G<X;G++){let H=$[G],Q=Math.floor(H.start/4),re=Math.ceil(H.count/4),de=Q%x.width,U=Math.floor(Q/x.width),ye=re,b=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,de),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,de,U,ye,b,E,A,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,F)}}function Te(R,x,E){let A=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(A=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(A=i.TEXTURE_3D);let P=je(R,x),$=x.source;t.bindTexture(A,R.__webglTexture,i.TEXTURE0+E);let j=n.get($);if($.version!==j.__version||P===!0){if(t.activeTexture(i.TEXTURE0+E),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let b=lt.getPrimaries(lt.workingColorSpace),N=x.colorSpace===Wn?null:lt.getPrimaries(x.colorSpace),J=x.colorSpace===Wn||b===N?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let se=m(x.image,!1,s.maxTextureSize);se=rt(x,se);let F=r.convert(x.format,x.colorSpace),G=r.convert(x.type),X=M(x.internalFormat,F,G,x.normalized,x.colorSpace,x.isVideoTexture);Ye(A,x);let H,Q=x.mipmaps,re=x.isVideoTexture!==!0,de=j.__version===void 0||P===!0,U=$.dataReady,ye=T(x,se);if(x.isDepthTexture)X=_(x.format===qi,x.type),de&&(re?t.texStorage2D(i.TEXTURE_2D,1,X,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,X,se.width,se.height,0,F,G,null));else if(x.isDataTexture)if(Q.length>0){re&&de&&t.texStorage2D(i.TEXTURE_2D,ye,X,Q[0].width,Q[0].height);for(let b=0,N=Q.length;b<N;b++)H=Q[b],re?U&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,H.width,H.height,F,G,H.data):t.texImage2D(i.TEXTURE_2D,b,X,H.width,H.height,0,F,G,H.data);x.generateMipmaps=!1}else re?(de&&t.texStorage2D(i.TEXTURE_2D,ye,X,se.width,se.height),U&&pe(x,se,F,G)):t.texImage2D(i.TEXTURE_2D,0,X,se.width,se.height,0,F,G,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,X,Q[0].width,Q[0].height,se.depth);for(let b=0,N=Q.length;b<N;b++)if(H=Q[b],x.format!==Ln)if(F!==null)if(re){if(U)if(x.layerUpdates.size>0){let J=Ju(H.width,H.height,x.format,x.type);for(let q of x.layerUpdates){let ge=H.data.subarray(q*J/H.data.BYTES_PER_ELEMENT,(q+1)*J/H.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,q,H.width,H.height,1,F,ge)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,H.width,H.height,se.depth,F,H.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,b,X,H.width,H.height,se.depth,0,H.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,b,0,0,0,H.width,H.height,se.depth,F,G,H.data):t.texImage3D(i.TEXTURE_2D_ARRAY,b,X,H.width,H.height,se.depth,0,F,G,H.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&de&&t.texStorage2D(i.TEXTURE_2D,ye,X,Q[0].width,Q[0].height);for(let b=0,N=Q.length;b<N;b++)H=Q[b],x.format!==Ln?F!==null?re?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,b,0,0,H.width,H.height,F,H.data):t.compressedTexImage2D(i.TEXTURE_2D,b,X,H.width,H.height,0,H.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?U&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,H.width,H.height,F,G,H.data):t.texImage2D(i.TEXTURE_2D,b,X,H.width,H.height,0,F,G,H.data)}else if(x.isDataArrayTexture)if(re){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,X,se.width,se.height,se.depth),U)if(x.layerUpdates.size>0){let b=Ju(se.width,se.height,x.format,x.type);for(let N of x.layerUpdates){let J=se.data.subarray(N*b/se.data.BYTES_PER_ELEMENT,(N+1)*b/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,N,se.width,se.height,1,F,G,J)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,F,G,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,X,se.width,se.height,se.depth,0,F,G,se.data);else if(x.isData3DTexture)re?(de&&t.texStorage3D(i.TEXTURE_3D,ye,X,se.width,se.height,se.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,F,G,se.data)):t.texImage3D(i.TEXTURE_3D,0,X,se.width,se.height,se.depth,0,F,G,se.data);else if(x.isFramebufferTexture){if(de)if(re)t.texStorage2D(i.TEXTURE_2D,ye,X,se.width,se.height);else{let b=se.width,N=se.height;for(let J=0;J<ye;J++)t.texImage2D(i.TEXTURE_2D,J,X,b,N,0,F,G,null),b>>=1,N>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let b=i.canvas;if(b.hasAttribute("layoutsubtree")||b.setAttribute("layoutsubtree","true"),se.parentNode!==b){b.appendChild(se),f.add(x),b.onpaint=N=>{let J=N.changedElements;for(let q of f)J.includes(q.image)&&(q.needsUpdate=!0)},b.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let J=i.RGBA,q=i.RGBA,ge=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,J,q,ge,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Q.length>0){if(re&&de){let b=Ze(Q[0]);t.texStorage2D(i.TEXTURE_2D,ye,X,b.width,b.height)}for(let b=0,N=Q.length;b<N;b++)H=Q[b],re?U&&t.texSubImage2D(i.TEXTURE_2D,b,0,0,F,G,H):t.texImage2D(i.TEXTURE_2D,b,X,F,G,H);x.generateMipmaps=!1}else if(re){if(de){let b=Ze(se);t.texStorage2D(i.TEXTURE_2D,ye,X,b.width,b.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,F,G,se)}else t.texImage2D(i.TEXTURE_2D,0,X,F,G,se);p(x)&&w(A),j.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function He(R,x,E){if(x.image.length!==6)return;let A=je(R,x),P=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+E);let $=n.get(P);if(P.version!==$.__version||A===!0){t.activeTexture(i.TEXTURE0+E);let j=lt.getPrimaries(lt.workingColorSpace),K=x.colorSpace===Wn?null:lt.getPrimaries(x.colorSpace),se=x.colorSpace===Wn||j===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let F=x.isCompressedTexture||x.image[0].isCompressedTexture,G=x.image[0]&&x.image[0].isDataTexture,X=[];for(let q=0;q<6;q++)!F&&!G?X[q]=m(x.image[q],!0,s.maxCubemapSize):X[q]=G?x.image[q].image:x.image[q],X[q]=rt(x,X[q]);let H=X[0],Q=r.convert(x.format,x.colorSpace),re=r.convert(x.type),de=M(x.internalFormat,Q,re,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,ye=$.__version===void 0||A===!0,b=P.dataReady,N=T(x,H);Ye(i.TEXTURE_CUBE_MAP,x);let J;if(F){U&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,N,de,H.width,H.height);for(let q=0;q<6;q++){J=X[q].mipmaps;for(let ge=0;ge<J.length;ge++){let xe=J[ge];x.format!==Ln?Q!==null?U?b&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,xe.width,xe.height,Q,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,de,xe.width,xe.height,0,xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,0,0,xe.width,xe.height,Q,re,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge,de,xe.width,xe.height,0,Q,re,xe.data)}}}else{if(J=x.mipmaps,U&&ye){J.length>0&&N++;let q=Ze(X[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,N,de,q.width,q.height)}for(let q=0;q<6;q++)if(G){U?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,X[q].width,X[q].height,Q,re,X[q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,X[q].width,X[q].height,0,Q,re,X[q].data);for(let ge=0;ge<J.length;ge++){let Le=J[ge].image[q].image;U?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,Le.width,Le.height,Q,re,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,de,Le.width,Le.height,0,Q,re,Le.data)}}else{U?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Q,re,X[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,de,Q,re,X[q]);for(let ge=0;ge<J.length;ge++){let xe=J[ge];U?b&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,0,0,Q,re,xe.image[q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,ge+1,de,Q,re,xe.image[q])}}}p(x)&&w(i.TEXTURE_CUBE_MAP),$.__version=P.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function we(R,x,E,A,P,$){let j=r.convert(E.format,E.colorSpace),K=r.convert(E.type),se=M(E.internalFormat,j,K,E.normalized,E.colorSpace),F=n.get(x),G=n.get(E);if(G.__renderTarget=x,!F.__hasExternalTextures){let X=Math.max(1,x.width>>$),H=Math.max(1,x.height>>$);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?t.texImage3D(P,$,se,X,H,x.depth,0,j,K,null):t.texImage2D(P,$,se,X,H,0,j,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,A,P,G.__webglTexture,0,ke(x)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,A,P,G.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,x,E){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let A=x.depthTexture,P=A&&A.isDepthTexture?A.type:null,$=_(x.stencilBuffer,P),j=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),$,x.width,x.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,R)}else{let A=x.textures;for(let P=0;P<A.length;P++){let $=A[P],j=r.convert($.format,$.colorSpace),K=r.convert($.type),se=M($.internalFormat,j,K,$.normalized,$.colorSpace);Xe(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke(x),se,x.width,x.height):E?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke(x),se,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,se,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tt(R,x,E){let A=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let P=n.get(x.depthTexture);if(P.__renderTarget=x,(!P.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),A){if(P.__webglInit===void 0&&(P.__webglInit=!0,x.depthTexture.addEventListener("dispose",D)),P.__webglTexture===void 0){P.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x.depthTexture);let F=r.convert(x.depthTexture.format),G=r.convert(x.depthTexture.type),X;x.depthTexture.format===ti?X=i.DEPTH_COMPONENT24:x.depthTexture.format===qi&&(X=i.DEPTH24_STENCIL8);for(let H=0;H<6;H++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,X,x.width,x.height,0,F,G,null)}}else fe(x.depthTexture,0);let $=P.__webglTexture,j=ke(x),K=A?i.TEXTURE_CUBE_MAP_POSITIVE_X+E:i.TEXTURE_2D,se=x.depthTexture.format===qi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ti)Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,K,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,se,K,$,0);else if(x.depthTexture.format===qi)Xe(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,K,$,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,se,K,$,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function me(R){let x=n.get(R),E=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let A=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),A){let P=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,A.removeEventListener("dispose",P)};A.addEventListener("dispose",P),x.__depthDisposeCallback=P}x.__boundDepthTexture=A}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(E)for(let A=0;A<6;A++)tt(x.__webglFramebuffer[A],R,A);else{let A=R.texture.mipmaps;A&&A.length>0?tt(x.__webglFramebuffer[0],R,0):tt(x.__webglFramebuffer,R,0)}else if(E){x.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[A]),x.__webglDepthbuffer[A]===void 0)x.__webglDepthbuffer[A]=i.createRenderbuffer(),ze(x.__webglDepthbuffer[A],R,!1);else{let P=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[A];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,$)}}else{let A=R.texture.mipmaps;if(A&&A.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ze(x.__webglDepthbuffer,R,!1);else{let P=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(R,x,E){let A=n.get(R);x!==void 0&&we(A.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),E!==void 0&&me(R)}function Me(R){let x=R.texture,E=n.get(R),A=n.get(x);R.addEventListener("dispose",y);let P=R.textures,$=R.isWebGLCubeRenderTarget===!0,j=P.length>1;if(j||(A.__webglTexture===void 0&&(A.__webglTexture=i.createTexture()),A.__version=x.version,a.memory.textures++),$){E.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer[K]=[];for(let se=0;se<x.mipmaps.length;se++)E.__webglFramebuffer[K][se]=i.createFramebuffer()}else E.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){E.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)E.__webglFramebuffer[K]=i.createFramebuffer()}else E.__webglFramebuffer=i.createFramebuffer();if(j)for(let K=0,se=P.length;K<se;K++){let F=n.get(P[K]);F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Xe(R)===!1){E.__webglMultisampledFramebuffer=i.createFramebuffer(),E.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,E.__webglMultisampledFramebuffer);for(let K=0;K<P.length;K++){let se=P[K];E.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,E.__webglColorRenderbuffer[K]);let F=r.convert(se.format,se.colorSpace),G=r.convert(se.type),X=M(se.internalFormat,F,G,se.normalized,se.colorSpace,R.isXRRenderTarget===!0),H=ke(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,H,X,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,E.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(E.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(E.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)we(E.__webglFramebuffer[K][se],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else we(E.__webglFramebuffer[K],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let K=0,se=P.length;K<se;K++){let F=P[K],G=n.get(F),X=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,G.__webglTexture),Ye(X,F),we(E.__webglFramebuffer,R,F,i.COLOR_ATTACHMENT0+K,X,0),p(F)&&w(X)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,A.__webglTexture),Ye(K,x),x.mipmaps&&x.mipmaps.length>0)for(let se=0;se<x.mipmaps.length;se++)we(E.__webglFramebuffer[se],R,x,i.COLOR_ATTACHMENT0,K,se);else we(E.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&w(K),t.unbindTexture()}R.depthBuffer&&me(R)}function ve(R){let x=R.textures;for(let E=0,A=x.length;E<A;E++){let P=x[E];if(p(P)){let $=L(R),j=n.get(P).__webglTexture;t.bindTexture($,j),w($),t.unbindTexture()}}}let Se=[],Ge=[];function Ve(R){if(R.samples>0){if(Xe(R)===!1){let x=R.textures,E=R.width,A=R.height,P=i.COLOR_BUFFER_BIT,$=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(R),K=x.length>1;if(K)for(let F=0;F<x.length;F++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);let se=R.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let F=0;F<x.length;F++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[F]);let G=n.get(x[F]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,G,0)}i.blitFramebuffer(0,0,E,A,0,0,E,A,P,i.NEAREST),l===!0&&(Se.length=0,Ge.length=0,Se.push(i.COLOR_ATTACHMENT0+F),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Se.push($),Ge.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let F=0;F<x.length;F++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,j.__webglColorRenderbuffer[F]);let G=n.get(x[F]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.TEXTURE_2D,G,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ke(R){return Math.min(s.maxSamples,R.samples)}function Xe(R){let x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(R){let x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function rt(R,x){let E=R.colorSpace,A=R.format,P=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||E!==Xr&&E!==Wn&&(lt.getTransfer(E)===mt?(A!==Ln||P!==yn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",E)),x}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=ee,this.getTextureUnits=C,this.setTextureUnits=Z,this.setTexture2D=fe,this.setTexture2DArray=te,this.setTexture3D=he,this.setTextureCube=ce,this.rebindTextures=_e,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hv(i,e){function t(n,s=Wn){let r,a=lt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ou)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fu)return i.BYTE;if(n===Bu)return i.SHORT;if(n===dr)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Gn)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===Vn)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===Ln)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===qi)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===La||n===Da)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Fl||n===Bl||n===Ol||n===zl||n===Na||n===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kl||n===Fl)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ol)return r.COMPRESSED_R11_EAC;if(n===zl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Na)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===$l||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ql)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Kl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ac||n===Ua||n===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ua)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fv=`
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

}`,mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:dv,fragmentShader:fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gh=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null,v=typeof XRWebGLBinding<"u",m=new mh,p={},w=t.getContextAttributes(),L=null,M=null,_=[],T=[],D=new be,y=null,I=null,B=new Pt;B.viewport=new Lt;let V=new Pt;V.viewport=new Lt;let Y=[B,V],ee=new _l,C=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let pe=_[le];return pe===void 0&&(pe=new Qs,_[le]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(le){let pe=_[le];return pe===void 0&&(pe=new Qs,_[le]=pe),pe.getGripSpace()},this.getHand=function(le){let pe=_[le];return pe===void 0&&(pe=new Qs,_[le]=pe),pe.getHandSpace()};function ae(le){let pe=T.indexOf(le.inputSource);if(pe===-1)return;let Te=_[pe];Te!==void 0&&(Te.update(le.inputSource,le.frame,c||a),Te.dispatchEvent({type:le.type,data:le.inputSource}))}function oe(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",oe),s.removeEventListener("inputsourceschange",fe);for(let le=0;le<_.length;le++){let pe=T[le];pe!==null&&(T[le]=null,_[le].disconnect(pe))}C=null,Z=null,m.reset();for(let le in p)delete p[le];if(e.setRenderTarget(L),h=null,d=null,f=null,s=null,M=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(D.width,D.height,!1),I!==null){let le=I.camera;le.fov=I.fov,le.zoom=I.zoom,le.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){o=le,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",oe),s.addEventListener("inputsourceschange",fe),w.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,He=null,we=null;w.depth&&(we=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=w.stencil?qi:ti,He=w.stencil?fr:Gn);let ze={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gn(d.textureWidth,d.textureHeight,{format:Ln,type:yn,depthTexture:new Bi(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new gn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function fe(le){for(let pe=0;pe<le.removed.length;pe++){let Te=le.removed[pe],He=T.indexOf(Te);He>=0&&(T[He]=null,_[He].disconnect(Te))}for(let pe=0;pe<le.added.length;pe++){let Te=le.added[pe],He=T.indexOf(Te);if(He===-1){for(let ze=0;ze<_.length;ze++)if(ze>=T.length){T.push(Te),He=ze;break}else if(T[ze]===null){T[ze]=Te,He=ze;break}if(He===-1)break}let we=_[He];we&&we.connect(Te)}}let te=new k,he=new k;function ce(le,pe,Te){te.setFromMatrixPosition(pe.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);let He=te.distanceTo(he),we=pe.projectionMatrix.elements,ze=Te.projectionMatrix.elements,tt=we[14]/(we[10]-1),me=we[14]/(we[10]+1),_e=(we[9]+1)/we[5],Me=(we[9]-1)/we[5],ve=(we[8]-1)/we[0],Se=(ze[8]+1)/ze[0],Ge=tt*ve,Ve=tt*Se,ke=He/(-ve+Se),Xe=ke*-ve;if(pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Xe),le.translateZ(ke),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),we[10]===-1)le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{let O=tt+ke,rt=me+ke,Ze=Ge-Xe,R=Ve+(He-Xe),x=_e*me/rt*O,E=Me*me/rt*O;le.projectionMatrix.makePerspective(Ze,R,x,E,O,rt),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ee(le,pe){pe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(pe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let pe=le.near,Te=le.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),ee.near=V.near=B.near=pe,ee.far=V.far=B.far=Te,(C!==ee.near||Z!==ee.far)&&(s.updateRenderState({depthNear:ee.near,depthFar:ee.far}),C=ee.near,Z=ee.far),ee.layers.mask=le.layers.mask|6,B.layers.mask=ee.layers.mask&-5,V.layers.mask=ee.layers.mask&-3;let He=le.parent,we=ee.cameras;Ee(ee,He);for(let ze=0;ze<we.length;ze++)Ee(we[ze],He);we.length===2?ce(ee,B,V):ee.projectionMatrix.copy(B.projectionMatrix),I===null&&le.isPerspectiveCamera&&(I={camera:le,fov:le.fov,zoom:le.zoom}),Ce(le,ee,He)};function Ce(le,pe,Te){Te===null?le.matrix.copy(pe.matrixWorld):(le.matrix.copy(Te.matrixWorld),le.matrix.invert(),le.matrix.multiply(pe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=as*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(le){l=le,d!==null&&(d.fixedFoveation=le),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=le)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(ee)},this.getCameraTexture=function(le){return p[le]};let et=null;function Ye(le,pe){if(u=pe.getViewerPose(c||a),g=pe,u!==null){let Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let He=!1;Te.length!==ee.cameras.length&&(ee.cameras.length=0,He=!0);for(let me=0;me<Te.length;me++){let _e=Te[me],Me=null;if(h!==null)Me=h.getViewport(_e);else{let Se=f.getViewSubImage(d,_e);Me=Se.viewport,me===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let ve=Y[me];ve===void 0&&(ve=new Pt,ve.layers.enable(me),ve.viewport=new Lt,Y[me]=ve),ve.matrix.fromArray(_e.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(_e.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Me.x,Me.y,Me.width,Me.height),me===0&&(ee.matrix.copy(ve.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),He===!0&&ee.cameras.push(ve)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let me=f.getDepthInformation(Te[0]);me&&me.isValid&&me.texture&&m.init(me,s.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let me=0;me<Te.length;me++){let _e=Te[me].camera;if(_e){let Me=p[_e];Me||(Me=new oa,p[_e]=Me);let ve=f.getCameraImage(_e);Me.sourceTexture=ve}}}}for(let Te=0;Te<_.length;Te++){let He=T[Te],we=_[Te];He!==null&&we!==void 0&&we.update(He,pe,c||a)}et&&et(le,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}let je=new Yf;je.setAnimationLoop(Ye),this.setAnimationLoop=function(le){et=le},this.dispose=function(){}}},pv=new ct,ep=new Ke;ep.set(-1,0,0,0,1,0,0,0,1);function mv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,L,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,L):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),L=w.envMap,M=w.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ep),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,L){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=L*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let T=_.program;n.uniformBlockBinding(M,T)}function c(M,_){let T=s[M.id];T===void 0&&(m(M),T=u(M),s[M.id]=T,M.addEventListener("dispose",w));let D=_.program;n.updateUBOMapping(M,D);let y=e.render.frame;r[M.id]!==y&&(d(M),r[M.id]=y)}function u(M){let _=f();M.__bindingPointIndex=_;let T=i.createBuffer(),D=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,D,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],T=M.uniforms,D=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,I=T.length;y<I;y++){let B=T[y];if(Array.isArray(B))for(let V=0,Y=B.length;V<Y;V++)h(B[V],y,V,D);else h(B,y,0,D)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,T,D){if(v(M,_,T,D)===!0){let y=M.__offset,I=M.value;if(Array.isArray(I)){let B=0;for(let V=0;V<I.length;V++){let Y=I[V],ee=p(Y);g(Y,M.__data,B),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(I,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,_,T){typeof M=="number"||typeof M=="boolean"?_[0]=M:M.isMatrix3?(_[0]=M.elements[0],_[1]=M.elements[1],_[2]=M.elements[2],_[3]=0,_[4]=M.elements[3],_[5]=M.elements[4],_[6]=M.elements[5],_[7]=0,_[8]=M.elements[6],_[9]=M.elements[7],_[10]=M.elements[8],_[11]=0):ArrayBuffer.isView(M)?_.set(new M.constructor(M.buffer,M.byteOffset,_.length)):M.toArray(_,T)}function v(M,_,T,D){let y=M.value,I=_+"_"+T;if(D[I]===void 0)return typeof y=="number"||typeof y=="boolean"?D[I]=y:ArrayBuffer.isView(y)?D[I]=y.slice():D[I]=y.clone(),!0;{let B=D[I];if(typeof y=="number"||typeof y=="boolean"){if(B!==y)return D[I]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(B.equals(y)===!1)return B.copy(y),!0}}return!1}function m(M){let _=M.uniforms,T=0,D=16;for(let I=0,B=_.length;I<B;I++){let V=Array.isArray(_[I])?_[I]:[_[I]];for(let Y=0,ee=V.length;Y<ee;Y++){let C=V[Y],Z=Array.isArray(C.value)?C.value:[C.value];for(let ae=0,oe=Z.length;ae<oe;ae++){let fe=Z[ae],te=p(fe),he=T%D,ce=he%te.boundary,Ee=he+ce;T+=ce,Ee!==0&&D-Ee<te.storage&&(T+=D-Ee),C.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=T,T+=te.storage}}}let y=T%D;return y>0&&(T+=D-y),M.__size=T,M.__cache={},this}function p(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",M),_}function w(M){let _=M.target;_.removeEventListener("dispose",w);let T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function L(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:L}}var xv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function yv(){return ui===null&&(ui=new ta(xv,16,16,$i,Vn),ui.name="DFG_LUT",ui.minFilter=jt,ui.magFilter=jt,ui.wrapS=jn,ui.wrapT=jn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var fc=class{constructor(e={}){let{canvas:t=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=yn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=h,m=new Set([Pl,Il,Cl]),p=new Set([yn,Gn,dr,fr,wl,Al]),w=new Uint32Array(4),L=new Int32Array(4),M=new k,_=null,T=null,D=[],y=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let B=this,V=!1,Y=null,ee=null,C=null,Z=null;this._outputColorSpace=an;let ae=0,oe=0,fe=null,te=-1,he=null,ce=new Lt,Ee=new Lt,Ce=null,et=new Ue(0),Ye=0,je=t.width,le=t.height,pe=1,Te=null,He=null,we=new Lt(0,0,je,le),ze=new Lt(0,0,je,le),tt=!1,me=new ir,_e=!1,Me=!1,ve=new ct,Se=new k,Ge=new Lt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Xe(){return fe===null?pe:1}let O=n;function rt(S,W){return t.getContext(S,W)}let Ze,R,x,E,A,P,$,j,K,se,F,G,X,H,Q,re,de,U,ye,b,N,J,q;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",xt,!1),O===null){let W="webgl2";if(O=rt(W,S),O===null)throw rt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ge()}catch(S){throw t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),$e("WebGLRenderer: "+S.message),S}function ge(){Ze=new Ty(O),Ze.init(),N=new hv(O,Ze),R=new my(O,Ze,e,N),x=new cv(O,Ze),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),ee=O.createFramebuffer(),C=O.createFramebuffer(),Z=O.createFramebuffer(),E=new Ry(O),A=new Z_,P=new uv(O,Ze,x,A,R,N,E),$=new Ey(B),j=new I0(O),J=new fy(O,j),K=new wy(O,j,E,J),se=new Iy(O,K,j,J,E),U=new Cy(O,R,P),Q=new gy(A),F=new Y_(B,$,Ze,R,J,Q),G=new mv(B,A),X=new K_,H=new iv(Ze),de=new dy(B,$,x,se,g,l),re=new lv(B,se,R),q=new gv(O,E,R,x),ye=new py(O,Ze,E),b=new Ay(O,Ze,E),E.programs=F.programs,B.capabilities=R,B.extensions=Ze,B.properties=A,B.renderLists=X,B.shadowMap=re,B.state=x,B.info=E}v!==yn&&(I=new Ly(v,t.width,t.height,o,s,r));let xe=new gh(B,O);this.xr=xe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(S){S!==void 0&&(pe=S,this.setSize(je,le,!1))},this.getSize=function(S){return S.set(je,le)},this.setSize=function(S,W,ue=!0){if(xe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}je=S,le=W,t.width=Math.floor(S*pe),t.height=Math.floor(W*pe),ue===!0&&(t.style.width=S+"px",t.style.height=W+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,S,W)},this.getDrawingBufferSize=function(S){return S.set(je*pe,le*pe).floor()},this.setDrawingBufferSize=function(S,W,ue){je=S,le=W,pe=ue,t.width=Math.floor(S*ue),t.height=Math.floor(W*ue),this.setViewport(0,0,S,W)},this.setEffects=function(S){if(v===yn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let W=0;W<S.length;W++)if(S[W].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ce)},this.getViewport=function(S){return S.copy(we)},this.setViewport=function(S,W,ue,ne){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,W,ue,ne),x.viewport(ce.copy(we).multiplyScalar(pe).round())},this.getScissor=function(S){return S.copy(ze)},this.setScissor=function(S,W,ue,ne){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,W,ue,ne),x.scissor(Ee.copy(ze).multiplyScalar(pe).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){x.setScissorTest(tt=S)},this.setOpaqueSort=function(S){Te=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(S=!0,W=!0,ue=!0){let ne=0;if(S){let ie=!1;if(fe!==null){let Pe=fe.texture.format;ie=m.has(Pe)}if(ie){let Pe=fe.texture.type,Ne=p.has(Pe),Ie=de.getClearColor(),Fe=de.getClearAlpha(),We=Ie.r,nt=Ie.g,at=Ie.b;Ne?(w[0]=We,w[1]=nt,w[2]=at,w[3]=Fe,O.clearBufferuiv(O.COLOR,0,w)):(L[0]=We,L[1]=nt,L[2]=at,L[3]=Fe,O.clearBufferiv(O.COLOR,0,L))}else ne|=O.COLOR_BUFFER_BIT}W&&(ne|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),Y=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),de.dispose(),X.dispose(),H.dispose(),A.dispose(),$.dispose(),se.dispose(),J.dispose(),q.dispose(),F.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",io),xe.removeEventListener("sessionend",Ai),Mn.stop()};function Le(S){S.preventDefault(),Yr("WebGLRenderer: Context Lost."),V=!0}function Ae(){Yr("WebGLRenderer: Context Restored."),V=!1;let S=E.autoReset,W=re.enabled,ue=re.autoUpdate,ne=re.needsUpdate,ie=re.type;ge(),E.autoReset=S,re.enabled=W,re.autoUpdate=ue,re.needsUpdate=ne,re.type=ie}function xt(S){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function wt(S){let W=S.target;W.removeEventListener("dispose",wt),es(W)}function es(S){Fc(S),A.remove(S)}function Fc(S){let W=A.get(S).programs;W!==void 0&&(W.forEach(function(ue){F.releaseProgram(ue)}),S.isShaderMaterial&&F.releaseShaderCache(S))}this.renderBufferDirect=function(S,W,ue,ne,ie,Pe){W===null&&(W=Ve);let Ne=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Ie=Qp(S,W,ue,ne,ie);x.setMaterial(ne,Ne);let Fe=ue.index,We=1;if(ne.wireframe===!0){if(Fe=K.getWireframeAttribute(ue),Fe===void 0)return;We=2}let nt=ue.drawRange,at=ue.attributes.position,Be=nt.start*We,pt=(nt.start+nt.count)*We;Pe!==null&&(Be=Math.max(Be,Pe.start*We),pt=Math.min(pt,(Pe.start+Pe.count)*We)),Fe!==null?(Be=Math.max(Be,0),pt=Math.min(pt,Fe.count)):at!=null&&(Be=Math.max(Be,0),pt=Math.min(pt,at.count));let Ot=pt-Be;if(Ot<0||Ot===1/0)return;J.setup(ie,ne,Ie,ue,Fe);let Rt,Mt=ye;if(Fe!==null&&(Rt=j.get(Fe),Mt=b,Mt.setIndex(Rt)),ie.isMesh)ne.wireframe===!0?(x.setLineWidth(ne.wireframeLinewidth*Xe()),Mt.setMode(O.LINES)):Mt.setMode(O.TRIANGLES);else if(ie.isLine){let nn=ne.linewidth;nn===void 0&&(nn=1),x.setLineWidth(nn*Xe()),ie.isLineSegments?Mt.setMode(O.LINES):ie.isLineLoop?Mt.setMode(O.LINE_LOOP):Mt.setMode(O.LINE_STRIP)}else ie.isPoints?Mt.setMode(O.POINTS):ie.isSprite&&Mt.setMode(O.TRIANGLES);if(ie.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{let nn=ie._multiDrawStarts,De=ie._multiDrawCounts,un=ie._multiDrawCount,ht=Fe?j.get(Fe).bytesPerElement:1,Rn=A.get(ne).currentProgram.getUniforms();for(let Jn=0;Jn<un;Jn++)Rn.setValue(O,"_gl_DrawID",Jn),Mt.render(nn[Jn]/ht,De[Jn])}else if(ie.isInstancedMesh)Mt.renderInstances(Be,Ot,ie.count);else if(ue.isInstancedBufferGeometry){let nn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,De=Math.min(ue.instanceCount,nn);Mt.renderInstances(Be,Ot,De)}else Mt.render(Be,Ot)};function An(S,W,ue,ne){Y!==null&&S.isNodeMaterial&&Y.setObject(ne,S),_e===!0&&Q.setState(S,ue,!1),S.transparent===!0&&S.side===Bt&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,ro(S,W,ne),S.side=Vi,S.needsUpdate=!0,ro(S,W,ne),S.side=Bt):ro(S,W,ne)}this.compile=function(S,W,ue=null){ue===null&&(ue=S),Y!==null&&Y.renderStart(S,W,ue),T=H.get(ue),T.init(W),y.push(T),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),S!==ue&&S.traverseVisible(function(ie){ie.isLight&&ie.layers.test(W.layers)&&(T.pushLight(ie),ie.castShadow&&T.pushShadow(ie))}),T.setupLights(),Y!==null&&Y.updateLights(T.state.lightsArray),Me=this.localClippingEnabled,_e=Q.init(this.clippingPlanes,Me),_e===!0&&Q.setGlobalState(this.clippingPlanes,W),Y!==null&&re.render(T.state.shadowsArray,ue,W);let ne=new Set;return S.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;let Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let Ne=0;Ne<Pe.length;Ne++){let Ie=Pe[Ne];An(Ie,ue,W,ie),ne.add(Ie)}else An(Pe,ue,W,ie),ne.add(Pe)}),T=y.pop(),Y!==null&&Y.renderEnd(),ne},this.compileAsync=function(S,W,ue=null){let ne=this.compile(S,W,ue);return new Promise(ie=>{function Pe(){if(ne.forEach(function(Ne){let Fe=A.get(Ne).currentProgram;(Fe===void 0||Fe.isReady())&&ne.delete(Ne)}),ne.size===0){ie(S);return}setTimeout(Pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let pi=null;function no(S){pi&&pi(S)}function io(){Mn.stop()}function Ai(){Mn.start()}let Mn=new Yf;Mn.setAnimationLoop(no),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(S){pi=S,xe.setAnimationLoop(S),S===null?Mn.stop():Mn.start()},xe.addEventListener("sessionstart",io),xe.addEventListener("sessionend",Ai),this.render=function(S,W){if(W!==void 0&&W.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Y!==null&&Y.renderStart(S,W);let ue=xe.enabled===!0&&xe.isPresenting===!0,ne=I!==null&&(fe===null||ue)&&I.begin(B,fe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(W),W=xe.getCamera()),S.isScene===!0&&S.onBeforeRender(B,S,W,fe),T=H.get(S,y.length),T.init(W),T.state.textureUnits=P.getTextureUnits(),y.push(T),ve.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),me.setFromProjectionMatrix(ve,On,W.reversedDepth),Me=this.localClippingEnabled,_e=Q.init(this.clippingPlanes,Me),_=X.get(S,D.length),_.init(),D.push(_),xe.enabled===!0&&xe.isPresenting===!0){let Ne=B.xr.getDepthSensingMesh();Ne!==null&&Bc(Ne,W,-1/0,B.sortObjects)}Bc(S,W,0,B.sortObjects),_.finish(),Y!==null&&Y.updateLights(T.state.lightsArray),B.sortObjects===!0&&_.sort(Te,He),ke=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ke&&de.addToRenderList(_,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Q.beginShadows();let ie=T.state.shadowsArray;if(re.render(ie,S,W),_e===!0&&Q.endShadows(),(ne&&I.hasRenderPass())===!1){let Ne=_.opaque,Ie=_.transmissive;if(T.setupLights(),W.isArrayCamera){let Fe=W.cameras;if(Ie.length>0)for(let We=0,nt=Fe.length;We<nt;We++){let at=Fe[We];Wh(Ne,Ie,S,at)}ke&&de.render(S);for(let We=0,nt=Fe.length;We<nt;We++){let at=Fe[We];Vh(_,S,at,at.viewport)}}else Ie.length>0&&Wh(Ne,Ie,S,W),ke&&de.render(S),Vh(_,S,W)}fe!==null&&oe===0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe)),ne&&I.end(B),S.isScene===!0&&S.onAfterRender(B,S,W),J.resetDefaultState(),te=-1,he=null,y.pop(),y.length>0?(T=y[y.length-1],P.setTextureUnits(T.state.textureUnits),_e===!0&&Q.setGlobalState(B.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?_=D[D.length-1]:_=null,Y!==null&&Y.renderEnd()};function Bc(S,W,ue,ne){if(S.visible===!1)return;if(S.layers.test(W.layers)){if(S.isGroup)ue=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(W);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(me)){ne&&Ge.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);let Ne=se.update(S),Ie=S.material;Ie.visible&&_.push(S,Ne,Ie,ue,Ge.z,null,W)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(me))){let Ne=se.update(S),Ie=S.material;if(ne&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ge.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ge.copy(Ne.boundingSphere.center)),Ge.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){let Fe=Ne.groups;for(let We=0,nt=Fe.length;We<nt;We++){let at=Fe[We],Be=Ie[at.materialIndex];Be&&Be.visible&&_.push(S,Ne,Be,ue,Ge.z,at,W)}}else Ie.visible&&_.push(S,Ne,Ie,ue,Ge.z,null,W)}}let Pe=S.children;for(let Ne=0,Ie=Pe.length;Ne<Ie;Ne++)Bc(Pe[Ne],W,ue,ne)}function Vh(S,W,ue,ne){let{opaque:ie,transmissive:Pe,transparent:Ne}=S;T.setupLightsView(ue),_e===!0&&Q.setGlobalState(B.clippingPlanes,ue),ne&&x.viewport(ce.copy(ne)),ie.length>0&&so(ie,W,ue),Pe.length>0&&so(Pe,W,ue),Ne.length>0&&so(Ne,W,ue),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Wh(S,W,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ne.id]===void 0){let Be=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ne.id]=new gn(1,1,{generateMipmaps:!0,type:Be?Vn:yn,minFilter:Xi,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let Pe=T.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||ce;Pe.setSize(Ne.z*B.transmissionResolutionScale,Ne.w*B.transmissionResolutionScale);let Ie=B.getRenderTarget(),Fe=B.getActiveCubeFace(),We=B.getActiveMipmapLevel();B.setRenderTarget(Pe),B.getClearColor(et),Ye=B.getClearAlpha(),Ye<1&&B.setClearColor(16777215,.5),B.clear(),ke&&de.render(ue);let nt=B.toneMapping;B.toneMapping=Hn;let at=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),T.setupLightsView(ne),_e===!0&&Q.setGlobalState(B.clippingPlanes,ne),so(S,ue,ne),P.updateMultisampleRenderTarget(Pe),P.updateRenderTargetMipmap(Pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let pt=0,Ot=W.length;pt<Ot;pt++){let Rt=W[pt],{object:Mt,geometry:nn,material:De,group:un}=Rt;if(De.side===Bt&&Mt.layers.test(ne.layers)){let ht=De.side;De.side=en,De.needsUpdate=!0,Xh(Mt,ue,ne,nn,De,un),De.side=ht,De.needsUpdate=!0,Be=!0}}Be===!0&&(P.updateMultisampleRenderTarget(Pe),P.updateRenderTargetMipmap(Pe))}B.setRenderTarget(Ie,Fe,We),B.setClearColor(et,Ye),at!==void 0&&(ne.viewport=at),B.toneMapping=nt}function so(S,W,ue){let ne=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Pe=S.length;ie<Pe;ie++){let Ne=S[ie],{object:Ie,geometry:Fe,group:We}=Ne,nt=Ne.material;nt.allowOverride===!0&&ne!==null&&(nt=ne),Ie.layers.test(ue.layers)&&Xh(Ie,W,ue,Fe,nt,We)}}function Xh(S,W,ue,ne,ie,Pe){Y!==null&&ie.isNodeMaterial&&Y.setObject(S,ie),S.onBeforeRender(B,W,ue,ne,ie,Pe),S.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),ie.onBeforeRender(B,W,ue,ne,S,Pe),ie.transparent===!0&&ie.side===Bt&&ie.forceSinglePass===!1?(ie.side=en,ie.needsUpdate=!0,B.renderBufferDirect(ue,W,ne,ie,S,Pe),ie.side=Vi,ie.needsUpdate=!0,B.renderBufferDirect(ue,W,ne,ie,S,Pe),ie.side=Bt):B.renderBufferDirect(ue,W,ne,ie,S,Pe),S.onAfterRender(B,W,ue,ne,ie,Pe)}function ro(S,W,ue){W.isScene!==!0&&(W=Ve);let ne=A.get(S),ie=T.state.lights,Pe=T.state.shadowsArray,Ne=ie.state.version,Ie=F.getParameters(S,ie.state,Pe,W,ue,T.state.lightProbeGridArray),Fe=F.getProgramCacheKey(Ie),We=ne.programs;ne.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?W.environment:null,ne.fog=W.fog;let nt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;ne.envMap=$.get(S.envMap||ne.environment,nt),ne.envMapRotation=ne.environment!==null&&S.envMap===null?W.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",wt),We=new Map,ne.programs=We);let at=We.get(Fe);if(at!==void 0){if(ne.currentProgram===at&&ne.lightsStateVersion===Ne)return $h(S,Ie),at}else Ie.uniforms=F.getUniforms(S),Y!==null&&S.isNodeMaterial&&Y.build(S,ue,Ie),S.onBeforeCompile(Ie,B),at=F.acquireProgram(Ie,Fe),We.set(Fe,at),ne.uniforms=Ie.uniforms;let Be=ne.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=Q.uniform),$h(S,Ie),ne.needsLights=tm(S),ne.lightsStateVersion=Ne,ne.needsLights&&(Be.ambientLightColor.value=ie.state.ambient,Be.lightProbe.value=ie.state.probe,Be.sunLights.value=ie.state.sun,Be.sunLightShadows.value=ie.state.sunShadow,Be.directionalLights.value=ie.state.directional,Be.directionalLightShadows.value=ie.state.directionalShadow,Be.spotLights.value=ie.state.spot,Be.spotLightShadows.value=ie.state.spotShadow,Be.rectAreaLights.value=ie.state.rectArea,Be.ltc_1.value=ie.state.rectAreaLTC1,Be.ltc_2.value=ie.state.rectAreaLTC2,Be.pointLights.value=ie.state.point,Be.pointLightShadows.value=ie.state.pointShadow,Be.hemisphereLights.value=ie.state.hemi,Be.sunShadowMatrix.value=ie.state.sunShadowMatrix,Be.sunShadowCascade.value=ie.state.sunShadowCascade,Be.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Be.spotLightMatrix.value=ie.state.spotLightMatrix,Be.spotLightMap.value=ie.state.spotLightMap,Be.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=T.state.lightProbeGridArray.length>0,ne.currentProgram=at,ne.uniformsList=null,at}function qh(S){if(S.uniformsList===null){let W=S.currentProgram.getUniforms();S.uniformsList=gr.seqWithValue(W.seq,S.uniforms)}return S.uniformsList}function $h(S,W){let ue=A.get(S);ue.outputColorSpace=W.outputColorSpace,ue.batching=W.batching,ue.batchingColor=W.batchingColor,ue.instancing=W.instancing,ue.instancingColor=W.instancingColor,ue.instancingMorph=W.instancingMorph,ue.skinning=W.skinning,ue.morphTargets=W.morphTargets,ue.morphNormals=W.morphNormals,ue.morphColors=W.morphColors,ue.morphTargetsCount=W.morphTargetsCount,ue.numClippingPlanes=W.numClippingPlanes,ue.numIntersection=W.numClipIntersection,ue.vertexAlphas=W.vertexAlphas,ue.vertexTangents=W.vertexTangents,ue.toneMapping=W.toneMapping}function jp(S,W){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(W.matrixWorld);for(let ue=0,ne=S.length;ue<ne;ue++){let ie=S[ue];if(ie.texture!==null&&ie.boundingBox.containsPoint(M))return ie}return null}function Qp(S,W,ue,ne,ie){W.isScene!==!0&&(W=Ve),P.resetTextureUnits();let Pe=W.fog,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?W.environment:null,Ie=fe===null?B.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:lt.workingColorSpace,Fe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,We=$.get(ne.envMap||Ne,Fe),nt=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,at=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Be=!!ue.morphAttributes.position,pt=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color,Rt=Hn;ne.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Rt=B.toneMapping);let Mt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,nn=Mt!==void 0?Mt.length:0,De=A.get(ne),un=T.state.lights;if(_e===!0&&(Me===!0||S!==he)){let At=S===he&&ne.id===te;Q.setState(ne,S,At)}let ht=!1;ne.version===De.__version?(De.needsLights&&De.lightsStateVersion!==un.state.version||De.outputColorSpace!==Ie||ie.isBatchedMesh&&De.batching===!1||!ie.isBatchedMesh&&De.batching===!0||ie.isBatchedMesh&&De.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&De.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&De.instancing===!1||!ie.isInstancedMesh&&De.instancing===!0||ie.isSkinnedMesh&&De.skinning===!1||!ie.isSkinnedMesh&&De.skinning===!0||ie.isInstancedMesh&&De.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&De.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&De.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&De.instancingMorph===!1&&ie.morphTexture!==null||De.envMap!==We||ne.fog===!0&&De.fog!==Pe||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Q.numPlanes||De.numIntersection!==Q.numIntersection)||De.vertexAlphas!==nt||De.vertexTangents!==at||De.morphTargets!==Be||De.morphNormals!==pt||De.morphColors!==Ot||De.toneMapping!==Rt||De.morphTargetsCount!==nn||!!De.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,De.__version=ne.version);let Rn=De.currentProgram;ht===!0&&(Rn=ro(ne,W,ie),Y&&ne.isNodeMaterial&&Y.onUpdateProgram(ne,Rn,De));let Jn=!1,Ri=!1,As=!1,_t=Rn.getUniforms(),Ft=De.uniforms;if(x.useProgram(Rn.program)&&(Jn=!0,Ri=!0,As=!0),ne.id!==te&&(te=ne.id,Ri=!0),De.needsLights){let At=jp(T.state.lightProbeGridArray,ie);De.lightProbeGrid!==At&&(De.lightProbeGrid=At,Ri=!0)}if(Jn||he!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),_t.setValue(O,"projectionMatrix",S.projectionMatrix),_t.setValue(O,"viewMatrix",S.matrixWorldInverse);let Ii=_t.map.cameraPosition;Ii!==void 0&&Ii.setValue(O,Se.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&_t.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),he!==S&&(he=S,Ri=!0,As=!0)}if(De.needsLights&&(un.state.sunShadowMap.length>0&&_t.setValue(O,"sunShadowMap",un.state.sunShadowMap,P),un.state.directionalShadowMap.length>0&&_t.setValue(O,"directionalShadowMap",un.state.directionalShadowMap,P),un.state.spotShadowMap.length>0&&_t.setValue(O,"spotShadowMap",un.state.spotShadowMap,P),un.state.pointShadowMap.length>0&&_t.setValue(O,"pointShadowMap",un.state.pointShadowMap,P)),ie.isSkinnedMesh){_t.setOptional(O,ie,"bindMatrix"),_t.setOptional(O,ie,"bindMatrixInverse");let At=ie.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),_t.setValue(O,"boneTexture",At.boneTexture,P))}ie.isBatchedMesh&&(_t.setOptional(O,ie,"batchingTexture"),_t.setValue(O,"batchingTexture",ie._matricesTexture,P),_t.setOptional(O,ie,"batchingIdTexture"),_t.setValue(O,"batchingIdTexture",ie._indirectTexture,P),_t.setOptional(O,ie,"batchingColorTexture"),ie._colorsTexture!==null&&_t.setValue(O,"batchingColorTexture",ie._colorsTexture,P));let Ci=ue.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&U.update(ie,ue,Rn),(Ri||De.receiveShadow!==ie.receiveShadow)&&(De.receiveShadow=ie.receiveShadow,_t.setValue(O,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&W.environment!==null&&(Ft.envMapIntensity.value=W.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=yv()),Ri){if(_t.setValue(O,"toneMappingExposure",B.toneMappingExposure),De.needsLights&&em(Ft,As),Pe&&ne.fog===!0&&G.refreshFogUniforms(Ft,Pe),G.refreshMaterialUniforms(Ft,ne,pe,le,T.state.transmissionRenderTarget[S.id]),De.needsLights&&De.lightProbeGrid){let At=De.lightProbeGrid;Ft.probesSH.value=At.texture,Ft.probesMin.value.copy(At.boundingBox.min),Ft.probesMax.value.copy(At.boundingBox.max),Ft.probesResolution.value.copy(At.resolution)}gr.upload(O,qh(De),Ft,P)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(gr.upload(O,qh(De),Ft,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&_t.setValue(O,"center",ie.center),_t.setValue(O,"modelViewMatrix",ie.modelViewMatrix),_t.setValue(O,"normalMatrix",ie.normalMatrix),_t.setValue(O,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){let At=ne.uniformsGroups;for(let Ii=0,Rs=At.length;Ii<Rs;Ii++){let Zh=At[Ii];q.update(Zh,Rn),q.bind(Zh,Rn)}}return Rn}function em(S,W){S.ambientLightColor.needsUpdate=W,S.lightProbe.needsUpdate=W,S.sunLights.needsUpdate=W,S.sunLightShadows.needsUpdate=W,S.directionalLights.needsUpdate=W,S.directionalLightShadows.needsUpdate=W,S.pointLights.needsUpdate=W,S.pointLightShadows.needsUpdate=W,S.spotLights.needsUpdate=W,S.spotLightShadows.needsUpdate=W,S.rectAreaLights.needsUpdate=W,S.hemisphereLights.needsUpdate=W}function tm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return fe},this.setRenderTargetTextures=function(S,W,ue){let ne=A.get(S);ne.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),A.get(S.texture).__webglTexture=W,A.get(S.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,W){let ue=A.get(S);ue.__webglFramebuffer=W,ue.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(S,W=0,ue=0){fe=S,ae=W,oe=ue;let ne=null,ie=!1,Pe=!1;if(S){let Ie=A.get(S);if(Ie.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,Ie.__webglFramebuffer),ce.copy(S.viewport),Ee.copy(S.scissor),Ce=S.scissorTest,x.viewport(ce),x.scissor(Ee),x.setScissorTest(Ce),te=-1;return}else if(Ie.__webglFramebuffer===void 0)P.setupRenderTarget(S);else if(Ie.__hasExternalTextures)P.rebindTextures(S,A.get(S.texture).__webglTexture,A.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let nt=S.depthTexture;if(Ie.__boundDepthTexture!==nt){if(nt!==null&&A.has(nt)&&(S.width!==nt.image.width||S.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(S)}}let Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);let We=A.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[W])?ne=We[W][ue]:ne=We[W],ie=!0):S.samples>0&&P.useMultisampledRTT(S)===!1?ne=A.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?ne=We[ue]:ne=We,ce.copy(S.viewport),Ee.copy(S.scissor),Ce=S.scissorTest}else ce.copy(we).multiplyScalar(pe).floor(),Ee.copy(ze).multiplyScalar(pe).floor(),Ce=tt;if(ue!==0&&(ne=ee),x.bindFramebuffer(O.FRAMEBUFFER,ne)&&x.drawBuffers(S,ne),x.viewport(ce),x.scissor(Ee),x.setScissorTest(Ce),ie){let Ie=A.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ie.__webglTexture,ue)}else if(Pe){let Ie=W;for(let Fe=0;Fe<S.textures.length;Fe++){let We=A.get(S.textures[Fe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Fe,We.__webglTexture,ue,Ie)}}else if(S!==null&&ue!==0){let Ie=A.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,ue)}te=-1};function Yh(S){let W=A.get(S);return(W.__readFormat!==S.format||W.__readType!==S.type)&&(W.__readFormat=S.format,W.__readType=S.type,W.__formatReadable=R.textureFormatReadable(S.format),W.__typeReadable=R.textureTypeReadable(S.type)),W}this.readRenderTargetPixels=function(S,W,ue,ne,ie,Pe,Ne,Ie=0){if(!(S&&S.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=A.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe){x.bindFramebuffer(O.FRAMEBUFFER,Fe);try{let We=S.textures[Ie],nt=We.format,at=We.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie);let Be=Yh(We);if(Be.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Be.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=S.width-ne&&ue>=0&&ue<=S.height-ie&&O.readPixels(W,ue,ne,ie,N.convert(nt),N.convert(at),Pe)}finally{let We=fe!==null?A.get(fe).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,W,ue,ne,ie,Pe,Ne,Ie=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=A.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Fe=Fe[Ne]),Fe)if(W>=0&&W<=S.width-ne&&ue>=0&&ue<=S.height-ie){x.bindFramebuffer(O.FRAMEBUFFER,Fe);let We=S.textures[Ie],nt=We.format,at=We.type;S.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ie);let Be=Yh(We);if(Be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.bufferData(O.PIXEL_PACK_BUFFER,Pe.byteLength,O.STREAM_READ),O.readPixels(W,ue,ne,ie,N.convert(nt),N.convert(at),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ot=fe!==null?A.get(fe).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Ot);let Rt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await gf(O,Rt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pt),O.deleteSync(Rt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,W=null,ue=0){let ne=Math.pow(2,-ue),ie=Math.floor(S.image.width*ne),Pe=Math.floor(S.image.height*ne),Ne=W!==null?W.x:0,Ie=W!==null?W.y:0;P.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,ue,0,0,Ne,Ie,ie,Pe),x.unbindTexture()},this.copyTextureToTexture=function(S,W,ue=null,ne=null,ie=0,Pe=0){let Ne,Ie,Fe,We,nt,at,Be,pt,Ot,Rt=S.isCompressedTexture?S.mipmaps[Pe]:S.image;if(ue!==null)Ne=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,We=ue.min.x,nt=ue.min.y,at=ue.isBox3?ue.min.z:0;else{let Ft=Math.pow(2,-ie);Ne=Math.floor(Rt.width*Ft),Ie=Math.floor(Rt.height*Ft),S.isDataArrayTexture?Fe=Rt.depth:S.isData3DTexture?Fe=Math.floor(Rt.depth*Ft):Fe=1,We=0,nt=0,at=0}ne!==null?(Be=ne.x,pt=ne.y,Ot=ne.z):(Be=0,pt=0,Ot=0);let Mt=N.convert(W.format),nn=N.convert(W.type),De;W.isData3DTexture?(P.setTexture3D(W,0),De=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),De=O.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),De=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);let un=x.getParameter(O.UNPACK_ROW_LENGTH),ht=x.getParameter(O.UNPACK_IMAGE_HEIGHT),Rn=x.getParameter(O.UNPACK_SKIP_PIXELS),Jn=x.getParameter(O.UNPACK_SKIP_ROWS),Ri=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,We),x.pixelStorei(O.UNPACK_SKIP_ROWS,nt),x.pixelStorei(O.UNPACK_SKIP_IMAGES,at);let As=S.isDataArrayTexture||S.isData3DTexture,_t=W.isDataArrayTexture||W.isData3DTexture;if(S.isDepthTexture){let Ft=A.get(S),Ci=A.get(W),At=A.get(Ft.__renderTarget),Ii=A.get(Ci.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,At.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Rs=0;Rs<Fe;Rs++)As&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(S).__webglTexture,ie,at+Rs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,A.get(W).__webglTexture,Pe,Ot+Rs)),O.blitFramebuffer(We,nt,Ne,Ie,Be,pt,Ne,Ie,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(ie!==0||S.isRenderTargetTexture||A.has(S)){let Ft=A.get(S),Ci=A.get(W);x.bindFramebuffer(O.READ_FRAMEBUFFER,C),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Z);for(let At=0;At<Fe;At++)As?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ft.__webglTexture,ie,at+At):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ft.__webglTexture,ie),_t?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ci.__webglTexture,Pe,Ot+At):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ci.__webglTexture,Pe),ie!==0?O.blitFramebuffer(We,nt,Ne,Ie,Be,pt,Ne,Ie,O.COLOR_BUFFER_BIT,O.NEAREST):_t?O.copyTexSubImage3D(De,Pe,Be,pt,Ot+At,We,nt,Ne,Ie):O.copyTexSubImage2D(De,Pe,Be,pt,We,nt,Ne,Ie);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _t?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(De,Pe,Be,pt,Ot,Ne,Ie,Fe,Mt,nn,Rt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(De,Pe,Be,pt,Ot,Ne,Ie,Fe,Mt,Rt.data):O.texSubImage3D(De,Pe,Be,pt,Ot,Ne,Ie,Fe,Mt,nn,Rt):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Pe,Be,pt,Ne,Ie,Mt,nn,Rt.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Pe,Be,pt,Rt.width,Rt.height,Mt,Rt.data):O.texSubImage2D(O.TEXTURE_2D,Pe,Be,pt,Ne,Ie,Mt,nn,Rt);x.pixelStorei(O.UNPACK_ROW_LENGTH,un),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ht),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Rn),x.pixelStorei(O.UNPACK_SKIP_ROWS,Jn),x.pixelStorei(O.UNPACK_SKIP_IMAGES,Ri),Pe===0&&W.generateMipmaps&&O.generateMipmap(De),x.unbindTexture()},this.initRenderTarget=function(S){A.get(S).__webglFramebuffer===void 0&&P.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?P.setTextureCube(S,0):S.isData3DTexture?P.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?P.setTexture2DArray(S,0):P.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){ae=0,oe=0,fe=null,x.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var xh="bilye-atolyesi-v5",Ha=(()=>{try{return window.top!==window}catch{return!0}})(),tp=typeof location<"u"&&/[?&]debug/.test(location.search);var np={A\u00E7\u0131k:"On",Kapal\u0131:"Off",Ayarlar:"Settings",Ses:"Sound",M\u00FCzik:"Music",Titre\u015Fim:"Vibration","Hafif g\xF6r\xFCnt\xFC":"Light graphics","Kayd\u0131 yedekle / geri y\xFCkle":"Back up / restore save","Uygulama olarak y\xFCkle":"Install as app","Hafif g\xF6r\xFCnt\xFC eski ve yava\u015F telefonlarda oyunu ak\u0131c\u0131 yapar.":"Light graphics keep the game smooth on older, slower phones.",Tamam:"OK","De\u011Fi\u015Fiklik i\xE7in oyun yeniden a\xE7\u0131l\u0131yor\u2026":"Restarting the game to apply\u2026","Kay\u0131t yede\u011Fi":"Save backup","\u0130lerlemen bu cihaz\u0131n taray\u0131c\u0131s\u0131nda saklan\u0131r. Taray\u0131c\u0131 verisi silinirse kay\u0131t da gider. Kay\u0131t kodunu bir yere not et; ba\u015Fka cihazda ya da y\xFCklenen uygulamada geri y\xFCkleyebilirsin.":"Your progress is stored in this device's browser. If browser data is cleared, the save is lost too. Keep your save code somewhere safe; you can restore it on another device or in the installed app.","Kay\u0131t kodunu buraya yap\u0131\u015Ft\u0131r":"Paste your save code here","Kayd\u0131m\u0131 kopyala":"Copy my save","Kayd\u0131 geri y\xFCkle":"Restore save","Kod ge\xE7ersiz. Tamam\u0131n\u0131 kopyalad\u0131\u011F\u0131ndan emin ol.":"Invalid code. Make sure you copied all of it.","Kay\u0131t geri y\xFCklendi!":"Save restored!",Geri:"Back","Kay\u0131t kodu kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r.":"Save code copied. Paste it somewhere safe.","Kopyalanamad\u0131; kodu elle se\xE7.":"Couldn't copy; select the code manually.",B\u0130LG\u0130SAYARIMA:"ON MY COMPUTER",TABLET\u0130ME:"ON MY TABLET",TELEFONUMA:"ON MY PHONE","Bilye At\xF6lyesi y\xFCklendi! Ana ekran\u0131ndan a\xE7abilirsin.":"Marble Workshop installed! Open it from your home screen.","Oyun zaten uygulama olarak a\xE7\u0131k":"The game is already running as an app","Y\xFCkleniyor\u2026 ana ekran\u0131nda simge belirecek":"Installing\u2026 the icon will appear on your home screen","Y\xFCkleme iptal edildi \xB7 Ayarlar \u2192 Uygulama olarak y\xFCkle":"Install cancelled \xB7 Settings \u2192 Install as app","iPhone ve iPad'de kurulum Safari'nin Ana Ekrana Ekle \xF6zelli\u011Fiyle yap\u0131l\u0131r:":"On iPhone and iPad, install with Safari's Add to Home Screen:","Adres \xE7ubu\u011Funun sa\u011F\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas.":"Tap the Share button to the right of the address bar.","Ekran\u0131n alt\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas.":"Tap the Share button at the bottom of the screen.","Men\xFCy\xFC yukar\u0131 kayd\u0131r, Ana Ekrana Ekle'ye bas.":"Scroll the menu up and tap Add to Home Screen.",Ekle:"Add","Sa\u011F \xFCstteki Ekle'ye bas. Oyun ana ekran\u0131nda belirir.":"Tap Add at the top right. The game appears on your home screen.","Ana ekran uygulamas\u0131 taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \u0130lerlemen varsa \xF6nce Kayd\u0131m\u0131 kopyala, uygulamay\u0131 ilk a\xE7\u0131nca Ayarlar \u2192 Kayd\u0131 yedekle / geri y\xFCkle ile yap\u0131\u015Ft\u0131r.":"The home screen app keeps a separate save from the browser. If you have progress, first tap Copy my save, then paste it in the app via Settings \u2192 Back up / restore save.","Taray\u0131c\u0131n kurulum penceresini \u015Fu an a\xE7mad\u0131. Elle y\xFCklemek kolay:":"Your browser didn't open the install prompt right now. Installing manually is easy:","Taray\u0131c\u0131n\u0131n men\xFCs\xFCn\xFC (\u22EE) a\xE7.":"Open your browser menu (\u22EE).","Uygulamay\u0131 y\xFCkle ya da Ana ekrana ekle'ye bas.":"Tap Install app or Add to Home screen.",Y\u00FCkle:"Install","Onayla. Oyun ana ekran\u0131nda ve uygulama listende belirir.":"Confirm. The game appears on your home screen and app list.","Se\xE7enek yoksa oyunu Chrome, Edge ya da Samsung Internet ile a\xE7.":"If the option is missing, open the game in Chrome, Edge or Samsung Internet.","Bilye At\xF6lyesi":"Marble Workshop","Ana ekran\u0131na ekle: tek dokunu\u015Fla a\xE7, internetsiz de oyna.":"Add it to your home screen: open with one tap, play offline too.","OYUNU {cihaz} Y\xDCKLE":"INSTALL THE GAME {cihaz}","Y\xDCKLEMEDEN OYNA":"PLAY WITHOUT INSTALLING","Kayd\u0131n\u0131 yedekle":"Back up your save","Taray\u0131c\u0131 bir s\xFCre kullan\u0131lmayan sitelerin kay\u0131tlar\u0131n\u0131 silebilir. Kay\u0131t kodunu kopyalay\u0131p bir yere not etmen iyi olur.":"Browsers may delete saves of sites you haven't visited for a while. It's a good idea to copy your save code and keep it somewhere.",Sonra:"Later","Yar\u0131m kalan ma\xE7 var":"Match in progress","{n} / {m} rakip yenildi":"{n} / {m} rivals beaten",Yeni:"New","Seviye {n} yar\u0131m kald\u0131":"Level {n} in progress","Seviye {n}":"Level {n}","B\xF6l\xFCm {n} \xB7 {s} y\u0131ld\u0131z":"Stage {n} \xB7 {s} stars","\xDC\xE7 bilye oyunu, tek at\xF6lye":"Three marble games, one workshop","Mahalle Misketi":"Street Marbles","Ni\u015Fan al, fiskele, halkadaki bilyeleri d\u0131\u015Far\u0131 f\u0131rlat. Mahallenin \u015Fampiyonunu yen!":"Aim, flick and knock the marbles out of the ring. Beat the neighbourhood champion!","Ayr\u0131\u015Ft\u0131rma At\xF6lyesi":"Sorting Workshop","Banttan akan bilyeleri do\u011Fru kavanoza d\xFC\u015F\xFCr. H\u0131zlan, zincir yap, lavdan sak\u0131n!":"Drop the rolling marbles into the right jars. Speed up, build chains, beware of lava!","Bilye Pisti":"Marble Run","Rampa, kavis, trambolin yerle\u015Ftir; bilyeyi barda\u011Fa ula\u015Ft\u0131r.":"Place ramps, curves and trampolines; get the marble into the cup.","Her oyunun kayd\u0131 ayr\u0131 tutulur, kald\u0131\u011F\u0131n yerden devam edersin.":"Each game has its own save, so you continue where you left off.","Harika! {n} bilye birden!":"Great! {n} marbles at once!","G\xFCzel at\u0131\u015F!":"Nice shot!","Iskalad\u0131n, s\u0131ra {ad} da.":"Missed! {ad}'s turn.","\xD6d\xFCl: {ad}":"Prize: {ad}","At\u0131c\u0131 olarak kullanabilirsin!":"You can use it as your shooter!","Kazand\u0131n!":"You won!","{ad} kazand\u0131":"{ad} won",Skor:"Score",misket:"marbles",Toplam:"Total","Tekrar oyna":"Play again",Rakipler:"Rivals","Ma\xE7 bitti":"Match over","Bilyeler yuvarlan\u0131yor\u2026":"Marbles rolling\u2026","Senin s\u0131ran":"Your turn","{ad} ni\u015Fan al\u0131yor\u2026":"{ad} is aiming\u2026",Sen:"You","{n} bilyeyi alan kazan\u0131r":"First to {n} marbles wins","\xC7izgide kayd\u0131rarak yer se\xE7 \xB7 Bilyeni geri \xE7ek, b\u0131rak!":"Slide along the line to pick a spot \xB7 Pull your marble back, release!","Bilyen halkada kald\u0131: oradan tekrar at!":"Your marble stayed in the ring: shoot again from there!","At\u0131c\u0131 bilyene dokun, parma\u011F\u0131n\u0131 geri \xE7ek ve b\u0131rak. Ne kadar \xE7ekersen o kadar g\xFC\xE7l\xFC atar.":"Touch your shooter, pull your finger back and let go. The further you pull, the harder it flies.","{n} bilye":"{n} marbles","{n} galibiyet":"{n} wins","{ad} yenilince a\xE7\u0131l\u0131r":"Unlocks after beating {ad}","Halkadaki bilyelerin yar\u0131s\u0131ndan fazlas\u0131n\u0131 d\u0131\u015Far\u0131 \xE7\u0131karan kazan\u0131r.":"Whoever knocks out more than half of the marbles wins.",Misketlerin:"Your marbles",At\u0131c\u0131n:"Your shooter","Ma\xE7a devam et ({ad})":"Continue match ({ad})","At\u0131c\u0131 bilyeler":"Shooter marbles","Ana men\xFC":"Main menu","Yar\u0131m kalan ma\xE7":"Unfinished match","Yeni ma\xE7a ba\u015Flarsan yar\u0131m kalan ma\xE7 silinir.":"Starting a new match will delete the unfinished one.","Yeni ma\xE7a ba\u015Fla":"Start new match",Vazge\u00E7:"Cancel",A\u011F\u0131rl\u0131k:"Weight",G\u00FC\u00E7:"Power",Se\u00E7ili:"Selected",Se\u00E7:"Select","{ad} yenilince":"Beat {ad}","Ma\xE7larda kazand\u0131\u011F\u0131n her bilye bir misket eder. Rakiplerini yenerek \xF6zel bilyeler de kazan\u0131rs\u0131n.":"Every marble you win in a match is worth one coin. Beat rivals to win special marbles too.","{ad} senin!":"{ad} is yours!","Yeni misin? Kolay gelsin!":"New around here? Good luck!","Benim bilyelerim hep uza\u011Fa gider.":"My marbles always fly far.","Asfaltta bilye h\u0131zl\u0131 kayar, dikkat et.":"Marbles slide fast on asphalt, careful.","\xC7elik bilyemle herkesi da\u011F\u0131t\u0131r\u0131m.":"My steel marble scatters everyone.","Ni\u015Fan almak bir sanatt\u0131r.":"Aiming is an art.","Mahallenin \u015Fampiyonu benim. Hadi bakal\u0131m!":"I'm the champion of this street. Bring it on!","Toprak Avlu":"Dirt Yard","Arka Sokak":"Back Alley","\xC7ar\u015F\u0131 Meydan\u0131":"Market Square","K\u0131z\u0131l Kedig\xF6z\xFC":"Crimson Cat's Eye","Deniz Kedig\xF6z\xFC":"Sea Cat's Eye","\xC7imen Girdab\u0131":"Grass Swirl","Limon Girdab\u0131":"Lemon Swirl","Erik Kedig\xF6z\xFC":"Plum Cat's Eye",Mandalina:"Tangerine","S\xFCt Opal":"Milk Opal","\xC7elik Bilye":"Steel Marble","Alt\u0131n Bilye":"Gold Marble","Lav Bilye":"Lava Marble","Buz Bilye":"Ice Marble",Galaksi:"Galaxy",G\u00F6kku\u015Fa\u011F\u0131:"Rainbow",Okyanus:"Ocean","Gece Kedig\xF6z\xFC":"Night Cat's Eye","G\xFCl Girdab\u0131":"Rose Swirl","Dengeli, her i\u015Fe yarar.":"Balanced, good for everything.","Biraz daha uza\u011Fa gider.":"Rolls a little further.","A\u011F\u0131r: vurdu\u011Funu uza\u011Fa savurur, kendisi az kayar.":"Heavy: sends targets flying, barely slides itself.","Vuraca\u011F\u0131n bilyenin gidece\u011Fi y\xF6n\xFC g\xF6sterir.":"Shows where the marble you hit will go.","G\xFC\xE7l\xFC at\u0131\u015F, hafif a\u011F\u0131r.":"Strong shot, a bit heavy.","A\u011F\u0131r, g\xFC\xE7l\xFC ve ni\u015Fan\u0131 g\xF6sterir. \u015Eampiyon bilyesi.":"Heavy, strong and shows the aim. The champion's marble.","Sola d\xF6nd\xFCr":"Rotate left","Sa\u011Fa d\xF6nd\xFCr":"Rotate right",\u00C7evir:"Flip",Kald\u0131r:"Remove","Barda\u011Fa ula\u015Ft\u0131!":"It reached the cup!","Y\u0131ld\u0131zlar: {a} / {b}":"Stars: {a} / {b}","Sonraki b\xF6l\xFCm":"Next stage","Tebrikler! T\xFCm b\xF6l\xFCmler bitti.":"Congratulations! All stages complete.","Bu b\xF6l\xFCmde kal":"Stay on this stage",B\u00F6l\u00FCmler:"Stages","Bilye panodan d\xFC\u015Ft\xFC. Kesikli \xE7izgi izledi\u011Fi yolu g\xF6steriyor.":"The marble fell off the board. The dashed line shows its path.","Bilye tak\u0131ld\u0131. Par\xE7alar\u0131 biraz oynat.":"The marble got stuck. Adjust the pieces a little.","Bu par\xE7adan kalmad\u0131":"No pieces of this kind left","Bu b\xF6l\xFCm i\xE7in ipucu yok":"No hint for this stage","T\xFCm ipu\xE7lar\u0131 g\xF6sterildi":"All hints shown","\u0130pucu: soluk par\xE7an\u0131n yerine bir {ad} koy":"Hint: place a {ad} where the faded piece is","Serbest At\xF6lye":"Free Workshop",\u0130pucu:"Hint",Temizle:"Clear",H\u0131z:"Speed",Durdur:"Stop",B\u0131rak:"Drop","Par\xE7alar\u0131 panoya yerle\u015Ftir, bilyeyi b\u0131rak ve barda\u011Fa ula\u015Ft\u0131r. Y\u0131ld\u0131zlar\u0131 da toplarsan tam puan!":"Place pieces on the board, drop the marble and get it into the cup. Collect the stars for full marks!","Serbest at\xF6lyeye devam et":"Continue Free Workshop","{n}. b\xF6l\xFCme devam et":"Continue stage {n}","s\u0131n\u0131rs\u0131z par\xE7a, kendi pistini kur":"unlimited pieces, build your own run","4. b\xF6l\xFCmde a\xE7\u0131l\u0131r":"unlocks at stage 4","Uzun kalas":"Long plank","K\u0131sa kalas":"Short plank",Kavis:"Curve",Trambolin:"Trampoline",H\u0131zland\u0131r\u0131c\u0131:"Booster",Huni:"Funnel","\u0130lk kalas":"First plank","Kalas\u0131 s\xFCr\xFCkleyip panoya b\u0131rak. D\xF6nd\xFCrmek i\xE7in \xFCst\xFCne dokun, ok d\xFC\u011Fmelerini kullan.":"Drag the plank onto the board. Tap it and use the arrow buttons to rotate.","Kavisli d\xF6n\xFC\u015F":"Curved turn","Kavis d\xFC\u015Fen bilyeyi yana \xE7evirir.":"A curve turns a falling marble sideways.",Zikzak:"Zigzag","Z\u0131pla!":"Bounce!","Trambolin bilyeyi z\u0131plat\u0131r.":"The trampoline bounces the marble.","H\u0131zland\u0131r\u0131c\u0131 bilyeyi ok y\xF6n\xFCnde f\u0131rlat\u0131r.":"The booster launches the marble in the arrow's direction.","Huniden ge\xE7ir":"Through the funnel","Huni bilyeyi ortadan a\u015Fa\u011F\u0131 ak\u0131t\u0131r.":"The funnel drops the marble through its middle.","\xC7at\u0131l\u0131 bardak":"Covered cup","Duvar\u0131n ard\u0131":"Behind the wall",Merdiven:"Staircase","Yoku\u015F yukar\u0131":"Uphill","\xC7ift trambolin":"Double trampoline",Labirent:"Maze",U\u00E7urum:"Cliff",Sarmal:"Spiral","Usta i\u015Fi":"Master work","B\xFCy\xFCk final":"Grand finale","Kald\u0131\u011F\u0131n yerden devam!":"Picking up where you left off!","Sonsuz At\xF6lye":"Endless Workshop","{r} renk \xB7 {g} bilyeyi do\u011Fru kavanoza ay\u0131r":"{r} colours \xB7 sort {g} marbles into the right jars","Hata yapana kadar devam et. Bant gittik\xE7e h\u0131zlan\u0131r.":"Keep going until you make mistakes. The belt keeps speeding up.","3 hata yaparsan seviye biter.":"Three mistakes and the level ends.",Ba\u015Fla:"Start","Bir kavanoza dokundu\u011Funda \xFCst\xFCndeki kapak a\xE7\u0131l\u0131r, bant \xFCzerindeki bilye i\xE7ine d\xFC\u015Fer. Tekrar dokun, kapak kapan\u0131r.":"Tap a jar to open the hatch above it; marbles on the belt drop in. Tap again to close it.","YEN\u0130: G\xF6kku\u015Fa\u011F\u0131 bilye her kavanoza uyar.":"NEW: A rainbow marble fits any jar.","YEN\u0130: Lav bilye kavanozu \xE7atlat\u0131r! Band\u0131n sonundaki su kovas\u0131na gitsin, kapaklar\u0131 kapal\u0131 tut.":"NEW: A lava marble cracks jars! Keep the hatches shut and let it reach the water bucket.","YEN\u0130: Buz bilye nereye d\xFC\u015Ferse d\xFC\u015Fs\xFCn band\u0131 5 saniye yava\u015Flat\u0131r.":"NEW: Wherever an ice marble lands, it slows the belt for 5 seconds.","YEN\u0130: Kavanozlar ara ara yer de\u011Fi\u015Ftirir. Etiketlere dikkat!":"NEW: Jars swap places now and then. Watch the labels!","Banttaki bilyeyle ayn\u0131 renkteki kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r.":"Tap the jar matching the marble's colour: its hatch opens.","Ka\xE7t\u0131!":"Missed!","Buz! Bant yava\u015Flad\u0131":"Ice! The belt slowed down","Z\u0130NC\u0130R x{n}":"CHAIN x{n}","Lav kavanozu \xE7atlatt\u0131!":"Lava cracked the jar!","Yanl\u0131\u015F kavanoz!":"Wrong jar!","Kavanozlar yer de\u011Fi\u015Ftiriyor!":"Jars are swapping!",Puan:"Score","Yeni rekor!":"New record!","En iyi":"Best","En uzun zincir":"Longest chain",Tekrar:"Retry",Seviyeler:"Levels","Seviye {n} tamam!":"Level {n} complete!","Seviye {n} bitti":"Level {n} over","3 hata yapt\u0131n. Bir daha dene!":"Three mistakes. Try again!","Sonraki seviye":"Next level",Sonsuz:"Endless","Bilyeleri renklerine g\xF6re kavanozlara ay\u0131r. Kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r ya da kapan\u0131r.":"Sort marbles into jars by colour. Tap a jar to open or close its hatch.","Seviye {n} devam et":"Continue level {n}","Sonsuz moda devam et":"Continue endless mode",Rekor:"Record","10. seviyede a\xE7\u0131l\u0131r":"unlocks at level 10",Duraklat\u0131ld\u0131:"Paused","Devam et":"Resume","Yeniden ba\u015Flat":"Restart"};var Ga="tr",ip=new Set,Xn=()=>Ga;function _r(i){Ga=i==="en"?"en":"tr",document.documentElement.lang=Ga}function sp(){return/^tr\b/i.test(navigator.language||"")?"tr":"en"}function z(i,e){let t=i;if(Ga==="en"){let n=np[i];n===void 0?ip.add(i):t=n}return e&&(t=t.replace(/\{(\w+)\}/g,(n,s)=>e[s]!==void 0?e[s]:`{${s}}`)),t}var rp=()=>[...ip];function Dn(i){return Math.round(i).toLocaleString(Ga==="en"?"en-US":"tr-TR")}var ap=1,yh=()=>({schema:ap,created:Date.now(),settings:{lang:null,sound:!0,music:!0,vib:!0,lite:null},last:null,install:null,backupAt:0,modes:{misket:{},sort:{},pist:{}}});function op(i){let e=yh();if(!i||typeof i!="object")return e;let t={...e,...i,settings:{...e.settings,...i.settings||{}},modes:{...e.modes,...i.modes||{}}};return t.schema=ap,t}var dt={data:yh(),ok:!0},gc=0;function lp(){try{dt.data=op(JSON.parse(localStorage.getItem(xh)))}catch{dt.ok=!1,dt.data=yh()}try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch{}return dt.data}function bt(){clearTimeout(gc),gc=0;try{localStorage.setItem(xh,JSON.stringify(dt.data)),dt.ok=!0}catch{dt.ok=!1}}function Gt(){gc||(gc=setTimeout(bt,400))}var vr=i=>dt.data.modes[i]||(dt.data.modes[i]={}),_v=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),vv=i=>new TextDecoder().decode(Uint8Array.from(atob(i),e=>e.charCodeAt(0)));function cp(){return bt(),"BA5:"+_v(JSON.stringify(dt.data))}function up(i){let e=/BA5:([A-Za-z0-9+/=\s]+)/.exec(i||"");if(!e)return!1;try{let t=JSON.parse(vv(e[1].replace(/\s/g,"")));return!t||!t.modes?!1:(dt.data=op(t),bt(),!0)}catch{return!1}}function xc(){let i=dt.data.modes;return Object.keys(i.misket.wins||{}).length>0||(i.sort.unlocked||1)>1||(i.pist.unlocked||1)>1||!!i.misket.match}var Qe=null,Mr,xs,Ti,Wa,Sr,Va,gs,qt={sound:!0,music:!0,vib:!0,musicOn:!1,nextNote:0,step:0};function _h(i){qt.sound=i.sound,qt.music=i.music,qt.vib=i.vib,Qe&&(xs.gain.value=qt.sound?.9:0,Ti.gain.setTargetAtTime(qt.music?.22:0,Qe.currentTime,.3))}function ys(){if(!Qe){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;Qe=new i,Mr=Qe.createGain(),Mr.gain.value=.8;let e=Qe.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,Mr.connect(e),e.connect(Qe.destination),xs=Qe.createGain(),xs.connect(Mr),Ti=Qe.createGain(),Ti.gain.value=0;let t=Qe.createDelay(1);t.delayTime.value=.38;let n=Qe.createGain();n.gain.value=.32;let s=Qe.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,Ti.connect(Mr),Ti.connect(t),t.connect(s),s.connect(n),n.connect(t),s.connect(Mr),Wa=Qe.createBuffer(1,Qe.sampleRate,Qe.sampleRate);let r=Wa.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;_h(qt)}Qe.state==="suspended"&&Qe.resume()}function vh(i,e,t,n,s){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(n,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+t+s)}function Et(i,e,t,n,s="sine",r=xs){let a=Qe.createOscillator(),o=Qe.createGain();return a.type=s,a.frequency.setValueAtTime(i,e),vh(o,e,.003,n,t),a.connect(o),o.connect(r),a.start(e),a.stop(e+t+.05),a}function Mh(i,e,t,n,s,r=1){let a=Qe.createBufferSource();a.buffer=Wa;let o=Qe.createBiquadFilter();o.type=n,o.frequency.value=s,o.Q.value=r;let l=Qe.createGain();vh(l,i,.002,t,e),a.connect(o),o.connect(l),l.connect(xs),a.start(i,Math.random()*.5),a.stop(i+e+.05)}var Zi=()=>Qe&&qt.sound&&Qe.state==="running",hp=0;function yc(i=1,e=1){if(!Zi())return;let t=Qe.currentTime;if(t-hp<.018)return;hp=t;let n=Math.min(1,Math.max(.05,i)),s=2550*e*(.94+Math.random()*.12);Et(s,t,.07+.05*n,.32*n),Et(s*1.53,t,.05,.16*n),Et(s*2.41,t,.03,.08*n),Mh(t,.012,.25*n,"highpass",5e3)}function _s(i=1,e="wood"){if(!Zi())return;let t=Qe.currentTime,n=Math.min(1,Math.max(.05,i));if(e==="glass"){Et(1900*(.95+Math.random()*.1),t,.12,.2*n),Et(3100,t,.06,.08*n);return}if(e==="metal"){Et(880,t,.25,.12*n,"triangle"),Et(1320,t,.18,.06*n);return}Et(e==="dirt"?140:260,t,.09,.35*n).frequency.exponentialRampToValueAtTime(70,t+.08),Mh(t,.05,.18*n,"lowpass",e==="dirt"?700:1500)}function pn(i){if(!Qe)return;Sr||(Sr=Qe.createBufferSource(),Sr.buffer=Wa,Sr.loop=!0,gs=Qe.createBiquadFilter(),gs.type="bandpass",gs.frequency.value=400,gs.Q.value=.8,Va=Qe.createGain(),Va.gain.value=0,Sr.connect(gs),gs.connect(Va),Va.connect(xs),Sr.start());let e=qt.sound?Math.min(1,Math.max(0,i)):0;Va.gain.setTargetAtTime(e*.16,Qe.currentTime,.05),gs.frequency.setTargetAtTime(250+e*900,Qe.currentTime,.05)}function ft(i="tap"){if(!Zi())return;let e=Qe.currentTime;i==="tap"?Et(1320,e,.05,.12,"triangle"):i==="toggle"?(Et(990,e,.04,.1,"triangle"),Et(1480,e+.04,.05,.08,"triangle")):i==="no"?(Et(220,e,.14,.18,"square"),Et(196,e+.09,.16,.14,"square")):i==="pick"?Et(1760,e,.06,.1,"sine"):i==="drop"&&Et(660,e,.07,.12,"triangle")}var dp=[0,2,4,7,9,12,14,16,19,21,24];function qn(i=0){if(!Zi())return;let e=Qe.currentTime,t=dp[Math.min(dp.length-1,i)],n=784*Math.pow(2,t/12);Et(n,e,.35,.16),Et(n*2,e,.2,.05),Et(n*3.01,e,.12,.03)}function Ji(){if(!Zi())return;let i=Qe.currentTime;[523,659,784,1047,1319].forEach((e,t)=>{Et(e,i+t*.09,.5,.14),Et(e*2,i+t*.09,.25,.04)})}function br(){if(!Zi())return;let i=Qe.currentTime;[392,330,262].forEach((e,t)=>Et(e,i+t*.13,.3,.12,"triangle"))}function mp(){if(!Zi())return;let i=Qe.currentTime;Mh(i,.18,.4,"highpass",2500),Et(1700,i,.1,.12),Et(2300,i+.03,.08,.1)}function vs(i=1){if(!Zi())return;let e=Qe.currentTime,t=Qe.createBufferSource();t.buffer=Wa;let n=Qe.createBiquadFilter();n.type="bandpass",n.Q.value=1.2,n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(1800,e+.25);let s=Qe.createGain();vh(s,e,.06,.2*i,.25),t.connect(n),n.connect(s),s.connect(xs),t.start(e),t.stop(e+.4)}function Ki(i=15){if(qt.vib&&navigator.vibrate)try{navigator.vibrate(i)}catch{}}var fp=[0,3,5,7,10],pp=[[0,7],[-4,3],[-2,5],[-7,0]];function _c(i){qt.musicOn=i}function gp(){if(!Qe||Qe.state!=="running"||!qt.musicOn||!qt.music)return;let i=Qe.currentTime,e=.36;for(qt.nextNote<i&&(qt.nextNote=i+.05);qt.nextNote<i+.25;){let t=qt.step,n=qt.nextNote,s=pp[Math.floor(t/16)%pp.length];t%8===0&&Et(110*Math.pow(2,s[0]/12),n,1.6,.16,"sine",Ti),t%16===8&&Et(110*Math.pow(2,s[1]/12),n,1.2,.1,"sine",Ti);let r=(t*7+Math.floor(t/16)*3)%11;if(r<5&&Math.random()<.8){let a=fp[(r+Math.floor(t/4))%fp.length]+12*(Math.random()<.3?1:0),o=440*Math.pow(2,(a+s[0])/12);Et(o,n,.6,.07,"sine",Ti),Et(o*4,n,.08,.012,"sine",Ti)}qt.step++,qt.nextNote+=e}}var vc=class extends En{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Qt;e.deleteAttribute("uv");let t=new ut({side:en}),n=new ut,s=new Ei(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Oe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Fi(e,n,6),o=new Nt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Oe(e,Er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Oe(e,Er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Oe(e,Er(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new Oe(e,Er(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Oe(e,Er(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let h=new Oe(e,Er(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Er(i){return new Ma({color:0,emissive:16777215,emissiveIntensity:i})}function Mc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new vt,c=0;for(let u=0;u<i.length;++u){let f=i[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,f=[];for(let d=0;d<i.length;++d){let h=i[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=xp(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][d]);let g=xp(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function xp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Ht(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){let v=u.getComponent(d,g);o.setComponent(d+f,g,v)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var _n={kirmizi:{name:"K\u0131z\u0131l Kedig\xF6z\xFC",kind:"cateye",tint:16773870,core:[15212843,16738877],sym:"\u2665"},mavi:{name:"Deniz Kedig\xF6z\xFC",kind:"cateye",tint:15660799,core:[1859552,3651327],sym:"\u25CF"},yesil:{name:"\xC7imen Girdab\u0131",kind:"swirl",tint:15400943,core:[1288266,10217546,16777215],sym:"\u25B2"},sari:{name:"Limon Girdab\u0131",kind:"swirl",tint:16776168,core:[16761856,16747008,16777215],sym:"\u2605"},mor:{name:"Erik Kedig\xF6z\xFC",kind:"cateye",tint:16183039,core:[9055202,14703871],sym:"\u25C6"},turuncu:{name:"Mandalina",kind:"swirl",tint:16774120,core:[16738816,16765088,12595200],sym:"\u25A0"},opal:{name:"S\xFCt Opal",kind:"opal",tint:16052716,core:[16766696,13168895,16774336]},celik:{name:"\xC7elik Bilye",kind:"metal",tint:14278115},altin:{name:"Alt\u0131n Bilye",kind:"metal",tint:16760906},lav:{name:"Lav Bilye",kind:"lava",tint:2757648,core:[16734720,16764730]},buz:{name:"Buz Bilye",kind:"ice",tint:14217983,core:[16777215,10476799]},galaksi:{name:"Galaksi",kind:"galaxy",tint:15132927,core:[722736,6962431,16732120]},gokkusagi:{name:"G\xF6kku\u015Fa\u011F\u0131",kind:"swirl",tint:16777215,core:[16726843,16756736,16773632,3074154,3116031,10898431]},okyanus:{name:"Okyanus",kind:"swirl",tint:15268863,core:[28298,49863,16777215]},gece:{name:"Gece Kedig\xF6z\xFC",kind:"cateye",tint:15329778,core:[1118498,16765498]},gul:{name:"G\xFCl Girdab\u0131",kind:"swirl",tint:16773365,core:[16732043,16777215,11534394]}},Ms={mavi:{mass:1,power:1,fric:1,guide:1,price:0,note:"Dengeli, her i\u015Fe yarar."},okyanus:{mass:1,power:1.08,fric:.9,guide:1.1,price:12,note:"Biraz daha uza\u011Fa gider."},celik:{mass:1.9,power:.92,fric:1.15,guide:1,price:30,note:"A\u011F\u0131r: vurdu\u011Funu uza\u011Fa savurur, kendisi az kayar."},galaksi:{mass:1,power:1,fric:1,guide:1.8,aimHit:!0,price:45,note:"Vuraca\u011F\u0131n bilyenin gidece\u011Fi y\xF6n\xFC g\xF6sterir."},lav:{mass:1.3,power:1.18,fric:1.05,guide:1,price:60,note:"G\xFC\xE7l\xFC at\u0131\u015F, hafif a\u011F\u0131r."},altin:{mass:1.5,power:1.12,fric:.95,guide:1.4,aimHit:!0,price:100,note:"A\u011F\u0131r, g\xFC\xE7l\xFC ve ni\u015Fan\u0131 g\xF6sterir. \u015Eampiyon bilyesi."}};var Ec={lite:!1};function Mp(i,e){Ec.lite=e;let t=new fc({canvas:i,antialias:!0,powerPreference:"high-performance",alpha:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.25:2)),t.toneMapping=Aa,t.toneMappingExposure=.92,t.outputColorSpace=an,t.shadowMap.enabled=!e,t.shadowMap.type=hs,t}var Sc=null;function Sp(i){if(Sc)return Sc;let e=new xr(i);return Sc=e.fromScene(new vc,.035).texture,e.dispose(),Sc}function tn(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let a=new aa(s);return a.colorSpace=n.linear?Wn:an,a.anisotropy=4,n.repeat&&(a.wrapS=a.wrapT=ki,a.repeat.set(n.repeat[0],n.repeat[1])),a}function $n(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Tc=i=>"#"+new Ue(i).getHexString();function yp(i,e){let t=$n(e);return tn(512,256,(n,s,r)=>{n.fillStyle=Tc(i[i.length-1]),n.fillRect(0,0,s,r);let a=7+Math.floor(t()*4);for(let o=0;o<a;o++){let l=i[o%i.length],c=t()*Math.PI*2,u=20+t()*50,f=10+t()*26,d=t()*r;n.fillStyle=Tc(l),n.globalAlpha=.9,n.beginPath();for(let h=0;h<=s;h+=4){let g=d+Math.sin(h/s*Math.PI*2*2+c)*u;h===0?n.moveTo(h,g):n.lineTo(h,g)}for(let h=s;h>=0;h-=4){let g=d+f+Math.sin(h/s*Math.PI*2*2+c+.4)*u;n.lineTo(h,g)}n.closePath(),n.fill()}n.globalAlpha=1})}function Mv(i,e){let t=$n(e);return tn(512,256,(n,s,r)=>{n.fillStyle=Tc(i[0]),n.fillRect(0,0,s,r);for(let a=0;a<9;a++){let o=t()*s,l=t()*r,c=40+t()*90,u=n.createRadialGradient(o,l,0,o,l,c),f=new Ue(i[1+a%(i.length-1)]);u.addColorStop(0,`rgba(${f.r*255|0},${f.g*255|0},${f.b*255|0},0.55)`),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}for(let a=0;a<260;a++){n.fillStyle=`rgba(255,255,255,${.4+t()*.6})`;let o=t()<.1?2.2:1.1;n.fillRect(t()*s,t()*r,o,o)}})}function _p(i,e,t){let n=$n(e);return tn(512,256,(s,r,a)=>{if(s.fillStyle=t?"#000":"#1a0d08",s.fillRect(0,0,r,a),!t)for(let o=0;o<400;o++)s.fillStyle=`rgba(${60+n()*40},${30+n()*20},20,0.5)`,s.fillRect(n()*r,n()*a,3+n()*8,3+n()*8);s.lineCap="round";for(let o=0;o<26;o++){let l=n()*r,c=n()*a;s.strokeStyle=Tc(i[o%2]),s.lineWidth=t?3+n()*4:2+n()*3,s.beginPath(),s.moveTo(l,c);for(let u=0;u<6;u++)l+=(n()-.5)*70,c+=(n()-.5)*50,s.lineTo(l,c);s.stroke()}})}function Sv(i,e){let t=$n(e);return tn(256,128,(n,s,r)=>{n.fillStyle="#f7f4ef",n.fillRect(0,0,s,r);for(let a=0;a<30;a++){let o=t()*s,l=t()*r,c=10+t()*40,u=n.createRadialGradient(o,l,0,o,l,c),f=new Ue(i[a%i.length]);u.addColorStop(0,`rgba(${f.r*255|0},${f.g*255|0},${f.b*255|0},0.7)`),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}})}var bc=null;function bv(){if(bc)return bc;let i=new Oi(1,48,32),e=new Oi(.76,32,20),t=[];for(let n=0;n<3;n++){let s=new bi;s.moveTo(0,-.86),s.quadraticCurveTo(.42,0,0,.86),s.quadraticCurveTo(-.42,0,0,-.86);let r=new _a(s,16),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),u=c*1.1;a.setXYZ(o,l*Math.cos(u),c,l*Math.sin(u))}r.rotateY(n*Math.PI/3),r.computeVertexNormals(),t.push(r)}return bc={shell:i,core:e,vane:Mc(t)},bc}var Sh=new Map;function Ev(i){let e=i+(Ec.lite?":l":":h");if(Sh.has(e))return Sh.get(e);let t=_n[i]||_n.mavi,n=[...i].reduce((a,o)=>a*31+o.charCodeAt(0),7),s=(a={})=>Ec.lite?new xn({color:t.tint,roughness:.04,metalness:0,transparent:!0,opacity:.32,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,depthWrite:!1,...a.lite}):new xn({color:t.tint,roughness:.03,metalness:0,transmission:1,thickness:1.4,ior:1.5,attenuationColor:t.tint,attenuationDistance:2.5,specularIntensity:1,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4,...a.high}),r;switch(t.kind){case"cateye":r={shell:s(),inner:new ut({color:t.core[0],emissive:t.core[1],emissiveIntensity:.12,roughness:.3,side:Bt}),innerGeo:"vane"};break;case"swirl":r={shell:s(),inner:new ut({map:yp(t.core,n),roughness:.3,color:14540253}),innerGeo:"core"};break;case"galaxy":{let a=Mv(t.core,n);r={shell:s(),inner:new ut({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.9,roughness:.5}),innerGeo:"core"};break}case"lava":r={shell:s({high:{color:16756864,attenuationColor:16738848,attenuationDistance:1.5},lite:{color:16751200,opacity:.25}}),inner:new ut({map:_p(t.core,n,!1),emissiveMap:_p(t.core,n,!0),emissive:16777215,emissiveIntensity:2.2,roughness:.6}),innerGeo:"core"};break;case"ice":r={shell:s({high:{roughness:.32,thickness:2,attenuationDistance:1.2},lite:{opacity:.55,roughness:.3}}),inner:new ut({map:yp(t.core,n),roughness:.2,transparent:!0,opacity:.8}),innerGeo:"core"};break;case"opal":r={shell:new xn({map:Sv(t.core,n),roughness:.25,clearcoat:1,clearcoatRoughness:.04,sheen:1,sheenColor:13166847,iridescence:Ec.lite?0:.6,envMapIntensity:1.2})};break;case"metal":r={shell:new xn({color:t.tint,metalness:1,roughness:.12,clearcoat:.6,envMapIntensity:1.5})};break}return Sh.set(e,r),r}function di(i,e=.5,t={}){let n=bv(),s=Ev(i),r=new St,a=new St;if(r.add(a),s.inner){let l=new Oe(n[s.innerGeo],s.inner);a.add(l)}let o=new Oe(n.shell,s.shell);return o.castShadow=!t.noShadow,o.renderOrder=2,a.add(o),r.scale.setScalar(e),r.userData={spin:a,id:i,r:e},a.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),r}var bh=new k,vp=new mn;function Eh(i,e,t){let n=Math.hypot(e,t);n<1e-6||(bh.set(t/n,0,-e/n),vp.setFromAxisAngle(bh,n/i.userData.r),i.userData.spin.quaternion.premultiply(vp))}function bp(i,e){i.userData.spin.rotateOnWorldAxis(bh.set(0,0,1),-e/i.userData.r)}function Ss(i=3,e="#9a6236",t="#6e3f1f",n=512,s=512,r){let a=$n(i);return tn(n,s,(o,l,c)=>{o.fillStyle=e,o.fillRect(0,0,l,c);for(let u=0;u<90;u++){let f=a()*c;o.strokeStyle=t,o.globalAlpha=.08+a()*.18,o.lineWidth=1+a()*3,o.beginPath(),o.moveTo(0,f);for(let d=0;d<=l;d+=16)o.lineTo(d,f+Math.sin(d/70+u)*4+(a()-.5)*2);o.stroke()}for(let u=0;u<4;u++){let f=a()*l,d=a()*c;o.globalAlpha=.25,o.fillStyle=t,o.beginPath(),o.ellipse(f,d,14+a()*10,5+a()*4,0,0,7),o.fill()}o.globalAlpha=1},{repeat:r})}function bs(i=16777215,e=1){let t=tn(128,128,s=>{let r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.25,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128)}),n=new ea(new tr({map:t,color:i,blending:hr,depthWrite:!1,transparent:!0}));return n.scale.setScalar(e),n}var ji=class{constructor(e,t=300){this.max=t,this.list=[];let n=new vt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),n.setAttribute("position",new Ht(this.pos,3)),n.setAttribute("color",new Ht(this.col,3)),n.setAttribute("size",new Ht(this.size,1));let s=tn(64,64,a=>{let o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),r=new fn({uniforms:{map:{value:s},scale:{value:300}},vertexShader:"attribute float size; attribute vec3 color; varying vec3 vC; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a, t.a); }",transparent:!0,depthWrite:!1,blending:hr});this.mesh=new sa(n,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh)}emit(e,t,n,s,r={}){let a=new Ue(r.color??16777215);for(let o=0;o<s&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,c=Math.random()*2-1,u=(r.speed??2)*(.3+Math.random()*.7),f=Math.sqrt(1-c*c);this.list.push({x:e,y:t,z:n,vx:Math.cos(l)*f*u,vy:Math.abs(c)*u*(r.up??1),vz:Math.sin(l)*f*u*(r.flatZ??1),life:(r.life??.6)*(.6+Math.random()*.6),age:0,size:(r.size??.3)*(.6+Math.random()*.8),g:r.gravity??3,r:a.r,gg:a.g,b:a.b,drag:r.drag??1.5})}}update(e){let t=this.list;for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.age+=e,r.age>r.life){t[s]=t[t.length-1],t.pop();continue}let a=Math.exp(-r.drag*e);r.vx*=a,r.vz*=a,r.vy=r.vy*a-r.g*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e}for(let s=0;s<this.max;s++){let r=t[s];if(!r){this.size[s]=0;continue}let a=1-r.age/r.life;this.pos[s*3]=r.x,this.pos[s*3+1]=r.y,this.pos[s*3+2]=r.z,this.col[s*3]=r.r*a,this.col[s*3+1]=r.gg*a,this.col[s*3+2]=r.b*a,this.size[s]=r.size}let n=this.mesh.geometry;n.attributes.position.needsUpdate=n.attributes.color.needsUpdate=n.attributes.size.needsUpdate=!0}setScale(e){this.mesh.material.uniforms.scale.value=e*.5}};function wi(i,e,t,n){let s=Yi.degToRad(i.fov)/2,r=t/2/Math.tan(s),a=e/2/(Math.tan(s)*n);return Math.max(r,a)}var kt=(i,e=document)=>e.querySelector(i);function Nn(i){let e=document.createElement("div");return e.innerHTML=i.trim(),e.firstElementChild}var Ac=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Ep=0;function It(i,e=2400){let t=kt("#toast");t.textContent=i,t.classList.add("on"),clearTimeout(Ep),Ep=setTimeout(()=>t.classList.remove("on"),e)}var Tv=[];function Vt(i,e=[],t={}){let n=kt("#modal");n.innerHTML=`<div class="card ${t.wide?"wide":""}">${i}<div class="mbtns"></div></div>`;let s=n.querySelector(".mbtns");for(let[r,a,o]of e){let l=document.createElement("button");l.className="btn "+(a||""),l.innerHTML=r,l.onclick=c=>{c.stopPropagation(),ft("tap"),(o?o(l):void 0)!==!1&&n.contains(l)&&!t.keep&&Ut()},s.appendChild(l)}return n.classList.add("on"),n.onclick=r=>{r.target===n&&t.dismiss!==!1&&(Ut(),t.onClose&&t.onClose())},Tv=[t.onClose],n.querySelector(".card")}function Ut(){let i=kt("#modal");i.classList.remove("on"),i.innerHTML=""}var Rc=()=>kt("#modal").classList.contains("on");function Th(){_h(dt.data.settings)}function qa(i,e){let t=dt.data.settings,n=r=>r?z("A\xE7\u0131k"):z("Kapal\u0131");Vt(`<h2>${z("Ayarlar")}</h2>
    <div class="setgrid">
      <button class="btn tog" data-k="lang">\u{1F310} ${Xn()==="tr"?"T\xFCrk\xE7e":"English"}</button>
      <button class="btn tog" data-k="sound">\u{1F50A} ${z("Ses")}: ${n(t.sound)}</button>
      <button class="btn tog" data-k="music">\u{1F3B5} ${z("M\xFCzik")}: ${n(t.music)}</button>
      <button class="btn tog" data-k="vib">\u{1F4F3} ${z("Titre\u015Fim")}: ${n(t.vib)}</button>
      <button class="btn tog" data-k="lite">\u26A1 ${z("Hafif g\xF6r\xFCnt\xFC")}: ${n(i.lite)}</button>
      <button class="btn tog" data-k="backup">\u{1F4BE} ${z("Kayd\u0131 yedekle / geri y\xFCkle")}</button>
      ${Ha?"":`<button class="btn tog" data-k="install">\u{1F4F2} ${z("Uygulama olarak y\xFCkle")}</button>`}
    </div>
    <p class="note">${z("Hafif g\xF6r\xFCnt\xFC eski ve yava\u015F telefonlarda oyunu ak\u0131c\u0131 yapar.")}</p>
    <p class="ver">Bilye At\xF6lyesi ${"v6"}</p>`,[[z("Tamam"),"pri",()=>e&&e()]],{onClose:e}).querySelectorAll("[data-k]").forEach(r=>r.onclick=()=>{ft("toggle");let a=r.dataset.k;if(a==="lang")_r(Xn()==="tr"?"en":"tr"),t.lang=Xn(),bt(),i.relabel();else if(a==="lite"){t.lite=!i.lite,bt(),It(z("De\u011Fi\u015Fiklik i\xE7in oyun yeniden a\xE7\u0131l\u0131yor\u2026")),setTimeout(()=>location.reload(),700);return}else if(a==="backup"){Av(i,()=>qa(i,e));return}else if(a==="install"){Ap(i,()=>qa(i,e));return}else t[a]=!t[a],Th();Gt(),qa(i,e)})}async function wv(i){try{return await navigator.clipboard.writeText(i),!0}catch{let t=document.createElement("textarea");t.value=i,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{}return t.remove(),n}}function Av(i,e){let t=Vt(`<h2>\u{1F4BE} ${z("Kay\u0131t yede\u011Fi")}</h2>
    <p class="lead">${z("\u0130lerlemen bu cihaz\u0131n taray\u0131c\u0131s\u0131nda saklan\u0131r. Taray\u0131c\u0131 verisi silinirse kay\u0131t da gider. Kay\u0131t kodunu bir yere not et; ba\u015Fka cihazda ya da y\xFCklenen uygulamada geri y\xFCkleyebilirsin.")}</p>
    <textarea id="bkCode" rows="3" placeholder="${z("Kay\u0131t kodunu buraya yap\u0131\u015Ft\u0131r")}"></textarea>`,[[z("Kayd\u0131m\u0131 kopyala"),"pri",()=>(Cc(),!1)],[z("Kayd\u0131 geri y\xFCkle"),"",()=>{let n=t.querySelector("#bkCode").value;if(!up(n))return It(z("Kod ge\xE7ersiz. Tamam\u0131n\u0131 kopyalad\u0131\u011F\u0131ndan emin ol.")),ft("no"),!1;It(z("Kay\u0131t geri y\xFCklendi!")),setTimeout(()=>location.reload(),600)}],[z("Geri"),"ghost",()=>e&&e()]],{onClose:e})}async function Cc(){let i=await wv(cp());dt.data.backupAt=Date.now(),bt(),It(i?z("Kay\u0131t kodu kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r."):z("Kopyalanamad\u0131; kodu elle se\xE7."))}var wc=navigator.userAgent,Za=/iPad|iPhone|iPod/.test(wc)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Rv=/iPad/.test(wc)||Za&&!/iPhone|iPod/.test(wc),Cv=/Android/i.test(wc),wp=Za||Cv||matchMedia("(pointer: coarse)").matches,Ic=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,Iv=()=>wp?Math.min(screen.width,screen.height)>=600?z("TABLET\u0130ME"):z("TELEFONUMA"):z("B\u0130LG\u0130SAYARIMA"),$a=null;addEventListener("beforeinstallprompt",i=>{i.preventDefault(),$a=i});addEventListener("appinstalled",()=>{dt.data.install="installed",bt(),$a=null,It(z("Bilye At\xF6lyesi y\xFCklendi! Ana ekran\u0131ndan a\xE7abilirsin."))});async function Ap(i,e){if(Ic()){It(z("Oyun zaten uygulama olarak a\xE7\u0131k")),e&&e();return}if($a){let t=$a;$a=null;try{t.prompt(),(await t.userChoice).outcome==="accepted"?(dt.data.install="installed",bt(),It(z("Y\xFCkleniyor\u2026 ana ekran\u0131nda simge belirecek"))):It(z("Y\xFCkleme iptal edildi \xB7 Ayarlar \u2192 Uygulama olarak y\xFCkle"))}catch{}e&&e();return}Dv(i,e)}var Tr=(i,e,t)=>`<div class="inStep"><b>${i}</b><span class="inIco">${e}</span><p>${t}</p></div>`,Pv='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2f6fd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>',Tp='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',Lv='<svg viewBox="0 0 24 24" width="28" height="28" fill="#333"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function Dv(i,e){let t;Za?t=`<p class="lead">${z("iPhone ve iPad'de kurulum Safari'nin Ana Ekrana Ekle \xF6zelli\u011Fiyle yap\u0131l\u0131r:")}</p>`+Tr(1,Pv,Rv?z("Adres \xE7ubu\u011Funun sa\u011F\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas."):z("Ekran\u0131n alt\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas."))+Tr(2,Tp,z("Men\xFCy\xFC yukar\u0131 kayd\u0131r, Ana Ekrana Ekle'ye bas."))+Tr(3,'<b class="inWord">'+z("Ekle")+"</b>",z("Sa\u011F \xFCstteki Ekle'ye bas. Oyun ana ekran\u0131nda belirir."))+`<p class="note">${z("Ana ekran uygulamas\u0131 taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \u0130lerlemen varsa \xF6nce Kayd\u0131m\u0131 kopyala, uygulamay\u0131 ilk a\xE7\u0131nca Ayarlar \u2192 Kayd\u0131 yedekle / geri y\xFCkle ile yap\u0131\u015Ft\u0131r.")}</p>`:t=`<p class="lead">${z("Taray\u0131c\u0131n kurulum penceresini \u015Fu an a\xE7mad\u0131. Elle y\xFCklemek kolay:")}</p>`+Tr(1,Lv,z("Taray\u0131c\u0131n\u0131n men\xFCs\xFCn\xFC (\u22EE) a\xE7."))+Tr(2,Tp,z("Uygulamay\u0131 y\xFCkle ya da Ana ekrana ekle'ye bas."))+Tr(3,'<b class="inWord">'+z("Y\xFCkle")+"</b>",z("Onayla. Oyun ana ekran\u0131nda ve uygulama listende belirir."))+`<p class="note">${z("Se\xE7enek yoksa oyunu Chrome, Edge ya da Samsung Internet ile a\xE7.")}</p>`,Vt(`<h2>\u{1F4F2} ${z("Uygulama olarak y\xFCkle")}</h2>${t}`,[...xc()?[[z("Kayd\u0131m\u0131 kopyala"),"",()=>(Cc(),!1)]]:[],[z("Tamam"),"pri",()=>e&&e()]],{onClose:e})}function Rp(){return!Ha&&!Ic()&&wp&&!dt.data.install}function wh(i,e){Vt(`<div class="logoBall"></div><h2 class="center">${z("Bilye At\xF6lyesi")}</h2>
    <p class="lead center">${z("Ana ekran\u0131na ekle: tek dokunu\u015Fla a\xE7, internetsiz de oyna.")}</p>`,[[`\u{1F4F2} ${z("OYUNU {cihaz} Y\xDCKLE",{cihaz:Iv()})}`,"pri",()=>{dt.data.install="asked",Gt(),Ap(i,e)}],[`\u{1F3AE} ${z("Y\xDCKLEMEDEN OYNA")}`,"",()=>{dt.data.install="skip",Gt(),e()}],[`\u{1F310} ${Xn()==="tr"?"English":"T\xFCrk\xE7e"}`,"ghost",()=>{_r(Xn()==="tr"?"en":"tr"),dt.data.settings.lang=Xn(),Gt(),i.relabel(),wh(i,e)}]],{dismiss:!1})}var Tt={ringR:5.4,yardR:9.4,decel:2.4,drag:.22,rest:.9,wallRest:.45,maxSpeed:26,dt:.004166666666666667};function Ah(i,e,t){for(let s of i){if(s.off)continue;let r=Math.hypot(s.vx,s.vz);if(r>0){let o=Math.max(0,r-(Tt.decel*s.fric+Tt.drag*r)*e)/r;s.vx*=o,s.vz*=o,s.x+=s.vx*e,s.z+=s.vz*e}}let n=i.length;for(let s=0;s<n;s++){let r=i[s];if(!r.off)for(let a=s+1;a<n;a++){let o=i[a];if(o.off)continue;let l=r.x-o.x,c=r.z-o.z,u=r.r+o.r,f=l*l+c*c;if(f>=u*u||f===0)continue;let d=Math.sqrt(f),h=l/d,g=c/d,v=u-d,m=1/r.m+1/o.m;r.x+=h*v*(1/r.m)/m,r.z+=g*v*(1/r.m)/m,o.x-=h*v*(1/o.m)/m,o.z-=g*v*(1/o.m)/m;let p=(r.vx-o.vx)*h+(r.vz-o.vz)*g;if(p>=0)continue;let w=-(1+Tt.rest)*p/m;r.vx+=w/r.m*h,r.vz+=w/r.m*g,o.vx-=w/o.m*h,o.vz-=w/o.m*g,t&&t.push({a:s,b:a,j:w})}}for(let s of i){if(s.off)continue;let r=Math.hypot(s.x,s.z),a=Tt.yardR-s.r;if(r>a){let o=s.x/r,l=s.z/r,c=s.vx*o+s.vz*l;s.x=o*a,s.z=l*a,c>0&&(s.vx-=(1+Tt.wallRest)*c*o,s.vz-=(1+Tt.wallRest)*c*l,t&&t.push({a:i.indexOf(s),b:-1,j:c*s.m}))}}}var Rh=i=>i.every(e=>e.off||Math.hypot(e.vx,e.vz)<.03),wr=i=>Math.hypot(i.x,i.z)<Tt.ringR;function Cp(i,e=8){let t=i.map(s=>({...s})),n=0;for(;n<e&&(Ah(t,Tt.dt),!(n>.1&&Rh(t)));n+=Tt.dt);return t}var Ch={toprak:{name:"Toprak Avlu",ground:"dirt",curb:"brick"},asfalt:{name:"Arka Sokak",ground:"asphalt",curb:"concrete"},parke:{name:"\xC7ar\u015F\u0131 Meydan\u0131",ground:"cobble",curb:"stone"}},fi=[{id:"ayse",name:"Ay\u015Fe",ground:"toprak",targets:7,noise:9,pick:4,color:"#ff7aa8",prize:"gul",line:"Yeni misin? Kolay gelsin!"},{id:"mert",name:"Mert",ground:"toprak",targets:9,noise:6.5,pick:3,color:"#4fb3ff",prize:"okyanus",line:"Benim bilyelerim hep uza\u011Fa gider."},{id:"deniz",name:"Deniz",ground:"asfalt",targets:9,noise:5,pick:3,color:"#3ed6a0",prize:"opal",line:"Asfaltta bilye h\u0131zl\u0131 kayar, dikkat et."},{id:"kerem",name:"Kerem",ground:"asfalt",targets:11,noise:3.6,pick:2,color:"#ffb340",prize:"celik",line:"\xC7elik bilyemle herkesi da\u011F\u0131t\u0131r\u0131m."},{id:"elif",name:"Elif",ground:"parke",targets:11,noise:2.6,pick:2,color:"#b48cff",prize:"galaksi",line:"Ni\u015Fan almak bir sanatt\u0131r."},{id:"bora",name:"Bora",ground:"parke",targets:13,noise:1.6,pick:1,color:"#ffd23a",prize:"altin",line:"Mahallenin \u015Fampiyonu benim. Hadi bakal\u0131m!"}],Ja=["kirmizi","mavi","yesil","sari","mor","turuncu","gece","okyanus","gul"];var Pc=.5,Ip=new k,Lc=new k,Ih=new k,Nv=new k(0,1,0),Uv=new ct,Pp=17;function kv(i){let e=$n(i.length*17+3);return tn(1024,1024,(t,n,s)=>{if(i==="dirt"){t.fillStyle="#6e4f33",t.fillRect(0,0,n,s);for(let r=0;r<9e3;r++){let a=e();t.fillStyle=`rgba(${70+a*70|0},${48+a*50|0},${28+a*34|0},${.25+e()*.35})`;let o=1+e()*5;t.fillRect(e()*n,e()*s,o,o)}for(let r=0;r<260;r++){let a=e()*n,o=e()*s,l=2+e()*6,c=e();t.fillStyle=`rgba(${120+c*50|0},${105+c*45|0},${88+c*40|0},0.95)`,t.beginPath(),t.ellipse(a,o,l,l*(.6+e()*.4),e()*3,0,7),t.fill(),t.fillStyle="rgba(40,25,10,0.35)",t.beginPath(),t.ellipse(a+1.5,o+2,l,l*.5,0,0,7),t.fill()}t.strokeStyle="rgba(60,40,20,0.25)";for(let r=0;r<30;r++){t.lineWidth=1+e()*2,t.beginPath();let a=e()*n,o=e()*s;t.moveTo(a,o);for(let l=0;l<5;l++)a+=(e()-.5)*60,o+=(e()-.5)*60,t.lineTo(a,o);t.stroke()}}else if(i==="asphalt"){t.fillStyle="#4a4c50",t.fillRect(0,0,n,s);for(let r=0;r<3e4;r++){let a=e();t.fillStyle=`rgba(${50+a*90|0},${52+a*90|0},${56+a*90|0},0.5)`,t.fillRect(e()*n,e()*s,1.5,1.5)}t.strokeStyle="rgba(20,20,22,0.5)";for(let r=0;r<12;r++){t.lineWidth=1.5,t.beginPath();let a=e()*n,o=e()*s;t.moveTo(a,o);for(let l=0;l<8;l++)a+=(e()-.5)*50,o+=(e()-.5)*50,t.lineTo(a,o);t.stroke()}for(let r=0;r<5;r++)t.fillStyle="rgba(30,30,35,0.25)",t.beginPath(),t.ellipse(e()*n,e()*s,40+e()*80,20+e()*50,e()*3,0,7),t.fill()}else{t.fillStyle="#3a332d",t.fillRect(0,0,n,s);let r=22,a=n/r;for(let o=0;o<r;o++)for(let l=0;l<r;l++){let c=o%2*a/2,u=l*a+c+a/2,f=o*a+a/2,d=e();t.fillStyle=`rgb(${78+d*40|0},${72+d*36|0},${66+d*32|0})`;let h=(e()-.5)*3,g=t.fillStyle;for(let v of[0,-n,n]){t.fillStyle=g,t.beginPath(),t.roundRect(u+v-a*.45+h,f-a*.43,a*.9,a*.86,a*.22),t.fill();let m=t.createRadialGradient(u+v-a*.15,f-a*.15,0,u+v,f,a*.55);m.addColorStop(0,"rgba(255,255,255,0.18)"),m.addColorStop(1,"rgba(0,0,0,0.18)"),t.fillStyle=m,t.fill()}}}},{repeat:i==="cobble"?[4,4]:[2,2]})}function Fv(){let i=$n(91);return tn(1024,64,(e,t,n)=>{e.clearRect(0,0,t,n);for(let s=0;s<9e3;s++){let r=n/2+(i()-.5)*n*.7*i();e.fillStyle=`rgba(255,255,250,${.45+i()*.55})`,e.fillRect(i()*t,r,1+i()*3,1+i()*2)}})}function Ph(i){let e=new En,t=new Pt(36,1,.1,200),n=vr("misket");n.coins??(n.coins=0),n.wins??(n.wins={}),n.owned??(n.owned=["mavi"]),n.shooter??(n.shooter="mavi"),e.background=new Ue(2827296),e.fog=new Jr(2827296,28,60),e.add(new zn(16773853,4864554,.5));let s=new li(16769720,2);s.position.set(-8,16,6),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:50}),s.shadow.bias=-4e-4,s.shadow.radius=3,e.add(s);let r=new li(10470655,.6);r.position.set(10,6,-12),e.add(r);let a={},o=new Oe(new Si(40,64),new ut({roughness:.95}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o);let l=new Oe(new cs(Tt.ringR-.13,Tt.ringR+.13,160,1),new Zt({map:Fv(),transparent:!0,depthWrite:!1,opacity:1}));{let F=l.geometry.attributes.uv,G=l.geometry.attributes.position;for(let X=0;X<F.count;X++){let H=Math.atan2(G.getY(X),G.getX(X)),Q=Math.hypot(G.getX(X),G.getY(X));F.setXY(X,(H/Math.PI+1)*6,Q>Tt.ringR?1:0)}}l.material.map.wrapS=ki,l.rotation.x=-Math.PI/2,l.position.y=.012,e.add(l);let c=new St;e.add(c);function u(F){c.clear();let G=64,X=Tt.yardR+.45,H=new Qt(1.25,.7,.8),Q=F==="brick"?10504239:F==="concrete"?10132118:8221800,re=new ut({color:Q,roughness:.9}),de=new Fi(H,re,G),U=new ct,ye=new mn,b=new Ue,N=$n(5);for(let J=0;J<G;J++){let q=J/G*Math.PI*2;ye.setFromAxisAngle(new k(0,1,0),-q+Math.PI/2),U.compose(new k(Math.cos(q)*X,.3,Math.sin(q)*X),ye,new k(1,.9+N()*.2,1)),de.setMatrixAt(J,U),de.setColorAt(J,b.set(Q).multiplyScalar(.85+N()*.3))}de.castShadow=de.receiveShadow=!0,c.add(de)}let f=new ji(e,260),d=new St;e.add(d);let h=new Oi(.07,8,6),g=new Zt({color:16777215,transparent:!0,opacity:.85}),v=new Fi(h,g,60);v.count=0,d.add(v);let m=new Oe(new cs(.42,.5,40),new Zt({color:16777215,transparent:!0,opacity:.6,side:Bt}));m.rotation.x=-Math.PI/2,d.add(m);let p=new Oe(new ai(.08,1),new Zt({color:16765498,transparent:!0,opacity:.8,side:Bt}));d.add(p);let w=new Oe(new la(.28,.6,16),new Zt({color:8191882}));d.add(w);let L=bs(16773544,2.2);L.visible=!1,e.add(L);let M=new Oe(new cs(Tt.ringR+.15,Tt.ringR+1.05,160,1),new Zt({color:16774344,transparent:!0,opacity:.12,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.01,e.add(M);let _=null,T=[],D="idle",y=null,I=null,B=0,V=1,Y=0,ee=0,C=null,Z=[],ae=!1,oe=[],fe=Nn('<div class="mhud"></div>'),te=new k,he=new k(0,0,.6),ce=0,Ee=()=>fi.find(F=>F.id===_.opp),Ce=F=>Ms[F]||Ms.mavi;function et(F){Ut();let G=fi.find(de=>de.id===F),X=$n(Date.now()&65535),H=[],Q=G.targets,re=[[0,0]];for(let de=1;re.length<Q;de++)for(let U=0;U<4&&re.length<Q;U++){let ye=U*Math.PI/2+(de%2?0:Math.PI/4),b=de*1.15+(de%2?0:.4);re.push([Math.cos(ye)*b,Math.sin(ye)*b])}re.forEach(([de,U],ye)=>H.push({kind:"target",id:Ja[Math.floor(X()*Ja.length)],x:de+(X()-.5)*.12,z:U+(X()-.5)*.12,vx:0,vz:0,r:Pc,m:1,fric:1})),_={opp:F,bodies:H,cap:{p:0,a:0},capIds:{p:[],a:[]},turn:"p",phase:"place",lineAng:Math.PI/2,aiShooter:G.prize==="altin"?"altin":G.id==="kerem"?"celik":"mavi",shots:0},Ye(),Te()}function Ye(){var G;for(let X of T)e.remove(X);T=[];let F=Ch[Ee().ground];a[G=F.ground]??(a[G]=kv(F.ground)),o.material.map=a[F.ground],o.material.needsUpdate=!0,o.material.roughness=F.ground==="asphalt"?.8:.95,o.material.color.setHex(F.ground==="cobble"?9209472:F.ground==="asphalt"?12632256:16777215),u(F.curb),e.background.set(F.ground==="asphalt"?2303531:F.ground==="cobble"?2762274:2827296),e.fog.color.copy(e.background);for(let X of _.bodies)je(X)}function je(F){let G=di(F.id,F.r);return G.position.set(F.x,F.r,F.z),e.add(G),T.push(G),G}function le(){return _.bodies.findIndex(F=>F.kind==="shooter")}function pe(){let F=le();F>=0&&(e.remove(T[F]),T.splice(F,1),_.bodies.splice(F,1))}function Te(){let F=_.turn,G=F==="p"?n.shooter:_.aiShooter,X=Ce(G),H=le();if(_.phase==="place"||H<0){pe();let Q=F==="p"?_.lineAng:_.aiLine??-Math.PI/2,re={kind:"shooter",owner:F,id:G,x:Math.cos(Q)*(Tt.ringR+.6),z:Math.sin(Q)*(Tt.ringR+.6),vx:0,vz:0,r:Pc,m:X.mass,fric:X.fric};_.bodies.push(re),je(re),_.phase="place"}D=F==="p"?_.phase:"ai",He(),A(),F==="a"?ve():n.tut||P()}function He(){!_||_.demo||_.done||(n.match=JSON.parse(JSON.stringify({opp:_.opp,bodies:_.bodies.filter(F=>!F.off),cap:_.cap,capIds:_.capIds,turn:_.turn,phase:_.phase,lineAng:_.lineAng,aiShooter:_.aiShooter,aiLine:_.aiLine,shots:_.shots})),n.match.bodies.forEach(F=>{F.vx=F.vz=0}),Gt())}function we(F){_.lineAng=F;let G=_.bodies[le()];G.x=Math.cos(F)*(Tt.ringR+.6),G.z=Math.sin(F)*(Tt.ringR+.6)}function ze(F,G){let X=_.bodies[le()],H=Ce(X.id),Q=(3+G*9)*H.guide,re=null;_.bodies.forEach((b,N)=>{if(b===X||b.off)return;let J=X.x-b.x,q=X.z-b.z,ge=X.r+b.r,xe=J*F.x+q*F.z,Le=J*J+q*q-ge*ge,Ae=xe*xe-Le;if(Ae<0)return;let xt=-xe-Math.sqrt(Ae);xt>0&&xt<Q&&(!re||xt<re.t)&&(re={t:xt,i:N})});let de=re?re.t:Q,U=new ct,ye=0;for(let b=.6;b<de&&ye<60;b+=.45,ye++)U.makeTranslation(X.x+F.x*b,.08,X.z+F.z*b),v.setMatrixAt(ye,U);if(v.count=ye,v.instanceMatrix.needsUpdate=!0,m.visible=!!re,p.visible=!1,re){let b=X.x+F.x*re.t,N=X.z+F.z*re.t;if(m.position.set(b,.03,N),H.aimHit){let J=_.bodies[re.i],q=J.x-b,ge=J.z-N,xe=Math.hypot(q,ge),Le=2.5+G*4;p.visible=!0,p.scale.y=Le,p.position.set(J.x+q/xe*Le/2,.04,J.z+ge/xe*Le/2),Lc.set(q/xe,0,ge/xe),Ih.set(0,1,0),Ip.crossVectors(Lc,Ih),p.quaternion.setFromRotationMatrix(Uv.makeBasis(Ip,Lc,Ih))}}w.position.set(X.x-F.x*(.9+G*1.6),.25,X.z-F.z*(.9+G*1.6)),w.quaternion.setFromUnitVectors(Nv,Lc.set(F.x,0,F.z)),w.material.color.setHSL(.33-G*.33,.9,.55),w.scale.setScalar(.7+G*.8),d.visible=!0}function tt(F,G,X){let H=_.bodies[le()],Q=Ce(H.id),re=Pp*Q.power*(.12+.88*G);H.vx=F.x*re,H.vz=F.z*re,D="roll",d.visible=!1,L.visible=!1,ae=!1,_.shots++,vs(.4+G*.6),Ki(12),kt(".mhint",fe)&&(kt(".mhint",fe).style.opacity=0),M.visible=!1,A()}function me(){let F=_.turn,G=_.bodies[le()],X=0;for(let re=0;re<_.bodies.length;re++){let de=_.bodies[re];de.kind!=="target"||de.off||wr(de)||(de.off=!0,X++,_.cap[F]++,_.capIds[F].push(de.id),oe.push({m:T[re],t:0,from:T[re].position.clone(),who:F}))}let H=Ee().targets,Q=Math.floor(H/2)+1;if(X&&(qn(Math.min(6,X+1)),F==="p"&&It(X>1?z("Harika! {n} bilye birden!",{n:X}):z("G\xFCzel at\u0131\u015F!"),1200)),_.cap.p>=Q||_.cap.a>=Q||_.cap.p+_.cap.a>=H){_.done=!0,n.match=null,bt(),setTimeout(()=>_e(_.cap.p>_.cap.a),900),D="over",A();return}X?(_.phase=G&&wr(G)?"knuckle":"place",_.phase==="place"&&pe()):(pe(),_.turn=F==="p"?"a":"p",_.phase="place",F==="p"&&It(z("Iskalad\u0131n, s\u0131ra {ad} da.",{ad:Ee().name}),1400));for(let re=_.bodies.length-1;re>=0;re--)_.bodies[re].off&&(_.bodies.splice(re,1),T.splice(re,1));setTimeout(Te,X?650:900),D="wait"}function _e(F){let G=Ee(),X=F&&!n.wins[G.id],H=_.cap.p;n.coins+=H,F&&(n.wins[G.id]=(n.wins[G.id]||0)+1,X&&!n.owned.includes(G.prize)&&Ms[G.prize]&&n.owned.push(G.prize),n.coll??(n.coll=[]),X&&!n.coll.includes(G.prize)&&n.coll.push(G.prize)),bt(),F?Ji():br(),F&&f.emit(0,1,0,120,{color:16765498,speed:9,life:1.4,size:.5,up:2,gravity:6});let Q=X?`<div class="prize"><div class="ball" style="${E(G.prize)}"></div><p>${z("\xD6d\xFCl: {ad}",{ad:z(_n[G.prize].name)})}${Ms[G.prize]?" \xB7 "+z("At\u0131c\u0131 olarak kullanabilirsin!"):""}</p></div>`:"";Vt(`<h2>${F?"\u{1F3C6} "+z("Kazand\u0131n!"):z("{ad} kazand\u0131",{ad:G.name})}</h2>
      <p class="lead center">${z("Skor")}: <b>${_.cap.p}</b> \u2013 <b>${_.cap.a}</b></p>
      <p class="center">+${H} ${z("misket")} \xB7 ${z("Toplam")}: ${Dn(n.coins)}</p>${Q}`,[[z("Tekrar oyna"),"pri",()=>et(G.id)],[z("Rakipler"),"",()=>$()]],{dismiss:!1}),A()}function Me(){return(Math.random()+Math.random()+Math.random()-1.5)/.5}function ve(){let F=Ee(),G=_.bodies[le()],X=Ce(G.id),H=[],Q=_.bodies.filter(de=>de.kind==="target"&&!de.off),re=_.phase==="place"?[...new Set([0,1,2,3,4,5].map(de=>de/6*Math.PI*2).concat(Q.slice(0,4).map(de=>Math.atan2(de.z,de.x))))]:[null];for(let de of re){let U=de===null?G.x:Math.cos(de)*(Tt.ringR+.6),ye=de===null?G.z:Math.sin(de)*(Tt.ringR+.6),b=[...Q].sort((N,J)=>Math.hypot(N.x-U,N.z-ye)-Math.hypot(J.x-U,J.z-ye)).slice(0,de===null?6:3);for(let N of b)for(let J of[-.45,0,.45])for(let q of[.6,.85,1])H.push({la:de,px:U,pz:ye,tb:N,off:J,pw:q})}C={cands:H,i:0,results:[],t:0,base:_.bodies.map(de=>({...de})),si:le(),st:X},D="ai",A()}function Se(F){let G=C;G.t+=F;let X=performance.now();for(;G.i<G.cands.length&&performance.now()-X<7;){let H=G.cands[G.i++],Q=G.base.map(wt=>({...wt})),re=Q[G.si];re.x=H.px,re.z=H.pz;let de=H.tb.x-H.px,U=H.tb.z-H.pz,ye=Math.hypot(de,U);de/=ye,U/=ye;let b=H.tb.x-U*H.off,N=H.tb.z+de*H.off,J=b-H.px,q=N-H.pz,ge=Math.hypot(J,q);J/=ge,q/=ge;let xe=Pp*G.st.power*(.12+.88*H.pw);re.vx=J*xe,re.vz=q*xe;let Le=Cp(Q,7),Ae=0;Le.forEach((wt,es)=>{wt.kind==="target"&&!wr(wt)&&wr(G.base[es])?Ae+=10:wt.kind==="target"&&(Ae+=Math.hypot(wt.x,wt.z)*.15)});let xt=Le[G.si];Ae>=10&&wr(xt)&&(Ae+=3),G.results.push({score:Ae+Math.random()*.5,c:H,ax:J,az:q,pw:H.pw})}if(G.i>=G.cands.length&&G.t>.9){let H=Ee();G.results.sort((N,J)=>J.score-N.score);let Q=G.results[Math.floor(Math.random()*Math.min(H.pick,G.results.length))];if(C=null,Q.c.la!==null){_.aiLine=Q.c.la;let N=_.bodies[le()];N.x=Q.c.px,N.z=Q.c.pz}let re=Math.atan2(Q.az,Q.ax)+Yi.degToRad(Me()*H.noise),de=Math.min(1,Math.max(.3,Q.pw*(1+Me()*H.noise*.012))),U={x:Math.cos(re),z:Math.sin(re)};D="aiAim";let ye=0,b=()=>{D==="aiAim"&&(ye++,ze(U,de*Math.min(1,ye/20)),ye<34?requestAnimationFrame(b):tt(U,de,"a"))};b()}}function Ge(F){if(ce+=F,C&&Se(F),Y>0?(Y-=F,V=.35):V=Math.min(1,V+F*3),D==="roll"){B+=F*V;let X=0;for(Z.length=0;B>=Tt.dt;)B-=Tt.dt,Ah(_.bodies,Tt.dt,Z);_.bodies.forEach((H,Q)=>{let re=T[Q];re&&(Eh(re,H.x-re.position.x,H.z-re.position.z),re.position.set(H.x,H.r,H.z),X=Math.max(X,Math.hypot(H.vx,H.vz)))});for(let H of Z){let Q=Math.min(1,Math.abs(H.j)/10);if(H.b<0){_s(Q,"dirt");continue}let re=_.bodies[H.a],de=_.bodies[H.b];if(yc(Q,1/Math.sqrt(Math.max(re.m,de.m))),Q>.15){let U=(re.x+de.x)/2,ye=(re.z+de.z)/2;f.emit(U,.4,ye,6+Q*10|0,{color:re.id==="lav"||de.id==="lav"?16742944:16774880,speed:2+Q*4,size:.25,life:.4})}!ae&&(re.kind==="shooter"||de.kind==="shooter")&&Q>.35&&(ae=!0,Y=.22,ee=.18*Q,Ki(20))}pn(X/16),Rh(_.bodies)&&(_.bodies.forEach(H=>{H.vx=H.vz=0}),pn(0),me())}for(let X=oe.length-1;X>=0;X--){let H=oe[X];H.t+=F;let Q=Math.min(1,H.t/.7),re=Q*Q*(3-2*Q);H.m.position.set(H.from.x*(1-re),H.from.y+Math.sin(Q*Math.PI)*3+re*4,H.from.z*(1-re)+(H.who==="p"?9:-9)*re),H.m.scale.setScalar(Pc*(1-re*.9)),Q>=1&&(e.remove(H.m),oe.splice(X,1),f.emit(H.m.position.x,H.m.position.y,H.m.position.z,10,{color:16769674,speed:3,size:.3}))}let G=_&&le();if(_&&G>=0&&(D==="place"||D==="knuckle")){let X=_.bodies[G];L.visible=!0,L.position.set(X.x,.15,X.z),L.scale.setScalar(2+Math.sin(ce*4)*.25),M.visible=D==="place",M.material.opacity=.08+Math.sin(ce*4)*.05}else L.visible=!1;if(D!=="place"&&(M.visible=!1),f.update(F),t.position.copy(te),D==="idle"||D==="lobby"){let X=ce*.08;t.position.set(Math.sin(X)*te.length()*.8,te.y*.9,Math.cos(X)*te.length()*.8)}ee>0&&(ee=Math.max(0,ee-F),t.position.x+=(Math.random()-.5)*ee,t.position.z+=(Math.random()-.5)*ee),t.lookAt(he)}function Ve(F,G){t.aspect=F/G,t.updateProjectionMatrix();let X=(Tt.ringR+1.1)*2,H=Yi.degToRad(62),Q=wi(t,X,X*Math.sin(H)+3.5,t.aspect);te.set(0,Math.sin(H)*Q,Math.cos(H)*Q),e.fog.near=Q*1.05,e.fog.far=Q*2.4,f.setScale(G)}let ke=new Kt(new k(0,1,0),0),Xe=new k;function O(F,G){return i.ray(t,F,G).ray.intersectPlane(ke,Xe)?Xe.clone():null}function rt(F){if(!_||_.turn!=="p"||D!=="place"&&D!=="knuckle")return;let G=O(F.x,F.y);if(!G)return;let X=_.bodies[le()];Math.hypot(G.x-X.x,G.z-X.z)<2.2?(y={kind:"aim",sx:F.x,sy:F.y},ft("pick")):D==="place"&&Math.abs(Math.hypot(G.x,G.z)-Tt.ringR)<2.4&&(y={kind:"line"},we(Math.atan2(G.z,G.x)),Ze())}function Ze(){let F=le(),G=_.bodies[F];Eh(T[F],G.x-T[F].position.x,G.z-T[F].position.z),T[F].position.set(G.x,G.r,G.z)}function R(F){if(!y)return;let G=O(F.x,F.y);if(!G)return;let X=_.bodies[le()];if(y.kind==="line"){we(Math.atan2(G.z,G.x)),Ze();return}let H=X.x-G.x,Q=X.z-G.z,re=Math.hypot(H,Q);if(re<.3){I=null,d.visible=!1;return}let de=Math.min(1,Math.max(0,(re-.4)/5.5));I={dir:{x:H/re,z:Q/re},power:de},ze(I.dir,de)}function x(){if(!y)return;let F=y;y=null,F.kind==="aim"?(I&&I.power>.05&&(tt(I.dir,I.power,"p"),n.tut=!0,Gt()),d.visible=!1,I=null):He()}function E(F){let G=_n[F]||_n.mavi,X=new Ue(G.core?G.core[0]:G.tint).getStyle(),H=new Ue(G.core?G.core[1]??G.core[0]:G.tint).getStyle();return`--c1:${X};--c2:${H}`}function A(){if(!_){fe.innerHTML="";return}let F=Ee(),G=Math.floor(F.targets/2)+1,X=D==="over"?z("Ma\xE7 bitti"):_.turn==="p"?D==="roll"?z("Bilyeler yuvarlan\u0131yor\u2026"):z("Senin s\u0131ran"):z("{ad} ni\u015Fan al\u0131yor\u2026",{ad:F.name});fe.innerHTML=`<div class="score">
        <div class="side me"><b>${z("Sen")}</b><span class="n">${_.cap.p}</span></div>
        <div class="mid"><small>${z("{n} bilyeyi alan kazan\u0131r",{n:G})}</small><div class="turn ${_.turn}">${X}</div></div>
        <div class="side op"><span class="n">${_.cap.a}</span><b style="color:${F.color}">${Ac(F.name)}</b></div>
      </div>
      <div class="mhint" style="opacity:${_.turn==="p"&&(D==="place"||D==="knuckle")?1:0}">${D==="place"?z("\xC7izgide kayd\u0131rarak yer se\xE7 \xB7 Bilyeni geri \xE7ek, b\u0131rak!"):z("Bilyen halkada kald\u0131: oradan tekrar at!")}</div>`}function P(){if(kt(".tut",fe))return;let F=Nn(`<div class="tut"><div class="hand">\u{1F446}</div><p>${z("At\u0131c\u0131 bilyene dokun, parma\u011F\u0131n\u0131 geri \xE7ek ve b\u0131rak. Ne kadar \xE7ekersen o kadar g\xFC\xE7l\xFC atar.")}</p></div>`);fe.appendChild(F),setTimeout(()=>F.remove(),6500)}function $(){D="lobby",Ut(),_||(_={opp:"ayse",bodies:[],cap:{p:0,a:0},demo:!0},K());let F=fi.map((H,Q)=>{let re=Q===0||n.wins[fi[Q-1].id],de=n.wins[H.id]||0;return`<button class="opp ${re?"":"locked"}" data-o="${H.id}" ${re?"":"disabled"}>
        <span class="av" style="background:${H.color}">${Ac(H.name[0])}</span>
        <span class="oi"><b>${Ac(H.name)}</b><small>${z(Ch[H.ground].name)} \xB7 ${z("{n} bilye",{n:H.targets})}</small>
        <em>${re?de?z("{n} galibiyet",{n:de}):"\u201C"+z(H.line)+"\u201D":z("{ad} yenilince a\xE7\u0131l\u0131r",{ad:fi[Q-1].name})}</em></span>
        <span class="pz"><span class="ball" style="${E(H.prize)}"></span>${de?"\u2713":""}</span></button>`}).join(""),G=Vt(`<h2>\u{1F3AF} ${z("Mahalle Misketi")}</h2>
      <p class="lead center">${z("Halkadaki bilyelerin yar\u0131s\u0131ndan fazlas\u0131n\u0131 d\u0131\u015Far\u0131 \xE7\u0131karan kazan\u0131r.")}</p>
      <div class="coins">${z("Misketlerin")}: <b>${Dn(n.coins)}</b> \xB7 ${z("At\u0131c\u0131n")}: <b>${z(_n[n.shooter].name)}</b></div>
      ${n.match?`<button class="btn pri wide" data-k="resume">\u25B6 ${z("Ma\xE7a devam et ({ad})",{ad:fi.find(H=>H.id===n.match.opp).name})}</button>`:""}
      <div class="opps">${F}</div>`,[[`\u{1F6D2} ${z("At\u0131c\u0131 bilyeler")}`,"",()=>j()],[`\u2302 ${z("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});G.querySelectorAll("[data-o]").forEach(H=>H.onclick=()=>{ft("tap");let Q=H.dataset.o;if(!n.match)return Ut(),et(Q);Vt(`<h2>${z("Yar\u0131m kalan ma\xE7")}</h2><p class="lead center">${z("Yeni ma\xE7a ba\u015Flarsan yar\u0131m kalan ma\xE7 silinir.")}</p>`,[[z("Yeni ma\xE7a ba\u015Fla"),"pri",()=>et(Q)],[z("Vazge\xE7"),"",()=>$()]],{dismiss:!1})});let X=G.querySelector("[data-k=resume]");X&&(X.onclick=()=>{ft("tap"),Ut(),se()})}function j(){let F=Object.entries(Ms).map(([X,H])=>{let Q=n.owned.includes(X),re=n.shooter===X,de=fi.find(ye=>ye.prize===X),U=!Q&&X!=="altin";return`<div class="shopItem ${re?"sel":""}"><span class="ball big" style="${E(X)}"></span>
        <div><b>${z(_n[X].name)}</b><small>${z(H.note)}</small>
        <small class="stats">${z("A\u011F\u0131rl\u0131k")} ${"\u25CF".repeat(Math.round(H.mass*2))} \xB7 ${z("G\xFC\xE7")} ${"\u25CF".repeat(Math.round(H.power*4-2))}</small></div>
        ${Q?`<button class="btn ${re?"pri":""}" data-use="${X}">${re?z("Se\xE7ili"):z("Se\xE7")}</button>`:U?`<button class="btn" data-buy="${X}" ${n.coins>=H.price?"":"disabled"}>${Dn(H.price)} ${z("misket")}</button>`:`<small class="lockTxt">${de?z("{ad} yenilince",{ad:de.name}):""}</small>`}</div>`}).join(""),G=Vt(`<h2>\u{1F6D2} ${z("At\u0131c\u0131 bilyeler")}</h2><p class="center">${z("Misketlerin")}: <b>${Dn(n.coins)}</b></p><div class="shop">${F}</div>
      <p class="note">${z("Ma\xE7larda kazand\u0131\u011F\u0131n her bilye bir misket eder. Rakiplerini yenerek \xF6zel bilyeler de kazan\u0131rs\u0131n.")}</p>`,[[z("Geri"),"",()=>$()]],{wide:!0,dismiss:!1});G.querySelectorAll("[data-use]").forEach(X=>X.onclick=()=>{n.shooter=X.dataset.use,Gt(),ft("toggle"),j()}),G.querySelectorAll("[data-buy]").forEach(X=>X.onclick=()=>{let H=X.dataset.buy,Q=Ms[H].price;n.coins<Q||(n.coins-=Q,n.owned.push(H),n.shooter=H,bt(),qn(4),It(z("{ad} senin!",{ad:z(_n[H].name)})),j())})}function K(){let F=$n(4);_.bodies=[];for(let G=0;G<9;G++){let X=G/9*Math.PI*2,H=G===0?0:1.2+G%3*1.1;_.bodies.push({kind:"target",id:Ja[G%Ja.length],x:Math.cos(X)*H,z:Math.sin(X)*H,vx:0,vz:0,r:Pc,m:1,fric:1})}Ye()}function se(){_=JSON.parse(JSON.stringify(n.match)),Ye(),Te()}return{id:"misket",scene:e,camera:t,hud:fe,enter(){i.hud.appendChild(fe),_=null,$()},exit(){fe.remove(),pn(0),C=null,D="idle",Ut(),bt()},update:Ge,resize:Ve,down:rt,move:R,up:x,pause(){bt()},menu(){$()},relabel(){A(),D==="lobby"&&$()},debug:()=>({phase:D,M:_,S:n}),_test:{newMatch:et,shoot:(F,G,X)=>tt({x:F,z:G},X,"p"),screen(F="shooter"){let G=F==="shooter"?le():_.bodies.findIndex(H=>H.kind==="target"),X=T[G].position.clone().project(t);return{x:(X.x+1)/2*i.w,y:(1-X.y)/2*i.h}}}}}var Lh=["kirmizi","mavi","yesil","sari","mor","turuncu"];function Lp(i){if(i===0)return Dp(0);let e=Math.min(6,3+Math.floor((i-1)/5));return{n:i,jars:e,speed:1.5+.06*(i-1),interval:Math.max(.9,2.3-.05*(i-1)),goal:Math.round(12+i*1.2),rainbow:i>=4?.06:0,lava:i>=7?Math.min(.12,.06+(i-7)*.003):0,ice:i>=10?.05:0,shuffle:i>=14?Math.max(9,16-Math.floor((i-14)/3)):0}}function Dp(i){let e=Math.min(1,i/160);return{n:0,jars:6,speed:2+e*2.2,interval:Math.max(.7,1.6-e*.9),goal:1/0,rainbow:.06,lava:.1,ice:.05,shuffle:14}}function Bv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Dh(i,e=Math.random()*1e9|0){let t=Lp(i);return{n:i,seed:e,drawn:0,t:0,spawnT:.6,slowT:0,rail:[],jars:Lh.slice(0,t.jars).map(n=>({color:n,count:0,ship:0})),pos:Lh.slice(0,t.jars).map((n,s)=>s),gates:Lh.slice(0,t.jars).map(()=>!1),sorted:0,mistakes:0,score:0,combo:0,best:0,uid:1,sinceShuffle:0,over:null}}function Yn(i){return i.n===0?Dp(i.sorted):Lp(i.n)}function Nh(i){let e=Bv(i.seed+i.drawn*7919),t=Yn(i);i.drawn++;let n=e();if(i.drawn>4){if(n<t.lava)return"lav";if(n<t.lava+t.rainbow)return"gokkusagi";if(n<t.lava+t.rainbow+t.ice)return"buz"}return i.jars[Math.floor(e()*i.jars.length)].color}function Np(i,e=3){let t={...i,jars:i.jars},n=[];for(let s=0;s<e;s++)n.push(Nh(t));return n}function Up(i,e,t){let n=i.jars[t];return e==="lav"?"lava":e==="buz"?"ice":e==="gokkusagi"||e===n.color?"ok":"wrong"}function Dc(i,e,t){let n={kind:e,ship:!1};if(e==="ok"){i.combo++,i.best=Math.max(i.best,i.combo);let r=Math.min(5,1+Math.floor(i.combo/5));i.score+=10*r,i.sorted++,i.sinceShuffle++;let a=i.jars[t];a.count++,a.count>=10&&(a.count=0,a.ship++,i.score+=50,n.ship=!0),n.mult=r}else e==="wrong"||e==="lava"||e==="miss"?(i.mistakes++,i.combo=0):e==="ice"?(i.slowT=5,i.score+=5):e==="lavaSafe"&&(i.score+=20);let s=Yn(i);return i.n>0&&i.mistakes>=3?i.over="lose":i.n===0&&i.mistakes>=3?i.over="end":i.sorted>=s.goal&&(i.over="win"),n}function kp(i){return i==="lav"?"lavaSafe":i==="buz"?"ice":"miss"}var Fp=i=>i.over==="win"?3-i.mistakes:0,Uh=i=>Yn(i).speed*(i.slowT>0?.5:1);var Es=.32,Ka=2.15,Zn=2.3,Ar=.72,zv=26;function kh(i){let e=new En,t=new Pt(30,1,.1,200),n=vr("sort");n.unlocked??(n.unlocked=1),n.stars??(n.stars={}),n.best??(n.best=0),e.background=new Ue(2759956),e.add(new zn(16772829,3811868,.45));let s=new li(16769200,1.9);s.position.set(-6,12,14),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-14,right:14,top:14,bottom:-8,near:1,far:60}),s.shadow.bias=-5e-4,e.add(s);let r=new Ei(16756832,30,30,1.6);r.position.set(6,9,4),e.add(r);let a=new Oe(new ai(80,50),new ut({map:Ss(11,"#3e2615","#22130a",1024,1024,[6,4]),roughness:.85}));a.position.set(0,4,-2.2),a.receiveShadow=!0,e.add(a);let o=new Oe(new Qt(80,.5,2.4),new ut({map:Ss(21,"#8a5a32","#5a3418",1024,512,[8,1]),roughness:.55}));o.receiveShadow=!0;let l=[],c=new ut({color:14198858,metalness:1,roughness:.28}),u=new xn({color:15398655,roughness:.05,transparent:!0,opacity:.2,clearcoat:1,envMapIntensity:1.5,side:Bt,depthWrite:!1}),f=new ji(e,300),d=new St;e.add(d);let h=null,g=null,v="idle",m=0,p=0,w=null,L=new Map,M=[],_=[],T=[],D=[],y=null,I=null,B=Nn('<div class="shud"></div>');function V(E,A){let P=A<.7?E<=2?1:E<=4?2:3:A<1.25&&E>=4?2:1,$=Math.ceil(E/P),j=.7,K=P>1?4.6:0,se=-(($-1)/2)*Ka-1.25,F=($-1)/2*Ka+1.25,G=(P-1)*K+3.4,X=[],H=[],Q=0,re=(xe,Le)=>{X.push({fn:xe,len:Le,s0:Q}),Q+=Le},de=0;for(let xe=0;xe<P;xe++){let Le=G-xe*K,Ae=xe%2?-1:1,xt=Math.min($,E-de),wt=xe===0?se-1.4:Ae>0?se:F,es=xe===P-1?Ae>0?F+1.6:se-1.6:Ae>0?F:se,Fc=Q;re(An=>[wt+(es-wt)*An,Le,Ae],Math.abs(es-wt));for(let An=0;An<xt;An++,de++){let pi=Ae>0?(An-($-1)/2)*Ka:(($-1)/2-An)*Ka;H.push({x:pi,y:Le,s:Fc+Math.abs(pi-wt),jarY:Le-1.1-Zn,row:xe})}if(xe<P-1){let An=es,pi=An,no=Le,io=Le-K;re(Ai=>{let Mn=Math.PI/2-Ai*Math.PI/2;return[pi+Ae*Math.cos(Mn)*j,no-j+Math.sin(Mn)*j,Ae]},Math.PI/2*j),re(Ai=>[An+Ae*j,no-j-Ai*(K-2*j),0],K-2*j),re(Ai=>{let Mn=-Ai*Math.PI/2;return[pi+Ae*Math.cos(Mn)*j,io+j+Math.sin(Mn)*j,-Ae]},Math.PI/2*j)}}let U=X[X.length-1].fn(1),ye=(P-1)%2?-1:1,b=3.4-1.1-Zn,N=[se-1.4,G],J=[U[0]+ye*.6,U[1]-2.5],q=Math.min(N[0]-1.1,J[0]-1,se-j-.2),ge=Math.max(N[0]+1.1,J[0]+1,F+j+.2);return{segs:X,gates:H,len:Q,rows:P,hopper:N,bin:J,benches:[...Array(P)].map((xe,Le)=>G-Le*K-1.1-Zn),w:ge-q,top:G+2.6,bottom:b-.6,cx:(q+ge)/2}}function Y(E){let A=g.segs;for(let $ of A)if(E<=$.s0+$.len)return $.fn(Math.max(0,(E-$.s0)/$.len));let P=A[A.length-1];return P.fn(1+(E-P.s0-P.len)/P.len)}function ee(E){let A=_n[E];return tn(128,128,P=>{P.fillStyle="#f3e6c8",P.beginPath(),P.roundRect(6,6,116,116,18),P.fill(),P.strokeStyle="#8a6a3a",P.lineWidth=5,P.stroke();let $=new Ue(A.core[0]).getStyle();P.fillStyle=$,P.beginPath(),P.arc(64,54,30,0,7),P.fill(),P.fillStyle="rgba(255,255,255,0.5)",P.beginPath(),P.arc(54,44,9,0,7),P.fill(),P.fillStyle="#3a2a14",P.font="bold 34px system-ui, sans-serif",P.textAlign="center",P.fillText(A.sym,64,113)})}function C(E){let A=new St,P=new Oe(new on(Ar,Ar*.94,Zn,40,1,!0),u);P.position.y=Zn/2,P.renderOrder=3,A.add(P);let $=new Oe(new on(Ar*.94,Ar*.94,.1,40),new xn({color:13625072,roughness:.1,transparent:!0,opacity:.5}));$.position.y=.05,A.add($);let j=new Oe(new oi(Ar+.02,.07,10,40),c);j.rotation.x=Math.PI/2,j.position.y=Zn,A.add(j);let K=new Oe(new ai(.85,.85),new ut({map:ee(E),roughness:.8}));K.position.set(0,Zn*.32,Ar+.03),A.add(K);let se=bs(new Ue(_n[E].core[0]),2.6);se.position.y=Zn+.3,se.material.opacity=0,A.add(se);let F=new St;return A.add(F),A.userData={inside:F,glow:se,label:K,flash:0,color:E},A}function Z(E){let A=Math.floor(E/3),P=E%3,$=P*2.094+A*1.047;return new k(Math.cos($)*.36,.1+Es+A*.5,Math.sin($)*.36)}function ae(){let E=new St,A=new St;A.position.x=-.42,E.add(A);let P=new Oe(new Qt(.84,.08,.5),c);P.position.x=.42,P.castShadow=!0,A.add(P);let $=new Oe(new oi(.42,.045,8,32),new Zt({color:5635976}));$.rotation.x=Math.PI/2,$.position.y=-.05,E.add($);let j=new Oe(new on(.42,.42,.7,24,1,!0),u);return j.position.y=-.5,E.add(j),E.userData={hinge:A,ring:$,open:0},E}function oe(){d.clear(),L.forEach(Q=>e.remove(Q)),L.clear(),M.forEach(Q=>e.remove(Q.m)),M=[],D=[],y=null;let E=Yn(h);g=V(E.jars,i.aspect);let A=[];for(let Q=0;Q<=g.len;Q+=.15){let[re,de]=Y(Q);A.push(new k(re,de-Es-.04,0))}let P=new rr(A);for(let Q of[-.22,.22]){let re=new Oe(new va(P,A.length*2,.055,8,!1),c);re.position.z=Q,re.castShadow=!0,d.add(re)}for(let Q=.5;Q<g.len;Q+=2.6){let[re,de]=Y(Q),U=new Oe(new on(.05,.05,1.2,8),c);U.position.set(re,de-.9,-.5),d.add(U)}l.forEach(Q=>e.remove(Q)),l=g.benches.map(Q=>{let re=o.clone();return re.position.set(0,Q-.25,.1),e.add(re),re}),_=h.jars.map(Q=>C(Q.color)),T=g.gates.map(()=>ae()),g.gates.forEach((Q,re)=>{let de=_[h.pos[re]];de.position.set(Q.x,Q.jarY,0),d.add(de);let U=T[re];U.position.set(Q.x,Q.y-Es-.08,0),d.add(U)}),h.jars.forEach((Q,re)=>{for(let de=0;de<Q.count;de++)ce(re,de,Q.color)});let[$,j]=g.hopper,K=new Oe(new on(1,.3,1.6,32,1,!0),u);K.position.set($,j+1.2,0),d.add(K);let se=new Oe(new oi(1,.06,8,32),c);se.rotation.x=Math.PI/2,se.position.set($,j+2,0),d.add(se),fe=[];let[F,G]=g.bin,X=new Oe(new on(.95,.8,1.5,32,1,!0),new ut({color:9082012,metalness:.9,roughness:.35,side:Bt}));X.position.set(F,G+.75,0),X.castShadow=!0,d.add(X);let H=new Oe(new Si(.88,32),new xn({color:4892888,roughness:.05,transparent:!0,opacity:.75}));H.rotation.x=-Math.PI/2,H.position.set(F,G+1.1,0),d.add(H),te=new k(F,G+1.1,0),Ge(i.w,i.h)}let fe=[],te=new k;function he(){fe.forEach(P=>d.remove(P)),fe=[];let[E,A]=g.hopper;Np(h,3).forEach((P,$)=>{let j=di(P,Es);j.position.set(E+($-1)*.5,A+1+($===1?.35:0),0),d.add(j),fe.push(j)})}function ce(E,A,P){let $=di(P,Es);return $.position.copy(Z(A)),_[E].userData.inside.add($),$}function Ee(E,A){h=A?JSON.parse(JSON.stringify(A)):Dh(E),oe(),he();for(let j of h.rail)je(j);v="intro",Ze();let P=Yn(h),$=Ce(E);if(A){v="play",It(z("Kald\u0131\u011F\u0131n yerden devam!"));return}Vt(`<h2>${E?z("Seviye {n}",{n:E}):"\u267E "+z("Sonsuz At\xF6lye")}</h2>
      <p class="lead center">${E?z("{r} renk \xB7 {g} bilyeyi do\u011Fru kavanoza ay\u0131r",{r:P.jars,g:P.goal}):z("Hata yapana kadar devam et. Bant gittik\xE7e h\u0131zlan\u0131r.")}</p>
      ${$}<p class="note center">${z("3 hata yaparsan seviye biter.")}</p>`,[[`\u25B6 ${z("Ba\u015Fla")}`,"pri",()=>{v="play",E===1&&!n.tut&&et()}]],{dismiss:!1})}function Ce(E){let A=(P,$)=>`<div class="intro"><span class="ball" style="${rt(P)}"></span><p>${$}</p></div>`;return E===1?`<p class="center">${z("Bir kavanoza dokundu\u011Funda \xFCst\xFCndeki kapak a\xE7\u0131l\u0131r, bant \xFCzerindeki bilye i\xE7ine d\xFC\u015Fer. Tekrar dokun, kapak kapan\u0131r.")}</p>`:E===4?A("gokkusagi",z("YEN\u0130: G\xF6kku\u015Fa\u011F\u0131 bilye her kavanoza uyar.")):E===7?A("lav",z("YEN\u0130: Lav bilye kavanozu \xE7atlat\u0131r! Band\u0131n sonundaki su kovas\u0131na gitsin, kapaklar\u0131 kapal\u0131 tut.")):E===10?A("buz",z("YEN\u0130: Buz bilye nereye d\xFC\u015Ferse d\xFC\u015Fs\xFCn band\u0131 5 saniye yava\u015Flat\u0131r.")):E===14?`<div class="intro"><span>\u{1F500}</span><p>${z("YEN\u0130: Kavanozlar ara ara yer de\u011Fi\u015Ftirir. Etiketlere dikkat!")}</p></div>`:""}function et(){let E=Nn(`<div class="tut"><div class="hand">\u{1F446}</div><p>${z("Banttaki bilyeyle ayn\u0131 renkteki kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r.")}</p></div>`);B.appendChild(E),setTimeout(()=>E.remove(),7e3),n.tut=!0,Gt()}function Ye(E){v!=="play"||!h.gates||E<0||E>=h.gates.length||(h.gates[E]=!h.gates[E],ft(h.gates[E]?"toggle":"tap"),Ki(8))}function je(E){let A=di(E.id,Es);e.add(A),L.set(E.uid,A);let[P,$]=Y(E.s);return A.position.set(P,$,0),A}function le(E){let A=Yn(h),P=Uh(h);if(h.t+=E,h.slowT>0&&(h.slowT-=E),h.spawnT-=E*(h.slowT>0?.5:1),h.spawnT<=0&&(!h.rail.length||h.rail[h.rail.length-1].s>1.1)){h.spawnT=A.interval;let $=Nh(h),j={id:$,s:0,uid:h.uid++};h.rail.push(j),je(j),he(),_s(.3,"glass")}for(let $=h.rail.length-1;$>=0;$--){let j=h.rail[$],K=j.s;j.s+=P*E;let se=!1;if(g.gates.forEach((Q,re)=>{if(se||!h.gates[re]||K>Q.s||j.s<Q.s)return;let de=h.pos[re];if(_[de].userData.shipping)return;se=!0,h.rail.splice($,1);let U=L.get(j.uid);L.delete(j.uid);let ye=_[de].position.clone().add(Z(h.jars[de].count));M.push({m:U,id:j.id,ji:de,from:new k(Q.x,Q.y,0),to:ye,t:0,dur:Math.sqrt(2*(Q.y-ye.y)/zv)})}),se)continue;let F=L.get(j.uid),[G,X,H]=Y(j.s);if(F&&(F.userData.spin.rotateZ(-(H||1)*P*E/Es),F.position.set(G,X,0)),j.s>=g.len){h.rail.splice($,1);let Q=L.get(j.uid);L.delete(j.uid),M.push({m:Q,id:j.id,ji:-1,from:Q.position.clone(),to:te.clone(),t:0,dur:.4})}}m+=E,m>1&&(m=0,tt())}function pe(E){if(E.ji<0){let j=kp(E.id);e.remove(E.m),f.emit(E.to.x,E.to.y,.3,j==="lavaSafe"?26:12,{color:j==="lavaSafe"?14540253:8177919,speed:3,up:2,size:j==="lavaSafe"?.7:.3,life:j==="lavaSafe"?1.2:.5,gravity:j==="lavaSafe"?-1:6}),_s(.6,"glass");let K=Dc(h,j,-1);return j==="miss"&&(ft("no"),Me(z("Ka\xE7t\u0131!"))),j==="lavaSafe"&&(qn(2),_e("+20",E.to)),j==="ice"&&(qn(5),It(z("Buz! Bant yava\u015Flad\u0131"),1500)),Te(K)}let A=_[E.ji],P=Up(h,E.id,E.ji);if(P==="ok"){let j=h.jars[E.ji].count;e.remove(E.m),ce(E.ji,j,E.id);let K=Dc(h,"ok",E.ji);return yc(.7,1),qn(Math.min(10,h.combo%11)),A.userData.flash=1,A.userData.flashCol=6750105,K.mult>1&&h.combo%5===0&&_e(z("Z\u0130NC\u0130R x{n}",{n:K.mult}),E.to,!0),K.ship&&He(E.ji),Te(K)}e.remove(E.m);let $=Dc(h,P,E.ji);P==="ice"?(f.emit(E.to.x,E.to.y,0,24,{color:12577535,speed:4,size:.35}),qn(5),It(z("Buz! Bant yava\u015Flad\u0131"),1500)):(f.emit(E.to.x,E.to.y+.3,0,30,{color:P==="lava"?16738816:16777215,speed:5,size:.3,life:.6}),mp(),Ki(40),A.userData.flash=1,A.userData.flashCol=16724016,Me(P==="lava"?z("Lav kavanozu \xE7atlatt\u0131!"):z("Yanl\u0131\u015F kavanoz!"))),Te($)}function Te(){if(Ze(),(h.n>0||h.over==="end")&&h.over)return ze();let E=Yn(h);E.shuffle&&h.sinceShuffle>=E.shuffle&&!y&&(h.sinceShuffle=0,we())}function He(E){let A=_[E];A.userData.shipping=!0,Ji(),f.emit(A.position.x,A.position.y+Zn,.3,40,{color:16765498,speed:5,up:2,size:.35,life:.9}),_e("+50",A.position.clone().add(new k(0,Zn+.6,0)),!0),D.push({jo:A,t:0,base:A.position.y})}function we(){let E=h.pos.length,A=[...h.pos],P=Math.random;for(let j=0;j<2;j++){let K=Math.floor(P()*E),se=Math.floor(P()*E);se===K&&(se=(K+1)%E),[A[K],A[se]]=[A[se],A[K]]}let $=A.map((j,K)=>({jo:_[j],from:_[j].position.clone(),to:new k(g.gates[K].x,g.gates[K].jarY,0)}));h.pos=A,h.gates=h.gates.map(()=>!1),y={moves:$,t:0},vs(.6),It(z("Kavanozlar yer de\u011Fi\u015Ftiriyor!"),1300)}function ze(){v="over",me();let E=h.n;if(E===0){let $=h.score>n.best;$&&(n.best=h.score),bt(),Ji(),Vt(`<h2>\u267E ${z("Sonsuz At\xF6lye")}</h2><p class="lead center">${z("Puan")}: <b>${Dn(h.score)}</b>${$?" \xB7 "+z("Yeni rekor!"):""}</p><p class="center">${z("En iyi")}: ${Dn(n.best)} \xB7 ${z("En uzun zincir")}: ${h.best}</p>`,[[z("Tekrar"),"pri",()=>Ee(0)],[z("Seviyeler"),"",()=>R()]],{dismiss:!1});return}let A=Fp(h),P=h.over==="win";P?(n.stars[E]=Math.max(n.stars[E]||0,A),n.unlocked=Math.max(n.unlocked,Math.min(30,E+1)),E===30&&(n.done=!0),Ji(),f.emit(0,5,2,120,{color:16765498,speed:8,life:1.3,size:.45,up:2})):br(),bt(),Vt(`<h2>${P?z("Seviye {n} tamam!",{n:E}):z("Seviye {n} bitti",{n:E})}</h2>
      ${P?`<div class="stars">${[1,2,3].map($=>`<span class="${$<=A?"on":""}">\u2605</span>`).join("")}</div>`:`<p class="lead center">${z("3 hata yapt\u0131n. Bir daha dene!")}</p>`}
      <p class="center">${z("Puan")}: <b>${Dn(h.score)}</b> \xB7 ${z("En uzun zincir")}: ${h.best}</p>`,[...P&&E<30?[[`\u25B6 ${z("Sonraki seviye")}`,"pri",()=>Ee(E+1)]]:[],[z("Tekrar"),P?"":"pri",()=>Ee(E)],[z("Seviyeler"),"ghost",()=>R()]],{dismiss:!1})}function tt(){h&&!h.over&&(n.cur=JSON.parse(JSON.stringify(h)),Gt())}function me(){n.cur=null,Gt()}function _e(E,A,P){let $=A.clone().project(t),j=Nn(`<div class="pop ${P?"big":""}">${E}</div>`);j.style.left=($.x+1)/2*100+"%",j.style.top=(1-$.y)/2*100+"%",B.appendChild(j),setTimeout(()=>j.remove(),1e3)}function Me(E){Ze();let A=Nn(`<div class="mist">${E}</div>`);B.appendChild(A),setTimeout(()=>A.remove(),1100)}function ve(E){p+=E,v==="play"&&h&&le(E);for(let A=M.length-1;A>=0;A--){let P=M[A];P.t+=E;let $=Math.min(1,P.t/P.dur);P.m.position.set(P.from.x+(P.to.x-P.from.x)*$,P.from.y+(P.to.y-P.from.y)*$*$,P.to.z*$),P.m.userData.spin.rotateX(E*6),$>=1&&(M.splice(A,1),pe(P))}T.forEach((A,P)=>{let $=h&&h.gates[P]?1:0,j=A.userData;j.open+=($-j.open)*Math.min(1,E*18),j.hinge.rotation.z=-j.open*1.4,j.ring.material.color.setHex($?5635976:5583650),j.ring.scale.setScalar(1+($?Math.sin(p*10)*.06:0))}),_.forEach(A=>{let P=A.userData;P.flash>0&&(P.flash=Math.max(0,P.flash-E*2.5)),P.glow.material.opacity=P.flash*.9,P.flashCol&&P.glow.material.color.setHex(P.flashCol)});for(let A=D.length-1;A>=0;A--){let P=D[A];P.t+=E;let $=P.jo;P.t<.6?$.position.y=P.base-P.t/.6*4:P.cleared||(P.cleared=!0,$.userData.inside.clear()),P.t>=.6&&($.position.y=P.base-4+Math.min(1,(P.t-.6)/.5)*4),P.t>=1.1&&($.position.y=P.base,$.userData.shipping=!1,D.splice(A,1))}if(y){let A=y;A.t+=E;let P=Math.min(1,A.t/.9),$=P*P*(3-2*P);for(let j of A.moves)j.jo.position.lerpVectors(j.from,j.to,$),j.jo.position.y+=Math.sin(P*Math.PI)*1.2;P>=1&&(y=null)}if(f.update(E),h&&v==="play"){let A=Uh(h);pn(h.rail.length?.25+A*.06:0)}else pn(0);t.position.set(Se.x+Math.sin(p*.3)*.15,Se.y,Se.z),t.lookAt(Se.x,Se.ly,0)}let Se={x:0,y:3,z:30,ly:3};function Ge(E,A){if(t.aspect=E/A,t.updateProjectionMatrix(),f.setScale(A),!g)return;let P=g.top+1.4,$=g.bottom-.4,j=P-$,K=g.w+.3,se=wi(t,K,j+2.2,t.aspect);Se.x=g.cx??0,Se.ly=(P+$)/2+.2,Se.y=Se.ly+se*(g.rows>1?.03:.1),Se.z=se}let Ve=new Kt(new k(0,0,1),0),ke=new k;function Xe(E){if(v!=="play"||!g||!i.ray(t,E.x,E.y).ray.intersectPlane(Ve,ke))return;let P=-1,$=1e9;g.gates.forEach((j,K)=>{if(ke.y>j.y+1.2||ke.y<j.jarY-.8)return;let se=Math.abs(ke.x-j.x);se<Ka*.55&&se<$&&($=se,P=K)}),P>=0&&Ye(P)}function O(E){let A=+E.key;A>=1&&A<=6&&Ye(A-1)}function rt(E){let A=_n[E];return`--c1:${new Ue(A.core?A.core[0]:A.tint).getStyle()};--c2:${new Ue(A.core?A.core[1]??A.core[0]:A.tint).getStyle()}`}function Ze(){if(!h){B.innerHTML="";return}let E=Yn(h),A=Math.min(5,1+Math.floor(h.combo/5)),P=h.n?Math.min(1,h.sorted/E.goal):0;B.innerHTML=`<div class="sbar">
      <div class="lvl">${h.n?z("Seviye {n}",{n:h.n}):"\u267E "+z("Sonsuz")}</div>
      <div class="prog"><i style="width:${P*100}%"></i><span>${h.n?`${h.sorted} / ${E.goal}`:Dn(h.sorted)}</span></div>
      <div class="sc">${Dn(h.score)}${A>1?` <em>x${A}</em>`:""}</div>
      <div class="hearts">${[0,1,2].map($=>`<span class="${$<h.mistakes?"x":""}">\u25C6</span>`).join("")}</div></div>`}function R(){v="menu",Ut(),h||(h=Dh(1),oe());let E=[];for(let K=1;K<=30;K++){let se=K<=n.unlocked,F=n.stars[K]||0;E.push(`<button class="lv ${se?"":"locked"}" data-n="${K}" ${se?"":"disabled"}><b>${se?K:"\u{1F512}"}</b><small>${"\u2605".repeat(F)}${"\u2606".repeat(se?3-F:0)}</small></button>`)}let A=n.unlocked>=10,P=Vt(`<h2>\u{1FAD9} ${z("Ayr\u0131\u015Ft\u0131rma At\xF6lyesi")}</h2>
      <p class="lead center">${z("Bilyeleri renklerine g\xF6re kavanozlara ay\u0131r. Kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r ya da kapan\u0131r.")}</p>
      ${n.cur?`<button class="btn pri wide" data-k="resume">\u25B6 ${n.cur.n?z("Seviye {n} devam et",{n:n.cur.n}):z("Sonsuz moda devam et")}</button>`:""}
      <div class="lvgrid">${E.join("")}</div>
      <button class="btn wide ${A?"":"locked"}" data-k="endless" ${A?"":"disabled"}>\u267E ${z("Sonsuz At\xF6lye")} ${A?`\xB7 ${z("Rekor")}: ${Dn(n.best)}`:"\xB7 "+z("10. seviyede a\xE7\u0131l\u0131r")}</button>`,[[`\u2302 ${z("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});P.querySelectorAll("[data-n]").forEach(K=>K.onclick=()=>{ft("tap"),Ut(),n.cur=null,Ee(+K.dataset.n)});let $=P.querySelector("[data-k=resume]");$&&($.onclick=()=>{ft("tap"),Ut(),Ee(n.cur.n,n.cur)});let j=P.querySelector("[data-k=endless]");j&&A&&(j.onclick=()=>{ft("tap"),Ut(),n.cur=null,Ee(0)})}function x(){v==="play"&&(v="paused",tt(),Vt(`<h2>${z("Duraklat\u0131ld\u0131")}</h2>`,[[`\u25B6 ${z("Devam et")}`,"pri",()=>{v="play"}],[z("Yeniden ba\u015Flat"),"",()=>Ee(h.n)],[z("Seviyeler"),"",()=>R()],[`\u2302 ${z("Ana men\xFC")}`,"ghost",()=>i.home()]],{dismiss:!1}))}return{id:"sort",scene:e,camera:t,hud:B,enter(){i.hud.appendChild(B),h=null,g=null,R()},exit(){(v==="play"||v==="paused")&&tt(),bt(),B.remove(),pn(0),v="idle",Ut()},update:ve,resize:(E,A)=>{Ge(E,A),h&&g&&v==="menu"&&V(Yn(h).jars,i.aspect).rows!==g.rows&&oe()},down:Xe,move(){},up(){},key:O,pause(){v==="play"?x():tt()},menu(){v==="play"?x():R()},relabel(){Ze(),v==="menu"&&R()},debug:()=>({phase:v,st:h}),_test:{start:Ee,toggleGate:Ye,win(){h.sorted=Yn(h).goal,h.mistakes=1,h.over="win",ze()},jarScreen(E){let A=g.gates[E],P=new k(A.x,A.jarY+Zn/2,0).project(t);return{x:(P.x+1)/2*i.w,y:(1-P.y)/2*i.h}}}}}var vn={r:.22,g:14,th:.07,dt:.0020833333333333333,roll:.12,rest:.18,maxT:30},Hv=(i,e,t,n,s=0,r=0)=>{let a=[];for(let o=0;o<=n;o++){let l=e+(t-e)*o/n;a.push([s+Math.cos(l)*i,r+Math.sin(l)*i])}return a},Gv=i=>i.slice(1).map((e,t)=>[i[t][0],i[t][1],e[0],e[1]]),ja={kalas:{name:"Uzun kalas",segs:[[-1,0,1,0]],kind:"normal"},kisa:{name:"K\u0131sa kalas",segs:[[-.5,0,.5,0]],kind:"normal"},kavis:{name:"Kavis",segs:Gv(Hv(1.1,Math.PI,Math.PI*1.5,10,.55,.55)),kind:"normal"},trambolin:{name:"Trambolin",segs:[[-.55,0,.55,0]],kind:"bounce",e:.95},hizlandirici:{name:"H\u0131zland\u0131r\u0131c\u0131",segs:[[-.75,0,.75,0]],kind:"boost"},huni:{name:"Huni",segs:[[-.95,.6,-.34,0],[.34,0,.95,.6]],kind:"normal"}},Vv={segs:[[-.48,.62,-.48,0],[-.48,0,.48,0],[.48,0,.48,.62]]};function Fh(i){let e=ja[i.type],t=(i.a||0)*Math.PI/180,n=Math.cos(t),s=Math.sin(t),r=i.flip?-1:1;return e.segs.map(([a,o,l,c])=>({ax:i.x+a*r*n-o*s,ay:i.y+a*r*s+o*n,bx:i.x+l*r*n-c*s,by:i.y+l*r*s+c*n,kind:e.kind,e:e.e??vn.rest,dx:n*r,dy:s*r,src:i}))}function Bp(i,e){let t=[];for(let s of[...i.fixed||[],...e])t.push(...Fh(s));let n=i.cup;for(let[s,r,a,o]of Vv.segs)t.push({ax:n.x+s,ay:n.y+r,bx:n.x+a,by:n.y+o,kind:"normal",e:.1,cup:!0});for(let s of t)s.minx=Math.min(s.ax,s.bx)-.4,s.maxx=Math.max(s.ax,s.bx)+.4,s.miny=Math.min(s.ay,s.by)-.4,s.maxy=Math.max(s.ay,s.by)+.4;return t}function Op(i){let e=i.start;return{x:e.x,y:e.y,vx:e.vx||0,vy:e.vy||0,t:0,still:0,stars:[],state:"run",inCup:0,path:[]}}function zp(i,e,t,n,s){i.vy-=vn.g*n,i.x+=i.vx*n,i.y+=i.vy*n,i.t+=n;let r=vn.r+vn.th,a=!1;for(let u of e){if(i.x<u.minx||i.x>u.maxx||i.y<u.miny||i.y>u.maxy)continue;let f=u.bx-u.ax,d=u.by-u.ay,h=f*f+d*d,g=((i.x-u.ax)*f+(i.y-u.ay)*d)/h;g=Math.max(0,Math.min(1,g));let v=u.ax+f*g,m=u.ay+d*g,p=i.x-v,w=i.y-m,L=p*p+w*w;if(L>=r*r)continue;let M=Math.sqrt(L)||1e-6,_=p/M,T=w/M;i.x=v+_*r,i.y=m+T*r;let D=i.vx*_+i.vy*T;if(D<0){let y=D<-1.2?u.e:0;i.vx-=(1+y)*D*_,i.vy-=(1+y)*D*T,s&&D<-1.5&&s.push({type:"hit",p:-D,kind:u.kind,cup:u.cup})}a=!0,u.kind==="boost"&&(i.vx*u.dx+i.vy*u.dy<9&&(i.vx+=u.dx*40*n,i.vy+=u.dy*40*n),s&&!i.boosting&&s.push({type:"boost"}),i.boosting=.1)}if(i.boosting&&(i.boosting=Math.max(0,i.boosting-n)),a){let u=1-vn.roll*n;i.vx*=u,i.vy*=u}(t.stars||[]).forEach((u,f)=>{!i.stars.includes(f)&&Math.hypot(i.x-u.x,i.y-u.y)<.45&&(i.stars.push(f),s&&s.push({type:"star",i:f}))});let o=t.cup,l=i.x>o.x-.48&&i.x<o.x+.48&&i.y>o.y&&i.y<o.y+.62;i.inCup=l?i.inCup+n:0;let c=Math.hypot(i.vx,i.vy);i.still=c<.08?i.still+n:0,i.inCup>.3&&c<2?i.state="win":i.y<-1.5||i.x<-1.5||i.x>t.w+1.5?i.state="out":(i.still>1.2||i.t>vn.maxT)&&(i.state="stuck")}var cn=(i,e,t)=>({id:i,name:e,w:9,h:13,stars:[],fixed:[],...t}),Qi=[cn("ilk","\u0130lk kalas",{start:{x:1.2,y:11.6,vx:1.6},cup:{x:6.8,y:1},stars:[{x:4.6,y:6.2}],inv:{kalas:2},tip:"Kalas\u0131 s\xFCr\xFCkleyip panoya b\u0131rak. D\xF6nd\xFCrmek i\xE7in \xFCst\xFCne dokun, ok d\xFC\u011Fmelerini kullan."}),cn("kavis","Kavisli d\xF6n\xFC\u015F",{start:{x:1.4,y:12,vx:0},cup:{x:7.2,y:1},stars:[{x:4.4,y:2.2}],inv:{kavis:1,kalas:1},tip:"Kavis d\xFC\u015Fen bilyeyi yana \xE7evirir."}),cn("zikzak","Zikzak",{start:{x:7.8,y:12,vx:-1.2},cup:{x:7.4,y:1},stars:[{x:6.7,y:9},{x:5.8,y:4.6}],inv:{kalas:3},fixed:[{type:"kisa",x:7.2,y:3.6,a:0}]}),cn("tramp","Z\u0131pla!",{start:{x:1.2,y:12,vx:.4},cup:{x:7.4,y:5.5},stars:[{x:4.4,y:9}],inv:{trambolin:1,kalas:1},fixed:[{type:"kalas",x:7.4,y:5.38,a:0},{type:"kalas",x:4.6,y:3.2,a:90}],tip:"Trambolin bilyeyi z\u0131plat\u0131r."}),cn("hiz","H\u0131zland\u0131r\u0131c\u0131",{start:{x:.8,y:9.4,vx:1},cup:{x:8,y:1},stars:[{x:6,y:8.4}],inv:{hizlandirici:1,kalas:1},fixed:[{type:"kalas",x:1.6,y:9,a:-8},{type:"kalas",x:5.2,y:4.2,a:90}],tip:"H\u0131zland\u0131r\u0131c\u0131 bilyeyi ok y\xF6n\xFCnde f\u0131rlat\u0131r."}),cn("huni","Huniden ge\xE7ir",{start:{x:.8,y:12.2,vx:3.2},cup:{x:2.2,y:1},stars:[{x:4.5,y:4.4}],inv:{huni:1,kalas:2},fixed:[{type:"kalas",x:4.5,y:7,a:0}],tip:"Huni bilyeyi ortadan a\u015Fa\u011F\u0131 ak\u0131t\u0131r."}),cn("tavan","\xC7at\u0131l\u0131 bardak",{start:{x:1,y:12,vx:1.2},cup:{x:4.5,y:1},stars:[{x:7.6,y:3}],inv:{kalas:2,kavis:1},fixed:[{type:"kalas",x:4.5,y:2.6,a:0}]}),cn("duvar","Duvar\u0131n ard\u0131",{start:{x:1,y:12,vx:1.5},cup:{x:7.5,y:1},stars:[{x:4.5,y:11},{x:7,y:6}],inv:{kalas:2,trambolin:1},fixed:[{type:"kalas",x:5.2,y:2.4,a:90},{type:"kalas",x:5.2,y:4.4,a:90}]}),cn("merdiven","Merdiven",{start:{x:8.2,y:12.4,vx:-2},cup:{x:1,y:1},stars:[{x:6.2,y:9.6},{x:3,y:6.4},{x:3.9,y:8.4}],inv:{kalas:4}}),cn("yukari","Yoku\u015F yukar\u0131",{start:{x:.8,y:6,vx:2},cup:{x:7.6,y:8},stars:[{x:4.5,y:9.4}],inv:{hizlandirici:1,kalas:2,kavis:1},fixed:[{type:"kalas",x:7.6,y:7.88,a:0},{type:"kalas",x:1.6,y:5.6,a:-6}]}),cn("cift","\xC7ift trambolin",{start:{x:1,y:12.4,vx:.2},cup:{x:8,y:9},stars:[{x:4.5,y:6}],inv:{trambolin:2,kalas:1},fixed:[{type:"kalas",x:8,y:8.88,a:0},{type:"kalas",x:4.5,y:11.2,a:0}]}),cn("labirent","Labirent",{start:{x:4.5,y:12.4,vx:0},cup:{x:4.5,y:1},stars:[{x:5.1,y:10.8},{x:5,y:1.9}],inv:{kalas:3,kavis:2},fixed:[{type:"kalas",x:4.5,y:9.4,a:0},{type:"kalas",x:4.5,y:4.4,a:0}]}),cn("ucurum","U\xE7urum",{start:{x:.8,y:4,vx:3},cup:{x:8.2,y:1},stars:[{x:2.9,y:4.3},{x:5.7,y:4.9}],inv:{trambolin:1,hizlandirici:1,kalas:2},fixed:[{type:"kalas",x:1.4,y:3.6,a:0},{type:"kalas",x:4.6,y:2,a:90}]}),cn("sarmal","Sarmal",{start:{x:8.2,y:12.4,vx:-1},cup:{x:8.2,y:1},stars:[{x:7.4,y:7.9},{x:7,y:7.1},{x:6.6,y:2.9}],inv:{kalas:3,kavis:2}}),cn("ustasi","Usta i\u015Fi",{start:{x:.8,y:12.4,vx:2},cup:{x:4.5,y:10},stars:[{x:2,y:11.4},{x:3.5,y:11}],inv:{kalas:3,trambolin:1,hizlandirici:1,kavis:1},fixed:[{type:"kalas",x:4.5,y:9.88,a:0},{type:"kalas",x:4.5,y:11.6,a:0}]}),cn("final","B\xFCy\xFCk final",{start:{x:4.5,y:12.4,vx:0},cup:{x:4.5,y:6},stars:[{x:7.2,y:4.3},{x:8,y:2},{x:4.5,y:9}],inv:{kalas:4,kavis:2,trambolin:1,hizlandirici:1,huni:1},fixed:[{type:"kalas",x:4.5,y:5.88,a:0},{type:"kalas",x:4.5,y:7.6,a:0}]})];var Bh={ilk:[{type:"kalas",x:5.25,y:1.5,a:30,flip:!1},{type:"kalas",x:1.75,y:9.75,a:-45,flip:!0}],kavis:[{type:"kavis",x:.5,y:4.75,a:30,flip:!1},{type:"kalas",x:6,y:1.75,a:-15,flip:!1}],zikzak:[{type:"kalas",x:6.5,y:1.75,a:-45,flip:!0},{type:"kalas",x:8,y:10.5,a:-60,flip:!1}],tramp:[{type:"trambolin",x:1.5,y:9.75,a:-45,flip:!1},{type:"kalas",x:4.75,y:8,a:-30,flip:!0}],hiz:[{type:"hizlandirici",x:1.75,y:9,a:45,flip:!1},{type:"kalas",x:1.75,y:5.75,a:-90,flip:!0}],huni:[{type:"huni",x:7.75,y:1,a:-30,flip:!0},{type:"kalas",x:5.75,y:4.75,a:15,flip:!1},{type:"kalas",x:1.75,y:12.25,a:-30,flip:!1}],tavan:[{type:"kalas",x:2,y:9.5,a:-30,flip:!1},{type:"kalas",x:7,y:2,a:30,flip:!0},{type:"kavis",x:6.25,y:2,a:60,flip:!1}],duvar:[{type:"kalas",x:4.25,y:.5,a:-30,flip:!1},{type:"kalas",x:3.5,y:7,a:15,flip:!0},{type:"trambolin",x:2.25,y:9.75,a:-15,flip:!1}],merdiven:[{type:"kalas",x:6.75,y:1,a:-15,flip:!1},{type:"kalas",x:6.5,y:9.5,a:15,flip:!0}],yukari:[{type:"hizlandirici",x:1.75,y:6.5,a:45,flip:!1},{type:"kalas",x:5,y:8.5,a:15,flip:!0},{type:"kavis",x:7.5,y:5,a:-15,flip:!0}],cift:[{type:"trambolin",x:5.75,y:4,a:-60,flip:!1},{type:"trambolin",x:3.25,y:2.5,a:0,flip:!1},{type:"kalas",x:.5,y:11.5,a:-60,flip:!1}],labirent:[{type:"kalas",x:8.25,y:5.5,a:30,flip:!1},{type:"kavis",x:4,y:10.25,a:-75,flip:!1}],ucurum:[{type:"hizlandirici",x:2.75,y:3.75,a:45,flip:!1},{type:"kalas",x:6.75,y:8,a:30,flip:!0}],sarmal:[{type:"kalas",x:6,y:2.75,a:-15,flip:!1},{type:"kalas",x:2,y:12.5,a:120,flip:!1},{type:"kavis",x:7.75,y:7,a:-30,flip:!0}],ustasi:[{type:"kalas",x:2.5,y:11,a:-15,flip:!0},{type:"kalas",x:3,y:.5,a:-75,flip:!1},{type:"trambolin",x:2.75,y:1.5,a:-75,flip:!1}],final:[{type:"kalas",x:3.25,y:8.25,a:-15,flip:!0},{type:"kalas",x:6,y:4.5,a:-75,flip:!0},{type:"kalas",x:8.25,y:8,a:-60,flip:!1},{type:"kalas",x:3.5,y:1,a:0,flip:!1},{type:"kavis",x:6.25,y:10,a:30,flip:!0},{type:"kavis",x:3.5,y:4.5,a:-75,flip:!0},{type:"trambolin",x:8,y:.5,a:15,flip:!0},{type:"hizlandirici",x:1.75,y:7.25,a:-90,flip:!0},{type:"huni",x:2.25,y:2.5,a:0,flip:!0}]};var Hp=.25,Gp=15,Uc={id:"serbest",name:"Serbest At\xF6lye",w:9,h:13,start:{x:1,y:12.2,vx:1},cup:{x:7.5,y:1},stars:[],fixed:[],inv:{kalas:99,kisa:99,kavis:99,trambolin:99,hizlandirici:99,huni:99}},Xv={kalas:'<svg viewBox="0 0 40 40"><rect x="3" y="17" width="34" height="6" rx="2" fill="#c98a4b" stroke="#6b3f1a"/></svg>',kisa:'<svg viewBox="0 0 40 40"><rect x="11" y="17" width="18" height="6" rx="2" fill="#c98a4b" stroke="#6b3f1a"/></svg>',kavis:'<svg viewBox="0 0 40 40"><path d="M6 6 A26 26 0 0 0 32 32" fill="none" stroke="#6b3f1a" stroke-width="8" stroke-linecap="round"/><path d="M6 6 A26 26 0 0 0 32 32" fill="none" stroke="#c98a4b" stroke-width="5" stroke-linecap="round"/></svg>',trambolin:'<svg viewBox="0 0 40 40"><rect x="7" y="14" width="26" height="6" rx="3" fill="#e8413a"/><path d="M10 21v8M30 21v8M14 24l4 4 4-4 4 4 4-4" stroke="#999" stroke-width="2" fill="none"/></svg>',hizlandirici:'<svg viewBox="0 0 40 40"><rect x="4" y="16" width="32" height="8" rx="3" fill="#2f7cf6"/><path d="M12 20h14m-5-4 5 4-5 4" stroke="#ffe14a" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',huni:'<svg viewBox="0 0 40 40"><path d="M4 10 L15 26 M25 26 L36 10" stroke="#6b3f1a" stroke-width="7" stroke-linecap="round"/><path d="M4 10 L15 26 M25 26 L36 10" stroke="#c98a4b" stroke-width="4" stroke-linecap="round"/></svg>'};function Oh(i){let e=new En,t=new Pt(30,1,.1,200),n=vr("pist");n.unlocked??(n.unlocked=1),n.stars??(n.stars={}),n.layouts??(n.layouts={}),e.background=new Ue(2042414),e.add(new zn(16774374,2764854,.6));let s=new li(16773336,2);s.position.set(-5,10,12),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50}),s.shadow.bias=-6e-4,e.add(s),e.add(s.target);let r=new St;e.add(r);let a=tn(512,512,(b,N,J)=>{b.drawImage(Ss(31,"#5e4029","#3a2414",512,512).image,0,0);for(let q=16;q<J;q+=32)for(let ge=16;ge<N;ge+=32)b.fillStyle="rgba(15,8,3,0.8)",b.beginPath(),b.arc(ge,q,4.5,0,7),b.fill(),b.fillStyle="rgba(255,220,180,0.12)",b.beginPath(),b.arc(ge+1,q+2,4.5,0,3.14),b.fill()},{repeat:[3,4]}),o=new Oe(new Qt(1,1,.3),new ut({map:a,roughness:.8}));o.receiveShadow=!0,r.add(o);let l=new ut({map:Ss(41,"#6a4024","#40240f",512,128),roughness:.6}),c=new St;r.add(c);let u=new St;r.add(u);let f=new St;r.add(f);let d=new ji(e,300),h=new ut({map:Ss(51,"#f0c27a","#c48a48",256,64),roughness:.45}),g=new ut({color:10134445,metalness:.9,roughness:.3}),v=new ut({color:15221050,roughness:.5}),m=tn(256,32,(b,N,J)=>{b.fillStyle="#2f7cf6",b.fillRect(0,0,N,J),b.strokeStyle="#ffe14a",b.lineWidth=5;for(let q=20;q<N;q+=46)b.beginPath(),b.moveTo(q,5),b.lineTo(q+14,16),b.lineTo(q,27),b.stroke()}),p=new ut({map:m,emissive:1718912,emissiveMap:m,emissiveIntensity:.6,roughness:.4}),w=new Zt({color:10481919,transparent:!0,opacity:.35,depthWrite:!1}),L={};function M(b){if(L[b])return L[b];let N=ja[b],J=[];for(let[q,ge,xe,Le]of N.segs){let Ae=Math.hypot(xe-q,Le-ge)+vn.th*2.4,xt=new Qt(Ae,vn.th*2.6,.7);xt.rotateZ(Math.atan2(Le-ge,xe-q)),xt.translate((q+xe)/2,(ge+Le)/2,0),J.push(xt)}return L[b]=Mc(J)}function _(b){let N=new St,J=b.fixed?g:b.type==="trambolin"?v:b.type==="hizlandirici"?p:h,q=new Oe(M(b.type),b.ghost?w:J);if(q.castShadow=!b.ghost,q.receiveShadow=!0,N.add(q),b.type==="trambolin"&&!b.ghost)for(let xe of[-.4,.4]){let Le=new Oe(new on(.06,.06,.35,8),g);Le.position.set(xe,-.22,0),N.add(Le)}let ge=new Oe(M(b.type),new Zt({color:16769354,transparent:!0,opacity:0,depthWrite:!1}));return ge.scale.set(1.04,2.2,1.1),N.add(ge),N.userData={p:b,sel:ge},T(N),N}function T(b){let N=b.userData.p;b.position.set(N.x,N.y,0),b.rotation.set(0,0,(N.a||0)*Math.PI/180),b.scale.set(N.flip?-1:1,1,1)}let D=new St;r.add(D);{let b=new Oe(new on(.34,.34,1.2,24,1,!0),new ut({color:13137203,metalness:1,roughness:.3,side:Bt}));b.rotation.z=Math.PI/2,b.position.x=-.5,D.add(b);let N=new Oe(new oi(.34,.06,8,24),b.material);N.rotation.y=Math.PI/2,N.position.x=.1,D.add(N)}let y=new St;r.add(y);{let b=new xn({color:15398655,roughness:.05,transparent:!0,opacity:.28,clearcoat:1,side:Bt,depthWrite:!1}),N=new Oe(new on(.52,.48,.66,32,1,!0),b);N.position.y=.33,N.renderOrder=3,y.add(N);let J=new Oe(new on(.48,.48,.08,32),new ut({color:16765498,metalness:1,roughness:.25}));J.position.y=0,y.add(J);let q=new Oe(new oi(.52,.04,8,32),J.material);q.rotation.x=Math.PI/2,q.position.y=.66,y.add(q);let ge=bs(16769162,2.2);ge.position.y=.4,y.add(ge),y.userData.glow=ge}let I=new bi;for(let b=0;b<10;b++){let N=Math.PI/2+b*Math.PI/5,J=b%2?.14:.32;b?I.lineTo(Math.cos(N)*J,Math.sin(N)*J):I.moveTo(Math.cos(N)*J,Math.sin(N)*J)}let B=new ya(I,{depth:.1,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2});B.center();let V=new ut({color:16763938,metalness:.8,roughness:.25,emissive:6702080,emissiveIntensity:.6}),Y=[],ee=new ia(new vt,new Sa({color:16777215,dashSize:.15,gapSize:.12,transparent:!0,opacity:.55}));r.add(ee);let C=null,Z=-1,ae=[],oe=[],fe=null,te=null,he="idle",ce=null,Ee=null,Ce=null,et=0,Ye=1,je=[],le=0,pe=0,Te=0,He=Nn('<div class="phud"></div>'),we=Nn('<div class="tray"></div>'),ze=Nn(`<div class="selbar"><button data-a="l" aria-label="${z("Sola d\xF6nd\xFCr")}">\u27F2</button><button data-a="r" aria-label="${z("Sa\u011Fa d\xF6nd\xFCr")}">\u27F3</button><button data-a="f" aria-label="${z("\xC7evir")}">\u21CB</button><button data-a="x" aria-label="${z("Kald\u0131r")}">\u{1F5D1}</button></div>`);ze.querySelectorAll("button").forEach(b=>b.onpointerdown=N=>{N.stopPropagation(),N.preventDefault(),O(b.dataset.a)});let tt=b=>(C.inv[b]||0)-ae.filter(N=>N.type===b).length;function me(b){Z=b,C=b<0?Uc:Qi[b],b<0?(n.sandbox??(n.sandbox={start:{...Uc.start},cup:{...Uc.cup},placed:[]}),C={...Uc,start:n.sandbox.start,cup:n.sandbox.cup},ae=n.sandbox.placed):ae=(n.layouts[C.id]||[]).map(N=>({...N})),n.cur=b,Gt(),le=0,je.forEach(N=>u.remove(N)),je=[],_e(),Me(),Se(),de(),U(),b>=0&&C.tip&&!n["tip_"+C.id]&&(n["tip_"+C.id]=1,Gt(),setTimeout(()=>It(z(C.tip),4500),400))}function _e(){o.scale.set(C.w+.6,C.h+.6,1),o.position.set(C.w/2,C.h/2,-.5),c.clear();let b=.35,N=C.w+.6+b*2,J=C.h+.6+b*2;for(let[q,ge,xe,Le]of[[C.w/2,-.3-b/2,N,b],[C.w/2,C.h+.3+b/2,N,b],[-.3-b/2,C.h/2,b,J],[C.w+.3+b/2,C.h/2,b,J]]){let Ae=new Oe(new Qt(xe,Le,.7),l);Ae.position.set(q,ge,-.3),Ae.castShadow=Ae.receiveShadow=!0,c.add(Ae)}s.position.set(C.w/2-5,C.h/2+10,12),s.target.position.set(C.w/2,C.h/2,0),D.position.set(C.start.x,C.start.y,0),D.rotation.z=Math.atan2(C.start.vy||0,C.start.vx||1e-4)+((C.start.vx||0)===0,0),C.start.vx||(D.rotation.z=-Math.PI/2),y.position.set(C.cup.x,C.cup.y,0),Y.forEach(q=>f.remove(q)),Y=(C.stars||[]).map(q=>{let ge=new Oe(B,V);return ge.position.set(q.x,q.y,0),ge.castShadow=!0,f.add(ge),ge}),re(i.w,i.h)}function Me(){oe.forEach(b=>u.remove(b)),oe=[];for(let b of C.fixed||[]){let N=_({...b,fixed:!0});u.add(N)}for(let b of ae){let N=_(b);u.add(N),oe.push(N)}ke(null)}function ve(){Z>=0?n.layouts[C.id]=ae.map(b=>({type:b.type,x:b.x,y:b.y,a:b.a,flip:!!b.flip})):n.sandbox.placed=ae,Gt()}function Se(){he="edit",Ee&&(e.remove(Ee),Ee=null),ce=null,pn(0),Y.forEach(b=>{b.visible=!0,b.scale.setScalar(1)}),de()}function Ge(){if(he==="run")return Se();ke(null),Ce=Bp(C,ae),ce=Op(C),et=0,Ee=di(n.ball||"mavi",vn.r),Ee.position.set(ce.x,ce.y,0),r.add(Ee);let b=bs(10475775,1.3);b.material.opacity=.55,Ee.add(b),b.scale.setScalar(1.3/vn.r),he="run",ee.visible=!1,vs(.5),de()}function Ve(b){he="result",Te=0,pn(0);let N=ce.path.map(([J,q])=>new k(J,q,.35));if(N.length>1&&(ee.geometry.dispose(),ee.geometry=new vt().setFromPoints(N),ee.computeLineDistances(),ee.visible=!0),b==="win"){let J=(C.stars||[]).length,q=ce.stars.length,ge=J?1+Math.round(2*q/J):3;Ji(),Ki(30);let xe=y.position.clone();if(d.emit(xe.x+r.position.x,xe.y+.6+r.position.y,.5,80,{color:16765498,speed:6,up:2,size:.3,life:1.2}),Z<0){It(z("Barda\u011Fa ula\u015Ft\u0131!")),setTimeout(Se,1200);return}n.stars[C.id]=Math.max(n.stars[C.id]||0,ge),n.unlocked=Math.max(n.unlocked,Math.min(Qi.length,Z+2)),bt(),setTimeout(()=>Vt(`<h2>${z("Barda\u011Fa ula\u015Ft\u0131!")}</h2>
        <div class="stars">${[1,2,3].map(Le=>`<span class="${Le<=ge?"on":""}">\u2605</span>`).join("")}</div>
        <p class="center">${J?z("Y\u0131ld\u0131zlar: {a} / {b}",{a:q,b:J}):""}</p>`,[...Z+1<Qi.length?[[`\u25B6 ${z("Sonraki b\xF6l\xFCm")}`,"pri",()=>me(Z+1)]]:[[z("Tebrikler! T\xFCm b\xF6l\xFCmler bitti."),"pri",()=>ye()]],[z("Bu b\xF6l\xFCmde kal"),"",()=>Se()],[z("B\xF6l\xFCmler"),"ghost",()=>ye()]],{dismiss:!1}),900)}else br(),It(b==="out"?z("Bilye panodan d\xFC\u015Ft\xFC. Kesikli \xE7izgi izledi\u011Fi yolu g\xF6steriyor."):z("Bilye tak\u0131ld\u0131. Par\xE7alar\u0131 biraz oynat."),2600),setTimeout(Se,900)}function ke(b){oe.forEach(N=>N.userData.sel.material.opacity=0),fe=b,b&&(b.userData.sel.material.opacity=.35),ze.classList.toggle("on",!!b),Xe()}function Xe(){if(!fe)return;let b=new k;fe.getWorldPosition(b),b.y+=.9,b.project(t),ze.style.left=Math.min(i.w-110,Math.max(110,(b.x+1)/2*i.w))+"px",ze.style.top=Math.max(70,(1-b.y)/2*i.h-30)+"px"}function O(b){if(!fe)return;let N=fe.userData.p;if(ft("tap"),b==="l")N.a=(N.a||0)+Gp;else if(b==="r")N.a=(N.a||0)-Gp;else if(b==="f")N.flip=!N.flip;else if(b==="x"){rt(fe);return}N.a=((N.a+180)%360+360)%360-180,T(fe),ve()}function rt(b){let N=oe.indexOf(b);N<0||(u.remove(b),oe.splice(N,1),ae.splice(ae.indexOf(b.userData.p),1),ke(null),ve(),U(),ft("drop"))}let Ze=new Kt(new k(0,0,1),0),R=new k;function x(b,N){return i.ray(t,b,N).ray.intersectPlane(Ze,R)?{x:R.x-r.position.x,y:R.y-r.position.y}:null}function E(b,N){let J=1e9;for(let q of Fh(b)){let ge=q.bx-q.ax,xe=q.by-q.ay,Le=ge*ge+xe*xe,Ae=((N.x-q.ax)*ge+(N.y-q.ay)*xe)/Le;Ae=Math.max(0,Math.min(1,Ae)),J=Math.min(J,Math.hypot(N.x-q.ax-ge*Ae,N.y-q.ay-xe*Ae))}return J}let A=b=>Math.round(b/Hp)*Hp,P=(b,N)=>Math.max(.3,Math.min(N-.3,b));function $(b){if(he==="result"){Se();return}if(he!=="edit")return;let N=x(b.x,b.y);if(!N)return;if(Z<0){if(Math.hypot(N.x-C.start.x,N.y-C.start.y)<.6){te={kind:"start",ox:C.start.x-N.x,oy:C.start.y-N.y};return}if(Math.hypot(N.x-C.cup.x,N.y-C.cup.y-.3)<.7){te={kind:"cup",ox:C.cup.x-N.x,oy:C.cup.y-N.y};return}}let J=null,q=b.touch?.6:.4;for(let ge of oe){let xe=E(ge.userData.p,N);xe<q&&(q=xe,J=ge)}J?(ke(J),te={kind:"piece",m:J,ox:J.userData.p.x-N.x,oy:J.userData.p.y-N.y,moved:0,sx:b.x,sy:b.y},ft("pick")):ke(null)}function j(b){if(!te)return;let N=x(b.x,b.y);if(!N)return;if(te.kind==="start"){C.start.x=P(A(N.x+te.ox),C.w),C.start.y=P(A(N.y+te.oy),C.h),D.position.set(C.start.x,C.start.y,0);return}if(te.kind==="cup"){C.cup.x=P(A(N.x+te.ox),C.w),C.cup.y=Math.max(0,Math.min(C.h-1,A(N.y+te.oy))),y.position.set(C.cup.x,C.cup.y,0);return}let J=te.m.userData.p;te.moved=Math.max(te.moved,Math.hypot(b.x-te.sx,b.y-te.sy)),J.x=A(N.x+te.ox),J.y=A(N.y+te.oy),T(te.m),Xe()}function K(b){if(!te)return;let N=te;if(te=null,N.kind!=="piece"){ve();return}let J=N.m.userData.p;if(J.x<-.6||J.x>C.w+.6||J.y<-.6||J.y>C.h+.6){rt(N.m);return}J.x=P(J.x,C.w),J.y=P(J.y,C.h),T(N.m),Xe(),N.moved>6&&ft("drop"),ve()}function se(b){fe&&he==="edit"&&O(b.deltaY>0?"r":"l")}function F(b){let N=b.key.toLowerCase();if(N===" "||N==="enter"){Ge();return}fe&&(N==="q"?O("l"):N==="e"?O("r"):N==="f"?O("f"):(N==="delete"||N==="backspace")&&O("x"))}function G(b,N){if(he!=="edit")return;if(tt(b)<=0){ft("no"),It(z("Bu par\xE7adan kalmad\u0131"));return}N.preventDefault();let J={type:b,x:C.w/2,y:C.h/2,a:0,flip:!1};ae.push(J);let q=_(J);u.add(q),oe.push(q),ke(q),ft("pick");let ge=N.pointerType==="touch"?.9:0;te={kind:"piece",m:q,ox:0,oy:ge,moved:99,sx:0,sy:0};let xe=Ae=>j({x:Ae.clientX,y:Ae.clientY}),Le=Ae=>{removeEventListener("pointermove",xe),removeEventListener("pointerup",Le),removeEventListener("pointercancel",Le),K(Ae),U()};addEventListener("pointermove",xe),addEventListener("pointerup",Le),addEventListener("pointercancel",Le),xe(N),U()}function X(){let b=Bh[C.id];if(!b){It(z("Bu b\xF6l\xFCm i\xE7in ipucu yok"));return}if(le>=b.length){It(z("T\xFCm ipu\xE7lar\u0131 g\xF6sterildi"));return}let N={...b[le++],ghost:!0},J=_(N);u.add(J),je.push(J),qn(3),It(z("\u0130pucu: soluk par\xE7an\u0131n yerine bir {ad} koy",{ad:z(ja[N.type].name).toLocaleLowerCase()}),2600)}function H(){ae.splice(0),Me(),ve(),U(),ee.visible=!1,ft("drop")}function Q(b){if(pe+=b,Y.forEach((N,J)=>{N.rotation.y=pe*2+J}),y.userData.glow.material.opacity=.5+Math.sin(pe*3)*.2,je.forEach(N=>N.children[0].material.opacity=.25+Math.sin(pe*5)*.12),he==="run"&&ce){et+=b*Ye;let N=[],J=0;for(;et>=vn.dt&&J<2400&&(et-=vn.dt,J++,zp(ce,Ce,C,vn.dt,N),J%24===0&&ce.path.push([ce.x,ce.y]),ce.state==="run"););let q=ce.x-Ee.position.x;bp(Ee,q),Ee.position.set(ce.x,ce.y,0);for(let ge of N)if(ge.type==="hit"&&_s(Math.min(1,ge.p/8),ge.cup?"glass":ge.kind==="bounce"?"metal":"wood"),ge.type==="boost"&&(vs(.7),d.emit(ce.x+r.position.x,ce.y+r.position.y,.3,12,{color:7320319,speed:3,size:.25})),ge.type==="star"){let xe=Y[ge.i];xe.visible=!1,qn(6+ge.i),d.emit(xe.position.x+r.position.x,xe.position.y+r.position.y,.3,30,{color:16765498,speed:4,size:.3})}pn(Math.min(1,Math.hypot(ce.vx,ce.vy)/9)*(ce.still?0:1)),ce.state!=="run"&&Ve(ce.state)}d.update(b),fe&&Xe()}function re(b,N){if(t.aspect=b/N,t.updateProjectionMatrix(),d.setScale(N),!C)return;let J=70,q=112,ge=(N-J-q)/N,xe=C.w+1.4,Le=(C.h+1.4)/Math.max(.4,ge),Ae=wi(t,xe,Le,t.aspect),xt=2*Ae*Math.tan(Yi.degToRad(t.fov/2))/N,wt=C.h/2-(q-J)/2*xt;t.position.set(C.w/2,wt,Ae),t.lookAt(C.w/2,wt,0),Xe()}function de(){if(!C)return;let b=Z<0?z("Serbest At\xF6lye"):`${Z+1}. ${z(C.name)}`;He.innerHTML=`<div class="pbar"><b>${b}</b>
      ${Z>=0?`<span class="pst">${"\u2605".repeat(n.stars[C.id]||0)}${"\u2606".repeat(3-(n.stars[C.id]||0))}</span>`:""}</div>
      <div class="pact">
        ${Z>=0?`<button class="rbtn" data-a="hint" aria-label="${z("\u0130pucu")}">\u{1F4A1}</button>`:""}
        <button class="rbtn" data-a="clear" aria-label="${z("Temizle")}">\u21BA</button>
        <button class="rbtn" data-a="fast" aria-label="${z("H\u0131z")}">${Ye>1?"\u23E9":"\u25B7"}</button>
        <button class="rbtn go ${he==="run"?"stop":""}" data-a="go">${he==="run"?"\u25A0 "+z("Durdur"):"\u25B6 "+z("B\u0131rak")}</button>
      </div>`,He.querySelectorAll("[data-a]").forEach(N=>N.onclick=()=>{ft("tap");let J=N.dataset.a;J==="go"?Ge():J==="hint"?X():J==="clear"?he==="edit"&&H():J==="fast"&&(Ye=Ye>1?1:2.2,de())})}function U(){C&&(we.innerHTML=Object.keys(C.inv).map(b=>{let N=tt(b),J=Z<0;return`<button class="piece ${N>0?"":"empty"}" data-t="${b}">${Xv[b]}<small>${z(ja[b].name)}</small>${J?"":`<em>${N}</em>`}</button>`}).join(""),we.querySelectorAll("[data-t]").forEach(b=>b.onpointerdown=N=>G(b.dataset.t,N)))}function ye(){he="menu",Ut(),ke(null),C||me(Math.min(n.unlocked-1,Qi.length-1)),he="menu";let b=Qi.map((xe,Le)=>{let Ae=Le<n.unlocked,xt=n.stars[xe.id]||0;return`<button class="lv ${Ae?"":"locked"}" data-i="${Le}" ${Ae?"":"disabled"}><b>${Ae?Le+1:"\u{1F512}"}</b><small>${Ae?"\u2605".repeat(xt)+"\u2606".repeat(3-xt):""}</small><i>${Ae?z(xe.name):""}</i></button>`}).join(""),N=n.unlocked>=4,J=Vt(`<h2>\u{1F3A2} ${z("Bilye Pisti")}</h2>
      <p class="lead center">${z("Par\xE7alar\u0131 panoya yerle\u015Ftir, bilyeyi b\u0131rak ve barda\u011Fa ula\u015Ft\u0131r. Y\u0131ld\u0131zlar\u0131 da toplarsan tam puan!")}</p>
      ${n.cur!==void 0&&n.cur!==null?`<button class="btn pri wide" data-k="resume">\u25B6 ${n.cur<0?z("Serbest at\xF6lyeye devam et"):z("{n}. b\xF6l\xFCme devam et",{n:n.cur+1})}</button>`:""}
      <div class="lvgrid pist">${b}</div>
      <button class="btn wide ${N?"":"locked"}" data-k="sand" ${N?"":"disabled"}>\u{1F6E0} ${z("Serbest At\xF6lye")} \xB7 ${N?z("s\u0131n\u0131rs\u0131z par\xE7a, kendi pistini kur"):z("4. b\xF6l\xFCmde a\xE7\u0131l\u0131r")}</button>`,[[`\u2302 ${z("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});J.querySelectorAll("[data-i]").forEach(xe=>xe.onclick=()=>{ft("tap"),Ut(),me(+xe.dataset.i)});let q=J.querySelector("[data-k=resume]");q&&(q.onclick=()=>{ft("tap"),Ut(),me(n.cur)});let ge=J.querySelector("[data-k=sand]");ge&&N&&(ge.onclick=()=>{ft("tap"),Ut(),me(-1)})}return{id:"pist",scene:e,camera:t,hud:He,enter(){i.hud.appendChild(He),i.hud.appendChild(we),i.hud.appendChild(ze),C=null,ye()},exit(){ve&&C&&ve(),bt(),He.remove(),we.remove(),ze.remove(),pn(0),Ut(),Ee&&(Ee.removeFromParent(),Ee=null),he="idle"},update:Q,resize:re,down:$,move:j,up:K,wheel:se,key:F,pause(){C&&ve(),bt()},menu(){he==="run"&&Se(),ye()},relabel(){de(),U(),he==="menu"&&ye()},debug:()=>({phase:he,lvIdx:Z,placed:ae,ball:ce}),_test:{load:me,go:Ge,toScreen(b,N){let J=new k(b,N,0).project(t);return{x:(J.x+1)/2*i.w,y:(1-J.y)/2*i.h}},placeSolution:()=>{ae.splice(0,ae.length,...(Bh[C.id]||[]).map(b=>({...b}))),Me(),ve(),U()}}}}lp();_r(dt.data.settings.lang||sp());var qv=navigator.deviceMemory&&navigator.deviceMemory<=3||/[?&]q=low/.test(location.search),Hh=dt.data.settings.lite??!!qv;Th();var ws=kt("#gl"),Qa=Mp(ws,Hh),$p=Sp(Qa),Vp=new wa,Wp=new be,gt={renderer:Qa,lite:Hh,hud:kt("#hud"),w:innerWidth,h:innerHeight,aspect:innerWidth/innerHeight,ray(i,e,t){return Wp.set(e/gt.w*2-1,-(t/gt.h)*2+1),Vp.setFromCamera(Wp,i),Vp},home:()=>eo(),relabel:()=>{Je?Je.relabel&&Je.relabel():to()}},Jt={scene:new En,camera:new Pt(32,1,.1,100),balls:[]};{let i=Jt.scene;i.background=new Ue(1314314),i.add(new zn(16772829,2759184,.35));let e=new Ta(16769720,90,40,.5,.7,1.4);e.position.set(-3,12,6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),i.add(e);let t=new Ei(7317759,8,20);t.position.set(6,3,-4),i.add(t);let n=tn(512,512,(a,o,l)=>{let c=a.createRadialGradient(o/2,l/2,20,o/2,l/2,o/1.4);c.addColorStop(0,"#5a1420"),c.addColorStop(.6,"#2a070d"),c.addColorStop(1,"#0e0204"),a.fillStyle=c,a.fillRect(0,0,o,l);for(let u=0;u<2e4;u++)a.fillStyle=`rgba(${Math.random()<.5?"255,180,180":"0,0,0"},0.05)`,a.fillRect(Math.random()*o,Math.random()*l,1,1)}),s=new Oe(new Si(14,64),new ut({map:n,roughness:1,color:16777215}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s),["gokkusagi","mavi","lav","galaksi","kirmizi","yesil","altin","opal","buz","celik","sari","mor"].forEach((a,o)=>{let l=o<3?.9:.5+Math.random()*.15,c=o*2.4,u=o<3?1.1+o*.4:2.4+o%4*.9,f=di(a,l);f.position.set(Math.cos(c)*u,l,Math.sin(c)*u-.5),i.add(f),Jt.balls.push({m:f,a:c,d:u,r:l,w:.03+Math.random()*.04})}),i.environment=$p}var Ts={},$v={misket:Ph,sort:kh,pist:Oh},Je=null;function Yv(i){return Ts[i]||(Ts[i]=$v[i](gt),Ts[i].scene.environment=$p,Ts[i].resize(gt.w,gt.h)),Ts[i]}function Yp(i){ys(),Je&&Je.exit(),Ut(),Je=Yv(i),dt.data.last=i,Gt(),kt("#home").classList.remove("on"),kt("#topbtns").classList.add("on"),Je.resize(gt.w,gt.h),Je.enter()}function eo(){Je&&(Je.exit(),Je=null),Ut(),kt("#topbtns").classList.remove("on"),to(),kt("#home").classList.add("on")}var Zv=(i,e)=>`--c1:${i};--c2:${e}`;function Jv(i){let e=dt.data.modes;if(i==="misket"){let s=Object.keys(e.misket.wins||{}).length;return e.misket.match?z("Yar\u0131m kalan ma\xE7 var"):s?z("{n} / {m} rakip yenildi",{n:s,m:fi.length}):z("Yeni")}if(i==="sort"){let s=e.sort.unlocked||1;return e.sort.cur?z("Seviye {n} yar\u0131m kald\u0131",{n:e.sort.cur.n||"\u267E"}):s>1?z("Seviye {n}",{n:s}):z("Yeni")}let t=e.pist.unlocked||1,n=Object.values(e.pist.stars||{}).reduce((s,r)=>s+r,0);return t>1||n?z("B\xF6l\xFCm {n} \xB7 {s} y\u0131ld\u0131z",{n:Math.min(t,Qi.length),s:n}):z("Yeni")}function to(){let i=dt.data.last,e=(t,n,s,r)=>`<button class="modeCard ${i===t?"last":""}" data-m="${t}"><span class="ico">${r}</span><span><h3>${n}</h3><p>${s}</p><div class="pr">${i===t?"\u25B6 ":""}${Jv(t)}</div></span></button>`;kt("#home").innerHTML=`<div class="homeWrap">
    <div class="homeTitle"><h1>${z("Bilye At\xF6lyesi")}</h1><p>${z("\xDC\xE7 bilye oyunu, tek at\xF6lye")}</p></div>
    ${e("misket",z("Mahalle Misketi"),z("Ni\u015Fan al, fiskele, halkadaki bilyeleri d\u0131\u015Far\u0131 f\u0131rlat. Mahallenin \u015Fampiyonunu yen!"),`<span class="ball big" style="${Zv("#1c5fe0","#37b6ff")}"></span>`)}
    ${e("sort",z("Ayr\u0131\u015Ft\u0131rma At\xF6lyesi"),z("Banttan akan bilyeleri do\u011Fru kavanoza d\xFC\u015F\xFCr. H\u0131zlan, zincir yap, lavdan sak\u0131n!"),"\u{1FAD9}")}
    ${e("pist",z("Bilye Pisti"),z("Rampa, kavis, trambolin yerle\u015Ftir; bilyeyi barda\u011Fa ula\u015Ft\u0131r."),"\u{1F3A2}")}
    <div class="homeRow">
      <button class="btn" data-k="set">\u2699 ${z("Ayarlar")}</button>
      <button class="btn" data-k="lang">\u{1F310} ${Xn()==="tr"?"English":"T\xFCrk\xE7e"}</button>
    </div>
    <p class="ver">${"v6"} \xB7 ${z("Her oyunun kayd\u0131 ayr\u0131 tutulur, kald\u0131\u011F\u0131n yerden devam edersin.")}</p></div>`,kt("#home").querySelectorAll("[data-m]").forEach(t=>t.onclick=()=>{ys(),ft("tap"),Yp(t.dataset.m)}),kt("#home [data-k=set]").onclick=()=>{ys(),ft("tap"),qa(gt,to)},kt("#home [data-k=lang]").onclick=()=>{ft("tap"),_r(Xn()==="tr"?"en":"tr"),dt.data.settings.lang=Xn(),bt(),to()}}kt("#bHome").onclick=()=>{if(ft("tap"),!!Je){if(Rc()){Je.menu?Je.menu():eo();return}Je.menu?Je.menu():eo()}};var Rr=null;ws.addEventListener("pointerdown",i=>{if(ys(),!(Rr!==null&&i.pointerId!==Rr)){Rr=i.pointerId;try{ws.setPointerCapture(i.pointerId)}catch{}Je&&!Rc()&&Je.down({x:i.clientX,y:i.clientY,touch:i.pointerType==="touch"})}});ws.addEventListener("pointermove",i=>{i.pointerId===Rr&&Je&&Je.move({x:i.clientX,y:i.clientY})});var Zp=i=>{i.pointerId===Rr&&(Rr=null,Je&&Je.up({x:i.clientX,y:i.clientY}))};ws.addEventListener("pointerup",Zp);ws.addEventListener("pointercancel",Zp);ws.addEventListener("wheel",i=>{i.preventDefault(),Je&&Je.wheel&&Je.wheel(i)},{passive:!1});addEventListener("keydown",i=>{if(!(i.target&&i.target.tagName==="TEXTAREA")){if(ys(),i.key==="Escape"){Je&&(Je.menu?Je.menu():eo());return}Je&&!Rc()&&Je.key&&Je.key(i)}});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault(),{passive:!1});addEventListener("pointerdown",()=>{ys(),_c(!0)},{once:!1,passive:!0});function Gh(){gt.w=innerWidth,gt.h=innerHeight,gt.aspect=gt.w/gt.h,Qa.setSize(gt.w,gt.h,!1),Jt.camera.aspect=gt.aspect,Jt.camera.updateProjectionMatrix(),gt.aspect<.8?(Jt.camera.setViewOffset(gt.w,gt.h*1.75,0,gt.h*.66,gt.w,gt.h),Jt.dist=wi(Jt.camera,9,7,gt.aspect)*.95):(Jt.camera.clearViewOffset(),Jt.dist=wi(Jt.camera,9,7,gt.aspect)),Je&&Je.resize(gt.w,gt.h);for(let i of Object.values(Ts))i!==Je&&i.resize(gt.w,gt.h)}new ResizeObserver(Gh).observe(document.body);addEventListener("orientationchange",()=>setTimeout(Gh,200));Gh();document.addEventListener("visibilitychange",()=>{document.hidden?(Je&&Je.pause&&Je.pause(),bt(),_c(!1),pn(0)):_c(!0)});addEventListener("pagehide",()=>{Je&&Je.pause&&Je.pause(),bt()});var Xp=performance.now(),qp=0,Jp=0,kc=0,zh=0;function Kp(i){requestAnimationFrame(Kp);let e=Math.min(.05,(i-Xp)/1e3);if(Xp=i,Jp++,kc+=e,zh++,kc>1&&(window.__ba.fps=Math.round(zh/kc),kc=0,zh=0),gp(),Je){Je.update(e),Qa.render(Je.scene,Je.camera);return}qp+=e;let t=Jt.camera,n=qp*.06;Jt.icon?(t.position.set(.05,8.6,2.4),t.lookAt(.05,.6,-.75)):(t.position.set(Math.sin(n)*Jt.dist*.55,Jt.dist*.62,Math.cos(n)*Jt.dist*.55),t.lookAt(0,.6,0));for(let s of Jt.balls)s.m.userData.spin.rotation.y+=s.w*e*6;Qa.render(Jt.scene,t)}window.__ba={app:gt,S:dt,modes:Ts,menu:Jt,open:Yp,home:eo,tick(i=60,e=1/60){for(let t=0;t<i;t++)Je&&Je.update(e)},get current(){return Je},frames:()=>Jp,fps:0,miss:rp,version:"v6"};to();kt("#home").classList.add("on");requestAnimationFrame(Kp);setTimeout(()=>kt("#boot").classList.add("off"),250);Rp()?setTimeout(()=>wh(gt,()=>{}),600):xc()&&!Ic()&&Date.now()-(dt.data.backupAt||0)>7*864e5&&(Za||Math.random()<.3)&&setTimeout(()=>Vt(`<h2>\u{1F4BE} ${z("Kayd\u0131n\u0131 yedekle")}</h2><p class="lead">${z("Taray\u0131c\u0131 bir s\xFCre kullan\u0131lmayan sitelerin kay\u0131tlar\u0131n\u0131 silebilir. Kay\u0131t kodunu kopyalay\u0131p bir yere not etmen iyi olur.")}</p>`,[[z("Kayd\u0131m\u0131 kopyala"),"pri",()=>{Cc()}],[z("Sonra"),"ghost",()=>{dt.data.backupAt=Date.now()-4*864e5,Gt()}]]),900);try{!Ha&&"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}catch{}tp&&console.log("Bilye At\xF6lyesi","v6",Hh?"hafif":"tam");})();
