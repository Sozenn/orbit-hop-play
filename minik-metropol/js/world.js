// Dünya verisi ve simülasyon (three.js kullanmaz)
import { TILE, TILES, WORLD, WH, START_TILE, ROADS, ZONES, LEVEL_REQ, SVC, MILES, TILE_PERMITS, TILE_COST } from './data.js';

export const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
export const hash = i => { let x = (i + 1) * 2654435761 >>> 0; x ^= x >>> 13; x = Math.imul(x, 1274126177) >>> 0; x ^= x >>> 16; return (x >>> 8) / 16777216; };
export const hash2 = (a, b) => hash(a * 73856093 ^ b * 19349663);
export function rng(seed) { let s = seed >>> 0; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }

// ---------------- durum ----------------
export let S = null;              // kaydedilen durum
export const R = {                // çalışma zamanı türetilmiş veriler
  nodes: new Map(), segs: new Map(), adj: new Map(), sg: new Map(),
  cells: new Map(), cellByKey: new Map(), cellHash: new Map(), segHash: new Map(),
  blds: new Map(), occ: new Uint8Array(WORLD * WORLD), water: new Uint8Array(WORLD * WORLD),
  conn: new Set(), forest: [],
  st: {}, events: [], dirty: { roads: true, cells: true, blds: true, trees: true, tiles: true },
};
let nextCell = 1;

// ---------------- arazi ----------------
function vnoise(seed) {
  const g = (ix, iz) => hash2(ix + seed * 7, iz - seed * 3);
  const sm = t => t * t * (3 - 2 * t);
  return (x, z) => {
    const ix = Math.floor(x), iz = Math.floor(z), fx = sm(x - ix), fz = sm(z - iz);
    const a = g(ix, iz), b = g(ix + 1, iz), c = g(ix, iz + 1), d = g(ix + 1, iz + 1);
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz;
  };
}
export function genTerrain(seed) {
  const r = rng(seed);
  const n1 = vnoise(seed % 1000);
  const ph = r() * 6.28, amp = 6 + r() * 4, z0 = 30 + r() * 6;
  const lakeX = (r() < .5 ? -1 : 1) * (40 + r() * 25), lakeZ = -40 - r() * 25, lakeR = 7 + r() * 4;
  R.water.fill(0);
  for (let zi = 0; zi < WORLD; zi++) for (let xi = 0; xi < WORLD; xi++) {
    const x = xi - WH + .5, z = zi - WH + .5;
    const cz = z0 + Math.sin(x * .03 + ph) * amp + Math.sin(x * .08 + ph * 2) * 2;
    const w = 3.2 + Math.sin(x * .05 + ph) * 1 + (n1(x * .1, z * .1) - .5) * 1.5;
    let wet = Math.abs(z - cz) < w;
    const ld = Math.hypot(x - lakeX, z - lakeZ) + (n1(x * .15 + 50, z * .15) - .5) * 5;
    if (ld < lakeR) wet = true;
    if (wet) R.water[zi * WORLD + xi] = 1;
  }
  // orman noktaları
  R.forest = [];
  const n2 = vnoise(seed % 777 + 3);
  const rr = rng(seed + 11);
  for (let k = 0; k < 9000; k++) {
    const x = (rr() - .5) * WORLD, z = (rr() - .5) * WORLD;
    const dens = n2(x * .045, z * .045);
    if (dens < .55) continue;
    if (Math.abs(x) < 9 && Math.abs(z) < 9) continue;
    if (isWater(x, z) || isWater(x + .6, z) || isWater(x, z + .6)) continue;
    R.forest.push([x, z, .7 + rr() * .7, rr() < .45 ? 1 : 0, rr()]);
  }
}
export const gi = (x, z) => { const xi = Math.floor(x + WH), zi = Math.floor(z + WH); return (xi < 0 || zi < 0 || xi >= WORLD || zi >= WORLD) ? -1 : zi * WORLD + xi; };
export const isWater = (x, z) => { const i = gi(x, z); return i >= 0 && R.water[i] === 1; };
export const tileOf = (x, z) => { const tx = Math.floor((x + WH) / TILE), tz = Math.floor((z + WH) / TILE); return (tx < 0 || tz < 0 || tx >= TILES || tz >= TILES) ? -1 : tz * TILES + tx; };
export const unlocked = (x, z) => { const t = tileOf(x, z); return t >= 0 && S.tiles.includes(t); };

// ---------------- yeni oyun / kayıt ----------------
export function newGame() {
  const seed = (Math.random() * 1e9) | 0;
  S = { v: 3, seed, money: 40000, tk: 50, nodes: [], segs: [], zones: {}, blds: [], tiles: [START_TILE], ms: 0, maxPop: 0, tut: 0, nid: 1, sid: 1, bid: 1, tax: 1 };
  genTerrain(seed);
  R.nodes.clear(); R.segs.clear(); R.blds.clear(); R.cells.clear(); R.cellByKey.clear(); R.sg.clear(); R.events.length = 0;
  // dışarıdan gelen otoban
  let hz = 4;
  for (let k = 0; k < 40 && (pathHasWater(-WH, hz, -12, hz)); k++) hz += (k % 2 ? 1 : -1) * k;
  const a = addNode(-WH - 4, hz, true), b = addNode(-40, hz), c = addNode(-12, hz);
  addSeg(a, b, 'highway'); addSeg(b, c, 'highway');
  rebuildAll();
  return S;
}
function pathHasWater(x0, z0, x1, z1) { const L = Math.hypot(x1 - x0, z1 - z0); for (let s = 0; s <= L; s += .5) { const t = s / L; if (isWater(x0 + (x1 - x0) * t, z0 + (z1 - z0) * t)) return true; } return false; }
export function serialize() {
  S.nodes = [...R.nodes.values()].map(n => [n.id, +n.x.toFixed(3), +n.z.toFixed(3), n.out ? 1 : 0, n.h || 0]);
  S.segs = [...R.segs.values()].map(s => [s.id, s.a, s.b, s.t, +s.o.toFixed(4)]);
  S.blds = [...R.blds.values()].map(b => ({ ...b, cells: undefined }));
  S.zones = {}; for (const c of R.cells.values()) if (c.zt) S.zones[c.pk] = c.zt;
  return JSON.stringify(S);
}
export function deserialize(json) {
  const s = JSON.parse(json);
  if (!s || s.v !== 3) return false;
  S = s; genTerrain(S.seed);
  R.nodes.clear(); R.segs.clear(); R.blds.clear(); R.cells.clear(); R.cellByKey.clear();
  for (const [id, x, z, o, h] of S.nodes) R.nodes.set(id, { id, x, z, out: !!o, h: h || 0 });
  for (const [id, a, b, t, o] of S.segs) R.segs.set(id, { id, a, b, t, o: o || 0 });
  for (const b of S.blds) R.blds.set(b.id, b);
  rebuildAll(S.zones);
  return true;
}

