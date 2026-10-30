// 3D sahne: zemin, su, yollar, binalar (parça parça birleştirilmiş), ağaçlar, trafik, efektler
import * as THREE from '../lib/three.module.js';
import { TILE, TILES, WORLD, WH, ROADS, ZONES, SVC } from './data.js';
import { S, R, segGeo, nodeHW, degree, gi, tileOf, hash, findPath, segBetween, clamp, isWater, trimAt, SIDEW, ctlOf, isOneWay, level } from './world.js';
import { MAT, nightMats, initMaterials, roadTexture, grassTexture, softTexture, labelTexture } from './tex.js';
import { MB, toGeometry, buildModel, Ctx } from './models.js';

export const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.domElement.id = 'cv';
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.type = THREE.PCFShadowMap;
export const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa9d3ef);
scene.fog = new THREE.Fog(0xa9d3ef, 80, 220);
export const camera = new THREE.PerspectiveCamera(40, 1, .3, 600);
const hemi = new THREE.HemisphereLight(0xdcefff, 0x4d6b35, 1.1); scene.add(hemi);
const sun = new THREE.DirectionalLight(0xfff0d8, 2.6);
sun.castShadow = true; sun.shadow.bias = -0.0004; sun.shadow.normalBias = .04; sun.shadow.mapSize.set(2048, 2048);
scene.add(sun, sun.target);

initMaterials();
// ---------- arazi yüksekliği (gölgelendiricide yer değiştirme) ----------
const HN = 300, hData = new Uint8Array(HN * HN);
export const hTex = new THREE.DataTexture(hData, HN, HN, THREE.RedFormat, THREE.UnsignedByteType);
hTex.magFilter = hTex.minFilter = THREE.LinearFilter; hTex.needsUpdate = true;
const HU = { value: hTex };
export const hf = (x, z) => R.hf ? R.hf(x, z) : 0;
function updHeightTex() { for (let zi = 0; zi < HN; zi++) for (let xi = 0; xi < HN; xi++) hData[zi * HN + xi] = Math.min(255, Math.round(hf(xi - 149.5, zi - 149.5) / 10 * 255)); hTex.needsUpdate = true; }
const HFUN = 'uniform sampler2D uHMap;\nfloat hAtW(vec2 p){ vec2 uv=(p+150.)/300.; if(uv.x<0.||uv.y<0.||uv.x>1.||uv.y>1.) return 0.; return texture2D(uHMap,uv).r*10.; }\n';
const PROJ = `vec4 dwp = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
dwp = instanceMatrix * dwp;
#endif
dwp = modelMatrix * dwp; dwp.y += hAtW(dwp.xz);
vec4 mvPosition = viewMatrix * dwp;
gl_Position = projectionMatrix * mvPosition;`;
const WPOS = `#include <worldpos_vertex>
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
worldPosition.y += hAtW(worldPosition.xz);
#endif`;
export function disp(m) {
  if (!m || m.userData.disp || m.isSpriteMaterial) return m; m.userData.disp = 1;
  m.onBeforeCompile = sh => { sh.uniforms.uHMap = HU; sh.vertexShader = HFUN + sh.vertexShader.replace('#include <project_vertex>', PROJ).replace('#include <worldpos_vertex>', WPOS); };
  m.customProgramCacheKey = () => 'disp1'; m.needsUpdate = true; return m;
}
const DEPTH = disp(new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking }));
for (const k in MAT) disp(MAT[k].m);
const M = k => (MAT[k] ? MAT[k].m : MAT.concrete.m);

// ---------- zemin ----------
// ---------- arazi (yumuşak kıyılı) ve su ----------
const grayTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 512; const g = c.getContext('2d'); g.fillStyle = '#d8d8d8'; g.fillRect(0, 0, 512, 512); let sd = 7; const r = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 4294967296; };
  for (let k = 0; k < 50; k++) { const x = r() * 512, y = r() * 512, rad = 20 + r() * 70, gr = g.createRadialGradient(x, y, 0, x, y, rad); gr.addColorStop(0, r() < .5 ? 'rgba(255,255,255,.18)' : 'rgba(0,0,0,.12)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - rad, y - rad, rad * 2, rad * 2); }
  for (let k = 0; k < 9000; k++) { const v = 190 + r() * 60 | 0; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(r() * 512, r() * 512, 2, 2); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; t.colorSpace = THREE.SRGBColorSpace; return t; })();
const GREEN = new THREE.Color('#7fb455'), SAND = new THREE.Color('#e3cf9a'), WETS = new THREE.Color('#b59d6c'), MUD = new THREE.Color('#5e5638'), DEEP = new THREE.Color('#3c4a3c');
const terrMat = new THREE.MeshStandardMaterial({ map: grayTex, vertexColors: true, roughness: 1 });
grayTex.repeat.set(1, 1);
const outerMat = new THREE.MeshStandardMaterial({ map: grayTex, color: GREEN, roughness: 1 });
const TW = 300, TS = 200; // arazi örgüsü boyu ve bölme sayısı (1 birim)
let terrMesh = null, outerGroup = new THREE.Group(); scene.add(outerGroup);
export const WATER_Y = -.07;
// gökyüzü yansıması için küp doku
const skyCube = (() => { const faces = []; for (let i = 0; i < 6; i++) { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createLinearGradient(0, 0, 0, 64); if (i === 2) { g.fillStyle = '#8ec5ec'; g.fillRect(0, 0, 64, 64); } else if (i === 3) { g.fillStyle = '#5d7a8a'; g.fillRect(0, 0, 64, 64); } else { gr.addColorStop(0, '#7db9e8'); gr.addColorStop(.55, '#cfe6f5'); gr.addColorStop(1, '#8fa8a0'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); } faces.push(c); } const t = new THREE.CubeTexture(faces); t.needsUpdate = true; t.colorSpace = THREE.SRGBColorSpace; return t; })();
// dalga normal haritası
const waveNormal = (() => {
  const N = 256, h = new Float32Array(N * N); let sd = 3; const r = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 4294967296; };
  const waves = []; for (let k = 0; k < 14; k++) waves.push([(1 + (r() * 6 | 0)) * (r() < .5 ? -1 : 1), (1 + (r() * 6 | 0)) * (r() < .5 ? -1 : 1), r() * 6.28, .3 + r() * .7]);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { let v = 0; for (const [a, b, p, A] of waves) v += Math.sin((a * x + b * y) / N * 6.283 + p) * A / Math.hypot(a, b); h[y * N + x] = v; }
  const c = document.createElement('canvas'); c.width = c.height = N; const g = c.getContext('2d'), im = g.createImageData(N, N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const dx = h[y * N + (x + 1) % N] - h[y * N + (x - 1 + N) % N], dy = h[((y + 1) % N) * N + x] - h[((y - 1 + N) % N) * N + x]; const nx = -dx * 2.5, ny = -dy * 2.5, nz = 1, l = Math.hypot(nx, ny, nz), i = (y * N + x) * 4; im.data[i] = (nx / l * .5 + .5) * 255; im.data[i + 1] = (ny / l * .5 + .5) * 255; im.data[i + 2] = (nz / l * .5 + .5) * 255; im.data[i + 3] = 255; }
  g.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(90, 90); return t;
})();
const waterMat = new THREE.MeshStandardMaterial({ color: 0x2f6f86, roughness: .06, metalness: .1, transparent: true, opacity: .82, normalMap: waveNormal, normalScale: new THREE.Vector2(.35, .35), envMap: skyCube, envMapIntensity: .9, depthWrite: false });
const wmData = new Uint8Array(300 * 300).fill(255);
const wmTex = new THREE.DataTexture(wmData, 300, 300, THREE.RedFormat, THREE.UnsignedByteType); wmTex.magFilter = wmTex.minFilter = THREE.LinearFilter; wmTex.needsUpdate = true;
waterMat.onBeforeCompile = sh => {
  sh.uniforms.uWMask = { value: wmTex };
  sh.vertexShader = 'varying vec2 vWxz;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nvWxz = (modelMatrix * vec4(transformed, 1.0)).xz;');
  sh.fragmentShader = 'uniform sampler2D uWMask; varying vec2 vWxz;\n' + sh.fragmentShader.replace('void main() {', 'void main() {\n vec2 wuv = (vWxz + 150.) / 300.; if (wuv.x > 0. && wuv.y > 0. && wuv.x < 1. && wuv.y < 1. && texture2D(uWMask, wuv).r < .5) discard;');
};
waterMat.customProgramCacheKey = () => 'water1';
const waterPlane = new THREE.Mesh(new THREE.PlaneGeometry(900, 900).rotateX(-Math.PI / 2), waterMat);
waterPlane.position.y = WATER_Y; waterPlane.renderOrder = 1; waterPlane.userData.noDisp = 1; scene.add(waterPlane);
const sandMat = new THREE.MeshStandardMaterial({ color: 0xcfba86, roughness: 1 });
const seabed = new THREE.Mesh(new THREE.PlaneGeometry(900, 900).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x3e5a52, roughness: 1 }));
seabed.position.y = -.9; seabed.userData.noDisp = 1; scene.add(seabed);
const rockIM = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(.18, 0), new THREE.MeshStandardMaterial({ color: 0x8b8a84, roughness: .9, flatShading: true }), 900);
rockIM.castShadow = true; rockIM.receiveShadow = true; rockIM.count = 0; scene.add(rockIM);
function heightAt(f) { // f: su alanı değeri -> arazi yüksekliği
  if (f >= .6) return 0;
  if (f >= 0) return -.05 * (1 - f / .6);
  return Math.max(-.85, -.05 + f * .32);
}
export function buildWater(sea) {
  if (terrMesh) { scene.remove(terrMesh); terrMesh.geometry.dispose(); }
  updHeightTex();
  for (let zi = 0; zi < 300; zi++) for (let xi = 0; xi < 300; xi++) wmData[zi * 300 + xi] = R.wf && R.wf(xi - 149.5, zi - 149.5) < 1.2 ? 255 : 0; wmTex.needsUpdate = true;
  const g = new THREE.PlaneGeometry(TW, TW, TS, TS).rotateX(-Math.PI / 2);
  const P = g.attributes.position, col = new Float32Array(P.count * 3), uv = g.attributes.uv, c = new THREE.Color();
  for (let i = 0; i < P.count; i++) {
    const x = P.getX(i), z = P.getZ(i), f = R.wf ? R.wf(x, z) : 9;
    const y = heightAt(f) + hf(x, z); P.setY(i, y);
    if (f > 1.6) c.copy(GREEN);
    else if (f > .9) c.copy(SAND).lerp(GREEN, (f - .9) / .7);
    else if (f > .15) c.copy(SAND);
    else if (f > -.35) c.copy(WETS).lerp(SAND, (f + .35) / .5);
    else c.copy(MUD).lerp(DEEP, clamp((-f - .35) / 2.5, 0, 1));
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
    uv.setXY(i, x / 6, z / 6);
  }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.computeVertexNormals();
  baseY = Float32Array.from({ length: P.count }, (_, i) => P.getY(i));
  terrMesh = new THREE.Mesh(g, terrMat); terrMesh.receiveShadow = true; terrMesh.userData.noDisp = 1; scene.add(terrMesh); patchT = 0;
  // dış halka (arazi örgüsünün dışı)
  for (const c2 of [...outerGroup.children]) { outerGroup.remove(c2); c2.geometry.dispose(); }
  const H = TW / 2, F = 450;
  const rect = (x0, z0, x1, z1) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2), outerMat); m.position.set((x0 + x1) / 2, -.002, (z0 + z1) / 2); m.receiveShadow = true; m.userData.noDisp = 1; m.material.map.repeat.set(1, 1); outerGroup.add(m); };
  rect(-F, -F, F, -H); rect(-F, -H, -H, sea ? WH - 25 : H); rect(H, -H, F, sea ? WH - 25 : H); if (!sea) rect(-F, H, F, F);
  // kıyı taşları
  let n = 0; let sd = 11; const r = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 4294967296; };
  for (let k = 0; k < 30000 && n < 900; k++) {
    const x = (r() - .5) * WORLD * 1.2, z = (r() - .5) * WORLD * 1.2, f = R.wf ? R.wf(x, z) : 9;
    if (f < -.25 || f > .35 || r() < .6) continue;
    _q.setFromEuler(new THREE.Euler(r() * 3, r() * 3, r() * 3)); const sc = .5 + r() * 1.3;
    _mt.compose(_p.set(x, heightAt(f) + .02, z), _q, _s.set(sc, sc * .6, sc)); rockIM.setMatrixAt(n++, _mt);
  }
  _s.set(1, 1, 1); rockIM.count = n; rockIM.instanceMatrix.needsUpdate = true; rockIM.computeBoundingSphere();
  seabed.visible = !!sea;
}
export function buildSea() { }
let baseY = null, carved = false;
export function carveTerrain() {
  if (!terrMesh || !baseY) return;
  const P = terrMesh.geometry.attributes.position, U = [...R.segs.values()].filter(s => (R.nodes.get(s.a).h || 0) < 0 || (R.nodes.get(s.b).h || 0) < 0);
  if (!U.length && !carved) return;
  for (let i = 0; i < P.count; i++) P.setY(i, baseY[i]);
  const N1 = TS + 1, H0 = TW / 2;
  for (const s of U) {
    const g = segGeo(s.id), pad = g.hw + 1.2;
    const SP = TW / TS, x0 = Math.floor((Math.min(g.ax, g.bx) - pad + H0) / SP), x1 = Math.ceil((Math.max(g.ax, g.bx) + pad + H0) / SP), z0 = Math.floor((Math.min(g.az, g.bz) - pad + H0) / SP), z1 = Math.ceil((Math.max(g.az, g.bz) + pad + H0) / SP);
    for (let zi = Math.max(0, z0); zi <= Math.min(TS, z1); zi++) for (let xi = Math.max(0, x0); xi <= Math.min(TS, x1); xi++) {
      const x = xi * SP - H0, z = zi * SP - H0; let t = (x - g.ax) * g.ux + (z - g.az) * g.uz; t = clamp(t, 0, g.L);
      const d = Math.hypot(x - (g.ax + g.ux * t), z - (g.az + g.uz * t)); if (d > pad) continue;
      const h = g.ha + (g.hb - g.ha) * t / g.L; if (h >= -.02) continue;
      // PlaneGeometry satır sırası: z artan
      const i = zi * N1 + xi, hy = hf(x, z) + h - .03; if (i < P.count && hy < P.getY(i)) P.setY(i, hy);
    }
  }
  P.needsUpdate = true; terrMesh.geometry.computeVertexNormals(); carved = U.length > 0;
}
{
  const mm = new THREE.MeshStandardMaterial({ color: 0x5f7f68, roughness: 1, flatShading: true, fog: false });
  const snow = new THREE.MeshStandardMaterial({ color: 0xf4f6f8, roughness: 1, flatShading: true, fog: false });
  const geo = new THREE.ConeGeometry(1, 1, 7, 1);
  let sd = 99; const r = () => { sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0; return sd / 4294967296; };
  for (let k = 0; k < 46; k++) {
    const a = k / 46 * Math.PI * 2 + r() * .1; if (Math.sin(a) > .55) continue; // güneyde deniz
    const R0 = 230 + r() * 50, h = 28 + r() * 40, w = 35 + r() * 30;
    const m = new THREE.Mesh(geo, mm); m.userData.noDisp = 1; m.scale.set(w, h, w * (.8 + r() * .4)); m.position.set(Math.cos(a) * R0, h / 2 - 2, Math.sin(a) * R0); m.rotation.y = r() * 6; scene.add(m);
    if (h > 50) { const s2 = new THREE.Mesh(geo, snow); s2.userData.noDisp = 1; s2.scale.set(w * .28, h * .28, w * .28); s2.position.set(m.position.x, h - h * .14 - 2, m.position.z); s2.rotation.y = m.rotation.y; scene.add(s2); }
  }
}

