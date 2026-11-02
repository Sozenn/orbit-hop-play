(()=>{var Bd=0,Cu=1,Od=2;var _s=1,zd=2,yr=3,ji=0,un=1,qt=2,Mi=0,_r=1,vr=2,Iu=3,Pu=4,Hd=5;var vs=100,Gd=101,Vd=102,Wd=103,Xd=104,qd=200,$d=201,Yd=202,Zd=203,Lu=204,Du=205,Jd=206,Kd=207,jd=208,Qd=209,ef=210,tf=211,nf=212,sf=213,rf=214,Vo=0,Wo=1,Xo=2,ir=3,qo=4,$o=5,Yo=6,Zo=7,wl=0,af=1,of=2,jn=0,Nu=1,Uu=2,ku=3,Fa=4,Fu=5,Bu=6,Ou=7;var zu=300,Qi=301,Ms=302,Al=303,Rl=304,Ba=306,$i=1e3,li=1001,Jo=1002,rn=1003,lf=1004;var Oa=1005;var ln=1006,Cl=1007;var es=1008;var In=1009,Hu=1010,Gu=1011,Mr=1012,Il=1013,Qn=1014,Hn=1015,ei=1016,Pl=1017,Ll=1018,br=1020,Vu=35902,Wu=35899,Xu=1021,qu=1022,Gn=1023,hi=1026,ts=1027,Dl=1028,Nl=1029,ns=1030,Ul=1031;var kl=1033,za=33776,Ha=33777,Ga=33778,Va=33779,Fl=35840,Bl=35841,Ol=35842,zl=35843,Hl=36196,Gl=37492,Vl=37496,Wl=37488,Xl=37489,Wa=37490,ql=37491,$l=37808,Yl=37809,Zl=37810,Jl=37811,Kl=37812,jl=37813,Ql=37814,ec=37815,tc=37816,nc=37817,ic=37818,sc=37819,rc=37820,ac=37821,oc=36492,lc=36494,cc=36495,uc=36283,hc=36284,Xa=36285,dc=36286;var ea=2300,Ko=2301,Ho=2302,mu=2303,gu=2400,xu=2401,yu=2402;var cf=3200;var qa=0,uf=1,ti="",gn="srgb",ta="srgb-linear",na="linear",Et="srgb";var Go=7680;var hf=519,df=512,ff=513,pf=514,fc=515,mf=516,gf=517,pc=518,xf=519,$u=35044;var Yu="300 es",Jn=2e3,sr=2001;function rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function am(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yf(){let i=ia("canvas");return i.style.display="block",i}var ed={},rr=null;function sa(...i){let e="THREE."+i.shift();rr?rr("log",e,...i):console.log(e,...i)}function _f(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function je(...i){i=_f(i);let e="THREE."+i.shift();if(rr)rr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=_f(i);let e="THREE."+i.shift();if(rr)rr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function fs(...i){let e=i.join(" ");e in ed||(ed[e]=!0,je(...i))}function vf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Mf={[Vo]:Wo,[Xo]:Yo,[qo]:Zo,[ir]:$o,[Wo]:Vo,[Yo]:Xo,[Zo]:qo,[$o]:ir},di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],td=1234567,Jr=Math.PI/180,ps=180/Math.PI;function ui(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function dt(i,e,t){return Math.max(e,Math.min(t,i))}function Zu(i,e){return(i%e+e)%e}function om(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function lm(i,e,t){return i!==e?(t-i)/(e-i):0}function Kr(i,e,t){return(1-t)*i+t*e}function cm(i,e,t,n){return Kr(i,e,1-Math.exp(-t*n))}function um(i,e=1){return e-Math.abs(Zu(i,e*2)-e)}function hm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pm(i,e){return i+Math.random()*(e-i)}function mm(i){return i*(.5-Math.random())}function gm(i){i!==void 0&&(td=i);let e=td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(i){return i*Jr}function ym(i){return i*ps}function _m(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function vm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Mm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*f,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*f,o*c);break;case"ZXZ":i.set(l*f,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*h,o*u,o*c);break;default:je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var is={DEG2RAD:Jr,RAD2DEG:ps,generateUUID:ui,clamp:dt,euclideanModulo:Zu,mapLinear:om,inverseLerp:lm,lerp:Kr,damp:cm,pingpong:um,smoothstep:hm,smootherstep:dm,randInt:fm,randFloat:pm,randFloatSpread:mm,seededRandom:gm,degToRad:xm,radToDeg:ym,isPowerOfTwo:_m,ceilPowerOfTwo:vm,floorPowerOfTwo:Mm,setQuaternionFromProperEuler:bm,normalize:wt,denormalize:Zn},th=class th{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var Te=th,An=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[a+0],h=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*v;m<0&&(d=-d,h=-h,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),I=Math.sin(T);p=Math.sin(p*T)/I,o=Math.sin(o*T)/I,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+v*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+v*o;let T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[a],d=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),f=o(r/2),d=l(n/2),h=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){let h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>f){let h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>f){let h=2*Math.sqrt(1+o-n-f);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+f-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},nh=class nh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;var L=nh,Vc=new L,nd=new An,ih=class ih{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],v=s[0],m=s[3],p=s[6],T=s[1],I=s[4],M=s[7],_=s[2],E=s[5],P=s[8];return r[0]=a*v+o*T+l*_,r[3]=a*m+o*I+l*E,r[6]=a*p+o*M+l*P,r[1]=c*v+u*T+f*_,r[4]=c*m+u*I+f*E,r[7]=c*p+u*M+f*P,r[2]=d*v+h*T+g*_,r[5]=d*m+h*I+g*E,r[8]=d*p+h*M+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*r,h=c*r-a*l,g=t*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(e,t)),this}rotate(e){return fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-e)),this}translate(e,t){return fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;var at=ih,Wc=new at,id=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sd=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){let i={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?na:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ta]:{primaries:e,whitePoint:n,transfer:na,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:id,fromXYZ:sd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var gt=Sm();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=ia("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xc(s[a].image)):r.push(Xc(s[a]))}else r=Xc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}var Tm=0,qc=new L,bn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=ln,a=es,o=Gn,l=In,c=i.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=ui(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=zu;bn.DEFAULT_ANISOTROPY=1;var sh=class sh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(c+1)/2,M=(h+1)/2,_=(p+1)/2,E=(u+d)/4,P=(f+v)/4,y=(g+m)/4;return I>M&&I>_?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=E/n,r=P/n):M>_?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=E/s,r=y/s):_<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(_),n=P/r,s=y/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(dt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sh.prototype.isVector4=!0;var Ot=sh,Qo=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ra=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var el=class extends bn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Tl=class Tl{constructor(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,f,d,h,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),a=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*u,h=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,h=l*f,g=c*u,v=c*f;t[0]=d+v*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,h=l*f,g=c*u,v=c*f;t[0]=d-v*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,h=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+v,t[1]=l*f,t[5]=v*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-v*f}else if(e.order==="XZY"){let d=a*l,h=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+v,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=v*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wm,e,Am)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Gi.crossVectors(n,Dn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Gi.crossVectors(n,Dn)),Gi.normalize(),ho.crossVectors(Dn,Gi),s[0]=Gi.x,s[4]=ho.x,s[8]=Dn.x,s[1]=Gi.y,s[5]=ho.y,s[9]=Dn.y,s[2]=Gi.z,s[6]=ho.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],v=n[6],m=n[10],p=n[14],T=n[3],I=n[7],M=n[11],_=n[15],E=s[0],P=s[4],y=s[8],R=s[12],U=s[1],V=s[5],$=s[9],Q=s[13],O=s[2],J=s[6],le=s[10],re=s[14],me=s[3],ae=s[7],de=s[11],B=s[15];return r[0]=a*E+o*U+l*O+c*me,r[4]=a*P+o*V+l*J+c*ae,r[8]=a*y+o*$+l*le+c*de,r[12]=a*R+o*Q+l*re+c*B,r[1]=u*E+f*U+d*O+h*me,r[5]=u*P+f*V+d*J+h*ae,r[9]=u*y+f*$+d*le+h*de,r[13]=u*R+f*Q+d*re+h*B,r[2]=g*E+v*U+m*O+p*me,r[6]=g*P+v*V+m*J+p*ae,r[10]=g*y+v*$+m*le+p*de,r[14]=g*R+v*Q+m*re+p*B,r[3]=T*E+I*U+M*O+_*me,r[7]=T*P+I*V+M*J+_*ae,r[11]=T*y+I*$+M*le+_*de,r[15]=T*R+I*Q+M*re+_*B,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],T=l*h-c*d,I=o*h-c*f,M=o*d-l*f,_=a*h-c*u,E=a*d-l*u,P=a*f-o*u;return t*(v*T-m*I+p*M)-n*(g*T-m*_+p*E)+s*(g*I-v*_+p*P)-r*(g*M-v*E+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],T=t*o-n*a,I=t*l-s*a,M=t*c-r*a,_=n*l-s*o,E=n*c-r*o,P=s*c-r*l,y=u*v-f*g,R=u*m-d*g,U=u*p-h*g,V=f*m-d*v,$=f*p-h*v,Q=d*p-h*m,O=T*Q-I*$+M*V+_*U-E*R+P*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/O;return e[0]=(o*Q-l*$+c*V)*J,e[1]=(s*$-n*Q-r*V)*J,e[2]=(v*P-m*E+p*_)*J,e[3]=(d*E-f*P-h*_)*J,e[4]=(l*U-a*Q-c*R)*J,e[5]=(t*Q-s*U+r*R)*J,e[6]=(m*M-g*P-p*I)*J,e[7]=(u*P-d*M+h*I)*J,e[8]=(a*$-o*U+c*y)*J,e[9]=(n*U-t*$-r*y)*J,e[10]=(g*E-v*M+p*T)*J,e[11]=(f*M-u*E-h*T)*J,e[12]=(o*R-a*V-l*y)*J,e[13]=(t*V-n*R+s*y)*J,e[14]=(v*I-g*_-m*T)*J,e[15]=(u*_-f*I+d*T)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,d=r*c,h=r*u,g=r*f,v=a*u,m=a*f,p=o*f,T=l*c,I=l*u,M=l*f,_=n.x,E=n.y,P=n.z;return s[0]=(1-(v+p))*_,s[1]=(h+M)*_,s[2]=(g-I)*_,s[3]=0,s[4]=(h-M)*E,s[5]=(1-(d+p))*E,s[6]=(m+T)*E,s[7]=0,s[8]=(g+I)*P,s[9]=(m-T)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Os.set(s[0],s[1],s[2]).length(),o=Os.set(s[4],s[5],s[6]).length(),l=Os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),qn.copy(this);let c=1/a,u=1/o,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,t.setFromRotationMatrix(qn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),h=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===sr)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,u=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),h=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Jn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===sr)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tl.prototype.isMatrix4=!0;var pt=Tl,Os=new L,qn=new pt,wm=new L(0,0,0),Am=new L(1,1,1),Gi=new L,ho=new L,Dn=new L,rd=new pt,ad=new An,fi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ad.setFromEuler(this),this.setFromQuaternion(ad,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rm=0,od=new L,zs=new An,wi=new pt,fo=new L,Or=new L,Cm=new L,Im=new An,ld=new L(1,0,0),cd=new L(0,1,0),ud=new L(0,0,1),hd={type:"added"},Pm={type:"removed"},Hs={type:"childadded",child:null},$c={type:"childremoved",child:null},Ht=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new fi,n=new An,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new at}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(ld,e)}rotateY(e){return this.rotateOnAxis(cd,e)}rotateZ(e){return this.rotateOnAxis(ud,e)}translateOnAxis(e,t){return od.copy(e).applyQuaternion(this.quaternion),this.position.add(od.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ld,e)}translateY(e){return this.translateOnAxis(cd,e)}translateZ(e){return this.translateOnAxis(ud,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fo.copy(e):fo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Or,fo,this.up):wi.lookAt(fo,Or,this.up),this.quaternion.setFromRotationMatrix(wi),s&&(wi.extractRotation(s.matrixWorld),zs.setFromRotationMatrix(wi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pm),$c.child=e,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Im,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new L(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lm={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Pt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},bf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Yc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Be=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=Zu(e,1),t=dt(t,0,1),n=dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return gt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=bf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return gt.workingToColorSpace(mn.copy(this),e),Math.round(dt(mn.r*255,0,255))*65536+Math.round(dt(mn.g*255,0,255))*256+Math.round(dt(mn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gn){gt.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+t,Vi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vi),e.getHSL(po);let n=Kr(Vi.h,po.h,t),s=Kr(Vi.s,po.s,t),r=Kr(Vi.l,po.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Be;Be.NAMES=bf;var aa=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Un=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new L,Ai=new L,Zc=new L,Ri=new L,Gs=new L,Vs=new L,dd=new L,Jc=new L,Kc=new L,jc=new L,Qc=new Ot,eu=new Ot,tu=new Ot,Pi=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),Ai.subVectors(n,t),Zc.subVectors(e,t);let a=$n.dot($n),o=$n.dot(Ai),l=$n.dot(Zc),c=Ai.dot(Ai),u=Ai.dot(Zc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Qc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Qc.fromBufferAttribute(e,t),eu.fromBufferAttribute(e,n),tu.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Qc,r.x),a.addScaledVector(eu,r.y),a.addScaledVector(tu,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),Ai.subVectors(e,t),$n.cross(Ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),$n.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Vs.subVectors(r,n),Jc.subVectors(e,n);let l=Gs.dot(Jc),c=Vs.dot(Jc);if(l<=0&&c<=0)return t.copy(n);Kc.subVectors(e,s);let u=Gs.dot(Kc),f=Vs.dot(Kc);if(u>=0&&f<=u)return t.copy(s);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gs,a);jc.subVectors(e,r);let h=Gs.dot(jc),g=Vs.dot(jc);if(g>=0&&h<=g)return t.copy(r);let v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vs,o);let m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return dd.subVectors(r,s),o=(f-u)/(f-u+(h-g)),t.copy(s).addScaledVector(dd,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},pi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),go.subVectors(this.max,zr),Ws.subVectors(e.a,zr),Xs.subVectors(e.b,zr),qs.subVectors(e.c,zr),Wi.subVectors(Xs,Ws),Xi.subVectors(qs,Xs),cs.subVectors(Ws,qs);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-cs.z,cs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,cs.z,0,-cs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-cs.y,cs.x,0];return!nu(t,Ws,Xs,qs,go)||(t=[1,0,0,0,1,0,0,0,1],!nu(t,Ws,Xs,qs,go))?!1:(xo.crossVectors(Wi,Xi),t=[xo.x,xo.y,xo.z],nu(t,Ws,Xs,qs,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ci=[new L,new L,new L,new L,new L,new L,new L,new L],Yn=new L,mo=new pi,Ws=new L,Xs=new L,qs=new L,Wi=new L,Xi=new L,cs=new L,zr=new L,go=new L,xo=new L,us=new L;function nu(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){us.fromArray(i,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=n.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Yt=new L,yo=new Te,Dm=0,Zt=class extends di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var oa=class extends Zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var la=class extends Zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends Zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Nm=new pi,Hr=new L,iu=new L,mi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);let t=Hr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(iu)),this.expandByPoint(Hr.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Um=0,On=new pt,su=new Ht,$s=new L,Nn=new pi,Gr=new pi,sn=new L,Rt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rm(e)?la:oa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new at().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return su.lookAt(e),su.updateMatrix(),this.applyMatrix4(su.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Gr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Nn.min,Gr.min),Nn.expandByPoint(sn),sn.addVectors(Nn.max,Gr.max),Nn.expandByPoint(sn)):(Nn.expandByPoint(Gr.min),Nn.expandByPoint(Gr.max))}Nn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)sn.fromBufferAttribute(o,c),l&&($s.fromBufferAttribute(e,c),sn.add($s)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new L,l[y]=new L;let c=new L,u=new L,f=new L,d=new Te,h=new Te,g=new Te,v=new L,m=new L;function p(y,R,U){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,R),f.fromBufferAttribute(n,U),d.fromBufferAttribute(r,y),h.fromBufferAttribute(r,R),g.fromBufferAttribute(r,U),u.sub(c),f.sub(c),h.sub(d),g.sub(d);let V=1/(h.x*g.y-g.x*h.y);isFinite(V)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(V),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(V),o[y].add(v),o[R].add(v),o[U].add(v),l[y].add(m),l[R].add(m),l[U].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let y=0,R=T.length;y<R;++y){let U=T[y],V=U.start,$=U.count;for(let Q=V,O=V+$;Q<O;Q+=3)p(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}let I=new L,M=new L,_=new L,E=new L;function P(y){_.fromBufferAttribute(s,y),E.copy(_);let R=o[y];I.copy(R),I.sub(_.multiplyScalar(_.dot(R))).normalize(),M.crossVectors(E,R);let V=M.dot(l[y])<0?-1:1;a.setXYZW(y,I.x,I.y,I.z,V)}for(let y=0,R=T.length;y<R;++y){let U=T[y],V=U.start,$=U.count;for(let Q=V,O=V+$;Q<O;Q+=3)P(e.getX(Q+0)),P(e.getX(Q+1)),P(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,f=new L;if(e)for(let d=0,h=e.count;d<h;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),h=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Zt(d,u,f)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mn=new L,cr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ru=new L,km=new L,Fm=new at,on=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ru.subVectors(n,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ru),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fm.getNormalMatrix(e),s=this.coplanarPoint(ru).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Bm=0,zn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=_r,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lu,this.blendDst=Du,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new on().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Te().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Te().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ur=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,Vr=new L,Zs=new L,Js=new L,Ks=new Te,Wr=new Te,Sf=new pt,_o=new L,Xr=new L,vo=new L,fd=new Te,au=new Te,pd=new Te,ua=class extends Ht{constructor(e=new ur){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ca(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new cr(n,3,0,!1)),Ys.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new Te(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zs.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zs.multiplyScalar(-Js.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Mo(_o.set(-.5,-.5,0),Js,a,Zs,s,r),Mo(Xr.set(.5,-.5,0),Js,a,Zs,s,r),Mo(vo.set(.5,.5,0),Js,a,Zs,s,r),fd.set(0,0),au.set(1,0),pd.set(1,1);let o=e.ray.intersectTriangle(_o,Xr,vo,!1,Vr);if(o===null&&(Mo(Xr.set(-.5,.5,0),Js,a,Zs,s,r),au.set(0,1),o=e.ray.intersectTriangle(_o,vo,Xr,!1,Vr),o===null))return;let l=e.ray.origin.distanceTo(Vr);l<e.near||l>e.far||t.push({distance:l,point:Vr.clone(),uv:Pi.getInterpolation(Vr,_o,Xr,vo,fd,au,pd,new Te),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mo(i,e,t,n,s,r){Ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Wr.x=r*Ks.x-s*Ks.y,Wr.y=s*Ks.x+r*Ks.y):Wr.copy(Ks),i.copy(e),i.x+=Wr.x,i.y+=Wr.y,i.applyMatrix4(Sf)}var Ii=new L,ou=new L,bo=new L,So=new L,ms=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ou.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),So.copy(this.origin).sub(ou);let r=e.distanceTo(t)*.5,a=-this.direction.dot(bo),o=So.dot(this.direction),l=-So.dot(bo),c=So.lengthSq(),u=Math.abs(1-a*a),f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=r*u,f>=0)if(d>=-g)if(d<=g){let v=1/u;f*=v,d*=v,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ou).addScaledVector(bo,d),h}intersectSphere(e,t){if(e.radius<0)return null;Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),s=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,T=n.y-a.y,I=n.z-a.z,M=Math.abs(l),_=Math.abs(c),E=Math.abs(u),P,y,R,U,V,$,Q,O,J,le,re,me;if(M>=_&&M>=E?(R=l,$=f,J=g,me=p,l>=0?(P=c,y=u,U=d,V=h,Q=v,O=m,le=T,re=I):(P=u,y=c,U=h,V=d,Q=m,O=v,le=I,re=T)):_>=E?(R=c,$=d,J=v,me=T,c>=0?(P=u,y=l,U=h,V=f,Q=m,O=g,le=I,re=p):(P=l,y=u,U=f,V=h,Q=g,O=m,le=p,re=I)):(R=u,$=h,J=m,me=I,u>=0?(P=l,y=c,U=f,V=d,Q=g,O=v,le=p,re=T):(P=c,y=l,U=d,V=f,Q=v,O=g,le=T,re=p)),R===0)return null;let ae=P/R,de=y/R,B=1/R,we=U-ae*$,Re=V-de*$,st=Q-ae*J,Ze=O-de*J,ze=le-ae*me,j=re-de*me,ce=ze*Ze-j*st,Ee=we*j-Re*ze,Ye=st*Re-Ze*we;if(s){if(ce<0||Ee<0||Ye<0)return null}else if((ce<0||Ee<0||Ye<0)&&(ce>0||Ee>0||Ye>0))return null;let Ie=ce+Ee+Ye;if(Ie===0)return null;let qe=B*(ce*$+Ee*J+Ye*me);return(Ie>0?qe<0:qe>0)?null:this.at(qe/Ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},md=new pt,hs=new ms,Eo=new mi,gd=new L,To=new L,wo=new L,Ao=new L,lu=new L,Ro=new L,xd=new L,Co=new L,We=class extends Ht{constructor(e=new Rt,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(lu.fromBufferAttribute(f,e),a?Ro.addScaledVector(lu,u):Ro.addScaledVector(lu.sub(t),u))}t.add(Ro)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(r),hs.copy(e.ray).recast(e.near),!(Eo.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Eo,gd)===null||hs.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),hs.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),I=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,_=I;M<_;M+=3){let E=o.getX(M),P=o.getX(M+1),y=o.getX(M+2);s=Io(this,p,e,n,c,u,f,E,P,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=o.getX(m),I=o.getX(m+1),M=o.getX(m+2);s=Io(this,a,e,n,c,u,f,T,I,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,h.start),I=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=T,_=I;M<_;M+=3){let E=M,P=M+1,y=M+2;s=Io(this,p,e,n,c,u,f,E,P,y),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){let T=m,I=m+1,M=m+2;s=Io(this,a,e,n,c,u,f,T,I,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Om(i,e,t,n,s,r,a,o){let l;if(e.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ji,o),l===null)return null;Co.copy(o),Co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:i}}function Io(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,To),i.getVertexPosition(l,wo),i.getVertexPosition(c,Ao);let u=Om(i,e,t,n,To,wo,Ao,xd);if(u){let f=new L;Pi.getBarycoord(xd,To,wo,Ao,f),s&&(u.uv=Pi.getInterpolatedAttribute(s,o,l,c,f,new Te)),r&&(u.uv1=Pi.getInterpolatedAttribute(r,o,l,c,f,new Te)),a&&(u.normal=Pi.getInterpolatedAttribute(a,o,l,c,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Pi.getNormal(To,wo,Ao,d.normal),u.face=d,u.barycoord=f}return u}var ha=class extends bn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=rn,u=rn,f,d){super(null,a,o,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Zt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new pt,yd=new pt,Po=[],_d=new pi,zm=new pt,qr=new We,$r=new mi,gi=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,zm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),_d.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(_d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),$r.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),yd.multiplyMatrices(n,js),qr.matrixWorld=yd,qr.raycast(e,Po);for(let a=0,o=Po.length;a<o;a++){let l=Po[a];l.instanceId=r,l.object=this,t.push(l)}Po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ha(new Float32Array(s*this.count),s,this.count,Dl,Hn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ds=new mi,Hm=new Te(.5,.5),Lo=new L,dr=class{constructor(e=new on,t=new on,n=new on,s=new on,r=new on,a=new on){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],v=r[9],m=r[10],p=r[11],T=r[12],I=r[13],M=r[14],_=r[15];if(s[0].setComponents(c-a,h-u,p-g,_-T).normalize(),s[1].setComponents(c+a,h+u,p+g,_+T).normalize(),s[2].setComponents(c+o,h+f,p+v,_+I).normalize(),s[3].setComponents(c-o,h-f,p-v,_-I).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,h-d,p-m,_-M).normalize();else if(s[4].setComponents(c-l,h-d,p-m,_-M).normalize(),t===Jn)s[5].setComponents(c+l,h+d,p+m,_+M).normalize();else if(t===sr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);let t=Hm.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var da=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tl=new L,nl=new L,vd=new pt,Yr=new ms,Do=new mi,cu=new L,Md=new L,fa=class extends Ht{constructor(e=new Rt,t=new da){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)tl.fromBufferAttribute(t,s-1),nl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=tl.distanceTo(nl);e.setAttribute("lineDistance",new mt(n,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;vd.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){let p=u.getX(v),T=u.getX(v+1),I=No(this,e,Yr,l,p,T,v);I&&t.push(I)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(h),p=No(this,e,Yr,l,v,m,g-1);p&&t.push(p)}}else{let h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=h,m=g-1;v<m;v+=c){let p=No(this,e,Yr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=No(this,e,Yr,l,g-1,h,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function No(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(tl.fromBufferAttribute(o,s),nl.fromBufferAttribute(o,r),t.distanceSqToSegment(tl,nl,cu,Md)>n)return;cu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(cu);if(!(c<e.near||c>e.far))return{distance:c,point:Md.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var il=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bd=new pt,_u=new ms,Uo=new mi,ko=new L,pa=class extends Ht{constructor(e=new Rt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,e.ray.intersectsSphere(Uo)===!1)return;bd.copy(s).invert(),_u.copy(e.ray).applyMatrix4(bd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let g=d,v=h;g<v;g++){let m=c.getX(g);ko.fromBufferAttribute(f,m),Sd(ko,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,v=h;g<v;g++)ko.fromBufferAttribute(f,g),Sd(ko,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sd(i,e,t,n,s,r,a){let o=_u.distanceSqToPoint(i);if(o<t){let l=new L;_u.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ma=class extends bn{constructor(e=[],t=Qi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ga=class extends bn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yi=class extends bn{constructor(e,t,n=Qn,s,r,a,o=rn,l=rn,c,u=hi,f=1){if(u!==hi&&u!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sl=class extends Yi{constructor(e,t=Qn,n=Qi,s,r,a=rn,o=rn,l,c=hi){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xa=class extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},cn=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function g(v,m,p,T,I,M,_,E,P,y,R){let U=M/P,V=_/y,$=M/2,Q=_/2,O=E/2,J=P+1,le=y+1,re=0,me=0,ae=new L;for(let de=0;de<le;de++){let B=de*V-Q;for(let we=0;we<J;we++){let Re=we*U-$;ae[v]=Re*T,ae[m]=B*I,ae[p]=O,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(we/P),f.push(1-de/y),re+=1}}for(let de=0;de<y;de++)for(let B=0;B<P;B++){let we=d+B+J*de,Re=d+B+J*(de+1),st=d+(B+1)+J*(de+1),Ze=d+(B+1)+J*de;l.push(we,Re,Ze),l.push(Re,st,Ze),me+=6}o.addGroup(h,me,R),h+=me,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Di=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,u=new Te;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){let h=n+f/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],d=[],h=[],g=0,v=[],m=n/2,p=0;T(),a===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function T(){let M=new L,_=new L,E=0,P=(t-e)/n;for(let y=0;y<=r;y++){let R=[],U=y/r,V=U*(t-e)+e;for(let $=0;$<=s;$++){let Q=$/s,O=Q*l+o,J=Math.sin(O),le=Math.cos(O);_.x=V*J,_.y=-U*n+m,_.z=V*le,f.push(_.x,_.y,_.z),M.set(J,P,le).normalize(),d.push(M.x,M.y,M.z),h.push(Q,1-U),R.push(g++)}v.push(R)}for(let y=0;y<s;y++)for(let R=0;R<r;R++){let U=v[R][y],V=v[R+1][y],$=v[R+1][y+1],Q=v[R][y+1];(e>0||R!==0)&&(u.push(U,V,Q),E+=3),(t>0||R!==r-1)&&(u.push(V,$,Q),E+=3)}c.addGroup(p,E,0),p+=E}function I(M){let _=g,E=new Te,P=new L,y=0,R=M===!0?e:t,U=M===!0?1:-1;for(let $=1;$<=s;$++)f.push(0,m*U,0),d.push(0,U,0),h.push(.5,.5),g++;let V=g;for(let $=0;$<=s;$++){let O=$/s*l+o,J=Math.cos(O),le=Math.sin(O);P.x=R*le,P.y=m*U,P.z=R*J,f.push(P.x,P.y,P.z),d.push(0,U,0),E.x=J*.5+.5,E.y=le*.5*U+.5,h.push(E.x,E.y),g++}for(let $=0;$<s;$++){let Q=_+$,O=V+$;M===!0?u.push(O,O+1,Q):u.push(O+1,O,Q),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class i extends xn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,h=(a-u)/d;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Te:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new pt;for(let h=0;h<=e;h++){let g=h/e;s[h]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(dt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,g))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(dt(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends kn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Te){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rl=class extends fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ju(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,f){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,s(a,o,d,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Ed=new L,Td=new L,uu=new Ju,hu=new Ju,du=new Ju,pr=class extends kn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Td.subVectors(s[0],s[1]).add(s[0]),c=Td);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Ed.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ed),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),h),v=Math.pow(f.distanceToSquared(d),h),m=Math.pow(d.distanceToSquared(u),h);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),uu.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,v,m),hu.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,v,m),du.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,v,m)}else this.curveType==="catmullrom"&&(uu.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),hu.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),du.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(uu.calc(l),hu.calc(l),du.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Gm(i,e){let t=1-i;return t*t*e}function Vm(i,e){return 2*(1-i)*i*e}function Wm(i,e){return i*i*e}function jr(i,e,t,n){return Gm(i,e)+Vm(i,t)+Wm(i,n)}function Xm(i,e){let t=1-i;return t*t*t*e}function qm(i,e){let t=1-i;return 3*t*t*i*e}function $m(i,e){return 3*(1-i)*i*i*e}function Ym(i,e){return i*i*i*e}function Qr(i,e,t,n,s){return Xm(i,e)+qm(i,t)+$m(i,n)+Ym(i,s)}var _a=class extends kn{constructor(e=new Te,t=new Te,n=new Te,s=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends kn{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y),Qr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},va=class extends kn{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends kn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ma=class extends kn{constructor(e=new Te,t=new Te,n=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Te){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ba=class extends kn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(jr(e,s.x,r.x,a.x),jr(e,s.y,r.y,a.y),jr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sa=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(wd(o,l.x,c.x,u.x,f.x),wd(o,l.y,c.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Te().fromArray(s))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:pr,CubicBezierCurve:_a,CubicBezierCurve3:al,EllipseCurve:fr,LineCurve:va,LineCurve3:ol,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:ba,SplineCurve:Sa}),cl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ll[s.type]().fromJSON(s))}return this}},Ea=class extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new va(this.currentPoint.clone(),new Te(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ma(this.currentPoint.clone(),new Te(e,t),new Te(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new _a(this.currentPoint.clone(),new Te(e,t),new Te(n,s),new Te(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Sa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ni=class extends Ea{constructor(e){super(e),this.uuid=ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ea().fromJSON(s))}return this}};function Zm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ef(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=e0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,f=l;for(let d=t;d<s;d+=t){let h=i[d],g=i[d+1];h<o&&(o=h),g<l&&(l=g),h>u&&(u=h),g>f&&(f=g)}c=Math.max(u-o,f-l),c=c!==0?32767/c:0}return Ta(r,a,t,o,l,c,0),a}function Ef(i,e,t,n,s){let r;if(s===h0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Ad(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Ad(a/n|0,i[a],i[a+1],r);return r&&mr(r,r.next)&&(Aa(r),r=r.next),r}function gs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ta(i,e,t,n,s,r,a){if(!i)return;!a&&r&&r0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Km(i,n,s,r):Jm(i)){e.push(l.i,i.i,c.i),Aa(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=jm(gs(i),e),Ta(i,e,t,n,s,r,2)):a===2&&Qm(i,e,t,n,s,r):Ta(gs(i),e,t,n,s,r,1);break}}}function Jm(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),h=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&Zr(s,o,r,l,a,c,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Km(i,e,t,n){let s=i.prev,r=i,a=i.next;if(zt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,f=r.y,d=a.y,h=Math.min(o,l,c),g=Math.min(u,f,d),v=Math.max(o,l,c),m=Math.max(u,f,d),p=vu(h,g,e,t,n),T=vu(v,m,e,t,n),I=i.prevZ,M=i.nextZ;for(;I&&I.z>=p&&M&&M.z<=T;){if(I.x>=h&&I.x<=v&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&Zr(o,u,l,f,c,d,I.x,I.y)&&zt(I.prev,I,I.next)>=0||(I=I.prevZ,M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zr(o,u,l,f,c,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;I&&I.z>=p;){if(I.x>=h&&I.x<=v&&I.y>=g&&I.y<=m&&I!==s&&I!==a&&Zr(o,u,l,f,c,d,I.x,I.y)&&zt(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;M&&M.z<=T;){if(M.x>=h&&M.x<=v&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zr(o,u,l,f,c,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function jm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!mr(n,s)&&wf(n,t,t.next,s)&&wa(n,s)&&wa(s,n)&&(e.push(n.i,t.i,s.i),Aa(t),Aa(t.next),t=i=s),t=t.next}while(t!==i);return gs(t)}function Qm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&l0(a,o)){let l=Af(a,o);a=gs(a,a.next),l=gs(l,l.next),Ta(a,e,t,n,s,r,0),Ta(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function e0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ef(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(o0(c))}s.sort(t0);for(let r=0;r<s.length;r++)t=n0(s[r],t);return t}function t0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function n0(i,e){let t=i0(i,e);if(!t)return e;let n=Af(t,i);return gs(n,n.next),gs(t,t.next)}function i0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(mr(i,t))return t;do{if(mr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Tf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);wa(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&s0(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function s0(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function r0(i,e,t,n){let s=i;do s.z===0&&(s.z=vu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,a0(s)}function a0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function vu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function o0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Tf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Zr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Tf(i,e,t,n,s,r,a,o)}function l0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!c0(i,e)&&(wa(i,e)&&wa(e,i)&&u0(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||mr(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mr(i,e){return i.x===e.x&&i.y===e.y}function wf(i,e,t,n){let s=Bo(zt(i,e,t)),r=Bo(zt(i,e,n)),a=Bo(zt(t,n,i)),o=Bo(zt(t,n,e));return!!(s!==r&&a!==o||s===0&&Fo(i,t,e)||r===0&&Fo(i,n,e)||a===0&&Fo(t,i,n)||o===0&&Fo(t,e,n))}function Fo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Bo(i){return i>0?1:i<0?-1:0}function c0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function wa(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function u0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Af(i,e){let t=Mu(i.i,i.x,i.y),n=Mu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Ad(i,e,t,n){let s=Mu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Mu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bu=class{static triangulate(e,t,n=2){return Zm(e,t,n)}},ci=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Rd(e),Cd(n,e);let a=e.length;t.forEach(Rd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Cd(n,t[l]);let o=bu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Rd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ra=class i extends Rt{constructor(e=new Ni([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:h-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:d0,I,M=!1,_,E,P,y;if(p){I=p.getSpacedPoints(u),M=!0,d=!1;let pe=p.isCatmullRomCurve3?p.closed:!1;_=p.computeFrenetFrames(u,pe),E=new L,P=new L,y=new L}d||(m=0,h=0,g=0,v=0);let R=o.extractPoints(c),U=R.shape,V=R.holes;if(!ci.isClockWise(U)){U=U.reverse();for(let pe=0,ye=V.length;pe<ye;pe++){let be=V[pe];ci.isClockWise(be)&&(V[pe]=be.reverse())}}function Q(pe){let be=10000000000000001e-36,Me=pe[0];for(let Se=1;Se<=pe.length;Se++){let Oe=Se%pe.length,Xe=pe[Oe],He=Xe.x-Me.x,et=Xe.y-Me.y,F=He*He+et*et,ot=Math.max(Math.abs(Xe.x),Math.abs(Xe.y),Math.abs(Me.x),Math.abs(Me.y)),Je=be*ot*ot;if(F<=Je){pe.splice(Oe,1),Se--;continue}Me=Xe}}Q(U),V.forEach(Q);let O=V.length,J=U;for(let pe=0;pe<O;pe++){let ye=V[pe];U=U.concat(ye)}function le(pe,ye,be){return ye||tt("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(ye,be)}let re=U.length;function me(pe,ye,be){let Me,Se,Oe,Xe=pe.x-ye.x,He=pe.y-ye.y,et=be.x-pe.x,F=be.y-pe.y,ot=Xe*Xe+He*He,Je=Xe*F-He*et;if(Math.abs(Je)>Number.EPSILON){let A=Math.sqrt(ot),x=Math.sqrt(et*et+F*F),S=ye.x-He/A,w=ye.y+Xe/A,C=be.x-F/x,q=be.y+et/x,Z=((C-S)*F-(q-w)*et)/(Xe*F-He*et);Me=S+Xe*Z-pe.x,Se=w+He*Z-pe.y;let Y=Me*Me+Se*Se;if(Y<=2)return new Te(Me,Se);Oe=Math.sqrt(Y/2)}else{let A=!1;Xe>Number.EPSILON?et>Number.EPSILON&&(A=!0):Xe<-Number.EPSILON?et<-Number.EPSILON&&(A=!0):Math.sign(He)===Math.sign(F)&&(A=!0),A?(Me=-He,Se=Xe,Oe=Math.sqrt(ot)):(Me=Xe,Se=He,Oe=Math.sqrt(ot/2))}return new Te(Me/Oe,Se/Oe)}let ae=[];for(let pe=0,ye=J.length,be=ye-1,Me=pe+1;pe<ye;pe++,be++,Me++)be===ye&&(be=0),Me===ye&&(Me=0),ae[pe]=me(J[pe],J[be],J[Me]);let de=[],B,we=ae.concat();for(let pe=0,ye=O;pe<ye;pe++){let be=V[pe];B=[];for(let Me=0,Se=be.length,Oe=Se-1,Xe=Me+1;Me<Se;Me++,Oe++,Xe++)Oe===Se&&(Oe=0),Xe===Se&&(Xe=0),B[Me]=me(be[Me],be[Oe],be[Xe]);de.push(B),we=we.concat(B)}let Re;if(m===0)Re=ci.triangulateShape(J,V);else{let pe=[],ye=[];for(let be=0;be<m;be++){let Me=be/m,Se=h*Math.cos(Me*Math.PI/2),Oe=g*Math.sin(Me*Math.PI/2)+v;for(let Xe=0,He=J.length;Xe<He;Xe++){let et=le(J[Xe],ae[Xe],Oe);Ee(et.x,et.y,-Se),Me===0&&pe.push(et)}for(let Xe=0,He=O;Xe<He;Xe++){let et=V[Xe];B=de[Xe];let F=[];for(let ot=0,Je=et.length;ot<Je;ot++){let A=le(et[ot],B[ot],Oe);Ee(A.x,A.y,-Se),Me===0&&F.push(A)}Me===0&&ye.push(F)}}Re=ci.triangulateShape(pe,ye)}let st=Re.length,Ze=g+v;for(let pe=0;pe<re;pe++){let ye=d?le(U[pe],we[pe],Ze):U[pe];M?(P.copy(_.normals[0]).multiplyScalar(ye.x),E.copy(_.binormals[0]).multiplyScalar(ye.y),y.copy(I[0]).add(P).add(E),Ee(y.x,y.y,y.z)):Ee(ye.x,ye.y,0)}for(let pe=1;pe<=u;pe++)for(let ye=0;ye<re;ye++){let be=d?le(U[ye],we[ye],Ze):U[ye];M?(P.copy(_.normals[pe]).multiplyScalar(be.x),E.copy(_.binormals[pe]).multiplyScalar(be.y),y.copy(I[pe]).add(P).add(E),Ee(y.x,y.y,y.z)):Ee(be.x,be.y,f/u*pe)}for(let pe=m-1;pe>=0;pe--){let ye=pe/m,be=h*Math.cos(ye*Math.PI/2),Me=g*Math.sin(ye*Math.PI/2)+v;for(let Se=0,Oe=J.length;Se<Oe;Se++){let Xe=le(J[Se],ae[Se],Me);Ee(Xe.x,Xe.y,f+be)}for(let Se=0,Oe=V.length;Se<Oe;Se++){let Xe=V[Se];B=de[Se];for(let He=0,et=Xe.length;He<et;He++){let F=le(Xe[He],B[He],Me);M?Ee(F.x,F.y+I[u-1].y,I[u-1].x+be):Ee(F.x,F.y,f+be)}}}ze(),j();function ze(){let pe=s.length/3;if(d){let ye=0,be=re*ye;for(let Me=0;Me<st;Me++){let Se=Re[Me];Ye(Se[2]+be,Se[1]+be,Se[0]+be)}ye=u+m*2,be=re*ye;for(let Me=0;Me<st;Me++){let Se=Re[Me];Ye(Se[0]+be,Se[1]+be,Se[2]+be)}}else{for(let ye=0;ye<st;ye++){let be=Re[ye];Ye(be[2],be[1],be[0])}for(let ye=0;ye<st;ye++){let be=Re[ye];Ye(be[0]+re*u,be[1]+re*u,be[2]+re*u)}}n.addGroup(pe,s.length/3-pe,0)}function j(){let pe=s.length/3,ye=0;ce(J,ye),ye+=J.length;for(let be=0,Me=V.length;be<Me;be++){let Se=V[be];ce(Se,ye),ye+=Se.length}n.addGroup(pe,s.length/3-pe,1)}function ce(pe,ye){let be=pe.length;for(;--be>=0;){let Me=be,Se=be-1;Se<0&&(Se=pe.length-1);for(let Oe=0,Xe=u+m*2;Oe<Xe;Oe++){let He=re*Oe,et=re*(Oe+1),F=ye+Me+He,ot=ye+Se+He,Je=ye+Se+et,A=ye+Me+et;Ie(F,ot,Je,A)}}}function Ee(pe,ye,be){l.push(pe),l.push(ye),l.push(be)}function Ye(pe,ye,be){qe(pe),qe(ye),qe(be);let Me=s.length/3,Se=T.generateTopUV(n,s,Me-3,Me-2,Me-1);Qe(Se[0]),Qe(Se[1]),Qe(Se[2])}function Ie(pe,ye,be,Me){qe(pe),qe(ye),qe(Me),qe(ye),qe(be),qe(Me);let Se=s.length/3,Oe=T.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);Qe(Oe[0]),Qe(Oe[1]),Qe(Oe[3]),Qe(Oe[1]),Qe(Oe[2]),Qe(Oe[3])}function qe(pe){s.push(l[pe*3+0]),s.push(l[pe*3+1]),s.push(l[pe*3+2])}function Qe(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return f0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ll[s.type]().fromJSON(s)),new i(n,e.options)}},d0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Te(r,a),new Te(o,l),new Te(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],f=e[n*3+2],d=e[s*3],h=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Te(a,1-l),new Te(c,1-f),new Te(d,1-g),new Te(v,1-p)]:[new Te(o,1-l),new Te(u,1-f),new Te(h,1-g),new Te(m,1-p)]}};function f0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var xi=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let T=p*d-a;for(let I=0;I<c;I++){let M=I*f-r;g.push(M,-T,0),v.push(0,0,1),m.push(I/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let I=T+c*p,M=T+c*(p+1),_=T+1+c*(p+1),E=T+1+c*p;h.push(I,M,E),h.push(M,_,E)}this.setIndex(h),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},xs=class i extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,d=(t-e)/s,h=new L,g=new Te;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;h.x=f*Math.cos(p),h.y=f*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/t+1)/2,g.y=(h.y/t+1)/2,u.push(g.x,g.y)}f+=d}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let T=p+m,I=T,M=T+n+1,_=T+n+2,E=T+1;o.push(I,M,E),o.push(M,_,E)}}this.setIndex(o),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ca=class i extends Rt{constructor(e=new Ni([new Te(0,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(a,2));function c(u){let f=s.length/3,d=u.extractPoints(t),h=d.shape,g=d.holes;ci.isClockWise(h)===!1&&(h=h.reverse());for(let m=0,p=g.length;m<p;m++){let T=g[m];ci.isClockWise(T)===!0&&(g[m]=T.reverse())}let v=ci.triangulateShape(h,g);for(let m=0,p=g.length;m<p;m++){let T=g[m];h=h.concat(T)}for(let m=0,p=h.length;m<p;m++){let T=h[m];s.push(T.x,T.y,0),r.push(0,0,1),a.push(T.x,T.y)}for(let m=0,p=v.length;m<p;m++){let T=v[m],I=T[0]+f,M=T[1]+f,_=T[2]+f;n.push(I,M,_),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return p0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function p0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var yi=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new L,d=new L,h=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let T=[],I=p/n,M=a+I*o,_=e*Math.cos(M),E=Math.sqrt(e*e-_*_),P=0;p===0&&a===0?P=.5/t:p===n&&l===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){let R=y/t,U=s+R*r;f.x=-E*Math.cos(U),f.y=_,f.z=E*Math.sin(U),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),m.push(R+P,1-I),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let I=u[p][T+1],M=u[p][T],_=u[p+1][T],E=u[p+1][T+1];(p!==0||a>0)&&h.push(I,M,E),(p!==n-1||l<Math.PI)&&h.push(M,_,E)}this.setIndex(h),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(v,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var _i=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],f=[],d=new L,h=new L,g=new L;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let T=p/s*r;h.x=(e+t*Math.cos(m))*Math.cos(T),h.y=(e+t*Math.cos(m))*Math.sin(T),h.z=t*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(T),d.y=e*Math.sin(T),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(p/s),f.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,T=(s+1)*(v-1)+m-1,I=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(p,T,M),l.push(T,I,M)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ia=class i extends Rt{constructor(e=new ba(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new Te,u=new L,f=[],d=[],h=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(h,2));function v(){for(let I=0;I<t;I++)m(I);m(r===!1?t:0),T(),p()}function m(I){u=e.getPointAt(I/t,u);let M=a.normals[I],_=a.binormals[I];for(let E=0;E<=s;E++){let P=E/s*Math.PI*2,y=Math.sin(P),R=-Math.cos(P);l.x=R*M.x+y*_.x,l.y=R*M.y+y*_.y,l.z=R*M.z+y*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let I=1;I<=t;I++)for(let M=1;M<=s;M++){let _=(s+1)*(I-1)+(M-1),E=(s+1)*I+(M-1),P=(s+1)*I+M,y=(s+1)*(I-1)+M;g.push(_,E,y),g.push(E,P,y)}}function T(){for(let I=0;I<=t;I++)for(let M=0;M<=s;M++)c.x=I/t,c.y=M/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function bs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Id(s))s.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Id(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=bs(i[t]);for(let s in n)e[s]=n[s]}return e}function Id(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function m0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ku(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Rf={clone:bs,merge:yn},g0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g0,this.fragmentShader=x0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=m0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(s.value);break;case"v2":this.uniforms[n].value=new Te().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new at().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ul=class extends Sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yt=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Cn=class extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pa=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qa,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=wl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hl=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dl=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var La=class extends da{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Qs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function fu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Zi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},fl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xu:r=e,o=2*t-n;break;case yu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:a=e,l=2*n-t;break;case yu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,T=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,I=(-1-h)*m+(1.5+h)*v+.5*g,M=h*m-h*v;for(let _=0;_!==o;++_)r[_]=p*a[u+_]+T*a[c+_]+I*a[l+_]+M*a[f+_];return r}},pl=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),f=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*u;return r}},ml=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gl=class extends Zi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,h=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=h*d+g*2,T=f[p],I=f[p+1],M=e*d+g*2,_=u[M],E=u[M+1],P=_0(n,t,T,_,s);r[g]=Cf(P,v,I,E,m)}return r}};function Cf(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function y0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Cf(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=y0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),fu(e.settings)&&(n.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case Ko:t=this.InterpolantFactoryMethodLinear;break;case Ho:t=this.InterpolantFactoryMethodSmooth;break;case mu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return Ho;case this.InterpolantFactoryMethodBezier:return mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;fu(this.settings)&&(Pd(this.settings.inTangents,e),Pd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){tt("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){tt("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&am(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){tt("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){let v=t[f+g];if(v!==t[d+g]||v!==t[h+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,fu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Pd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Ko;var Ji=class extends Fn{constructor(e,t,n){super(e,t,n)}};Ji.prototype.ValueTypeName="bool";Ji.prototype.ValueBufferType=Array;Ji.prototype.DefaultInterpolation=ea;Ji.prototype.InterpolantFactoryMethodLinear=void 0;Ji.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};xl.prototype.ValueTypeName="color";var yl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};yl.prototype.ValueTypeName="number";var _l=class extends Zi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)An.slerpFlat(r,0,a,c-o,a,c,l);return r}},Da=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _l(this.times,this.values,this.getValueSize(),e)}};Da.prototype.ValueTypeName="quaternion";Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends Fn{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=ea;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},If=new Ml,bl=class{constructor(e){this.manager=e!==void 0?e:If,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Kn=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},pu=new pt,Ld=new L,Dd=new L,gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ld),Dd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){pu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(pu,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(pu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Oo=new L,zo=new An,oi=new L,Na=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oo,zo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,zo,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Oo,zo,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,zo,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new L,Nd=new Te,Ud=new Te,Bt=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Su=class extends gr{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ua=class extends ys{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Su}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Eu=class extends gr{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0}},Ui=class extends ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Eu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},xr=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tu=class extends gr{constructor(){super(new xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Tu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var er=-90,tr=1,Sl=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new Bt(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new Bt(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new Bt(er,tr,e,t);o.layers=this.layers,this.add(o);let l=new Bt(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new Bt(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},El=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ju="\\[\\]\\.:\\/",v0=new RegExp("["+ju+"]","g"),Qu="[^"+ju+"]",M0="[^"+ju.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Qu),S0=/(WCOD+)?/.source.replace("WCOD",M0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qu),T0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qu),w0=new RegExp("^"+b0+S0+E0+T0+"$"),A0=["material","materials","bones","map"],wu=class{constructor(e,t,n){let s=n||kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(v0,"")}static parseTrackName(e){let t=w0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);A0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};kt.Composite=wu;kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};kt.prototype.GetterByBindingType=[kt.prototype._getValue_direct,kt.prototype._getValue_array,kt.prototype._getValue_arrayElement,kt.prototype._getValue_toArray];kt.prototype.SetterByBindingTypeAndVersioning=[[kt.prototype._setValue_direct,kt.prototype._setValue_direct_setNeedsUpdate,kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_array,kt.prototype._setValue_array_setNeedsUpdate,kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_arrayElement,kt.prototype._setValue_arrayElement_setNeedsUpdate,kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[kt.prototype._setValue_fromArray,kt.prototype._setValue_fromArray_setNeedsUpdate,kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tM=new Float32Array(1);var kd=new pt,ka=class{constructor(e,t,n=0,s=1/0){this.ray=new ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return kd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(e,t=!0,n=[]){return Au(e,this,n,t),n.sort(Fd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,n,t);return n.sort(Fd),n}};function Fd(i,e){return i.distance-e.distance}function Au(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Au(r[a],e,t,!0)}}var rh=class rh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};rh.prototype.isMatrix2=!0;var Ru=rh;function eh(i,e,t,n){let s=R0(n);switch(t){case Xu:return i*e;case Dl:return i*e/s.components*s.byteLength;case Nl:return i*e/s.components*s.byteLength;case ns:return i*e*2/s.components*s.byteLength;case Ul:return i*e*2/s.components*s.byteLength;case qu:return i*e*3/s.components*s.byteLength;case Gn:return i*e*4/s.components*s.byteLength;case kl:return i*e*4/s.components*s.byteLength;case za:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ga:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Fl:case Ol:return Math.max(i,8)*Math.max(e,8)/2;case Hl:case Gl:case Wl:case Xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:case Wa:case ql:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case tc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case rc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case oc:case lc:case cc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case uc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Xa:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function R0(i){switch(i){case In:case Hu:return{byteLength:1,components:1};case Mr:case Gu:case ei:return{byteLength:2,components:1};case Pl:case Ll:return{byteLength:2,components:4};case Qn:case Il:case Hn:return{byteLength:4,components:1};case Vu:case Wu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jf(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function D0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){let g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){let v=f[h];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var N0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z0=`#ifdef USE_AOMAP
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
#endif`,H0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,G0=`#ifdef USE_BATCHING
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
#endif`,V0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,W0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`uniform sampler2D dfgLUT;
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
}`,Dg=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wg=`#if defined( USE_POINTS_UV )
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
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ix=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ux=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,px=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,bx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ax=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ux=`uniform sampler2D t2D;
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zx=`#include <common>
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
}`,Hx=`#if DEPTH_PACKING == 3200
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
}`,Gx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qx=`uniform float scale;
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
}`,$x=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Qx=`#define MATCAP
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
}`,ey=`#define NORMAL
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
}`,ty=`#define NORMAL
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
}`,ny=`#define PHONG
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
}`,iy=`#define PHONG
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
}`,sy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
}`,ay=`#define TOON
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
}`,oy=`#define TOON
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
}`,ly=`uniform float size;
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
}`,cy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,fy=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:N0,alphahash_pars_fragment:U0,alphamap_fragment:k0,alphamap_pars_fragment:F0,alphatest_fragment:B0,alphatest_pars_fragment:O0,aomap_fragment:z0,aomap_pars_fragment:H0,batching_pars_vertex:G0,batching_vertex:V0,begin_vertex:W0,beginnormal_vertex:X0,bsdfs:q0,iridescence_fragment:$0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:j0,color_fragment:Q0,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:ag,displacementmap_vertex:og,emissivemap_fragment:lg,emissivemap_pars_fragment:cg,colorspace_fragment:ug,colorspace_pars_fragment:hg,envmap_fragment:dg,envmap_common_pars_fragment:fg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:wg,envmap_vertex:gg,fog_vertex:xg,fog_pars_vertex:yg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:bg,lights_lambert_fragment:Sg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ng,lights_fragment_end:Ug,lightprobes_pars_fragment:kg,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Bg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:zg,map_fragment:Hg,map_pars_fragment:Gg,map_particle_fragment:Vg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:$g,morphcolor_vertex:Yg,morphnormal_vertex:Zg,morphtarget_pars_vertex:Jg,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Qg,normal_pars_fragment:ex,normal_pars_vertex:tx,normal_vertex:nx,normalmap_pars_fragment:ix,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:rx,clearcoat_pars_fragment:ax,iridescence_pars_fragment:ox,opaque_fragment:lx,packing:cx,premultiplied_alpha_fragment:ux,project_vertex:hx,dithering_fragment:dx,dithering_pars_fragment:fx,roughnessmap_fragment:px,roughnessmap_pars_fragment:mx,shadowmap_pars_fragment:gx,shadowmap_pars_vertex:xx,shadowmap_vertex:yx,shadowmask_pars_fragment:_x,skinbase_vertex:vx,skinning_pars_vertex:Mx,skinning_vertex:bx,skinnormal_vertex:Sx,specularmap_fragment:Ex,specularmap_pars_fragment:Tx,tonemapping_fragment:wx,tonemapping_pars_fragment:Ax,transmission_fragment:Rx,transmission_pars_fragment:Cx,uv_pars_fragment:Ix,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Dx,background_vert:Nx,background_frag:Ux,backgroundCube_vert:kx,backgroundCube_frag:Fx,cube_vert:Bx,cube_frag:Ox,depth_vert:zx,depth_frag:Hx,distance_vert:Gx,distance_frag:Vx,equirect_vert:Wx,equirect_frag:Xx,linedashed_vert:qx,linedashed_frag:$x,meshbasic_vert:Yx,meshbasic_frag:Zx,meshlambert_vert:Jx,meshlambert_frag:Kx,meshmatcap_vert:jx,meshmatcap_frag:Qx,meshnormal_vert:ey,meshnormal_frag:ty,meshphong_vert:ny,meshphong_frag:iy,meshphysical_vert:sy,meshphysical_frag:ry,meshtoon_vert:ay,meshtoon_frag:oy,points_vert:ly,points_frag:cy,shadow_vert:uy,shadow_frag:hy,sprite_vert:dy,sprite_frag:fy},Le={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Si={basic:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Be(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([Le.points,Le.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([Le.common,Le.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([Le.sprite,Le.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:yn([Le.common,Le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:yn([Le.lights,Le.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Si.physical={uniforms:yn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var mc={r:0,b:0,g:0},py=new pt,Qf=new at;Qf.set(-1,0,0,0,1,0,0,0,1);function my(i,e,t,n,s,r){let a=new Be(0),o=s===!0?0:1,l,c,u=null,f=0,d=null;function h(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){let M=T.backgroundBlurriness>0;I=e.get(I,M)}return I}function g(T){let I=!1,M=h(T);M===null?m(a,o):M&&M.isColor&&(m(M,1),I=!0);let _=i.xr.getEnvironmentBlendMode();_==="additive"?t.buffers.color.setClear(0,0,0,1,r):_==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,I){let M=h(I);M&&(M.isCubeTexture||M.mapping===Ba)?(c===void 0&&(c=new We(new cn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:bs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(py.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Qf),c.material.toneMapped=gt.getTransfer(M.colorSpace)!==Et,(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new We(new xi(2,2),new Sn({name:"BackgroundMaterial",uniforms:bs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.toneMapped=gt.getTransfer(M.colorSpace)!==Et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,I){T.getRGB(mc,Ku(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,I,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,I=1){a.set(T),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:g,addToRenderList:v,dispose:p}}function gy(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(V,$,Q,O,J){let le=!1,re=f(V,O,Q,$);r!==re&&(r=re,c(r.object)),le=h(V,O,Q,J),le&&g(V,O,Q,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(le||a)&&(a=!1,M(V,$,Q,O),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function c(V){return i.bindVertexArray(V)}function u(V){return i.deleteVertexArray(V)}function f(V,$,Q,O){let J=O.wireframe===!0,le=n[$.id];le===void 0&&(le={},n[$.id]=le);let re=V.isInstancedMesh===!0?V.id:0,me=le[re];me===void 0&&(me={},le[re]=me);let ae=me[Q.id];ae===void 0&&(ae={},me[Q.id]=ae);let de=ae[J];return de===void 0&&(de=d(l()),ae[J]=de),de}function d(V){let $=[],Q=[],O=[];for(let J=0;J<t;J++)$[J]=0,Q[J]=0,O[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Q,attributeDivisors:O,object:V,attributes:{},index:null}}function h(V,$,Q,O){let J=r.attributes,le=$.attributes,re=0,me=Q.getAttributes();for(let ae in me)if(me[ae].location>=0){let B=J[ae],we=le[ae];if(we===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(we=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(we=V.instanceColor)),B===void 0||B.attribute!==we||we&&B.data!==we.data)return!0;re++}return r.attributesNum!==re||r.index!==O}function g(V,$,Q,O){let J={},le=$.attributes,re=0,me=Q.getAttributes();for(let ae in me)if(me[ae].location>=0){let B=le[ae];B===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(B=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(B=V.instanceColor));let we={};we.attribute=B,B&&B.data&&(we.data=B.data),J[ae]=we,re++}r.attributes=J,r.attributesNum=re,r.index=O}function v(){let V=r.newAttributes;for(let $=0,Q=V.length;$<Q;$++)V[$]=0}function m(V){p(V,0)}function p(V,$){let Q=r.newAttributes,O=r.enabledAttributes,J=r.attributeDivisors;Q[V]=1,O[V]===0&&(i.enableVertexAttribArray(V),O[V]=1),J[V]!==$&&(i.vertexAttribDivisor(V,$),J[V]=$)}function T(){let V=r.newAttributes,$=r.enabledAttributes;for(let Q=0,O=$.length;Q<O;Q++)$[Q]!==V[Q]&&(i.disableVertexAttribArray(Q),$[Q]=0)}function I(V,$,Q,O,J,le,re){re===!0?i.vertexAttribIPointer(V,$,Q,J,le):i.vertexAttribPointer(V,$,Q,O,J,le)}function M(V,$,Q,O){v();let J=O.attributes,le=Q.getAttributes(),re=$.defaultAttributeValues;for(let me in le){let ae=le[me];if(ae.location>=0){let de=J[me];if(de===void 0&&(me==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),me==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),de!==void 0){let B=de.normalized,we=de.itemSize,Re=e.get(de);if(Re===void 0)continue;let st=Re.buffer,Ze=Re.type,ze=Re.bytesPerElement,j=Ze===i.INT||Ze===i.UNSIGNED_INT||de.gpuType===Il;if(de.isInterleavedBufferAttribute){let ce=de.data,Ee=ce.stride,Ye=de.offset;if(ce.isInstancedInterleavedBuffer){for(let Ie=0;Ie<ae.locationSize;Ie++)p(ae.location+Ie,ce.meshPerAttribute);V.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ie=0;Ie<ae.locationSize;Ie++)m(ae.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Ie=0;Ie<ae.locationSize;Ie++)I(ae.location+Ie,we/ae.locationSize,Ze,B,Ee*ze,(Ye+we/ae.locationSize*Ie)*ze,j)}else{if(de.isInstancedBufferAttribute){for(let ce=0;ce<ae.locationSize;ce++)p(ae.location+ce,de.meshPerAttribute);V.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ce=0;ce<ae.locationSize;ce++)m(ae.location+ce);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ce=0;ce<ae.locationSize;ce++)I(ae.location+ce,we/ae.locationSize,Ze,B,we*ze,we/ae.locationSize*ce*ze,j)}}else if(re!==void 0){let B=re[me];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(ae.location,B);break;case 3:i.vertexAttrib3fv(ae.location,B);break;case 4:i.vertexAttrib4fv(ae.location,B);break;default:i.vertexAttrib1fv(ae.location,B)}}}}T()}function _(){R();for(let V in n){let $=n[V];for(let Q in $){let O=$[Q];for(let J in O){let le=O[J];for(let re in le)u(le[re].object),delete le[re];delete O[J]}}delete n[V]}}function E(V){if(n[V.id]===void 0)return;let $=n[V.id];for(let Q in $){let O=$[Q];for(let J in O){let le=O[J];for(let re in le)u(le[re].object),delete le[re];delete O[J]}}delete n[V.id]}function P(V){for(let $ in n){let Q=n[$];for(let O in Q){let J=Q[O];if(J[V.id]===void 0)continue;let le=J[V.id];for(let re in le)u(le[re].object),delete le[re];delete J[V.id]}}}function y(V){for(let $ in n){let Q=n[$],O=V.isInstancedMesh===!0?V.id:0,J=Q[O];if(J!==void 0){for(let le in J){let re=J[le];for(let me in re)u(re[me].object),delete re[me];delete J[le]}delete Q[O],Object.keys(Q).length===0&&delete n[$]}}}function R(){U(),a=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:U,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function xy(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yy(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==In&&P!==Hn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:M,maxSamples:_,samples:E}}function _y(i){let e=this,t=null,n=0,s=!1,r=!1,a=new on,o=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,I=T*4,M=p.clippingState||null;l.value=M,M=u(g,d,I,h);for(let _=0;_!==I;++_)M[_]=t[_];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=h+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,M=h;I!==v;++I,M+=4)a.copy(f[I]).applyMatrix4(T,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Er=4,vy=6,My=20,by=256,$a=new xr,Pf=new Be,ah=null,oh=0,lh=0,ch=!1,Sy=new L,Ss=new L,wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sy}=r;ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Df(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,oh,lh),this._renderer.xr.enabled=ch,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),oh=this._renderer.getActiveCubeFace(),lh=this._renderer.getActiveMipmapLevel(),ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ei,format:Gn,colorSpace:ta,depthBuffer:!1},s=Lf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lf(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ey(r)),this._blurMaterial=wy(r,e,t),this._ggxMaterial=Ty(r,e,t)}return s}_compileMaterial(e){let t=new We(new Rt,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,s,r){let l=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Pf),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new cn,new jt({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Pf),p=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[I],r.y,r.z)):M===1?(l.up.set(0,0,c[I]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[I],r.z)):(l.up.set(0,c[I],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[I]));let _=this._cubeSize;Sr(s,M*_,I>2?_:0,_,_),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Df());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,h=f*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-Er?n-g+Er:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,Sr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Sr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,$a)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Er?s-this._lodMax+Er:0),d=4*(this._cubeSize-u);Sr(t,f,d,3*u,2*u),a.setRenderTarget(t),a.render(l,$a)}};function Ey(i){let e=[],t=[],n=i,s=i-Er+1+vy;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,h=3,g=new Float32Array(h*d*f),v=new Float32Array(h*d*f);for(let p=0;p<f;p++){let T=p%3*2/3-1,I=p>2?0:-1,M=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];g.set(M,h*d*p);for(let _=0;_<d;_++){let E=u[_*2]*2-1,P=u[_*2+1]*2-1;p===0?Ss.set(1,P,E):p===1?Ss.set(-E,1,-P):p===2?Ss.set(-E,P,1):p===3?Ss.set(-1,P,-E):p===4?Ss.set(-E,-1,P):Ss.set(E,P,-1),Ss.toArray(v,(p*d+_)*h)}}let m=new Rt;m.setAttribute("position",new Zt(g,h)),m.setAttribute("outputDirection",new Zt(v,h)),t.push(new We(m,null)),n>Er&&n--}return{lodMeshes:t,sizeLods:e}}function Lf(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ty(i,e,t){return new Sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wy(i,e,t){return new Sn({name:"SphericalGaussianBlur",defines:{SAMPLES:My,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Df(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Nf(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Mi});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===es&&(t.minFilter=ln),new Sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Ay(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?a(d):r(d)}function r(d){if(d&&d.isTexture){let h=d.mapping;if(h===Al||h===Rl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new xc(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let h=d.mapping,g=h===Al||h===Rl,v=h===Qi||h===Ms;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new wr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let T=d.image;return g&&T&&T.height>0||v&&T&&l(T)?(n===null&&(n=new wr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===Al?d.mapping=Qi:h===Rl&&(d.mapping=Ms),d}function l(d){let h=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&h++;return h===g}function c(d){let h=d.target;h.removeEventListener("dispose",c);let g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){let h=d.target;h.removeEventListener("dispose",u);let g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Ry(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&fs("WebGLRenderer: "+n+" extension not supported."),s}}}function Cy(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let h=r.get(d);h&&(e.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(f){let d=f.attributes;for(let h in d)e.update(d[h],i.ARRAY_BUFFER)}function c(f){let d=[],h=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(h!==null){let T=h.array;v=h.version;for(let I=0,M=T.length;I<M;I+=3){let _=T[I+0],E=T[I+1],P=T[I+2];d.push(_,E,E,P,P,_)}}else{let T=g.array;v=g.version;for(let I=0,M=T.length/3-1;I<M;I+=3){let _=I+0,E=I+1,P=I+2;d.push(_,E,E,P,P,_)}}let m=new(g.count>=65535?la:oa)(d,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){let d=r.get(f);if(d){let h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Iy(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,f*a,h),t.update(d,n,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,h);let v=0;for(let m=0;m<h;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Py(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Ly(i,e,t){let n=new WeakMap,s=new Ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==f){let R=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],I=0;h===!0&&(I=1),g===!0&&(I=2),v===!0&&(I=3);let M=o.attributes.position.count*I,_=1;M>e.maxTextureSize&&(_=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*_*4*f),P=new ra(E,M,_,f);P.type=Hn,P.needsUpdate=!0;let y=I*4;for(let U=0;U<f;U++){let V=m[U],$=p[U],Q=T[U],O=M*_*4*U;for(let J=0;J<V.count;J++){let le=J*y;h===!0&&(s.fromBufferAttribute(V,J),E[O+le+0]=s.x,E[O+le+1]=s.y,E[O+le+2]=s.z,E[O+le+3]=0),g===!0&&(s.fromBufferAttribute($,J),E[O+le+4]=s.x,E[O+le+5]=s.y,E[O+le+6]=s.z,E[O+le+7]=0),v===!0&&(s.fromBufferAttribute(Q,J),E[O+le+8]=s.x,E[O+le+9]=s.y,E[O+le+10]=s.z,E[O+le+11]=Q.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new Te(M,_)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];let g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Dy(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ny={[Nu]:"LINEAR_TONE_MAPPING",[Uu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[Fa]:"ACES_FILMIC_TONE_MAPPING",[Bu]:"AGX_TONE_MAPPING",[Ou]:"NEUTRAL_TONE_MAPPING",[Fu]:"CUSTOM_TONE_MAPPING"};function Uy(i,e,t,n,s,r){let a=new Rn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Rt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));let u=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new We(c,u),d=new xr(-1,1,1,-1,0,1),h=null,g=null,v=!1,m,p=null,T=[],I=!1;this.setSize=function(M,_){a.setSize(M,_),o!==null&&o.setSize(M,_),l!==null&&l.setSize(M,_);for(let E=0;E<T.length;E++){let P=T[E];P.setSize&&P.setSize(M,_)}},this.setEffects=function(M){T=M,I=T.length>0&&T[0].isRenderPass===!0;let _=a.width,E=a.height;T.length>0&&o===null&&(o=new Rn(_,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(_,E,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let y=T[P];y.setSize&&y.setSize(_,E)}},this.begin=function(M,_){if(v||M.toneMapping===jn&&T.length===0)return!1;if(p=_,_!==null){let E=_.width,P=_.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return I===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=jn,!0},this.hasRenderPass=function(){return I},this.end=function(M,_){M.toneMapping=m,v=!0;let E=a,P=o;for(let y=0;y<T.length;y++){let R=T[y];R.enabled!==!1&&(R.render(M,P,E,_),R.needsSwap!==!1&&(E=P,P=P===o?l:o))}if(h!==M.outputColorSpace||g!==M.toneMapping){h=M.outputColorSpace,g=M.toneMapping,u.defines={},gt.getTransfer(h)===Et&&(u.defines.SRGB_TRANSFER="");let y=Ny[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(p),M.render(f,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var ep=new bn,dh=new Yi(1,1),tp=new ra,np=new el,ip=new ma,Uf=[],kf=[],Ff=new Float32Array(16),Bf=new Float32Array(9),Of=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Uf[s];if(r===void 0&&(r=new Float32Array(s),Uf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=kf[e];t===void 0&&(t=new Int32Array(e),kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ky(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function By(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function Oy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function zy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Of.set(n),i.uniformMatrix2fv(this.addr,!1,Of),en(t,n)}}function Hy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Bf.set(n),i.uniformMatrix3fv(this.addr,!1,Bf),en(t,n)}}function Gy(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),en(t,n)}}function Vy(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function Xy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function qy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function $y(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Zy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function Jy(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Ky(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dh.compareFunction=t.isReversedDepthBuffer()?pc:fc,r=dh):r=ep,t.setTexture2D(e||r,s)}function jy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||np,s)}function Qy(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ip,s)}function e_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tp,s)}function t_(i){switch(i){case 5126:return ky;case 35664:return Fy;case 35665:return By;case 35666:return Oy;case 35674:return zy;case 35675:return Hy;case 35676:return Gy;case 5124:case 35670:return Vy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return qy;case 5125:return $y;case 36294:return Yy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return e_}}function n_(i,e){i.uniform1fv(this.addr,e)}function i_(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function s_(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function r_(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function a_(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function o_(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function l_(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function c_(i,e){i.uniform1iv(this.addr,e)}function u_(i,e){i.uniform2iv(this.addr,e)}function h_(i,e){i.uniform3iv(this.addr,e)}function d_(i,e){i.uniform4iv(this.addr,e)}function f_(i,e){i.uniform1uiv(this.addr,e)}function p_(i,e){i.uniform2uiv(this.addr,e)}function m_(i,e){i.uniform3uiv(this.addr,e)}function g_(i,e){i.uniform4uiv(this.addr,e)}function x_(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=dh:a=ep;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function y_(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||np,r[a])}function __(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ip,r[a])}function v_(i,e,t){let n=this.cache,s=e.length,r=vc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tp,r[a])}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return a_;case 35675:return o_;case 35676:return l_;case 5124:case 35670:return c_;case 35667:case 35671:return u_;case 35668:case 35672:return h_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return v_}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=t_(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=M_(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function b_(i,e,t){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zf(t,c===void 0?new fh(o,i,e):new ph(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new mh(o),zf(t,f)),t=f}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);b_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Hf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var S_=37297,E_=0;function T_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Gf=new at;function w_(i){gt._getMatrix(Gf,gt.workingColorSpace,i);let e=`mat3( ${Gf.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case na:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+T_(i.getShaderSource(e),o)}else return r}function A_(i,e){let t=w_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var R_={[Nu]:"Linear",[Uu]:"Reinhard",[ku]:"Cineon",[Fa]:"ACESFilmic",[Bu]:"AgX",[Ou]:"Neutral",[Fu]:"Custom"};function C_(i,e){let t=R_[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gc=new L;function I_(){gt.getLuminanceCoefficients(gc);let i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function P_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function L_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function D_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Za(i){return i!==""}function Wf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(N_,k_)}var U_=new Map;function k_(i,e){let t=ut[e];if(t===void 0){let n=U_.get(e);if(n!==void 0)t=ut[n],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gh(t)}var F_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qf(i){return i.replace(F_,B_)}function B_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $f(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var O_={[_s]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function z_(i){return O_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H_={[Qi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function G_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var V_={[Ms]:"ENVMAP_MODE_REFRACTION"};function W_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":V_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X_={[wl]:"ENVMAP_BLENDING_MULTIPLY",[af]:"ENVMAP_BLENDING_MIX",[of]:"ENVMAP_BLENDING_ADD"};function q_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":X_[i.combine]||"ENVMAP_BLENDING_NONE"}function $_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Y_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=z_(t),c=G_(t),u=W_(t),f=q_(t),d=$_(t),h=P_(t),g=L_(r),v=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Za).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Za).join(`
`),p.length>0&&(p+=`
`)):(m=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),p=[$f(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ut.tonemapping_pars_fragment:"",t.toneMapping!==jn?C_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,A_("linearToOutputTexel",t.outputColorSpace),I_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=gh(a),a=Wf(a,t),a=Xf(a,t),o=gh(o),o=Wf(o,t),o=Xf(o,t),a=qf(a),o=qf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=T+m+a,M=T+p+o,_=Hf(s,s.VERTEX_SHADER,I),E=Hf(s,s.FRAGMENT_SHADER,M);s.attachShader(v,_),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(V){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(v)||"",Q=s.getShaderInfoLog(_)||"",O=s.getShaderInfoLog(E)||"",J=$.trim(),le=Q.trim(),re=O.trim(),me=!0,ae=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,_,E);else{let de=Vf(s,_,"vertex"),B=Vf(s,E,"fragment");tt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+J+`
`+de+`
`+B)}else J!==""?je("WebGLProgram: Program Info Log:",J):(le===""||re==="")&&(ae=!1);ae&&(V.diagnostics={runnable:me,programLog:J,vertexShader:{log:le,prefix:m},fragmentShader:{log:re,prefix:p}})}s.deleteShader(_),s.deleteShader(E),y=new Tr(s,v),R=D_(s,v)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(v,S_)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=_,this.fragmentShader=E,this}var Z_=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=Z_++,this.code=e,this.usedTimes=0}};function J_(i){return i===ns||i===Wa||i===Xa}function K_(i,e,t,n,s,r){let a=new or,o=new xh,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,d=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,R,U,V,$,Q){let O=V.fog,J=$.geometry,le=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?V.environment:null,re=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,me=e.get(y.envMap||le,re),ae=me&&me.mapping===Ba?me.image.height:null,de=h[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&je("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let B=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=B!==void 0?B.length:0,Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let st,Ze,ze,j;if(de){let it=Si[de];st=it.vertexShader,Ze=it.fragmentShader}else{st=y.vertexShader,Ze=y.fragmentShader;let it=o.getVertexShaderStage(y),Ke=o.getFragmentShaderStage(y);o.update(y,it,Ke),ze=it.id,j=Ke.id}let ce=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ye=$.isInstancedMesh===!0,Ie=$.isBatchedMesh===!0,qe=!!y.map,Qe=!!y.matcap,pe=!!me,ye=!!y.aoMap,be=!!y.lightMap,Me=!!y.bumpMap&&y.wireframe===!1,Se=!!y.normalMap,Oe=!!y.displacementMap,Xe=!!y.emissiveMap,He=!!y.metalnessMap,et=!!y.roughnessMap,F=y.anisotropy>0,ot=y.clearcoat>0,Je=y.dispersion>0,A=y.retroreflectivity>0,x=y.iridescence>0,S=y.sheen>0,w=y.transmission>0,C=F&&!!y.anisotropyMap,q=ot&&!!y.clearcoatMap,Z=ot&&!!y.clearcoatNormalMap,Y=ot&&!!y.clearcoatRoughnessMap,ne=x&&!!y.iridescenceMap,N=x&&!!y.iridescenceThicknessMap,z=S&&!!y.sheenColorMap,W=S&&!!y.sheenRoughnessMap,G=!!y.specularMap,K=!!y.specularColorMap,se=!!y.specularIntensityMap,fe=w&&!!y.transmissionMap,D=w&&!!y.thicknessMap,xe=!!y.gradientMap,oe=!!y.alphaMap,ve=y.alphaTest>0,_e=!!y.alphaHash,he=!!y.extensions,Pe=jn;y.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Pe=i.toneMapping);let Ce={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:st,fragmentShader:Ze,defines:y.defines,customVertexShaderID:ze,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ie,batchingColor:Ie&&$._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&$.instanceColor!==null,instancingMorph:Ye&&$.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:Qe,envMap:pe,envMapMode:pe&&me.mapping,envMapCubeUVHeight:ae,aoMap:ye,lightMap:be,bumpMap:Me,normalMap:Se,displacementMap:Oe,emissiveMap:Xe,normalMapObjectSpace:Se&&y.normalMapType===uf,normalMapTangentSpace:Se&&y.normalMapType===qa,packedNormalMap:Se&&y.normalMapType===qa&&J_(y.normalMap.format),metalnessMap:He,roughnessMap:et,anisotropy:F,anisotropyMap:C,clearcoat:ot,clearcoatMap:q,clearcoatNormalMap:Z,clearcoatRoughnessMap:Y,dispersion:Je,retroreflection:A,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:N,sheen:S,sheenColorMap:z,sheenRoughnessMap:W,specularMap:G,specularColorMap:K,specularIntensityMap:se,transmission:w,transmissionMap:fe,thicknessMap:D,gradientMap:xe,opaque:y.transparent===!1&&y.blending===_r&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:ve,alphaHash:_e,combine:y.combine,mapUv:qe&&g(y.map.channel),aoMapUv:ye&&g(y.aoMap.channel),lightMapUv:be&&g(y.lightMap.channel),bumpMapUv:Me&&g(y.bumpMap.channel),normalMapUv:Se&&g(y.normalMap.channel),displacementMapUv:Oe&&g(y.displacementMap.channel),emissiveMapUv:Xe&&g(y.emissiveMap.channel),metalnessMapUv:He&&g(y.metalnessMap.channel),roughnessMapUv:et&&g(y.roughnessMap.channel),anisotropyMapUv:C&&g(y.anisotropyMap.channel),clearcoatMapUv:q&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:N&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:z&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:W&&g(y.sheenRoughnessMap.channel),specularMapUv:G&&g(y.specularMap.channel),specularColorMapUv:K&&g(y.specularColorMap.channel),specularIntensityMapUv:se&&g(y.specularIntensityMap.channel),transmissionMapUv:fe&&g(y.transmissionMap.channel),thicknessMapUv:D&&g(y.thicknessMap.channel),alphaMapUv:oe&&g(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Se||F),vertexNormals:!!J.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(qe||oe),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||J.attributes.normal===void 0&&Se===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Re,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pe,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Et,decodeVideoTextureEmissive:Xe&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===qt,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:he&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&y.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function m(y){let R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)R.push(U),R.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(p(R,y),T(R,y),R.push(i.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function p(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numSunLights),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numSunLightShadows),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function T(y,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.retroreflection&&a.enable(24),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function I(y){let R=h[y.type],U;if(R){let V=Si[R];U=Rf.clone(V.uniforms)}else U=y.uniforms;return U}function M(y,R){let U=u.get(R);return U!==void 0?++U.usedTimes:(U=new Y_(i,R,y,s),c.push(U),u.set(R,U)),U}function _(y){if(--y.usedTimes===0){let R=c.indexOf(y);c[R]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){o.remove(y)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:I,acquireProgram:M,releaseProgram:_,releaseShaderCache:E,programs:c,dispose:P}}function j_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Q_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,v,m,p){let T=i[e];return T===void 0?(T={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=T):(T.id=d.id,T.object=d,T.geometry=h,T.material=g,T.materialVariant=a(d),T.groupOrder=v,T.renderOrder=d.renderOrder,T.z=m,T.group=p),e++,T}function l(d,h,g,v,m,p,T){T.reversedDepth===!0&&(m=-m);let I=o(d,h,g,v,m,p);g.transmission>0?n.push(I):g.transparent===!0?s.push(I):t.push(I)}function c(d,h,g,v,m,p){let T=o(d,h,g,v,m,p);g.transmission>0?n.unshift(T):g.transparent===!0?s.unshift(T):t.unshift(T)}function u(d,h){t.length>1&&t.sort(d||Q_),n.length>1&&n.sort(h||Yf),s.length>1&&s.sort(h||Yf)}function f(){for(let d=e,h=i.length;d<h;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function ev(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Zf,i.set(n,[a])):s>=r.length?(a=new Zf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function tv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function nv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var iv=0;function sv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rv(i){let e=new tv,t=nv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new pt,a=new pt;function o(c){let u=0,f=0,d=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,T=0,I=0,M=0,_=0,E=0,P=0,y=0,R=0,U=0;c.sort(sv);for(let $=0,Q=c.length;$<Q;$++){let O=c[$],J=O.color,le=O.intensity,re=O.distance,me=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===ns?me=O.shadow.map.texture:me=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)u+=J.r*le,f+=J.g*le,d+=J.b*le;else if(O.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(O.sh.coefficients[ae],le);U++}else if(O.isSunLight){let ae=e.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let de=O.shadow,B=t.get(O);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize.copy(de.mapSize).multiply(de.getFrameExtents()),n.sunShadow[g]=B,n.sunShadowMap[g]=me;let we=de.getViewportCount();for(let Re=0;Re<we;Re++)n.sunShadowMatrix[v+Re]=de.getMatrix(Re),n.sunShadowCascade[v+Re]=de._cascadeData[Re];v+=we,g++}n.sun[h]=ae,h++}else if(O.isDirectionalLight){let ae=e.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let de=O.shadow,B=t.get(O);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=me,n.directionalShadowMatrix[m]=O.shadow.matrix,_++}n.directional[m]=ae,m++}else if(O.isSpotLight){let ae=e.get(O);ae.position.setFromMatrixPosition(O.matrixWorld),ae.color.copy(J).multiplyScalar(le),ae.distance=re,ae.coneCos=Math.cos(O.angle),ae.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ae.decay=O.decay,n.spot[T]=ae;let de=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,de.updateMatrices(O),O.castShadow&&R++),n.spotLightMatrix[T]=de.matrix,O.castShadow){let B=t.get(O);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,n.spotShadow[T]=B,n.spotShadowMap[T]=me,P++}T++}else if(O.isRectAreaLight){let ae=e.get(O);ae.color.copy(J).multiplyScalar(le),ae.halfWidth.set(O.width*.5,0,0),ae.halfHeight.set(0,O.height*.5,0),n.rectArea[I]=ae,I++}else if(O.isPointLight){let ae=e.get(O);if(ae.color.copy(O.color).multiplyScalar(O.intensity),ae.distance=O.distance,ae.decay=O.decay,O.castShadow){let de=O.shadow,B=t.get(O);B.shadowIntensity=de.intensity,B.shadowBias=de.bias,B.shadowNormalBias=de.normalBias,B.shadowRadius=de.radius,B.shadowMapSize=de.mapSize,B.shadowCameraNear=de.camera.near,B.shadowCameraFar=de.camera.far,n.pointShadow[p]=B,n.pointShadowMap[p]=me,n.pointShadowMatrix[p]=O.shadow.matrix,E++}n.point[p]=ae,p++}else if(O.isHemisphereLight){let ae=e.get(O);ae.skyColor.copy(O.color).multiplyScalar(le),ae.groundColor.copy(O.groundColor).multiplyScalar(le),n.hemi[M]=ae,M++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;let V=n.hash;(V.sunLength!==h||V.directionalLength!==m||V.pointLength!==p||V.spotLength!==T||V.rectAreaLength!==I||V.hemiLength!==M||V.numSunShadows!==g||V.numDirectionalShadows!==_||V.numPointShadows!==E||V.numSpotShadows!==P||V.numSpotMaps!==y||V.numLightProbes!==U)&&(n.sun.length=h,n.directional.length=m,n.spot.length=T,n.rectArea.length=I,n.point.length=p,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.directionalShadowMatrix.length=_,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-R,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=U,V.sunLength=h,V.directionalLength=m,V.pointLength=p,V.spotLength=T,V.rectAreaLength=I,V.hemiLength=M,V.numSunShadows=g,V.numDirectionalShadows=_,V.numPointShadows=E,V.numSpotShadows=P,V.numSpotMaps=y,V.numLightProbes=U,n.version=iv++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let T=0,I=c.length;T<I;T++){let M=c[T];if(M.isSunLight){let _=n.sun[f];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let _=n.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(M.isSpotLight){let _=n.spot[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let _=n.rectArea[v];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(p),h++}else if(M.isHemisphereLight){let _=n.hemi[m];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Jf(i){let e=new rv(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function u(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function av(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Jf(i),e.set(s,[o])):r>=a.length?(o=new Jf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lv=`uniform sampler2D shadow_pass;
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
}`,cv=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],uv=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Kf=new pt,Ya=new L,hh=new L;function hv(i,e,t){let n=new dr,s=new Te,r=new Te,a=new Ot,o=new hl,l=new dl,c={},u=t.maxTextureSize,f={[ji]:un,[un]:ji,[qt]:qt},d=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:ov,fragmentShader:lv}),h=d.clone();h.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_s;let p=this.type;this.render=function(E,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===zd&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_s);let R=i.getRenderTarget(),U=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),$=i.state;$.setBlending(Mi),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let Q=p!==this.type;Q&&P.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(J=>J.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,J=E.length;O<J;O++){let le=E[O],re=le.shadow;if(re===void 0){je("WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let me=re.getFrameExtents();s.multiply(me),r.copy(re.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,re.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,re.mapSize.y=r.y));let ae=i.state.buffers.depth.getReversed();if(re.camera._reversedDepth=ae,re.map===null||Q===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===yr){if(le.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Rn(s.x,s.y,{format:ns,type:ei,minFilter:ln,magFilter:ln,generateMipmaps:!1}),re.map.texture.name=le.name+".shadowMap",re.map.depthTexture=new Yi(s.x,s.y,Hn),re.map.depthTexture.name=le.name+".shadowMapDepth",re.map.depthTexture.format=hi,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=rn,re.map.depthTexture.magFilter=rn}else le.isPointLight?(re.map=new xc(s.x),re.map.depthTexture=new sl(s.x,Qn)):(re.map=new Rn(s.x,s.y),re.map.depthTexture=new Yi(s.x,s.y,Qn)),re.map.depthTexture.name=le.name+".shadowMap",re.map.depthTexture.format=hi,this.type===_s?(re.map.depthTexture.compareFunction=ae?pc:fc,re.map.depthTexture.minFilter=ln,re.map.depthTexture.magFilter=ln):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=rn,re.map.depthTexture.magFilter=rn);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==s.x||re.map.height!==s.y)&&re.map.setSize(s.x,s.y);let de=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();le.isPointLight!==!0&&re.updateMatrices(le,y);for(let B=0;B<de;B++){let we=re.getCamera(B);if(le.isPointLight){let Re=re.camera,st=re.matrix,Ze=le.distance||Re.far;Ze!==Re.far&&(Re.far=Ze,Re.updateProjectionMatrix()),Ya.setFromMatrixPosition(le.matrixWorld),Re.position.copy(Ya),hh.copy(Re.position),hh.add(cv[B]),Re.up.copy(uv[B]),Re.lookAt(hh),Re.updateMatrixWorld(),st.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Kf.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),re._frustum.setFromProjectionMatrix(Kf,Re.coordinateSystem,Re.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)i.setRenderTarget(re.map,B),i.clear();else{B===0&&(i.setRenderTarget(re.map),i.clear());let Re=re.getViewport(B);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),$.viewport(a)}n=re.getFrustum(B),M(P,y,we,le,this.type)}re.isPointLightShadow!==!0&&this.type===yr&&T(re,y),re.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,U,V)};function T(E,P){let y=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null?E.mapPass=new Rn(s.x,s.y,{format:ns,type:ei}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(P,null,y,d,v,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(P,null,y,h,v,null)}function I(E,P,y,R){let U=null,V=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)U=V;else if(U=y.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let $=U.uuid,Q=P.uuid,O=c[$];O===void 0&&(O={},c[$]=O);let J=O[Q];J===void 0&&(J=U.clone(),O[Q]=J,P.addEventListener("dispose",_)),U=J}if(U.visible=P.visible,U.wireframe=P.wireframe,R===yr?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:f[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,y.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let $=i.properties.get(U);$.light=y}return U}function M(E,P,y,R,U){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&U===yr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);let Q=e.update(E),O=E.material;if(Array.isArray(O)){let J=Q.groups;for(let le=0,re=J.length;le<re;le++){let me=J[le],ae=O[me.materialIndex];if(ae&&ae.visible){let de=I(E,ae,R,U);E.onBeforeShadow(i,E,P,y,Q,de,me),i.renderBufferDirect(y,null,Q,de,E,me),E.onAfterShadow(i,E,P,y,Q,de,me)}}}else if(O.visible){let J=I(E,O,R,U);E.onBeforeShadow(i,E,P,y,Q,J,null),i.renderBufferDirect(y,null,Q,J,E,null),E.onAfterShadow(i,E,P,y,Q,J,null)}}let $=E.children;for(let Q=0,O=$.length;Q<O;Q++)M($[Q],P,y,R,U)}function _(E){E.target.removeEventListener("dispose",_);for(let y in c){let R=c[y],U=E.target.uuid;U in R&&(R[U].dispose(),delete R[U])}}}function dv(i,e){function t(){let D=!1,xe=new Ot,oe=null,ve=new Ot(0,0,0,0);return{setMask:function(_e){oe!==_e&&!D&&(i.colorMask(_e,_e,_e,_e),oe=_e)},setLocked:function(_e){D=_e},setClear:function(_e,he,Pe,Ce,it){it===!0&&(_e*=Ce,he*=Ce,Pe*=Ce),xe.set(_e,he,Pe,Ce),ve.equals(xe)===!1&&(i.clearColor(_e,he,Pe,Ce),ve.copy(xe))},reset:function(){D=!1,oe=null,ve.set(-1,0,0,0)}}}function n(){let D=!1,xe=!1,oe=null,ve=null,_e=null;return{setReversed:function(he){if(xe!==he){let Pe=e.get("EXT_clip_control");he?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),xe=he;let Ce=_e;_e=null,this.setClear(Ce)}},getReversed:function(){return xe},setTest:function(he){he?ce(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(he){oe!==he&&!D&&(i.depthMask(he),oe=he)},setFunc:function(he){if(xe&&(he=Mf[he]),ve!==he){switch(he){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=he}},setLocked:function(he){D=he},setClear:function(he){_e!==he&&(_e=he,xe&&(he=1-he),i.clearDepth(he))},reset:function(){D=!1,oe=null,ve=null,_e=null,xe=!1}}}function s(){let D=!1,xe=null,oe=null,ve=null,_e=null,he=null,Pe=null,Ce=null,it=null;return{setTest:function(Ke){D||(Ke?ce(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ke){xe!==Ke&&!D&&(i.stencilMask(Ke),xe=Ke)},setFunc:function(Ke,Vt,Dt){(oe!==Ke||ve!==Vt||_e!==Dt)&&(i.stencilFunc(Ke,Vt,Dt),oe=Ke,ve=Vt,_e=Dt)},setOp:function(Ke,Vt,Dt){(he!==Ke||Pe!==Vt||Ce!==Dt)&&(i.stencilOp(Ke,Vt,Dt),he=Ke,Pe=Vt,Ce=Dt)},setLocked:function(Ke){D=Ke},setClear:function(Ke){it!==Ke&&(i.clearStencil(Ke),it=Ke)},reset:function(){D=!1,xe=null,oe=null,ve=null,_e=null,he=null,Pe=null,Ce=null,it=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,T=null,I=null,M=null,_=null,E=null,P=null,y=new Be(0,0,0),R=0,U=!1,V=null,$=null,Q=null,O=null,J=null,le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,me=0,ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=me>=1):ae.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=me>=2);let de=null,B={},we=i.getParameter(i.SCISSOR_BOX),Re=i.getParameter(i.VIEWPORT),st=new Ot().fromArray(we),Ze=new Ot().fromArray(Re);function ze(D,xe,oe,ve){let _e=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<oe;Pe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(xe+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return he}let j={};j[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(ir),Me(!1),Se(Cu),ce(i.CULL_FACE),ye(Mi);function ce(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ee(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ye(D,xe){return d[D]!==xe?(i.bindFramebuffer(D,xe),d[D]=xe,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xe),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ie(D,xe){let oe=g,ve=!1;if(D){oe=h.get(xe),oe===void 0&&(oe=[],h.set(xe,oe));let _e=D.textures;if(oe.length!==_e.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Pe=_e.length;he<Pe;he++)oe[he]=i.COLOR_ATTACHMENT0+he;oe.length=_e.length,ve=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(oe)}function qe(D){return v!==D?(i.useProgram(D),v=D,!0):!1}let Qe={[vs]:i.FUNC_ADD,[Gd]:i.FUNC_SUBTRACT,[Vd]:i.FUNC_REVERSE_SUBTRACT};Qe[Wd]=i.MIN,Qe[Xd]=i.MAX;let pe={[qd]:i.ZERO,[$d]:i.ONE,[Yd]:i.SRC_COLOR,[Lu]:i.SRC_ALPHA,[ef]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[Jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Du]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[tf]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[sf]:i.CONSTANT_ALPHA,[rf]:i.ONE_MINUS_CONSTANT_ALPHA};function ye(D,xe,oe,ve,_e,he,Pe,Ce,it,Ke){if(D===Mi){m===!0&&(Ee(i.BLEND),m=!1);return}if(m===!1&&(ce(i.BLEND),m=!0),D!==Hd){if(D!==p||Ke!==U){if((T!==vs||_!==vs)&&(i.blendEquation(i.FUNC_ADD),T=vs,_=vs),Ke)switch(D){case _r:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFunc(i.ONE,i.ONE);break;case Iu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",D);break}else switch(D){case _r:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Iu:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pu:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",D);break}I=null,M=null,E=null,P=null,y.set(0,0,0),R=0,p=D,U=Ke}return}_e=_e||xe,he=he||oe,Pe=Pe||ve,(xe!==T||_e!==_)&&(i.blendEquationSeparate(Qe[xe],Qe[_e]),T=xe,_=_e),(oe!==I||ve!==M||he!==E||Pe!==P)&&(i.blendFuncSeparate(pe[oe],pe[ve],pe[he],pe[Pe]),I=oe,M=ve,E=he,P=Pe),(Ce.equals(y)===!1||it!==R)&&(i.blendColor(Ce.r,Ce.g,Ce.b,it),y.copy(Ce),R=it),p=D,U=!1}function be(D,xe){D.side===qt?Ee(i.CULL_FACE):ce(i.CULL_FACE);let oe=D.side===un;xe&&(oe=!oe),Me(oe),D.blending===_r&&D.transparent===!1?ye(Mi):ye(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ve=D.stencilWrite;o.setTest(ve),ve&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Xe(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Me(D){V!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),V=D)}function Se(D){D!==Bd?(ce(i.CULL_FACE),D!==$&&(D===Cu?i.cullFace(i.BACK):D===Od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),$=D}function Oe(D){D!==Q&&(re&&i.lineWidth(D),Q=D)}function Xe(D,xe,oe){D?(ce(i.POLYGON_OFFSET_FILL),(O!==xe||J!==oe)&&(O=xe,J=oe,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,oe))):Ee(i.POLYGON_OFFSET_FILL)}function He(D){D?ce(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function et(D){D===void 0&&(D=i.TEXTURE0+le-1),de!==D&&(i.activeTexture(D),de=D)}function F(D,xe,oe){oe===void 0&&(de===null?oe=i.TEXTURE0+le-1:oe=de);let ve=B[oe];ve===void 0&&(ve={type:void 0,texture:void 0},B[oe]=ve),(ve.type!==D||ve.texture!==xe)&&(de!==oe&&(i.activeTexture(oe),de=oe),i.bindTexture(D,xe||j[D]),ve.type=D,ve.texture=xe)}function ot(){let D=B[de];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Je(){try{i.compressedTexImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function x(){try{i.texSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function S(){try{i.texSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function w(){try{i.compressedTexSubImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function C(){try{i.compressedTexSubImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function q(){try{i.texStorage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function Z(){try{i.texStorage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){tt("WebGLState:",D)}}function ne(){try{i.texImage3D(...arguments)}catch(D){tt("WebGLState:",D)}}function N(D){return f[D]!==void 0?f[D]:i.getParameter(D)}function z(D,xe){f[D]!==xe&&(i.pixelStorei(D,xe),f[D]=xe)}function W(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function G(D){Ze.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ze.copy(D))}function K(D,xe){let oe=c.get(xe);oe===void 0&&(oe=new WeakMap,c.set(xe,oe));let ve=oe.get(D);ve===void 0&&(ve=i.getUniformBlockIndex(xe,D.name),oe.set(D,ve))}function se(D,xe){let ve=c.get(xe).get(D);l.get(xe)!==ve&&(i.uniformBlockBinding(xe,ve,D.__bindingPointIndex),l.set(xe,ve))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},de=null,B={},d={},h=new WeakMap,g=[],v=null,m=!1,p=null,T=null,I=null,M=null,_=null,E=null,P=null,y=new Be(0,0,0),R=0,U=!1,V=null,$=null,Q=null,O=null,J=null,st.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Ee,bindFramebuffer:Ye,drawBuffers:Ie,useProgram:qe,setBlending:ye,setMaterial:be,setFlipSided:Me,setCullFace:Se,setLineWidth:Oe,setPolygonOffset:Xe,setScissorTest:He,activeTexture:et,bindTexture:F,unbindTexture:ot,compressedTexImage2D:Je,compressedTexImage3D:A,texImage2D:Y,texImage3D:ne,pixelStorei:z,getParameter:N,updateUBOMapping:K,uniformBlockBinding:se,texStorage2D:q,texStorage3D:Z,texSubImage2D:x,texSubImage3D:S,compressedTexSubImage2D:w,compressedTexSubImage3D:C,scissor:W,viewport:G,reset:fe}}function fv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,u=new WeakMap,f=new Set,d,h=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return g?new OffscreenCanvas(A,x):ia("canvas")}function m(A,x,S){let w=1,C=Je(A);if((C.width>S||C.height>S)&&(w=S/Math.max(C.width,C.height)),w<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(w*C.width),Z=Math.floor(w*C.height);d===void 0&&(d=v(q,Z));let Y=x?v(q,Z):d;return Y.width=q,Y.height=Z,Y.getContext("2d").drawImage(A,0,0,q,Z),je("WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+q+"x"+Z+")."),Y}else return"data"in A&&je("WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),A;return A}function p(A){return A.generateMipmaps}function T(A){i.generateMipmap(A)}function I(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,x,S,w,C,q=!1){if(A!==null){if(i[A]!==void 0)return i[A];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z;w&&(Z=e.get("EXT_texture_norm16"),Z||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(S===i.FLOAT&&(Y=i.R32F),S===i.HALF_FLOAT&&(Y=i.R16F),S===i.UNSIGNED_BYTE&&(Y=i.R8),S===i.UNSIGNED_SHORT&&Z&&(Y=Z.R16_EXT),S===i.SHORT&&Z&&(Y=Z.R16_SNORM_EXT)),x===i.RED_INTEGER&&(S===i.UNSIGNED_BYTE&&(Y=i.R8UI),S===i.UNSIGNED_SHORT&&(Y=i.R16UI),S===i.UNSIGNED_INT&&(Y=i.R32UI),S===i.BYTE&&(Y=i.R8I),S===i.SHORT&&(Y=i.R16I),S===i.INT&&(Y=i.R32I)),x===i.RG&&(S===i.FLOAT&&(Y=i.RG32F),S===i.HALF_FLOAT&&(Y=i.RG16F),S===i.UNSIGNED_BYTE&&(Y=i.RG8),S===i.UNSIGNED_SHORT&&Z&&(Y=Z.RG16_EXT),S===i.SHORT&&Z&&(Y=Z.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(S===i.UNSIGNED_BYTE&&(Y=i.RG8UI),S===i.UNSIGNED_SHORT&&(Y=i.RG16UI),S===i.UNSIGNED_INT&&(Y=i.RG32UI),S===i.BYTE&&(Y=i.RG8I),S===i.SHORT&&(Y=i.RG16I),S===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(S===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),S===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),S===i.UNSIGNED_INT&&(Y=i.RGB32UI),S===i.BYTE&&(Y=i.RGB8I),S===i.SHORT&&(Y=i.RGB16I),S===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(S===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),S===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),S===i.UNSIGNED_INT&&(Y=i.RGBA32UI),S===i.BYTE&&(Y=i.RGBA8I),S===i.SHORT&&(Y=i.RGBA16I),S===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(S===i.UNSIGNED_SHORT&&Z&&(Y=Z.RGB16_EXT),S===i.SHORT&&Z&&(Y=Z.RGB16_SNORM_EXT),S===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let ne=q?na:gt.getTransfer(C);S===i.FLOAT&&(Y=i.RGBA32F),S===i.HALF_FLOAT&&(Y=i.RGBA16F),S===i.UNSIGNED_BYTE&&(Y=ne===Et?i.SRGB8_ALPHA8:i.RGBA8),S===i.UNSIGNED_SHORT&&Z&&(Y=Z.RGBA16_EXT),S===i.SHORT&&Z&&(Y=Z.RGBA16_SNORM_EXT),S===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),S===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,x){let S;return A?x===null||x===Qn||x===br?S=i.DEPTH24_STENCIL8:x===Hn?S=i.DEPTH32F_STENCIL8:x===Mr&&(S=i.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Qn||x===br?S=i.DEPTH_COMPONENT24:x===Hn?S=i.DEPTH_COMPONENT32F:x===Mr&&(S=i.DEPTH_COMPONENT16),S}function E(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==rn&&A.minFilter!==ln?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){let x=A.target;x.removeEventListener("dispose",P),R(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function y(A){let x=A.target;x.removeEventListener("dispose",y),V(x)}function R(A){let x=n.get(A);if(x.__webglInit===void 0)return;let S=A.source,w=h.get(S);if(w){let C=w[x.__cacheKey];C.usedTimes--,C.usedTimes===0&&U(A),Object.keys(w).length===0&&h.delete(S)}n.remove(A)}function U(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let S=A.source,w=h.get(S);delete w[x.__cacheKey],a.memory.textures--}function V(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(x.__webglFramebuffer[w]))for(let C=0;C<x.__webglFramebuffer[w].length;C++)i.deleteFramebuffer(x.__webglFramebuffer[w][C]);else i.deleteFramebuffer(x.__webglFramebuffer[w]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[w])}else{if(Array.isArray(x.__webglFramebuffer))for(let w=0;w<x.__webglFramebuffer.length;w++)i.deleteFramebuffer(x.__webglFramebuffer[w]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let w=0;w<x.__webglColorRenderbuffer.length;w++)x.__webglColorRenderbuffer[w]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[w]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let S=A.textures;for(let w=0,C=S.length;w<C;w++){let q=n.get(S[w]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(S[w])}n.remove(A)}let $=0;function Q(){$=0}function O(){return $}function J(A){$=A}function le(){let A=$;return A>=s.maxTextures&&je("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,A}function re(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function me(A,x){let S=n.get(A);if(A.isVideoTexture&&F(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&S.__version!==A.version){let w=A.image;if(w===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(w.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(S,A,x);return}}else A.isExternalTexture&&(S.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,S.__webglTexture,i.TEXTURE0+x)}function ae(A,x){let S=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){Ee(S,A,x);return}else A.isExternalTexture&&(S.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,S.__webglTexture,i.TEXTURE0+x)}function de(A,x){let S=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&S.__version!==A.version){Ee(S,A,x);return}t.bindTexture(i.TEXTURE_3D,S.__webglTexture,i.TEXTURE0+x)}function B(A,x){let S=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&S.__version!==A.version){Ye(S,A,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+x)}let we={[$i]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},Re={[rn]:i.NEAREST,[lf]:i.NEAREST_MIPMAP_NEAREST,[Oa]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Cl]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},st={[df]:i.NEVER,[xf]:i.ALWAYS,[ff]:i.LESS,[fc]:i.LEQUAL,[pf]:i.EQUAL,[pc]:i.GEQUAL,[mf]:i.GREATER,[gf]:i.NOTEQUAL};function Ze(A,x){if(x.type===Hn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===ln||x.magFilter===Cl||x.magFilter===Oa||x.magFilter===es||x.minFilter===ln||x.minFilter===Cl||x.minFilter===Oa||x.minFilter===es)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,we[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,we[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,we[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Re[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Re[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==Oa&&x.minFilter!==es||x.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let S=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ze(A,x){let S=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));let w=x.source,C=h.get(w);C===void 0&&(C={},h.set(w,C));let q=re(x);if(q!==A.__cacheKey){C[q]===void 0&&(C[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,S=!0),C[q].usedTimes++;let Z=C[A.__cacheKey];Z!==void 0&&(C[A.__cacheKey].usedTimes--,Z.usedTimes===0&&U(x)),A.__cacheKey=q,A.__webglTexture=C[q].texture}return S}function j(A,x,S){return Math.floor(Math.floor(A/S)/x)}function ce(A,x,S,w){let q=A.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,S,w,x.data);else{q.sort((z,W)=>z.start-W.start);let Z=0;for(let z=1;z<q.length;z++){let W=q[Z],G=q[z],K=W.start+W.count,se=j(G.start,x.width,4),fe=j(W.start,x.width,4);G.start<=K+1&&se===fe&&j(G.start+G.count-1,x.width,4)===se?W.count=Math.max(W.count,G.start+G.count-W.start):(++Z,q[Z]=G)}q.length=Z+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),N=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let z=0,W=q.length;z<W;z++){let G=q[z],K=Math.floor(G.start/4),se=Math.ceil(G.count/4),fe=K%x.width,D=Math.floor(K/x.width),xe=se,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,fe),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,fe,D,xe,oe,S,w,x.data)}A.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,N)}}function Ee(A,x,S){let w=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(w=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(w=i.TEXTURE_3D);let C=ze(A,x),q=x.source;t.bindTexture(w,A.__webglTexture,i.TEXTURE0+S);let Z=n.get(q);if(q.version!==Z.__version||C===!0){if(t.activeTexture(i.TEXTURE0+S),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let oe=gt.getPrimaries(gt.workingColorSpace),ve=x.colorSpace===ti?null:gt.getPrimaries(x.colorSpace),_e=x.colorSpace===ti||oe===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=m(x.image,!1,s.maxTextureSize);ne=ot(x,ne);let N=r.convert(x.format,x.colorSpace),z=r.convert(x.type),W=M(x.internalFormat,N,z,x.normalized,x.colorSpace,x.isVideoTexture);Ze(w,x);let G,K=x.mipmaps,se=x.isVideoTexture!==!0,fe=Z.__version===void 0||C===!0,D=q.dataReady,xe=E(x,ne);if(x.isDepthTexture)W=_(x.format===ts,x.type),fe&&(se?t.texStorage2D(i.TEXTURE_2D,1,W,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,W,ne.width,ne.height,0,N,z,null));else if(x.isDataTexture)if(K.length>0){se&&fe&&t.texStorage2D(i.TEXTURE_2D,xe,W,K[0].width,K[0].height);for(let oe=0,ve=K.length;oe<ve;oe++)G=K[oe],se?D&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,G.width,G.height,N,z,G.data):t.texImage2D(i.TEXTURE_2D,oe,W,G.width,G.height,0,N,z,G.data);x.generateMipmaps=!1}else se?(fe&&t.texStorage2D(i.TEXTURE_2D,xe,W,ne.width,ne.height),D&&ce(x,ne,N,z)):t.texImage2D(i.TEXTURE_2D,0,W,ne.width,ne.height,0,N,z,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,W,K[0].width,K[0].height,ne.depth);for(let oe=0,ve=K.length;oe<ve;oe++)if(G=K[oe],x.format!==Gn)if(N!==null)if(se){if(D)if(x.layerUpdates.size>0){let _e=eh(G.width,G.height,x.format,x.type);for(let he of x.layerUpdates){let Pe=G.data.subarray(he*_e/G.data.BYTES_PER_ELEMENT,(he+1)*_e/G.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,he,G.width,G.height,1,N,Pe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,G.width,G.height,ne.depth,N,G.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,W,G.width,G.height,ne.depth,0,G.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,G.width,G.height,ne.depth,N,z,G.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,W,G.width,G.height,ne.depth,0,N,z,G.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&fe&&t.texStorage2D(i.TEXTURE_2D,xe,W,K[0].width,K[0].height);for(let oe=0,ve=K.length;oe<ve;oe++)G=K[oe],x.format!==Gn?N!==null?se?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,G.width,G.height,N,G.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,W,G.width,G.height,0,G.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?D&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,G.width,G.height,N,z,G.data):t.texImage2D(i.TEXTURE_2D,oe,W,G.width,G.height,0,N,z,G.data)}else if(x.isDataArrayTexture)if(se){if(fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,W,ne.width,ne.height,ne.depth),D)if(x.layerUpdates.size>0){let oe=eh(ne.width,ne.height,x.format,x.type);for(let ve of x.layerUpdates){let _e=ne.data.subarray(ve*oe/ne.data.BYTES_PER_ELEMENT,(ve+1)*oe/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ne.width,ne.height,1,N,z,_e)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,N,z,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,W,ne.width,ne.height,ne.depth,0,N,z,ne.data);else if(x.isData3DTexture)se?(fe&&t.texStorage3D(i.TEXTURE_3D,xe,W,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,N,z,ne.data)):t.texImage3D(i.TEXTURE_3D,0,W,ne.width,ne.height,ne.depth,0,N,z,ne.data);else if(x.isFramebufferTexture){if(fe)if(se)t.texStorage2D(i.TEXTURE_2D,xe,W,ne.width,ne.height);else{let oe=ne.width,ve=ne.height;for(let _e=0;_e<xe;_e++)t.texImage2D(i.TEXTURE_2D,_e,W,oe,ve,0,N,z,null),oe>>=1,ve>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ne.parentNode!==oe){oe.appendChild(ne),f.add(x),oe.onpaint=ve=>{let _e=ve.changedElements;for(let he of f)_e.includes(he.image)&&(he.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let _e=i.RGBA,he=i.RGBA,Pe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,he,Pe,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(K.length>0){if(se&&fe){let oe=Je(K[0]);t.texStorage2D(i.TEXTURE_2D,xe,W,oe.width,oe.height)}for(let oe=0,ve=K.length;oe<ve;oe++)G=K[oe],se?D&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,N,z,G):t.texImage2D(i.TEXTURE_2D,oe,W,N,z,G);x.generateMipmaps=!1}else if(se){if(fe){let oe=Je(ne);t.texStorage2D(i.TEXTURE_2D,xe,W,oe.width,oe.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,z,ne)}else t.texImage2D(i.TEXTURE_2D,0,W,N,z,ne);p(x)&&T(w),Z.__version=q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ye(A,x,S){if(x.image.length!==6)return;let w=ze(A,x),C=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+S);let q=n.get(C);if(C.version!==q.__version||w===!0){t.activeTexture(i.TEXTURE0+S);let Z=gt.getPrimaries(gt.workingColorSpace),Y=x.colorSpace===ti?null:gt.getPrimaries(x.colorSpace),ne=x.colorSpace===ti||Z===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let N=x.isCompressedTexture||x.image[0].isCompressedTexture,z=x.image[0]&&x.image[0].isDataTexture,W=[];for(let he=0;he<6;he++)!N&&!z?W[he]=m(x.image[he],!0,s.maxCubemapSize):W[he]=z?x.image[he].image:x.image[he],W[he]=ot(x,W[he]);let G=W[0],K=r.convert(x.format,x.colorSpace),se=r.convert(x.type),fe=M(x.internalFormat,K,se,x.normalized,x.colorSpace),D=x.isVideoTexture!==!0,xe=q.__version===void 0||w===!0,oe=C.dataReady,ve=E(x,G);Ze(i.TEXTURE_CUBE_MAP,x);let _e;if(N){D&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,fe,G.width,G.height);for(let he=0;he<6;he++){_e=W[he].mipmaps;for(let Pe=0;Pe<_e.length;Pe++){let Ce=_e[Pe];x.format!==Gn?K!==null?D?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ce.width,Ce.height,K,Ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,fe,Ce.width,Ce.height,0,Ce.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,0,0,Ce.width,Ce.height,K,se,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe,fe,Ce.width,Ce.height,0,K,se,Ce.data)}}}else{if(_e=x.mipmaps,D&&xe){_e.length>0&&ve++;let he=Je(W[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,fe,he.width,he.height)}for(let he=0;he<6;he++)if(z){D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,W[he].width,W[he].height,K,se,W[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,W[he].width,W[he].height,0,K,se,W[he].data);for(let Pe=0;Pe<_e.length;Pe++){let it=_e[Pe].image[he].image;D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,it.width,it.height,K,se,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,fe,it.width,it.height,0,K,se,it.data)}}else{D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,K,se,W[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,K,se,W[he]);for(let Pe=0;Pe<_e.length;Pe++){let Ce=_e[Pe];D?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,0,0,K,se,Ce.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Pe+1,fe,K,se,Ce.image[he])}}}p(x)&&T(i.TEXTURE_CUBE_MAP),q.__version=C.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ie(A,x,S,w,C,q){let Z=r.convert(S.format,S.colorSpace),Y=r.convert(S.type),ne=M(S.internalFormat,Z,Y,S.normalized,S.colorSpace),N=n.get(x),z=n.get(S);if(z.__renderTarget=x,!N.__hasExternalTextures){let W=Math.max(1,x.width>>q),G=Math.max(1,x.height>>q);C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?t.texImage3D(C,q,ne,W,G,x.depth,0,Z,Y,null):t.texImage2D(C,q,ne,W,G,0,Z,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,w,C,z.__webglTexture,0,He(x)):(C===i.TEXTURE_2D||C>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&C<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,w,C,z.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,x,S){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let w=x.depthTexture,C=w&&w.isDepthTexture?w.type:null,q=_(x.stencilBuffer,C),Z=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),q,x.width,x.height):S?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,A)}else{let w=x.textures;for(let C=0;C<w.length;C++){let q=w[C],Z=r.convert(q.format,q.colorSpace),Y=r.convert(q.type),ne=M(q.internalFormat,Z,Y,q.normalized,q.colorSpace);et(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He(x),ne,x.width,x.height):S?i.renderbufferStorageMultisample(i.RENDERBUFFER,He(x),ne,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ne,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(A,x,S){let w=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let C=n.get(x.depthTexture);if(C.__renderTarget=x,(!C.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),w){if(C.__webglInit===void 0&&(C.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),C.__webglTexture===void 0){C.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,x.depthTexture);let N=r.convert(x.depthTexture.format),z=r.convert(x.depthTexture.type),W;x.depthTexture.format===hi?W=i.DEPTH_COMPONENT24:x.depthTexture.format===ts&&(W=i.DEPTH24_STENCIL8);for(let G=0;G<6;G++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,W,x.width,x.height,0,N,z,null)}}else me(x.depthTexture,0);let q=C.__webglTexture,Z=He(x),Y=w?i.TEXTURE_CUBE_MAP_POSITIVE_X+S:i.TEXTURE_2D,ne=x.depthTexture.format===ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===hi)et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,q,0);else if(x.depthTexture.format===ts)et(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,Y,q,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ne,Y,q,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pe(A){let x=n.get(A),S=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let w=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),w){let C=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,w.removeEventListener("dispose",C)};w.addEventListener("dispose",C),x.__depthDisposeCallback=C}x.__boundDepthTexture=w}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(S)for(let w=0;w<6;w++)Qe(x.__webglFramebuffer[w],A,w);else{let w=A.texture.mipmaps;w&&w.length>0?Qe(x.__webglFramebuffer[0],A,0):Qe(x.__webglFramebuffer,A,0)}else if(S){x.__webglDepthbuffer=[];for(let w=0;w<6;w++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[w]),x.__webglDepthbuffer[w]===void 0)x.__webglDepthbuffer[w]=i.createRenderbuffer(),qe(x.__webglDepthbuffer[w],A,!1);else{let C=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[w];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,q)}}else{let w=A.texture.mipmaps;if(w&&w.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qe(x.__webglDepthbuffer,A,!1);else{let C=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(A,x,S){let w=n.get(A);x!==void 0&&Ie(w.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),S!==void 0&&pe(A)}function be(A){let x=A.texture,S=n.get(A),w=n.get(x);A.addEventListener("dispose",y);let C=A.textures,q=A.isWebGLCubeRenderTarget===!0,Z=C.length>1;if(Z||(w.__webglTexture===void 0&&(w.__webglTexture=i.createTexture()),w.__version=x.version,a.memory.textures++),q){S.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){S.__webglFramebuffer[Y]=[];for(let ne=0;ne<x.mipmaps.length;ne++)S.__webglFramebuffer[Y][ne]=i.createFramebuffer()}else S.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){S.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)S.__webglFramebuffer[Y]=i.createFramebuffer()}else S.__webglFramebuffer=i.createFramebuffer();if(Z)for(let Y=0,ne=C.length;Y<ne;Y++){let N=n.get(C[Y]);N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&et(A)===!1){S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let Y=0;Y<C.length;Y++){let ne=C[Y];S.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,S.__webglColorRenderbuffer[Y]);let N=r.convert(ne.format,ne.colorSpace),z=r.convert(ne.type),W=M(ne.internalFormat,N,z,ne.normalized,ne.colorSpace,A.isXRRenderTarget===!0),G=He(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,G,W,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,S.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(S.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)Ie(S.__webglFramebuffer[Y][ne],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ne);else Ie(S.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){for(let Y=0,ne=C.length;Y<ne;Y++){let N=C[Y],z=n.get(N),W=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(W=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(W,z.__webglTexture),Ze(W,N),Ie(S.__webglFramebuffer,A,N,i.COLOR_ATTACHMENT0+Y,W,0),p(N)&&T(W)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,w.__webglTexture),Ze(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)Ie(S.__webglFramebuffer[ne],A,x,i.COLOR_ATTACHMENT0,Y,ne);else Ie(S.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&T(Y),t.unbindTexture()}A.depthBuffer&&pe(A)}function Me(A){let x=A.textures;for(let S=0,w=x.length;S<w;S++){let C=x[S];if(p(C)){let q=I(A),Z=n.get(C).__webglTexture;t.bindTexture(q,Z),T(q),t.unbindTexture()}}}let Se=[],Oe=[];function Xe(A){if(A.samples>0){if(et(A)===!1){let x=A.textures,S=A.width,w=A.height,C=i.COLOR_BUFFER_BIT,q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(A),Y=x.length>1;if(Y)for(let N=0;N<x.length;N++)t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let ne=A.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let N=0;N<x.length;N++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(C|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(C|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[N]);let z=n.get(x[N]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,z,0)}i.blitFramebuffer(0,0,S,w,0,0,S,w,C,i.NEAREST),l===!0&&(Se.length=0,Oe.length=0,Se.push(i.COLOR_ATTACHMENT0+N),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Se.push(q),Oe.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Oe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let N=0;N<x.length;N++){t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.RENDERBUFFER,Z.__webglColorRenderbuffer[N]);let z=n.get(x[N]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+N,i.TEXTURE_2D,z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function He(A){return Math.min(s.maxSamples,A.samples)}function et(A){let x=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(A){let x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ot(A,x){let S=A.colorSpace,w=A.format,C=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||S!==ta&&S!==ti&&(gt.getTransfer(S)===Et?(w!==Gn||C!==In)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",S)),x}function Je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=le,this.resetTextureUnits=Q,this.getTextureUnits=O,this.setTextureUnits=J,this.setTexture2D=me,this.setTexture2DArray=ae,this.setTexture3D=de,this.setTextureCube=B,this.rebindTextures=ye,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pv(i,e){function t(n,s=ti){let r,a=gt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===Pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hu)return i.BYTE;if(n===Gu)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Il)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===Xu)return i.ALPHA;if(n===qu)return i.RGB;if(n===Gn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Nl)return i.RED_INTEGER;if(n===ns)return i.RG;if(n===Ul)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===za||n===Ha||n===Ga||n===Va)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fl||n===Bl||n===Ol||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===Wa||n===ql)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Gl)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wl)return r.COMPRESSED_R11_EAC;if(n===Xl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Wa)return r.COMPRESSED_RG11_EAC;if(n===ql)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$l||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ql)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ec)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ic)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===rc)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ac)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oc||n===lc||n===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oc)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uc||n===hc||n===Xa||n===dc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===uc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gv=`
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

}`,_h=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Sn({vertexShader:mv,fragmentShader:gv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends di{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null,v=typeof XRWebGLBinding<"u",m=new _h,p={},T=t.getContextAttributes(),I=null,M=null,_=[],E=[],P=new Te,y=null,R=null,U=new Bt;U.viewport=new Ot;let V=new Bt;V.viewport=new Ot;let $=[U,V],Q=new El,O=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ce=_[j];return ce===void 0&&(ce=new lr,_[j]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(j){let ce=_[j];return ce===void 0&&(ce=new lr,_[j]=ce),ce.getGripSpace()},this.getHand=function(j){let ce=_[j];return ce===void 0&&(ce=new lr,_[j]=ce),ce.getHandSpace()};function le(j){let ce=E.indexOf(j.inputSource);if(ce===-1)return;let Ee=_[ce];Ee!==void 0&&(Ee.update(j.inputSource,j.frame,c||a),Ee.dispatchEvent({type:j.type,data:j.inputSource}))}function re(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",me);for(let j=0;j<_.length;j++){let ce=E[j];ce!==null&&(E[j]=null,_[j].disconnect(ce))}O=null,J=null,m.reset();for(let j in p)delete p[j];if(e.setRenderTarget(I),h=null,d=null,f=null,s=null,M=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),R!==null){let j=R.camera;j.fov=R.fov,j.zoom=R.zoom,j.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",re),s.addEventListener("inputsourceschange",me),T.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ye=null,Ie=null;T.depth&&(Ie=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=T.stencil?ts:hi,Ye=T.stencil?br:Qn);let qe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Rn(d.textureWidth,d.textureHeight,{format:Gn,type:In,depthTexture:new Yi(d.textureWidth,d.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Rn(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ze.setContext(s),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function me(j){for(let ce=0;ce<j.removed.length;ce++){let Ee=j.removed[ce],Ye=E.indexOf(Ee);Ye>=0&&(E[Ye]=null,_[Ye].disconnect(Ee))}for(let ce=0;ce<j.added.length;ce++){let Ee=j.added[ce],Ye=E.indexOf(Ee);if(Ye===-1){for(let qe=0;qe<_.length;qe++)if(qe>=E.length){E.push(Ee),Ye=qe;break}else if(E[qe]===null){E[qe]=Ee,Ye=qe;break}if(Ye===-1)break}let Ie=_[Ye];Ie&&Ie.connect(Ee)}}let ae=new L,de=new L;function B(j,ce,Ee){ae.setFromMatrixPosition(ce.matrixWorld),de.setFromMatrixPosition(Ee.matrixWorld);let Ye=ae.distanceTo(de),Ie=ce.projectionMatrix.elements,qe=Ee.projectionMatrix.elements,Qe=Ie[14]/(Ie[10]-1),pe=Ie[14]/(Ie[10]+1),ye=(Ie[9]+1)/Ie[5],be=(Ie[9]-1)/Ie[5],Me=(Ie[8]-1)/Ie[0],Se=(qe[8]+1)/qe[0],Oe=Qe*Me,Xe=Qe*Se,He=Ye/(-Me+Se),et=He*-Me;if(ce.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(et),j.translateZ(He),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ie[10]===-1)j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let F=Qe+He,ot=pe+He,Je=Oe-et,A=Xe+(Ye-et),x=ye*pe/ot*F,S=be*pe/ot*F;j.projectionMatrix.makePerspective(Je,A,x,S,F,ot),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,ce){ce===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ce.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ce=j.near,Ee=j.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),Q.near=V.near=U.near=ce,Q.far=V.far=U.far=Ee,(O!==Q.near||J!==Q.far)&&(s.updateRenderState({depthNear:Q.near,depthFar:Q.far}),O=Q.near,J=Q.far),Q.layers.mask=j.layers.mask|6,U.layers.mask=Q.layers.mask&-5,V.layers.mask=Q.layers.mask&-3;let Ye=j.parent,Ie=Q.cameras;we(Q,Ye);for(let qe=0;qe<Ie.length;qe++)we(Ie[qe],Ye);Ie.length===2?B(Q,U,V):Q.projectionMatrix.copy(U.projectionMatrix),R===null&&j.isPerspectiveCamera&&(R={camera:j,fov:j.fov,zoom:j.zoom}),Re(j,Q,Ye)};function Re(j,ce,Ee){Ee===null?j.matrix.copy(ce.matrixWorld):(j.matrix.copy(Ee.matrixWorld),j.matrix.invert(),j.matrix.multiply(ce.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ce.projectionMatrix),j.projectionMatrixInverse.copy(ce.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ps*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Q)},this.getCameraTexture=function(j){return p[j]};let st=null;function Ze(j,ce){if(u=ce.getViewerPose(c||a),g=ce,u!==null){let Ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Ye=!1;Ee.length!==Q.cameras.length&&(Q.cameras.length=0,Ye=!0);for(let pe=0;pe<Ee.length;pe++){let ye=Ee[pe],be=null;if(h!==null)be=h.getViewport(ye);else{let Se=f.getViewSubImage(d,ye);be=Se.viewport,pe===0&&(e.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),e.setRenderTarget(M))}let Me=$[pe];Me===void 0&&(Me=new Bt,Me.layers.enable(pe),Me.viewport=new Ot,$[pe]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(Q.matrix.copy(Me.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ye===!0&&Q.cameras.push(Me)}let Ie=s.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();let pe=f.getDepthInformation(Ee[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,s.renderState)}if(Ie&&Ie.includes("camera-access")&&v){e.state.unbindTexture(),f=n.getBinding();for(let pe=0;pe<Ee.length;pe++){let ye=Ee[pe].camera;if(ye){let be=p[ye];be||(be=new xa,p[ye]=be);let Me=f.getCameraImage(ye);be.sourceTexture=Me}}}}for(let Ee=0;Ee<_.length;Ee++){let Ye=E[Ee],Ie=_[Ee];Ye!==null&&Ie!==void 0&&Ie.update(Ye,ce,c||a)}st&&st(j,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),g=null}let ze=new jf;ze.setAnimationLoop(Ze),this.setAnimationLoop=function(j){st=j},this.dispose=function(){}}},xv=new pt,sp=new at;sp.set(-1,0,0,0,1,0,0,0,1);function yv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ku(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,I,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,I):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),I=T.envMap,M=T.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(sp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let E=_.program;n.uniformBlockBinding(M,E)}function c(M,_){let E=s[M.id];E===void 0&&(m(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",T));let P=_.program;n.updateUBOMapping(M,P);let y=e.render.frame;r[M.id]!==y&&(d(M),r[M.id]=y)}function u(M){let _=f();M.__bindingPointIndex=_;let E=i.createBuffer(),P=M.__size,y=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],E=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let y=0,R=E.length;y<R;y++){let U=E[y];if(Array.isArray(U))for(let V=0,$=U.length;V<$;V++)h(U[V],y,V,P);else h(U,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,_,E,P){if(v(M,_,E,P)===!0){let y=M.__offset,R=M.value;if(Array.isArray(R)){let U=0;for(let V=0;V<R.length;V++){let $=R[V],Q=p($);g($,M.__data,U),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,M.__data)}}function g(M,_,E){typeof M=="number"||typeof M=="boolean"?_[0]=M:M.isMatrix3?(_[0]=M.elements[0],_[1]=M.elements[1],_[2]=M.elements[2],_[3]=0,_[4]=M.elements[3],_[5]=M.elements[4],_[6]=M.elements[5],_[7]=0,_[8]=M.elements[6],_[9]=M.elements[7],_[10]=M.elements[8],_[11]=0):ArrayBuffer.isView(M)?_.set(new M.constructor(M.buffer,M.byteOffset,_.length)):M.toArray(_,E)}function v(M,_,E,P){let y=M.value,R=_+"_"+E;if(P[R]===void 0)return typeof y=="number"||typeof y=="boolean"?P[R]=y:ArrayBuffer.isView(y)?P[R]=y.slice():P[R]=y.clone(),!0;{let U=P[R];if(typeof y=="number"||typeof y=="boolean"){if(U!==y)return P[R]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(U.equals(y)===!1)return U.copy(y),!0}}return!1}function m(M){let _=M.uniforms,E=0,P=16;for(let R=0,U=_.length;R<U;R++){let V=Array.isArray(_[R])?_[R]:[_[R]];for(let $=0,Q=V.length;$<Q;$++){let O=V[$],J=Array.isArray(O.value)?O.value:[O.value];for(let le=0,re=J.length;le<re;le++){let me=J[le],ae=p(me),de=E%P,B=de%ae.boundary,we=de+B;E+=B,we!==0&&P-we<ae.storage&&(E+=P-we),O.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=ae.storage}}}let y=E%P;return y>0&&(E+=P-y),M.__size=E,M.__cache={},this}function p(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(_.boundary=16,_.storage=M.byteLength):je("WebGLRenderer: Unsupported uniform value type.",M),_}function T(M){let _=M.target;_.removeEventListener("dispose",T);let E=a.indexOf(_.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function I(){for(let M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:I}}var vv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),bi=null;function Mv(){return bi===null&&(bi=new ha(vv,16,16,ns,ei),bi.name="DFG_LUT",bi.minFilter=ln,bi.magFilter=ln,bi.wrapS=li,bi.wrapT=li,bi.generateMipmaps=!1,bi.needsUpdate=!0),bi}var yc=class{constructor(e={}){let{canvas:t=yf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=In}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=h,m=new Set([kl,Ul,Nl]),p=new Set([In,Qn,Mr,br,Pl,Ll]),T=new Uint32Array(4),I=new Int32Array(4),M=new L,_=null,E=null,P=[],y=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let U=this,V=!1,$=null,Q=null,O=null,J=null;this._outputColorSpace=gn;let le=0,re=0,me=null,ae=-1,de=null,B=new Ot,we=new Ot,Re=null,st=new Be(0),Ze=0,ze=t.width,j=t.height,ce=1,Ee=null,Ye=null,Ie=new Ot(0,0,ze,j),qe=new Ot(0,0,ze,j),Qe=!1,pe=new dr,ye=!1,be=!1,Me=new pt,Se=new L,Oe=new Ot,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function et(){return me===null?ce:1}let F=n;function ot(b,X){return t.getContext(b,X)}let Je,A,x,S,w,C,q,Z,Y,ne,N,z,W,G,K,se,fe,D,xe,oe,ve,_e,he;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),F===null){let X="webgl2";if(F=ot(X,b),F===null)throw ot(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Pe()}catch(b){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),tt("WebGLRenderer: "+b.message),b}function Pe(){Je=new Ry(F),Je.init(),ve=new pv(F,Je),A=new yy(F,Je,e,ve),x=new dv(F,Je),A.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),Q=F.createFramebuffer(),O=F.createFramebuffer(),J=F.createFramebuffer(),S=new Py(F),w=new j_,C=new fv(F,Je,x,w,A,ve,S),q=new Ay(U),Z=new D0(F),_e=new gy(F,Z),Y=new Cy(F,Z,S,_e),ne=new Dy(F,Y,Z,_e,S),D=new Ly(F,A,C),K=new _y(w),N=new K_(U,q,Je,A,_e,K),z=new yv(U,w),W=new ev,G=new av(Je),fe=new my(U,q,x,ne,g,l),se=new hv(U,ne,A),he=new _v(F,S,A,x),xe=new xy(F,Je,S),oe=new Iy(F,Je,S),S.programs=N.programs,U.capabilities=A,U.extensions=Je,U.properties=w,U.renderLists=W,U.shadowMap=se,U.state=x,U.info=S}v!==In&&(R=new Uy(v,t.width,t.height,o,s,r));let Ce=new vh(U,F);this.xr=Ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(ze,j,!1))},this.getSize=function(b){return b.set(ze,j)},this.setSize=function(b,X,ue=!0){if(Ce.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=b,j=X,t.width=Math.floor(b*ce),t.height=Math.floor(X*ce),ue===!0&&(t.style.width=b+"px",t.style.height=X+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(ze*ce,j*ce).floor()},this.setDrawingBufferSize=function(b,X,ue){ze=b,j=X,ce=ue,t.width=Math.floor(b*ue),t.height=Math.floor(X*ue),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(v===In){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(Ie)},this.setViewport=function(b,X,ue,ee){b.isVector4?Ie.set(b.x,b.y,b.z,b.w):Ie.set(b,X,ue,ee),x.viewport(B.copy(Ie).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(qe)},this.setScissor=function(b,X,ue,ee){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,X,ue,ee),x.scissor(we.copy(qe).multiplyScalar(ce).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(b){x.setScissorTest(Qe=b)},this.setOpaqueSort=function(b){Ee=b},this.setTransparentSort=function(b){Ye=b},this.getClearColor=function(b){return b.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,ue=!0){let ee=0;if(b){let te=!1;if(me!==null){let Ue=me.texture.format;te=m.has(Ue)}if(te){let Ue=me.texture.type,Fe=p.has(Ue),Ne=fe.getClearColor(),Ge=fe.getClearAlpha(),$e=Ne.r,ct=Ne.g,ft=Ne.b;Fe?(T[0]=$e,T[1]=ct,T[2]=ft,T[3]=Ge,F.clearBufferuiv(F.COLOR,0,T)):(I[0]=$e,I[1]=ct,I[2]=ft,I[3]=Ge,F.clearBufferiv(F.COLOR,0,I))}else ee|=F.COLOR_BUFFER_BIT}X&&(ee|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ee|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ee!==0&&F.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),fe.dispose(),W.dispose(),G.dispose(),w.dispose(),q.dispose(),ne.dispose(),_e.dispose(),he.dispose(),N.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ge),Ce.removeEventListener("sessionend",Ae),De.stop()};function it(b){b.preventDefault(),sa("WebGLRenderer: Context Lost."),V=!0}function Ke(){sa("WebGLRenderer: Context Restored."),V=!1;let b=S.autoReset,X=se.enabled,ue=se.autoUpdate,ee=se.needsUpdate,te=se.type;Pe(),S.autoReset=b,se.enabled=X,se.autoUpdate=ue,se.needsUpdate=ee,se.type=te}function Vt(b){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Dt(b){let X=b.target;X.removeEventListener("dispose",Dt),wn(X)}function wn(b){Xn(b),w.remove(b)}function Xn(b){let X=w.get(b).programs;X!==void 0&&(X.forEach(function(ue){N.releaseProgram(ue)}),b.isShaderMaterial&&N.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,ue,ee,te,Ue){X===null&&(X=Xe);let Fe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Ne=nm(b,X,ue,ee,te);x.setMaterial(ee,Fe);let Ge=ue.index,$e=1;if(ee.wireframe===!0){if(Ge=Y.getWireframeAttribute(ue),Ge===void 0)return;$e=2}let ct=ue.drawRange,ft=ue.attributes.position,Ve=ct.start*$e,St=(ct.start+ct.count)*$e;Ue!==null&&(Ve=Math.max(Ve,Ue.start*$e),St=Math.min(St,(Ue.start+Ue.count)*$e)),Ge!==null?(Ve=Math.max(Ve,0),St=Math.min(St,Ge.count)):ft!=null&&(Ve=Math.max(Ve,0),St=Math.min(St,ft.count));let $t=St-Ve;if($t<0||$t===1/0)return;_e.setup(te,ee,Ne,ue,Ge);let Ut,It=xe;if(Ge!==null&&(Ut=Z.get(Ge),It=oe,It.setIndex(Ut)),te.isMesh)ee.wireframe===!0?(x.setLineWidth(ee.wireframeLinewidth*et()),It.setMode(F.LINES)):It.setMode(F.TRIANGLES);else if(te.isLine){let fn=ee.linewidth;fn===void 0&&(fn=1),x.setLineWidth(fn*et()),te.isLineSegments?It.setMode(F.LINES):te.isLineLoop?It.setMode(F.LINE_LOOP):It.setMode(F.LINE_STRIP)}else te.isPoints?It.setMode(F.POINTS):te.isSprite&&It.setMode(F.TRIANGLES);if(te.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let fn=te._multiDrawStarts,ke=te._multiDrawCounts,vn=te._multiDrawCount,_t=Ge?Z.get(Ge).bytesPerElement:1,Bn=w.get(ee).currentProgram.getUniforms();for(let ai=0;ai<vn;ai++)Bn.setValue(F,"_gl_DrawID",ai),It.render(fn[ai]/_t,ke[ai])}else if(te.isInstancedMesh)It.renderInstances(Ve,$t,te.count);else if(ue.isInstancedBufferGeometry){let fn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ke=Math.min(ue.instanceCount,fn);It.renderInstances(Ve,$t,ke)}else It.render(Ve,$t)};function nn(b,X,ue,ee){$!==null&&b.isNodeMaterial&&$.setObject(ee,b),ye===!0&&K.setState(b,ue,!1),b.transparent===!0&&b.side===qt&&b.forceSinglePass===!1?(b.side=un,b.needsUpdate=!0,Us(b,X,ee),b.side=ji,b.needsUpdate=!0,Us(b,X,ee),b.side=qt):Us(b,X,ee)}this.compile=function(b,X,ue=null){ue===null&&(ue=b),$!==null&&$.renderStart(b,X,ue),E=G.get(ue),E.init(X),y.push(E),ue.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),b!==ue&&b.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(E.pushLight(te),te.castShadow&&E.pushShadow(te))}),E.setupLights(),$!==null&&$.updateLights(E.state.lightsArray),be=this.localClippingEnabled,ye=K.init(this.clippingPlanes,be),ye===!0&&K.setGlobalState(this.clippingPlanes,X),$!==null&&se.render(E.state.shadowsArray,ue,X);let ee=new Set;return b.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ue=te.material;if(Ue)if(Array.isArray(Ue))for(let Fe=0;Fe<Ue.length;Fe++){let Ne=Ue[Fe];nn(Ne,ue,X,te),ee.add(Ne)}else nn(Ue,ue,X,te),ee.add(Ue)}),E=y.pop(),$!==null&&$.renderEnd(),ee},this.compileAsync=function(b,X,ue=null){let ee=this.compile(b,X,ue);return new Promise(te=>{function Ue(){if(ee.forEach(function(Fe){let Ge=w.get(Fe).currentProgram;(Ge===void 0||Ge.isReady())&&ee.delete(Fe)}),ee.size===0){te(b);return}setTimeout(Ue,10)}Je.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let H=null;function ie(b){H&&H(b)}function ge(){De.stop()}function Ae(){De.start()}let De=new jf;De.setAnimationLoop(ie),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(b){H=b,Ce.setAnimationLoop(b),b===null?De.stop():De.start()},Ce.addEventListener("sessionstart",ge),Ce.addEventListener("sessionend",Ae),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;$!==null&&$.renderStart(b,X);let ue=Ce.enabled===!0&&Ce.isPresenting===!0,ee=R!==null&&(me===null||ue)&&R.begin(U,me);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,X,me),E=G.get(b,y.length),E.init(X),E.state.textureUnits=C.getTextureUnits(),y.push(E),Me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),pe.setFromProjectionMatrix(Me,Jn,X.reversedDepth),be=this.localClippingEnabled,ye=K.init(this.clippingPlanes,be),_=W.get(b,P.length),_.init(),P.push(_),Ce.enabled===!0&&Ce.isPresenting===!0){let Fe=U.xr.getDepthSensingMesh();Fe!==null&&nt(Fe,X,-1/0,U.sortObjects)}nt(b,X,0,U.sortObjects),_.finish(),$!==null&&$.updateLights(E.state.lightsArray),U.sortObjects===!0&&_.sort(Ee,Ye),He=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,He&&fe.addToRenderList(_,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ye===!0&&K.beginShadows();let te=E.state.shadowsArray;if(se.render(te,b,X),ye===!0&&K.endShadows(),(ee&&R.hasRenderPass())===!1){let Fe=_.opaque,Ne=_.transmissive;if(E.setupLights(),X.isArrayCamera){let Ge=X.cameras;if(Ne.length>0)for(let $e=0,ct=Ge.length;$e<ct;$e++){let ft=Ge[$e];xt(Fe,Ne,b,ft)}He&&fe.render(b);for(let $e=0,ct=Ge.length;$e<ct;$e++){let ft=Ge[$e];ht(_,b,ft,ft.viewport)}}else Ne.length>0&&xt(Fe,Ne,b,X),He&&fe.render(b),ht(_,b,X)}me!==null&&re===0&&(C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me)),ee&&R.end(U),b.isScene===!0&&b.onAfterRender(U,b,X),_e.resetDefaultState(),ae=-1,de=null,y.pop(),y.length>0?(E=y[y.length-1],C.setTextureUnits(E.state.textureUnits),ye===!0&&K.setGlobalState(U.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?_=P[P.length-1]:_=null,$!==null&&$.renderEnd()};function nt(b,X,ue,ee){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(pe)){ee&&Oe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);let Fe=ne.update(b),Ne=b.material;Ne.visible&&_.push(b,Fe,Ne,ue,Oe.z,null,X)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(pe))){let Fe=ne.update(b),Ne=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Oe.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Oe.copy(Fe.boundingSphere.center)),Oe.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(Ne)){let Ge=Fe.groups;for(let $e=0,ct=Ge.length;$e<ct;$e++){let ft=Ge[$e],Ve=Ne[ft.materialIndex];Ve&&Ve.visible&&_.push(b,Fe,Ve,ue,Oe.z,ft,X)}}else Ne.visible&&_.push(b,Fe,Ne,ue,Oe.z,null,X)}}let Ue=b.children;for(let Fe=0,Ne=Ue.length;Fe<Ne;Fe++)nt(Ue[Fe],X,ue,ee)}function ht(b,X,ue,ee){let{opaque:te,transmissive:Ue,transparent:Fe}=b;E.setupLightsView(ue),ye===!0&&K.setGlobalState(U.clippingPlanes,ue),ee&&x.viewport(B.copy(ee)),te.length>0&&dn(te,X,ue),Ue.length>0&&dn(Ue,X,ue),Fe.length>0&&dn(Fe,X,ue),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function xt(b,X,ue,ee){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[ee.id]===void 0){let Ve=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[ee.id]=new Rn(1,1,{generateMipmaps:!0,type:Ve?ei:In,minFilter:es,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let Ue=E.state.transmissionRenderTarget[ee.id],Fe=ee.viewport||B;Ue.setSize(Fe.z*U.transmissionResolutionScale,Fe.w*U.transmissionResolutionScale);let Ne=U.getRenderTarget(),Ge=U.getActiveCubeFace(),$e=U.getActiveMipmapLevel();U.setRenderTarget(Ue),U.getClearColor(st),Ze=U.getClearAlpha(),Ze<1&&U.setClearColor(16777215,.5),U.clear(),He&&fe.render(ue);let ct=U.toneMapping;U.toneMapping=jn;let ft=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),E.setupLightsView(ee),ye===!0&&K.setGlobalState(U.clippingPlanes,ee),dn(b,ue,ee),C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let St=0,$t=X.length;St<$t;St++){let Ut=X[St],{object:It,geometry:fn,material:ke,group:vn}=Ut;if(ke.side===qt&&It.layers.test(ee.layers)){let _t=ke.side;ke.side=un,ke.needsUpdate=!0,ls(It,ue,ee,fn,ke,vn),ke.side=_t,ke.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(Ue),C.updateRenderTargetMipmap(Ue))}U.setRenderTarget(Ne,Ge,$e),U.setClearColor(st,Ze),ft!==void 0&&(ee.viewport=ft),U.toneMapping=ct}function dn(b,X,ue){let ee=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Ue=b.length;te<Ue;te++){let Fe=b[te],{object:Ne,geometry:Ge,group:$e}=Fe,ct=Fe.material;ct.allowOverride===!0&&ee!==null&&(ct=ee),Ne.layers.test(ue.layers)&&ls(Ne,X,ue,Ge,ct,$e)}}function ls(b,X,ue,ee,te,Ue){$!==null&&te.isNodeMaterial&&$.setObject(b,te),b.onBeforeRender(U,X,ue,ee,te,Ue),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),te.onBeforeRender(U,X,ue,ee,b,Ue),te.transparent===!0&&te.side===qt&&te.forceSinglePass===!1?(te.side=un,te.needsUpdate=!0,U.renderBufferDirect(ue,X,ee,te,b,Ue),te.side=ji,te.needsUpdate=!0,U.renderBufferDirect(ue,X,ee,te,b,Ue),te.side=qt):U.renderBufferDirect(ue,X,ee,te,b,Ue),b.onAfterRender(U,X,ue,ee,te,Ue)}function Us(b,X,ue){X.isScene!==!0&&(X=Xe);let ee=w.get(b),te=E.state.lights,Ue=E.state.shadowsArray,Fe=te.state.version,Ne=N.getParameters(b,te.state,Ue,X,ue,E.state.lightProbeGridArray),Ge=N.getProgramCacheKey(Ne),$e=ee.programs;ee.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,ee.fog=X.fog;let ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ee.envMap=q.get(b.envMap||ee.environment,ct),ee.envMapRotation=ee.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",Dt),$e=new Map,ee.programs=$e);let ft=$e.get(Ge);if(ft!==void 0){if(ee.currentProgram===ft&&ee.lightsStateVersion===Fe)return Kh(b,Ne),ft}else Ne.uniforms=N.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,ue,Ne),b.onBeforeCompile(Ne,U),ft=N.acquireProgram(Ne,Ge),$e.set(Ge,ft),ee.uniforms=Ne.uniforms;let Ve=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=K.uniform),Kh(b,Ne),ee.needsLights=sm(b),ee.lightsStateVersion=Fe,ee.needsLights&&(Ve.ambientLightColor.value=te.state.ambient,Ve.lightProbe.value=te.state.probe,Ve.sunLights.value=te.state.sun,Ve.sunLightShadows.value=te.state.sunShadow,Ve.directionalLights.value=te.state.directional,Ve.directionalLightShadows.value=te.state.directionalShadow,Ve.spotLights.value=te.state.spot,Ve.spotLightShadows.value=te.state.spotShadow,Ve.rectAreaLights.value=te.state.rectArea,Ve.ltc_1.value=te.state.rectAreaLTC1,Ve.ltc_2.value=te.state.rectAreaLTC2,Ve.pointLights.value=te.state.point,Ve.pointLightShadows.value=te.state.pointShadow,Ve.hemisphereLights.value=te.state.hemi,Ve.sunShadowMatrix.value=te.state.sunShadowMatrix,Ve.sunShadowCascade.value=te.state.sunShadowCascade,Ve.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ve.spotLightMatrix.value=te.state.spotLightMatrix,Ve.spotLightMap.value=te.state.spotLightMap,Ve.pointShadowMatrix.value=te.state.pointShadowMatrix),ee.lightProbeGrid=E.state.lightProbeGridArray.length>0,ee.currentProgram=ft,ee.uniformsList=null,ft}function Jh(b){if(b.uniformsList===null){let X=b.currentProgram.getUniforms();b.uniformsList=Tr.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Kh(b,X){let ue=w.get(b);ue.outputColorSpace=X.outputColorSpace,ue.batching=X.batching,ue.batchingColor=X.batchingColor,ue.instancing=X.instancing,ue.instancingColor=X.instancingColor,ue.instancingMorph=X.instancingMorph,ue.skinning=X.skinning,ue.morphTargets=X.morphTargets,ue.morphNormals=X.morphNormals,ue.morphColors=X.morphColors,ue.morphTargetsCount=X.morphTargetsCount,ue.numClippingPlanes=X.numClippingPlanes,ue.numIntersection=X.numClipIntersection,ue.vertexAlphas=X.vertexAlphas,ue.vertexTangents=X.vertexTangents,ue.toneMapping=X.toneMapping}function tm(b,X){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(X.matrixWorld);for(let ue=0,ee=b.length;ue<ee;ue++){let te=b[ue];if(te.texture!==null&&te.boundingBox.containsPoint(M))return te}return null}function nm(b,X,ue,ee,te){X.isScene!==!0&&(X=Xe),C.resetTextureUnits();let Ue=X.fog,Fe=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial?X.environment:null,Ne=me===null?U.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gt.workingColorSpace,Ge=ee.isMeshStandardMaterial||ee.isMeshLambertMaterial&&!ee.envMap||ee.isMeshPhongMaterial&&!ee.envMap,$e=q.get(ee.envMap||Fe,Ge),ct=ee.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ft=!!ue.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!ue.morphAttributes.position,St=!!ue.morphAttributes.normal,$t=!!ue.morphAttributes.color,Ut=jn;ee.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Ut=U.toneMapping);let It=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,fn=It!==void 0?It.length:0,ke=w.get(ee),vn=E.state.lights;if(ye===!0&&(be===!0||b!==de)){let Nt=b===de&&ee.id===ae;K.setState(ee,b,Nt)}let _t=!1;ee.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==vn.state.version||ke.outputColorSpace!==Ne||te.isBatchedMesh&&ke.batching===!1||!te.isBatchedMesh&&ke.batching===!0||te.isBatchedMesh&&ke.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&ke.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&ke.instancing===!1||!te.isInstancedMesh&&ke.instancing===!0||te.isSkinnedMesh&&ke.skinning===!1||!te.isSkinnedMesh&&ke.skinning===!0||te.isInstancedMesh&&ke.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ke.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&ke.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&ke.instancingMorph===!1&&te.morphTexture!==null||ke.envMap!==$e||ee.fog===!0&&ke.fog!==Ue||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==K.numPlanes||ke.numIntersection!==K.numIntersection)||ke.vertexAlphas!==ct||ke.vertexTangents!==ft||ke.morphTargets!==Ve||ke.morphNormals!==St||ke.morphColors!==$t||ke.toneMapping!==Ut||ke.morphTargetsCount!==fn||!!ke.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,ke.__version=ee.version);let Bn=ke.currentProgram;_t===!0&&(Bn=Us(ee,X,te),$&&ee.isNodeMaterial&&$.onUpdateProgram(ee,Bn,ke));let ai=!1,Oi=!1,ks=!1,At=Bn.getUniforms(),Xt=ke.uniforms;if(x.useProgram(Bn.program)&&(ai=!0,Oi=!0,ks=!0),ee.id!==ae&&(ae=ee.id,Oi=!0),ke.needsLights){let Nt=tm(E.state.lightProbeGridArray,te);ke.lightProbeGrid!==Nt&&(ke.lightProbeGrid=Nt,Oi=!0)}if(ai||de!==b){x.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),At.setValue(F,"projectionMatrix",b.projectionMatrix),At.setValue(F,"viewMatrix",b.matrixWorldInverse);let Hi=At.map.cameraPosition;Hi!==void 0&&Hi.setValue(F,Se.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&At.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&At.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),de!==b&&(de=b,Oi=!0,ks=!0)}if(ke.needsLights&&(vn.state.sunShadowMap.length>0&&At.setValue(F,"sunShadowMap",vn.state.sunShadowMap,C),vn.state.directionalShadowMap.length>0&&At.setValue(F,"directionalShadowMap",vn.state.directionalShadowMap,C),vn.state.spotShadowMap.length>0&&At.setValue(F,"spotShadowMap",vn.state.spotShadowMap,C),vn.state.pointShadowMap.length>0&&At.setValue(F,"pointShadowMap",vn.state.pointShadowMap,C)),te.isSkinnedMesh){At.setOptional(F,te,"bindMatrix"),At.setOptional(F,te,"bindMatrixInverse");let Nt=te.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),At.setValue(F,"boneTexture",Nt.boneTexture,C))}te.isBatchedMesh&&(At.setOptional(F,te,"batchingTexture"),At.setValue(F,"batchingTexture",te._matricesTexture,C),At.setOptional(F,te,"batchingIdTexture"),At.setValue(F,"batchingIdTexture",te._indirectTexture,C),At.setOptional(F,te,"batchingColorTexture"),te._colorsTexture!==null&&At.setValue(F,"batchingColorTexture",te._colorsTexture,C));let zi=ue.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&D.update(te,ue,Bn),(Oi||ke.receiveShadow!==te.receiveShadow)&&(ke.receiveShadow=te.receiveShadow,At.setValue(F,"receiveShadow",te.receiveShadow)),(ee.isMeshStandardMaterial||ee.isMeshLambertMaterial||ee.isMeshPhongMaterial)&&ee.envMap===null&&X.environment!==null&&(Xt.envMapIntensity.value=X.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=Mv()),Oi){if(At.setValue(F,"toneMappingExposure",U.toneMappingExposure),ke.needsLights&&im(Xt,ks),Ue&&ee.fog===!0&&z.refreshFogUniforms(Xt,Ue),z.refreshMaterialUniforms(Xt,ee,ce,j,E.state.transmissionRenderTarget[b.id]),ke.needsLights&&ke.lightProbeGrid){let Nt=ke.lightProbeGrid;Xt.probesSH.value=Nt.texture,Xt.probesMin.value.copy(Nt.boundingBox.min),Xt.probesMax.value.copy(Nt.boundingBox.max),Xt.probesResolution.value.copy(Nt.resolution)}Tr.upload(F,Jh(ke),Xt,C)}if(ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Tr.upload(F,Jh(ke),Xt,C),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&At.setValue(F,"center",te.center),At.setValue(F,"modelViewMatrix",te.modelViewMatrix),At.setValue(F,"normalMatrix",te.normalMatrix),At.setValue(F,"modelMatrix",te.matrixWorld),ee.uniformsGroups!==void 0){let Nt=ee.uniformsGroups;for(let Hi=0,Fs=Nt.length;Hi<Fs;Hi++){let Qh=Nt[Hi];he.update(Qh,Bn),he.bind(Qh,Bn)}}return Bn}function im(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.sunLights.needsUpdate=X,b.sunLightShadows.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function sm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return me},this.setRenderTargetTextures=function(b,X,ue){let ee=w.get(b);ee.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),w.get(b.texture).__webglTexture=X,w.get(b.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:ue,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){let ue=w.get(b);ue.__webglFramebuffer=X,ue.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,ue=0){me=b,le=X,re=ue;let ee=null,te=!1,Ue=!1;if(b){let Ne=w.get(b);if(Ne.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,Ne.__webglFramebuffer),B.copy(b.viewport),we.copy(b.scissor),Re=b.scissorTest,x.viewport(B),x.scissor(we),x.setScissorTest(Re),ae=-1;return}else if(Ne.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Ne.__hasExternalTextures)C.rebindTextures(b,w.get(b.texture).__webglTexture,w.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ct=b.depthTexture;if(Ne.__boundDepthTexture!==ct){if(ct!==null&&w.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);let $e=w.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[X])?ee=$e[X][ue]:ee=$e[X],te=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?ee=w.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?ee=$e[ue]:ee=$e,B.copy(b.viewport),we.copy(b.scissor),Re=b.scissorTest}else B.copy(Ie).multiplyScalar(ce).floor(),we.copy(qe).multiplyScalar(ce).floor(),Re=Qe;if(ue!==0&&(ee=Q),x.bindFramebuffer(F.FRAMEBUFFER,ee)&&x.drawBuffers(b,ee),x.viewport(B),x.scissor(we),x.setScissorTest(Re),te){let Ne=w.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ne.__webglTexture,ue)}else if(Ue){let Ne=X;for(let Ge=0;Ge<b.textures.length;Ge++){let $e=w.get(b.textures[Ge]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,ue,Ne)}}else if(b!==null&&ue!==0){let Ne=w.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ne.__webglTexture,ue)}ae=-1};function jh(b){let X=w.get(b);return(X.__readFormat!==b.format||X.__readType!==b.type)&&(X.__readFormat=b.format,X.__readType=b.type,X.__formatReadable=A.textureFormatReadable(b.format),X.__typeReadable=A.textureTypeReadable(b.type)),X}this.readRenderTargetPixels=function(b,X,ue,ee,te,Ue,Fe,Ne=0){if(!(b&&b.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge){x.bindFramebuffer(F.FRAMEBUFFER,Ge);try{let $e=b.textures[Ne],ct=$e.format,ft=$e.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne);let Ve=jh($e);if(Ve.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ee&&ue>=0&&ue<=b.height-te&&F.readPixels(X,ue,ee,te,ve.convert(ct),ve.convert(ft),Ue)}finally{let $e=me!==null?w.get(me).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(b,X,ue,ee,te,Ue,Fe,Ne=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=w.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ge=Ge[Fe]),Ge)if(X>=0&&X<=b.width-ee&&ue>=0&&ue<=b.height-te){x.bindFramebuffer(F.FRAMEBUFFER,Ge);let $e=b.textures[Ne],ct=$e.format,ft=$e.type;b.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ne);let Ve=jh($e);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.bufferData(F.PIXEL_PACK_BUFFER,Ue.byteLength,F.STREAM_READ),F.readPixels(X,ue,ee,te,ve.convert(ct),ve.convert(ft),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let $t=me!==null?w.get(me).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,$t);let Ut=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vf(F,Ut,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,St),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ue),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(St),F.deleteSync(Ut),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,ue=0){let ee=Math.pow(2,-ue),te=Math.floor(b.image.width*ee),Ue=Math.floor(b.image.height*ee),Fe=X!==null?X.x:0,Ne=X!==null?X.y:0;C.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,ue,0,0,Fe,Ne,te,Ue),x.unbindTexture()},this.copyTextureToTexture=function(b,X,ue=null,ee=null,te=0,Ue=0){let Fe,Ne,Ge,$e,ct,ft,Ve,St,$t,Ut=b.isCompressedTexture?b.mipmaps[Ue]:b.image;if(ue!==null)Fe=ue.max.x-ue.min.x,Ne=ue.max.y-ue.min.y,Ge=ue.isBox3?ue.max.z-ue.min.z:1,$e=ue.min.x,ct=ue.min.y,ft=ue.isBox3?ue.min.z:0;else{let Xt=Math.pow(2,-te);Fe=Math.floor(Ut.width*Xt),Ne=Math.floor(Ut.height*Xt),b.isDataArrayTexture?Ge=Ut.depth:b.isData3DTexture?Ge=Math.floor(Ut.depth*Xt):Ge=1,$e=0,ct=0,ft=0}ee!==null?(Ve=ee.x,St=ee.y,$t=ee.z):(Ve=0,St=0,$t=0);let It=ve.convert(X.format),fn=ve.convert(X.type),ke;X.isData3DTexture?(C.setTexture3D(X,0),ke=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(C.setTexture2DArray(X,0),ke=F.TEXTURE_2D_ARRAY):(C.setTexture2D(X,0),ke=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);let vn=x.getParameter(F.UNPACK_ROW_LENGTH),_t=x.getParameter(F.UNPACK_IMAGE_HEIGHT),Bn=x.getParameter(F.UNPACK_SKIP_PIXELS),ai=x.getParameter(F.UNPACK_SKIP_ROWS),Oi=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Ut.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ut.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),x.pixelStorei(F.UNPACK_SKIP_ROWS,ct),x.pixelStorei(F.UNPACK_SKIP_IMAGES,ft);let ks=b.isDataArrayTexture||b.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){let Xt=w.get(b),zi=w.get(X),Nt=w.get(Xt.__renderTarget),Hi=w.get(zi.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Nt.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Fs=0;Fs<Ge;Fs++)ks&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,w.get(b).__webglTexture,te,ft+Fs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,w.get(X).__webglTexture,Ue,$t+Fs)),F.blitFramebuffer($e,ct,Fe,Ne,Ve,St,Fe,Ne,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(te!==0||b.isRenderTargetTexture||w.has(b)){let Xt=w.get(b),zi=w.get(X);x.bindFramebuffer(F.READ_FRAMEBUFFER,O),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let Nt=0;Nt<Ge;Nt++)ks?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,te,ft+Nt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,te),At?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zi.__webglTexture,Ue,$t+Nt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zi.__webglTexture,Ue),te!==0?F.blitFramebuffer($e,ct,Fe,Ne,Ve,St,Fe,Ne,F.COLOR_BUFFER_BIT,F.NEAREST):At?F.copyTexSubImage3D(ke,Ue,Ve,St,$t+Nt,$e,ct,Fe,Ne):F.copyTexSubImage2D(ke,Ue,Ve,St,$e,ct,Fe,Ne);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else At?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(ke,Ue,Ve,St,$t,Fe,Ne,Ge,It,fn,Ut.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,Ue,Ve,St,$t,Fe,Ne,Ge,It,Ut.data):F.texSubImage3D(ke,Ue,Ve,St,$t,Fe,Ne,Ge,It,fn,Ut):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ue,Ve,St,Fe,Ne,It,fn,Ut.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ue,Ve,St,Ut.width,Ut.height,It,Ut.data):F.texSubImage2D(F.TEXTURE_2D,Ue,Ve,St,Fe,Ne,It,fn,Ut);x.pixelStorei(F.UNPACK_ROW_LENGTH,vn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Bn),x.pixelStorei(F.UNPACK_SKIP_ROWS,ai),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),Ue===0&&X.generateMipmaps&&F.generateMipmap(ke),x.unbindTexture()},this.initRenderTarget=function(b){w.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),x.unbindTexture()},this.resetState=function(){le=0,re=0,me=null,x.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}};var Mh="bilye-atolyesi-v5",Rr=(()=>{try{return window.top!==window}catch{return!0}})(),rp=typeof location<"u"&&/[?&]debug/.test(location.search);var ap={A\u00E7\u0131k:"On",Kapal\u0131:"Off",Ayarlar:"Settings",Ses:"Sound",M\u00FCzik:"Music",Titre\u015Fim:"Vibration","Hafif g\xF6r\xFCnt\xFC":"Light graphics","Kayd\u0131 yedekle / geri y\xFCkle":"Back up / restore save","Uygulama olarak y\xFCkle":"Install as app","Hafif g\xF6r\xFCnt\xFC eski ve yava\u015F telefonlarda oyunu ak\u0131c\u0131 yapar.":"Light graphics keep the game smooth on older, slower phones.",Tamam:"OK","De\u011Fi\u015Fiklik i\xE7in oyun yeniden a\xE7\u0131l\u0131yor\u2026":"Restarting the game to apply\u2026","Kay\u0131t yede\u011Fi":"Save backup","\u0130lerlemen bu cihaz\u0131n taray\u0131c\u0131s\u0131nda saklan\u0131r. Taray\u0131c\u0131 verisi silinirse kay\u0131t da gider. Kay\u0131t kodunu bir yere not et; ba\u015Fka cihazda ya da y\xFCklenen uygulamada geri y\xFCkleyebilirsin.":"Your progress is stored in this device's browser. If browser data is cleared, the save is lost too. Keep your save code somewhere safe; you can restore it on another device or in the installed app.","Kay\u0131t kodunu buraya yap\u0131\u015Ft\u0131r":"Paste your save code here","Kayd\u0131m\u0131 kopyala":"Copy my save","Kayd\u0131 geri y\xFCkle":"Restore save","Kod ge\xE7ersiz. Tamam\u0131n\u0131 kopyalad\u0131\u011F\u0131ndan emin ol.":"Invalid code. Make sure you copied all of it.","Kay\u0131t geri y\xFCklendi!":"Save restored!",Geri:"Back","Kay\u0131t kodu kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r.":"Save code copied. Paste it somewhere safe.","Kopyalanamad\u0131; kodu elle se\xE7.":"Couldn't copy; select the code manually.",B\u0130LG\u0130SAYARIMA:"ON MY COMPUTER",TABLET\u0130ME:"ON MY TABLET",TELEFONUMA:"ON MY PHONE","Bilye At\xF6lyesi y\xFCklendi! Ana ekran\u0131ndan a\xE7abilirsin.":"Marble Workshop installed! Open it from your home screen.","Oyun zaten uygulama olarak a\xE7\u0131k":"The game is already running as an app","Y\xFCkleniyor\u2026 ana ekran\u0131nda simge belirecek":"Installing\u2026 the icon will appear on your home screen","Y\xFCkleme iptal edildi \xB7 Ayarlar \u2192 Uygulama olarak y\xFCkle":"Install cancelled \xB7 Settings \u2192 Install as app","iPhone ve iPad'de kurulum Safari'nin Ana Ekrana Ekle \xF6zelli\u011Fiyle yap\u0131l\u0131r:":"On iPhone and iPad, install with Safari's Add to Home Screen:","Adres \xE7ubu\u011Funun sa\u011F\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas.":"Tap the Share button to the right of the address bar.","Ekran\u0131n alt\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas.":"Tap the Share button at the bottom of the screen.","Men\xFCy\xFC yukar\u0131 kayd\u0131r, Ana Ekrana Ekle'ye bas.":"Scroll the menu up and tap Add to Home Screen.",Ekle:"Add","Sa\u011F \xFCstteki Ekle'ye bas. Oyun ana ekran\u0131nda belirir.":"Tap Add at the top right. The game appears on your home screen.","Ana ekran uygulamas\u0131 taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \u0130lerlemen varsa \xF6nce Kayd\u0131m\u0131 kopyala, uygulamay\u0131 ilk a\xE7\u0131nca Ayarlar \u2192 Kayd\u0131 yedekle / geri y\xFCkle ile yap\u0131\u015Ft\u0131r.":"The home screen app keeps a separate save from the browser. If you have progress, first tap Copy my save, then paste it in the app via Settings \u2192 Back up / restore save.","Taray\u0131c\u0131n kurulum penceresini \u015Fu an a\xE7mad\u0131. Elle y\xFCklemek kolay:":"Your browser didn't open the install prompt right now. Installing manually is easy:","Taray\u0131c\u0131n\u0131n men\xFCs\xFCn\xFC (\u22EE) a\xE7.":"Open your browser menu (\u22EE).","Uygulamay\u0131 y\xFCkle ya da Ana ekrana ekle'ye bas.":"Tap Install app or Add to Home screen.",Y\u00FCkle:"Install","Onayla. Oyun ana ekran\u0131nda ve uygulama listende belirir.":"Confirm. The game appears on your home screen and app list.","Se\xE7enek yoksa oyunu Chrome, Edge ya da Samsung Internet ile a\xE7.":"If the option is missing, open the game in Chrome, Edge or Samsung Internet.","Bilye At\xF6lyesi":"Marble Workshop","Ana ekran\u0131na ekle: tek dokunu\u015Fla a\xE7, internetsiz de oyna.":"Add it to your home screen: open with one tap, play offline too.","OYUNU {cihaz} Y\xDCKLE":"INSTALL THE GAME {cihaz}","Y\xDCKLEMEDEN OYNA":"PLAY WITHOUT INSTALLING","Kayd\u0131n\u0131 yedekle":"Back up your save","Taray\u0131c\u0131 bir s\xFCre kullan\u0131lmayan sitelerin kay\u0131tlar\u0131n\u0131 silebilir. Kay\u0131t kodunu kopyalay\u0131p bir yere not etmen iyi olur.":"Browsers may delete saves of sites you haven't visited for a while. It's a good idea to copy your save code and keep it somewhere.",Sonra:"Later","Yar\u0131m kalan ma\xE7 var":"Match in progress","{n} / {m} rakip yenildi":"{n} / {m} rivals beaten",Yeni:"New","Seviye {n} yar\u0131m kald\u0131":"Level {n} in progress","Seviye {n}":"Level {n}","B\xF6l\xFCm {n} \xB7 {s} y\u0131ld\u0131z":"Stage {n} \xB7 {s} stars","\xDC\xE7 bilye oyunu, tek at\xF6lye":"Three marble games, one workshop","Mahalle Misketi":"Street Marbles","Ni\u015Fan al, fiskele, halkadaki bilyeleri d\u0131\u015Far\u0131 f\u0131rlat. Mahallenin \u015Fampiyonunu yen!":"Aim, flick and knock the marbles out of the ring. Beat the neighbourhood champion!","Ayr\u0131\u015Ft\u0131rma At\xF6lyesi":"Sorting Workshop","Banttan akan bilyeleri do\u011Fru kavanoza d\xFC\u015F\xFCr. H\u0131zlan, zincir yap, lavdan sak\u0131n!":"Drop the rolling marbles into the right jars. Speed up, build chains, beware of lava!","Bilye Pisti":"Marble Run","Rampa, kavis, trambolin yerle\u015Ftir; bilyeyi barda\u011Fa ula\u015Ft\u0131r.":"Place ramps, curves and trampolines; get the marble into the cup.","\u0130lk Bilye At\xF6lyesi":"The First Marble Workshop","\u0130lk oyunun: bidondan akan bilyeleri banttan ayn\u0131 renkteki kutulara ay\u0131r.":"Your first game: sort marbles from the barrel along the belt into boxes of the same colour.","Eski s\xFCr\xFCm, kayd\u0131 ayr\u0131":"Old version, separate save","Her oyunun kayd\u0131 ayr\u0131 tutulur, kald\u0131\u011F\u0131n yerden devam edersin.":"Each game has its own save, so you continue where you left off.","Harika! {n} bilye birden!":"Great! {n} marbles at once!","G\xFCzel at\u0131\u015F!":"Nice shot!","Iskalad\u0131n, s\u0131ra {ad} da.":"Missed! {ad}'s turn.","\xD6d\xFCl: {ad}":"Prize: {ad}","At\u0131c\u0131 olarak kullanabilirsin!":"You can use it as your shooter!","Kazand\u0131n!":"You won!","{ad} kazand\u0131":"{ad} won",Skor:"Score",misket:"marbles",Toplam:"Total","Tekrar oyna":"Play again",Rakipler:"Rivals","Ma\xE7 bitti":"Match over","Bilyeler yuvarlan\u0131yor\u2026":"Marbles rolling\u2026","Senin s\u0131ran":"Your turn","{ad} ni\u015Fan al\u0131yor\u2026":"{ad} is aiming\u2026",Sen:"You","{n} bilyeyi alan kazan\u0131r":"First to {n} marbles wins","\xC7izgide kayd\u0131rarak yer se\xE7 \xB7 Bilyeni geri \xE7ek, b\u0131rak!":"Slide along the line to pick a spot \xB7 Pull your marble back, release!","Bilyen halkada kald\u0131: oradan tekrar at!":"Your marble stayed in the ring: shoot again from there!","At\u0131c\u0131 bilyene dokun, parma\u011F\u0131n\u0131 geri \xE7ek ve b\u0131rak. Ne kadar \xE7ekersen o kadar g\xFC\xE7l\xFC atar.":"Touch your shooter, pull your finger back and let go. The further you pull, the harder it flies.","{n} bilye":"{n} marbles","{n} galibiyet":"{n} wins","{ad} yenilince a\xE7\u0131l\u0131r":"Unlocks after beating {ad}","Halkadaki bilyelerin yar\u0131s\u0131ndan fazlas\u0131n\u0131 d\u0131\u015Far\u0131 \xE7\u0131karan kazan\u0131r.":"Whoever knocks out more than half of the marbles wins.",Misketlerin:"Your marbles",At\u0131c\u0131n:"Your shooter","Ma\xE7a devam et ({ad})":"Continue match ({ad})","At\u0131c\u0131 bilyeler":"Shooter marbles","Ana men\xFC":"Main menu","Yar\u0131m kalan ma\xE7":"Unfinished match","Yeni ma\xE7a ba\u015Flarsan yar\u0131m kalan ma\xE7 silinir.":"Starting a new match will delete the unfinished one.","Yeni ma\xE7a ba\u015Fla":"Start new match",Vazge\u00E7:"Cancel",A\u011F\u0131rl\u0131k:"Weight",G\u00FC\u00E7:"Power",Se\u00E7ili:"Selected",Se\u00E7:"Select","{ad} yenilince":"Beat {ad}","Ma\xE7larda kazand\u0131\u011F\u0131n her bilye bir misket eder. Rakiplerini yenerek \xF6zel bilyeler de kazan\u0131rs\u0131n.":"Every marble you win in a match is worth one coin. Beat rivals to win special marbles too.","{ad} senin!":"{ad} is yours!","Yeni misin? Kolay gelsin!":"New around here? Good luck!","Benim bilyelerim hep uza\u011Fa gider.":"My marbles always fly far.","Asfaltta bilye h\u0131zl\u0131 kayar, dikkat et.":"Marbles slide fast on asphalt, careful.","\xC7elik bilyemle herkesi da\u011F\u0131t\u0131r\u0131m.":"My steel marble scatters everyone.","Ni\u015Fan almak bir sanatt\u0131r.":"Aiming is an art.","Mahallenin \u015Fampiyonu benim. Hadi bakal\u0131m!":"I'm the champion of this street. Bring it on!","Toprak Avlu":"Dirt Yard","Arka Sokak":"Back Alley","\xC7ar\u015F\u0131 Meydan\u0131":"Market Square","K\u0131z\u0131l Kedig\xF6z\xFC":"Crimson Cat's Eye","Deniz Kedig\xF6z\xFC":"Sea Cat's Eye","\xC7imen Girdab\u0131":"Grass Swirl","Limon Girdab\u0131":"Lemon Swirl","Erik Kedig\xF6z\xFC":"Plum Cat's Eye",Mandalina:"Tangerine","S\xFCt Opal":"Milk Opal","\xC7elik Bilye":"Steel Marble","Alt\u0131n Bilye":"Gold Marble","Lav Bilye":"Lava Marble","Buz Bilye":"Ice Marble",Galaksi:"Galaxy",G\u00F6kku\u015Fa\u011F\u0131:"Rainbow",Okyanus:"Ocean","Gece Kedig\xF6z\xFC":"Night Cat's Eye","G\xFCl Girdab\u0131":"Rose Swirl","Dengeli, her i\u015Fe yarar.":"Balanced, good for everything.","Biraz daha uza\u011Fa gider.":"Rolls a little further.","A\u011F\u0131r: vurdu\u011Funu uza\u011Fa savurur, kendisi az kayar.":"Heavy: sends targets flying, barely slides itself.","Vuraca\u011F\u0131n bilyenin gidece\u011Fi y\xF6n\xFC g\xF6sterir.":"Shows where the marble you hit will go.","G\xFC\xE7l\xFC at\u0131\u015F, hafif a\u011F\u0131r.":"Strong shot, a bit heavy.","A\u011F\u0131r, g\xFC\xE7l\xFC ve ni\u015Fan\u0131 g\xF6sterir. \u015Eampiyon bilyesi.":"Heavy, strong and shows the aim. The champion's marble.","Alttaki par\xE7ay\u0131 parma\u011F\u0131nla tut ve panodaki soluk \u015Feklin \xFCst\xFCne s\xFCr\xFCkle. Yakla\u015F\u0131nca kendili\u011Finden oturur.":"Hold the piece below and drag it onto the faded shape on the board. It snaps into place when close.","Harika! \u015Eimdi sa\u011F alttaki \u201CBilyeyi b\u0131rak\u201D d\xFC\u011Fmesine bas ve bilyenin yolunu izle.":"Great! Now press \u201CDrop the marble\u201D at the bottom right and watch its path.","Bilyeyi b\u0131rak":"Drop the marble",BA\u015ELANGI\u00C7:"START",HEDEF:"GOAL","Sola d\xF6nd\xFCr":"Rotate left","Sa\u011Fa d\xF6nd\xFCr":"Rotate right",\u00C7evir:"Flip",Kald\u0131r:"Remove","Barda\u011Fa ula\u015Ft\u0131!":"It reached the cup!","Y\u0131ld\u0131zlar: {a} / {b}":"Stars: {a} / {b}","Sonraki b\xF6l\xFCm":"Next stage","Tebrikler! T\xFCm b\xF6l\xFCmler bitti.":"Congratulations! All stages complete.","Bu b\xF6l\xFCmde kal":"Stay on this stage",B\u00F6l\u00FCmler:"Stages","Bilye panodan d\xFC\u015Ft\xFC. Kesikli \xE7izgi izledi\u011Fi yolu g\xF6steriyor.":"The marble fell off the board. The dashed line shows its path.","Bilye tak\u0131ld\u0131. Par\xE7alar\u0131 biraz oynat.":"The marble got stuck. Adjust the pieces a little.","Bu par\xE7adan kalmad\u0131":"No pieces of this kind left","Bu b\xF6l\xFCm i\xE7in ipucu yok":"No hint for this stage","T\xFCm ipu\xE7lar\u0131 g\xF6sterildi":"All hints shown","\u0130pucu: soluk par\xE7an\u0131n yerine bir {ad} koy":"Hint: place a {ad} where the faded piece is","Serbest At\xF6lye":"Free Workshop",\u0130pucu:"Hint",Temizle:"Clear",H\u0131z:"Speed",Durdur:"Stop",B\u0131rak:"Drop","Par\xE7alar\u0131 panoya yerle\u015Ftir, bilyeyi b\u0131rak ve barda\u011Fa ula\u015Ft\u0131r. Y\u0131ld\u0131zlar\u0131 da toplarsan tam puan!":"Place pieces on the board, drop the marble and get it into the cup. Collect the stars for full marks!","Serbest at\xF6lyeye devam et":"Continue Free Workshop","{n}. b\xF6l\xFCme devam et":"Continue stage {n}","s\u0131n\u0131rs\u0131z par\xE7a, kendi pistini kur":"unlimited pieces, build your own run","4. b\xF6l\xFCmde a\xE7\u0131l\u0131r":"unlocks at stage 4","Uzun kalas":"Long plank","K\u0131sa kalas":"Short plank",Kavis:"Curve",Trambolin:"Trampoline",H\u0131zland\u0131r\u0131c\u0131:"Booster",Huni:"Funnel","\u0130lk kalas":"First plank","Kalas\u0131 s\xFCr\xFCkleyip panoya b\u0131rak. D\xF6nd\xFCrmek i\xE7in \xFCst\xFCne dokun, ok d\xFC\u011Fmelerini kullan.":"Drag the plank onto the board. Tap it and use the arrow buttons to rotate.","Kavisli d\xF6n\xFC\u015F":"Curved turn","Kavis d\xFC\u015Fen bilyeyi yana \xE7evirir.":"A curve turns a falling marble sideways.",Zikzak:"Zigzag","Z\u0131pla!":"Bounce!","Trambolin bilyeyi z\u0131plat\u0131r.":"The trampoline bounces the marble.","H\u0131zland\u0131r\u0131c\u0131 bilyeyi ok y\xF6n\xFCnde f\u0131rlat\u0131r.":"The booster launches the marble in the arrow's direction.","Huniden ge\xE7ir":"Through the funnel","Huni bilyeyi ortadan a\u015Fa\u011F\u0131 ak\u0131t\u0131r.":"The funnel drops the marble through its middle.","\xC7at\u0131l\u0131 bardak":"Covered cup","Duvar\u0131n ard\u0131":"Behind the wall",Merdiven:"Staircase","Yoku\u015F yukar\u0131":"Uphill","\xC7ift trambolin":"Double trampoline",Labirent:"Maze",U\u00E7urum:"Cliff",Sarmal:"Spiral","Usta i\u015Fi":"Master work","B\xFCy\xFCk final":"Grand finale","Kald\u0131\u011F\u0131n yerden devam!":"Picking up where you left off!","Sonsuz At\xF6lye":"Endless Workshop","{r} renk \xB7 {g} bilyeyi do\u011Fru kavanoza ay\u0131r":"{r} colours \xB7 sort {g} marbles into the right jars","Hata yapana kadar devam et. Bant gittik\xE7e h\u0131zlan\u0131r.":"Keep going until you make mistakes. The belt keeps speeding up.","3 hata yaparsan seviye biter.":"Three mistakes and the level ends.",Ba\u015Fla:"Start","Bir kavanoza dokundu\u011Funda \xFCst\xFCndeki kapak a\xE7\u0131l\u0131r, bant \xFCzerindeki bilye i\xE7ine d\xFC\u015Fer. Tekrar dokun, kapak kapan\u0131r.":"Tap a jar to open the hatch above it; marbles on the belt drop in. Tap again to close it.","YEN\u0130: G\xF6kku\u015Fa\u011F\u0131 bilye her kavanoza uyar.":"NEW: A rainbow marble fits any jar.","YEN\u0130: Lav bilye kavanozu \xE7atlat\u0131r! Band\u0131n sonundaki su kovas\u0131na gitsin, kapaklar\u0131 kapal\u0131 tut.":"NEW: A lava marble cracks jars! Keep the hatches shut and let it reach the water bucket.","YEN\u0130: Buz bilye nereye d\xFC\u015Ferse d\xFC\u015Fs\xFCn band\u0131 5 saniye yava\u015Flat\u0131r.":"NEW: Wherever an ice marble lands, it slows the belt for 5 seconds.","YEN\u0130: Kavanozlar ara ara yer de\u011Fi\u015Ftirir. Etiketlere dikkat!":"NEW: Jars swap places now and then. Watch the labels!","Banttaki bilyeyle ayn\u0131 renkteki kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r.":"Tap the jar matching the marble's colour: its hatch opens.","Ka\xE7t\u0131!":"Missed!","Buz! Bant yava\u015Flad\u0131":"Ice! The belt slowed down","Z\u0130NC\u0130R x{n}":"CHAIN x{n}","Lav kavanozu \xE7atlatt\u0131!":"Lava cracked the jar!","Yanl\u0131\u015F kavanoz!":"Wrong jar!","Kavanozlar yer de\u011Fi\u015Ftiriyor!":"Jars are swapping!",Puan:"Score","Yeni rekor!":"New record!","En iyi":"Best","En uzun zincir":"Longest chain",Tekrar:"Retry",Seviyeler:"Levels","Seviye {n} tamam!":"Level {n} complete!","Seviye {n} bitti":"Level {n} over","3 hata yapt\u0131n. Bir daha dene!":"Three mistakes. Try again!","Sonraki seviye":"Next level",Sonsuz:"Endless","Bilyeleri renklerine g\xF6re kavanozlara ay\u0131r. Kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r ya da kapan\u0131r.":"Sort marbles into jars by colour. Tap a jar to open or close its hatch.","Seviye {n} devam et":"Continue level {n}","Sonsuz moda devam et":"Continue endless mode",Rekor:"Record","10. seviyede a\xE7\u0131l\u0131r":"unlocks at level 10",Duraklat\u0131ld\u0131:"Paused","Devam et":"Resume","Yeniden ba\u015Flat":"Restart"};var Ka="tr",op=new Set,ni=()=>Ka;function Cr(i){Ka=i==="en"?"en":"tr",document.documentElement.lang=Ka}function lp(){return/^tr\b/i.test(navigator.language||"")?"tr":"en"}function k(i,e){let t=i;if(Ka==="en"){let n=ap[i];n===void 0?op.add(i):t=n}return e&&(t=t.replace(/\{(\w+)\}/g,(n,s)=>e[s]!==void 0?e[s]:`{${s}}`)),t}var cp=()=>[...op];function Vn(i){return Math.round(i).toLocaleString(Ka==="en"?"en-US":"tr-TR")}var up=1,bh=()=>({schema:up,created:Date.now(),settings:{lang:null,sound:!0,music:!0,vib:!0,lite:null},last:null,install:null,backupAt:0,modes:{misket:{},sort:{},pist:{}}});function hp(i){let e=bh();if(!i||typeof i!="object")return e;let t={...e,...i,settings:{...e.settings,...i.settings||{}},modes:{...e.modes,...i.modes||{}}};return t.schema=up,t}var vt={data:bh(),ok:!0},Mc=0;function dp(){try{vt.data=hp(JSON.parse(localStorage.getItem(Mh)))}catch{vt.ok=!1,vt.data=bh()}try{navigator.storage&&navigator.storage.persist&&navigator.storage.persist()}catch{}return vt.data}function Ct(){clearTimeout(Mc),Mc=0;try{localStorage.setItem(Mh,JSON.stringify(vt.data)),vt.ok=!0}catch{vt.ok=!1}}function Jt(){Mc||(Mc=setTimeout(Ct,400))}var Ir=i=>vt.data.modes[i]||(vt.data.modes[i]={}),bv=i=>btoa(String.fromCharCode(...new TextEncoder().encode(i))),Sv=i=>new TextDecoder().decode(Uint8Array.from(atob(i),e=>e.charCodeAt(0)));function fp(){return Ct(),"BA5:"+bv(JSON.stringify(vt.data))}function pp(i){let e=/BA5:([A-Za-z0-9+/=\s]+)/.exec(i||"");if(!e)return!1;try{let t=JSON.parse(Sv(e[1].replace(/\s/g,"")));return!t||!t.modes?!1:(vt.data=hp(t),Ct(),!0)}catch{return!1}}function bc(){let i=vt.data.modes;return Object.keys(i.misket.wins||{}).length>0||(i.sort.unlocked||1)>1||(i.pist.unlocked||1)>1||!!i.misket.match}var lt=null,Pr,Ts,ki,Qa,Lr,ja,Es,tn={sound:!0,music:!0,vib:!0,musicOn:!1,nextNote:0,step:0};function Sh(i){tn.sound=i.sound,tn.music=i.music,tn.vib=i.vib,lt&&(Ts.gain.value=tn.sound?.9:0,ki.gain.setTargetAtTime(tn.music?.22:0,lt.currentTime,.3))}function ws(){if(!lt){let i=window.AudioContext||window.webkitAudioContext;if(!i)return;lt=new i,Pr=lt.createGain(),Pr.gain.value=.8;let e=lt.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=4,Pr.connect(e),e.connect(lt.destination),Ts=lt.createGain(),Ts.connect(Pr),ki=lt.createGain(),ki.gain.value=0;let t=lt.createDelay(1);t.delayTime.value=.38;let n=lt.createGain();n.gain.value=.32;let s=lt.createBiquadFilter();s.type="lowpass",s.frequency.value=2400,ki.connect(Pr),ki.connect(t),t.connect(s),s.connect(n),n.connect(t),s.connect(Pr),Qa=lt.createBuffer(1,lt.sampleRate,lt.sampleRate);let r=Qa.getChannelData(0);for(let a=0;a<r.length;a++)r[a]=Math.random()*2-1;Sh(tn)}lt.state==="suspended"&&lt.resume()}function Eh(i,e,t,n,s){i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(n,e+t),i.gain.exponentialRampToValueAtTime(1e-4,e+t+s)}function Lt(i,e,t,n,s="sine",r=Ts){let a=lt.createOscillator(),o=lt.createGain();return a.type=s,a.frequency.setValueAtTime(i,e),Eh(o,e,.003,n,t),a.connect(o),o.connect(r),a.start(e),a.stop(e+t+.05),a}function Th(i,e,t,n,s,r=1){let a=lt.createBufferSource();a.buffer=Qa;let o=lt.createBiquadFilter();o.type=n,o.frequency.value=s,o.Q.value=r;let l=lt.createGain();Eh(l,i,.002,t,e),a.connect(o),o.connect(l),l.connect(Ts),a.start(i,Math.random()*.5),a.stop(i+e+.05)}var ss=()=>lt&&tn.sound&&lt.state==="running",mp=0;function Sc(i=1,e=1){if(!ss())return;let t=lt.currentTime;if(t-mp<.018)return;mp=t;let n=Math.min(1,Math.max(.05,i)),s=2550*e*(.94+Math.random()*.12);Lt(s,t,.07+.05*n,.32*n),Lt(s*1.53,t,.05,.16*n),Lt(s*2.41,t,.03,.08*n),Th(t,.012,.25*n,"highpass",5e3)}function As(i=1,e="wood"){if(!ss())return;let t=lt.currentTime,n=Math.min(1,Math.max(.05,i));if(e==="glass"){Lt(1900*(.95+Math.random()*.1),t,.12,.2*n),Lt(3100,t,.06,.08*n);return}if(e==="metal"){Lt(880,t,.25,.12*n,"triangle"),Lt(1320,t,.18,.06*n);return}Lt(e==="dirt"?140:260,t,.09,.35*n).frequency.exponentialRampToValueAtTime(70,t+.08),Th(t,.05,.18*n,"lowpass",e==="dirt"?700:1500)}function En(i){if(!lt)return;Lr||(Lr=lt.createBufferSource(),Lr.buffer=Qa,Lr.loop=!0,Es=lt.createBiquadFilter(),Es.type="bandpass",Es.frequency.value=400,Es.Q.value=.8,ja=lt.createGain(),ja.gain.value=0,Lr.connect(Es),Es.connect(ja),ja.connect(Ts),Lr.start());let e=tn.sound?Math.min(1,Math.max(0,i)):0;ja.gain.setTargetAtTime(e*.16,lt.currentTime,.05),Es.frequency.setTargetAtTime(250+e*900,lt.currentTime,.05)}function Mt(i="tap"){if(!ss())return;let e=lt.currentTime;i==="tap"?Lt(1320,e,.05,.12,"triangle"):i==="toggle"?(Lt(990,e,.04,.1,"triangle"),Lt(1480,e+.04,.05,.08,"triangle")):i==="no"?(Lt(220,e,.14,.18,"square"),Lt(196,e+.09,.16,.14,"square")):i==="pick"?Lt(1760,e,.06,.1,"sine"):i==="drop"&&Lt(660,e,.07,.12,"triangle")}var gp=[0,2,4,7,9,12,14,16,19,21,24];function Wn(i=0){if(!ss())return;let e=lt.currentTime,t=gp[Math.min(gp.length-1,i)],n=784*Math.pow(2,t/12);Lt(n,e,.35,.16),Lt(n*2,e,.2,.05),Lt(n*3.01,e,.12,.03)}function rs(){if(!ss())return;let i=lt.currentTime;[523,659,784,1047,1319].forEach((e,t)=>{Lt(e,i+t*.09,.5,.14),Lt(e*2,i+t*.09,.25,.04)})}function Dr(){if(!ss())return;let i=lt.currentTime;[392,330,262].forEach((e,t)=>Lt(e,i+t*.13,.3,.12,"triangle"))}function _p(){if(!ss())return;let i=lt.currentTime;Th(i,.18,.4,"highpass",2500),Lt(1700,i,.1,.12),Lt(2300,i+.03,.08,.1)}function Rs(i=1){if(!ss())return;let e=lt.currentTime,t=lt.createBufferSource();t.buffer=Qa;let n=lt.createBiquadFilter();n.type="bandpass",n.Q.value=1.2,n.frequency.setValueAtTime(300,e),n.frequency.exponentialRampToValueAtTime(1800,e+.25);let s=lt.createGain();Eh(s,e,.06,.2*i,.25),t.connect(n),n.connect(s),s.connect(Ts),t.start(e),t.stop(e+.4)}function Fi(i=15){if(tn.vib&&navigator.vibrate)try{navigator.vibrate(i)}catch{}}var xp=[0,3,5,7,10],yp=[[0,7],[-4,3],[-2,5],[-7,0]];function Ec(i){tn.musicOn=i}function vp(){if(!lt||lt.state!=="running"||!tn.musicOn||!tn.music)return;let i=lt.currentTime,e=.36;for(tn.nextNote<i&&(tn.nextNote=i+.05);tn.nextNote<i+.25;){let t=tn.step,n=tn.nextNote,s=yp[Math.floor(t/16)%yp.length];t%8===0&&Lt(110*Math.pow(2,s[0]/12),n,1.6,.16,"sine",ki),t%16===8&&Lt(110*Math.pow(2,s[1]/12),n,1.2,.1,"sine",ki);let r=(t*7+Math.floor(t/16)*3)%11;if(r<5&&Math.random()<.8){let a=xp[(r+Math.floor(t/4))%xp.length]+12*(Math.random()<.3?1:0),o=440*Math.pow(2,(a+s[0])/12);Lt(o,n,.6,.07,"sine",ki),Lt(o*4,n,.08,.012,"sine",ki)}tn.step++,tn.nextNote+=e}}var Tc=class extends Un{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new cn;e.deleteAttribute("uv");let t=new yt({side:un}),n=new yt,s=new Ui(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new gi(e,n,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new We(e,Nr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new We(e,Nr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new We(e,Nr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new We(e,Nr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new We(e,Nr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let h=new We(e,Nr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Nr(i){return new Pa({color:0,emissive:16777215,emissiveIntensity:i})}function wc(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Rt,c=0;for(let u=0;u<i.length;++u){let f=i[u],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(f.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in f.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(t){let u=0,f=[];for(let d=0;d<i.length;++d){let h=i[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=i[d].attributes.position.count}l.setIndex(f)}for(let u in r){let f=Mp(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(let u in a){let f=a[u][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){let h=[];for(let v=0;v<a[u].length;++v)h.push(a[u][v][d]);let g=Mp(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Mp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Zt(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let f=l/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){let v=u.getComponent(d,g);o.setComponent(d+f,g,v)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var Pn={kirmizi:{name:"K\u0131z\u0131l Kedig\xF6z\xFC",kind:"cateye",tint:16773870,core:[15212843,16738877],sym:"\u2665"},mavi:{name:"Deniz Kedig\xF6z\xFC",kind:"cateye",tint:15660799,core:[1859552,3651327],sym:"\u25CF"},yesil:{name:"\xC7imen Girdab\u0131",kind:"swirl",tint:15400943,core:[1288266,10217546,16777215],sym:"\u25B2"},sari:{name:"Limon Girdab\u0131",kind:"swirl",tint:16776168,core:[16761856,16747008,16777215],sym:"\u2605"},mor:{name:"Erik Kedig\xF6z\xFC",kind:"cateye",tint:16183039,core:[9055202,14703871],sym:"\u25C6"},turuncu:{name:"Mandalina",kind:"swirl",tint:16774120,core:[16738816,16765088,12595200],sym:"\u25A0"},opal:{name:"S\xFCt Opal",kind:"opal",tint:16052716,core:[16766696,13168895,16774336]},celik:{name:"\xC7elik Bilye",kind:"metal",tint:14278115},altin:{name:"Alt\u0131n Bilye",kind:"metal",tint:16760906},lav:{name:"Lav Bilye",kind:"lava",tint:2757648,core:[16734720,16764730]},buz:{name:"Buz Bilye",kind:"ice",tint:14217983,core:[16777215,10476799]},galaksi:{name:"Galaksi",kind:"galaxy",tint:15132927,core:[722736,6962431,16732120]},gokkusagi:{name:"G\xF6kku\u015Fa\u011F\u0131",kind:"swirl",tint:16777215,core:[16726843,16756736,16773632,3074154,3116031,10898431]},okyanus:{name:"Okyanus",kind:"swirl",tint:15268863,core:[28298,49863,16777215]},gece:{name:"Gece Kedig\xF6z\xFC",kind:"cateye",tint:15329778,core:[1118498,16765498]},gul:{name:"G\xFCl Girdab\u0131",kind:"swirl",tint:16773365,core:[16732043,16777215,11534394]}},Cs={mavi:{mass:1,power:1,fric:1,guide:1,price:0,note:"Dengeli, her i\u015Fe yarar."},okyanus:{mass:1,power:1.08,fric:.9,guide:1.1,price:12,note:"Biraz daha uza\u011Fa gider."},celik:{mass:1.9,power:.92,fric:1.15,guide:1,price:30,note:"A\u011F\u0131r: vurdu\u011Funu uza\u011Fa savurur, kendisi az kayar."},galaksi:{mass:1,power:1,fric:1,guide:1.8,aimHit:!0,price:45,note:"Vuraca\u011F\u0131n bilyenin gidece\u011Fi y\xF6n\xFC g\xF6sterir."},lav:{mass:1.3,power:1.18,fric:1.05,guide:1,price:60,note:"G\xFC\xE7l\xFC at\u0131\u015F, hafif a\u011F\u0131r."},altin:{mass:1.5,power:1.12,fric:.95,guide:1.4,aimHit:!0,price:100,note:"A\u011F\u0131r, g\xFC\xE7l\xFC ve ni\u015Fan\u0131 g\xF6sterir. \u015Eampiyon bilyesi."}};var Cc={lite:!1};function Tp(i,e){Cc.lite=e;let t=new yc({canvas:i,antialias:!0,powerPreference:"high-performance",alpha:!1});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1.25:2)),t.toneMapping=Fa,t.toneMappingExposure=.92,t.outputColorSpace=gn,t.shadowMap.enabled=!e,t.shadowMap.type=_s,t}var Ac=null;function wp(i){if(Ac)return Ac;let e=new wr(i);return Ac=e.fromScene(new Tc,.035).texture,e.dispose(),Ac}function hn(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let a=new ga(s);return a.colorSpace=n.linear?ti:gn,a.anisotropy=4,n.repeat&&(a.wrapS=a.wrapT=$i,a.repeat.set(n.repeat[0],n.repeat[1])),a}function ii(i=1){let e=i>>>0;return()=>(e=e*1664525+1013904223>>>0)/4294967296}var Ic=i=>"#"+new Be(i).getHexString();function bp(i,e){let t=ii(e);return hn(512,256,(n,s,r)=>{n.fillStyle=Ic(i[i.length-1]),n.fillRect(0,0,s,r);let a=7+Math.floor(t()*4);for(let o=0;o<a;o++){let l=i[o%i.length],c=t()*Math.PI*2,u=20+t()*50,f=10+t()*26,d=t()*r;n.fillStyle=Ic(l),n.globalAlpha=.9,n.beginPath();for(let h=0;h<=s;h+=4){let g=d+Math.sin(h/s*Math.PI*2*2+c)*u;h===0?n.moveTo(h,g):n.lineTo(h,g)}for(let h=s;h>=0;h-=4){let g=d+f+Math.sin(h/s*Math.PI*2*2+c+.4)*u;n.lineTo(h,g)}n.closePath(),n.fill()}n.globalAlpha=1})}function Ev(i,e){let t=ii(e);return hn(512,256,(n,s,r)=>{n.fillStyle=Ic(i[0]),n.fillRect(0,0,s,r);for(let a=0;a<9;a++){let o=t()*s,l=t()*r,c=40+t()*90,u=n.createRadialGradient(o,l,0,o,l,c),f=new Be(i[1+a%(i.length-1)]);u.addColorStop(0,`rgba(${f.r*255|0},${f.g*255|0},${f.b*255|0},0.55)`),u.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}for(let a=0;a<260;a++){n.fillStyle=`rgba(255,255,255,${.4+t()*.6})`;let o=t()<.1?2.2:1.1;n.fillRect(t()*s,t()*r,o,o)}})}function Sp(i,e,t){let n=ii(e);return hn(512,256,(s,r,a)=>{if(s.fillStyle=t?"#000":"#1a0d08",s.fillRect(0,0,r,a),!t)for(let o=0;o<400;o++)s.fillStyle=`rgba(${60+n()*40},${30+n()*20},20,0.5)`,s.fillRect(n()*r,n()*a,3+n()*8,3+n()*8);s.lineCap="round";for(let o=0;o<26;o++){let l=n()*r,c=n()*a;s.strokeStyle=Ic(i[o%2]),s.lineWidth=t?3+n()*4:2+n()*3,s.beginPath(),s.moveTo(l,c);for(let u=0;u<6;u++)l+=(n()-.5)*70,c+=(n()-.5)*50,s.lineTo(l,c);s.stroke()}})}function Tv(i,e){let t=ii(e);return hn(256,128,(n,s,r)=>{n.fillStyle="#f7f4ef",n.fillRect(0,0,s,r);for(let a=0;a<30;a++){let o=t()*s,l=t()*r,c=10+t()*40,u=n.createRadialGradient(o,l,0,o,l,c),f=new Be(i[a%i.length]);u.addColorStop(0,`rgba(${f.r*255|0},${f.g*255|0},${f.b*255|0},0.7)`),u.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=u,n.fillRect(0,0,s,r)}})}var Rc=null;function wv(){if(Rc)return Rc;let i=new yi(1,48,32),e=new yi(.76,32,20),t=[];for(let n=0;n<3;n++){let s=new Ni;s.moveTo(0,-.86),s.quadraticCurveTo(.42,0,0,.86),s.quadraticCurveTo(-.42,0,0,-.86);let r=new Ca(s,16),a=r.attributes.position;for(let o=0;o<a.count;o++){let l=a.getX(o),c=a.getY(o),u=c*1.1;a.setXYZ(o,l*Math.cos(u),c,l*Math.sin(u))}r.rotateY(n*Math.PI/3),r.computeVertexNormals(),t.push(r)}return Rc={shell:i,core:e,vane:wc(t)},Rc}var wh=new Map;function Av(i){let e=i+(Cc.lite?":l":":h");if(wh.has(e))return wh.get(e);let t=Pn[i]||Pn.mavi,n=[...i].reduce((a,o)=>a*31+o.charCodeAt(0),7),s=(a={})=>Cc.lite?new Cn({color:t.tint,roughness:.04,metalness:0,transparent:!0,opacity:.32,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6,depthWrite:!1,...a.lite}):new Cn({color:t.tint,roughness:.03,metalness:0,transmission:1,thickness:1.4,ior:1.5,attenuationColor:t.tint,attenuationDistance:2.5,specularIntensity:1,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.4,...a.high}),r;switch(t.kind){case"cateye":r={shell:s(),inner:new yt({color:t.core[0],emissive:t.core[1],emissiveIntensity:.12,roughness:.3,side:qt}),innerGeo:"vane"};break;case"swirl":r={shell:s(),inner:new yt({map:bp(t.core,n),roughness:.3,color:14540253}),innerGeo:"core"};break;case"galaxy":{let a=Ev(t.core,n);r={shell:s(),inner:new yt({map:a,emissiveMap:a,emissive:16777215,emissiveIntensity:.9,roughness:.5}),innerGeo:"core"};break}case"lava":r={shell:s({high:{color:16756864,attenuationColor:16738848,attenuationDistance:1.5},lite:{color:16751200,opacity:.25}}),inner:new yt({map:Sp(t.core,n,!1),emissiveMap:Sp(t.core,n,!0),emissive:16777215,emissiveIntensity:2.2,roughness:.6}),innerGeo:"core"};break;case"ice":r={shell:s({high:{roughness:.32,thickness:2,attenuationDistance:1.2},lite:{opacity:.55,roughness:.3}}),inner:new yt({map:bp(t.core,n),roughness:.2,transparent:!0,opacity:.8}),innerGeo:"core"};break;case"opal":r={shell:new Cn({map:Tv(t.core,n),roughness:.25,clearcoat:1,clearcoatRoughness:.04,sheen:1,sheenColor:13166847,iridescence:Cc.lite?0:.6,envMapIntensity:1.2})};break;case"metal":r={shell:new Cn({color:t.tint,metalness:1,roughness:.12,clearcoat:.6,envMapIntensity:1.5})};break}return wh.set(e,r),r}function Ei(i,e=.5,t={}){let n=wv(),s=Av(i),r=new Pt,a=new Pt;if(r.add(a),s.inner){let l=new We(n[s.innerGeo],s.inner);a.add(l)}let o=new We(n.shell,s.shell);return o.castShadow=!t.noShadow,o.renderOrder=2,a.add(o),r.scale.setScalar(e),r.userData={spin:a,id:i,r:e},a.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6),r}var Ah=new L,Ep=new An;function Rh(i,e,t){let n=Math.hypot(e,t);n<1e-6||(Ah.set(t/n,0,-e/n),Ep.setFromAxisAngle(Ah,n/i.userData.r),i.userData.spin.quaternion.premultiply(Ep))}function Ap(i,e){i.userData.spin.rotateOnWorldAxis(Ah.set(0,0,1),-e/i.userData.r)}function Is(i=3,e="#9a6236",t="#6e3f1f",n=512,s=512,r){let a=ii(i);return hn(n,s,(o,l,c)=>{o.fillStyle=e,o.fillRect(0,0,l,c);for(let u=0;u<90;u++){let f=a()*c;o.strokeStyle=t,o.globalAlpha=.08+a()*.18,o.lineWidth=1+a()*3,o.beginPath(),o.moveTo(0,f);for(let d=0;d<=l;d+=16)o.lineTo(d,f+Math.sin(d/70+u)*4+(a()-.5)*2);o.stroke()}for(let u=0;u<4;u++){let f=a()*l,d=a()*c;o.globalAlpha=.25,o.fillStyle=t,o.beginPath(),o.ellipse(f,d,14+a()*10,5+a()*4,0,0,7),o.fill()}o.globalAlpha=1},{repeat:r})}function Ps(i=16777215,e=1){let t=hn(128,128,s=>{let r=s.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.25,"rgba(255,255,255,0.45)"),r.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=r,s.fillRect(0,0,128,128)}),n=new ua(new ur({map:t,color:i,blending:vr,depthWrite:!1,transparent:!0}));return n.scale.setScalar(e),n}var as=class{constructor(e,t=300){this.max=t,this.list=[];let n=new Rt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),n.setAttribute("position",new Zt(this.pos,3)),n.setAttribute("color",new Zt(this.col,3)),n.setAttribute("size",new Zt(this.size,1));let s=hn(64,64,a=>{let o=a.createRadialGradient(32,32,0,32,32,32);o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,64,64)}),r=new Sn({uniforms:{map:{value:s},scale:{value:300}},vertexShader:"attribute float size; attribute vec3 color; varying vec3 vC; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*scale/-mv.z; gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; void main(){ vec4 t=texture2D(map,gl_PointCoord); gl_FragColor=vec4(vC*t.a, t.a); }",transparent:!0,depthWrite:!1,blending:vr});this.mesh=new pa(n,r),this.mesh.frustumCulled=!1,this.mesh.renderOrder=5,e.add(this.mesh)}emit(e,t,n,s,r={}){let a=new Be(r.color??16777215);for(let o=0;o<s&&this.list.length<this.max;o++){let l=Math.random()*Math.PI*2,c=Math.random()*2-1,u=(r.speed??2)*(.3+Math.random()*.7),f=Math.sqrt(1-c*c);this.list.push({x:e,y:t,z:n,vx:Math.cos(l)*f*u,vy:Math.abs(c)*u*(r.up??1),vz:Math.sin(l)*f*u*(r.flatZ??1),life:(r.life??.6)*(.6+Math.random()*.6),age:0,size:(r.size??.3)*(.6+Math.random()*.8),g:r.gravity??3,r:a.r,gg:a.g,b:a.b,drag:r.drag??1.5})}}update(e){let t=this.list;for(let s=t.length-1;s>=0;s--){let r=t[s];if(r.age+=e,r.age>r.life){t[s]=t[t.length-1],t.pop();continue}let a=Math.exp(-r.drag*e);r.vx*=a,r.vz*=a,r.vy=r.vy*a-r.g*e,r.x+=r.vx*e,r.y+=r.vy*e,r.z+=r.vz*e}for(let s=0;s<this.max;s++){let r=t[s];if(!r){this.size[s]=0;continue}let a=1-r.age/r.life;this.pos[s*3]=r.x,this.pos[s*3+1]=r.y,this.pos[s*3+2]=r.z,this.col[s*3]=r.r*a,this.col[s*3+1]=r.gg*a,this.col[s*3+2]=r.b*a,this.size[s]=r.size}let n=this.mesh.geometry;n.attributes.position.needsUpdate=n.attributes.color.needsUpdate=n.attributes.size.needsUpdate=!0}setScale(e){this.mesh.material.uniforms.scale.value=e*.5}};function Bi(i,e,t,n){let s=is.degToRad(i.fov)/2,r=t/2/Math.tan(s),a=e/2/(Math.tan(s)*n);return Math.max(r,a)}var Wt=(i,e=document)=>e.querySelector(i);function Ln(i){let e=document.createElement("div");return e.innerHTML=i.trim(),e.firstElementChild}var Lc=i=>String(i).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Rp=0;function Ft(i,e=2400){let t=Wt("#toast");t.textContent=i,t.classList.add("on"),clearTimeout(Rp),Rp=setTimeout(()=>t.classList.remove("on"),e)}var Rv=[];function Kt(i,e=[],t={}){let n=Wt("#modal");n.innerHTML=`<div class="card ${t.wide?"wide":""}">${i}<div class="mbtns"></div></div>`;let s=n.querySelector(".mbtns");for(let[r,a,o]of e){let l=document.createElement("button");l.className="btn "+(a||""),l.innerHTML=r,l.onclick=c=>{c.stopPropagation(),Mt("tap"),(o?o(l):void 0)!==!1&&n.contains(l)&&!t.keep&&Gt()},s.appendChild(l)}return n.classList.add("on"),n.onclick=r=>{r.target===n&&t.dismiss!==!1&&(Gt(),t.onClose&&t.onClose())},Rv=[t.onClose],n.querySelector(".card")}function Gt(){let i=Wt("#modal");i.classList.remove("on"),i.innerHTML=""}var Dc=()=>Wt("#modal").classList.contains("on");function Ch(){Sh(vt.data.settings)}function to(i,e){let t=vt.data.settings,n=r=>r?k("A\xE7\u0131k"):k("Kapal\u0131");Kt(`<h2>${k("Ayarlar")}</h2>
    <div class="setgrid">
      <button class="btn tog" data-k="lang">\u{1F310} ${ni()==="tr"?"T\xFCrk\xE7e":"English"}</button>
      <button class="btn tog" data-k="sound">\u{1F50A} ${k("Ses")}: ${n(t.sound)}</button>
      <button class="btn tog" data-k="music">\u{1F3B5} ${k("M\xFCzik")}: ${n(t.music)}</button>
      <button class="btn tog" data-k="vib">\u{1F4F3} ${k("Titre\u015Fim")}: ${n(t.vib)}</button>
      <button class="btn tog" data-k="lite">\u26A1 ${k("Hafif g\xF6r\xFCnt\xFC")}: ${n(i.lite)}</button>
      <button class="btn tog" data-k="backup">\u{1F4BE} ${k("Kayd\u0131 yedekle / geri y\xFCkle")}</button>
      ${Rr?"":`<button class="btn tog" data-k="install">\u{1F4F2} ${k("Uygulama olarak y\xFCkle")}</button>`}
    </div>
    <p class="note">${k("Hafif g\xF6r\xFCnt\xFC eski ve yava\u015F telefonlarda oyunu ak\u0131c\u0131 yapar.")}</p>
    <p class="ver">Bilye At\xF6lyesi ${"v7"}</p>`,[[k("Tamam"),"pri",()=>e&&e()]],{onClose:e}).querySelectorAll("[data-k]").forEach(r=>r.onclick=()=>{Mt("toggle");let a=r.dataset.k;if(a==="lang")Cr(ni()==="tr"?"en":"tr"),t.lang=ni(),Ct(),i.relabel();else if(a==="lite"){t.lite=!i.lite,Ct(),Ft(k("De\u011Fi\u015Fiklik i\xE7in oyun yeniden a\xE7\u0131l\u0131yor\u2026")),setTimeout(()=>location.reload(),700);return}else if(a==="backup"){Iv(i,()=>to(i,e));return}else if(a==="install"){Pp(i,()=>to(i,e));return}else t[a]=!t[a],Ch();Jt(),to(i,e)})}async function Cv(i){try{return await navigator.clipboard.writeText(i),!0}catch{let t=document.createElement("textarea");t.value=i,document.body.appendChild(t),t.select();let n=!1;try{n=document.execCommand("copy")}catch{}return t.remove(),n}}function Iv(i,e){let t=Kt(`<h2>\u{1F4BE} ${k("Kay\u0131t yede\u011Fi")}</h2>
    <p class="lead">${k("\u0130lerlemen bu cihaz\u0131n taray\u0131c\u0131s\u0131nda saklan\u0131r. Taray\u0131c\u0131 verisi silinirse kay\u0131t da gider. Kay\u0131t kodunu bir yere not et; ba\u015Fka cihazda ya da y\xFCklenen uygulamada geri y\xFCkleyebilirsin.")}</p>
    <textarea id="bkCode" rows="3" placeholder="${k("Kay\u0131t kodunu buraya yap\u0131\u015Ft\u0131r")}"></textarea>`,[[k("Kayd\u0131m\u0131 kopyala"),"pri",()=>(Nc(),!1)],[k("Kayd\u0131 geri y\xFCkle"),"",()=>{let n=t.querySelector("#bkCode").value;if(!pp(n))return Ft(k("Kod ge\xE7ersiz. Tamam\u0131n\u0131 kopyalad\u0131\u011F\u0131ndan emin ol.")),Mt("no"),!1;Ft(k("Kay\u0131t geri y\xFCklendi!")),setTimeout(()=>location.reload(),600)}],[k("Geri"),"ghost",()=>e&&e()]],{onClose:e})}async function Nc(){let i=await Cv(fp());vt.data.backupAt=Date.now(),Ct(),Ft(i?k("Kay\u0131t kodu kopyaland\u0131. G\xFCvenli bir yere yap\u0131\u015Ft\u0131r."):k("Kopyalanamad\u0131; kodu elle se\xE7."))}var Pc=navigator.userAgent,so=/iPad|iPhone|iPod/.test(Pc)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Pv=/iPad/.test(Pc)||so&&!/iPhone|iPod/.test(Pc),Lv=/Android/i.test(Pc),Ip=so||Lv||matchMedia("(pointer: coarse)").matches,Uc=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,Dv=()=>Ip?Math.min(screen.width,screen.height)>=600?k("TABLET\u0130ME"):k("TELEFONUMA"):k("B\u0130LG\u0130SAYARIMA"),no=null;addEventListener("beforeinstallprompt",i=>{i.preventDefault(),no=i});addEventListener("appinstalled",()=>{vt.data.install="installed",Ct(),no=null,Ft(k("Bilye At\xF6lyesi y\xFCklendi! Ana ekran\u0131ndan a\xE7abilirsin."))});async function Pp(i,e){if(Uc()){Ft(k("Oyun zaten uygulama olarak a\xE7\u0131k")),e&&e();return}if(no){let t=no;no=null;try{t.prompt(),(await t.userChoice).outcome==="accepted"?(vt.data.install="installed",Ct(),Ft(k("Y\xFCkleniyor\u2026 ana ekran\u0131nda simge belirecek"))):Ft(k("Y\xFCkleme iptal edildi \xB7 Ayarlar \u2192 Uygulama olarak y\xFCkle"))}catch{}e&&e();return}kv(i,e)}var Ur=(i,e,t)=>`<div class="inStep"><b>${i}</b><span class="inIco">${e}</span><p>${t}</p></div>`,Nv='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#2f6fd0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>',Cp='<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',Uv='<svg viewBox="0 0 24 24" width="28" height="28" fill="#333"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>';function kv(i,e){let t;so?t=`<p class="lead">${k("iPhone ve iPad'de kurulum Safari'nin Ana Ekrana Ekle \xF6zelli\u011Fiyle yap\u0131l\u0131r:")}</p>`+Ur(1,Nv,Pv?k("Adres \xE7ubu\u011Funun sa\u011F\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas."):k("Ekran\u0131n alt\u0131ndaki Payla\u015F d\xFC\u011Fmesine bas."))+Ur(2,Cp,k("Men\xFCy\xFC yukar\u0131 kayd\u0131r, Ana Ekrana Ekle'ye bas."))+Ur(3,'<b class="inWord">'+k("Ekle")+"</b>",k("Sa\u011F \xFCstteki Ekle'ye bas. Oyun ana ekran\u0131nda belirir."))+`<p class="note">${k("Ana ekran uygulamas\u0131 taray\u0131c\u0131dan ayr\u0131 kay\u0131t tutar. \u0130lerlemen varsa \xF6nce Kayd\u0131m\u0131 kopyala, uygulamay\u0131 ilk a\xE7\u0131nca Ayarlar \u2192 Kayd\u0131 yedekle / geri y\xFCkle ile yap\u0131\u015Ft\u0131r.")}</p>`:t=`<p class="lead">${k("Taray\u0131c\u0131n kurulum penceresini \u015Fu an a\xE7mad\u0131. Elle y\xFCklemek kolay:")}</p>`+Ur(1,Uv,k("Taray\u0131c\u0131n\u0131n men\xFCs\xFCn\xFC (\u22EE) a\xE7."))+Ur(2,Cp,k("Uygulamay\u0131 y\xFCkle ya da Ana ekrana ekle'ye bas."))+Ur(3,'<b class="inWord">'+k("Y\xFCkle")+"</b>",k("Onayla. Oyun ana ekran\u0131nda ve uygulama listende belirir."))+`<p class="note">${k("Se\xE7enek yoksa oyunu Chrome, Edge ya da Samsung Internet ile a\xE7.")}</p>`,Kt(`<h2>\u{1F4F2} ${k("Uygulama olarak y\xFCkle")}</h2>${t}`,[...bc()?[[k("Kayd\u0131m\u0131 kopyala"),"",()=>(Nc(),!1)]]:[],[k("Tamam"),"pri",()=>e&&e()]],{onClose:e})}function Lp(){return!Rr&&!Uc()&&Ip&&!vt.data.install}function Ih(i,e){Kt(`<div class="logoBall"></div><h2 class="center">${k("Bilye At\xF6lyesi")}</h2>
    <p class="lead center">${k("Ana ekran\u0131na ekle: tek dokunu\u015Fla a\xE7, internetsiz de oyna.")}</p>`,[[`\u{1F4F2} ${k("OYUNU {cihaz} Y\xDCKLE",{cihaz:Dv()})}`,"pri",()=>{vt.data.install="asked",Jt(),Pp(i,e)}],[`\u{1F3AE} ${k("Y\xDCKLEMEDEN OYNA")}`,"",()=>{vt.data.install="skip",Jt(),e()}],[`\u{1F310} ${ni()==="tr"?"English":"T\xFCrk\xE7e"}`,"ghost",()=>{Cr(ni()==="tr"?"en":"tr"),vt.data.settings.lang=ni(),Jt(),i.relabel(),Ih(i,e)}]],{dismiss:!1})}var bt={ringR:5.4,yardR:9.4,slide:13,roll:1.5,drag:.1,rest:.93,wallRest:.4,bump:0,dt:.004166666666666667},Dp={dirt:{roll:1.7,bump:.55},asphalt:{roll:1,bump:.12},cobble:{roll:1.35,bump:.35}};function Np(i){let e=Dp[i]||Dp.dirt;bt.roll=e.roll,bt.bump=e.bump}function Fv(i,e){return Math.sin(i*1.7+e*.9)*Math.cos(e*1.3-i*.4)+.5*Math.sin(i*3.1-e*2.7)}function Ph(i,e,t){for(let s of i){if(s.off)continue;s.ux??(s.ux=s.vx),s.uz??(s.uz=s.vz);let r=s.vx-s.ux,a=s.vz-s.uz,o=Math.hypot(r,a);if(o>1e-4){let l=bt.slide*e;if(o<=l*3.5){let c=(5*s.vx+2*s.ux)/7,u=(5*s.vz+2*s.uz)/7;s.vx=s.ux=c,s.vz=s.uz=u}else{let c=r/o,u=a/o;s.vx-=c*l,s.vz-=u*l,s.ux+=c*l*2.5,s.uz+=u*l*2.5}}else{let l=Math.hypot(s.vx,s.vz);if(l>0){let c=Math.max(0,l-(bt.roll*s.fric+bt.drag*l)*e),u=c/l;if(s.vx*=u,s.vz*=u,bt.bump&&c>.2){let f=Fv(s.x,s.z)*bt.bump*e*Math.min(1,c/3),d=-s.vz/c,h=s.vx/c;s.vx+=d*f*c*.35,s.vz+=h*f*c*.35}s.ux=s.vx,s.uz=s.vz}}s.x+=s.vx*e,s.z+=s.vz*e}let n=i.length;for(let s=0;s<n;s++){let r=i[s];if(!r.off)for(let a=s+1;a<n;a++){let o=i[a];if(o.off)continue;let l=r.x-o.x,c=r.z-o.z,u=r.r+o.r,f=l*l+c*c;if(f>=u*u||f===0)continue;let d=Math.sqrt(f),h=l/d,g=c/d,v=u-d,m=1/r.m+1/o.m;r.x+=h*v*(1/r.m)/m,r.z+=g*v*(1/r.m)/m,o.x-=h*v*(1/o.m)/m,o.z-=g*v*(1/o.m)/m;let p=(r.vx-o.vx)*h+(r.vz-o.vz)*g;if(p>=0)continue;let T=-(1+bt.rest)*p/m;r.ux??(r.ux=r.vx),r.uz??(r.uz=r.vz),o.ux??(o.ux=o.vx),o.uz??(o.uz=o.vz),r.vx+=T/r.m*h,r.vz+=T/r.m*g,o.vx-=T/o.m*h,o.vz-=T/o.m*g,t&&t.push({a:s,b:a,j:T})}}for(let s of i){if(s.off)continue;let r=Math.hypot(s.x,s.z),a=bt.yardR-s.r;if(r>a){let o=s.x/r,l=s.z/r,c=s.vx*o+s.vz*l;s.x=o*a,s.z=l*a,c>0&&(s.vx-=(1+bt.wallRest)*c*o,s.vz-=(1+bt.wallRest)*c*l,s.ux=s.vx*.5,s.uz=s.vz*.5,t&&t.push({a:i.indexOf(s),b:-1,j:c*s.m}))}}}var Lh=i=>i.every(e=>e.off||Math.hypot(e.vx,e.vz)<.03&&Math.hypot((e.ux??0)-e.vx,(e.uz??0)-e.vz)<.05),kr=i=>Math.hypot(i.x,i.z)<bt.ringR;function Dh(i,e,t){i.vx=e,i.vz=t,i.ux=e*.25,i.uz=t*.25}function Up(i,e=9){let t=i.map(s=>({...s})),n=0;for(;n<e&&(Ph(t,bt.dt),!(n>.1&&Lh(t)));n+=bt.dt);return t}var Nh={toprak:{name:"Toprak Avlu",ground:"dirt",curb:"brick"},asfalt:{name:"Arka Sokak",ground:"asphalt",curb:"concrete"},parke:{name:"\xC7ar\u015F\u0131 Meydan\u0131",ground:"cobble",curb:"stone"}},Ti=[{id:"ayse",name:"Ay\u015Fe",ground:"toprak",targets:7,noise:9,pick:4,color:"#ff7aa8",prize:"gul",line:"Yeni misin? Kolay gelsin!"},{id:"mert",name:"Mert",ground:"toprak",targets:9,noise:6.5,pick:3,color:"#4fb3ff",prize:"okyanus",line:"Benim bilyelerim hep uza\u011Fa gider."},{id:"deniz",name:"Deniz",ground:"asfalt",targets:9,noise:5,pick:3,color:"#3ed6a0",prize:"opal",line:"Asfaltta bilye h\u0131zl\u0131 kayar, dikkat et."},{id:"kerem",name:"Kerem",ground:"asfalt",targets:11,noise:3.6,pick:2,color:"#ffb340",prize:"celik",line:"\xC7elik bilyemle herkesi da\u011F\u0131t\u0131r\u0131m."},{id:"elif",name:"Elif",ground:"parke",targets:11,noise:2.6,pick:2,color:"#b48cff",prize:"galaksi",line:"Ni\u015Fan almak bir sanatt\u0131r."},{id:"bora",name:"Bora",ground:"parke",targets:13,noise:1.6,pick:1,color:"#ffd23a",prize:"altin",line:"Mahallenin \u015Fampiyonu benim. Hadi bakal\u0131m!"}],ro=["kirmizi","mavi","yesil","sari","mor","turuncu","gece","okyanus","gul"];var kc=.5,kp=new L,Fc=new L,Uh=new L,Bv=new L(0,1,0),Ov=new pt,Fp=17;function zv(i){let e=ii(i.length*17+3);return hn(1024,1024,(t,n,s)=>{if(i==="dirt"){t.fillStyle="#6e4f33",t.fillRect(0,0,n,s);for(let r=0;r<9e3;r++){let a=e();t.fillStyle=`rgba(${70+a*70|0},${48+a*50|0},${28+a*34|0},${.25+e()*.35})`;let o=1+e()*5;t.fillRect(e()*n,e()*s,o,o)}for(let r=0;r<260;r++){let a=e()*n,o=e()*s,l=2+e()*6,c=e();t.fillStyle=`rgba(${120+c*50|0},${105+c*45|0},${88+c*40|0},0.95)`,t.beginPath(),t.ellipse(a,o,l,l*(.6+e()*.4),e()*3,0,7),t.fill(),t.fillStyle="rgba(40,25,10,0.35)",t.beginPath(),t.ellipse(a+1.5,o+2,l,l*.5,0,0,7),t.fill()}t.strokeStyle="rgba(60,40,20,0.25)";for(let r=0;r<30;r++){t.lineWidth=1+e()*2,t.beginPath();let a=e()*n,o=e()*s;t.moveTo(a,o);for(let l=0;l<5;l++)a+=(e()-.5)*60,o+=(e()-.5)*60,t.lineTo(a,o);t.stroke()}}else if(i==="asphalt"){t.fillStyle="#4a4c50",t.fillRect(0,0,n,s);for(let r=0;r<3e4;r++){let a=e();t.fillStyle=`rgba(${50+a*90|0},${52+a*90|0},${56+a*90|0},0.5)`,t.fillRect(e()*n,e()*s,1.5,1.5)}t.strokeStyle="rgba(20,20,22,0.5)";for(let r=0;r<12;r++){t.lineWidth=1.5,t.beginPath();let a=e()*n,o=e()*s;t.moveTo(a,o);for(let l=0;l<8;l++)a+=(e()-.5)*50,o+=(e()-.5)*50,t.lineTo(a,o);t.stroke()}for(let r=0;r<5;r++)t.fillStyle="rgba(30,30,35,0.25)",t.beginPath(),t.ellipse(e()*n,e()*s,40+e()*80,20+e()*50,e()*3,0,7),t.fill()}else{t.fillStyle="#3a332d",t.fillRect(0,0,n,s);let r=22,a=n/r;for(let o=0;o<r;o++)for(let l=0;l<r;l++){let c=o%2*a/2,u=l*a+c+a/2,f=o*a+a/2,d=e();t.fillStyle=`rgb(${78+d*40|0},${72+d*36|0},${66+d*32|0})`;let h=(e()-.5)*3,g=t.fillStyle;for(let v of[0,-n,n]){t.fillStyle=g,t.beginPath(),t.roundRect(u+v-a*.45+h,f-a*.43,a*.9,a*.86,a*.22),t.fill();let m=t.createRadialGradient(u+v-a*.15,f-a*.15,0,u+v,f,a*.55);m.addColorStop(0,"rgba(255,255,255,0.18)"),m.addColorStop(1,"rgba(0,0,0,0.18)"),t.fillStyle=m,t.fill()}}}},{repeat:i==="cobble"?[4,4]:[2,2]})}function Hv(){let i=ii(91);return hn(1024,64,(e,t,n)=>{e.clearRect(0,0,t,n);for(let s=0;s<9e3;s++){let r=n/2+(i()-.5)*n*.7*i();e.fillStyle=`rgba(255,255,250,${.45+i()*.55})`,e.fillRect(i()*t,r,1+i()*3,1+i()*2)}})}function kh(i){let e=new Un,t=new Bt(36,1,.1,200),n=Ir("misket");n.coins??(n.coins=0),n.wins??(n.wins={}),n.owned??(n.owned=["mavi"]),n.shooter??(n.shooter="mavi"),e.background=new Be(2827296),e.fog=new aa(2827296,28,60),e.add(new Kn(16773853,4864554,.5));let s=new vi(16769720,2);s.position.set(-8,16,6),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-11,right:11,top:11,bottom:-11,near:1,far:50}),s.shadow.bias=-4e-4,s.shadow.radius=3,e.add(s);let r=new vi(10470655,.6);r.position.set(10,6,-12),e.add(r);let a={},o=new We(new Di(40,64),new yt({roughness:.95}));o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o);let l=new We(new xs(bt.ringR-.13,bt.ringR+.13,160,1),new jt({map:Hv(),transparent:!0,depthWrite:!1,opacity:1}));{let N=l.geometry.attributes.uv,z=l.geometry.attributes.position;for(let W=0;W<N.count;W++){let G=Math.atan2(z.getY(W),z.getX(W)),K=Math.hypot(z.getX(W),z.getY(W));N.setXY(W,(G/Math.PI+1)*6,K>bt.ringR?1:0)}}l.material.map.wrapS=$i,l.rotation.x=-Math.PI/2,l.position.y=.012,e.add(l);let c=new Pt;e.add(c);function u(N){c.clear();let z=64,W=bt.yardR+.45,G=new cn(1.25,.7,.8),K=N==="brick"?10504239:N==="concrete"?10132118:8221800,se=new yt({color:K,roughness:.9}),fe=new gi(G,se,z),D=new pt,xe=new An,oe=new Be,ve=ii(5);for(let _e=0;_e<z;_e++){let he=_e/z*Math.PI*2;xe.setFromAxisAngle(new L(0,1,0),-he+Math.PI/2),D.compose(new L(Math.cos(he)*W,.3,Math.sin(he)*W),xe,new L(1,.9+ve()*.2,1)),fe.setMatrixAt(_e,D),fe.setColorAt(_e,oe.set(K).multiplyScalar(.85+ve()*.3))}fe.castShadow=fe.receiveShadow=!0,c.add(fe)}let f=new as(e,260),d=new Pt;e.add(d);let h=new yi(.07,8,6),g=new jt({color:16777215,transparent:!0,opacity:.85}),v=new gi(h,g,60);v.count=0,d.add(v);let m=new We(new xs(.42,.5,40),new jt({color:16777215,transparent:!0,opacity:.6,side:qt}));m.rotation.x=-Math.PI/2,d.add(m);let p=new We(new xi(.08,1),new jt({color:16765498,transparent:!0,opacity:.8,side:qt}));d.add(p);let T=new We(new ya(.28,.6,16),new jt({color:8191882}));d.add(T);let I=Ps(16773544,2.2);I.visible=!1,e.add(I);let M=new We(new xs(bt.ringR+.15,bt.ringR+1.05,160,1),new jt({color:16774344,transparent:!0,opacity:.12,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.y=.01,e.add(M);let _=null,E=[],P="idle",y=null,R=null,U=0,V=1,$=0,Q=0,O=null,J=[],le=!1,re=[],me=Ln('<div class="mhud"></div>'),ae=new L,de=new L(0,0,.6),B=0,we=()=>Ti.find(N=>N.id===_.opp),Re=N=>Cs[N]||Cs.mavi;function st(N){Gt();let z=Ti.find(fe=>fe.id===N),W=ii(Date.now()&65535),G=[],K=z.targets,se=[[0,0]];for(let fe=1;se.length<K;fe++)for(let D=0;D<4&&se.length<K;D++){let xe=D*Math.PI/2+(fe%2?0:Math.PI/4),oe=fe*1.15+(fe%2?0:.4);se.push([Math.cos(xe)*oe,Math.sin(xe)*oe])}se.forEach(([fe,D],xe)=>G.push({kind:"target",id:ro[Math.floor(W()*ro.length)],x:fe+(W()-.5)*.12,z:D+(W()-.5)*.12,vx:0,vz:0,r:kc,m:1,fric:1})),_={opp:N,bodies:G,cap:{p:0,a:0},capIds:{p:[],a:[]},turn:"p",phase:"place",lineAng:Math.PI/2,aiShooter:z.prize==="altin"?"altin":z.id==="kerem"?"celik":"mavi",shots:0},Ze(),Ee()}function Ze(){var z;for(let W of E)e.remove(W);E=[];let N=Nh[we().ground];a[z=N.ground]??(a[z]=zv(N.ground)),o.material.map=a[N.ground],o.material.needsUpdate=!0,o.material.roughness=N.ground==="asphalt"?.8:.95,o.material.color.setHex(N.ground==="cobble"?9209472:N.ground==="asphalt"?12632256:16777215),u(N.curb),Np(N.ground),e.background.set(N.ground==="asphalt"?2303531:N.ground==="cobble"?2762274:2827296),e.fog.color.copy(e.background);for(let W of _.bodies)ze(W)}function ze(N){let z=Ei(N.id,N.r);return z.position.set(N.x,N.r,N.z),e.add(z),E.push(z),z}function j(){return _.bodies.findIndex(N=>N.kind==="shooter")}function ce(){let N=j();N>=0&&(e.remove(E[N]),E.splice(N,1),_.bodies.splice(N,1))}function Ee(){let N=_.turn,z=N==="p"?n.shooter:_.aiShooter,W=Re(z),G=j();if(_.phase==="place"||G<0){ce();let K=N==="p"?_.lineAng:_.aiLine??-Math.PI/2,se={kind:"shooter",owner:N,id:z,x:Math.cos(K)*(bt.ringR+.6),z:Math.sin(K)*(bt.ringR+.6),vx:0,vz:0,r:kc,m:W.mass,fric:W.fric};_.bodies.push(se),ze(se),_.phase="place"}P=N==="p"?_.phase:"ai",Ye(),w(),N==="a"?Me():n.tut||C()}function Ye(){!_||_.demo||_.done||(n.match=JSON.parse(JSON.stringify({opp:_.opp,bodies:_.bodies.filter(N=>!N.off),cap:_.cap,capIds:_.capIds,turn:_.turn,phase:_.phase,lineAng:_.lineAng,aiShooter:_.aiShooter,aiLine:_.aiLine,shots:_.shots})),n.match.bodies.forEach(N=>{N.vx=N.vz=N.ux=N.uz=0}),Jt())}function Ie(N){_.lineAng=N;let z=_.bodies[j()];z.x=Math.cos(N)*(bt.ringR+.6),z.z=Math.sin(N)*(bt.ringR+.6)}function qe(N,z){let W=_.bodies[j()],G=Re(W.id),K=(3+z*9)*G.guide,se=null;_.bodies.forEach((oe,ve)=>{if(oe===W||oe.off)return;let _e=W.x-oe.x,he=W.z-oe.z,Pe=W.r+oe.r,Ce=_e*N.x+he*N.z,it=_e*_e+he*he-Pe*Pe,Ke=Ce*Ce-it;if(Ke<0)return;let Vt=-Ce-Math.sqrt(Ke);Vt>0&&Vt<K&&(!se||Vt<se.t)&&(se={t:Vt,i:ve})});let fe=se?se.t:K,D=new pt,xe=0;for(let oe=.6;oe<fe&&xe<60;oe+=.45,xe++)D.makeTranslation(W.x+N.x*oe,.08,W.z+N.z*oe),v.setMatrixAt(xe,D);if(v.count=xe,v.instanceMatrix.needsUpdate=!0,m.visible=!!se,p.visible=!1,se){let oe=W.x+N.x*se.t,ve=W.z+N.z*se.t;if(m.position.set(oe,.03,ve),G.aimHit){let _e=_.bodies[se.i],he=_e.x-oe,Pe=_e.z-ve,Ce=Math.hypot(he,Pe),it=2.5+z*4;p.visible=!0,p.scale.y=it,p.position.set(_e.x+he/Ce*it/2,.04,_e.z+Pe/Ce*it/2),Fc.set(he/Ce,0,Pe/Ce),Uh.set(0,1,0),kp.crossVectors(Fc,Uh),p.quaternion.setFromRotationMatrix(Ov.makeBasis(kp,Fc,Uh))}}T.position.set(W.x-N.x*(.9+z*1.6),.25,W.z-N.z*(.9+z*1.6)),T.quaternion.setFromUnitVectors(Bv,Fc.set(N.x,0,N.z)),T.material.color.setHSL(.33-z*.33,.9,.55),T.scale.setScalar(.7+z*.8),d.visible=!0}function Qe(N,z,W){let G=_.bodies[j()],K=Re(G.id),se=Fp*K.power*(.12+.88*z);Dh(G,N.x*se,N.z*se),P="roll",d.visible=!1,I.visible=!1,le=!1,_.shots++,Rs(.4+z*.6),Fi(12),Wt(".mhint",me)&&(Wt(".mhint",me).style.opacity=0),M.visible=!1,w()}function pe(){let N=_.turn,z=_.bodies[j()],W=0;for(let se=0;se<_.bodies.length;se++){let fe=_.bodies[se];fe.kind!=="target"||fe.off||kr(fe)||(fe.off=!0,W++,_.cap[N]++,_.capIds[N].push(fe.id),re.push({m:E[se],t:0,from:E[se].position.clone(),who:N}))}let G=we().targets,K=Math.floor(G/2)+1;if(W&&(Wn(Math.min(6,W+1)),N==="p"&&Ft(W>1?k("Harika! {n} bilye birden!",{n:W}):k("G\xFCzel at\u0131\u015F!"),1200)),_.cap.p>=K||_.cap.a>=K||_.cap.p+_.cap.a>=G){_.done=!0,n.match=null,Ct(),setTimeout(()=>ye(_.cap.p>_.cap.a),900),P="over",w();return}W?(_.phase=z&&kr(z)?"knuckle":"place",_.phase==="place"&&ce()):(ce(),_.turn=N==="p"?"a":"p",_.phase="place",N==="p"&&Ft(k("Iskalad\u0131n, s\u0131ra {ad} da.",{ad:we().name}),1400));for(let se=_.bodies.length-1;se>=0;se--)_.bodies[se].off&&(_.bodies.splice(se,1),E.splice(se,1));setTimeout(Ee,W?650:900),P="wait"}function ye(N){let z=we(),W=N&&!n.wins[z.id],G=_.cap.p;n.coins+=G,N&&(n.wins[z.id]=(n.wins[z.id]||0)+1,W&&!n.owned.includes(z.prize)&&Cs[z.prize]&&n.owned.push(z.prize),n.coll??(n.coll=[]),W&&!n.coll.includes(z.prize)&&n.coll.push(z.prize)),Ct(),N?rs():Dr(),N&&f.emit(0,1,0,120,{color:16765498,speed:9,life:1.4,size:.5,up:2,gravity:6});let K=W?`<div class="prize"><div class="ball" style="${S(z.prize)}"></div><p>${k("\xD6d\xFCl: {ad}",{ad:k(Pn[z.prize].name)})}${Cs[z.prize]?" \xB7 "+k("At\u0131c\u0131 olarak kullanabilirsin!"):""}</p></div>`:"";Kt(`<h2>${N?"\u{1F3C6} "+k("Kazand\u0131n!"):k("{ad} kazand\u0131",{ad:z.name})}</h2>
      <p class="lead center">${k("Skor")}: <b>${_.cap.p}</b> \u2013 <b>${_.cap.a}</b></p>
      <p class="center">+${G} ${k("misket")} \xB7 ${k("Toplam")}: ${Vn(n.coins)}</p>${K}`,[[k("Tekrar oyna"),"pri",()=>st(z.id)],[k("Rakipler"),"",()=>q()]],{dismiss:!1}),w()}function be(){return(Math.random()+Math.random()+Math.random()-1.5)/.5}function Me(){let N=we(),z=_.bodies[j()],W=Re(z.id),G=[],K=_.bodies.filter(fe=>fe.kind==="target"&&!fe.off),se=_.phase==="place"?[...new Set([0,1,2,3,4,5].map(fe=>fe/6*Math.PI*2).concat(K.slice(0,4).map(fe=>Math.atan2(fe.z,fe.x))))]:[null];for(let fe of se){let D=fe===null?z.x:Math.cos(fe)*(bt.ringR+.6),xe=fe===null?z.z:Math.sin(fe)*(bt.ringR+.6),oe=[...K].sort((ve,_e)=>Math.hypot(ve.x-D,ve.z-xe)-Math.hypot(_e.x-D,_e.z-xe)).slice(0,fe===null?6:3);for(let ve of oe)for(let _e of[-.45,0,.45])for(let he of[.6,.85,1])G.push({la:fe,px:D,pz:xe,tb:ve,off:_e,pw:he})}O={cands:G,i:0,results:[],t:0,base:_.bodies.map(fe=>({...fe})),si:j(),st:W},P="ai",w()}function Se(N){let z=O;z.t+=N;let W=performance.now();for(;z.i<z.cands.length&&performance.now()-W<7;){let G=z.cands[z.i++],K=z.base.map(Dt=>({...Dt})),se=K[z.si];se.x=G.px,se.z=G.pz;let fe=G.tb.x-G.px,D=G.tb.z-G.pz,xe=Math.hypot(fe,D);fe/=xe,D/=xe;let oe=G.tb.x-D*G.off,ve=G.tb.z+fe*G.off,_e=oe-G.px,he=ve-G.pz,Pe=Math.hypot(_e,he);_e/=Pe,he/=Pe;let Ce=Fp*z.st.power*(.12+.88*G.pw);Dh(se,_e*Ce,he*Ce);let it=Up(K,7),Ke=0;it.forEach((Dt,wn)=>{Dt.kind==="target"&&!kr(Dt)&&kr(z.base[wn])?Ke+=10:Dt.kind==="target"&&(Ke+=Math.hypot(Dt.x,Dt.z)*.15)});let Vt=it[z.si];Ke>=10&&kr(Vt)&&(Ke+=3),z.results.push({score:Ke+Math.random()*.5,c:G,ax:_e,az:he,pw:G.pw})}if(z.i>=z.cands.length&&z.t>.9){let G=we();z.results.sort((ve,_e)=>_e.score-ve.score);let K=z.results[Math.floor(Math.random()*Math.min(G.pick,z.results.length))];if(O=null,K.c.la!==null){_.aiLine=K.c.la;let ve=_.bodies[j()];ve.x=K.c.px,ve.z=K.c.pz}let se=Math.atan2(K.az,K.ax)+is.degToRad(be()*G.noise),fe=Math.min(1,Math.max(.3,K.pw*(1+be()*G.noise*.012))),D={x:Math.cos(se),z:Math.sin(se)};P="aiAim";let xe=0,oe=()=>{P==="aiAim"&&(xe++,qe(D,fe*Math.min(1,xe/20)),xe<34?requestAnimationFrame(oe):Qe(D,fe,"a"))};oe()}}function Oe(N){if(B+=N,O&&Se(N),$>0?($-=N,V=.35):V=Math.min(1,V+N*3),P==="roll"){U+=N*V;let W=0;for(J.length=0;U>=bt.dt;)U-=bt.dt,Ph(_.bodies,bt.dt,J);_.bodies.forEach((G,K)=>{let se=E[K];se&&(Rh(se,(G.ux??0)*N*V,(G.uz??0)*N*V),se.position.set(G.x,G.r,G.z),W=Math.max(W,Math.hypot(G.vx,G.vz)))});for(let G of J){let K=Math.min(1,Math.abs(G.j)/10);if(G.b<0){As(K,"dirt");continue}let se=_.bodies[G.a],fe=_.bodies[G.b];if(Sc(K,1/Math.sqrt(Math.max(se.m,fe.m))),K>.15){let D=(se.x+fe.x)/2,xe=(se.z+fe.z)/2;f.emit(D,.4,xe,6+K*10|0,{color:se.id==="lav"||fe.id==="lav"?16742944:16774880,speed:2+K*4,size:.25,life:.4})}!le&&(se.kind==="shooter"||fe.kind==="shooter")&&K>.35&&(le=!0,$=.22,Q=.18*K,Fi(20))}En(W/16),Lh(_.bodies)&&(_.bodies.forEach(G=>{G.vx=G.vz=G.ux=G.uz=0}),En(0),pe())}for(let W=re.length-1;W>=0;W--){let G=re[W];G.t+=N;let K=Math.min(1,G.t/.7),se=K*K*(3-2*K);G.m.position.set(G.from.x*(1-se),G.from.y+Math.sin(K*Math.PI)*3+se*4,G.from.z*(1-se)+(G.who==="p"?9:-9)*se),G.m.scale.setScalar(kc*(1-se*.9)),K>=1&&(e.remove(G.m),re.splice(W,1),f.emit(G.m.position.x,G.m.position.y,G.m.position.z,10,{color:16769674,speed:3,size:.3}))}let z=_&&j();if(_&&z>=0&&(P==="place"||P==="knuckle")){let W=_.bodies[z];I.visible=!0,I.position.set(W.x,.15,W.z),I.scale.setScalar(2+Math.sin(B*4)*.25),M.visible=P==="place",M.material.opacity=.08+Math.sin(B*4)*.05}else I.visible=!1;if(P!=="place"&&(M.visible=!1),f.update(N),t.position.copy(ae),P==="idle"||P==="lobby"){let W=B*.08;t.position.set(Math.sin(W)*ae.length()*.8,ae.y*.9,Math.cos(W)*ae.length()*.8)}Q>0&&(Q=Math.max(0,Q-N),t.position.x+=(Math.random()-.5)*Q,t.position.z+=(Math.random()-.5)*Q),t.lookAt(de)}function Xe(N,z){t.aspect=N/z,t.updateProjectionMatrix();let W=(bt.ringR+1.1)*2,G=is.degToRad(62),K=Bi(t,W,W*Math.sin(G)+3.5,t.aspect);ae.set(0,Math.sin(G)*K,Math.cos(G)*K),e.fog.near=K*1.05,e.fog.far=K*2.4,f.setScale(z)}let He=new on(new L(0,1,0),0),et=new L;function F(N,z){return i.ray(t,N,z).ray.intersectPlane(He,et)?et.clone():null}function ot(N){if(!_||_.turn!=="p"||P!=="place"&&P!=="knuckle")return;let z=F(N.x,N.y);if(!z)return;let W=_.bodies[j()];Math.hypot(z.x-W.x,z.z-W.z)<2.2?(y={kind:"aim",sx:N.x,sy:N.y},Mt("pick")):P==="place"&&Math.abs(Math.hypot(z.x,z.z)-bt.ringR)<2.4&&(y={kind:"line"},Ie(Math.atan2(z.z,z.x)),Je())}function Je(){let N=j(),z=_.bodies[N];Rh(E[N],z.x-E[N].position.x,z.z-E[N].position.z),E[N].position.set(z.x,z.r,z.z)}function A(N){if(!y)return;let z=F(N.x,N.y);if(!z)return;let W=_.bodies[j()];if(y.kind==="line"){Ie(Math.atan2(z.z,z.x)),Je();return}let G=W.x-z.x,K=W.z-z.z,se=Math.hypot(G,K);if(se<.3){R=null,d.visible=!1;return}let fe=Math.min(1,Math.max(0,(se-.4)/5.5));R={dir:{x:G/se,z:K/se},power:fe},qe(R.dir,fe)}function x(){if(!y)return;let N=y;y=null,N.kind==="aim"?(R&&R.power>.05&&(Qe(R.dir,R.power,"p"),n.tut=!0,Jt()),d.visible=!1,R=null):Ye()}function S(N){let z=Pn[N]||Pn.mavi,W=new Be(z.core?z.core[0]:z.tint).getStyle(),G=new Be(z.core?z.core[1]??z.core[0]:z.tint).getStyle();return`--c1:${W};--c2:${G}`}function w(){if(!_){me.innerHTML="";return}let N=we(),z=Math.floor(N.targets/2)+1,W=P==="over"?k("Ma\xE7 bitti"):_.turn==="p"?P==="roll"?k("Bilyeler yuvarlan\u0131yor\u2026"):k("Senin s\u0131ran"):k("{ad} ni\u015Fan al\u0131yor\u2026",{ad:N.name});me.innerHTML=`<div class="score">
        <div class="side me"><b>${k("Sen")}</b><span class="n">${_.cap.p}</span></div>
        <div class="mid"><small>${k("{n} bilyeyi alan kazan\u0131r",{n:z})}</small><div class="turn ${_.turn}">${W}</div></div>
        <div class="side op"><span class="n">${_.cap.a}</span><b style="color:${N.color}">${Lc(N.name)}</b></div>
      </div>
      <div class="mhint" style="opacity:${_.turn==="p"&&(P==="place"||P==="knuckle")?1:0}">${P==="place"?k("\xC7izgide kayd\u0131rarak yer se\xE7 \xB7 Bilyeni geri \xE7ek, b\u0131rak!"):k("Bilyen halkada kald\u0131: oradan tekrar at!")}</div>`}function C(){if(Wt(".tut",me))return;let N=Ln(`<div class="tut"><div class="hand">\u{1F446}</div><p>${k("At\u0131c\u0131 bilyene dokun, parma\u011F\u0131n\u0131 geri \xE7ek ve b\u0131rak. Ne kadar \xE7ekersen o kadar g\xFC\xE7l\xFC atar.")}</p></div>`);me.appendChild(N),setTimeout(()=>N.remove(),6500)}function q(){P="lobby",Gt(),_||(_={opp:"ayse",bodies:[],cap:{p:0,a:0},demo:!0},Y());let N=Ti.map((G,K)=>{let se=K===0||n.wins[Ti[K-1].id],fe=n.wins[G.id]||0;return`<button class="opp ${se?"":"locked"}" data-o="${G.id}" ${se?"":"disabled"}>
        <span class="av" style="background:${G.color}">${Lc(G.name[0])}</span>
        <span class="oi"><b>${Lc(G.name)}</b><small>${k(Nh[G.ground].name)} \xB7 ${k("{n} bilye",{n:G.targets})}</small>
        <em>${se?fe?k("{n} galibiyet",{n:fe}):"\u201C"+k(G.line)+"\u201D":k("{ad} yenilince a\xE7\u0131l\u0131r",{ad:Ti[K-1].name})}</em></span>
        <span class="pz"><span class="ball" style="${S(G.prize)}"></span>${fe?"\u2713":""}</span></button>`}).join(""),z=Kt(`<h2>\u{1F3AF} ${k("Mahalle Misketi")}</h2>
      <p class="lead center">${k("Halkadaki bilyelerin yar\u0131s\u0131ndan fazlas\u0131n\u0131 d\u0131\u015Far\u0131 \xE7\u0131karan kazan\u0131r.")}</p>
      <div class="coins">${k("Misketlerin")}: <b>${Vn(n.coins)}</b> \xB7 ${k("At\u0131c\u0131n")}: <b>${k(Pn[n.shooter].name)}</b></div>
      ${n.match?`<button class="btn pri wide" data-k="resume">\u25B6 ${k("Ma\xE7a devam et ({ad})",{ad:Ti.find(G=>G.id===n.match.opp).name})}</button>`:""}
      <div class="opps">${N}</div>`,[[`\u{1F6D2} ${k("At\u0131c\u0131 bilyeler")}`,"",()=>Z()],[`\u2302 ${k("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});z.querySelectorAll("[data-o]").forEach(G=>G.onclick=()=>{Mt("tap");let K=G.dataset.o;if(!n.match)return Gt(),st(K);Kt(`<h2>${k("Yar\u0131m kalan ma\xE7")}</h2><p class="lead center">${k("Yeni ma\xE7a ba\u015Flarsan yar\u0131m kalan ma\xE7 silinir.")}</p>`,[[k("Yeni ma\xE7a ba\u015Fla"),"pri",()=>st(K)],[k("Vazge\xE7"),"",()=>q()]],{dismiss:!1})});let W=z.querySelector("[data-k=resume]");W&&(W.onclick=()=>{Mt("tap"),Gt(),ne()})}function Z(){let N=Object.entries(Cs).map(([W,G])=>{let K=n.owned.includes(W),se=n.shooter===W,fe=Ti.find(xe=>xe.prize===W),D=!K&&W!=="altin";return`<div class="shopItem ${se?"sel":""}"><span class="ball big" style="${S(W)}"></span>
        <div><b>${k(Pn[W].name)}</b><small>${k(G.note)}</small>
        <small class="stats">${k("A\u011F\u0131rl\u0131k")} ${"\u25CF".repeat(Math.round(G.mass*2))} \xB7 ${k("G\xFC\xE7")} ${"\u25CF".repeat(Math.round(G.power*4-2))}</small></div>
        ${K?`<button class="btn ${se?"pri":""}" data-use="${W}">${se?k("Se\xE7ili"):k("Se\xE7")}</button>`:D?`<button class="btn" data-buy="${W}" ${n.coins>=G.price?"":"disabled"}>${Vn(G.price)} ${k("misket")}</button>`:`<small class="lockTxt">${fe?k("{ad} yenilince",{ad:fe.name}):""}</small>`}</div>`}).join(""),z=Kt(`<h2>\u{1F6D2} ${k("At\u0131c\u0131 bilyeler")}</h2><p class="center">${k("Misketlerin")}: <b>${Vn(n.coins)}</b></p><div class="shop">${N}</div>
      <p class="note">${k("Ma\xE7larda kazand\u0131\u011F\u0131n her bilye bir misket eder. Rakiplerini yenerek \xF6zel bilyeler de kazan\u0131rs\u0131n.")}</p>`,[[k("Geri"),"",()=>q()]],{wide:!0,dismiss:!1});z.querySelectorAll("[data-use]").forEach(W=>W.onclick=()=>{n.shooter=W.dataset.use,Jt(),Mt("toggle"),Z()}),z.querySelectorAll("[data-buy]").forEach(W=>W.onclick=()=>{let G=W.dataset.buy,K=Cs[G].price;n.coins<K||(n.coins-=K,n.owned.push(G),n.shooter=G,Ct(),Wn(4),Ft(k("{ad} senin!",{ad:k(Pn[G].name)})),Z())})}function Y(){let N=ii(4);_.bodies=[];for(let z=0;z<9;z++){let W=z/9*Math.PI*2,G=z===0?0:1.2+z%3*1.1;_.bodies.push({kind:"target",id:ro[z%ro.length],x:Math.cos(W)*G,z:Math.sin(W)*G,vx:0,vz:0,r:kc,m:1,fric:1})}Ze()}function ne(){_=JSON.parse(JSON.stringify(n.match)),Ze(),Ee()}return{id:"misket",scene:e,camera:t,hud:me,enter(){i.hud.appendChild(me),_=null,q()},exit(){me.remove(),En(0),O=null,P="idle",Gt(),Ct()},update:Oe,resize:Xe,down:ot,move:A,up:x,pause(){Ct()},menu(){q()},relabel(){w(),P==="lobby"&&q()},debug:()=>({phase:P,M:_,S:n}),_test:{newMatch:st,shoot:(N,z,W)=>Qe({x:N,z},W,"p"),screen(N="shooter"){let z=N==="shooter"?j():_.bodies.findIndex(G=>G.kind==="target"),W=E[z].position.clone().project(t);return{x:(W.x+1)/2*i.w,y:(1-W.y)/2*i.h}}}}}var Fh=["kirmizi","mavi","yesil","sari","mor","turuncu"];function Bp(i){if(i===0)return Op(0);let e=Math.min(6,3+Math.floor((i-1)/5));return{n:i,jars:e,speed:1.5+.06*(i-1),interval:Math.max(.9,2.3-.05*(i-1)),goal:Math.round(12+i*1.2),rainbow:i>=4?.06:0,lava:i>=7?Math.min(.12,.06+(i-7)*.003):0,ice:i>=10?.05:0,shuffle:i>=14?Math.max(9,16-Math.floor((i-14)/3)):0}}function Op(i){let e=Math.min(1,i/160);return{n:0,jars:6,speed:2+e*2.2,interval:Math.max(.7,1.6-e*.9),goal:1/0,rainbow:.06,lava:.1,ice:.05,shuffle:14}}function Gv(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Bh(i,e=Math.random()*1e9|0){let t=Bp(i);return{n:i,seed:e,drawn:0,t:0,spawnT:.6,slowT:0,rail:[],jars:Fh.slice(0,t.jars).map(n=>({color:n,count:0,ship:0})),pos:Fh.slice(0,t.jars).map((n,s)=>s),gates:Fh.slice(0,t.jars).map(()=>!1),sorted:0,mistakes:0,score:0,combo:0,best:0,uid:1,sinceShuffle:0,over:null}}function si(i){return i.n===0?Op(i.sorted):Bp(i.n)}function Oh(i){let e=Gv(i.seed+i.drawn*7919),t=si(i);i.drawn++;let n=e();if(i.drawn>4){if(n<t.lava)return"lav";if(n<t.lava+t.rainbow)return"gokkusagi";if(n<t.lava+t.rainbow+t.ice)return"buz"}return i.jars[Math.floor(e()*i.jars.length)].color}function zp(i,e=3){let t={...i,jars:i.jars},n=[];for(let s=0;s<e;s++)n.push(Oh(t));return n}function Hp(i,e,t){let n=i.jars[t];return e==="lav"?"lava":e==="buz"?"ice":e==="gokkusagi"||e===n.color?"ok":"wrong"}function Bc(i,e,t){let n={kind:e,ship:!1};if(e==="ok"){i.combo++,i.best=Math.max(i.best,i.combo);let r=Math.min(5,1+Math.floor(i.combo/5));i.score+=10*r,i.sorted++,i.sinceShuffle++;let a=i.jars[t];a.count++,a.count>=10&&(a.count=0,a.ship++,i.score+=50,n.ship=!0),n.mult=r}else e==="wrong"||e==="lava"||e==="miss"?(i.mistakes++,i.combo=0):e==="ice"?(i.slowT=5,i.score+=5):e==="lavaSafe"&&(i.score+=20);let s=si(i);return i.n>0&&i.mistakes>=3?i.over="lose":i.n===0&&i.mistakes>=3?i.over="end":i.sorted>=s.goal&&(i.over="win"),n}function Gp(i){return i==="lav"?"lavaSafe":i==="buz"?"ice":"miss"}var Vp=i=>i.over==="win"?3-i.mistakes:0,zh=i=>si(i).speed*(i.slowT>0?.5:1);var Ls=.32,ao=2.15,ri=2.3,Fr=.72,Wv=26;function Hh(i){let e=new Un,t=new Bt(30,1,.1,200),n=Ir("sort");n.unlocked??(n.unlocked=1),n.stars??(n.stars={}),n.best??(n.best=0),e.background=new Be(2759956),e.add(new Kn(16772829,3811868,.45));let s=new vi(16769200,1.9);s.position.set(-6,12,14),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-14,right:14,top:14,bottom:-8,near:1,far:60}),s.shadow.bias=-5e-4,e.add(s);let r=new Ui(16756832,30,30,1.6);r.position.set(6,9,4),e.add(r);let a=new We(new xi(80,50),new yt({map:Is(11,"#3e2615","#22130a",1024,1024,[6,4]),roughness:.85}));a.position.set(0,4,-2.2),a.receiveShadow=!0,e.add(a);let o=new We(new cn(80,.5,2.4),new yt({map:Is(21,"#8a5a32","#5a3418",1024,512,[8,1]),roughness:.55}));o.receiveShadow=!0;let l=[],c=new yt({color:14198858,metalness:1,roughness:.28}),u=new Cn({color:15398655,roughness:.05,transparent:!0,opacity:.2,clearcoat:1,envMapIntensity:1.5,side:qt,depthWrite:!1}),f=new as(e,300),d=new Pt;e.add(d);let h=null,g=null,v="idle",m=0,p=0,T=null,I=new Map,M=[],_=[],E=[],P=[],y=null,R=null,U=Ln('<div class="shud"></div>');function V(S,w){let C=w<.7?S<=2?1:S<=4?2:3:w<1.25&&S>=4?2:1,q=Math.ceil(S/C),Z=.7,Y=C>1?4.6:0,ne=-((q-1)/2)*ao-1.25,N=(q-1)/2*ao+1.25,z=(C-1)*Y+3.4,W=[],G=[],K=0,se=(Ce,it)=>{W.push({fn:Ce,len:it,s0:K}),K+=it},fe=0;for(let Ce=0;Ce<C;Ce++){let it=z-Ce*Y,Ke=Ce%2?-1:1,Vt=Math.min(q,S-fe),Dt=Ce===0?ne-1.4:Ke>0?ne:N,wn=Ce===C-1?Ke>0?N+1.6:ne-1.6:Ke>0?N:ne,Xn=K;se(nn=>[Dt+(wn-Dt)*nn,it,Ke],Math.abs(wn-Dt));for(let nn=0;nn<Vt;nn++,fe++){let H=Ke>0?(nn-(q-1)/2)*ao:((q-1)/2-nn)*ao;G.push({x:H,y:it,s:Xn+Math.abs(H-Dt),jarY:it-1.1-ri,row:Ce})}if(Ce<C-1){let nn=wn,H=nn,ie=it,ge=it-Y;se(Ae=>{let De=Math.PI/2-Ae*Math.PI/2;return[H+Ke*Math.cos(De)*Z,ie-Z+Math.sin(De)*Z,Ke]},Math.PI/2*Z),se(Ae=>[nn+Ke*Z,ie-Z-Ae*(Y-2*Z),0],Y-2*Z),se(Ae=>{let De=-Ae*Math.PI/2;return[H+Ke*Math.cos(De)*Z,ge+Z+Math.sin(De)*Z,-Ke]},Math.PI/2*Z)}}let D=W[W.length-1].fn(1),xe=(C-1)%2?-1:1,oe=3.4-1.1-ri,ve=[ne-1.4,z],_e=[D[0]+xe*.6,D[1]-2.5],he=Math.min(ve[0]-1.1,_e[0]-1,ne-Z-.2),Pe=Math.max(ve[0]+1.1,_e[0]+1,N+Z+.2);return{segs:W,gates:G,len:K,rows:C,hopper:ve,bin:_e,benches:[...Array(C)].map((Ce,it)=>z-it*Y-1.1-ri),w:Pe-he,top:z+2.6,bottom:oe-.6,cx:(he+Pe)/2}}function $(S){let w=g.segs;for(let q of w)if(S<=q.s0+q.len)return q.fn(Math.max(0,(S-q.s0)/q.len));let C=w[w.length-1];return C.fn(1+(S-C.s0-C.len)/C.len)}function Q(S){let w=Pn[S];return hn(128,128,C=>{C.fillStyle="#f3e6c8",C.beginPath(),C.roundRect(6,6,116,116,18),C.fill(),C.strokeStyle="#8a6a3a",C.lineWidth=5,C.stroke();let q=new Be(w.core[0]).getStyle();C.fillStyle=q,C.beginPath(),C.arc(64,54,30,0,7),C.fill(),C.fillStyle="rgba(255,255,255,0.5)",C.beginPath(),C.arc(54,44,9,0,7),C.fill(),C.fillStyle="#3a2a14",C.font="bold 34px system-ui, sans-serif",C.textAlign="center",C.fillText(w.sym,64,113)})}function O(S){let w=new Pt,C=new We(new xn(Fr,Fr*.94,ri,40,1,!0),u);C.position.y=ri/2,C.renderOrder=3,w.add(C);let q=new We(new xn(Fr*.94,Fr*.94,.1,40),new Cn({color:13625072,roughness:.1,transparent:!0,opacity:.5}));q.position.y=.05,w.add(q);let Z=new We(new _i(Fr+.02,.07,10,40),c);Z.rotation.x=Math.PI/2,Z.position.y=ri,w.add(Z);let Y=new We(new xi(.85,.85),new yt({map:Q(S),roughness:.8}));Y.position.set(0,ri*.32,Fr+.03),w.add(Y);let ne=Ps(new Be(Pn[S].core[0]),2.6);ne.position.y=ri+.3,ne.material.opacity=0,w.add(ne);let N=new Pt;return w.add(N),w.userData={inside:N,glow:ne,label:Y,flash:0,color:S},w}function J(S){let w=Math.floor(S/3),C=S%3,q=C*2.094+w*1.047;return new L(Math.cos(q)*.36,.1+Ls+w*.5,Math.sin(q)*.36)}function le(){let S=new Pt,w=new Pt;w.position.x=-.42,S.add(w);let C=new We(new cn(.84,.08,.5),c);C.position.x=.42,C.castShadow=!0,w.add(C);let q=new We(new _i(.42,.045,8,32),new jt({color:5635976}));q.rotation.x=Math.PI/2,q.position.y=-.05,S.add(q);let Z=new We(new xn(.42,.42,.7,24,1,!0),u);return Z.position.y=-.5,S.add(Z),S.userData={hinge:w,ring:q,open:0},S}function re(){d.clear(),I.forEach(K=>e.remove(K)),I.clear(),M.forEach(K=>e.remove(K.m)),M=[],P=[],y=null;let S=si(h);g=V(S.jars,i.aspect);let w=[];for(let K=0;K<=g.len;K+=.15){let[se,fe]=$(K);w.push(new L(se,fe-Ls-.04,0))}let C=new pr(w);for(let K of[-.22,.22]){let se=new We(new Ia(C,w.length*2,.055,8,!1),c);se.position.z=K,se.castShadow=!0,d.add(se)}for(let K=.5;K<g.len;K+=2.6){let[se,fe]=$(K),D=new We(new xn(.05,.05,1.2,8),c);D.position.set(se,fe-.9,-.5),d.add(D)}l.forEach(K=>e.remove(K)),l=g.benches.map(K=>{let se=o.clone();return se.position.set(0,K-.25,.1),e.add(se),se}),_=h.jars.map(K=>O(K.color)),E=g.gates.map(()=>le()),g.gates.forEach((K,se)=>{let fe=_[h.pos[se]];fe.position.set(K.x,K.jarY,0),d.add(fe);let D=E[se];D.position.set(K.x,K.y-Ls-.08,0),d.add(D)}),h.jars.forEach((K,se)=>{for(let fe=0;fe<K.count;fe++)B(se,fe,K.color)});let[q,Z]=g.hopper,Y=new We(new xn(1,.3,1.6,32,1,!0),u);Y.position.set(q,Z+1.2,0),d.add(Y);let ne=new We(new _i(1,.06,8,32),c);ne.rotation.x=Math.PI/2,ne.position.set(q,Z+2,0),d.add(ne),me=[];let[N,z]=g.bin,W=new We(new xn(.95,.8,1.5,32,1,!0),new yt({color:9082012,metalness:.9,roughness:.35,side:qt}));W.position.set(N,z+.75,0),W.castShadow=!0,d.add(W);let G=new We(new Di(.88,32),new Cn({color:4892888,roughness:.05,transparent:!0,opacity:.75}));G.rotation.x=-Math.PI/2,G.position.set(N,z+1.1,0),d.add(G),ae=new L(N,z+1.1,0),Oe(i.w,i.h)}let me=[],ae=new L;function de(){me.forEach(C=>d.remove(C)),me=[];let[S,w]=g.hopper;zp(h,3).forEach((C,q)=>{let Z=Ei(C,Ls);Z.position.set(S+(q-1)*.5,w+1+(q===1?.35:0),0),d.add(Z),me.push(Z)})}function B(S,w,C){let q=Ei(C,Ls);return q.position.copy(J(w)),_[S].userData.inside.add(q),q}function we(S,w){h=w?JSON.parse(JSON.stringify(w)):Bh(S),re(),de();for(let Z of h.rail)ze(Z);v="intro",Je();let C=si(h),q=Re(S);if(w){v="play",Ft(k("Kald\u0131\u011F\u0131n yerden devam!"));return}Kt(`<h2>${S?k("Seviye {n}",{n:S}):"\u267E "+k("Sonsuz At\xF6lye")}</h2>
      <p class="lead center">${S?k("{r} renk \xB7 {g} bilyeyi do\u011Fru kavanoza ay\u0131r",{r:C.jars,g:C.goal}):k("Hata yapana kadar devam et. Bant gittik\xE7e h\u0131zlan\u0131r.")}</p>
      ${q}<p class="note center">${k("3 hata yaparsan seviye biter.")}</p>`,[[`\u25B6 ${k("Ba\u015Fla")}`,"pri",()=>{v="play",S===1&&!n.tut&&st()}]],{dismiss:!1})}function Re(S){let w=(C,q)=>`<div class="intro"><span class="ball" style="${ot(C)}"></span><p>${q}</p></div>`;return S===1?`<p class="center">${k("Bir kavanoza dokundu\u011Funda \xFCst\xFCndeki kapak a\xE7\u0131l\u0131r, bant \xFCzerindeki bilye i\xE7ine d\xFC\u015Fer. Tekrar dokun, kapak kapan\u0131r.")}</p>`:S===4?w("gokkusagi",k("YEN\u0130: G\xF6kku\u015Fa\u011F\u0131 bilye her kavanoza uyar.")):S===7?w("lav",k("YEN\u0130: Lav bilye kavanozu \xE7atlat\u0131r! Band\u0131n sonundaki su kovas\u0131na gitsin, kapaklar\u0131 kapal\u0131 tut.")):S===10?w("buz",k("YEN\u0130: Buz bilye nereye d\xFC\u015Ferse d\xFC\u015Fs\xFCn band\u0131 5 saniye yava\u015Flat\u0131r.")):S===14?`<div class="intro"><span>\u{1F500}</span><p>${k("YEN\u0130: Kavanozlar ara ara yer de\u011Fi\u015Ftirir. Etiketlere dikkat!")}</p></div>`:""}function st(){let S=Ln(`<div class="tut"><div class="hand">\u{1F446}</div><p>${k("Banttaki bilyeyle ayn\u0131 renkteki kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r.")}</p></div>`);U.appendChild(S),setTimeout(()=>S.remove(),7e3),n.tut=!0,Jt()}function Ze(S){v!=="play"||!h.gates||S<0||S>=h.gates.length||(h.gates[S]=!h.gates[S],Mt(h.gates[S]?"toggle":"tap"),Fi(8))}function ze(S){let w=Ei(S.id,Ls);e.add(w),I.set(S.uid,w);let[C,q]=$(S.s);return w.position.set(C,q,0),w}function j(S){let w=si(h),C=zh(h);if(h.t+=S,h.slowT>0&&(h.slowT-=S),h.spawnT-=S*(h.slowT>0?.5:1),h.spawnT<=0&&(!h.rail.length||h.rail[h.rail.length-1].s>1.1)){h.spawnT=w.interval;let q=Oh(h),Z={id:q,s:0,uid:h.uid++};h.rail.push(Z),ze(Z),de(),As(.3,"glass")}for(let q=h.rail.length-1;q>=0;q--){let Z=h.rail[q],Y=Z.s;Z.s+=C*S;let ne=!1;if(g.gates.forEach((K,se)=>{if(ne||!h.gates[se]||Y>K.s||Z.s<K.s)return;let fe=h.pos[se];if(_[fe].userData.shipping)return;ne=!0,h.rail.splice(q,1);let D=I.get(Z.uid);I.delete(Z.uid);let xe=_[fe].position.clone().add(J(h.jars[fe].count));M.push({m:D,id:Z.id,ji:fe,from:new L(K.x,K.y,0),to:xe,t:0,dur:Math.sqrt(2*(K.y-xe.y)/Wv)})}),ne)continue;let N=I.get(Z.uid),[z,W,G]=$(Z.s);if(N&&(N.userData.spin.rotateZ(-(G||1)*C*S/Ls),N.position.set(z,W,0)),Z.s>=g.len){h.rail.splice(q,1);let K=I.get(Z.uid);I.delete(Z.uid),M.push({m:K,id:Z.id,ji:-1,from:K.position.clone(),to:ae.clone(),t:0,dur:.4})}}m+=S,m>1&&(m=0,Qe())}function ce(S){if(S.ji<0){let Z=Gp(S.id);e.remove(S.m),f.emit(S.to.x,S.to.y,.3,Z==="lavaSafe"?26:12,{color:Z==="lavaSafe"?14540253:8177919,speed:3,up:2,size:Z==="lavaSafe"?.7:.3,life:Z==="lavaSafe"?1.2:.5,gravity:Z==="lavaSafe"?-1:6}),As(.6,"glass");let Y=Bc(h,Z,-1);return Z==="miss"&&(Mt("no"),be(k("Ka\xE7t\u0131!"))),Z==="lavaSafe"&&(Wn(2),ye("+20",S.to)),Z==="ice"&&(Wn(5),Ft(k("Buz! Bant yava\u015Flad\u0131"),1500)),Ee(Y)}let w=_[S.ji],C=Hp(h,S.id,S.ji);if(C==="ok"){let Z=h.jars[S.ji].count;e.remove(S.m),B(S.ji,Z,S.id);let Y=Bc(h,"ok",S.ji);return Sc(.7,1),Wn(Math.min(10,h.combo%11)),w.userData.flash=1,w.userData.flashCol=6750105,Y.mult>1&&h.combo%5===0&&ye(k("Z\u0130NC\u0130R x{n}",{n:Y.mult}),S.to,!0),Y.ship&&Ye(S.ji),Ee(Y)}e.remove(S.m);let q=Bc(h,C,S.ji);C==="ice"?(f.emit(S.to.x,S.to.y,0,24,{color:12577535,speed:4,size:.35}),Wn(5),Ft(k("Buz! Bant yava\u015Flad\u0131"),1500)):(f.emit(S.to.x,S.to.y+.3,0,30,{color:C==="lava"?16738816:16777215,speed:5,size:.3,life:.6}),_p(),Fi(40),w.userData.flash=1,w.userData.flashCol=16724016,be(C==="lava"?k("Lav kavanozu \xE7atlatt\u0131!"):k("Yanl\u0131\u015F kavanoz!"))),Ee(q)}function Ee(){if(Je(),(h.n>0||h.over==="end")&&h.over)return qe();let S=si(h);S.shuffle&&h.sinceShuffle>=S.shuffle&&!y&&(h.sinceShuffle=0,Ie())}function Ye(S){let w=_[S];w.userData.shipping=!0,rs(),f.emit(w.position.x,w.position.y+ri,.3,40,{color:16765498,speed:5,up:2,size:.35,life:.9}),ye("+50",w.position.clone().add(new L(0,ri+.6,0)),!0),P.push({jo:w,t:0,base:w.position.y})}function Ie(){let S=h.pos.length,w=[...h.pos],C=Math.random;for(let Z=0;Z<2;Z++){let Y=Math.floor(C()*S),ne=Math.floor(C()*S);ne===Y&&(ne=(Y+1)%S),[w[Y],w[ne]]=[w[ne],w[Y]]}let q=w.map((Z,Y)=>({jo:_[Z],from:_[Z].position.clone(),to:new L(g.gates[Y].x,g.gates[Y].jarY,0)}));h.pos=w,h.gates=h.gates.map(()=>!1),y={moves:q,t:0},Rs(.6),Ft(k("Kavanozlar yer de\u011Fi\u015Ftiriyor!"),1300)}function qe(){v="over",pe();let S=h.n;if(S===0){let q=h.score>n.best;q&&(n.best=h.score),Ct(),rs(),Kt(`<h2>\u267E ${k("Sonsuz At\xF6lye")}</h2><p class="lead center">${k("Puan")}: <b>${Vn(h.score)}</b>${q?" \xB7 "+k("Yeni rekor!"):""}</p><p class="center">${k("En iyi")}: ${Vn(n.best)} \xB7 ${k("En uzun zincir")}: ${h.best}</p>`,[[k("Tekrar"),"pri",()=>we(0)],[k("Seviyeler"),"",()=>A()]],{dismiss:!1});return}let w=Vp(h),C=h.over==="win";C?(n.stars[S]=Math.max(n.stars[S]||0,w),n.unlocked=Math.max(n.unlocked,Math.min(30,S+1)),S===30&&(n.done=!0),rs(),f.emit(0,5,2,120,{color:16765498,speed:8,life:1.3,size:.45,up:2})):Dr(),Ct(),Kt(`<h2>${C?k("Seviye {n} tamam!",{n:S}):k("Seviye {n} bitti",{n:S})}</h2>
      ${C?`<div class="stars">${[1,2,3].map(q=>`<span class="${q<=w?"on":""}">\u2605</span>`).join("")}</div>`:`<p class="lead center">${k("3 hata yapt\u0131n. Bir daha dene!")}</p>`}
      <p class="center">${k("Puan")}: <b>${Vn(h.score)}</b> \xB7 ${k("En uzun zincir")}: ${h.best}</p>`,[...C&&S<30?[[`\u25B6 ${k("Sonraki seviye")}`,"pri",()=>we(S+1)]]:[],[k("Tekrar"),C?"":"pri",()=>we(S)],[k("Seviyeler"),"ghost",()=>A()]],{dismiss:!1})}function Qe(){h&&!h.over&&(n.cur=JSON.parse(JSON.stringify(h)),Jt())}function pe(){n.cur=null,Jt()}function ye(S,w,C){let q=w.clone().project(t),Z=Ln(`<div class="pop ${C?"big":""}">${S}</div>`);Z.style.left=(q.x+1)/2*100+"%",Z.style.top=(1-q.y)/2*100+"%",U.appendChild(Z),setTimeout(()=>Z.remove(),1e3)}function be(S){Je();let w=Ln(`<div class="mist">${S}</div>`);U.appendChild(w),setTimeout(()=>w.remove(),1100)}function Me(S){p+=S,v==="play"&&h&&j(S);for(let w=M.length-1;w>=0;w--){let C=M[w];C.t+=S;let q=Math.min(1,C.t/C.dur);C.m.position.set(C.from.x+(C.to.x-C.from.x)*q,C.from.y+(C.to.y-C.from.y)*q*q,C.to.z*q),C.m.userData.spin.rotateX(S*6),q>=1&&(M.splice(w,1),ce(C))}E.forEach((w,C)=>{let q=h&&h.gates[C]?1:0,Z=w.userData;Z.open+=(q-Z.open)*Math.min(1,S*18),Z.hinge.rotation.z=-Z.open*1.4,Z.ring.material.color.setHex(q?5635976:5583650),Z.ring.scale.setScalar(1+(q?Math.sin(p*10)*.06:0))}),_.forEach(w=>{let C=w.userData;C.flash>0&&(C.flash=Math.max(0,C.flash-S*2.5)),C.glow.material.opacity=C.flash*.9,C.flashCol&&C.glow.material.color.setHex(C.flashCol)});for(let w=P.length-1;w>=0;w--){let C=P[w];C.t+=S;let q=C.jo;C.t<.6?q.position.y=C.base-C.t/.6*4:C.cleared||(C.cleared=!0,q.userData.inside.clear()),C.t>=.6&&(q.position.y=C.base-4+Math.min(1,(C.t-.6)/.5)*4),C.t>=1.1&&(q.position.y=C.base,q.userData.shipping=!1,P.splice(w,1))}if(y){let w=y;w.t+=S;let C=Math.min(1,w.t/.9),q=C*C*(3-2*C);for(let Z of w.moves)Z.jo.position.lerpVectors(Z.from,Z.to,q),Z.jo.position.y+=Math.sin(C*Math.PI)*1.2;C>=1&&(y=null)}if(f.update(S),h&&v==="play"){let w=zh(h);En(h.rail.length?.25+w*.06:0)}else En(0);t.position.set(Se.x+Math.sin(p*.3)*.15,Se.y,Se.z),t.lookAt(Se.x,Se.ly,0)}let Se={x:0,y:3,z:30,ly:3};function Oe(S,w){if(t.aspect=S/w,t.updateProjectionMatrix(),f.setScale(w),!g)return;let C=g.top+1.4,q=g.bottom-.4,Z=C-q,Y=g.w+.3,ne=Bi(t,Y,Z+2.2,t.aspect);Se.x=g.cx??0,Se.ly=(C+q)/2+.2,Se.y=Se.ly+ne*(g.rows>1?.03:.1),Se.z=ne}let Xe=new on(new L(0,0,1),0),He=new L;function et(S){if(v!=="play"||!g||!i.ray(t,S.x,S.y).ray.intersectPlane(Xe,He))return;let C=-1,q=1e9;g.gates.forEach((Z,Y)=>{if(He.y>Z.y+1.2||He.y<Z.jarY-.8)return;let ne=Math.abs(He.x-Z.x);ne<ao*.55&&ne<q&&(q=ne,C=Y)}),C>=0&&Ze(C)}function F(S){let w=+S.key;w>=1&&w<=6&&Ze(w-1)}function ot(S){let w=Pn[S];return`--c1:${new Be(w.core?w.core[0]:w.tint).getStyle()};--c2:${new Be(w.core?w.core[1]??w.core[0]:w.tint).getStyle()}`}function Je(){if(!h){U.innerHTML="";return}let S=si(h),w=Math.min(5,1+Math.floor(h.combo/5)),C=h.n?Math.min(1,h.sorted/S.goal):0;U.innerHTML=`<div class="sbar">
      <div class="lvl">${h.n?k("Seviye {n}",{n:h.n}):"\u267E "+k("Sonsuz")}</div>
      <div class="prog"><i style="width:${C*100}%"></i><span>${h.n?`${h.sorted} / ${S.goal}`:Vn(h.sorted)}</span></div>
      <div class="sc">${Vn(h.score)}${w>1?` <em>x${w}</em>`:""}</div>
      <div class="hearts">${[0,1,2].map(q=>`<span class="${q<h.mistakes?"x":""}">\u25C6</span>`).join("")}</div></div>`}function A(){v="menu",Gt(),h||(h=Bh(1),re());let S=[];for(let Y=1;Y<=30;Y++){let ne=Y<=n.unlocked,N=n.stars[Y]||0;S.push(`<button class="lv ${ne?"":"locked"}" data-n="${Y}" ${ne?"":"disabled"}><b>${ne?Y:"\u{1F512}"}</b><small>${"\u2605".repeat(N)}${"\u2606".repeat(ne?3-N:0)}</small></button>`)}let w=n.unlocked>=10,C=Kt(`<h2>\u{1FAD9} ${k("Ayr\u0131\u015Ft\u0131rma At\xF6lyesi")}</h2>
      <p class="lead center">${k("Bilyeleri renklerine g\xF6re kavanozlara ay\u0131r. Kavanoza dokun: kapa\u011F\u0131 a\xE7\u0131l\u0131r ya da kapan\u0131r.")}</p>
      ${n.cur?`<button class="btn pri wide" data-k="resume">\u25B6 ${n.cur.n?k("Seviye {n} devam et",{n:n.cur.n}):k("Sonsuz moda devam et")}</button>`:""}
      <div class="lvgrid">${S.join("")}</div>
      <button class="btn wide ${w?"":"locked"}" data-k="endless" ${w?"":"disabled"}>\u267E ${k("Sonsuz At\xF6lye")} ${w?`\xB7 ${k("Rekor")}: ${Vn(n.best)}`:"\xB7 "+k("10. seviyede a\xE7\u0131l\u0131r")}</button>`,[[`\u2302 ${k("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});C.querySelectorAll("[data-n]").forEach(Y=>Y.onclick=()=>{Mt("tap"),Gt(),n.cur=null,we(+Y.dataset.n)});let q=C.querySelector("[data-k=resume]");q&&(q.onclick=()=>{Mt("tap"),Gt(),we(n.cur.n,n.cur)});let Z=C.querySelector("[data-k=endless]");Z&&w&&(Z.onclick=()=>{Mt("tap"),Gt(),n.cur=null,we(0)})}function x(){v==="play"&&(v="paused",Qe(),Kt(`<h2>${k("Duraklat\u0131ld\u0131")}</h2>`,[[`\u25B6 ${k("Devam et")}`,"pri",()=>{v="play"}],[k("Yeniden ba\u015Flat"),"",()=>we(h.n)],[k("Seviyeler"),"",()=>A()],[`\u2302 ${k("Ana men\xFC")}`,"ghost",()=>i.home()]],{dismiss:!1}))}return{id:"sort",scene:e,camera:t,hud:U,enter(){i.hud.appendChild(U),h=null,g=null,A()},exit(){(v==="play"||v==="paused")&&Qe(),Ct(),U.remove(),En(0),v="idle",Gt()},update:Me,resize:(S,w)=>{Oe(S,w),h&&g&&v==="menu"&&V(si(h).jars,i.aspect).rows!==g.rows&&re()},down:et,move(){},up(){},key:F,pause(){v==="play"?x():Qe()},menu(){v==="play"?x():A()},relabel(){Je(),v==="menu"&&A()},debug:()=>({phase:v,st:h}),_test:{start:we,toggleGate:Ze,win(){h.sorted=si(h).goal,h.mistakes=1,h.over="win",qe()},jarScreen(S){let w=g.gates[S],C=new L(w.x,w.jarY+ri/2,0).project(t);return{x:(C.x+1)/2*i.w,y:(1-C.y)/2*i.h}}}}}var Tn={r:.22,g:14,th:.07,dt:.0020833333333333333,roll:.12,rest:.18,maxT:30},Xv=(i,e,t,n,s=0,r=0)=>{let a=[];for(let o=0;o<=n;o++){let l=e+(t-e)*o/n;a.push([s+Math.cos(l)*i,r+Math.sin(l)*i])}return a},qv=i=>i.slice(1).map((e,t)=>[i[t][0],i[t][1],e[0],e[1]]),oo={kalas:{name:"Uzun kalas",segs:[[-1,0,1,0]],kind:"normal"},kisa:{name:"K\u0131sa kalas",segs:[[-.5,0,.5,0]],kind:"normal"},kavis:{name:"Kavis",segs:qv(Xv(1.1,Math.PI,Math.PI*1.5,10,.55,.55)),kind:"normal"},trambolin:{name:"Trambolin",segs:[[-.55,0,.55,0]],kind:"bounce",e:.95},hizlandirici:{name:"H\u0131zland\u0131r\u0131c\u0131",segs:[[-.75,0,.75,0]],kind:"boost"},huni:{name:"Huni",segs:[[-.95,.6,-.34,0],[.34,0,.95,.6]],kind:"normal"}},$v={segs:[[-.48,.62,-.48,0],[-.48,0,.48,0],[.48,0,.48,.62]]};function Gh(i){let e=oo[i.type],t=(i.a||0)*Math.PI/180,n=Math.cos(t),s=Math.sin(t),r=i.flip?-1:1;return e.segs.map(([a,o,l,c])=>({ax:i.x+a*r*n-o*s,ay:i.y+a*r*s+o*n,bx:i.x+l*r*n-c*s,by:i.y+l*r*s+c*n,kind:e.kind,e:e.e??Tn.rest,dx:n*r,dy:s*r,src:i}))}function Vh(i,e){let t=[];for(let s of[...i.fixed||[],...e])t.push(...Gh(s));let n=i.cup;for(let[s,r,a,o]of $v.segs)t.push({ax:n.x+s,ay:n.y+r,bx:n.x+a,by:n.y+o,kind:"normal",e:.1,cup:!0});for(let s of t)s.minx=Math.min(s.ax,s.bx)-.4,s.maxx=Math.max(s.ax,s.bx)+.4,s.miny=Math.min(s.ay,s.by)-.4,s.maxy=Math.max(s.ay,s.by)+.4;return t}function Wh(i){let e=i.start;return{x:e.x,y:e.y,vx:e.vx||0,vy:e.vy||0,t:0,still:0,stars:[],state:"run",inCup:0,path:[]}}function Xh(i,e,t,n,s){i.vy-=Tn.g*n,i.x+=i.vx*n,i.y+=i.vy*n,i.t+=n;let r=Tn.r+Tn.th,a=!1;for(let u of e){if(i.x<u.minx||i.x>u.maxx||i.y<u.miny||i.y>u.maxy)continue;let f=u.bx-u.ax,d=u.by-u.ay,h=f*f+d*d,g=((i.x-u.ax)*f+(i.y-u.ay)*d)/h;g=Math.max(0,Math.min(1,g));let v=u.ax+f*g,m=u.ay+d*g,p=i.x-v,T=i.y-m,I=p*p+T*T;if(I>=r*r)continue;let M=Math.sqrt(I)||1e-6,_=p/M,E=T/M;i.x=v+_*r,i.y=m+E*r;let P=i.vx*_+i.vy*E;if(P<0){let y=P<-1.2?u.e:0;i.vx-=(1+y)*P*_,i.vy-=(1+y)*P*E,s&&P<-1.5&&s.push({type:"hit",p:-P,kind:u.kind,cup:u.cup})}a=!0,u.kind==="boost"&&(i.vx*u.dx+i.vy*u.dy<9&&(i.vx+=u.dx*40*n,i.vy+=u.dy*40*n),s&&!i.boosting&&s.push({type:"boost"}),i.boosting=.1)}if(i.boosting&&(i.boosting=Math.max(0,i.boosting-n)),a){let u=1-Tn.roll*n;i.vx*=u,i.vy*=u}(t.stars||[]).forEach((u,f)=>{!i.stars.includes(f)&&Math.hypot(i.x-u.x,i.y-u.y)<.45&&(i.stars.push(f),s&&s.push({type:"star",i:f}))});let o=t.cup,l=i.x>o.x-.48&&i.x<o.x+.48&&i.y>o.y&&i.y<o.y+.62;i.inCup=l?i.inCup+n:0;let c=Math.hypot(i.vx,i.vy);i.still=c<.08?i.still+n:0,i.inCup>.3&&c<2?i.state="win":i.y<-1.5||i.x<-1.5||i.x>t.w+1.5?i.state="out":(i.still>1.2||i.t>Tn.maxT)&&(i.state="stuck")}var _n=(i,e,t)=>({id:i,name:e,w:9,h:13,stars:[],fixed:[],...t}),os=[_n("ilk","\u0130lk kalas",{start:{x:1.2,y:11.6,vx:1.6},cup:{x:6.8,y:1},stars:[{x:4.6,y:6.2}],inv:{kalas:2},tip:"Kalas\u0131 s\xFCr\xFCkleyip panoya b\u0131rak. D\xF6nd\xFCrmek i\xE7in \xFCst\xFCne dokun, ok d\xFC\u011Fmelerini kullan."}),_n("kavis","Kavisli d\xF6n\xFC\u015F",{start:{x:1.4,y:12,vx:0},cup:{x:7.2,y:1},stars:[{x:4.4,y:2.2}],inv:{kavis:1,kalas:1},tip:"Kavis d\xFC\u015Fen bilyeyi yana \xE7evirir."}),_n("zikzak","Zikzak",{start:{x:7.8,y:12,vx:-1.2},cup:{x:7.4,y:1},stars:[{x:6.7,y:9},{x:5.8,y:4.6}],inv:{kalas:3},fixed:[{type:"kisa",x:7.2,y:3.6,a:0}]}),_n("tramp","Z\u0131pla!",{start:{x:1.2,y:12,vx:.4},cup:{x:7.4,y:5.5},stars:[{x:4.4,y:9}],inv:{trambolin:1,kalas:1},fixed:[{type:"kalas",x:7.4,y:5.38,a:0},{type:"kalas",x:4.6,y:3.2,a:90}],tip:"Trambolin bilyeyi z\u0131plat\u0131r."}),_n("hiz","H\u0131zland\u0131r\u0131c\u0131",{start:{x:.8,y:9.4,vx:1},cup:{x:8,y:1},stars:[{x:6,y:8.4}],inv:{hizlandirici:1,kalas:1},fixed:[{type:"kalas",x:1.6,y:9,a:-8},{type:"kalas",x:5.2,y:4.2,a:90}],tip:"H\u0131zland\u0131r\u0131c\u0131 bilyeyi ok y\xF6n\xFCnde f\u0131rlat\u0131r."}),_n("huni","Huniden ge\xE7ir",{start:{x:.8,y:12.2,vx:3.2},cup:{x:2.2,y:1},stars:[{x:4.5,y:4.4}],inv:{huni:1,kalas:2},fixed:[{type:"kalas",x:4.5,y:7,a:0}],tip:"Huni bilyeyi ortadan a\u015Fa\u011F\u0131 ak\u0131t\u0131r."}),_n("tavan","\xC7at\u0131l\u0131 bardak",{start:{x:1,y:12,vx:1.2},cup:{x:4.5,y:1},stars:[{x:7.6,y:3}],inv:{kalas:2,kavis:1},fixed:[{type:"kalas",x:4.5,y:2.6,a:0}]}),_n("duvar","Duvar\u0131n ard\u0131",{start:{x:1,y:12,vx:1.5},cup:{x:7.5,y:1},stars:[{x:4.5,y:11},{x:7,y:6}],inv:{kalas:2,trambolin:1},fixed:[{type:"kalas",x:5.2,y:2.4,a:90},{type:"kalas",x:5.2,y:4.4,a:90}]}),_n("merdiven","Merdiven",{start:{x:8.2,y:12.4,vx:-2},cup:{x:1,y:1},stars:[{x:6.2,y:9.6},{x:3,y:6.4},{x:3.9,y:8.4}],inv:{kalas:4}}),_n("yukari","Yoku\u015F yukar\u0131",{start:{x:.8,y:6,vx:2},cup:{x:7.6,y:8},stars:[{x:4.5,y:9.4}],inv:{hizlandirici:1,kalas:2,kavis:1},fixed:[{type:"kalas",x:7.6,y:7.88,a:0},{type:"kalas",x:1.6,y:5.6,a:-6}]}),_n("cift","\xC7ift trambolin",{start:{x:1,y:12.4,vx:.2},cup:{x:8,y:9},stars:[{x:4.5,y:6}],inv:{trambolin:2,kalas:1},fixed:[{type:"kalas",x:8,y:8.88,a:0},{type:"kalas",x:4.5,y:11.2,a:0}]}),_n("labirent","Labirent",{start:{x:4.5,y:12.4,vx:0},cup:{x:4.5,y:1},stars:[{x:5.1,y:10.8},{x:5,y:1.9}],inv:{kalas:3,kavis:2},fixed:[{type:"kalas",x:4.5,y:9.4,a:0},{type:"kalas",x:4.5,y:4.4,a:0}]}),_n("ucurum","U\xE7urum",{start:{x:.8,y:4,vx:3},cup:{x:8.2,y:1},stars:[{x:2.9,y:4.3},{x:5.7,y:4.9}],inv:{trambolin:1,hizlandirici:1,kalas:2},fixed:[{type:"kalas",x:1.4,y:3.6,a:0},{type:"kalas",x:4.6,y:2,a:90}]}),_n("sarmal","Sarmal",{start:{x:8.2,y:12.4,vx:-1},cup:{x:8.2,y:1},stars:[{x:7.4,y:7.9},{x:7,y:7.1},{x:6.6,y:2.9}],inv:{kalas:3,kavis:2}}),_n("ustasi","Usta i\u015Fi",{start:{x:.8,y:12.4,vx:2},cup:{x:4.5,y:10},stars:[{x:2,y:11.4},{x:3.5,y:11}],inv:{kalas:3,trambolin:1,hizlandirici:1,kavis:1},fixed:[{type:"kalas",x:4.5,y:9.88,a:0},{type:"kalas",x:4.5,y:11.6,a:0}]}),_n("final","B\xFCy\xFCk final",{start:{x:4.5,y:12.4,vx:0},cup:{x:4.5,y:6},stars:[{x:7.2,y:4.3},{x:8,y:2},{x:4.5,y:9}],inv:{kalas:4,kavis:2,trambolin:1,hizlandirici:1,huni:1},fixed:[{type:"kalas",x:4.5,y:5.88,a:0},{type:"kalas",x:4.5,y:7.6,a:0}]})];var zc={ilk:[{type:"kalas",x:5.25,y:1.5,a:30,flip:!1},{type:"kalas",x:1.75,y:9.75,a:-45,flip:!0}],kavis:[{type:"kavis",x:.5,y:4.75,a:30,flip:!1},{type:"kalas",x:6,y:1.75,a:-15,flip:!1}],zikzak:[{type:"kalas",x:6.5,y:1.75,a:-45,flip:!0},{type:"kalas",x:8,y:10.5,a:-60,flip:!1}],tramp:[{type:"trambolin",x:1.5,y:9.75,a:-45,flip:!1},{type:"kalas",x:4.75,y:8,a:-30,flip:!0}],hiz:[{type:"hizlandirici",x:1.75,y:9,a:45,flip:!1},{type:"kalas",x:1.75,y:5.75,a:-90,flip:!0}],huni:[{type:"huni",x:7.75,y:1,a:-30,flip:!0},{type:"kalas",x:5.75,y:4.75,a:15,flip:!1},{type:"kalas",x:1.75,y:12.25,a:-30,flip:!1}],tavan:[{type:"kalas",x:2,y:9.5,a:-30,flip:!1},{type:"kalas",x:7,y:2,a:30,flip:!0},{type:"kavis",x:6.25,y:2,a:60,flip:!1}],duvar:[{type:"kalas",x:4.25,y:.5,a:-30,flip:!1},{type:"kalas",x:3.5,y:7,a:15,flip:!0},{type:"trambolin",x:2.25,y:9.75,a:-15,flip:!1}],merdiven:[{type:"kalas",x:6.75,y:1,a:-15,flip:!1},{type:"kalas",x:6.5,y:9.5,a:15,flip:!0}],yukari:[{type:"hizlandirici",x:1.75,y:6.5,a:45,flip:!1},{type:"kalas",x:5,y:8.5,a:15,flip:!0},{type:"kavis",x:7.5,y:5,a:-15,flip:!0}],cift:[{type:"trambolin",x:5.75,y:4,a:-60,flip:!1},{type:"trambolin",x:3.25,y:2.5,a:0,flip:!1},{type:"kalas",x:.5,y:11.5,a:-60,flip:!1}],labirent:[{type:"kalas",x:8.25,y:5.5,a:30,flip:!1},{type:"kavis",x:4,y:10.25,a:-75,flip:!1}],ucurum:[{type:"hizlandirici",x:2.75,y:3.75,a:45,flip:!1},{type:"kalas",x:6.75,y:8,a:30,flip:!0}],sarmal:[{type:"kalas",x:6,y:2.75,a:-15,flip:!1},{type:"kalas",x:2,y:12.5,a:120,flip:!1},{type:"kavis",x:7.75,y:7,a:-30,flip:!0}],ustasi:[{type:"kalas",x:2.5,y:11,a:-15,flip:!0},{type:"kalas",x:3,y:.5,a:-75,flip:!1},{type:"trambolin",x:2.75,y:1.5,a:-75,flip:!1}],final:[{type:"kalas",x:3.25,y:8.25,a:-15,flip:!0},{type:"kalas",x:6,y:4.5,a:-75,flip:!0},{type:"kalas",x:8.25,y:8,a:-60,flip:!1},{type:"kalas",x:3.5,y:1,a:0,flip:!1},{type:"kavis",x:6.25,y:10,a:30,flip:!0},{type:"kavis",x:3.5,y:4.5,a:-75,flip:!0},{type:"trambolin",x:8,y:.5,a:15,flip:!0},{type:"hizlandirici",x:1.75,y:7.25,a:-90,flip:!0},{type:"huni",x:2.25,y:2.5,a:0,flip:!0}]};var Wp=.25,Xp=15,Hc={id:"serbest",name:"Serbest At\xF6lye",w:9,h:13,start:{x:1,y:12.2,vx:1},cup:{x:7.5,y:1},stars:[],fixed:[],inv:{kalas:99,kisa:99,kavis:99,trambolin:99,hizlandirici:99,huni:99}},Zv={kalas:'<svg viewBox="0 0 40 40"><rect x="3" y="17" width="34" height="6" rx="2" fill="#c98a4b" stroke="#6b3f1a"/></svg>',kisa:'<svg viewBox="0 0 40 40"><rect x="11" y="17" width="18" height="6" rx="2" fill="#c98a4b" stroke="#6b3f1a"/></svg>',kavis:'<svg viewBox="0 0 40 40"><path d="M6 6 A26 26 0 0 0 32 32" fill="none" stroke="#6b3f1a" stroke-width="8" stroke-linecap="round"/><path d="M6 6 A26 26 0 0 0 32 32" fill="none" stroke="#c98a4b" stroke-width="5" stroke-linecap="round"/></svg>',trambolin:'<svg viewBox="0 0 40 40"><rect x="7" y="14" width="26" height="6" rx="3" fill="#e8413a"/><path d="M10 21v8M30 21v8M14 24l4 4 4-4 4 4 4-4" stroke="#999" stroke-width="2" fill="none"/></svg>',hizlandirici:'<svg viewBox="0 0 40 40"><rect x="4" y="16" width="32" height="8" rx="3" fill="#2f7cf6"/><path d="M12 20h14m-5-4 5 4-5 4" stroke="#ffe14a" stroke-width="3" fill="none" stroke-linecap="round"/></svg>',huni:'<svg viewBox="0 0 40 40"><path d="M4 10 L15 26 M25 26 L36 10" stroke="#6b3f1a" stroke-width="7" stroke-linecap="round"/><path d="M4 10 L15 26 M25 26 L36 10" stroke="#c98a4b" stroke-width="4" stroke-linecap="round"/></svg>'};function qh(i){let e=new Un,t=new Bt(30,1,.1,200),n=Ir("pist");n.unlocked??(n.unlocked=1),n.stars??(n.stars={}),n.layouts??(n.layouts={}),e.background=new Be(2042414),e.add(new Kn(16774374,2764854,.6));let s=new vi(16773336,2);s.position.set(-5,10,12),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-10,right:10,top:10,bottom:-10,near:1,far:50}),s.shadow.bias=-6e-4,e.add(s),e.add(s.target);let r=new Pt;e.add(r);let a=hn(512,512,(H,ie,ge)=>{H.drawImage(Is(31,"#5e4029","#3a2414",512,512).image,0,0);for(let Ae=16;Ae<ge;Ae+=32)for(let De=16;De<ie;De+=32)H.fillStyle="rgba(15,8,3,0.8)",H.beginPath(),H.arc(De,Ae,4.5,0,7),H.fill(),H.fillStyle="rgba(255,220,180,0.12)",H.beginPath(),H.arc(De+1,Ae+2,4.5,0,3.14),H.fill()},{repeat:[3,4]}),o=new We(new cn(1,1,.3),new yt({map:a,roughness:.8}));o.receiveShadow=!0,r.add(o);let l=new yt({map:Is(41,"#6a4024","#40240f",512,128),roughness:.6}),c=new Pt;r.add(c);let u=new Pt;r.add(u);let f=new Pt;r.add(f);let d=new as(e,300),h=new yt({map:Is(51,"#f0c27a","#c48a48",256,64),roughness:.45}),g=new yt({color:10134445,metalness:.9,roughness:.3}),v=new yt({color:15221050,roughness:.5}),m=hn(256,32,(H,ie,ge)=>{H.fillStyle="#2f7cf6",H.fillRect(0,0,ie,ge),H.strokeStyle="#ffe14a",H.lineWidth=5;for(let Ae=20;Ae<ie;Ae+=46)H.beginPath(),H.moveTo(Ae,5),H.lineTo(Ae+14,16),H.lineTo(Ae,27),H.stroke()}),p=new yt({map:m,emissive:1718912,emissiveMap:m,emissiveIntensity:.6,roughness:.4}),T=new jt({color:12580607,transparent:!0,opacity:.5,depthWrite:!1}),I={};function M(H){if(I[H])return I[H];let ie=oo[H],ge=[];for(let[Ae,De,nt,ht]of ie.segs){let xt=Math.hypot(nt-Ae,ht-De)+Tn.th*2.4,dn=new cn(xt,Tn.th*2.6,.7);dn.rotateZ(Math.atan2(ht-De,nt-Ae)),dn.translate((Ae+nt)/2,(De+ht)/2,0),ge.push(dn)}return I[H]=wc(ge)}function _(H){let ie=new Pt,ge=H.fixed?g:H.type==="trambolin"?v:H.type==="hizlandirici"?p:h,Ae=new We(M(H.type),H.ghost?T:ge);if(Ae.castShadow=!H.ghost,Ae.receiveShadow=!0,ie.add(Ae),H.type==="trambolin"&&!H.ghost)for(let nt of[-.4,.4]){let ht=new We(new xn(.06,.06,.35,8),g);ht.position.set(nt,-.22,0),ie.add(ht)}let De=new We(M(H.type),new jt({color:16769354,transparent:!0,opacity:0,depthWrite:!1}));return De.scale.set(1.04,2.2,1.1),ie.add(De),ie.userData={p:H,sel:De},E(ie),ie}function E(H){let ie=H.userData.p;H.position.set(ie.x,ie.y,0),H.rotation.set(0,0,(ie.a||0)*Math.PI/180),H.scale.set(ie.flip?-1:1,1,1)}let P=new Pt;r.add(P);{let H=new We(new xn(.34,.34,1.2,24,1,!0),new yt({color:13137203,metalness:1,roughness:.3,side:qt}));H.rotation.z=Math.PI/2,H.position.x=-.5,P.add(H);let ie=new We(new _i(.34,.06,8,24),H.material);ie.rotation.y=Math.PI/2,ie.position.x=.1,P.add(ie)}let y=new Pt;r.add(y);{let H=new Cn({color:15398655,roughness:.05,transparent:!0,opacity:.28,clearcoat:1,side:qt,depthWrite:!1}),ie=new We(new xn(.52,.48,.66,32,1,!0),H);ie.position.y=.33,ie.renderOrder=3,y.add(ie);let ge=new We(new xn(.48,.48,.08,32),new yt({color:16765498,metalness:1,roughness:.25}));ge.position.y=0,y.add(ge);let Ae=new We(new _i(.52,.04,8,32),ge.material);Ae.rotation.x=Math.PI/2,Ae.position.y=.66,y.add(Ae);let De=Ps(16769162,2.2);De.position.y=.4,y.add(De),y.userData.glow=De}let R=new Ni;for(let H=0;H<10;H++){let ie=Math.PI/2+H*Math.PI/5,ge=H%2?.14:.32;H?R.lineTo(Math.cos(ie)*ge,Math.sin(ie)*ge):R.moveTo(Math.cos(ie)*ge,Math.sin(ie)*ge)}let U=new Ra(R,{depth:.1,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2});U.center();let V=new yt({color:16763938,metalness:.8,roughness:.25,emissive:6702080,emissiveIntensity:.6}),$=[],Q=new fa(new Rt,new La({color:16777215,dashSize:.15,gapSize:.12,transparent:!0,opacity:.55}));r.add(Q);let O=new yi(.055,8,6),J=new jt({color:9430015,transparent:!0,opacity:.85}),le=new gi(O,J,260);le.count=0,le.position.z=.3,r.add(le);let re=!0,me=0,ae=Ln('<div class="plabels"><span class="pl start"></span><span class="pl goal"></span></div>'),de=Ln('<div class="ptut"><div class="hand">\u{1F446}</div><p></p></div>'),B=null,we=-1,Re=[],st=[],Ze=null,ze=null,j="idle",ce=null,Ee=null,Ye=null,Ie=0,qe=1,Qe=[],pe=0,ye=0,be=0,Me=Ln('<div class="phud"></div>'),Se=Ln('<div class="tray"></div>'),Oe=Ln(`<div class="selbar"><button data-a="l" aria-label="${k("Sola d\xF6nd\xFCr")}">\u27F2</button><button data-a="r" aria-label="${k("Sa\u011Fa d\xF6nd\xFCr")}">\u27F3</button><button data-a="f" aria-label="${k("\xC7evir")}">\u21CB</button><button data-a="x" aria-label="${k("Kald\u0131r")}">\u{1F5D1}</button></div>`);Oe.querySelectorAll("button").forEach(H=>H.onpointerdown=ie=>{ie.stopPropagation(),ie.preventDefault(),C(H.dataset.a)});let Xe=H=>(B.inv[H]||0)-Re.filter(ie=>ie.type===H).length;function He(H){if(we=H,B=H<0?Hc:os[H],H<0?(n.sandbox??(n.sandbox={start:{...Hc.start},cup:{...Hc.cup},placed:[]}),B={...Hc,start:n.sandbox.start,cup:n.sandbox.cup},Re=n.sandbox.placed):Re=(n.layouts[B.id]||[]).map(ie=>({...ie})),n.cur=H,Jt(),pe=0,Qe.forEach(ie=>u.remove(ie)),Qe=[],et(),F(),Je(),wn(),Xn(),_e=H>=0&&H<2&&!n.stars[B.id],_e){let ie=zc[B.id]||[];for(;pe<ie.length;)ve(ie[pe++])}Pe(),H>=0&&B.tip&&!_e&&!n["tip_"+B.id]&&(n["tip_"+B.id]=1,Jt(),setTimeout(()=>Ft(k(B.tip),4500),400))}function et(){o.scale.set(B.w+.6,B.h+.6,1),o.position.set(B.w/2,B.h/2,-.5),c.clear();let H=.35,ie=B.w+.6+H*2,ge=B.h+.6+H*2;for(let[Ae,De,nt,ht]of[[B.w/2,-.3-H/2,ie,H],[B.w/2,B.h+.3+H/2,ie,H],[-.3-H/2,B.h/2,H,ge],[B.w+.3+H/2,B.h/2,H,ge]]){let xt=new We(new cn(nt,ht,.7),l);xt.position.set(Ae,De,-.3),xt.castShadow=xt.receiveShadow=!0,c.add(xt)}s.position.set(B.w/2-5,B.h/2+10,12),s.target.position.set(B.w/2,B.h/2,0),P.position.set(B.start.x,B.start.y,0),P.rotation.z=Math.atan2(B.start.vy||0,B.start.vx||1e-4)+((B.start.vx||0)===0,0),B.start.vx||(P.rotation.z=-Math.PI/2),y.position.set(B.cup.x,B.cup.y,0),$.forEach(Ae=>f.remove(Ae)),$=(B.stars||[]).map(Ae=>{let De=new We(U,V);return De.position.set(Ae.x,Ae.y,0),De.castShadow=!0,f.add(De),De}),Dt(i.w,i.h)}function F(){st.forEach(H=>u.remove(H)),st=[];for(let H of B.fixed||[]){let ie=_({...H,fixed:!0});u.add(ie)}for(let H of Re){let ie=_(H);u.add(ie),st.push(ie)}S(null)}function ot(){re=!0,we>=0?n.layouts[B.id]=Re.map(H=>({type:H.type,x:H.x,y:H.y,a:H.a,flip:!!H.flip})):n.sandbox.placed=Re,Jt()}function Je(){j="edit",re=!0,Ee&&(e.remove(Ee),Ee=null),ce=null,En(0),$.forEach(H=>{H.visible=!0,H.scale.setScalar(1)}),wn()}function A(){if(j==="run")return Je();S(null),Ye=Vh(B,Re),ce=Wh(B),Ie=0,Ee=Ei(n.ball||"mavi",Tn.r),Ee.position.set(ce.x,ce.y,0),r.add(Ee);let H=Ps(10475775,1.3);H.material.opacity=.55,Ee.add(H),H.scale.setScalar(1.3/Tn.r),j="run",Q.visible=!1,le.count=0,Rs(.5),wn(),Pe()}function x(H){j="result",be=0,En(0);let ie=ce.path.map(([ge,Ae])=>new L(ge,Ae,.35));if(ie.length>1&&(Q.geometry.dispose(),Q.geometry=new Rt().setFromPoints(ie),Q.computeLineDistances(),Q.visible=!0),H==="win"){let ge=(B.stars||[]).length,Ae=ce.stars.length,De=ge?1+Math.round(2*Ae/ge):3;rs(),Fi(30);let nt=y.position.clone();if(d.emit(nt.x+r.position.x,nt.y+.6+r.position.y,.5,80,{color:16765498,speed:6,up:2,size:.3,life:1.2}),we<0){Ft(k("Barda\u011Fa ula\u015Ft\u0131!")),setTimeout(Je,1200);return}n.stars[B.id]=Math.max(n.stars[B.id]||0,De),n.unlocked=Math.max(n.unlocked,Math.min(os.length,we+2)),Ct(),setTimeout(()=>Kt(`<h2>${k("Barda\u011Fa ula\u015Ft\u0131!")}</h2>
        <div class="stars">${[1,2,3].map(ht=>`<span class="${ht<=De?"on":""}">\u2605</span>`).join("")}</div>
        <p class="center">${ge?k("Y\u0131ld\u0131zlar: {a} / {b}",{a:Ae,b:ge}):""}</p>`,[...we+1<os.length?[[`\u25B6 ${k("Sonraki b\xF6l\xFCm")}`,"pri",()=>He(we+1)]]:[[k("Tebrikler! T\xFCm b\xF6l\xFCmler bitti."),"pri",()=>nn()]],[k("Bu b\xF6l\xFCmde kal"),"",()=>Je()],[k("B\xF6l\xFCmler"),"ghost",()=>nn()]],{dismiss:!1}),900)}else Dr(),Ft(H==="out"?k("Bilye panodan d\xFC\u015Ft\xFC. Kesikli \xE7izgi izledi\u011Fi yolu g\xF6steriyor."):k("Bilye tak\u0131ld\u0131. Par\xE7alar\u0131 biraz oynat."),2600),setTimeout(Je,900)}function S(H){st.forEach(ie=>ie.userData.sel.material.opacity=0),Ze=H,H&&(H.userData.sel.material.opacity=.35),Oe.classList.toggle("on",!!H),w()}function w(){if(!Ze)return;let H=new L;Ze.getWorldPosition(H),H.y+=.9,H.project(t),Oe.style.left=Math.min(i.w-110,Math.max(110,(H.x+1)/2*i.w))+"px",Oe.style.top=Math.max(70,(1-H.y)/2*i.h-30)+"px"}function C(H){if(!Ze)return;let ie=Ze.userData.p;if(Mt("tap"),H==="l")ie.a=(ie.a||0)+Xp;else if(H==="r")ie.a=(ie.a||0)-Xp;else if(H==="f")ie.flip=!ie.flip;else if(H==="x"){q(Ze);return}ie.a=((ie.a+180)%360+360)%360-180,E(Ze),ot(),Pe()}function q(H){let ie=st.indexOf(H);ie<0||(u.remove(H),st.splice(ie,1),Re.splice(Re.indexOf(H.userData.p),1),S(null),ot(),Xn(),Mt("drop"),Pe())}let Z=new on(new L(0,0,1),0),Y=new L;function ne(H,ie){return i.ray(t,H,ie).ray.intersectPlane(Z,Y)?{x:Y.x-r.position.x,y:Y.y-r.position.y}:null}function N(H,ie){let ge=1e9;for(let Ae of Gh(H)){let De=Ae.bx-Ae.ax,nt=Ae.by-Ae.ay,ht=De*De+nt*nt,xt=((ie.x-Ae.ax)*De+(ie.y-Ae.ay)*nt)/ht;xt=Math.max(0,Math.min(1,xt)),ge=Math.min(ge,Math.hypot(ie.x-Ae.ax-De*xt,ie.y-Ae.ay-nt*xt))}return ge}let z=H=>Math.round(H/Wp)*Wp,W=(H,ie)=>Math.max(.3,Math.min(ie-.3,H));function G(H){if(j==="result"){Je();return}if(j!=="edit")return;let ie=ne(H.x,H.y);if(!ie)return;if(we<0){if(Math.hypot(ie.x-B.start.x,ie.y-B.start.y)<.6){ze={kind:"start",ox:B.start.x-ie.x,oy:B.start.y-ie.y};return}if(Math.hypot(ie.x-B.cup.x,ie.y-B.cup.y-.3)<.7){ze={kind:"cup",ox:B.cup.x-ie.x,oy:B.cup.y-ie.y};return}}let ge=null,Ae=H.touch?.6:.4;for(let De of st){let nt=N(De.userData.p,ie);nt<Ae&&(Ae=nt,ge=De)}ge?(S(ge),ze={kind:"piece",m:ge,ox:ge.userData.p.x-ie.x,oy:ge.userData.p.y-ie.y,moved:0,sx:H.x,sy:H.y},Mt("pick")):S(null)}function K(H){if(!ze)return;let ie=ne(H.x,H.y);if(!ie)return;if(ze.kind==="start"){B.start.x=W(z(ie.x+ze.ox),B.w),B.start.y=W(z(ie.y+ze.oy),B.h),P.position.set(B.start.x,B.start.y,0);return}if(ze.kind==="cup"){B.cup.x=W(z(ie.x+ze.ox),B.w),B.cup.y=Math.max(0,Math.min(B.h-1,z(ie.y+ze.oy))),y.position.set(B.cup.x,B.cup.y,0);return}let ge=ze.m.userData.p;ze.moved=Math.max(ze.moved,Math.hypot(H.x-ze.sx,H.y-ze.sy)),ge.x=z(ie.x+ze.ox),ge.y=z(ie.y+ze.oy),E(ze.m),w(),re=!0}function se(H){if(!ze)return;let ie=ze;if(ze=null,ie.kind!=="piece"){ot();return}let ge=ie.m.userData.p;if(ge.x<-.6||ge.x>B.w+.6||ge.y<-.6||ge.y>B.h+.6){q(ie.m);return}ge.x=W(ge.x,B.w),ge.y=W(ge.y,B.h);let Ae=Qe.findIndex(De=>De.userData.p.type===ge.type&&Math.hypot(De.userData.p.x-ge.x,De.userData.p.y-ge.y)<1.3);if(Ae>=0){let De=Qe[Ae].userData.p;Object.assign(ge,{x:De.x,y:De.y,a:De.a,flip:!!De.flip}),u.remove(Qe[Ae]),Qe.splice(Ae,1),Wn(4),Fi(15)}else ie.moved>6&&Mt("drop");E(ie.m),w(),ot(),Pe()}function fe(H){Ze&&j==="edit"&&C(H.deltaY>0?"r":"l")}function D(H){let ie=H.key.toLowerCase();if(ie===" "||ie==="enter"){A();return}Ze&&(ie==="q"?C("l"):ie==="e"?C("r"):ie==="f"?C("f"):(ie==="delete"||ie==="backspace")&&C("x"))}function xe(H,ie){if(j!=="edit")return;if(Xe(H)<=0){Mt("no"),Ft(k("Bu par\xE7adan kalmad\u0131"));return}ie.preventDefault();let ge={type:H,x:B.w/2,y:B.h/2,a:0,flip:!1};Re.push(ge);let Ae=_(ge);u.add(Ae),st.push(Ae),S(Ae),Mt("pick");let De=ie.pointerType==="touch"?.9:0;ze={kind:"piece",m:Ae,ox:0,oy:De,moved:99,sx:0,sy:0};let nt=xt=>K({x:xt.clientX,y:xt.clientY}),ht=xt=>{removeEventListener("pointermove",nt),removeEventListener("pointerup",ht),removeEventListener("pointercancel",ht),se(xt),Xn()};addEventListener("pointermove",nt),addEventListener("pointerup",ht),addEventListener("pointercancel",ht),nt(ie),Xn()}function oe(){let H=zc[B.id];if(!H){Ft(k("Bu b\xF6l\xFCm i\xE7in ipucu yok"));return}if(pe>=H.length){Ft(k("T\xFCm ipu\xE7lar\u0131 g\xF6sterildi"));return}let ie=ve(H[pe++]);Wn(3),Ft(k("\u0130pucu: soluk par\xE7an\u0131n yerine bir {ad} koy",{ad:k(oo[ie.type].name).toLocaleLowerCase()}),2600)}function ve(H){if(Re.some(Ae=>Ae.type===H.type&&Math.hypot(Ae.x-H.x,Ae.y-H.y)<.3&&(Ae.a||0)===(H.a||0)))return H;let ie={...H,ghost:!0},ge=_(ie);return u.add(ge),Qe.push(ge),ie}let _e=!1,he=null;function Pe(){if(!_e||j==="menu"){de.classList.remove("on");return}let H=de.querySelector("p");if(j==="run"||j==="result"){de.classList.remove("on");return}de.classList.add("on"),Qe.length?(H.textContent=k("Alttaki par\xE7ay\u0131 parma\u011F\u0131nla tut ve panodaki soluk \u015Feklin \xFCst\xFCne s\xFCr\xFCkle. Yakla\u015F\u0131nca kendili\u011Finden oturur."),he=Qe[0].userData.p):(H.textContent=k("Harika! \u015Eimdi sa\u011F alttaki \u201CBilyeyi b\u0131rak\u201D d\xFC\u011Fmesine bas ve bilyenin yolunu izle."),he=null),wn()}function Ce(){let H=de.querySelector(".hand");if(!he||!de.classList.contains("on")){H.style.opacity=0;return}let ie=Se.querySelector(`[data-t=${he.type}]`);if(!ie)return;let ge=ie.getBoundingClientRect(),Ae=new L(he.x,he.y,0).project(t),De=(Ae.x+1)/2*i.w,nt=(1-Ae.y)/2*i.h,ht=ye%2.2/1.6,xt=Math.min(1,ht),dn=xt*xt*(3-2*xt),ls=ge.left+ge.width/2+(De-ge.left-ge.width/2)*dn,Us=ge.top+ge.height/2+(nt-ge.top-ge.height/2)*dn;H.style.opacity=ht>1.25?0:1,H.style.transform=`translate(${ls-14}px, ${Us-6}px)`}function it(){if(re=!1,j!=="edit"||!B){le.count=0;return}let H=we<0||we<4?12:2.5,ie=Vh(B,Re),ge=Wh(B),Ae=new pt,De=0,nt=0,ht=ge.x,xt=ge.y;for(;ge.state==="run"&&ge.t<H&&De<260;)Xh(ge,ie,B,Tn.dt),++nt%6===0&&Math.hypot(ge.x-ht,ge.y-xt)>.22&&(Ae.makeTranslation(ge.x,ge.y,0),le.setMatrixAt(De++,Ae),ht=ge.x,xt=ge.y);le.count=De,le.instanceMatrix.needsUpdate=!0,J.color.setHex(ge.state==="win"?8257434:9430015)}function Ke(){Re.splice(0),F(),ot(),Xn(),Q.visible=!1,Mt("drop")}function Vt(H){if(ye+=H,$.forEach((ge,Ae)=>{ge.rotation.y=ye*2+Ae}),y.userData.glow.material.opacity=.5+Math.sin(ye*3)*.2,Qe.forEach(ge=>ge.children[0].material.opacity=.45+Math.sin(ye*5)*.2),j==="run"&&ce){Ie+=H*qe;let ge=[],Ae=0;for(;Ie>=Tn.dt&&Ae<2400&&(Ie-=Tn.dt,Ae++,Xh(ce,Ye,B,Tn.dt,ge),Ae%24===0&&ce.path.push([ce.x,ce.y]),ce.state==="run"););let De=ce.x-Ee.position.x;Ap(Ee,De),Ee.position.set(ce.x,ce.y,0);for(let nt of ge)if(nt.type==="hit"&&As(Math.min(1,nt.p/8),nt.cup?"glass":nt.kind==="bounce"?"metal":"wood"),nt.type==="boost"&&(Rs(.7),d.emit(ce.x+r.position.x,ce.y+r.position.y,.3,12,{color:7320319,speed:3,size:.25})),nt.type==="star"){let ht=$[nt.i];ht.visible=!1,Wn(6+nt.i),d.emit(ht.position.x+r.position.x,ht.position.y+r.position.y,.3,30,{color:16765498,speed:4,size:.3})}En(Math.min(1,Math.hypot(ce.vx,ce.vy)/9)*(ce.still?0:1)),ce.state!=="run"&&x(ce.state)}d.update(H),Ze&&w(),me-=H,re&&me<=0&&j==="edit"&&(me=.06,it()),Ce();let ie=B&&j==="edit"&&we<3;if(ae.style.display=ie?"":"none",ie){let ge=(Ae,De,nt)=>{let ht=new L(De,nt,0).project(t);Ae.style.left=(ht.x+1)/2*i.w+"px",Ae.style.top=(1-ht.y)/2*i.h+"px"};ge(ae.children[0],B.start.x,B.start.y+.75),ge(ae.children[1],B.cup.x,B.cup.y+1.3)}}function Dt(H,ie){if(t.aspect=H/ie,t.updateProjectionMatrix(),d.setScale(ie),!B)return;let ge=70,Ae=112,De=(ie-ge-Ae)/ie,nt=B.w+1.4,ht=(B.h+1.4)/Math.max(.4,De),xt=Bi(t,nt,ht,t.aspect),dn=2*xt*Math.tan(is.degToRad(t.fov/2))/ie,ls=B.h/2-(Ae-ge)/2*dn;t.position.set(B.w/2,ls,xt),t.lookAt(B.w/2,ls,0),w()}function wn(){if(!B)return;let H=we<0?k("Serbest At\xF6lye"):`${we+1}. ${k(B.name)}`;Me.innerHTML=`<div class="pbar"><b>${H}</b>
      ${we>=0?`<span class="pst">${"\u2605".repeat(n.stars[B.id]||0)}${"\u2606".repeat(3-(n.stars[B.id]||0))}</span>`:""}</div>
      <div class="pact">
        ${we>=0?`<button class="rbtn" data-a="hint" aria-label="${k("\u0130pucu")}">\u{1F4A1}</button>`:""}
        <button class="rbtn" data-a="clear" aria-label="${k("Temizle")}">\u21BA</button>
        <button class="rbtn" data-a="fast" aria-label="${k("H\u0131z")}">${qe>1?"\u23E9":"\u25B7"}</button>
        <button class="rbtn go ${j==="run"?"stop":""} ${_e&&!Qe.length&&j==="edit"?"pulse":""}" data-a="go">${j==="run"?"\u25A0 "+k("Durdur"):"\u25B6 "+k("Bilyeyi b\u0131rak")}</button>
      </div>`,Me.querySelectorAll("[data-a]").forEach(ie=>ie.onclick=()=>{Mt("tap");let ge=ie.dataset.a;ge==="go"?A():ge==="hint"?oe():ge==="clear"?j==="edit"&&Ke():ge==="fast"&&(qe=qe>1?1:2.2,wn())})}function Xn(){B&&(Se.innerHTML=Object.keys(B.inv).map(H=>{let ie=Xe(H),ge=we<0;return`<button class="piece ${ie>0?"":"empty"}" data-t="${H}">${Zv[H]}<small>${k(oo[H].name)}</small>${ge?"":`<em>${ie}</em>`}</button>`}).join(""),Se.querySelectorAll("[data-t]").forEach(H=>H.onpointerdown=ie=>xe(H.dataset.t,ie)))}function nn(){j="menu",Gt(),S(null),Pe(),B||He(Math.min(n.unlocked-1,os.length-1)),j="menu";let H=os.map((nt,ht)=>{let xt=ht<n.unlocked,dn=n.stars[nt.id]||0;return`<button class="lv ${xt?"":"locked"}" data-i="${ht}" ${xt?"":"disabled"}><b>${xt?ht+1:"\u{1F512}"}</b><small>${xt?"\u2605".repeat(dn)+"\u2606".repeat(3-dn):""}</small><i>${xt?k(nt.name):""}</i></button>`}).join(""),ie=n.unlocked>=4,ge=Kt(`<h2>\u{1F3A2} ${k("Bilye Pisti")}</h2>
      <p class="lead center">${k("Par\xE7alar\u0131 panoya yerle\u015Ftir, bilyeyi b\u0131rak ve barda\u011Fa ula\u015Ft\u0131r. Y\u0131ld\u0131zlar\u0131 da toplarsan tam puan!")}</p>
      ${n.cur!==void 0&&n.cur!==null?`<button class="btn pri wide" data-k="resume">\u25B6 ${n.cur<0?k("Serbest at\xF6lyeye devam et"):k("{n}. b\xF6l\xFCme devam et",{n:n.cur+1})}</button>`:""}
      <div class="lvgrid pist">${H}</div>
      <button class="btn wide ${ie?"":"locked"}" data-k="sand" ${ie?"":"disabled"}>\u{1F6E0} ${k("Serbest At\xF6lye")} \xB7 ${ie?k("s\u0131n\u0131rs\u0131z par\xE7a, kendi pistini kur"):k("4. b\xF6l\xFCmde a\xE7\u0131l\u0131r")}</button>`,[[`\u2302 ${k("Ana men\xFC")}`,"ghost",()=>i.home()]],{wide:!0,dismiss:!1});ge.querySelectorAll("[data-i]").forEach(nt=>nt.onclick=()=>{Mt("tap"),Gt(),He(+nt.dataset.i)});let Ae=ge.querySelector("[data-k=resume]");Ae&&(Ae.onclick=()=>{Mt("tap"),Gt(),He(n.cur)});let De=ge.querySelector("[data-k=sand]");De&&ie&&(De.onclick=()=>{Mt("tap"),Gt(),He(-1)})}return{id:"pist",scene:e,camera:t,hud:Me,enter(){i.hud.appendChild(Me),i.hud.appendChild(Se),i.hud.appendChild(Oe),i.hud.appendChild(ae),i.hud.appendChild(de),ae.children[0].textContent=k("BA\u015ELANGI\xC7"),ae.children[1].textContent=k("HEDEF"),B=null,nn()},exit(){ot&&B&&ot(),Ct(),Me.remove(),Se.remove(),Oe.remove(),ae.remove(),de.remove(),En(0),Gt(),Ee&&(Ee.removeFromParent(),Ee=null),j="idle"},update:Vt,resize:Dt,down:G,move:K,up:se,wheel:fe,key:D,pause(){B&&ot(),Ct()},menu(){j==="run"&&Je(),nn()},relabel(){wn(),Xn(),j==="menu"&&nn()},debug:()=>({phase:j,lvIdx:we,placed:Re,ball:ce}),_test:{load:He,go:A,ghosts:()=>Qe.map(H=>({type:H.userData.p.type,x:H.userData.p.x,y:H.userData.p.y,a:H.userData.p.a})),previewWins:()=>J.color.getHex()===8257434,toScreen(H,ie){let ge=new L(H,ie,0).project(t);return{x:(ge.x+1)/2*i.w,y:(1-ge.y)/2*i.h}},placeSolution:()=>{Re.splice(0,Re.length,...(zc[B.id]||[]).map(H=>({...H}))),F(),ot(),Xn()}}}}dp();Cr(vt.data.settings.lang||lp());var Jv=navigator.deviceMemory&&navigator.deviceMemory<=3||/[?&]q=low/.test(location.search),Yh=vt.data.settings.lite??!!Jv;Ch();var Ns=Wt("#gl"),lo=Tp(Ns,Yh),Jp=wp(lo),qp=new ka,$p=new Te,Tt={renderer:lo,lite:Yh,hud:Wt("#hud"),w:innerWidth,h:innerHeight,aspect:innerWidth/innerHeight,ray(i,e,t){return $p.set(e/Tt.w*2-1,-(t/Tt.h)*2+1),qp.setFromCamera($p,i),qp},home:()=>co(),relabel:()=>{rt?rt.relabel&&rt.relabel():uo()}},an={scene:new Un,camera:new Bt(32,1,.1,100),balls:[]};{let i=an.scene;i.background=new Be(1314314),i.add(new Kn(16772829,2759184,.35));let e=new Ua(16769720,90,40,.5,.7,1.4);e.position.set(-3,12,6),e.castShadow=!0,e.shadow.mapSize.set(1024,1024),i.add(e);let t=new Ui(7317759,8,20);t.position.set(6,3,-4),i.add(t);let n=hn(512,512,(a,o,l)=>{let c=a.createRadialGradient(o/2,l/2,20,o/2,l/2,o/1.4);c.addColorStop(0,"#5a1420"),c.addColorStop(.6,"#2a070d"),c.addColorStop(1,"#0e0204"),a.fillStyle=c,a.fillRect(0,0,o,l);for(let u=0;u<2e4;u++)a.fillStyle=`rgba(${Math.random()<.5?"255,180,180":"0,0,0"},0.05)`,a.fillRect(Math.random()*o,Math.random()*l,1,1)}),s=new We(new Di(14,64),new yt({map:n,roughness:1,color:16777215}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,i.add(s),["gokkusagi","mavi","lav","galaksi","kirmizi","yesil","altin","opal","buz","celik","sari","mor"].forEach((a,o)=>{let l=o<3?.9:.5+Math.random()*.15,c=o*2.4,u=o<3?1.1+o*.4:2.4+o%4*.9,f=Ei(a,l);f.position.set(Math.cos(c)*u,l,Math.sin(c)*u-.5),i.add(f),an.balls.push({m:f,a:c,d:u,r:l,w:.03+Math.random()*.04})}),i.environment=Jp}var Ds={},Kv={misket:kh,sort:Hh,pist:qh},rt=null;function jv(i){return Ds[i]||(Ds[i]=Kv[i](Tt),Ds[i].scene.environment=Jp,Ds[i].resize(Tt.w,Tt.h)),Ds[i]}function Kp(i){ws(),rt&&rt.exit(),Gt(),rt=jv(i),vt.data.last=i,Jt(),Wt("#home").classList.remove("on"),Wt("#topbtns").classList.add("on"),rt.resize(Tt.w,Tt.h),rt.enter()}function co(){rt&&(rt.exit(),rt=null),Gt(),Wt("#topbtns").classList.remove("on"),uo(),Wt("#home").classList.add("on")}var Qv=(i,e)=>`--c1:${i};--c2:${e}`;function eM(i){let e=vt.data.modes;if(i==="misket"){let s=Object.keys(e.misket.wins||{}).length;return e.misket.match?k("Yar\u0131m kalan ma\xE7 var"):s?k("{n} / {m} rakip yenildi",{n:s,m:Ti.length}):k("Yeni")}if(i==="sort"){let s=e.sort.unlocked||1;return e.sort.cur?k("Seviye {n} yar\u0131m kald\u0131",{n:e.sort.cur.n||"\u267E"}):s>1?k("Seviye {n}",{n:s}):k("Yeni")}if(i==="classic")return k("Eski s\xFCr\xFCm, kayd\u0131 ayr\u0131");let t=e.pist.unlocked||1,n=Object.values(e.pist.stars||{}).reduce((s,r)=>s+r,0);return t>1||n?k("B\xF6l\xFCm {n} \xB7 {s} y\u0131ld\u0131z",{n:Math.min(t,os.length),s:n}):k("Yeni")}function uo(){let i=vt.data.last,e=(t,n,s,r)=>`<button class="modeCard ${i===t?"last":""}" data-m="${t}"><span class="ico">${r}</span><span><h3>${n}</h3><p>${s}</p><div class="pr">${i===t?"\u25B6 ":""}${eM(t)}</div></span></button>`;Wt("#home").innerHTML=`<div class="homeWrap">
    <div class="homeTitle"><h1>${k("Bilye At\xF6lyesi")}</h1><p>${k("\xDC\xE7 bilye oyunu, tek at\xF6lye")}</p></div>
    ${e("misket",k("Mahalle Misketi"),k("Ni\u015Fan al, fiskele, halkadaki bilyeleri d\u0131\u015Far\u0131 f\u0131rlat. Mahallenin \u015Fampiyonunu yen!"),`<span class="ball big" style="${Qv("#1c5fe0","#37b6ff")}"></span>`)}
    ${e("sort",k("Ayr\u0131\u015Ft\u0131rma At\xF6lyesi"),k("Banttan akan bilyeleri do\u011Fru kavanoza d\xFC\u015F\xFCr. H\u0131zlan, zincir yap, lavdan sak\u0131n!"),"\u{1FAD9}")}
    ${e("pist",k("Bilye Pisti"),k("Rampa, kavis, trambolin yerle\u015Ftir; bilyeyi barda\u011Fa ula\u015Ft\u0131r."),"\u{1F3A2}")}
    ${Rr?"":e("classic",k("\u0130lk Bilye At\xF6lyesi"),k("\u0130lk oyunun: bidondan akan bilyeleri banttan ayn\u0131 renkteki kutulara ay\u0131r."),'<img src="classic/icon-192.png" alt="" style="width:56px;height:56px;border-radius:14px">')}
    <div class="homeRow">
      <button class="btn" data-k="set">\u2699 ${k("Ayarlar")}</button>
      <button class="btn" data-k="lang">\u{1F310} ${ni()==="tr"?"English":"T\xFCrk\xE7e"}</button>
    </div>
    <p class="ver">${"v7"} \xB7 ${k("Her oyunun kayd\u0131 ayr\u0131 tutulur, kald\u0131\u011F\u0131n yerden devam edersin.")}</p></div>`,Wt("#home").querySelectorAll("[data-m]").forEach(t=>t.onclick=()=>{if(ws(),Mt("tap"),t.dataset.m==="classic"){vt.data.last="classic",Ct(),location.href="classic/";return}Kp(t.dataset.m)}),Wt("#home [data-k=set]").onclick=()=>{ws(),Mt("tap"),to(Tt,uo)},Wt("#home [data-k=lang]").onclick=()=>{Mt("tap"),Cr(ni()==="tr"?"en":"tr"),vt.data.settings.lang=ni(),Ct(),uo()}}Wt("#bHome").onclick=()=>{if(Mt("tap"),!!rt){if(Dc()){rt.menu?rt.menu():co();return}rt.menu?rt.menu():co()}};var Br=null;Ns.addEventListener("pointerdown",i=>{if(ws(),!(Br!==null&&i.pointerId!==Br)){Br=i.pointerId;try{Ns.setPointerCapture(i.pointerId)}catch{}rt&&!Dc()&&rt.down({x:i.clientX,y:i.clientY,touch:i.pointerType==="touch"})}});Ns.addEventListener("pointermove",i=>{i.pointerId===Br&&rt&&rt.move({x:i.clientX,y:i.clientY})});var jp=i=>{i.pointerId===Br&&(Br=null,rt&&rt.up({x:i.clientX,y:i.clientY}))};Ns.addEventListener("pointerup",jp);Ns.addEventListener("pointercancel",jp);Ns.addEventListener("wheel",i=>{i.preventDefault(),rt&&rt.wheel&&rt.wheel(i)},{passive:!1});addEventListener("keydown",i=>{if(!(i.target&&i.target.tagName==="TEXTAREA")){if(ws(),i.key==="Escape"){rt&&(rt.menu?rt.menu():co());return}rt&&!Dc()&&rt.key&&rt.key(i)}});addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault(),{passive:!1});addEventListener("pointerdown",()=>{ws(),Ec(!0)},{once:!1,passive:!0});function Zh(){Tt.w=innerWidth,Tt.h=innerHeight,Tt.aspect=Tt.w/Tt.h,lo.setSize(Tt.w,Tt.h,!1),an.camera.aspect=Tt.aspect,an.camera.updateProjectionMatrix(),Tt.aspect<.8?(an.camera.setViewOffset(Tt.w,Tt.h*1.75,0,Tt.h*.66,Tt.w,Tt.h),an.dist=Bi(an.camera,9,7,Tt.aspect)*.95):(an.camera.clearViewOffset(),an.dist=Bi(an.camera,9,7,Tt.aspect)),rt&&rt.resize(Tt.w,Tt.h);for(let i of Object.values(Ds))i!==rt&&i.resize(Tt.w,Tt.h)}new ResizeObserver(Zh).observe(document.body);addEventListener("orientationchange",()=>setTimeout(Zh,200));Zh();document.addEventListener("visibilitychange",()=>{document.hidden?(rt&&rt.pause&&rt.pause(),Ct(),Ec(!1),En(0)):Ec(!0)});addEventListener("pagehide",()=>{rt&&rt.pause&&rt.pause(),Ct()});var Yp=performance.now(),Zp=0,Qp=0,Gc=0,$h=0;function em(i){requestAnimationFrame(em);let e=Math.min(.05,(i-Yp)/1e3);if(Yp=i,Qp++,Gc+=e,$h++,Gc>1&&(window.__ba.fps=Math.round($h/Gc),Gc=0,$h=0),vp(),rt){rt.update(e),lo.render(rt.scene,rt.camera);return}Zp+=e;let t=an.camera,n=Zp*.06;an.icon?(t.position.set(.05,8.6,2.4),t.lookAt(.05,.6,-.75)):(t.position.set(Math.sin(n)*an.dist*.55,an.dist*.62,Math.cos(n)*an.dist*.55),t.lookAt(0,.6,0));for(let s of an.balls)s.m.userData.spin.rotation.y+=s.w*e*6;lo.render(an.scene,t)}window.__ba={app:Tt,S:vt,modes:Ds,menu:an,open:Kp,home:co,tick(i=60,e=1/60){for(let t=0;t<i;t++)rt&&rt.update(e)},get current(){return rt},frames:()=>Qp,fps:0,miss:cp,version:"v7"};uo();Wt("#home").classList.add("on");requestAnimationFrame(em);setTimeout(()=>Wt("#boot").classList.add("off"),250);Lp()?setTimeout(()=>Ih(Tt,()=>{}),600):bc()&&!Uc()&&Date.now()-(vt.data.backupAt||0)>7*864e5&&(so||Math.random()<.3)&&setTimeout(()=>Kt(`<h2>\u{1F4BE} ${k("Kayd\u0131n\u0131 yedekle")}</h2><p class="lead">${k("Taray\u0131c\u0131 bir s\xFCre kullan\u0131lmayan sitelerin kay\u0131tlar\u0131n\u0131 silebilir. Kay\u0131t kodunu kopyalay\u0131p bir yere not etmen iyi olur.")}</p>`,[[k("Kayd\u0131m\u0131 kopyala"),"pri",()=>{Nc()}],[k("Sonra"),"ghost",()=>{vt.data.backupAt=Date.now()-4*864e5,Jt()}]]),900);try{!Rr&&"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{})}catch{}rp&&console.log("Bilye At\xF6lyesi","v7",Yh?"hafif":"tam");})();