// ---------------- geometri yardımcıları ----------------
export function segGeo(id) {
  let g = R.sg.get(id); if (g) return g;
  const s = R.segs.get(id), A = R.nodes.get(s.a), B = R.nodes.get(s.b);
  const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz) || 1e-6;
  g = { ax: A.x, az: A.z, bx: B.x, bz: B.z, L, ux: dx / L, uz: dz / L, nx: -dz / L, nz: dx / L, hw: ROADS[s.t].w / 2, ha: A.h || 0, hb: B.h || 0 };
  R.sg.set(id, g); return g;
}
export function distSeg(x, z, g) {
  let t = ((x - g.ax) * g.ux + (z - g.az) * g.uz); t = clamp(t, 0, g.L);
  const px = g.ax + g.ux * t, pz = g.az + g.uz * t;
  return { d: Math.hypot(x - px, z - pz), t, px, pz };
}
function segIntersect(ax, az, bx, bz, cx, cz, dx, dz) {
  const rx = bx - ax, rz = bz - az, sx = dx - cx, sz = dz - cz;
  const den = rx * sz - rz * sx; if (Math.abs(den) < 1e-9) return null;
  const t = ((cx - ax) * sz - (cz - az) * sx) / den, u = ((cx - ax) * rz - (cz - az) * rx) / den;
  if (t <= 0 || t >= 1 || u <= 0 || u >= 1) return null;
  return { t, u, x: ax + rx * t, z: az + rz * t };
}
const HB = 6;
const MINANG = 35 * Math.PI / 180;
function hkey(x, z, b) { return (Math.floor(x / b) + 1000) * 4096 + (Math.floor(z / b) + 1000); }
function buildSegHash() {
  R.segHash.clear();
  for (const id of R.segs.keys()) {
    const g = segGeo(id), pad = g.hw + 1;
    const x0 = Math.min(g.ax, g.bx) - pad, x1 = Math.max(g.ax, g.bx) + pad, z0 = Math.min(g.az, g.bz) - pad, z1 = Math.max(g.az, g.bz) + pad;
    for (let x = Math.floor(x0 / HB); x <= Math.floor(x1 / HB); x++) for (let z = Math.floor(z0 / HB); z <= Math.floor(z1 / HB); z++) {
      const k = (x + 1000) * 4096 + (z + 1000); let a = R.segHash.get(k); if (!a) R.segHash.set(k, a = []); a.push(id);
    }
  }
}
export function segsNear(x, z) { return R.segHash.get(hkey(x, z, HB)) || []; }
export function nearestSeg(x, z, maxD, filter) {
  let best = null;
  const seen = new Set();
  for (const dx of [-1, 0, 1]) for (const dz of [-1, 0, 1]) for (const id of segsNear(x + dx * HB, z + dz * HB)) {
    if (seen.has(id)) continue; seen.add(id);
    if (filter && !filter(R.segs.get(id))) continue;
    const g = segGeo(id), r = distSeg(x, z, g);
    if (r.d <= maxD + g.hw && (!best || r.d - g.hw < best.d - best.hw)) best = { id, ...r, hw: g.hw, g };
  }
  return best;
}

// ---------------- yol grafiği ----------------
export function addNode(x, z, out = false, h = 0) { const id = S.nid++; R.nodes.set(id, { id, x, z, out, h }); return id; }
export const level = s => { const a = R.nodes.get(s.a).h || 0, b = R.nodes.get(s.b).h || 0; return a > 0 && b > 0 ? 'e' : a > 0 || b > 0 ? 'r' : 'g'; };
const isGround = s => level(s) === 'g';
export function addSeg(a, b, t, o = 0) { const id = S.sid++; R.segs.set(id, { id, a, b, t, o }); R.sg.delete(id); return id; }
function adjOf(n) { return R.adj.get(n) || []; }
function buildAdj() { R.adj.clear(); for (const s of R.segs.values()) { for (const n of [s.a, s.b]) { let a = R.adj.get(n); if (!a) R.adj.set(n, a = []); a.push(s.id); } } }
export function nodeHW(n) { let m = 0; for (const id of adjOf(n)) m = Math.max(m, ROADS[R.segs.get(id).t].w / 2); return m; }
export const degree = n => adjOf(n).length;
export function nodeNear(x, z, r) { let best = null, bd = r; for (const n of R.nodes.values()) { const d = Math.hypot(n.x - x, n.z - z); if (d < bd) { bd = d; best = n; } } return best; }

function splitSeg(id, x, z) {
  const s = R.segs.get(id), g = segGeo(id);
  const t = clamp((x - g.ax) * g.ux + (z - g.az) * g.uz, 0, g.L);
  const m = addNode(g.ax + g.ux * t, g.az + g.uz * t);
  R.segs.delete(id); R.sg.delete(id);
  const s1 = addSeg(s.a, m, s.t, s.o);
  let o2 = (s.o - t) % 1; if (o2 < 0) o2 += 1;
  const s2 = addSeg(m, s.b, s.t, o2);
  buildAdj();
  return m;
}

function resolvePoint(x, z, type) {
  const hw = ROADS[type].w / 2;
  let bn = null, bd = Infinity;
  for (const n of R.nodes.values()) { if (n.h) continue; const d = Math.hypot(n.x - x, n.z - z); if (d < Math.max(1.2, hw + nodeHW(n.id) + .3) && d < bd) { bd = d; bn = n; } }
  if (bn) return { x: bn.x, z: bn.z, node: bn.id };
  const ns = nearestSeg(x, z, hw + .5, isGround);
  if (ns) {
    const s = R.segs.get(ns.id), near = hw + ns.hw + 1;
    if (ns.t < near) { const A = R.nodes.get(s.a); return { x: A.x, z: A.z, node: A.id }; }
    if (ns.t > ns.g.L - near) { const B = R.nodes.get(s.b); return { x: B.x, z: B.z, node: B.id }; }
    return { x: ns.px, z: ns.pz, split: ns.id };
  }
  return { x, z };
}