// ---------- yollar ----------
const roadMats = {}; for (const t of Object.keys(ROADS)) roadMats[t] = new THREE.MeshStandardMaterial({ map: roadTexture(t), roughness: .92, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
const discMat = new THREE.MeshStandardMaterial({ color: 0x3e4147, roughness: .92, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
const dirtDiscMat = new THREE.MeshStandardMaterial({ color: 0x9b7b55, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
const roadGroup = new THREE.Group(); scene.add(roadGroup);
const ROADY = { dirt: .02, oneway: .021, street: .022, avenue: .024, highway: .026 };
const lampGeo = new THREE.CylinderGeometry(.018, .024, .7, 5).translate(0, .35, 0);
const lampHeadGeo = new THREE.BoxGeometry(.18, .03, .06).translate(.07, .7, 0);
const lampPole = new THREE.InstancedMesh(lampGeo, new THREE.MeshStandardMaterial({ color: 0x3a3f45, metalness: .5, roughness: .5 }), 3000);
const lampHead = new THREE.InstancedMesh(lampHeadGeo, M('lamp'), 3000);
lampPole.castShadow = true; lampPole.count = lampHead.count = 0; scene.add(lampPole, lampHead);
const _mt = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _Y = new THREE.Vector3(0, 1, 0), _c = new THREE.Color();
const curbMat = new THREE.MeshStandardMaterial({ color: 0xbdb8ad, roughness: .95, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
const zebraMat = new THREE.MeshStandardMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = 128; c.height = 32; const g = c.getContext('2d'); g.clearRect(0, 0, 128, 32); g.fillStyle = 'rgba(245,245,240,.95)'; for (let x = 4; x < 128; x += 16) g.fillRect(x, 0, 9, 32); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; })(), transparent: true, roughness: .9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, depthWrite: false });
const arrowMat = new THREE.MeshStandardMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 128; const g = c.getContext('2d'); g.fillStyle = 'rgba(245,245,240,.95)'; g.beginPath(); g.moveTo(32, 6); g.lineTo(6, 52); g.lineTo(22, 52); g.lineTo(22, 122); g.lineTo(42, 122); g.lineTo(42, 52); g.lineTo(58, 52); g.closePath(); g.fill(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
const stopMat = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: .9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
function triUp(arr, a, b, c, y) { // yukarı bakan üçgen
  const cr = (b[1] - a[1]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[1] - a[1]);
  if (cr >= 0) arr.push(a[0], y, a[1], b[0], y, b[1], c[0], y, c[1]); else arr.push(a[0], y, a[1], c[0], y, c[1], b[0], y, b[1]);
}
function quadUV(o, P, UV, y) { // P: 4 köşe, yukarı bakacak şekilde sırala; y sayı ya da köşe başına dizi
  const cr = (P[1][1] - P[0][1]) * (P[2][0] - P[0][0]) - (P[1][0] - P[0][0]) * (P[2][1] - P[0][1]);
  const ord = cr >= 0 ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2];
  for (const q of ord) { o.p.push(P[q][0], Array.isArray(y) ? y[q] : y, P[q][1]); o.n.push(0, 1, 0); o.u.push(UV[q][0], UV[q][1]); }
}
// köprü süslemeleri: asma, eğik askılı, kemer
const _up = new THREE.Vector3(0, 1, 0);
function rod(c, key, p1, p2, r) { // yerel koordinatlarda iki nokta arası çubuk
  const d = new THREE.Vector3(p2[0] - p1[0], p2[1] - p1[1], p2[2] - p1[2]), L = d.length(); if (L < 1e-3) return;
  const g = new THREE.CylinderGeometry(r, r, L, 6).toNonIndexed();
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(_up, d.normalize()));
  g.translate((p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2, (p1[2] + p2[2]) / 2);
  c.geo(key, g, 0, 0, 0);
}
function bridgeDecor(c, len, y, hw, style) { // c: köprü ortasında, z ekseni yol boyunca
  const h0 = -len / 2, h1 = len / 2, X = hw + .12;
  if (style === 'susp') {
    const tz = [h0 + len * .22, h1 - len * .22], top = y + 2.4 + len * .03;
    for (const z of tz) { for (const sx of [X, -X]) c.box('concrete', 'concrete', sx, y - .2, z, .2, top - y + .2, .22); c.box('concrete', 'concrete', 0, top - .15, z, X * 2 + .2, .16, .2); c.box('concrete', 'concrete', 0, y + .9, z, X * 2 + .2, .12, .18); }
    for (const sx of [X, -X]) {
      const pts = []; const N = 24;
      for (let i = 0; i <= N; i++) { const z = h0 + len * i / N; let yy;
        if (z < tz[0]) yy = y + .15 + (top - y - .15) * ((z - h0) / (tz[0] - h0)) ** 1.3;
        else if (z > tz[1]) yy = y + .15 + (top - y - .15) * ((h1 - z) / (h1 - tz[1])) ** 1.3;
        else { const m = (z - (tz[0] + tz[1]) / 2) / ((tz[1] - tz[0]) / 2); yy = y + .45 + (top - y - .45) * m * m; }
        pts.push([sx, yy, z]); }
      for (let i = 0; i < N; i++) rod(c, 'metal_d', pts[i], pts[i + 1], .035);
      for (let i = 1; i < N; i++) if (pts[i][1] - y > .25) rod(c, 'metal', [sx, y + .05, pts[i][2]], pts[i], .01);
    }
  } else if (style === 'stay') {
    const top = y + 2.6 + len * .04;
    for (const sx of [X, -X]) rod(c, 'white', [sx * 1.4, y - .2, 0], [0.0001 * sx, top, 0], .1);
    c.box('white', 'white', 0, top - .05, 0, .3, .35, .3);
    for (const sx of [X, -X]) for (let k = 1; k <= 8; k++) for (const dz of [1, -1]) { const z = dz * (len / 2 - .4) * k / 8; rod(c, 'metal', [sx * .2, top - .1 - k * .06, 0], [sx, y + .05, z], .012); }
  } else if (style === 'arch') {
    const top = y + 1.6 + len * .05, N = 20;
    for (const sx of [X, -X]) {
      let prev = null;
      for (let i = 0; i <= N; i++) { const f = i / N, z = h0 + .2 + (len - .4) * f, yy = y - .3 + (top - y + .3) * 4 * f * (1 - f), p = [sx, yy, z]; if (prev) rod(c, 'red', prev, p, .06); prev = p; if (i > 0 && i < N && yy > y + .1) rod(c, 'metal', [sx, y + .05, z], p, .012); }
    }
    for (let i = 3; i < N - 2; i += 3) { const f = i / N, z = h0 + .2 + (len - .4) * f, yy = y - .3 + (top - y + .3) * 4 * f * (1 - f); if (yy > y + .9) c.box('red', 'red', 0, yy - .04, z, X * 2, .06, .06); }
  }
}
export function buildRoads() {
  for (const m of [discMat, dirtDiscMat, curbMat, zebraMat, arrowMat, stopMat, ...Object.values(roadMats)]) disp(m);
  for (const c of [...roadGroup.children]) { roadGroup.remove(c); c.geometry.dispose(); }
  const per = {}, disc = [], dirtDisc = [], curbs = [], stops = [], zebra = { p: [], n: [], u: [] }, arrows = { p: [], n: [], u: [] }, extra = new Map();
  let ln = 0;
  const ex = (x, z, a) => new Ctx(x, z, a, extra);
  for (const s of R.segs.values()) {
    const g = segGeo(s.id), rt = ROADS[s.t], hw = g.hw, y = ROADY[s.t];
    const arr = per[s.t] || (per[s.t] = { p: [], n: [], u: [] });
    const ta = trimAt(s.a, s.id), tb = trimAt(s.b, s.id);
    const s0 = ta, s1 = g.L - tb;
    const at = t => [g.ax + g.ux * t, g.az + g.uz * t];
    const sw = SIDEW[s.t] * rt.w, ah = hw - sw, ang = Math.atan2(g.ux, g.uz);
    const hAt = t => g.ha + (g.hb - g.ha) * clamp(t / g.L, 0, 1), elev = g.ha !== 0 || g.hb !== 0;
    if (s1 - s0 > .02) {
      const A = at(s0), B = at(s1), nx = g.nx, nz = g.nz, ya = y + hAt(s0), yb = y + hAt(s1);
      const nseg = Math.max(1, Math.ceil((s1 - s0) / 1));
      for (let k = 0; k < nseg; k++) {
        const t0 = s0 + (s1 - s0) * k / nseg, t1 = s0 + (s1 - s0) * (k + 1) / nseg, P0 = at(t0), P1 = at(t1), y0 = y + hAt(t0), y1 = y + hAt(t1);
        quadUV(arr, [[P0[0] + nx * hw, P0[1] + nz * hw], [P0[0] - nx * hw, P0[1] - nz * hw], [P1[0] - nx * hw, P1[1] - nz * hw], [P1[0] + nx * hw, P1[1] + nz * hw]], [[0, t0 / rt.w], [1, t0 / rt.w], [1, t1 / rt.w], [0, t1 / rt.w]], [y0, y0, y1, y1]);
      }
    }
    if (elev) {
      // köprü tabliyesi, korkuluklar ve ayaklar
      const step = .5;
      for (let t = 0; t < g.L; t += step) {
        const t1 = Math.min(g.L, t + step), tm = (t + t1) / 2, h = hAt(tm), P0 = at(tm);
        if (h < .04) continue;
        const c = ex(P0[0], P0[1], ang);
        c.box('concrete_d', 'concrete', 0, h - .16, 0, hw * 2 + .14, .17, t1 - t + .02);
        c.box('concrete', 'concrete', hw + .04, h, 0, .06, .1, t1 - t + .02); c.box('concrete', 'concrete', -hw - .04, h, 0, .06, .1, t1 - t + .02);
      }
      for (let t = 0; t < g.L; t += .5) { // alt geçit istinat duvarları
        const t1 = Math.min(g.L, t + .5), tm = (t + t1) / 2, h = hAt(tm); if (h > -.04) continue;
        const P0 = at(tm), c = ex(P0[0], P0[1], ang);
        for (const sd of [1, -1]) { c.box('concrete', 'concrete', sd * (hw + .07), h - .02, 0, .12, -h + .1, t1 - t + .02); c.box('metal_d', null, sd * (hw + .1), .08, 0, .03, .1, t1 - t + .02); c.flat('grass', sd * (hw + .13 + .7), .012, 0, 1.4, t1 - t + .02); }
        c.box('concrete_d', null, 0, h - .25, 0, hw * 2 + .1, .22, t1 - t + .02);
      }
      if (s.bs && s.bs !== 'beam' && g.ha > .5 && g.hb > .5 && s1 - s0 > 4) { const M2 = at((s0 + s1) / 2); bridgeDecor(ex(M2[0], M2[1], ang), s1 - s0, g.ha, hw, s.bs); }
      for (let t = 2; t < g.L - .5; t += 3.2) { const h = hAt(t); if (h < .45) continue; if (s.bs && s.bs !== 'beam' && h > .5) continue; const P0 = at(t), c = ex(P0[0], P0[1], ang); if (hw > 1.1) { c.box('concrete', null, hw * .5, 0, 0, .28, h - .16, .3); c.box('concrete', null, -hw * .5, 0, 0, .28, h - .16, .3); } else c.box('concrete', null, 0, 0, 0, .35, h - .16, .3); c.box('concrete_d', 'concrete_d', 0, h - .28, 0, hw * 2, .12, .34); }
    }
    // kavşak ağzı: yaya geçidi, dur çizgisi, trafik ışığı
    if (s.t !== 'highway' && !elev) for (const [nid, t0, dir] of [[s.a, ta, 1], [s.b, g.L - tb, -1]]) {
      const J = R.junc.get(nid); if (!J || J.n < 3) continue;
      const ctl = ctlOf(nid);
      if (s.t === 'dirt' && ctl !== 'stop') continue;
      if (s1 - s0 < 1.2) continue;
      const c = t0 + dir * .32, l = .3, C = at(c);
      const P = [[C[0] + g.nx * ah - g.ux * l / 2, C[1] + g.nz * ah - g.uz * l / 2], [C[0] - g.nx * ah - g.ux * l / 2, C[1] - g.nz * ah - g.uz * l / 2], [C[0] - g.nx * ah + g.ux * l / 2, C[1] - g.nz * ah + g.uz * l / 2], [C[0] + g.nx * ah + g.ux * l / 2, C[1] + g.nz * ah + g.uz * l / 2]];
      const rep = ah * 2 / .45; if (s.t !== 'dirt') quadUV(zebra, P, [[0, 0], [rep, 0], [rep, 1], [0, 1]], .034);
      if (ROADS[s.t].oneway && dir > 0) { /* tek yönde çıkış ağzına dur çizgisi koyma */ }
      // dur çizgisi: düğüme doğru gelen şerit (yön -dir*u, sağ şerit)
      const sc = t0 + dir * .58, S0 = at(sc), side = -dir; // gelen trafik sağdan: offset (-uz,ux)*(-dir)
      const ox = -g.uz * side, oz = g.ux * side;
      const q = [[S0[0], S0[1]], [S0[0] + ox * ah, S0[1] + oz * ah], [S0[0] + ox * ah + g.ux * dir * .07, S0[1] + oz * ah + g.uz * dir * .07], [S0[0] + g.ux * dir * .07, S0[1] + g.uz * dir * .07]];
      triUp(stops, q[0], q[1], q[2], .034); triUp(stops, q[0], q[2], q[3], .034);
      // trafik ışığı ya da dur levhası (gelen şeridin sağ kaldırımında)
      if (ROADS[s.t].oneway && dir > 0) continue;
      const T = at(t0 + dir * .7), px = T[0] + ox * (ah + sw * .5 + (s.t === 'dirt' ? .3 : 0)), pz = T[1] + oz * (ah + sw * .5 + (s.t === 'dirt' ? .3 : 0));
      const c2 = ex(px, pz, ang + (dir > 0 ? Math.PI : 0));
      if (ctl === 'stop') { c2.cyl('metal_d', 0, 0, 0, .015, .5, 6); c2.geo('red', new THREE.CylinderGeometry(.08, .08, .015, 8).rotateX(Math.PI / 2).rotateZ(Math.PI / 8).toNonIndexed(), 0, .55, .02); continue; }
      if (ctl !== 'light') continue;
      c2.cyl('metal_d', 0, 0, 0, .02, .75, 6); c2.box('black', 'black', 0, .62, 0, .08, .22, .06);
      const grp = Math.abs(Math.round(Math.atan2(g.uz, g.ux) / (Math.PI / 2))) % 2 ? 'A' : 'B';
      c2.box('tl' + grp + '_r', 'tl' + grp + '_r', 0, .78, .032, .04, .04, .01); c2.box('tl' + grp + '_g', 'tl' + grp + '_g', 0, .66, .032, .04, .04, .01);
    }
    // köprü
    let run = elev ? 1e9 : -1;
    for (let t = 0; t <= g.L + .001 && !elev; t += .5) {
      const P0 = at(t), wet = isWater(P0[0], P0[1]);
      if (wet && run < 0) run = Math.max(0, t - 1);
      if ((!wet || t + .5 > g.L) && run >= 0) {
        const t1 = Math.min(g.L, t + 1), mid = (run + t1) / 2, len = t1 - run, M2 = at(mid);
        const c = ex(M2[0], M2[1], ang);
        c.box('concrete_d', 'concrete', 0, -.25, 0, hw * 2 + .2, .27, len);
        c.box('concrete', 'concrete', hw + .05, .02, 0, .08, .12, len); c.box('concrete', 'concrete', -hw - .05, .02, 0, .08, .12, len);
        if (s.bs && s.bs !== 'beam' && len > 4) bridgeDecor(c, len, .02, hw, s.bs);
        else for (let k = -len / 2 + .5; k < len / 2; k += 2.5) c.box('concrete_d', null, 0, -.6, k, .3, .4, .3);
        run = -1;
      }
    }
    if (s.t === 'highway' && s1 - s0 > .4 && !elev) { const M2 = at((s0 + s1) / 2); ex(M2[0], M2[1], ang).box('concrete', 'concrete', 0, y, 0, .07, .09, s1 - s0 - .2); }
    if (elev) continue;
    // alt geçidin üstünden geçen yol için köprü tabliyesi
    for (const u of R.segs.values()) {
      if (u.id === s.id) continue; const ug = segGeo(u.id); if (ug.ha >= 0 && ug.hb >= 0) continue;
      const rx = g.bx - g.ax, rz = g.bz - g.az, qx = ug.bx - ug.ax, qz = ug.bz - ug.az, den = rx * qz - rz * qx; if (Math.abs(den) < 1e-6) continue;
      const tt = ((ug.ax - g.ax) * qz - (ug.az - g.az) * qx) / den, uu = ((ug.ax - g.ax) * rz - (ug.az - g.az) * rx) / den;
      if (tt <= 0 || tt >= 1 || uu <= 0 || uu >= 1) continue;
      const hu = ug.ha + (ug.hb - ug.ha) * uu; if (hu > -.3) continue;
      const sn = Math.abs(g.ux * ug.uz - g.uz * ug.ux) || .3, len = (ug.hw * 2 + .7) / sn, P0 = at(tt * g.L), c = ex(P0[0], P0[1], ang);
      c.box('concrete_d', 'concrete', 0, -.3, 0, hw * 2 + .14, .31, len);
      for (const sd of [1, -1]) c.box('concrete', 'concrete', sd * (hw + .04), .0, 0, .06, .12, len);
    }
    // tek yön okları (tek yön yapılmış normal yollar)
    if (s.ow && !ROADS[s.t].oneway) for (let t = s0 + 1; t < s1 - .6; t += 2.6) for (const sd of [1, -1]) {
      const P0 = at(t), o = rt.w * .22 * sd, cx = P0[0] + g.nx * o, cz = P0[1] + g.nz * o, l = .7, w2 = .4;
      quadUV(arrows, [[cx - g.nx * w2 / 2 - g.ux * l / 2, cz - g.nz * w2 / 2 - g.uz * l / 2], [cx + g.nx * w2 / 2 - g.ux * l / 2, cz + g.nz * w2 / 2 - g.uz * l / 2], [cx + g.nx * w2 / 2 + g.ux * l / 2, cz + g.nz * w2 / 2 + g.uz * l / 2], [cx - g.nx * w2 / 2 + g.ux * l / 2, cz - g.nz * w2 / 2 + g.uz * l / 2]], [[0, 0], [1, 0], [1, 1], [0, 1]], y + .012);
    }
    // bulvar refüjünde ve kaldırımlarda ağaçlar
    if (s.t === 'avenue') for (let t = s0 + 1.2; t < s1 - 1; t += 2.2) { const P0 = at(t); ex(P0[0], P0[1], ang).tree(0, 0, .75, hash(s.id * 31 + Math.round(t)) * .79); }
    if (s.t === 'street' || s.t === 'avenue') for (let t = s0 + 2.2; t < s1 - 1; t += 3.2) for (const sd of [1, -1]) { const P0 = at(t), o = (hw - sw * .45) * sd; ex(P0[0] + g.nx * o, P0[1] + g.nz * o, ang).tree(0, 0, .7, hash(s.id * 7 + Math.round(t) * sd) * .79); }
    // lambalar
    if (s.t !== 'dirt') {
      for (let t = s0 + .6; t < s1 - .4; t += 3.2) for (const sd of (s.t === 'avenue' || s.t === 'highway') ? [0] : [1, -1]) {
        if (ln >= 2990) break;
        const off = sd === 0 ? 0 : (hw - .12) * sd, P0 = at(t);
        _p.set(P0[0] + g.nx * off, 0, P0[1] + g.nz * off);
        const base = Math.atan2(-g.nz, g.nx);
        _q.setFromAxisAngle(_Y, sd === 0 ? base : (sd > 0 ? base + Math.PI : base));
        _mt.compose(_p, _q, _s); lampPole.setMatrixAt(ln, _mt); lampHead.setMatrixAt(ln, _mt); ln++;
        if (sd === 0) { _q.setFromAxisAngle(_Y, base + Math.PI); _mt.compose(_p, _q, _s); lampPole.setMatrixAt(ln, _mt); lampHead.setMatrixAt(ln, _mt); ln++; }
      }
    }
  }
  lampPole.count = lampHead.count = ln;
  for (let i = 0; i < ln; i++) { lampPole.getMatrixAt(i, _mt); glowIM.setMatrixAt(i, _mt); } glowIM.count = ln; glowIM.instanceMatrix.needsUpdate = true; glowIM.computeBoundingSphere();
  lampPole.instanceMatrix.needsUpdate = lampHead.instanceMatrix.needsUpdate = true;
  lampPole.computeBoundingSphere(); lampHead.computeBoundingSphere();
  for (const [t, arr] of Object.entries(per)) { const m = new THREE.Mesh(toGeometry(arr), roadMats[t]); m.receiveShadow = true; roadGroup.add(m); }
  // kavşak yüzeyleri ve kavisli kaldırımlar
  for (const [nid, J] of R.junc) {
    const N = R.nodes.get(nid); if (!N || J.poly.length < 3) continue;
    const arr = J.dirt ? dirtDisc : disc, C = [N.x, N.z];
    const hy = N.h || 0;
    for (let k = 0; k < J.poly.length; k++) triUp(arr, C, J.poly[k], J.poly[(k + 1) % J.poly.length], .028 + hy);
    if (hy > 0) { const c = ex(N.x, N.z, 0); c.cyl('concrete_d', 0, hy - .17, 0, nodeHW(nid) + .05, .17, 16); c.cyl('concrete', 0, 0, 0, .2, hy - .17, 10); }
    for (const c of J.curbs) {
      if (c.sw <= 0) continue;
      const P = c.pts, off = [];
      for (let k = 0; k < P.length; k++) { // dışa doğru (sağ normal) ortalama
        const p0 = P[Math.max(0, k - 1)], p1 = P[Math.min(P.length - 1, k + 1)], ex2 = p1[0] - p0[0], ez2 = p1[1] - p0[1], el = Math.hypot(ex2, ez2) || 1;
        off.push([P[k][0] + ez2 / el * c.sw, P[k][1] - ex2 / el * c.sw]);
      }
      for (let k = 0; k < P.length - 1; k++) { triUp(curbs, P[k], P[k + 1], off[k + 1], .031 + hy); triUp(curbs, P[k], off[k + 1], off[k], .031 + hy); }
    }
  }
  // döner kavşak göbekleri
  for (const d of (S.deco || [])) {
    const c = ex(d.x, d.z, 0);
    c.cyl('concrete', 0, 0, 0, d.r, .06, 32); c.cyl('grass', 0, .005, 0, d.r - .12, .06, 32);
    c.tree(0, 0, 1.2, .3); c.tree(d.r * .45, d.r * .2, .8, .6); c.tree(-d.r * .4, -d.r * .3, .8, .1);
    c.box('flowerR', 'flowerR', 0, .06, d.r * .55, .5, .03, .14); c.box('flowerY', 'flowerY', 0, .06, -d.r * .55, .5, .03, .14);
  }
  const flatMesh = (arr, mat) => { if (!arr.length) return; const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); const nn = new Float32Array(arr.length); for (let i = 1; i < nn.length; i += 3) nn[i] = 1; g.setAttribute('normal', new THREE.BufferAttribute(nn, 3)); const m = new THREE.Mesh(g, mat); m.receiveShadow = true; roadGroup.add(m); };
  flatMesh(disc, discMat); flatMesh(dirtDisc, dirtDiscMat); flatMesh(curbs, curbMat); flatMesh(stops, stopMat);
  if (zebra.p.length) { const m = new THREE.Mesh(toGeometry(zebra), zebraMat); m.renderOrder = 2; roadGroup.add(m); }
  if (arrows.p.length) { const m = new THREE.Mesh(toGeometry(arrows), arrowMat); m.renderOrder = 2; roadGroup.add(m); }
  carveTerrain();
  for (const [k, b] of extra) { const m = new THREE.Mesh(toGeometry(b), M(k)); m.castShadow = m.receiveShadow = true; roadGroup.add(m); }
}

// ---------- binalar (arazi parçası başına birleştirilmiş) ----------
const bcache = new Map();  // id -> { sig, mats: Map(key -> {p,n,u}), emit, dyn }
const chunks = new Map();  // tile -> { sig, group }
export let emitters = [];
const rotors = []; const rotorGeo = (() => { const g = new THREE.BufferGeometry(); const p = []; for (let k = 0; k < 3; k++) { const a = k * 2.094, c = Math.cos(a), s = Math.sin(a), w = .05, L = 1.1; const pts = [[-w * s * 0, 0], [w, 0], [w * .3, L], [-w * .3, L], [-w, 0]]; const P = ([x, y]) => [x * c - y * s, x * s + y * c, 0]; const q = [P([-w, 0]), P([w, 0]), P([w * .3, L]), P([-w, 0]), P([w * .3, L]), P([-w * .3, L])]; for (const v of q) p.push(...v); for (const v of [q[0], q[2], q[1], q[3], q[5], q[4]]) p.push(...v); } g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); g.computeVertexNormals(); return g; })();
const rotorMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f4, roughness: .5, side: THREE.DoubleSide });
function bsig(b) { return b.svc ? 's' + b.svc + b.x.toFixed(2) + b.z.toFixed(2) : b.zt + b.lvl + b.x.toFixed(2) + b.z.toFixed(2) + b.w + b.d; }
function bgeo(b) {
  const sig = bsig(b); let c = bcache.get(b.id);
  if (c && c.sig === sig) return c;
  const out = new Map(), ctx = buildModel(b, out);
  const mats = new Map(); for (const [k, mb] of out) mats.set(k, { p: new Float32Array(mb.p), n: new Float32Array(mb.n), u: new Float32Array(mb.u) });
  let H = .3; for (const [, a] of mats) for (let i = 1; i < a.p.length; i += 3) if (a.p[i] > H) H = a.p[i];
  c = { sig, mats, emit: ctx.emit, dyn: ctx.dyn, H }; bcache.set(b.id, c); return c;
}
export function syncBuildings() {
  const byTile = new Map();
  for (const b of R.blds.values()) { if (cons.has(b.id)) continue; const t = tileOf(b.x, b.z); if (!byTile.has(t)) byTile.set(t, []); byTile.get(t).push(b); }
  for (const id of [...bcache.keys()]) if (!R.blds.has(id)) bcache.delete(id);
  const tiles = new Set([...byTile.keys(), ...chunks.keys()]);
  for (const t of tiles) {
    const list = byTile.get(t) || [];
    const sig = list.map(b => b.id + ':' + bsig(b)).join(',');
    const ch = chunks.get(t);
    if (ch && ch.sig === sig) continue;
    if (ch) { scene.remove(ch.group); ch.group.traverse(o => o.geometry && o.geometry.dispose()); }
    const merged = new Map();
    for (const b of list) { const c = bgeo(b); for (const [k, a] of c.mats) { let m = merged.get(k); if (!m) merged.set(k, m = []); m.push(a); } }
    const group = new THREE.Group();
    for (const [k, arrs] of merged) {
      let n = 0; for (const a of arrs) n += a.p.length;
      const P = new Float32Array(n), Nn = new Float32Array(n), U = new Float32Array(n / 3 * 2); let o = 0, ou = 0;
      for (const a of arrs) { P.set(a.p, o); Nn.set(a.n, o); U.set(a.u, ou); o += a.p.length; ou += a.u.length; }
      const mesh = new THREE.Mesh(toGeometry({ p: P, n: Nn, u: U }), M(k));
      mesh.castShadow = true; mesh.receiveShadow = true; mesh.matrixAutoUpdate = false;
      group.add(mesh);
    }
    scene.add(group); chunks.set(t, { sig, group });
  }
  // duman kaynakları ve rotorlar
  emitters = []; const want = [];
  for (const b of R.blds.values()) { if (cons.has(b.id)) continue; const c = bgeo(b); for (const e of c.emit) emitters.push({ ...e, id: b.id }); for (const d of c.dyn) want.push({ ...d, id: b.id }); }
  while (rotors.length) { const r = rotors.pop(); scene.remove(r); }
  for (const w of want) { const o = makeDyn(w); if (!o) continue; o.userData.t = w.t; o.userData.id = w.id; o.userData.base = w; scene.add(o); rotors.push(o); }
}
function makeDyn(w) {
  const hy = hf(w.p[0], w.p[2]);
  if (w.t === 'rotor') { const r = new THREE.Mesh(rotorGeo, rotorMat); r.castShadow = true; r.position.set(w.p[0], w.p[1], w.p[2]); r.rotation.set(0, w.a, 0); return r; }
  if (w.t === 'wheel') { // dönme dolap
    const g = new THREE.Group(); g.position.set(w.p[0], w.p[1], w.p[2]); g.rotation.y = w.a;
    const rim = new THREE.Mesh(new THREE.TorusGeometry(w.r, .04, 6, 40), new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: .4, roughness: .4 })); g.add(rim);
    const cols = [0xe74c3c, 0xf1c40f, 0x3498db, 0x2ecc71, 0x9b59b6, 0xe67e22];
    for (let k = 0; k < 12; k++) { const a = k / 12 * 6.283; const sp = new THREE.Mesh(new THREE.BoxGeometry(.02, w.r, .02).translate(0, w.r / 2, 0), rim.material); sp.rotation.z = a; g.add(sp); const cab = new THREE.Mesh(new THREE.BoxGeometry(.22, .2, .2), new THREE.MeshStandardMaterial({ color: cols[k % 6] })); cab.position.set(Math.cos(a) * w.r, Math.sin(a) * w.r, 0); cab.userData.cab = 1; g.add(cab); }
    g.userData.spin = .25; return g;
  }
  if (w.t === 'beacon') { // fener ışığı
    const g = new THREE.Group(); g.position.set(w.p[0], w.p[1] + hy, w.p[2]);
    const beam = new THREE.Mesh(new THREE.ConeGeometry(.9, 9, 16, 1, true).rotateZ(Math.PI / 2).translate(4.5, 0, 0), new THREE.MeshBasicMaterial({ color: 0xfff5c0, transparent: true, opacity: .18, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
    beam.userData.noDisp = 1; g.add(beam); g.userData.spin = 1.2; g.userData.beam = beam; return g;
  }
  if (w.t === 'plane') { // havalimanı uçağı
    const g = new THREE.Group(); const wm = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: .4, metalness: .3 });
    const body = new THREE.Mesh(new THREE.CylinderGeometry(.16, .12, 2.2, 10).rotateX(Math.PI / 2), wm); g.add(body);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(.16, 10, 8), wm); nose.position.z = 1.1; g.add(nose);
    const wing = new THREE.Mesh(new THREE.BoxGeometry(2.2, .04, .45), wm); wing.position.z = .1; g.add(wing);
    const tail = new THREE.Mesh(new THREE.BoxGeometry(.8, .03, .25), wm); tail.position.z = -.95; g.add(tail);
    const fin = new THREE.Mesh(new THREE.BoxGeometry(.04, .45, .3), new THREE.MeshStandardMaterial({ color: 0xc62828 })); fin.position.set(0, .25, -.95); g.add(fin);
    for (const sx of [.55, -.55]) { const e = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, .3, 8).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0x9e9e9e })); e.position.set(sx, -.08, .2); g.add(e); }
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.userData.noDisp = 1; } });
    g.userData.plane = { x: w.p[0], z: w.p[2], a: w.a, L: w.L, y0: hy + .15 }; return g;
  }
  return null;
}
function updPlane(o, tm) {
  const P = o.userData.plane, T = 60, k = (tm / 1000 % T) / T, ca = Math.cos(P.a), sa = Math.sin(P.a);
  // yerel: z pist boyunca. 0-.15 kalkış koşusu, .15-.3 tırmanış, .3-.75 tur, .75-.9 alçalma, .9-1 iniş ve bekleme
  let lx = 0, lz, y, yaw = 0, pitch = 0;
  const L = P.L;
  if (k < .15) { const f = k / .15; lz = -L / 2 + L * .8 * f * f; y = 0; }
  else if (k < .3) { const f = (k - .15) / .15; lz = -L / 2 + L * .8 + 30 * f; y = 9 * f; pitch = -.2; }
  else if (k < .75) { const f = (k - .3) / .45, an = f * Math.PI * 2, R0 = 25; lz = L * .3 + 30 + Math.sin(an) * R0; lx = (1 - Math.cos(an)) * R0; y = 9 + Math.sin(an * 2) * 1.5; yaw = an; }
  else if (k < .9) { const f = (k - .75) / .15; lz = L * .3 + 30 - (30 + L * .8) * f; y = 9 * (1 - f); pitch = .08; yaw = Math.PI; }
  else { const f = (k - .9) / .1; lz = -L / 2 - f * 0; y = 0; yaw = Math.PI; }
  o.position.set(P.x + lx * ca + lz * sa, P.y0 + y, P.z - lx * sa + lz * ca);
  o.rotation.set(pitch * (yaw === Math.PI ? -1 : 1), P.a + yaw, 0, 'YXZ');
}

