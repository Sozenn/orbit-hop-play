// 3D sahne: zemin, su, yollar, binalar (parça parça birleştirilmiş), ağaçlar, trafik, efektler
import * as THREE from '../lib/three.module.js';
import { TILE, TILES, WORLD, WH, ROADS, ZONES, SVC } from './data.js';
import { S, R, segGeo, nodeHW, degree, gi, tileOf, hash, findPath, segBetween, clamp, isWater } from './world.js';
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
export function buildRoads() {
  for (const c of [...roadGroup.children]) { roadGroup.remove(c); c.geometry.dispose(); }
  const per = {}, disc = [], dirtDisc = [], extra = new Map();
  const ex = k => { let b = extra.get(k); if (!b) extra.set(k, b = new MB()); return b; };
  let ln = 0;
  for (const s of R.segs.values()) {
    const g = segGeo(s.id), rt = ROADS[s.t], hw = g.hw, y = ROADY[s.t];
    const arr = per[s.t] || (per[s.t] = { p: [], n: [], u: [] });
    const ax = g.ax, az = g.az, bx = g.bx, bz = g.bz, nx = g.nx, nz = g.nz;
    const v0 = 0, v1 = g.L / rt.w;
    const P = [[ax + nx * hw, az + nz * hw], [ax - nx * hw, az - nz * hw], [bx - nx * hw, bz - nz * hw], [bx + nx * hw, bz + nz * hw]];
    const UV = [[0, v0], [1, v0], [1, v1], [0, v1]];
    // iki üçgen; yukarı bakan
    const tri = (i, j, k) => { for (const q of [i, j, k]) { arr.p.push(P[q][0], y, P[q][1]); arr.n.push(0, 1, 0); arr.u.push(UV[q][0], UV[q][1]); } };
    const cr = (P[1][0] - P[0][0]) * (P[2][1] - P[0][1]) - (P[1][1] - P[0][1]) * (P[2][0] - P[0][0]);
    if (cr < 0) { tri(0, 1, 2); tri(0, 2, 3); } else { tri(0, 2, 1); tri(0, 3, 2); }
    // köprü
    let run = -1;
    for (let t = 0; t <= g.L + .001; t += .5) {
      const wet = isWater(ax + g.ux * t, az + g.uz * t);
      if (wet && run < 0) run = Math.max(0, t - 1);
      if ((!wet || t + .5 > g.L) && run >= 0) {
        const t1 = Math.min(g.L, t + 1), mid = (run + t1) / 2, len = t1 - run;
        const c = new Ctx(ax + g.ux * mid, az + g.uz * mid, Math.atan2(g.ux, g.uz), extra);
        c.box('concrete_d', 'concrete', 0, -.25, 0, hw * 2 + .2, .27, len);
        c.box('concrete', 'concrete', hw + .05, .02, 0, .08, .12, len); c.box('concrete', 'concrete', -hw - .05, .02, 0, .08, .12, len);
        for (let k = -len / 2 + .5; k < len / 2; k += 2.5) c.box('concrete_d', null, 0, -.6, k, .3, .4, .3);
        run = -1;
      }
    }
    // otoban bariyeri
    if (s.t === 'highway') {
      const ta = nodeHW(s.a) + .2, tb = nodeHW(s.b) + .2;
      if (g.L > ta + tb) { const mid = (ta + g.L - tb) / 2; const c = new Ctx(ax + g.ux * mid, az + g.uz * mid, Math.atan2(g.ux, g.uz), extra); c.box('concrete', 'concrete', 0, y, 0, .07, .09, g.L - ta - tb); }
    }
    // lambalar
    if (s.t !== 'dirt') {
      const ta = nodeHW(s.a) + .6, tb = nodeHW(s.b) + .6, step = 3.2;
      for (let t = ta; t < g.L - tb; t += step) for (const sd of (s.t === 'avenue' || s.t === 'highway') ? [0] : [1, -1]) {
        if (ln >= 3000) break;
        const off = sd === 0 ? 0 : (hw - .12) * sd;
        _p.set(ax + g.ux * t + nx * off, 0, az + g.uz * t + nz * off);
        const ang = Math.atan2(-nz * (sd || 1), nx * (sd || 1));
        _q.setFromAxisAngle(_Y, sd === 0 ? Math.atan2(-nz, nx) : ang + Math.PI);
        _mt.compose(_p, _q, _s); lampPole.setMatrixAt(ln, _mt); lampHead.setMatrixAt(ln, _mt);
        if (sd === 0) { ln++; if (ln < 3000) { _q.setFromAxisAngle(_Y, Math.atan2(-nz, nx) + Math.PI); _mt.compose(_p, _q, _s); lampPole.setMatrixAt(ln, _mt); lampHead.setMatrixAt(ln, _mt); } }
        ln++;
      }
    }
  }
  lampPole.count = lampHead.count = Math.min(ln, 3000);
  lampPole.instanceMatrix.needsUpdate = lampHead.instanceMatrix.needsUpdate = true;
  lampPole.computeBoundingSphere(); lampHead.computeBoundingSphere();
  for (const [t, arr] of Object.entries(per)) { const m = new THREE.Mesh(toGeometry(arr), roadMats[t]); m.receiveShadow = true; roadGroup.add(m); }
  // kavşak diskleri
  for (const n of R.nodes.values()) {
    const d = degree(n.id); if (!d) continue;
    let dirtOnly = true, maxA = 0; const ASPH = { dirt: .5, street: .5 * (1 - 80 / 256), avenue: .5 * (1 - 52 / 256), highway: .5 };
    for (const s of R.segs.values()) if (s.a === n.id || s.b === n.id) { if (s.t !== 'dirt') dirtOnly = false; maxA = Math.max(maxA, ROADS[s.t].w * ASPH[s.t]); }
    const rr = maxA, arr = dirtOnly ? dirtDisc : disc, seg = 24;
    for (let k = 0; k < seg; k++) { const a0 = k / seg * 6.283, a1 = (k + 1) / seg * 6.283; arr.push(n.x, .03, n.z, n.x + Math.cos(a1) * rr, .03, n.z + Math.sin(a1) * rr, n.x + Math.cos(a0) * rr, .03, n.z + Math.sin(a0) * rr); }
  }
  for (const [arr, mat] of [[disc, discMat], [dirtDisc, dirtDiscMat]]) if (arr.length) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.receiveShadow = true; roadGroup.add(m); }
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
  for (const b of R.blds.values()) { const t = tileOf(b.x, b.z); if (!byTile.has(t)) byTile.set(t, []); byTile.get(t).push(b); }
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
  for (const b of R.blds.values()) { const c = bgeo(b); for (const e of c.emit) emitters.push({ ...e, id: b.id }); for (const d of c.dyn) want.push({ ...d, id: b.id }); }
  while (rotors.length > want.length) { const r = rotors.pop(); scene.remove(r); }
  for (let k = 0; k < want.length; k++) {
    let r = rotors[k]; if (!r) { r = new THREE.Mesh(rotorGeo, rotorMat); r.castShadow = true; scene.add(r); rotors.push(r); }
    r.position.set(...want[k].p); r.rotation.set(0, want[k].a, 0); r.userData.id = want[k].id;
  }
}

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
  const A = plan.A, B = plan.B, w = ROADS[plan.type].w, L = Math.hypot(B.x - A.x, B.z - A.z);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, L).rotateX(-Math.PI / 2), ghostMat);
  m.position.set((A.x + B.x) / 2, .06, (A.z + B.z) / 2); m.rotation.y = Math.atan2(B.x - A.x, B.z - A.z); m.renderOrder = 4; ghost.add(m);
  for (const p of (plan.pts.length ? plan.pts : [A, B])) { const d = new THREE.Mesh(new THREE.CircleGeometry(w / 2 + .15, 20).rotateX(-Math.PI / 2), ghostMat); d.position.set(p.x, .07, p.z); d.renderOrder = 4; ghost.add(d); }
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
  chunks.clear(); bcache.clear(); cars = []; for (const sp of icons.values()) scene.remove(sp); icons.clear();
}