// Yol planı: geçerlilik, maliyet, kavşak noktaları
export function planRoad(x0, z0, x1, z1, type) {
  const rt = ROADS[type];
  const A = resolvePoint(x0, z0, type);
  let B = resolvePoint(x1, z1, type);
  if (!B.node && !B.split) { // açı yakalama (15°)
    const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz), a = Math.atan2(dz, dx), st = Math.PI / 12;
    const sa = Math.round(a / st) * st;
    if (Math.abs(sa - a) < .06) { B.x = A.x + Math.cos(sa) * L; B.z = A.z + Math.sin(sa) * L; }
    const B2 = resolvePoint(B.x, B.z, type); if (B2.node || B2.split) B = B2;
  }
  const plan = { ok: false, msg: '', cost: 0, A, B, pts: [], len: 0, bridge: 0, type };
  const dx = B.x - A.x, dz = B.z - A.z, L = Math.hypot(dx, dz);
  plan.len = L;
  if (L < 1.6) { plan.msg = 'Yol çok kısa'; return plan; }
  if (A.node && B.node) {
    if (A.node === B.node) { plan.msg = 'Yol çok kısa'; return plan; }
    for (const id of adjOf(A.node)) { const s = R.segs.get(id); if ((s.a === B.node || s.b === B.node)) { plan.msg = 'Bu iki nokta zaten bağlı'; return plan; } }
  }
  const ux = dx / L, uz = dz / L;
  // uç açıları
  const angOk = (nodeId, vx, vz) => {
    for (const id of adjOf(nodeId)) {
      const s = R.segs.get(id), o = R.nodes.get(s.a === nodeId ? s.b : s.a), N = R.nodes.get(nodeId);
      const ex = o.x - N.x, ez = o.z - N.z, el = Math.hypot(ex, ez);
      if ((ex * vx + ez * vz) / el > Math.cos(MINANG)) return false;
    }
    return true;
  };
  if (A.node && !angOk(A.node, ux, uz)) { plan.msg = 'Açı çok dar'; return plan; }
  if (B.node && !angOk(B.node, -ux, -uz)) { plan.msg = 'Açı çok dar'; return plan; }
  const segAng = (sid, vx, vz) => { const g = segGeo(sid); return Math.abs(g.ux * vx + g.uz * vz) < Math.cos(MINANG); };
  if (A.split && !segAng(A.split, ux, uz)) { plan.msg = 'Açı çok dar'; return plan; }
  if (B.split && !segAng(B.split, ux, uz)) { plan.msg = 'Açı çok dar'; return plan; }
  // kesişmeler
  const cross = [];
  const skipNode = new Set([A.node, B.node].filter(Boolean));
  const skipSeg = new Set([A.split, B.split].filter(Boolean));
  for (const s of R.segs.values()) {
    if (skipSeg.has(s.id) || skipNode.has(s.a) || skipNode.has(s.b)) continue;
    const lv = level(s); if (lv === 'e') continue;
    const g = segGeo(s.id);
    const I = segIntersect(A.x, A.z, B.x, B.z, g.ax, g.az, g.bx, g.bz);
    if (!I) continue;
    if (lv === 'r') { plan.msg = 'Köprü rampasıyla kesişemez'; return plan; }
    if (!segAng(s.id, ux, uz)) { plan.msg = 'Yollar çok dar açıyla kesişiyor'; return plan; }
    const ul = I.u * g.L, nr = rt.w / 2 + g.hw + 1;
    if (ul < nr) cross.push({ t: I.t, x: g.ax, z: g.az, node: s.a });
    else if (ul > g.L - nr) cross.push({ t: I.t, x: g.bx, z: g.bz, node: s.b });
    else cross.push({ t: I.t, x: I.x, z: I.z, split: s.id });
  }
  // A veya B bir düğümse, o düğüme bağlı yolların karşı ucundan geçen kesişmeler zaten dışlandı
  cross.sort((p, q) => p.t - q.t);
  const pts = [A];
  for (const c of cross) {
    const prev = pts[pts.length - 1];
    if (c.node && prev.node === c.node) continue;
    if (Math.hypot(c.x - prev.x, c.z - prev.z) < (prev === A && !A.node && !A.split ? 1.6 : rt.w + 1.6)) { plan.msg = 'Kavşaklar birbirine çok yakın'; return plan; }
    pts.push(c);
  }
  if (pts.length > 1 && Math.hypot(B.x - pts[pts.length - 1].x, B.z - pts[pts.length - 1].z) < rt.w + 1.6) { plan.msg = 'Kavşaklar birbirine çok yakın'; return plan; }
  pts.push(B);
  // örnekleme: su, kilitli arazi, üst üste binme
  let bridge = 0;
  for (let s = 0; s <= L; s += .5) {
    const x = A.x + ux * s, z = A.z + uz * s;
    if (!unlocked(x, z)) { plan.msg = 'Bu arazi henüz senin değil (🗺️ Arazi)'; return plan; }
    if (isWater(x, z)) bridge += .5;
    let nearPt = false;
    for (const p of pts) { const ow = p.node ? nodeHW(p.node) : p.split ? segGeo(p.split).hw : 0; if (Math.hypot(p.x - x, p.z - z) < (rt.w / 2 + ow + .25) / Math.sin(MINANG) + .2) { nearPt = true; break; } }
    if (nearPt) continue;
    const ns = nearestSeg(x, z, rt.w / 2 + .2, s2 => level(s2) !== 'e');
    if (ns && ns.d < ns.hw + rt.w / 2 + .15) { plan.msg = 'Başka bir yola çok yakın'; return plan; }
    // hizmet binası
    const oi = gi(x, z); if (oi >= 0 && R.occ[oi] === 2) { plan.msg = 'Önünde bir bina var'; return plan; }
  }
  plan.bridge = bridge;
  plan.cost = Math.ceil(L * rt.cost + bridge * rt.cost * 4);
  plan.pts = pts; plan.ok = true;
  if (S.money < plan.cost) { plan.ok = false; plan.msg = 'Yeterli paran yok'; }
  return plan;
}
export function commitRoad(plan) {
  if (!plan.ok) return false;
  const ids = [];
  for (const p of plan.pts) {
    if (p.node) ids.push(p.node);
    else if (p.split && R.segs.has(p.split)) ids.push(splitSeg(p.split, p.x, p.z));
    else ids.push(addNode(p.x, p.z));
  }
  for (let k = 0; k < ids.length - 1; k++) if (ids[k] !== ids[k + 1]) addSeg(ids[k], ids[k + 1], plan.type);
  S.money -= plan.cost;
  rebuildAll();
  return true;
}
// Köprü / üst geçit: rampalarla yükselen yol
export const BRIDGE_H = 1.15, RAMP_L = 6;
export function planElevated(x0, z0, x1, z1, type) {
  const rt = ROADS[type], hw = rt.w / 2;
  const elevNode = (x, z) => { let b = null, bd = 1.4; for (const n of R.nodes.values()) if (n.h) { const d = Math.hypot(n.x - x, n.z - z); if (d < bd) { bd = d; b = n; } } return b; };
  const rs = (x, z) => { const e = elevNode(x, z); return e ? { x: e.x, z: e.z, node: e.id, elev: true } : resolvePoint(x, z, type); };
  const A = rs(x0, z0), B = rs(x1, z1);
  const plan = { ok: false, msg: '', cost: 0, elev: true, type, A, B, pts: [], len: 0, bridge: 0 };
  const dx = B.x - A.x, dz = B.z - A.z, D = Math.hypot(dx, dz); plan.len = D;
  const ux = dx / D, uz = dz / D;
  const needA = !A.elev, needB = !B.elev;
  if (D < (needA ? RAMP_L : 0) + (needB ? RAMP_L : 0) + 2) { plan.msg = 'Köprü için mesafe çok kısa (rampalar yer kaplar)'; return plan; }
  if (A.node && B.node && A.node === B.node) { plan.msg = 'Yol çok kısa'; return plan; }
  const A2 = needA ? { x: A.x + ux * RAMP_L, z: A.z + uz * RAMP_L } : A, B2 = needB ? { x: B.x - ux * RAMP_L, z: B.z - uz * RAMP_L } : B;
  plan.pts = [A, ...(needA ? [A2] : []), ...(needB ? [B2] : []), B];
  // uç açıları (zemin düğümleri)
  for (const [P, vx, vz] of [[A, ux, uz], [B, -ux, -uz]]) {
    if (P.node) for (const id of adjOf(P.node)) { const s = R.segs.get(id), o = R.nodes.get(s.a === P.node ? s.b : s.a), N = R.nodes.get(P.node); const ex = o.x - N.x, ez = o.z - N.z, el = Math.hypot(ex, ez); if ((ex * vx + ez * vz) / el > Math.cos(MINANG)) { plan.msg = 'Açı çok dar'; return plan; } }
    if (P.split) { const g = segGeo(P.split); if (Math.abs(g.ux * vx + g.uz * vz) > Math.cos(MINANG)) { plan.msg = 'Açı çok dar'; return plan; } }
  }
  // örnekleme
  const skipN = new Set([A.node, B.node].filter(Boolean)), skipS = new Set([A.split, B.split].filter(Boolean));
  for (let t = 0; t <= D; t += .4) {
    const x = A.x + ux * t, z = A.z + uz * t;
    if (!unlocked(x, z)) { plan.msg = 'Bu arazi henüz senin değil (🗺️ Arazi)'; return plan; }
    const onRampA = needA && t < RAMP_L, onRampB = needB && t > D - RAMP_L, high = !onRampA && !onRampB;
    const nearEnd = Math.min(t, D - t) < hw + 1.8;
    const seen = new Set();
    for (const dxh of [-1, 0, 1]) for (const dzh of [-1, 0, 1]) for (const id of segsNear(x + dxh * HB, z + dzh * HB)) {
      if (seen.has(id) || skipS.has(id)) continue; seen.add(id);
      const s = R.segs.get(id); if (skipN.has(s.a) || skipN.has(s.b)) { if (nearEnd) continue; }
      const lv = level(s), g = segGeo(id), d = distSeg(x, z, g).d;
      if (high) { if (lv !== 'g' && d < g.hw + hw + .1) { plan.msg = 'Başka bir köprüye çok yakın'; return plan; } }
      else if (!nearEnd && d < g.hw + hw + .1) { plan.msg = 'Rampa başka bir yolla çakışıyor'; return plan; }
    }
    const oi = gi(x, z); if (!high && oi >= 0 && R.occ[oi] === 2) { plan.msg = 'Önünde bir bina var'; return plan; }
  }
  plan.cost = Math.ceil(D * rt.cost * 3);
  if (S.money < plan.cost) { plan.msg = 'Yeterli paran yok'; return plan; }
  plan.ok = true; return plan;
}
export function commitElevated(plan) {
  if (!plan.ok) return false;
  const nodeFor = p => p.node ? p.node : p.split && R.segs.has(p.split) ? splitSeg(p.split, p.x, p.z) : addNode(p.x, p.z);
  const a = nodeFor(plan.A), b = nodeFor(plan.B);
  const ids = [a];
  const P = plan.pts; for (let i = 1; i < P.length - 1; i++) ids.push(addNode(P[i].x, P[i].z, false, BRIDGE_H));
  ids.push(b);
  for (let i = 0; i < ids.length - 1; i++) addSeg(ids[i], ids[i + 1], plan.type);
  S.money -= plan.cost; rebuildAll(); return true;
}