// ---------- inşaat animasyonu ----------
const cons = new Map(); // id -> { t, dur, group, body, crane, H }
const dirtMat = new THREE.MeshStandardMaterial({ color: 0x8a6a48, roughness: 1, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 });
const scafMat = new THREE.MeshStandardMaterial({ color: 0x9aa3ab, metalness: .5, roughness: .5 });
const netMat = new THREE.MeshStandardMaterial({ color: 0x3f8f5a, transparent: true, opacity: .35, side: THREE.DoubleSide, depthWrite: false });
const craneMat = new THREE.MeshStandardMaterial({ color: 0xf2b705, roughness: .6, metalness: .3 });
export function startConstruction(id) {
  const b = R.blds.get(id); if (!b) return;
  if (cons.has(id)) { const c = cons.get(id); scene.remove(c.group); cons.delete(id); }
  const cg = bgeo(b); let H = .3;
  for (const [, a] of cg.mats) for (let i = 1; i < a.p.length; i += 3) if (a.p[i] > H) H = a.p[i];
  const group = new THREE.Group(), body = new THREE.Group();
  for (const [k, a] of cg.mats) { const m = new THREE.Mesh(toGeometry(a), M(k)); m.castShadow = true; m.receiveShadow = true; body.add(m); }
  body.scale.y = .001; group.add(body);
  // toprak arsa
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(b.w, b.d).rotateX(-Math.PI / 2), dirtMat); lot.position.set(b.x, .04, b.z); lot.rotation.y = b.a; group.add(lot);
  // iskele
  const sc = new THREE.Group(); sc.position.set(b.x, 0, b.z); sc.rotation.y = b.a;
  const fw = Math.min(b.w, 3) * .82, fd = Math.min(b.d, 3) * .7, fz = b.svc ? 0 : (b.d / 2 - .25 - fd / 2) * .6;
  const poleG = new THREE.BoxGeometry(.03, 1, .03).translate(0, .5, 0);
  for (const [x, z] of [[-fw / 2, -fd / 2], [fw / 2, -fd / 2], [-fw / 2, fd / 2], [fw / 2, fd / 2], [0, fd / 2], [0, -fd / 2]]) { const p = new THREE.Mesh(poleG, scafMat); p.position.set(x, 0, z + fz); sc.add(p); }
  const net = new THREE.Mesh(new THREE.BoxGeometry(fw + .04, 1, fd + .04).translate(0, .5, 0), netMat); net.position.z = fz; sc.add(net);
  group.add(sc);
  // kule vinç (yüksek binalar)
  let crane = null;
  if (H > 1.4) {
    crane = new THREE.Group(); const mh = H + .9;
    const ox = (b.w / 2 - .2), oz = -(b.d / 2 - .25), ca = Math.cos(b.a), sa = Math.sin(b.a);
    crane.position.set(b.x + ox * ca + oz * sa, 0, b.z - ox * sa + oz * ca);
    const mast = new THREE.Mesh(new THREE.BoxGeometry(.12, mh, .12).translate(0, mh / 2, 0), craneMat); mast.castShadow = true; crane.add(mast);
    const jibG = new THREE.Group(); jibG.position.y = mh;
    const jib = new THREE.Mesh(new THREE.BoxGeometry(2.6, .07, .08).translate(.7, 0, 0), craneMat); jib.castShadow = true; jibG.add(jib);
    const cw = new THREE.Mesh(new THREE.BoxGeometry(.3, .2, .2).translate(-.5, -.05, 0), scafMat); jibG.add(cw);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(.16, .14, .16).translate(0, -.12, .1), new THREE.MeshStandardMaterial({ color: 0x334455 })); jibG.add(cab);
    const cable = new THREE.Mesh(new THREE.BoxGeometry(.01, 1, .01).translate(0, -.5, 0), scafMat); cable.position.x = 1.4; cable.scale.y = mh * .6; jibG.add(cable);
    crane.add(jibG); crane.userData.jib = jibG; group.add(crane);
  }
  scene.add(group);
  cons.set(id, { t: 0, dur: 3 + Math.min(10, H * 2.2), group, body, sc, crane, H });
}
export function updConstruction(simDt, tm) {
  let done = false;
  for (const [id, c] of cons) {
    c.t += simDt;
    const k = Math.min(1, c.t / c.dur), e = k < .15 ? 0 : (k - .15) / .85;
    c.body.scale.y = Math.max(.001, e);
    c.sc.scale.y = Math.max(.05, c.H * Math.min(1, e + .12)) ;
    if (c.crane) c.crane.userData.jib.rotation.y = Math.sin(tm / 2500 + id) * 1.2;
    if (Math.random() < simDt * 1.5) { const b = R.blds.get(id); if (b) puff(b.x + (Math.random() - .5) * b.w * .6, .1, b.z + (Math.random() - .5) * b.d * .6, 0xb8a888, .9, 0, .25, .25, .5); }
    if (k >= 1 || !R.blds.has(id)) { scene.remove(c.group); c.group.traverse(o => { if (o.geometry) o.geometry.dispose(); }); cons.delete(id); done = true; }
  }
  return done;
}
export const constructing = id => cons.has(id);

