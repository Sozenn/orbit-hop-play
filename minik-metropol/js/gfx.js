// 3D sahne: zemin, su, yollar, binalar (parça parça birleştirilmiş), ağaçlar, trafik, efektler
import * as THREE from '../lib/three.module.js';
import { TILE, TILES, WORLD, WH, ROADS, ZONES, SVC } from './data.js';
import { S, R, segGeo, nodeHW, degree, gi, tileOf, hash, findPath, segBetween, clamp, isWater, trimAt, SIDEW } from './world.js';
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
const M = k => (MAT[k] ? MAT[k].m : MAT.concrete.m);

// ---------- zemin ----------
const grassTex = grassTexture(); grassTex.repeat.set(600 / 5, 600 / 5);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(600, 600), new THREE.MeshStandardMaterial({ map: grassTex, roughness: 1 }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

// ---------- su ----------
let waterMesh = null, sandMesh = null;
const waterMat = new THREE.MeshStandardMaterial({ color: 0x3a88bf, roughness: .08, metalness: .25, transparent: true, opacity: .93 });
const sandMat = new THREE.MeshStandardMaterial({ color: 0xcfba86, roughness: 1 });
export function buildWater() {
  for (const m of [waterMesh, sandMesh]) if (m) { scene.remove(m); m.geometry.dispose(); }
  const wp = [], sp = [];
  const quad = (arr, x0, z0, x1, z1, y) => arr.push(x0, y, z1, x1, y, z1, x1, y, z0, x0, y, z1, x1, y, z0, x0, y, z0);
  const sand = new Uint8Array(WORLD * WORLD);
  for (let zi = 0; zi < WORLD; zi++) for (let xi = 0; xi < WORLD; xi++) if (R.water[zi * WORLD + xi]) for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const x = xi + a, z = zi + b; if (x >= 0 && z >= 0 && x < WORLD && z < WORLD) sand[z * WORLD + x] = 1; }
  for (let zi = 0; zi < WORLD; zi++) {
    for (const [mask, arr, y, pad] of [[R.water, wp, .012, 0], [sand, sp, .006, .25]]) {
      let run = -1;
      for (let xi = 0; xi <= WORLD; xi++) {
        const on = xi < WORLD && mask[zi * WORLD + xi];
        if (on && run < 0) run = xi;
        if (!on && run >= 0) { quad(arr, run - WH - pad, zi - WH - pad, xi - WH + pad, zi + 1 - WH + pad, y); run = -1; }
      }
    }
  }
  const mk = (arr, mat) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.receiveShadow = true; scene.add(m); return m; };
  waterMesh = mk(wp, waterMat); sandMesh = mk(sp, sandMat);
}