// Eğri yol: var olan bir yolun ucundan teğet devam eder
export function planCurve(x0, z0, x1, z1, type) {
  let A = resolvePoint(x0, z0, type), B = resolvePoint(x1, z1, type), rev = false;
  const tan = P => { if (!P.node || degree(P.node) !== 1) return null; const s = R.segs.get(adjOf(P.node)[0]), O = R.nodes.get(s.a === P.node ? s.b : s.a), N = R.nodes.get(P.node); const dx = N.x - O.x, dz = N.z - O.z, l = Math.hypot(dx, dz); return [dx / l, dz / l]; };
  let t = tan(A);
  if (!t) { t = tan(B); if (t) { [A, B] = [B, A]; rev = true; } }
  if (!t) { const p = planRoad(x0, z0, x1, z1, type); p.noTangent = true; return p; }
  const dx = B.x - A.x, dz = B.z - A.z, D = Math.hypot(dx, dz);
  const plan = { ok: false, msg: '', cost: 0, curve: true, type, pieces: [], pts: [], A, B, len: 0, bridge: 0 };
  if (D < 2.5) { plan.msg = 'Yol çok kısa'; return plan; }
  const cs = (t[0] * dx + t[1] * dz) / D;
  if (cs < Math.cos(100 * Math.PI / 180)) { plan.msg = 'Eğri çok keskin'; return plan; }
  if (cs > .995) { const p = planRoad(A.x, A.z, B.x, B.z, type); return p; }
  const k = (D / 2) / Math.max(cs, .35), C = [A.x + t[0] * k, A.z + t[1] * k];
  // yay uzunluğu ve parçalar
  let alen = 0, prev = [A.x, A.z]; const smp = [];
  for (let i = 1; i <= 40; i++) { const u = i / 40, v = 1 - u, P = [v * v * A.x + 2 * v * u * C[0] + u * u * B.x, v * v * A.z + 2 * v * u * C[1] + u * u * B.z]; alen += Math.hypot(P[0] - prev[0], P[1] - prev[1]); prev = P; }
  const n = Math.max(2, Math.min(16, Math.ceil(alen / 2.8)));
  const pts = [];
  for (let i = 0; i <= n; i++) { const u = i / n, v = 1 - u; pts.push([v * v * A.x + 2 * v * u * C[0] + u * u * B.x, v * v * A.z + 2 * v * u * C[1] + u * u * B.z]); }
  if (rev) pts.reverse();
  plan.pts = pts.map(p => ({ x: p[0], z: p[1] })); plan.len = alen;
  // her parçayı ayrı ayrı denetle
  for (let i = 0; i < n; i++) {
    const p = planRoad(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], type);
    if (!p.ok && p.msg !== 'Yeterli paran yok' && !(i > 0 && p.msg === 'Açı çok dar')) { plan.msg = p.msg; plan.pieces.push(p); return plan; }
    plan.pieces.push(p); plan.cost += p.cost; plan.bridge += p.bridge;
  }
  if (S.money < plan.cost) { plan.msg = 'Yeterli paran yok'; return plan; }
  plan.ok = true; return plan;
}
export function commitCurve(plan) {
  if (!plan.ok) return false;
  const P = plan.pts; let spent = 0;
  for (let i = 0; i < P.length - 1; i++) {
    const p = planRoad(P[i].x, P[i].z, P[i + 1].x, P[i + 1].z, plan.type);
    if (!p.ok) break;
    commitRoad(p); spent += p.cost;
  }
  return spent > 0;
}
// Döner kavşak
export function roundaboutAt(x, z) {
  let best = null, bd = 2.5;
  for (const n of R.nodes.values()) { const d = Math.hypot(n.x - x, n.z - z); if (d < bd && degree(n.id) >= 3) { bd = d; best = n; } }
  return best;
}
export function makeRoundabout(nodeId) {
  const N = R.nodes.get(nodeId); if (!N) return 'Bir kavşağa dokun';
  const arms = adjOf(nodeId).map(id => R.segs.get(id));
  if (arms.length < 3) return 'Döner kavşak için 3 ya da daha fazla yollu bir kavşağa dokun';
  if (arms.some(s => s.t === 'highway')) return 'Otoban kavşağı döner kavşak olamaz';
  if (N.h) return 'Köprü üstünde döner kavşak yapılamaz';
  const maxHW = Math.max(...arms.map(s => ROADS[s.t].w / 2));
  const ringT = arms.some(s => s.t === 'avenue') ? 'avenue' : 'street';
  const r = 2.2 + maxHW * 1.3;
  for (const s of arms) if (segGeo(s.id).L < r + 2.5) return 'Kavşağa bağlı yollar döner kavşak için çok kısa';
  const cost = Math.ceil(2 * Math.PI * r * ROADS[ringT].cost * 1.2);
  if (S.money < cost) return 'Yeterli paran yok (' + cost + ')';
  // her kolu r mesafesinde böl
  const outer = [];
  for (const s0 of arms) {
    const s = R.segs.get(s0.id), g = segGeo(s.id), fromA = s.a === nodeId;
    const t = fromA ? r : g.L - r;
    const m = splitSeg(s.id, g.ax + g.ux * t, g.az + g.uz * t);
    outer.push({ m, t: s0.t });
  }
  // merkezdeki parçaları sil
  for (const id of [...adjOf(nodeId)]) { R.segs.delete(id); R.sg.delete(id); }
  R.nodes.delete(nodeId); buildAdj();
  const ring = outer.map(o => { const M = R.nodes.get(o.m); return { id: o.m, ang: Math.atan2(M.z - N.z, M.x - N.x) }; }).sort((a, b) => a.ang - b.ang);
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    let da = b.ang - a.ang; if (da <= 0) da += Math.PI * 2;
    const k = Math.max(2, Math.ceil(da * r / 1.7));
    let prev = a.id;
    for (let j = 1; j < k; j++) { const an = a.ang + da * j / k, id = addNode(N.x + Math.cos(an) * r, N.z + Math.sin(an) * r); addSeg(prev, id, ringT); prev = id; }
    addSeg(prev, b.id, ringT);
  }
  S.deco = (S.deco || []).concat([{ x: N.x, z: N.z, r: r - ROADS[ringT].w / 2 - .05 }]);
  S.money -= cost;
  rebuildAll(); return true;
}

export function upgradeCost(id, type) { const g = segGeo(id), s = R.segs.get(id); return Math.max(0, Math.ceil(g.L * (ROADS[type].cost - ROADS[s.t].cost * .5))); }
export function upgradeSeg(id, type) {
  const s = R.segs.get(id); if (!s || s.t === type) return 'same';
  if (R.nodes.get(s.a).out || R.nodes.get(s.b).out) return 'Şehir dışı bağlantısı değiştirilemez';
  const c = upgradeCost(id, type); if (S.money < c) return 'Yeterli paran yok';
  S.money -= c; s.t = type; R.sg.delete(id);
  rebuildAll(); return true;
}
export function deleteSeg(id) {
  const s = R.segs.get(id); if (!s) return false;
  if (R.nodes.get(s.a).out || R.nodes.get(s.b).out) return 'Şehir dışı bağlantısı silinemez';
  R.segs.delete(id); R.sg.delete(id); buildAdj();
  for (const n of [s.a, s.b]) {
    const N = R.nodes.get(n); if (!N || N.out) continue;
    const a = adjOf(n);
    if (a.length === 0) R.nodes.delete(n);
    else if (a.length === 2) { // aynı tip ve düz ise birleştir
      const s1 = R.segs.get(a[0]), s2 = R.segs.get(a[1]);
      if (s1.t === s2.t) {
        const o1 = s1.a === n ? s1.b : s1.a, o2 = s2.a === n ? s2.b : s2.a;
        const P = R.nodes.get(o1), Q = R.nodes.get(o2);
        const v1x = N.x - P.x, v1z = N.z - P.z, v2x = Q.x - N.x, v2z = Q.z - N.z;
        const cs = (v1x * v2x + v1z * v2z) / (Math.hypot(v1x, v1z) * Math.hypot(v2x, v2z));
        if (cs > .9995) { R.segs.delete(s1.id); R.segs.delete(s2.id); R.sg.delete(s1.id); R.sg.delete(s2.id); R.nodes.delete(n); addSeg(o1, o2, s1.t, s1.a === o1 ? s1.o : 0); buildAdj(); }
      }
    }
  }
  S.money += Math.floor(segLenRaw(s) * ROADS[s.t].cost * .25);
  rebuildAll(); return true;
}
function segLenRaw(s) { const A = R.nodes.get(s.a), B = R.nodes.get(s.b); return A && B ? Math.hypot(B.x - A.x, B.z - A.z) : 0; }