// ---------- bilgi görünümü ----------
const ovIM = new THREE.InstancedMesh(new THREE.CylinderGeometry(.28, .28, .06, 16), new THREE.MeshBasicMaterial({ depthTest: false }), 3000);
ovIM.count = 0; ovIM.renderOrder = 30; ovIM.frustumCulled = false; scene.add(ovIM);
const metroGroup = new THREE.Group(); scene.add(metroGroup);
export function buildMetro(show) {
  for (const c of [...metroGroup.children]) { metroGroup.remove(c); c.geometry.dispose(); }
  const st = [...R.blds.values()].filter(b => b.svc === 'metro'); if (st.length < 2) return;
  // en kısa bağlantı ağacı
  const inT = new Set([st[0].id]), pts = [];
  while (inT.size < st.length) {
    let best = null; for (const a of st) if (inT.has(a.id)) for (const b of st) if (!inT.has(b.id)) { const d = Math.hypot(a.x - b.x, a.z - b.z); if (!best || d < best.d) best = { a, b, d }; }
    inT.add(best.b.id); pts.push(best.a.x, .25, best.a.z, best.b.x, .25, best.b.z);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  const l = new THREE.LineSegments(g, new THREE.LineDashedMaterial({ color: 0xc2185b, dashSize: 1, gapSize: .6, transparent: true, opacity: show ? .95 : .35, depthTest: false }));
  l.computeLineDistances(); l.renderOrder = 25; metroGroup.add(l);
}
export function buildOverlay(colorFn) {
  let n = 0;
  if (colorFn) for (const b of R.blds.values()) {
    const col = colorFn(b); if (!col || n >= 3000) continue;
    const H = bgeo(b).H; _mt.makeTranslation(b.x, H + .35, b.z); ovIM.setMatrixAt(n, _mt); ovIM.setColorAt(n, _c.set(col)); n++;
  }
  ovIM.count = n; ovIM.instanceMatrix.needsUpdate = true; if (ovIM.instanceColor) ovIM.instanceColor.needsUpdate = true;
}

// ---------- ağaçlar ----------
const MAXT = 9000;
const trunkGeo = new THREE.CylinderGeometry(.04, .06, .34, 5).translate(0, .17, 0);
const leafGeo = new THREE.IcosahedronGeometry(.26, 0).translate(0, .5, 0);
const pineGeo = new THREE.ConeGeometry(.2, .7, 7).translate(0, .6, 0);
const trunkIM = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x6b4a2e }), MAXT);
const leafIM = new THREE.InstancedMesh(leafGeo, new THREE.MeshStandardMaterial({ roughness: .9, flatShading: true }), MAXT);
const pineIM = new THREE.InstancedMesh(pineGeo, new THREE.MeshStandardMaterial({ roughness: .9, flatShading: true }), MAXT);
for (const im of [trunkIM, leafIM, pineIM]) { im.castShadow = true; im.receiveShadow = true; im.count = 0; scene.add(im); }
const outsideTrees = [];
{ let s = 4242; const r = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; for (let k = 0; k < 2600; k++) { const x = (r() - .5) * 420, z = (r() - .5) * 420; if (Math.abs(x) < WH + 1 && Math.abs(z) < WH + 1) continue; if (z > WH - 20) continue; if (r() < .55) outsideTrees.push([x, z, 1 + r() * .8, r() < .4, r()]); } }
export function buildTrees() {
  let nt = 0, nl = 0, np = 0;
  const put = (x, z, sc, pine, h) => {
    if (nt >= MAXT) return;
    _q.setFromAxisAngle(_Y, h * 6.28); _s.set(sc, sc * (.9 + h * .3), sc); _mt.compose(_p.set(x, 0, z), _q, _s);
    trunkIM.setMatrixAt(nt++, _mt);
    if (pine) { pineIM.setMatrixAt(np, _mt); pineIM.setColorAt(np++, _c.setHSL(.33 + h * .05, .45, .22 + h * .08)); }
    else { leafIM.setMatrixAt(nl, _mt); leafIM.setColorAt(nl++, _c.setHSL(.22 + h * .1, .5, .3 + h * .12)); }
  };
  for (const t of outsideTrees) put(...t);
  for (const [x, z, sc, pine, h] of R.forest) { const i = gi(x, z); if (i >= 0 && R.occ[i] === 0) put(x, z, sc, pine, h); }
  _s.set(1, 1, 1);
  trunkIM.count = nt; leafIM.count = nl; pineIM.count = np;
  for (const im of [trunkIM, leafIM, pineIM]) { im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; im.computeBoundingSphere(); }
}