// ---------- yollar ----------
const roadMats = {}; for (const t of Object.keys(ROADS)) roadMats[t] = new THREE.MeshStandardMaterial({ map: roadTexture(t), roughness: .92, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
const discMat = new THREE.MeshStandardMaterial({ color: 0x3e4147, roughness: .92, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
const dirtDiscMat = new THREE.MeshStandardMaterial({ color: 0x9b7b55, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
const roadGroup = new THREE.Group(); scene.add(roadGroup);
const ROADY = { dirt: .02, street: .022, avenue: .024, highway: .026 };
const lampGeo = new THREE.CylinderGeometry(.018, .024, .7, 5).translate(0, .35, 0);
const lampHeadGeo = new THREE.BoxGeometry(.18, .03, .06).translate(.07, .7, 0);
const lampPole = new THREE.InstancedMesh(lampGeo, new THREE.MeshStandardMaterial({ color: 0x3a3f45, metalness: .5, roughness: .5 }), 3000);
const lampHead = new THREE.InstancedMesh(lampHeadGeo, M('lamp'), 3000);
lampPole.castShadow = true; lampPole.count = lampHead.count = 0; scene.add(lampPole, lampHead);
const _mt = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _s = new THREE.Vector3(1, 1, 1), _Y = new THREE.Vector3(0, 1, 0), _c = new THREE.Color();
const curbMat = new THREE.MeshStandardMaterial({ color: 0xbdb8ad, roughness: .95, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
const zebraMat = new THREE.MeshStandardMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = 128; c.height = 32; const g = c.getContext('2d'); g.clearRect(0, 0, 128, 32); g.fillStyle = 'rgba(245,245,240,.95)'; for (let x = 4; x < 128; x += 16) g.fillRect(x, 0, 9, 32); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = THREE.RepeatWrapping; return t; })(), transparent: true, roughness: .9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4, depthWrite: false });
const stopMat = new THREE.MeshStandardMaterial({ color: 0xf2f2ee, roughness: .9, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
function triUp(arr, a, b, c, y) { // yukarı bakan üçgen
  const cr = (b[1] - a[1]) * (c[0] - a[0]) - (b[0] - a[0]) * (c[1] - a[1]);
  if (cr >= 0) arr.push(a[0], y, a[1], b[0], y, b[1], c[0], y, c[1]); else arr.push(a[0], y, a[1], c[0], y, c[1], b[0], y, b[1]);
}
function quadUV(o, P, UV, y) { // P: 4 köşe, yukarı bakacak şekilde sırala
  const cr = (P[1][1] - P[0][1]) * (P[2][0] - P[0][0]) - (P[1][0] - P[0][0]) * (P[2][1] - P[0][1]);
  const ord = cr >= 0 ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2];
  for (const q of ord) { o.p.push(P[q][0], y, P[q][1]); o.n.push(0, 1, 0); o.u.push(UV[q][0], UV[q][1]); }
}
export function buildRoads() {
  for (const c of [...roadGroup.children]) { roadGroup.remove(c); c.geometry.dispose(); }
  const per = {}, disc = [], dirtDisc = [], curbs = [], stops = [], zebra = { p: [], n: [], u: [] }, extra = new Map();
  let ln = 0;
  const ex = (x, z, a) => new Ctx(x, z, a, extra);
  for (const s of R.segs.values()) {
    const g = segGeo(s.id), rt = ROADS[s.t], hw = g.hw, y = ROADY[s.t];
    const arr = per[s.t] || (per[s.t] = { p: [], n: [], u: [] });
    const ta = trimAt(s.a, s.id), tb = trimAt(s.b, s.id);
    const s0 = ta, s1 = g.L - tb;
    const at = t => [g.ax + g.ux * t, g.az + g.uz * t];
    if (s1 - s0 > .02) {
      const A = at(s0), B = at(s1), nx = g.nx, nz = g.nz;
      quadUV(arr, [[A[0] + nx * hw, A[1] + nz * hw], [A[0] - nx * hw, A[1] - nz * hw], [B[0] - nx * hw, B[1] - nz * hw], [B[0] + nx * hw, B[1] + nz * hw]], [[0, s0 / rt.w], [1, s0 / rt.w], [1, s1 / rt.w], [0, s1 / rt.w]], y);
    }
    const sw = SIDEW[s.t] * rt.w, ah = hw - sw, ang = Math.atan2(g.ux, g.uz);
    // kavşak ağzı: yaya geçidi, dur çizgisi, trafik ışığı
    if (s.t !== 'dirt' && s.t !== 'highway') for (const [nid, t0, dir] of [[s.a, ta, 1], [s.b, g.L - tb, -1]]) {
      const J = R.junc.get(nid); if (!J || J.n < 3) continue;
      if (s1 - s0 < 1.2) continue;
      const c = t0 + dir * .32, l = .3, C = at(c);
      const P = [[C[0] + g.nx * ah - g.ux * l / 2, C[1] + g.nz * ah - g.uz * l / 2], [C[0] - g.nx * ah - g.ux * l / 2, C[1] - g.nz * ah - g.uz * l / 2], [C[0] - g.nx * ah + g.ux * l / 2, C[1] - g.nz * ah + g.uz * l / 2], [C[0] + g.nx * ah + g.ux * l / 2, C[1] + g.nz * ah + g.uz * l / 2]];
      const rep = ah * 2 / .45; quadUV(zebra, P, [[0, 0], [rep, 0], [rep, 1], [0, 1]], .034);
      // dur çizgisi: düğüme doğru gelen şerit (yön -dir*u, sağ şerit)
      const sc = t0 + dir * .58, S0 = at(sc), side = -dir; // gelen trafik sağdan: offset (-uz,ux)*(-dir)
      const ox = -g.uz * side, oz = g.ux * side;
      const q = [[S0[0], S0[1]], [S0[0] + ox * ah, S0[1] + oz * ah], [S0[0] + ox * ah + g.ux * dir * .07, S0[1] + oz * ah + g.uz * dir * .07], [S0[0] + g.ux * dir * .07, S0[1] + g.uz * dir * .07]];
      triUp(stops, q[0], q[1], q[2], .034); triUp(stops, q[0], q[2], q[3], .034);
      // trafik ışığı (gelen şeridin sağ kaldırımında)
      const T = at(t0 + dir * .7), px = T[0] + ox * (ah + sw * .5), pz = T[1] + oz * (ah + sw * .5);
      const c2 = ex(px, pz, ang + (dir > 0 ? Math.PI : 0));
      c2.cyl('metal_d', 0, 0, 0, .02, .75, 6); c2.box('black', 'black', 0, .62, 0, .08, .22, .06);
      const on = (nid + s.id) % 2 ? 'tl_green' : 'tl_red';
      c2.box(on, on, 0, on === 'tl_red' ? .78 : .66, .032, .04, .04, .01);
    }
    // köprü
    let run = -1;
    for (let t = 0; t <= g.L + .001; t += .5) {
      const P0 = at(t), wet = isWater(P0[0], P0[1]);
      if (wet && run < 0) run = Math.max(0, t - 1);
      if ((!wet || t + .5 > g.L) && run >= 0) {
        const t1 = Math.min(g.L, t + 1), mid = (run + t1) / 2, len = t1 - run, M2 = at(mid);
        const c = ex(M2[0], M2[1], ang);
        c.box('concrete_d', 'concrete', 0, -.25, 0, hw * 2 + .2, .27, len);
        c.box('concrete', 'concrete', hw + .05, .02, 0, .08, .12, len); c.box('concrete', 'concrete', -hw - .05, .02, 0, .08, .12, len);
        for (let k = -len / 2 + .5; k < len / 2; k += 2.5) c.box('concrete_d', null, 0, -.6, k, .3, .4, .3);
        run = -1;
      }
    }
    if (s.t === 'highway' && s1 - s0 > .4) { const M2 = at((s0 + s1) / 2); ex(M2[0], M2[1], ang).box('concrete', 'concrete', 0, y, 0, .07, .09, s1 - s0 - .2); }
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
  lampPole.instanceMatrix.needsUpdate = lampHead.instanceMatrix.needsUpdate = true;
  lampPole.computeBoundingSphere(); lampHead.computeBoundingSphere();
  for (const [t, arr] of Object.entries(per)) { const m = new THREE.Mesh(toGeometry(arr), roadMats[t]); m.receiveShadow = true; roadGroup.add(m); }
  // kavşak yüzeyleri ve kavisli kaldırımlar
  for (const [nid, J] of R.junc) {
    const N = R.nodes.get(nid); if (!N || J.poly.length < 3) continue;
    const arr = J.dirt ? dirtDisc : disc, C = [N.x, N.z];
    for (let k = 0; k < J.poly.length; k++) triUp(arr, C, J.poly[k], J.poly[(k + 1) % J.poly.length], .028);
    for (const c of J.curbs) {
      if (c.sw <= 0) continue;
      const P = c.pts, off = [];
      for (let k = 0; k < P.length; k++) { // dışa doğru (sağ normal) ortalama
        const p0 = P[Math.max(0, k - 1)], p1 = P[Math.min(P.length - 1, k + 1)], ex2 = p1[0] - p0[0], ez2 = p1[1] - p0[1], el = Math.hypot(ex2, ez2) || 1;
        off.push([P[k][0] + ez2 / el * c.sw, P[k][1] - ex2 / el * c.sw]);
      }
      for (let k = 0; k < P.length - 1; k++) { triUp(curbs, P[k], P[k + 1], off[k + 1], .031); triUp(curbs, P[k], off[k + 1], off[k], .031); }
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
  c = { sig, mats, emit: ctx.emit, dyn: ctx.dyn }; bcache.set(b.id, c); return c;
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
  while (rotors.length > want.length) { const r = rotors.pop(); scene.remove(r); }
  for (let k = 0; k < want.length; k++) {
    let r = rotors[k]; if (!r) { r = new THREE.Mesh(rotorGeo, rotorMat); r.castShadow = true; scene.add(r); rotors.push(r); }
    r.position.set(...want[k].p); r.rotation.set(0, want[k].a, 0); r.userData.id = want[k].id;
  }
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

// ---------- ağaçlar ----------
const MAXT = 12000;
const trunkGeo = new THREE.CylinderGeometry(.04, .06, .34, 5).translate(0, .17, 0);
const leafGeo = new THREE.IcosahedronGeometry(.26, 1).translate(0, .5, 0);
const pineGeo = new THREE.ConeGeometry(.2, .7, 7).translate(0, .6, 0);
const trunkIM = new THREE.InstancedMesh(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x6b4a2e }), MAXT);
const leafIM = new THREE.InstancedMesh(leafGeo, new THREE.MeshStandardMaterial({ roughness: .9, flatShading: true }), MAXT);
const pineIM = new THREE.InstancedMesh(pineGeo, new THREE.MeshStandardMaterial({ roughness: .9, flatShading: true }), MAXT);
for (const im of [trunkIM, leafIM, pineIM]) { im.castShadow = true; im.receiveShadow = true; im.count = 0; scene.add(im); }
const outsideTrees = [];
{ let s = 4242; const r = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; for (let k = 0; k < 2600; k++) { const x = (r() - .5) * 420, z = (r() - .5) * 420; if (Math.abs(x) < WH + 1 && Math.abs(z) < WH + 1) continue; if (r() < .55) outsideTrees.push([x, z, 1 + r() * .8, r() < .4, r()]); } }
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
const carGeo = new THREE.BoxGeometry(.22, .12, .5).translate(0, .1, 0);
const cabGeo = new THREE.BoxGeometry(.2, .09, .26).translate(0, .2, -.03);
const carIM = new THREE.InstancedMesh(carGeo, new THREE.MeshStandardMaterial({ roughness: .4, metalness: .3 }), MAXC);
const cabIM = new THREE.InstancedMesh(cabGeo, new THREE.MeshStandardMaterial({ color: 0x1d2a36, roughness: .2, metalness: .5 }), MAXC);
carIM.castShadow = true; carIM.count = cabIM.count = 0; scene.add(carIM, cabIM);
carIM.frustumCulled = cabIM.frustumCulled = false;
const CARCOL = ['#c0392b', '#f1c40f', '#2e86de', '#ecf0f1', '#27ae60', '#34495e', '#e67e22', '#7f8c8d', '#ffffff', '#1e272e'];
let cars = [];
function laneOff(t, lane) { const rt = ROADS[t]; return rt.lanes === 1 ? rt.w * .2 : rt.w * (lane ? .36 : .2); }
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
  const truck = Math.random() < .12, bus = !truck && Math.random() < .06;
  cars.push({ path, i: 0, t: 0, lane: Math.random() < .5 ? 1 : 0, col: truck ? '#dfe4ea' : bus ? '#f6c90e' : CARCOL[(Math.random() * CARCOL.length) | 0], sc: truck ? 1.35 : bus ? 1.6 : 1, ry: null, x: 0, z: 0 });
}
export function updTraffic(dt) {
  const target = Math.min(MAXC, Math.floor((R.st.pop || 0) / 12) + 6, Math.floor(R.segs.size * 1.5));
  if (cars.length < target && Math.random() < dt * 4) spawnCar();
  let n = 0;
  for (let k = cars.length - 1; k >= 0; k--) {
    const c = cars[k];
    const a = R.nodes.get(c.path[c.i]), b = R.nodes.get(c.path[c.i + 1]);
    const s = a && b ? segBetween(a.id, b.id) : null;
    if (!s) { cars.splice(k, 1); continue; }
    const L = Math.hypot(b.x - a.x, b.z - a.z) || 1;
    c.t += dt * ROADS[s.t].speed * .9 / L;
    if (c.t >= 1) { c.t = 0; c.i++; if (c.i >= c.path.length - 1) { cars.splice(k, 1); continue; } continue; }
    const ux = (b.x - a.x) / L, uz = (b.z - a.z) / L, off = laneOff(s.t, c.lane);
    c.x = a.x + (b.x - a.x) * c.t - uz * off; c.z = a.z + (b.z - a.z) * c.t + ux * off;
    const ry = Math.atan2(ux, uz);
    if (c.ry === null) c.ry = ry; let d = ry - c.ry; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; c.ry += d * Math.min(1, dt * 8);
  }
  for (const c of cars) {
    if (n >= MAXC) break;
    _q.setFromAxisAngle(_Y, c.ry || 0); _mt.compose(_p.set(c.x, .03, c.z), _q, _s.set(c.sc > 1.2 ? 1.1 : 1, c.sc > 1.2 ? 1.5 : 1, c.sc));
    carIM.setMatrixAt(n, _mt); carIM.setColorAt(n, _c.set(c.col));
    if (c.sc > 1.2) _mt.makeScale(0, 0, 0); cabIM.setMatrixAt(n, _mt); n++;
  }
  _s.set(1, 1, 1);
  carIM.count = cabIM.count = n; carIM.instanceMatrix.needsUpdate = cabIM.instanceMatrix.needsUpdate = true; if (carIM.instanceColor) carIM.instanceColor.needsUpdate = true;
}
export function clearTraffic() { cars = []; }

// ---------- duman / toz ----------
const softTex = softTexture();
const smoke = [];
for (let k = 0; k < 140; k++) { const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: softTex, transparent: true, depthWrite: false })); sp.visible = false; scene.add(sp); smoke.push({ sp, life: 0 }); }
function puff(x, y, z, col, life, vx, vy, s0, grow) { const p = smoke.find(s => s.life <= 0); if (!p) return; p.life = p.max = life; p.sp.visible = true; p.sp.position.set(x, y, z); p.vx = vx; p.vy = vy; p.s0 = s0; p.grow = grow; p.sp.material.color.set(col); }
export function dust(x, z) { for (let k = 0; k < 8; k++) puff(x + (Math.random() - .5) * 1.2, .2, z + (Math.random() - .5) * 1.2, 0xb8a888, .9 + Math.random() * .4, (Math.random() - .5) * .4, .4, .5, .8); }
export function updFx(dt, simDt, tm) {
  for (const e of emitters) { const b = R.blds.get(e.id); if (b && !b.svc && !(b.pow && b.conn)) continue; if (Math.random() < simDt * 2) puff(e.p[0], e.p[1], e.p[2], 0x9a9a9a, 3 + Math.random(), .25, .45, .3, 1.2); }
  for (const p of smoke) {
    if (p.life <= 0) continue; p.life -= dt; if (p.life <= 0) { p.sp.visible = false; continue; }
    const a = 1 - p.life / p.max; p.sp.position.x += p.vx * dt; p.sp.position.y += p.vy * dt;
    const s = p.s0 + a * p.grow; p.sp.scale.set(s, s, 1); p.sp.material.opacity = (1 - a) * .55;
  }
  for (const r of rotors) r.rotation.z += dt * 2.2;
}

// ---------- vurgular / hayalet ----------
const ghostMat = new THREE.MeshBasicMaterial({ color: 0x7dff8c, transparent: true, opacity: .45, depthWrite: false });
const ghost = new THREE.Group(); scene.add(ghost);
export function setGhostRoad(plan) {
  clearGhost(); if (!plan) return;
  ghostMat.color.set(plan.ok ? 0x7dff8c : 0xff5a5a);
  const w = ROADS[plan.type].w;
  const P = plan.curve ? plan.pts : [plan.A, plan.B];
  for (let i = 0; i < P.length - 1; i++) {
    const A = P[i], B = P[i + 1], L = Math.hypot(B.x - A.x, B.z - A.z); if (L < .01) continue;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, L + (plan.curve ? w * .2 : 0)).rotateX(-Math.PI / 2), ghostMat);
    m.position.set((A.x + B.x) / 2, .06, (A.z + B.z) / 2); m.rotation.y = Math.atan2(B.x - A.x, B.z - A.z); m.renderOrder = 4; ghost.add(m);
  }
  const marks = plan.curve ? [plan.A, plan.B] : (plan.pts.length ? plan.pts : [plan.A, plan.B]);
  for (const p of marks) { const d = new THREE.Mesh(new THREE.RingGeometry(w / 2 + .05, w / 2 + .25, 24).rotateX(-Math.PI / 2), ghostMat); d.position.set(p.x, .07, p.z); d.renderOrder = 4; ghost.add(d); }
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
    sp.position.set(b.x, sp.userData.y, b.z); sp.renderOrder = 15; scene.add(sp); icons.set(id, sp);
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
  const t = -o.y / d.y; return [o.x + d.x * t, o.z + d.z * t];
}
const _pv = new THREE.Vector3();
export function project(x, y, z) { _pv.set(x, y, z).project(camera); if (_pv.z > 1) return null; return [(_pv.x + 1) / 2 * VW, (1 - _pv.y) / 2 * VH]; }

// ---------- ışık / gece-gündüz ----------
const C_HD = new THREE.Color(0xdcefff), C_HN = new THREE.Color(0x6a80b0), C_GD = new THREE.Color(0x4d6b35), C_GN = new THREE.Color(0x2c3850);
const C_DAY = new THREE.Color(0xa9d3ef), C_SET = new THREE.Color(0xf2a772), C_NIGHT = new THREE.Color(0x16264a), _sky = new THREE.Color();
export let night = 0;
export function updLight(tkF, shadowsOn) {
  const hr = (tkF % 144) / 6, el = Math.sin((hr - 6) / 12 * Math.PI), az = (hr - 6) / 12 * Math.PI;
  const dayK = clamp((el + .1) / .4, 0, 1); night = clamp((.12 - el) / .25, 0, 1);
  const D = 60;
  sun.position.set(cam.x + Math.cos(az) * D * .7, Math.max(.6, Math.abs(el)) * D, cam.z + D * .4); sun.target.position.set(cam.x, 0, cam.z);
  sun.intensity = el > 0 ? .6 + 2.2 * clamp(el * 1.6, 0, 1) : .7;
  sun.color.set(el > .25 ? 0xfff0d8 : el > 0 ? 0xffb37a : 0x9fb6ff);
  hemi.intensity = .6 + .5 * dayK; hemi.color.copy(C_HN).lerp(C_HD, dayK); hemi.groundColor.copy(C_GN).lerp(C_GD, dayK);
  const setK = clamp(1 - Math.abs(el) / .3, 0, 1) * (1 - night * .6);
  _sky.copy(C_NIGHT).lerp(C_DAY, dayK).lerp(C_SET, setK * .55); scene.background.copy(_sky); scene.fog.color.copy(_sky);
  const em = night * 1.15; for (const m of nightMats) m.emissiveIntensity = em;
  renderer.shadowMap.enabled = shadowsOn;
}
export function render() { renderer.render(scene, camera); }
export function setQuality(hi) {
  renderer.setPixelRatio(Math.min(hi ? 2 : 1.25, window.devicePixelRatio || 1));
  renderer.shadowMap.enabled = hi; sun.castShadow = hi;
  if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
  scene.traverse(o => { if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach(m => m.needsUpdate = true); } });
  resize();
}
export function resetWorldGfx() {
  for (const ch of chunks.values()) { scene.remove(ch.group); ch.group.traverse(o => o.geometry && o.geometry.dispose()); }
  chunks.clear(); bcache.clear(); cars = []; for (const c of cons.values()) scene.remove(c.group); cons.clear(); for (const sp of icons.values()) scene.remove(sp); icons.clear();
}