// ---------------- kavşak geometrisi ----------------
export const SIDEW = { dirt: 0, street: 40 / 256, avenue: 26 / 256, highway: 0 }; // kaldırım oranı (genişliğe göre)
export function computeJunctions() {
  R.junc = new Map();
  for (const N of R.nodes.values()) {
    const ids = adjOf(N.id); if (!ids.length) continue;
    const L = ids.map(sid => {
      const s = R.segs.get(sid), g = segGeo(sid), f = s.a === N.id; const dx = f ? g.ux : -g.ux, dz = f ? g.uz : -g.uz;
      const sw = SIDEW[s.t] * ROADS[s.t].w;
      return { sid, t: s.t, dx, dz, nx: -dz, nz: dx, hw: g.hw, ah: g.hw - sw, sw, L: g.L, ang: Math.atan2(dz, dx) };
    });
    L.sort((a, b) => a.ang - b.ang);
    const n = L.length, trims = new Map(L.map(r => [r.sid, 0])), corners = [];
    const cap = r => Math.max(0, Math.min(r.L * .45, r.hw * 4 + 1.5));
    for (let i = 0; i < n && n >= 2; i++) {
      const a = L[i], b = L[(i + 1) % n];
      let th = b.ang - a.ang; if (th <= 0) th += Math.PI * 2;
      if (n === 2 && i === 1 && th === Math.PI * 2) th = 0;
      const c = { a, b, th, kind: th < Math.PI - .35 ? 'corner' : th <= Math.PI + .35 ? 'straight' : 'reflex' };
      if (c.kind === 'corner') {
        // a'nın asfalt kenarı (a.n yönü) ile b'nin asfalt kenarı (-b.n yönü) kesişimi
        const px = a.nx * a.ah + b.nx * b.ah, pz = a.nz * a.ah + b.nz * b.ah;
        const det = a.dx * (-b.dz) - a.dz * (-b.dx);
        if (Math.abs(det) > 1e-6) {
          const rx = -px, rz = -pz;
          const s0 = (rx * (-b.dz) - rz * (-b.dx)) / det, t0 = (a.dx * rz - a.dz * rx) / det;
          const rad = (a.t === 'dirt' && b.t === 'dirt') ? .25 : (a.t === 'highway' || b.t === 'highway') ? .9 : .5 + .12 * Math.max(ROADS[a.t].lanes, ROADS[b.t].lanes);
          const tl = rad / Math.tan(th / 2);
          c.C = [N.x + a.dx * s0 + a.nx * a.ah, N.z + a.dz * s0 + a.nz * a.ah];
          trims.set(a.sid, Math.max(trims.get(a.sid), Math.min(cap(a), s0 + tl)));
          trims.set(b.sid, Math.max(trims.get(b.sid), Math.min(cap(b), t0 + tl)));
        } else c.kind = 'straight';
      }
      corners.push(c);
    }
    // çokgen ve kaldırım kenarları
    const poly = [], curbs = [], mouths = [];
    const Lp = (r, t) => [N.x + r.dx * t + r.nx * r.ah, N.z + r.dz * t + r.nz * r.ah];
    const Rp = (r, t) => [N.x + r.dx * t - r.nx * r.ah, N.z + r.dz * t - r.nz * r.ah];
    if (n === 1) {
      const a = L[0];
      if (a.t !== 'highway') {
        const pts = []; const a0 = Math.atan2(a.nz, a.nx);
        for (let k = 0; k <= 10; k++) { const an = a0 + Math.PI * k / 10; pts.push([N.x + Math.cos(an) * a.ah, N.z + Math.sin(an) * a.ah]); }
        poly.push(Rp(a, 0), ...pts.slice().reverse().slice(1, -1), Lp(a, 0));
        // yay saat yönünde: L'den başlayıp R'ye; poligonda sıralama R,L sonra yay
        poly.length = 0; poly.push(Rp(a, 0), Lp(a, 0), ...pts.slice(1, -1));
        curbs.push({ pts: [Lp(a, 0), ...pts.slice(1, -1), Rp(a, 0)], sw: a.sw });
      }
      mouths.push({ ...a, trim: 0 });
    } else {
      for (let i = 0; i < n; i++) {
        const c = corners[i], a = c.a, b = c.b, ta = trims.get(a.sid), tb = trims.get(b.sid);
        const La = Lp(a, ta), Rb = Rp(b, tb);
        poly.push(Rp(a, ta), La);
        const cur = [La];
        if (c.kind === 'corner') {
          for (let k = 1; k < 8; k++) { const t = k / 8, u = 1 - t; cur.push([u * u * La[0] + 2 * u * t * c.C[0] + t * t * Rb[0], u * u * La[1] + 2 * u * t * c.C[1] + t * t * Rb[1]]); }
        } else if (c.kind === 'reflex') {
          const e0 = Lp(a, 0), e1 = Rp(b, 0); cur.push(e0);
          const a0 = Math.atan2(a.nz, a.nx); let da = Math.atan2(-b.nz, -b.nx) - a0; while (da <= 0) da += Math.PI * 2;
          const rad = Math.max(a.ah, b.ah), k = Math.max(2, Math.ceil(da / .25));
          for (let j = 1; j < k; j++) { const an = a0 + da * j / k; cur.push([N.x + Math.cos(an) * rad, N.z + Math.sin(an) * rad]); }
          cur.push(e1);
        }
        cur.push(Rb);
        for (let k = 1; k < cur.length - 1; k++) poly.push(cur[k]);
        curbs.push({ pts: cur, sw: Math.min(a.sw, b.sw) });
      }
      for (const r of L) mouths.push({ ...r, trim: trims.get(r.sid) });
    }
    R.junc.set(N.id, { trims, poly, curbs, mouths, dirt: L.every(r => r.t === 'dirt'), n });
  }
}
export function trimAt(nodeId, sid) { const j = R.junc && R.junc.get(nodeId); return j ? (j.trims.get(sid) || 0) : 0; }

// ---------------- doluluk ızgarası ----------------
function rasterRect(cx, cz, a, w, d, val, pad = 0) {
  const ca = Math.cos(a), sa = Math.sin(a);
  for (let lx = -w / 2 + .25 - pad; lx < w / 2 + pad; lx += .5) for (let lz = -d / 2 + .25 - pad; lz < d / 2 + pad; lz += .5) {
    const x = cx + lx * ca + lz * sa, z = cz - lx * sa + lz * ca, i = gi(x, z);
    if (i >= 0 && (R.occ[i] === 0 || R.occ[i] === 4 || val === 1)) R.occ[i] = val;
  }
}
function buildOcc() {
  R.occ.fill(0);
  for (let i = 0; i < R.occ.length; i++) if (R.water[i]) R.occ[i] = 3;
  for (const b of R.blds.values()) rasterRect(b.x, b.z, b.a, b.w, b.d, b.svc ? 2 : 4);
  for (const id of R.segs.keys()) {
    const g = segGeo(id);
    for (let s = 0; s <= g.L; s += .4) for (let o = -g.hw; o <= g.hw; o += .4) {
      const i = gi(g.ax + g.ux * s + g.nx * o, g.az + g.uz * s + g.nz * o);
      if (i >= 0 && R.occ[i] !== 3) R.occ[i] = 1;
    }
  }
}