// ---------- bölge hücreleri ----------
const cellGeo = new THREE.PlaneGeometry(.9, .9).rotateX(-Math.PI / 2);
const cellMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: .5, depthWrite: false });
let cellIM = new THREE.InstancedMesh(cellGeo, cellMat, 1); cellIM.count = 0; scene.add(cellIM);
export function buildCells(showAll) {
  const list = [];
  for (const c of R.cells.values()) { if (c.b) continue; if (c.zt || showAll) list.push(c); }
  if (cellIM.instanceMatrix.count < list.length) { scene.remove(cellIM); cellIM.dispose(); cellIM = new THREE.InstancedMesh(cellGeo, cellMat, Math.ceil(list.length * 1.5) + 100); scene.add(cellIM); }
  let n = 0;
  for (const c of list) {
    _q.setFromAxisAngle(_Y, c.a); _mt.compose(_p.set(c.x, .035, c.z), _q, _s.set(1, 1, 1));
    cellIM.setMatrixAt(n, _mt); cellIM.setColorAt(n, _c.set(c.zt ? ZONES[c.zt].c : '#ffffff')); n++;
  }
  cellIM.count = n; cellIM.instanceMatrix.needsUpdate = true; if (cellIM.instanceColor) cellIM.instanceColor.needsUpdate = true;
  cellMat.opacity = showAll ? .55 : .26;
}

// ---------- arazi parçaları ----------
const tileGroup = new THREE.Group(); scene.add(tileGroup);
const lockMat = new THREE.MeshBasicMaterial({ color: 0x0b1420, transparent: true, opacity: .32, depthWrite: false });
const buyMat = new THREE.MeshBasicMaterial({ color: 0x7dff8c, transparent: true, opacity: .22, depthWrite: false });
export function buildTiles(landMode, buyableFn, cost) {
  for (const c of [...tileGroup.children]) { tileGroup.remove(c); if (c.material?.map) c.material.map.dispose(); c.geometry?.dispose(); }
  const border = [];
  for (let t = 0; t < TILES * TILES; t++) {
    const tx = t % TILES, tz = (t / TILES) | 0, x0 = tx * TILE - WH, z0 = tz * TILE - WH;
    const own = S.tiles.includes(t);
    if (!own) {
      const can = landMode && buyableFn(t) === 'ok';
      const m = new THREE.Mesh(new THREE.PlaneGeometry(TILE, TILE).rotateX(-Math.PI / 2), can ? buyMat : lockMat);
      m.position.set(x0 + TILE / 2, .9, z0 + TILE / 2); m.renderOrder = 3; tileGroup.add(m);
      if (landMode) {
        const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(can ? '🗺️ ' + cost.toLocaleString('tr-TR') + ' 💰' : '🔒 Kilitli', can ? 'rgba(30,110,50,.9)' : 'rgba(20,30,40,.8)'), depthTest: false }));
        sp.scale.set(8, 2, 1); sp.position.set(x0 + TILE / 2, 3, z0 + TILE / 2); sp.renderOrder = 20; tileGroup.add(sp);
      }
    }
    // sahip olunan alanın sınırları
    if (own) for (const [dx, dz, ax, az, bx, bz] of [[0, -1, x0, z0, x0 + TILE, z0], [0, 1, x0, z0 + TILE, x0 + TILE, z0 + TILE], [-1, 0, x0, z0, x0, z0 + TILE], [1, 0, x0 + TILE, z0, x0 + TILE, z0 + TILE]]) {
      const nx = tx + dx, nz = tz + dz, nt = nz * TILES + nx;
      if (nx < 0 || nz < 0 || nx >= TILES || nz >= TILES || !S.tiles.includes(nt)) border.push(ax, .05, az, bx, .05, bz);
    }
  }
  const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(border, 3));
  tileGroup.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: .7 })));
}