// ---------------- bölge hücreleri ----------------
const ckey = (seg, side, k, row) => seg + '|' + side + '|' + k + '|' + row;
const pkey = (x, z) => Math.round(x * 4) + ',' + Math.round(z * 4);
function cellsNear(x, z) { return R.cellHash.get(hkey(x, z, 1)) || []; }
function addCellHash(c) { const k = hkey(c.x, c.z, 1); let a = R.cellHash.get(k); if (!a) R.cellHash.set(k, a = []); a.push(c.id); }
function cellBlocked(x, z, sid) {
  if (!unlocked(x, z)) return true;
  for (const d of (S.deco || [])) if (Math.hypot(x - d.x, z - d.z) < d.r + .6) return true;
  for (const [ox, oz] of [[0, 0], [.3, .3], [-.3, .3], [.3, -.3], [-.3, -.3]]) {
    const i = gi(x + ox, z + oz); if (i < 0) return true;
    const o = R.occ[i]; if (o === 2 || (o === 3 && ox === 0)) return true;
  }
  const seen = new Set();
  for (const dx of [-1, 0, 1]) for (const dz of [-1, 0, 1]) for (const id of segsNear(x + dx * HB, z + dz * HB)) {
    if (id === sid || seen.has(id)) continue; seen.add(id);
    const g = segGeo(id); if (distSeg(x, z, g).d < g.hw + .55) return true;
  }
  for (let ix = -1; ix <= 1; ix++) for (let iz = -1; iz <= 1; iz++) for (const cid of cellsNear(x + ix, z + iz)) {
    const c = R.cells.get(cid); if (Math.abs(c.x - x) < .9 && Math.abs(c.z - z) < .9 && Math.hypot(c.x - x, c.z - z) < .92) return true;
  }
  return false;
}
function buildCells(oldZones) {
  // eski bölge bilgisi
  const keep = oldZones ? new Map(Object.entries(oldZones)) : new Map();
  if (!oldZones) for (const c of R.cells.values()) if (c.zt) keep.set(c.pk, c.zt);
  R.cells.clear(); R.cellByKey.clear(); R.cellHash.clear(); nextCell = 1;
  const ids = [...R.segs.keys()].sort((a, b) => a - b);
  for (const sid of ids) {
    const s = R.segs.get(sid); if (!ROADS[s.t].zone || level(s) !== 'g') continue;
    const g = segGeo(sid);
    const ta = trimAt(s.a, sid) + .2, tb = trimAt(s.b, sid) + .2;
    for (const side of [1, -1]) {
      for (let k = 0; ; k++) {
        const sc = s.o + k + .5;
        if (sc + .5 > g.L - tb) break;
        if (sc - .5 < ta) continue;
        for (let row = 0; row < 4; row++) {
          const off = g.hw + row + .5;
          const x = g.ax + g.ux * sc + g.nx * off * side, z = g.az + g.uz * sc + g.nz * off * side;
          if (cellBlocked(x, z, sid)) break;
          const id = nextCell++, pk = pkey(x, z);
          const c = { id, seg: sid, side, k, row, x, z, pk, zt: keep.get(pk) || '', b: 0, a: Math.atan2(-g.nx * side, -g.nz * side) };
          R.cells.set(id, c); R.cellByKey.set(ckey(sid, side, k, row), id); addCellHash(c);
        }
      }
    }
  }
}
export function cellAt(x, z) {
  let best = null, bd = .72;
  for (let ix = -1; ix <= 1; ix++) for (let iz = -1; iz <= 1; iz++) for (const cid of cellsNear(x + ix, z + iz)) {
    const c = R.cells.get(cid), d = Math.hypot(c.x - x, c.z - z); if (d < bd) { bd = d; best = c; }
  }
  return best;
}
export function paintZone(x, z, rad, zt) {
  let n = 0;
  const r = Math.ceil(rad) + 1;
  for (let ix = -r; ix <= r; ix++) for (let iz = -r; iz <= r; iz++) for (const cid of cellsNear(x + ix, z + iz)) {
    const c = R.cells.get(cid);
    if (Math.hypot(c.x - x, c.z - z) > rad || c.zt === zt) continue;
    if (c.b) { const b = R.blds.get(c.b); if (b && b.zt !== zt) removeBld(b.id, true); }
    c.zt = zt; n++;
  }
  if (n) { R.dirty.cells = true; R.dirty.blds = true; }
  return n;
}

// ---------------- binalar ----------------
function relinkBuildings() {
  const pmap = new Map(); for (const c of R.cells.values()) pmap.set(c.pk, c);
  for (const b of [...R.blds.values()]) {
    if (b.svc) continue;
    const cs = []; let ok = true;
    for (const pk of b.pks) { const c = pmap.get(pk); if (!c || c.zt !== b.zt || (c.b && c.b !== b.id)) { ok = false; break; } cs.push(c); }
    if (!ok) { R.blds.delete(b.id); R.events.push({ t: 'gone', x: b.x, z: b.z }); continue; }
    b.cells = cs.map(c => c.id); b.seg = cs[0].seg; for (const c of cs) c.b = b.id;
  }
}
export function removeBld(id, silent) {
  const b = R.blds.get(id); if (!b) return;
  R.blds.delete(id);
  if (b.cells) for (const cid of b.cells) { const c = R.cells.get(cid); if (c && c.b === id) c.b = 0; }
  if (b.svc) { S.money += Math.floor(SVC[b.svc].cost * .3); rebuildAll(); }
  if (!silent) R.events.push({ t: 'dust', x: b.x, z: b.z });
  R.dirty.blds = true; R.dirty.trees = true;
}
function tryLot(c0, zt, w, d) {
  const cs = [];
  for (let j = 0; j < w; j++) for (let r = 0; r < d; r++) {
    const id = R.cellByKey.get(ckey(c0.seg, c0.side, c0.k + j, r)); if (!id) return null;
    const c = R.cells.get(id); if (c.zt !== zt || c.b) return null; cs.push(c);
  }
  return cs;
}
function spawnZone(zt) {
  const Z = ZONES[zt];
  const cand = [];
  for (const c of R.cells.values()) if (c.zt === zt && !c.b && c.row === 0 && R.conn.has(c.seg)) cand.push(c);
  if (!cand.length) return false;
  for (let attempt = 0; attempt < 6; attempt++) {
    const c0 = cand[(Math.random() * cand.length) | 0];
    const lot = Z.lots[(Math.random() * Z.lots.length) | 0];
    const minD = (zt === 'r1' || zt === 'c1') ? 1 : 2;
    for (let w = lot[0]; w >= 1; w--) for (let d = lot[1]; d >= minD; d--) {
      const cs = tryLot(c0, zt, w, d); if (!cs) continue;
      let x = 0, z = 0; for (const c of cs) { x += c.x; z += c.z; } x /= cs.length; z /= cs.length;
      const id = S.bid++;
      const b = { id, zt, lvl: 1, x, z, a: c0.a, w, d, pks: cs.map(c => c.pk), cells: cs.map(c => c.id), seg: c0.seg, pop: 0, cap: Z.per[0] * w * d, hap: 50, prog: 0, v: Math.random(), f: 0 };
      for (const c of cs) c.b = id;
      R.blds.set(id, b); R.events.push({ t: 'new', id });
      R.dirty.blds = true; R.dirty.trees = true;
      return true;
    }
  }
  return false;
}

// Hizmet binası yerleştirme planı
export function planSvc(x, z, sid) {
  const D = SVC[sid];
  const ns = nearestSeg(x, z, 5 + Math.max(D.w, D.d) / 2, s => s.t !== 'highway' && isGround(s));
  const p = { ok: false, msg: '', x, z, a: 0, w: D.w, d: D.d, svc: sid, cost: D.cost };
  if (!ns) { p.msg = 'Bir yolun yanına koy'; return p; }
  const g = ns.g, side = Math.sign((x - ns.px) * g.nx + (z - ns.pz) * g.nz) || 1;
  const off = g.hw + D.d / 2 + .15;
  const t = clamp(ns.t, D.w / 2 + .3, g.L - D.w / 2 - .3);
  p.x = g.ax + g.ux * t + g.nx * off * side; p.z = g.az + g.uz * t + g.nz * off * side;
  p.a = Math.atan2(-g.nx * side, -g.nz * side); p.seg = ns.id;
  if (g.L < D.w + .6) { p.msg = 'Yol bu bina için çok kısa'; return p; }
  const ca = Math.cos(p.a), sa = Math.sin(p.a);
  for (let lx = -D.w / 2 + .2; lx < D.w / 2; lx += .4) for (let lz = -D.d / 2 + .2; lz < D.d / 2; lz += .4) {
    const wx = p.x + lx * ca + lz * sa, wz = p.z - lx * sa + lz * ca;
    if (!unlocked(wx, wz)) { p.msg = 'Bu arazi henüz senin değil'; return p; }
    const i = gi(wx, wz); if (i < 0) { p.msg = 'Harita dışı'; return p; }
    const o = R.occ[i];
    const rs = nearestSeg(wx, wz, 0); if (rs && rs.d < rs.hw + .05) { p.msg = 'Yolun üstüne gelmiyor'; return p; }
    if (o === 2) { p.msg = 'Başka bir bina var'; return p; }
    if (o === 3) { p.msg = 'Suyun üstüne yapılamaz'; return p; }
  }
  if (D.needWater) {
    let near = false;
    for (let a = 0; a < 6.28 && !near; a += .4) for (let r = 1; r < 5; r += 1) if (isWater(p.x + Math.cos(a) * r, p.z + Math.sin(a) * r)) { near = true; break; }
    if (!near) { p.msg = 'Pompa göl ya da nehir kıyısına kurulmalı'; return p; }
  }
  if (S.money < D.cost) { p.msg = 'Yeterli paran yok'; return p; }
  p.ok = true; return p;
}
export function commitSvc(p) {
  if (!p.ok) return false;
  // altındaki bölge binalarını yık
  const ca = Math.cos(p.a), sa = Math.sin(p.a);
  for (const b of [...R.blds.values()]) {
    if (b.svc) continue;
    const dx = b.x - p.x, dz = b.z - p.z, lx = dx * ca - dz * sa, lz = dx * sa + dz * ca;
    if (Math.abs(lx) < (p.w + b.w) / 2 - .1 && Math.abs(lz) < (p.d + b.d) / 2 - .1) removeBld(b.id, true);
  }
  const id = S.bid++;
  R.blds.set(id, { id, svc: p.svc, x: p.x, z: p.z, a: p.a, w: p.w, d: p.d, seg: p.seg, v: Math.random() });
  S.money -= p.cost; R.events.push({ t: 'new', id });
  rebuildAll(); return true;
}