// ---------- trafik ----------
const MAXC = 160;
// Araç modelleri: köşe renkli parçalar (b: gövde rengi, g: cam, w: lastik, l: far, t: stop, k: koyu, y: sabit sarı, r: kırmızı, s: gümüş)
const PCOL2 = { b: [1, 1, 1], g: [.12, .16, .21], w: [.07, .07, .07], l: [1, .97, .78], t: [.8, .1, .08], k: [.18, .18, .2], y: [.97, .78, .06], r: [.85, .12, .1], s: [.75, .77, .8] };
function vehGeo(parts, wheels) {
  const P = [], N = [], C = [];
  const add = (g, col) => { g = g.index ? g.toNonIndexed() : g; const p = g.attributes.position, n = g.attributes.normal; for (let i = 0; i < p.count; i++) { P.push(p.getX(i), p.getY(i), p.getZ(i)); N.push(n.getX(i), n.getY(i), n.getZ(i)); C.push(...PCOL2[col]); } };
  for (const [x, y, z, w, h, d, col] of parts) add(new THREE.BoxGeometry(w, h, d).translate(x, y, z), col);
  for (const [x, z, r, wd] of wheels) { add(new THREE.CylinderGeometry(r, r, wd, 10).rotateZ(Math.PI / 2).translate(x, r, z), 'w'); add(new THREE.CylinderGeometry(r * .55, r * .55, wd + .005, 8).rotateZ(Math.PI / 2).translate(x, r, z), 's'); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(N, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(C, 3)); return g;
}
const W4 = (wx, z1, z2, r = .042, wd = .035) => [[wx, z1, r, wd], [-wx, z1, r, wd], [wx, z2, r, wd], [-wx, z2, r, wd]];
const VEH = {
  sedan: { len: .5, g: vehGeo([[0, .085, 0, .22, .07, .5, 'b'], [0, .145, -.02, .2, .06, .24, 'g'], [0, .178, -.02, .19, .01, .2, 'b'], [0, .125, .135, .21, .02, .14, 'b'], [.075, .09, .251, .05, .025, .005, 'l'], [-.075, .09, .251, .05, .025, .005, 'l'], [.08, .095, -.251, .045, .02, .005, 't'], [-.08, .095, -.251, .045, .02, .005, 't'], [0, .07, .252, .12, .02, .005, 'k']], W4(.1, .16, -.16)) },
  hatch: { len: .42, g: vehGeo([[0, .085, 0, .21, .07, .42, 'b'], [0, .145, -.035, .19, .065, .26, 'g'], [0, .18, -.035, .18, .01, .23, 'b'], [.07, .09, .211, .045, .025, .005, 'l'], [-.07, .09, .211, .045, .025, .005, 'l'], [.075, .1, -.211, .04, .03, .005, 't'], [-.075, .1, -.211, .04, .03, .005, 't']], W4(.095, .13, -.13)) },
  suv: { len: .52, g: vehGeo([[0, .1, 0, .24, .09, .52, 'b'], [0, .175, -.03, .225, .07, .32, 'g'], [0, .214, -.03, .22, .012, .3, 'b'], [0, .225, -.03, .16, .01, .26, 'k'], [.08, .11, .261, .05, .03, .005, 'l'], [-.08, .11, .261, .05, .03, .005, 'l'], [.09, .12, -.261, .04, .04, .005, 't'], [-.09, .12, -.261, .04, .04, .005, 't'], [0, .065, .262, .2, .03, .01, 'k']], W4(.11, .17, -.17, .05, .04)) },
  taxi: { len: .5, g: vehGeo([[0, .085, 0, .22, .07, .5, 'y'], [0, .145, -.02, .2, .06, .24, 'g'], [0, .178, -.02, .19, .01, .2, 'y'], [0, .195, -.02, .09, .03, .05, 'k'], [0, .125, .135, .21, .02, .14, 'y'], [.075, .09, .251, .05, .025, .005, 'l'], [-.075, .09, .251, .05, .025, .005, 'l'], [.08, .095, -.251, .045, .02, .005, 't'], [-.08, .095, -.251, .045, .02, .005, 't'], [0, .1, 0, .222, .015, .3, 'k']], W4(.1, .16, -.16)) },
  van: { len: .56, g: vehGeo([[0, .14, -.02, .24, .2, .5, 'b'], [0, .1, .23, .23, .1, .1, 'b'], [0, .19, .19, .22, .08, .03, 'g'], [.115, .19, .05, .01, .06, .2, 'g'], [-.115, .19, .05, .01, .06, .2, 'g'], [.08, .1, .281, .05, .03, .005, 'l'], [-.08, .1, .281, .05, .03, .005, 'l'], [.09, .12, -.271, .04, .05, .005, 't'], [-.09, .12, -.271, .04, .05, .005, 't']], W4(.11, .18, -.17, .048, .04)) },
  truck: { len: .78, g: vehGeo([[0, .15, .29, .25, .2, .18, 'b'], [0, .2, .375, .23, .08, .01, 'g'], [0, .19, -.1, .27, .26, .56, 's'], [0, .07, -.1, .2, .04, .6, 'k'], [.09, .1, .381, .05, .03, .005, 'l'], [-.09, .1, .381, .05, .03, .005, 'l'], [.11, .1, -.381, .04, .04, .005, 't'], [-.11, .1, -.381, .04, .04, .005, 't']], [...W4(.12, .28, -.05, .055, .05), [.12, -.28, .055, .05], [-.12, -.28, .055, .05]]) },
  bus: { len: .95, g: vehGeo([[0, .16, 0, .27, .24, .94, 'b'], [0, .22, 0, .275, .08, .86, 'g'], [0, .19, .471, .25, .14, .005, 'g'], [0, .285, 0, .26, .015, .9, 's'], [.09, .1, .472, .05, .03, .005, 'l'], [-.09, .1, .472, .05, .03, .005, 'l'], [.1, .12, -.472, .04, .05, .005, 't'], [-.1, .12, -.472, .04, .05, .005, 't'], [0, .06, 0, .275, .03, .94, 'k']], W4(.12, .3, -.3, .055, .05)) },
  fire: { len: .82, g: vehGeo([[0, .15, .29, .25, .2, .18, 'r'], [0, .2, .375, .23, .08, .01, 'g'], [0, .17, -.1, .27, .22, .56, 'r'], [0, .3, -.1, .1, .03, .6, 's'], [0, .29, -.1, .2, .01, .6, 's'], [.09, .1, .381, .05, .03, .005, 'l'], [-.09, .1, .381, .05, .03, .005, 'l']], [...W4(.12, .28, -.05, .055, .05), [.12, -.28, .055, .05], [-.12, -.28, .055, .05]]) },
};
const vehIM = {};
for (const [k, v] of Object.entries(VEH)) { const im = new THREE.InstancedMesh(v.g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .35, metalness: .25 }), k === 'bus' || k === 'fire' ? 40 : MAXC); im.castShadow = true; im.count = 0; im.frustumCulled = false; scene.add(im); vehIM[k] = im; }
const CAR_TYPES = [['sedan', .34], ['hatch', .2], ['suv', .16], ['taxi', .12], ['van', .08], ['truck', .1]];
function pickType() { let r = Math.random(); for (const [k, p] of CAR_TYPES) { if ((r -= p) < 0) return k; } return 'sedan'; }
const sirIM = new THREE.InstancedMesh(new THREE.BoxGeometry(.14, .035, .06).translate(0, .21, 0), new THREE.MeshBasicMaterial(), 40);
sirIM.count = 0; sirIM.frustumCulled = false; scene.add(sirIM);
const CARCOL = ['#c0392b', '#f1c40f', '#2e86de', '#ecf0f1', '#27ae60', '#34495e', '#e67e22', '#7f8c8d', '#ffffff', '#1e272e'];
let cars = [];
function laneOff(t, lane, ow) { const rt = ROADS[t]; if (ow && !rt.oneway) return rt.w * (lane ? .22 : -.22); return rt.oneway ? 0 : rt.lanes === 1 ? rt.w * .2 : rt.w * (lane ? .36 : .2); }
function spawnCar() {
  const zb = [...R.blds.values()].filter(b => b.seg && R.conn.has(b.seg));
  if (zb.length < 2 && !zb.length) return;
  const outs = [...R.nodes.values()].filter(n => n.out);
  const pickNode = (b) => { const s = R.segs.get(b.seg); return Math.random() < .5 ? s.a : s.b; };
  let from, to; const r = Math.random();
  if (r < .3 && outs.length) { from = outs[0].id; to = pickNode(zb[(Math.random() * zb.length) | 0]); }
  else if (r < .55 && outs.length) { from = pickNode(zb[(Math.random() * zb.length) | 0]); to = outs[0].id; }
  else { from = pickNode(zb[(Math.random() * zb.length) | 0]); to = pickNode(zb[(Math.random() * zb.length) | 0]); }
  if (from === to) return;
  const path = findPath(from, to); if (!path || path.length < 2) return;
  const vt = pickType();
  cars.push({ path, i: 0, t: 0, lane: Math.random() < .5 ? 1 : 0, vt, col: vt === 'truck' ? ['#e53935', '#1e88e5', '#43a047', '#fdd835', '#fafafa'][(Math.random() * 5) | 0] : vt === 'van' ? ['#fafafa', '#90a4ae', '#1565c0'][(Math.random() * 3) | 0] : CARCOL[(Math.random() * CARCOL.length) | 0], sc: VEH[vt].len / .5, ry: null, x: 0, z: 0 });
}
export function spawnSpecial(fromBld, toBld, kind) {
  const A = R.blds.get(fromBld), B = R.blds.get(toBld); if (!A || !B || !A.seg || !B.seg) return;
  const sa = R.segs.get(A.seg), sb = R.segs.get(B.seg); if (!sa || !sb) return;
  const path = findPath(sa.a, sb.b) || findPath(sa.a, sb.a); if (!path || path.length < 2) return;
  const K = { fire: ['#d32f2f', 'fire'], amb: ['#f5f5f5', 'van'], pol: ['#1e3a8a', 'sedan'], bus: ['#1565c0', 'bus'] }[kind];
  cars.push({ path, i: 0, t: 0, lane: 0, col: K[0], vt: K[1], sc: VEH[K[1]].len / .5, ry: null, x: 0, z: 0, kind, fast: kind !== 'bus' });
}
let busT = 0;
export function updTraffic(dt) {
  const tc = R.st.transitCov || 0;
  const target = Math.min(MAXC, Math.floor((R.st.pop || 0) / 12 * (1 - tc * .4)) + 6, Math.floor(R.segs.size * 1.5));
  if (cars.length < target && Math.random() < dt * 4) spawnCar();
  // otobüsler: duraklar arası
  busT -= dt;
  if (busT <= 0) {
    busT = 2;
    const stops = [...R.blds.values()].filter(b => b.svc === 'busstop' && b.seg && R.conn.has(b.seg));
    const dep = [...R.blds.values()].find(b => b.svc === 'busdep' && R.conn.has(b.seg));
    const nb = cars.filter(c => c.kind === 'bus').length;
    if (dep && stops.length >= 2 && nb < Math.min(24, stops.length * 1.5)) { const a = stops[(Math.random() * stops.length) | 0], b = stops[(Math.random() * stops.length) | 0]; if (a !== b) spawnSpecial(a.id, b.id, 'bus'); }
    // ambulans ve polis devriyesi
    const zb = [...R.blds.values()].filter(b => !b.svc && b.seg && R.conn.has(b.seg));
    if (zb.length && Math.random() < .25) { const h = [...R.blds.values()].filter(b => (b.svc === 'hosp' || b.svc === 'clinic') && R.conn.has(b.seg)); if (h.length) spawnSpecial(h[(Math.random() * h.length) | 0].id, zb[(Math.random() * zb.length) | 0].id, 'amb'); }
    if (zb.length && Math.random() < .3) { const p = [...R.blds.values()].filter(b => b.svc === 'police' && R.conn.has(b.seg)); if (p.length) spawnSpecial(p[(Math.random() * p.length) | 0].id, zb[(Math.random() * zb.length) | 0].id, 'pol'); }
  }
  let n = 0;
  const now = performance.now(), ph = Math.floor(now / 7000) % 2;
  // aynı yol/yön/şeritteki araçlar (takip mesafesi)
  const lanes = new Map();
  for (const c of cars) { const k2 = c.path[c.i] + '>' + c.path[c.i + 1] + '|' + c.lane; let l = lanes.get(k2); if (!l) lanes.set(k2, l = []); l.push(c); }
  for (const l of lanes.values()) l.sort((p, q) => q.t - p.t);
  for (let k = cars.length - 1; k >= 0; k--) {
    const c = cars[k];
    const a = R.nodes.get(c.path[c.i]), b = R.nodes.get(c.path[c.i + 1]);
    const s = a && b ? segBetween(a.id, b.id) : null;
    if (!s) { cars.splice(k, 1); continue; }
    const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
    let nt = c.t + dt * ROADS[s.t].speed * (c.fast ? 1.5 : c.kind === 'bus' ? .75 : .9) / L;
    const emerg = c.kind === 'fire' || c.kind === 'amb' || c.kind === 'pol';
    // kavşakta dur
    if (!emerg && c.i + 1 < c.path.length - 1) {
      const ctl = ctlOf(b.id);
      if (ctl !== 'none') {
        const tStop = 1 - (trimAt(b.id, s.id) + .62) / L;
        if (c.t <= tStop && nt > tStop) {
          let hold = false;
          if (ctl === 'light') { const g2 = segGeo(s.id), grp = Math.abs(Math.round(Math.atan2(g2.uz, g2.ux) / (Math.PI / 2))) % 2 ? 'A' : 'B'; hold = !((grp === 'A' && ph === 0) || (grp === 'B' && ph === 1)); }
          else if (ctl === 'stop') { if (c.stopAt !== b.id) { c.wait = (c.wait || 0) + dt; hold = c.wait < .8; if (!hold) { c.stopAt = b.id; c.wait = 0; } } }
          if (hold) nt = tStop;
        }
      }
    }
    // öndeki araç
    const l = lanes.get(c.path[c.i] + '>' + c.path[c.i + 1] + '|' + c.lane);
    if (l) { const idx = l.indexOf(c); if (idx > 0) { const f = l[idx - 1]; const gap = (f.t - nt) * L; if (gap < .62 * Math.max(c.sc, 1)) nt = Math.max(c.t, f.t - .62 * Math.max(c.sc, 1) / L); } }
    c.t = nt;
    if (c.t >= 1) { c.t = 0; c.i++; if (c.i >= c.path.length - 1) { cars.splice(k, 1); continue; } continue; }
    const ux = (b.x - a.x) / L, uz = (b.z - a.z) / L, off = laneOff(s.t, c.lane, s.ow);
    c.x = a.x + (b.x - a.x) * c.t - uz * off; c.z = a.z + (b.z - a.z) * c.t + ux * off; c.y = (a.h || 0) + ((b.h || 0) - (a.h || 0)) * c.t;
    const ry = Math.atan2(ux, uz);
    if (c.ry === null) c.ry = ry; let d = ry - c.ry; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; c.ry += d * Math.min(1, dt * 8);
  }
  let ns = 0; const flash = (performance.now() / 180 | 0) % 2; const cnt = {};
  for (const c of cars) {
    if (n >= MAXC) break;
    if ((c.kind === 'fire' || c.kind === 'amb' || c.kind === 'pol') && ns < 40) { _q.setFromAxisAngle(_Y, c.ry || 0); _mt.compose(_p.set(c.x, .03 + (c.y || 0), c.z), _q, _s.set(1, 1, 1)); sirIM.setMatrixAt(ns, _mt); sirIM.setColorAt(ns, _c.set(flash ? (c.kind === 'fire' ? '#ffeb3b' : '#ff1744') : '#2979ff')); ns++; }
    const im = vehIM[c.vt || 'sedan'], k2 = cnt[c.vt || 'sedan'] || 0; if (k2 >= im.instanceMatrix.count) continue;
    _q.setFromAxisAngle(_Y, c.ry || 0); _mt.compose(_p.set(c.x, .025 + (c.y || 0), c.z), _q, _s.set(1, 1, 1));
    im.setMatrixAt(k2, _mt); im.setColorAt(k2, _c.set(c.col)); cnt[c.vt || 'sedan'] = k2 + 1; if (n < MAXC) headIM.setMatrixAt(n, _mt); n++;
  }
  sirIM.count = ns; sirIM.instanceMatrix.needsUpdate = true; if (sirIM.instanceColor) sirIM.instanceColor.needsUpdate = true;
  headIM.count = night > .2 ? n : 0; headIM.instanceMatrix.needsUpdate = true;
  for (const [k, im] of Object.entries(vehIM)) { im.count = cnt[k] || 0; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; }
}
export function clearTraffic() { cars = []; }

// ---------- yayalar ----------
const MAXP = 260;
const pBody = new THREE.InstancedMesh(new THREE.CylinderGeometry(.03, .035, .15, 6).translate(0, .1, 0), new THREE.MeshStandardMaterial({ roughness: .8 }), MAXP);
const pHead = new THREE.InstancedMesh(new THREE.SphereGeometry(.028, 6, 5).translate(0, .205, 0), new THREE.MeshStandardMaterial({ color: 0xe0b896, roughness: .8 }), MAXP);
pBody.count = pHead.count = 0; pBody.frustumCulled = pHead.frustumCulled = false; scene.add(pBody, pHead);
const PCOL = ['#c0392b', '#2980b9', '#27ae60', '#8e44ad', '#f39c12', '#2c3e50', '#ecf0f1', '#d35400', '#16a085', '#7f8c8d'];
let people = [];
const walkable = s => (s.t === 'street' || s.t === 'avenue') && !(R.nodes.get(s.a).h || R.nodes.get(s.b).h);
export function updPeople(dt) {
  const target = Math.min(MAXP, Math.floor((R.st.pop || 0) / 4));
  if (people.length < target && Math.random() < dt * 6) {
    const segs = [...R.segs.values()].filter(walkable);
    if (segs.length) { const s = segs[(Math.random() * segs.length) | 0], g = segGeo(s.id); people.push({ sid: s.id, t: Math.random() * g.L, dir: Math.random() < .5 ? 1 : -1, side: Math.random() < .5 ? 1 : -1, v: .22 + Math.random() * .15, col: PCOL[(Math.random() * PCOL.length) | 0], ph: Math.random() * 6 }); }
  } else if (people.length > target + 5) people.pop();
  let n = 0;
  for (let k = people.length - 1; k >= 0; k--) {
    const p = people[k], s = R.segs.get(p.sid);
    if (!s || !walkable(s)) { people.splice(k, 1); continue; }
    const g = segGeo(s.id);
    p.t += p.dir * p.v * dt; p.ph += dt * 10;
    if (p.t < 0 || p.t > g.L) {
      const node = p.t < 0 ? s.a : s.b, opts = [...R.segs.values()].filter(o => o.id !== s.id && walkable(o) && (o.a === node || o.b === node));
      if (opts.length && Math.random() < .85) { const o = opts[(Math.random() * opts.length) | 0], og = segGeo(o.id); p.sid = o.id; p.dir = o.a === node ? 1 : -1; p.t = o.a === node ? 0 : og.L; }
      else { p.dir *= -1; p.t = clamp(p.t, 0, g.L); }
      continue;
    }
    if (n >= MAXP) continue;
    const off = (g.hw - SIDEW[s.t] * ROADS[s.t].w * .5) * p.side;
    _q.setFromAxisAngle(_Y, Math.atan2(g.ux * p.dir, g.uz * p.dir));
    _mt.compose(_p.set(g.ax + g.ux * p.t + g.nx * off, .03 + Math.abs(Math.sin(p.ph)) * .012, g.az + g.uz * p.t + g.nz * off), _q, _s.set(1, 1, 1));
    pBody.setMatrixAt(n, _mt); pHead.setMatrixAt(n, _mt); pBody.setColorAt(n, _c.set(p.col)); n++;
  }
  pBody.count = pHead.count = n; pBody.instanceMatrix.needsUpdate = pHead.instanceMatrix.needsUpdate = true; if (pBody.instanceColor) pBody.instanceColor.needsUpdate = true;
}
export function clearPeople() { people = []; }

// ---------- bulutlar ----------
const clouds = [];
{
  const cm = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 1, flatShading: true, transparent: true, opacity: .92 });
  const ig = new THREE.IcosahedronGeometry(1, 1);
  for (let k = 0; k < 16; k++) {
    const g = new THREE.Group();
    const n = 4 + (k % 4);
    for (let j = 0; j < n; j++) { const m = new THREE.Mesh(ig, cm); m.userData.noDisp = 1; const r = 2 + Math.random() * 2.2; m.scale.set(r, r * .6, r * .9); m.position.set((j - n / 2) * 2.4 + Math.random(), Math.random() * .8, Math.random() * 2 - 1); m.castShadow = true; g.add(m); }
    g.position.set((Math.random() - .5) * 300, 26 + Math.random() * 8, (Math.random() - .5) * 300); g.userData.v = .5 + Math.random() * .5;
    scene.add(g); clouds.push(g);
  }
}

// ---------- havai fişek ----------
const FWN = 2400, fwPos = new Float32Array(FWN * 3), fwCol = new Float32Array(FWN * 3), fw = [];
const fwGeo = new THREE.BufferGeometry(); fwGeo.setAttribute('position', new THREE.BufferAttribute(fwPos, 3)); fwGeo.setAttribute('color', new THREE.BufferAttribute(fwCol, 3));
const fwPts = new THREE.Points(fwGeo, new THREE.PointsMaterial({ size: .35, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, map: softTexture() }));
fwPts.frustumCulled = false; fwPts.userData.noDisp = 1; scene.add(fwPts);
const shells = [];
export function fireworks(x, z, n = 6) { for (let k = 0; k < n; k++) shells.push({ x: x + (Math.random() - .5) * 16, z: z + (Math.random() - .5) * 16, y: hf(x, z), vy: 9 + Math.random() * 4, delay: k * .35 + Math.random() * .3, col: new THREE.Color().setHSL(Math.random(), 1, .6) }); }
function updFireworks(dt) {
  for (let k = shells.length - 1; k >= 0; k--) {
    const s = shells[k]; if (s.delay > 0) { s.delay -= dt; continue; }
    s.y += s.vy * dt; s.vy -= 6 * dt;
    if (fw.length < FWN) fw.push({ x: s.x, y: s.y, z: s.z, vx: 0, vy: -.5, vz: 0, life: .4, max: .4, c: new THREE.Color(1, .8, .5) });
    if (s.vy <= 1) { for (let j = 0; j < 70 && fw.length < FWN; j++) { const a = Math.random() * 6.283, b = Math.acos(Math.random() * 2 - 1), sp = 3 + Math.random() * 2; fw.push({ x: s.x, y: s.y, z: s.z, vx: Math.sin(b) * Math.cos(a) * sp, vy: Math.cos(b) * sp, vz: Math.sin(b) * Math.sin(a) * sp, life: 1.6 + Math.random() * .6, max: 2.2, c: s.col }); } shells.splice(k, 1); if (sfxBoom) sfxBoom(); }
  }
  let n = 0;
  for (let k = fw.length - 1; k >= 0; k--) {
    const p = fw[k]; p.life -= dt; if (p.life <= 0) { fw.splice(k, 1); continue; }
    p.vy -= 2.5 * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.vx *= .98; p.vz *= .98;
    const a = Math.min(1, p.life / p.max * 1.4);
    fwPos[n * 3] = p.x; fwPos[n * 3 + 1] = p.y; fwPos[n * 3 + 2] = p.z; fwCol[n * 3] = p.c.r * a; fwCol[n * 3 + 1] = p.c.g * a; fwCol[n * 3 + 2] = p.c.b * a; n++;
  }
  fwGeo.setDrawRange(0, n); fwGeo.attributes.position.needsUpdate = fwGeo.attributes.color.needsUpdate = true;
}
let sfxBoom = null; export function setBoom(f) { sfxBoom = f; }

// ---------- yağmur ----------
const RN = 1600, rainPos = new Float32Array(RN * 6), rainGeo = new THREE.BufferGeometry(); rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPos, 3));
const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: 0xaac4dd, transparent: true, opacity: .5 })); rain.frustumCulled = false; rain.visible = false; rain.userData.noDisp = 1; scene.add(rain);
const drops = []; for (let k = 0; k < RN; k++) drops.push([Math.random() * 60 - 30, Math.random() * 25, Math.random() * 60 - 30]);
let rainOn = false, rainK = 0;
export function setRain(on) { rainOn = !!on; }
function updRain(dt) {
  rainK += ((rainOn ? 1 : 0) - rainK) * Math.min(1, dt * .5);
  rain.visible = rainK > .05; if (!rain.visible) return;
  rain.material.opacity = .45 * rainK;
  for (let k = 0; k < RN; k++) { const d = drops[k]; d[1] -= 22 * dt; if (d[1] < 0) { d[1] = 25; d[0] = Math.random() * 60 - 30; d[2] = Math.random() * 60 - 30; } const x = cam.x + d[0], z = cam.z + d[2]; rainPos.set([x, d[1], z, x + .1, d[1] + .7, z], k * 6); }
  rainGeo.attributes.position.needsUpdate = true;
}

// ---------- gece ışık havuzları ----------
const glowMat = new THREE.MeshBasicMaterial({ color: 0xffc46b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, map: softTexture() });
const glowIM = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.8, 1.8).rotateX(-Math.PI / 2).translate(.15, .05, 0), glowMat, 3000); glowIM.count = 0; glowIM.renderOrder = 3; scene.add(glowIM);
const headMat = new THREE.MeshBasicMaterial({ color: 0xfff1c8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, map: softTexture() });
const headIM = new THREE.InstancedMesh(new THREE.PlaneGeometry(.5, 1.4).rotateX(-Math.PI / 2).translate(0, .04, .9), headMat, MAXC); headIM.count = 0; headIM.frustumCulled = false; scene.add(headIM);