// ---------------- arazi parçaları ----------------
export function tileBuyable(t) {
  if (S.tiles.includes(t)) return 'owned';
  const tx = t % TILES, tz = (t / TILES) | 0;
  const adj = [[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => { const x = tx + a, z = tz + b; return x >= 0 && z >= 0 && x < TILES && z < TILES && S.tiles.includes(z * TILES + x); });
  if (!adj) return 'Önce yanındaki araziyi al';
  if (S.tiles.length >= TILE_PERMITS[S.ms]) return 'Daha fazla arazi için şehrin büyümeli';
  if (S.money < tileCost()) return 'Yeterli paran yok';
  return 'ok';
}
export const tileCost = () => TILE_COST * S.tiles.length;
export function buyTile(t) { const r = tileBuyable(t); if (r !== 'ok') return r; S.money -= tileCost(); S.tiles.push(t); rebuildAll(); R.dirty.tiles = true; return true; }

// ---------------- topluca yeniden hesap ----------------
export function rebuildAll(oldZones) {
  R.sg.clear(); buildAdj(); buildSegHash(); computeJunctions();
  if (S.deco) S.deco = S.deco.filter(d => [...R.nodes.values()].some(n => Math.abs(Math.hypot(n.x - d.x, n.z - d.z) - d.r) < 2.5 && degree(n.id) > 0));
  // eski hizmet binalarının yol bağlantısı
  buildOcc();
  buildCells(oldZones);
  relinkBuildings();
  for (const b of R.blds.values()) if (b.svc) {
    const ns = nearestSeg(b.x, b.z, Math.max(b.w, b.d) / 2 + 1.2, s => s.t !== 'highway' && isGround(s));
    b.seg = ns ? ns.id : 0;
  }
  buildOcc();
  buildConn();
  R.dirty.roads = R.dirty.cells = R.dirty.blds = R.dirty.trees = true;
  derive();
}
function buildConn() {
  R.conn.clear();
  const q = [], seenN = new Set();
  for (const n of R.nodes.values()) if (n.out) { q.push(n.id); seenN.add(n.id); }
  while (q.length) {
    const n = q.pop();
    for (const sid of adjOf(n)) { R.conn.add(sid); const s = R.segs.get(sid), o = s.a === n ? s.b : s.a; if (!seenN.has(o)) { seenN.add(o); q.push(o); } }
  }
}

// ---------------- simülasyon ----------------
const kindOf = b => b.svc ? 'S' : ZONES[b.zt].k;
export function needs(b) {
  const k = kindOf(b);
  if (k === 'S') return { e: 0, w: 0 };
  const c = b.cap;
  if (k === 'R') return { e: c * .22, w: c * .2 };
  if (k === 'I') return { e: c * .5, w: c * .3 };
  return { e: c * .3, w: c * .15 };
}
export function derive() {
  const st = { pop: 0, jobs: 0, jobsC: 0, jobsO: 0, jobsI: 0, eSup: 0, eDem: 0, wSup: 0, wDem: 0, hap: 0, n: 0, inc: 0, exp: 0, net: 0, Rd: 0, Cd: 0, Od: 0, Id: 0, roadLen: 0, cntZ: { r: 0, c: 0, i: 0, o: 0 }, svcCnt: {}, workers: 0, unemp: 0 };
  const svcs = { health: [], edu: [], police: [], fire: [], park: [], poll: [], garbage: [] }; let tour = 0;
  for (const b of R.blds.values()) {
    if (!b.svc) continue;
    const D = SVC[b.svc]; st.svcCnt[b.svc] = (st.svcCnt[b.svc] || 0) + 1;
    b.ok = !!(b.seg && R.conn.has(b.seg));
    st.exp += D.up;
    if (!b.ok) continue;
    if (D.elec) st.eSup += D.elec; if (D.water) st.wSup += D.water;
    if (D.cat in svcs) svcs[D.cat].push(b); if (D.cat === 'culture') svcs.park.push(b); if (D.tour) tour += D.tour;
    if (D.poll) svcs.poll.push({ x: b.x, z: b.z, p: D.poll, r: 14 });
  }
  for (const s of R.segs.values()) { const g = segGeo(s.id); st.roadLen += g.L; st.exp += g.L * ROADS[s.t].up; }
  for (const c of R.cells.values()) if (c.zt) st.cntZ[c.zt[0]]++;
  // altyapı dağıtımı
  let eL = st.eSup, wL = st.wSup;
  const zb = [...R.blds.values()].filter(b => !b.svc).sort((a, b) => a.id - b.id);
  for (const b of zb) {
    b.conn = R.conn.has(b.seg);
    const nd = needs(b); b.pow = false; b.wat = false;
    if (!b.conn) continue;
    st.eDem += nd.e; st.wDem += nd.w;
    if (eL >= nd.e) { b.pow = true; eL -= nd.e; }
    if (wL >= nd.w) { b.wat = true; wL -= nd.w; }
    if (ZONES[b.zt].k === 'I') svcs.poll.push({ x: b.x, z: b.z, p: 3 + b.lvl, r: 8 });
  }
  st.eDem = Math.ceil(st.eDem); st.wDem = Math.ceil(st.wDem);
  for (const b of zb) {
    const k = ZONES[b.zt].k;
    if (k === 'R') st.pop += b.pop;
    else if (b.conn && b.pow && b.wat) { st.jobs += b.cap; if (k === 'C') st.jobsC += b.cap; else if (k === 'O') st.jobsO += b.cap; else st.jobsI += b.cap; }
  }
  st.workers = Math.min(st.jobs, Math.floor(st.pop * .55) + 30);
  st.unemp = st.pop > 0 ? Math.max(0, st.pop * .55 - st.jobs) / (st.pop * .55) : 0;
  const fill = st.jobs ? st.workers / st.jobs : 0;
  // memnuniyet ve kapsama
  let hs = 0, hw = 0;
  const inR = (b, s, r) => (b.x - s.x) ** 2 + (b.z - s.z) ** 2 <= r * r;
  for (const b of zb) {
    const k = ZONES[b.zt].k;
    const cov = { health: 0, edu: 0, police: 0, fire: 0, park: 0, poll: 0, noise: 0, garbage: 0 };
    for (const s of svcs.garbage) if (inR(b, s, SVC[s.svc].r)) { cov.garbage = 1; break; }
    for (const s of svcs.health) if (inR(b, s, SVC[s.svc].r)) { cov.health = 1; break; }
    for (const s of svcs.police) if (inR(b, s, SVC[s.svc].r)) { cov.police = 1; break; }
    for (const s of svcs.fire) if (inR(b, s, SVC[s.svc].r)) { cov.fire = 1; break; }
    for (const s of svcs.edu) if (inR(b, s, SVC[s.svc].r)) cov.edu = Math.max(cov.edu, SVC[s.svc].lvl);
    for (const s of svcs.park) if (inR(b, s, SVC[s.svc].r)) cov.park += SVC[s.svc].val;
    if (k !== 'I') for (const p of svcs.poll) if (inR(b, p, p.r)) cov.poll += p.p;
    if (k === 'R') { const ns = nearestSeg(b.x, b.z, 2.5, s => s.t === 'highway'); if (ns) cov.noise = 8; }
    let h = 52;
    if (!b.conn) h -= 30; if (!b.pow) h -= 22; if (!b.wat) h -= 22;
    h += cov.health * 7 + cov.police * 5 + cov.fire * 5 + cov.edu * (k === 'R' ? 4 : 3);
    h += Math.min(25, cov.park) * (k === 'I' ? 0 : k === 'R' ? 1 : .6);
    h -= Math.min(35, cov.poll * 1.5) + cov.noise;
    if (k === 'R') h -= st.unemp * 25;
    if (!cov.garbage && S.maxPop > 150 && k !== 'I') h -= 8;
    h -= (S.tax - 1) * 40;
    b.hap = clamp(Math.round(h), 0, 100); b.cov = cov;
    if (k !== 'R') b.pop = (b.conn && b.pow && b.wat) ? Math.round(b.cap * fill) : 0;
    const w = Math.max(1, b.cap); hs += b.hap * w; hw += w;
  }
  st.hap = hw ? Math.round(hs / hw) : 0;
  const base = 60;
  st.Rd = clamp((st.jobs * 1.25 / .55 * .55 + base - st.pop) / Math.max(60, st.pop * .3), -1, 1);
  st.Cd = clamp((st.pop * .22 + 12 - st.jobsC) / Math.max(20, st.pop * .1), -1, 1);
  st.Od = S.ms >= 2 ? clamp((st.pop * .16 + 10 - st.jobsO) / Math.max(20, st.pop * .1), -1, 1) : 0;
  st.Id = clamp((st.pop * .26 + 25 - st.jobsI) / Math.max(20, st.pop * .1), -1, 1);
  st.inc = tour * Math.min(1, st.pop / 300) + (st.pop * .15 + st.jobsC * fill * .15 + st.jobsO * fill * .22 + st.jobsI * fill * .12) * S.tax;
  st.net = st.inc - st.exp;
  R.st = st;
  return st;
}
export function tick() {
  let st = derive();
  S.tk++;
  // konut doluluğu
  let room = Math.floor(st.jobs * 1.25 + 60 - st.pop);
  const res = [...R.blds.values()].filter(b => !b.svc && ZONES[b.zt].k === 'R');
  const good = [];
  for (const b of res) {
    if (b.conn && b.pow && b.wat && b.hap >= 25) good.push(b);
    else if (b.pop > 0) { const l = Math.max(1, Math.ceil(b.pop * .08)); b.pop -= l; room += l; }
  }
  good.sort((a, b) => (b.pop / b.cap - a.pop / a.cap) || (a.id - b.id));
  for (const b of good) {
    if (room <= 0) break;
    if (b.pop < b.cap) { const add = Math.min(b.cap - b.pop, Math.max(1, Math.ceil(b.cap * .2)), room); b.pop += add; room -= add; }
  }
  if (room < -15) for (const b of good) { if (room >= 0) break; if (b.pop > 0) { b.pop--; room++; } }
  // seviye atlama
  for (const b of R.blds.values()) {
    if (b.svc) continue;
    const Z = ZONES[b.zt]; if (b.lvl >= Z.maxL) continue;
    const req = LEVEL_REQ[Z.k][b.lvl + 1]; if (!req) continue;
    const full = Z.k === 'R' ? b.pop >= b.cap * .9 : b.pop >= b.cap * .6;
    const ok = b.conn && b.pow && b.wat && full && b.hap >= req.hap && (b.cov?.edu || 0) >= (req.edu || 0) && (!req.health || b.cov?.health) && (!req.police || b.cov?.police) && (!req.fire || b.cov?.fire) && (!req.garbage || b.cov?.garbage);
    if (ok) { b.prog++; if (b.prog >= 12 && Math.random() < .25) { b.lvl++; b.prog = 0; b.cap = Z.per[b.lvl - 1] * b.w * b.d; R.events.push({ t: 'up', id: b.id }); R.dirty.blds = true; } }
    else b.prog = Math.max(0, b.prog - 1);
  }
  st = derive();
  // yeni binalar
  const dm = { r1: st.Rd, r2: st.Rd, c1: st.Cd, c2: st.Cd, o: st.Od, i: st.Id };
  for (const zt of Object.keys(ZONES)) {
    const d = dm[zt]; if (d <= .05) continue;
    const n = 1 + Math.floor(d * 2);
    for (let k = 0; k < n; k++) if (!spawnZone(zt)) break;
  }
  S.money += st.net;
  if (st.pop > S.maxPop) S.maxPop = st.pop;
  while (S.ms + 1 < MILES.length && S.maxPop >= MILES[S.ms + 1].pop) { S.ms++; S.money += MILES[S.ms].bonus || 0; R.events.push({ t: 'ms', ms: S.ms }); }
  return derive();
}

// ---------------- yol bulma (trafik) ----------------
export function findPath(from, to) {
  if (from === to) return [from];
  const dist = new Map([[from, 0]]), prev = new Map(), heap = [[0, from]], done = new Set();
  const push = (d, n) => { heap.push([d, n]); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (; ;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  let it = 0;
  while (heap.length && it++ < 4000) {
    const [d, n] = pop(); if (done.has(n)) continue; done.add(n);
    if (n === to) break;
    for (const sid of adjOf(n)) {
      const s = R.segs.get(sid), o = s.a === n ? s.b : s.a, g = segGeo(sid);
      const nd = d + g.L / ROADS[s.t].speed;
      if (nd < (dist.get(o) ?? Infinity)) { dist.set(o, nd); prev.set(o, n); push(nd, o); }
    }
  }
  if (!prev.has(to)) return null;
  const path = [to]; let c = to; while (c !== from) { c = prev.get(c); path.push(c); } return path.reverse();
}
export function segBetween(a, b) { for (const sid of adjOf(a)) { const s = R.segs.get(sid); if ((s.a === a && s.b === b) || (s.b === a && s.a === b)) return s; } return null; }
export function setS(s) { S = s; }