// ---------- duman / toz ----------
const softTex = softTexture();
const smoke = [];
for (let k = 0; k < 140; k++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTex, transparent: true, depthWrite: false })); sp.visible = false; scene.add(sp); smoke.push({ sp, life: 0 }); }
function puff(x, y, z, col, life, vx, vy, s0, grow) { const p = smoke.find(s => s.life <= 0); if (!p) return; p.life = p.max = life; p.sp.visible = true; p.sp.position.set(x, y + hf(x, z), z); p.vx = vx; p.vy = vy; p.s0 = s0; p.grow = grow; p.sp.material.color.set(col); }
const fires = new Map();
const flameMat = new THREE.SpriteMaterial({ map: softTex, color: 0xff7a1a, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
export function setFire(id, on) {
  if (!on) { const f = fires.get(id); if (f) { scene.remove(f); fires.delete(id); } return; }
  const b = R.blds.get(id); if (!b || fires.has(id)) return;
  const g = new THREE.Group(); for (let k = 0; k < 5; k++) { const sp = new THREE.Sprite(flameMat); sp.userData.o = [(Math.random() - .5) * b.w * .6, Math.random() * .4, (Math.random() - .5) * b.d * .6]; g.add(sp); }
  g.position.set(b.x, (bcache.get(id)?.H || .6) * .7 + hf(b.x, b.z), b.z); g.userData.id = id; scene.add(g); fires.set(id, g);
}
export function dust(x, z) { for (let k = 0; k < 8; k++) puff(x + (Math.random() - .5) * 1.2, .2, z + (Math.random() - .5) * 1.2, 0xb8a888, .9 + Math.random() * .4, (Math.random() - .5) * .4, .4, .5, .8); }
export function updFx(dt, simDt, tm) {
  for (const e of emitters) { const b = R.blds.get(e.id); if (b && !b.svc && !(b.pow && b.conn)) continue; if (Math.random() < simDt * 2) puff(e.p[0], e.p[1], e.p[2], 0x9a9a9a, 3 + Math.random(), .25, .45, .3, 1.2); }
  for (const p of smoke) {
    if (p.life <= 0) continue; p.life -= dt; if (p.life <= 0) { p.sp.visible = false; continue; }
    const a = 1 - p.life / p.max; p.sp.position.x += p.vx * dt; p.sp.position.y += p.vy * dt;
    const s = p.s0 + a * p.grow; p.sp.scale.set(s, s, 1); p.sp.material.opacity = (1 - a) * .55;
  }
  for (const r of rotors) { const t = r.userData.t; if (t === 'rotor') r.rotation.z += dt * 2.2; else if (t === 'wheel') { r.children.forEach(ch => { if (!ch.userData.cab) ch.rotation.z = 0; }); r.rotation.z += 0; r.userData.ang = (r.userData.ang || 0) + dt * .25; r.children.forEach((ch, i) => { if (ch.userData.cab) { const a = (i - 1) / 2 / 12 * 6.283 + r.userData.ang; } }); const a0 = r.userData.ang; let ci = 0; r.children.forEach(ch => { if (ch.isMesh && ch.geometry.type === 'BoxGeometry' && !ch.userData.cab) ch.rotation.z = (ci++) / 12 * 6.283 + a0; }); let cj = 0; r.children.forEach(ch => { if (ch.userData.cab) { const a = (cj++) / 12 * 6.283 + a0; ch.position.set(Math.cos(a) * r.userData.base.r, Math.sin(a) * r.userData.base.r, 0); } }); } else if (t === 'beacon') { r.rotation.y += dt * 1.2; r.userData.beam.material.opacity = .08 + night * .25; } else if (t === 'plane') updPlane(r, tm); }
  waveNormal.offset.set((tm / 60000) % 1, (tm / 85000) % 1);
  updFireworks(dt); updRain(dt);
  glowMat.opacity = night * .55; headMat.opacity = night * .5;
  for (const [id, g] of fires) {
    if (!R.blds.has(id) || !R.blds.get(id).fire) { scene.remove(g); fires.delete(id); continue; }
    g.children.forEach((sp, k) => { const o = sp.userData.o, f = .5 + .5 * Math.sin(tm / 90 + k * 1.7); sp.position.set(o[0], o[1] + f * .2, o[2]); sp.scale.set(.5 + f * .4, .7 + f * .5, 1); });
    if (Math.random() < dt * 4) puff(g.position.x, g.position.y + .5 - hf(g.position.x, g.position.z), g.position.z, 0x333333, 3, .2, .6, .4, 1.6);
  }
  for (const c of clouds) { c.position.x += c.userData.v * dt; if (c.position.x > 160) c.position.x = -160; }
  // trafik ışıkları: A ve B grupları dönüşümlü
  const ph = Math.floor(tm / 7000) % 2;
  for (const [g, on] of [['A', ph === 0], ['B', ph === 1]]) {
    const r = MAT['tl' + g + '_r'].m, gr = MAT['tl' + g + '_g'].m;
    r.emissiveIntensity = on ? 0 : 1.2; r.color.set(on ? '#3a1414' : '#ff3b30');
    gr.emissiveIntensity = on ? 1.2 : 0; gr.color.set(on ? '#34c759' : '#123a1c');
  }
}

// ---------- vurgular / hayalet ----------
const ghostMat = new THREE.MeshBasicMaterial({ color: 0x7dff8c, transparent: true, opacity: .45, depthWrite: false });
const ghost = new THREE.Group(); scene.add(ghost);
export function setGhostRoad(plan) {
  clearGhost(); if (!plan) return;
  ghostMat.color.set(plan.ok ? 0x7dff8c : 0xff5a5a);
  const w = ROADS[plan.type].w;
  const P = (plan.curve || plan.elev) ? plan.pts : [plan.A, plan.B];
  for (let i = 0; i < P.length - 1; i++) {
    const A = P[i], B = P[i + 1], L = Math.hypot(B.x - A.x, B.z - A.z); if (L < .01) continue;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, L + (plan.curve ? w * .2 : 0)).rotateX(-Math.PI / 2), ghostMat);
    const hy = plan.elev ? ((i > 0 ? 1 : 0) + (i < P.length - 2 ? 1 : 0)) * .55 : 0;
    m.position.set((A.x + B.x) / 2, .06 + hy, (A.z + B.z) / 2); m.rotation.y = Math.atan2(B.x - A.x, B.z - A.z); m.renderOrder = 4; ghost.add(m);
  }
  // açı yayları
  const P0 = (plan.curve || plan.elev) ? plan.pts : [plan.A, plan.B];
  for (const [ri, p0] of [[plan.refA, P0[0]], [plan.refB, P0[P0.length - 1]]]) {
    if (!ri || !p0) continue;
    const a1 = Math.atan2(ri.ref[1], ri.ref[0]), a2 = Math.atan2(ri.dir[1], ri.dir[0]); let d = a2 - a1; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283;
    const r = w / 2 + 1.1, start = d >= 0 ? a1 : a1 + d;
    const geo = new THREE.RingGeometry(r - .1, r, 32, 1, 0, Math.abs(d)); geo.rotateX(Math.PI / 2); // x-z düzlemi, açı +x'ten +z'ye
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffd65a, side: THREE.DoubleSide, depthTest: false, transparent: true }));
    m.rotation.y = -start; m.position.set(p0.x, .1, p0.z); m.renderOrder = 6; ghost.add(m);
  }
  const marks = (plan.curve || plan.elev) ? [plan.A, plan.B] : (plan.pts.length ? plan.pts : [plan.A, plan.B]);
  for (const p of marks) { const d = new THREE.Mesh(new THREE.RingGeometry(w / 2 + .05, w / 2 + .25, 24).rotateX(-Math.PI / 2), ghostMat); d.position.set(p.x, .07, p.z); d.renderOrder = 4; ghost.add(d); }
}
export function setGhostRing(p) {
  clearGhost(); if (!p) return; ghostMat.color.set(p.ok ? 0x7dff8c : 0xff5a5a);
  const hw = ROADS[p.ringT].w / 2;
  const d = new THREE.Mesh(new THREE.RingGeometry(p.r - hw, p.r + hw, 48).rotateX(-Math.PI / 2), ghostMat); d.position.set(p.x, .07, p.z); d.renderOrder = 4; ghost.add(d);
}
export function setGhostNode(n, ok) {
  clearGhost(); if (!n) return; ghostMat.color.set(ok ? 0x7dff8c : 0xff5a5a);
  const d = new THREE.Mesh(new THREE.RingGeometry(2.6, 3.2, 40).rotateX(-Math.PI / 2), ghostMat); d.position.set(n.x, .07, n.z); ghost.add(d);
}
export function setGhostBld(p) {
  clearGhost(); if (!p) return;
  ghostMat.color.set(p.ok ? 0x7dff8c : 0xff5a5a);
  const out = new Map(); buildModel({ ...p, id: 999999, v: .5 }, out);
  for (const [, mb] of out) { const m = new THREE.Mesh(toGeometry(mb), ghostMat); m.position.y = .02; m.renderOrder = 4; ghost.add(m); }
  const base = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.d).rotateX(-Math.PI / 2), ghostMat); base.position.set(p.x, .07, p.z); base.rotation.y = p.a; ghost.add(base);
  // etki alanı
  const r = SVC[p.svc]?.r; if (r) { const ring = new THREE.Mesh(new THREE.RingGeometry(r - .15, r, 64).rotateX(-Math.PI / 2), ghostMat); ring.position.set(p.x, .08, p.z); ghost.add(ring); }
}
export function setBrush(x, z, r, color) {
  clearGhost(); if (x === null) return;
  ghostMat.color.set(color);
  const ring = new THREE.Mesh(new THREE.RingGeometry(r - .08, r, 40).rotateX(-Math.PI / 2), ghostMat); ring.position.set(x, .08, z); ghost.add(ring);
}
export function clearGhost() { for (const c of [...ghost.children]) { ghost.remove(c); c.geometry.dispose(); } }
const selMat = new THREE.MeshBasicMaterial({ color: 0xffd65a, transparent: true, opacity: .4, depthWrite: false });
const sel = new THREE.Group(); scene.add(sel);
export function setSelect(obj) {
  for (const c of [...sel.children]) { sel.remove(c); c.geometry.dispose(); }
  if (!obj) return;
  if (obj.kind === 'bld') {
    const b = obj.b; const m = new THREE.Mesh(new THREE.PlaneGeometry(b.w + .1, b.d + .1).rotateX(-Math.PI / 2), selMat); m.position.set(b.x, .09, b.z); m.rotation.y = b.a; sel.add(m);
    const r = b.svc && SVC[b.svc].r; if (r) { const ring = new THREE.Mesh(new THREE.RingGeometry(r - .15, r, 64).rotateX(-Math.PI / 2), selMat); ring.position.set(b.x, .09, b.z); sel.add(ring); }
  } else if (obj.kind === 'node') {
    const N = R.nodes.get(obj.id); if (!N) return; const r = nodeHW(obj.id) + .6;
    const m = new THREE.Mesh(new THREE.RingGeometry(r - .15, r, 40).rotateX(-Math.PI / 2), selMat); m.position.set(N.x, .1, N.z); sel.add(m);
  } else if (obj.kind === 'seg') {
    const g = segGeo(obj.id); const m = new THREE.Mesh(new THREE.PlaneGeometry(g.hw * 2 + .1, g.L).rotateX(-Math.PI / 2), selMat);
    m.position.set((g.ax + g.bx) / 2, .09, (g.az + g.bz) / 2); m.rotation.y = Math.atan2(g.ux, g.uz); sel.add(m);
  }
}

// ---------- uyarı simgeleri ----------
const iconTex = {};
const icons = new Map();
function getIcon(e) { return iconTex[e] || (iconTex[e] = new THREE.SpriteMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#e74c3c'; g.beginPath(); g.arc(32, 32, 28, 0, 7); g.fill(); g.strokeStyle = '#fff'; g.lineWidth = 4; g.stroke(); g.font = '30px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(e, 32, 34); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })(), depthTest: false })); }
export function syncIcons(on) {
  const want = new Map();
  if (on) for (const b of R.blds.values()) {
    if (b.svc) { if (!b.ok) want.set(b.id, '🛣️'); continue; }
    const e = !b.conn ? '🛣️' : !b.pow ? '⚡' : !b.wat ? '💧' : null; if (e) want.set(b.id, e);
  }
  for (const [id, sp] of icons) if (want.get(id) !== sp.userData.e) { scene.remove(sp); icons.delete(id); }
  for (const [id, e] of want) if (!icons.has(id)) {
    const b = R.blds.get(id), sp = new THREE.Sprite(getIcon(e)); sp.userData = { e, y: 1.4 + (b.lvl || 1) * .2 }; sp.scale.set(.6, .6, 1);
    sp.userData.y += hf(b.x, b.z); sp.position.set(b.x, sp.userData.y, b.z); sp.renderOrder = 15; scene.add(sp); icons.set(id, sp);
  }
}
export function bobIcons(tm) { const s = Math.sin(tm / 300) * .08; for (const sp of icons.values()) sp.position.y = sp.userData.y + s; }

// ---------- kamera ----------
export const cam = { x: -6, z: 2, dist: 34, yaw: Math.PI * .25, yawT: Math.PI * .25 };
export let VW = 1, VH = 1;
export const pitchFor = d => .55 + clamp((d - 6) / 100, 0, 1) * .55;
export function updCam() {
  const p = pitchFor(cam.dist), cp = Math.cos(p);
  camera.position.set(cam.x + Math.sin(cam.yaw) * cp * cam.dist, Math.sin(p) * cam.dist, cam.z + Math.cos(cam.yaw) * cp * cam.dist);
  camera.lookAt(cam.x, 0, cam.z); camera.updateMatrixWorld();
  const sh = clamp(cam.dist * 1.1, 14, 90);
  const sc = sun.shadow.camera; if (sc.right !== sh) { sc.left = -sh; sc.right = sh; sc.top = sh; sc.bottom = -sh; sc.far = 300; sc.updateProjectionMatrix(); }
  scene.fog.near = cam.dist * 2.2; scene.fog.far = cam.dist * 2.2 + 160;
}
export function resize() {
  VW = innerWidth; VH = innerHeight; renderer.setSize(VW, VH, false);
  camera.aspect = VW / VH; camera.fov = VW < VH ? 50 : 40; camera.updateProjectionMatrix();
}
const _ray = new THREE.Raycaster(), _ndc = new THREE.Vector2();
export function groundAt(x, y) {
  _ndc.set(x / VW * 2 - 1, -(y / VH) * 2 + 1); _ray.setFromCamera(_ndc, camera);
  const o = _ray.ray.origin, d = _ray.ray.direction; if (d.y > -1e-4) return null;
  let t = -o.y / d.y, gx = o.x + d.x * t, gz = o.z + d.z * t;
  for (let k = 0; k < 4; k++) { const h = hf(gx, gz); t = (h - o.y) / d.y; gx = o.x + d.x * t; gz = o.z + d.z * t; }
  return [gx, gz];
}
const _pv = new THREE.Vector3();
export function project(x, y, z) { _pv.set(x, y + hf(x, z), z).project(camera); if (_pv.z > 1) return null; return [(_pv.x + 1) / 2 * VW, (1 - _pv.y) / 2 * VH]; }

// ---------- ışık / gece-gündüz ----------
const C_HD = new THREE.Color(0xdcefff), C_HN = new THREE.Color(0x6a80b0), C_GD = new THREE.Color(0x4d6b35), C_GN = new THREE.Color(0x2c3850);
const C_DAY = new THREE.Color(0xa9d3ef), C_SET = new THREE.Color(0xf2a772), C_NIGHT = new THREE.Color(0x16264a), _sky = new THREE.Color();
export let night = 0;
const _rainC = new THREE.Color(0x7d8a96);
export function updLight(tkF, shadowsOn) {
  const hr = (tkF % 144) / 6, el = Math.sin((hr - 6) / 12 * Math.PI), az = (hr - 6) / 12 * Math.PI;
  const dayK = clamp((el + .1) / .4, 0, 1); night = clamp((.12 - el) / .25, 0, 1);
  const D = 60;
  sun.position.set(cam.x + Math.cos(az) * D * .7, Math.max(.6, Math.abs(el)) * D, cam.z + D * .4); sun.target.position.set(cam.x, 0, cam.z);
  sun.intensity = (el > 0 ? .6 + 2.2 * clamp(el * 1.6, 0, 1) : .7) * (1 - rainK * .6);
  sun.color.set(el > .25 ? 0xfff0d8 : el > 0 ? 0xffb37a : 0x9fb6ff);
  hemi.intensity = (.6 + .5 * dayK) * (1 - rainK * .3); hemi.color.copy(C_HN).lerp(C_HD, dayK); hemi.groundColor.copy(C_GN).lerp(C_GD, dayK);
  const setK = clamp(1 - Math.abs(el) / .3, 0, 1) * (1 - night * .6);
  _sky.copy(C_NIGHT).lerp(C_DAY, dayK).lerp(C_SET, setK * .55).lerp(_rainC, rainK * .55); scene.background.copy(_sky); scene.fog.color.copy(_sky);
  const em = night * 1.15; for (const m of nightMats) m.emissiveIntensity = em;
  renderer.shadowMap.enabled = shadowsOn;
}
let patchT = 0;
function patchScene() {
  scene.traverse(o => {
    if (!o.isMesh || o.userData.noDisp) return;
    const ms = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of ms) if (!m.userData.disp) disp(m);
    if (o.castShadow && o.customDepthMaterial !== DEPTH) o.customDepthMaterial = DEPTH;
  });
}
export function render() { if (--patchT <= 0) { patchScene(); patchT = 30; } renderer.render(scene, camera); }
export function setQuality(hi) {
  renderer.setPixelRatio(Math.min(hi ? 2 : 1.25, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = hi; sun.castShadow = hi;
  if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  scene.traverse(o => { if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => m.needsUpdate = true); } });
  resize();
}
export function resetWorldGfx() {
  for (const ch of chunks.values()) { scene.remove(ch.group); ch.group.traverse(o => o.geometry && o.geometry.dispose()); }
  chunks.clear(); bcache.clear(); cars = []; people = []; for (const g of fires.values()) scene.remove(g); fires.clear(); for (const c of cons.values()) scene.remove(c.group); cons.clear(); for (const sp of icons.values()) scene.remove(sp); icons.clear();
}
