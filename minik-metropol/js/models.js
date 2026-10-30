// Prosedürel bina modelleri. Her model, malzeme anahtarına göre üçgen listeleri üretir.
import * as THREE from '../lib/three.module.js';
import { MAT } from './tex.js';
import { FH, ZONES, SVC } from './data.js';
import { hash } from './world.js';

export class MB { // malzeme başına geometri biriktirici (dünya koordinatı)
  constructor() { this.p = []; this.n = []; this.u = []; }
  tri(a, b, c, na, ua, ub, uc) { this.p.push(...a, ...b, ...c); this.n.push(...na, ...na, ...na); this.u.push(...ua, ...ub, ...uc); }
}
export function toGeometry(arrs) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(arrs.p instanceof Float32Array ? arrs.p : new Float32Array(arrs.p), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(arrs.n instanceof Float32Array ? arrs.n : new Float32Array(arrs.n), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(arrs.u instanceof Float32Array ? arrs.u : new Float32Array(arrs.u), 2));
  g.computeBoundingSphere();
  return g;
}

const _m = new THREE.Matrix4(), _m2 = new THREE.Matrix4(), _v = new THREE.Vector3(), _nm = new THREE.Matrix3(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(1, 1, 1);
const geoCache = {};
function cg(key, fn) { if (!geoCache[key]) { const g = fn(); geoCache[key] = g.index ? g.toNonIndexed() : g; } return geoCache[key]; }

export class Ctx {
  constructor(x, z, a, out) { this.x = x; this.z = z; this.ca = Math.cos(a); this.sa = Math.sin(a); this.a = a; this.out = out; this.emit = []; this.dyn = []; }
  mb(k) { let b = this.out.get(k); if (!b) { b = new MB(); this.out.set(k, b); } return b; }
  W(lx, ly, lz) { return [this.x + lx * this.ca + lz * this.sa, ly, this.z - lx * this.sa + lz * this.ca]; }
  N(nx, ny, nz) { return [nx * this.ca + nz * this.sa, ny, -nx * this.sa + nz * this.ca]; }
  quad(k, p0, p1, p2, p3, n, uv) { // p: yerel köşe [x,y,z], saat yönü tersine (dışarıdan bakınca)
    const b = this.mb(k), w = [p0, p1, p2, p3].map(p => this.W(...p)), nn = this.N(...n);
    b.tri(w[0], w[1], w[2], nn, uv[0], uv[1], uv[2]); b.tri(w[0], w[2], w[3], nn, uv[0], uv[2], uv[3]);
  }
  // eksen hizalı kutu (yerel). top/side malzeme; yan yüzeylerde cephe dokusu ölçeklenir
  box(side, top, cx, y0, cz, w, h, d, o = {}) {
    const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2, y1 = y0 + h;
    const M = MAT[side] || { us: 1, vs: 1 }, us = M.us, vs = M.vs, vo = (o.v0 || 0);
    const U = (a, b, len) => [[a, vo], [a + len / us, vo], [a + len / us, vo + h / vs], [a, vo + h / vs]];
    const u0 = o.u0 || 0;
    if (!o.noFront) this.quad(o.front || side, [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], o.front && MAT[o.front] ? [[0, 0], [w / MAT[o.front].us, 0], [w / MAT[o.front].us, h / MAT[o.front].vs], [0, h / MAT[o.front].vs]] : U(u0, 0, w));
    if (!o.noBack) this.quad(side, [x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], U(u0 + .37, 0, w));
    this.quad(side, [x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], U(u0 + .61, 0, d));
    this.quad(side, [x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], U(u0 + .13, 0, d));
    if (top) { const T = MAT[top] || { us: 1, vs: 1 }; this.quad(top, [x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], [[x0 / T.us, z1 / T.vs], [x1 / T.us, z1 / T.vs], [x1 / T.us, z0 / T.vs], [x0 / T.us, z0 / T.vs]]); }
  }
  flat(k, cx, y, cz, w, d) { const T = MAT[k] || { us: 1, vs: 1 }; const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2; this.quad(k, [x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], [0, 1, 0], [[0, 0], [w / T.us, 0], [w / T.us, d / T.vs], [0, d / T.vs]]); }
  flatUV(k, cx, y, cz, w, d) { const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2; this.quad(k, [x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], [0, 1, 0], [[0, 0], [1, 0], [1, 1], [0, 1]]); }
  // beşik çatı: mahya x ekseni boyunca
  gable(k, cx, y0, cz, w, d, h) {
    const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2, y1 = y0 + h;
    const sl = Math.hypot(h, d / 2), ny = (d / 2) / sl, nz = h / sl, UV = [[0, 0], [1, 0], [1, 1], [0, 1]];
    this.quad(k, [x0, y0, z1], [x1, y0, z1], [x1, y1, cz], [x0, y1, cz], [0, ny, nz], UV);
    this.quad(k, [x1, y0, z0], [x0, y0, z0], [x0, y1, cz], [x1, y1, cz], [0, ny, -nz], UV);
    const bb = this.mb(k);
    bb.tri(this.W(x1, y0, z1), this.W(x1, y0, z0), this.W(x1, y1, cz), this.N(1, 0, 0), [0, 0], [1, 0], [.5, 1]);
    bb.tri(this.W(x0, y0, z0), this.W(x0, y0, z1), this.W(x0, y1, cz), this.N(-1, 0, 0), [0, 0], [1, 0], [.5, 1]);
  }
  // kırma çatı (4 eğimli)
  hip(k, cx, y0, cz, w, d, h) {
    const x0 = cx - w / 2, x1 = cx + w / 2, z0 = cz - d / 2, z1 = cz + d / 2, y1 = y0 + h, r = Math.max(0, (w - d) / 2);
    const a = [x0, y0, z1], b = [x1, y0, z1], c = [x1, y0, z0], e = [x0, y0, z0], p = [cx - r, y1, cz], q = [cx + r, y1, cz];
    const bb = this.mb(k), T = (A, B, C) => { const wa = this.W(...A), wb = this.W(...B), wc = this.W(...C); const ux = wb[0] - wa[0], uy = wb[1] - wa[1], uz = wb[2] - wa[2], vx = wc[0] - wa[0], vy = wc[1] - wa[1], vz = wc[2] - wa[2]; let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1; bb.tri(wa, wb, wc, [nx / l, ny / l, nz / l], [0, 0], [1, 0], [.5, 1]); };
    T(a, b, q); T(a, q, p); T(b, c, q); T(c, e, p); T(c, p, q); T(e, a, p);
  }
  geo(k, geometry, lx, ly, lz, ry = 0, sx = 1, sy = 1, sz = 1) {
    _q.setFromEuler(_e.set(0, ry + this.a, 0)); _s.set(sx, sy, sz);
    const w = this.W(lx, ly, lz); _m.compose(_v.set(w[0], w[1], w[2]), _q, _s);
    _nm.getNormalMatrix(_m);
    const P = geometry.attributes.position, Nn = geometry.attributes.normal, U = geometry.attributes.uv;
    const b = this.mb(k), pv = new THREE.Vector3(), nv = new THREE.Vector3();
    for (let i = 0; i < P.count; i++) {
      pv.fromBufferAttribute(P, i).applyMatrix4(_m); nv.fromBufferAttribute(Nn, i).applyMatrix3(_nm).normalize();
      b.p.push(pv.x, pv.y, pv.z); b.n.push(nv.x, nv.y, nv.z); b.u.push(U ? U.getX(i) : 0, U ? U.getY(i) : 0);
    }
  }
  cyl(k, lx, y0, lz, r, h, seg = 12) { this.geo(k, cg(`c${seg}`, () => new THREE.CylinderGeometry(1, 1, 1, seg).translate(0, .5, 0)), lx, y0, lz, 0, r, h, r); }
  cone(k, lx, y0, lz, r, h, seg = 8) { this.geo(k, cg(`k${seg}`, () => new THREE.ConeGeometry(1, 1, seg).translate(0, .5, 0)), lx, y0, lz, 0, r, h, r); }
  taper(k, lx, y0, lz, r1, r2, h, seg = 12) { this.geo(k, cg(`t${seg}_${(r2 / r1).toFixed(2)}`, () => new THREE.CylinderGeometry(r2 / r1, 1, 1, seg).translate(0, .5, 0)), lx, y0, lz, 0, r1, h, r1); }
  sphere(k, lx, y, lz, r, sy = 1) { this.geo(k, cg('s', () => new THREE.SphereGeometry(1, 12, 8)), lx, y, lz, 0, r, r * sy, r); }
  tree(lx, lz, s = 1, v = 0) {
    this.cyl('brown', lx, 0, lz, .035 * s, .28 * s, 5);
    const lk = ['leaf1', 'leaf2', 'leaf3'][(v * 3) | 0];
    if (v > .8) this.cone('leaf2', lx, .2 * s, lz, .2 * s, .6 * s, 7);
    else this.geo(lk, cg('ico', () => new THREE.IcosahedronGeometry(1, 0)), lx, .42 * s, lz, v * 6, .22 * s, .24 * s, .22 * s);
  }
  car(lx, lz, ry, col) {
    this.geo(col, cg('carb', () => new THREE.BoxGeometry(.22, .1, .48).translate(0, .08, 0)), lx, 0, lz, ry);
    this.geo('glass', cg('carc', () => new THREE.BoxGeometry(.19, .08, .24).translate(0, .17, -.03)), lx, 0, lz, ry);
  }
  smoke(lx, ly, lz, kind = 'smoke') { this.emit.push({ p: this.W(lx, ly, lz), kind }); }
}

const pick = (arr, v) => arr[Math.min(arr.length - 1, (v * arr.length) | 0)];
const HOUSE_W = ['h_cream', 'h_white', 'h_peach', 'h_blue', 'h_sand', 'h_brick'];
const ROOF = ['roof_red', 'roof_brown', 'roof_grey', 'roof_red', 'roof_dark'];
const AP = ['ap_beige', 'ap_grey', 'ap_white', 'ap_pink', 'ap_brick'];
const SF = ['sf_red', 'sf_blue', 'sf_green', 'sf_orange', 'sf_purple', 'sf_teal'];
const SIGN = ['sign_r', 'sign_b', 'sign_g', 'sign_y', 'sign_p'];
const GLASS = ['of_glassB', 'of_glassG', 'of_glassD', 'of_glassGold', 'of_glassB'];
const IND = ['ind_grey', 'ind_blue', 'ind_red', 'ind_brick'];
const CARS = ['red', 'blue', 'white', 'black', 'yellow', 'metal', 'greenc'];

// ---------------- konut (az yoğun) ----------------
function r1(c, b) {
  const W = b.w, D = b.d, v = b.v, v2 = hash(b.id * 7), L = b.lvl;
  const wall = pick(HOUSE_W, v), roof = pick(ROOF, v2);
  c.flat('lawn', 0, .004, 0, W - .04, D - .04);
  const fz = D / 2; // ön kenar
  if (L <= 2) {
    const hw = Math.min(W - .25, .72 + (L - 1) * .1), hd = Math.min(D - .35, .62), fl = L === 1 ? 1 : 2, h = fl * FH;
    const cz = fz - .2 - hd / 2;
    c.box(wall, null, 0, 0, cz, hw, h, hd);
    if (v > .5) c.hip(roof, 0, h, cz, hw + .1, hd + .1, .26); else c.gable(roof, 0, h, cz, hw + .1, hd + .12, .28);
    c.box('brown', 'brown', -.12, 0, cz + hd / 2 + .001, .14, .26, .01, {});
    c.box('concrete', 'concrete', hw * .2, h + .05, cz - hd * .2, .07, .25, .07);
    c.flat('pave', -.12, .006, fz - .1, .16, .2);
    if (W >= 2) { c.box('white', 'roof_grey', .62, 0, cz + .05, .42, .3, .5); c.flat('concrete', .62, .006, fz - .15, .38, .32); c.car(.62, fz - .16, 0, pick(CARS, v2)); }
    else if (hash(b.id * 13) < .5) c.car(W / 2 - .2, fz - .28, 0, pick(CARS, v));
    c.tree(W / 2 - .2, -D / 2 + .25, .8, v2);
    if (D >= 2) c.tree(-W / 2 + .25, -D / 2 + .3, .9, v);
    // çit
    c.box('white', 'white', 0, 0, -D / 2 + .03, W - .1, .07, .02);
  } else if (L <= 4) {
    const hw = Math.min(W - .2, .9), hd = Math.min(D - .3, .75), h = 2 * FH, cz = fz - .18 - hd / 2;
    c.box(wall, null, -.05, 0, cz, hw, h, hd);
    c.hip(roof, -.05, h, cz, hw + .12, hd + .12, .3);
    // yan kanat
    c.box(wall, null, hw / 2 - .05, 0, cz - .15, .4, FH, Math.min(D - .3, hd + .3));
    c.hip(roof, hw / 2 - .05, FH, cz - .15, .5, Math.min(D - .2, hd + .4), .18);
    c.box('white', 'white', -.05, FH, cz + hd / 2 + .08, hw * .6, .03, .16); // balkon
    c.flat('pave', -.2, .006, fz - .12, .2, .24);
    if (W >= 2) c.car(W / 2 - .3, fz - .3, 0, pick(CARS, v2));
    if (L === 4 && D >= 2) { c.flat('pave', 0, .005, -D / 2 + .55, Math.min(1.2, W - .3), .7); c.flat('pool', 0, .012, -D / 2 + .55, Math.min(.9, W - .6), .4); }
    c.tree(-W / 2 + .2, -D / 2 + .25, 1, v2); c.tree(W / 2 - .2, -D / 2 + .3, .8, v);
    c.box('hedge', 'hedge', 0, 0, fz - .03, W - .5, .12, .06);
  } else {
    // modern villa
    const hw = Math.min(W - .2, 1.1), hd = Math.min(D - .4, .8), cz = fz - .2 - hd / 2;
    c.box('white', 'gravel', 0, 0, cz, hw, FH, hd, { front: 'h_modern' });
    c.box('h_modern', 'gravel', -.12, FH, cz - .08, hw * .75, FH, hd * .8);
    c.box('wood', 'wood', .25, FH * 2, cz - .08, hw * .5, .03, hd * .8 + .1);
    if (D >= 2) { c.flat('pave', 0, .005, -D / 2 + .55, Math.min(1.3, W - .2), .8); c.flat('pool', 0, .012, -D / 2 + .55, Math.min(1, W - .5), .45); }
    c.tree(W / 2 - .2, -D / 2 + .25, 1.1, v2); c.tree(-W / 2 + .2, fz - .25, .7, v);
  }
}
// ---------------- konut (yoğun) ----------------
function r2(c, b) {
  const W = b.w, D = b.d, v = b.v, L = b.lvl;
  const fl = [3, 5, 8, 13, 20][L - 1] + Math.round(hash(b.id) * [1, 2, 3, 4, 8][L - 1]);
  const h = fl * FH;
  c.flat('pave', 0, .004, 0, W, D);
  const bw = W - .3, bd = D - .5, cz = (D / 2 - .2) - bd / 2;
  if (L <= 2) {
    const f = pick(AP, v);
    c.box(f, 'gravel', 0, 0, cz, bw, h, bd);
    if (v > .55) c.hip(pick(ROOF, hash(b.id + 3)), 0, h, cz, bw + .1, bd + .1, .35);
    else { c.box('concrete', 'concrete', 0, h, cz, bw + .04, .05, bd + .04); c.box('concrete_d', 'gravel', bw * .2, h + .05, cz - bd * .2, .3, .2, .25); }
    c.box('glass', 'concrete', 0, 0, cz + bd / 2 + .02, .3, .3, .04);
    c.tree(-W / 2 + .2, D / 2 - .15, .7, v); c.tree(W / 2 - .2, D / 2 - .15, .7, hash(b.id));
  } else if (L === 3) {
    const f = pick(['ap_modern', ...AP], v);
    c.box(f, 'gravel', 0, 0, cz, bw, h, bd);
    c.box('concrete', 'concrete', 0, h, cz, bw + .05, .06, bd + .05);
    c.box('concrete_d', 'gravel', -bw * .2, h + .06, cz, .35, .3, .3);
    c.cyl('metal', bw * .25, h + .06, cz + .1, .1, .22, 10);
    c.box('glass', 'concrete', 0, 0, cz + bd / 2 + .02, .4, .32, .05);
  } else {
    // kule + kaide
    const f = pick(['ap_modern', 'ap_white', 'ap_grey', 'of_glassB'], v);
    c.box('sf_' + pick(['blue', 'green', 'teal', 'purple'], v), 'gravel', 0, 0, cz, bw, .42, bd);
    const tw = Math.min(bw, 1.6) * .82, td = Math.min(bd, 1.6) * .82;
    const t1 = h * (L === 5 ? .7 : 1);
    c.box(f, 'gravel', 0, .42, cz, tw, t1, td);
    if (L === 5) {
      c.box(f, 'gravel', 0, .42 + t1, cz, tw * .78, h * .3, td * .78);
      c.box('metal', 'metal', 0, .42 + h, cz, tw * .5, .25, td * .5);
      c.cyl('metal', 0, .42 + h + .25, cz, .02, .9, 6);
      c.box('lamp', 'lamp', 0, .42 + h + 1.12, cz, .05, .05, .05);
    } else {
      c.box('concrete', 'concrete', 0, .42 + t1, cz, tw + .04, .06, td + .04);
      c.box('concrete_d', 'gravel', 0, .48 + t1, cz, tw * .4, .3, td * .4);
    }
  }
}
// ---------------- ticaret ----------------
function c1(c, b) {
  const W = b.w, D = b.d, v = b.v, L = b.lvl, sf = pick(SF, v);
  c.flat('pave', 0, .004, 0, W, D);
  const bw = W - .12, bd = Math.min(D - .25, D > 1 ? 1.4 : .8), cz = D / 2 - .15 - bd / 2;
  if (L === 1) {
    c.box('h_white', 'gravel', 0, 0, cz, bw, .44, bd, { front: sf });
    c.box('concrete', 'concrete', 0, .44, cz, bw + .03, .04, bd + .03);
    const aw = SIGN[(v * 5) | 0];
    c.box(aw, aw, 0, .3, cz + bd / 2 + .08, bw * .9, .025, .16);
    c.box('metal', 'metal', bw * .25, .48, cz - bd * .2, .2, .12, .16);
  } else {
    const fl = L === 2 ? 2 : 3, f = pick(HOUSE_W, hash(b.id));
    c.box(f, 'gravel', 0, 0, cz, bw, .44, bd, { front: sf });
    c.box(f, 'gravel', 0, .44, cz, bw, fl * FH, bd);
    if (L === 3 && v > .5) c.hip(pick(ROOF, v), 0, .44 + fl * FH, cz, bw + .08, bd + .08, .25);
    else c.box('concrete', 'concrete', 0, .44 + fl * FH, cz, bw + .04, .05, bd + .04);
    const aw = SIGN[(v * 5) | 0];
    c.box(aw, aw, 0, .32, cz + bd / 2 + .08, bw * .9, .025, .16);
  }
}
function c2(c, b) {
  const W = b.w, D = b.d, v = b.v, L = b.lvl, sf = pick(SF, v), sg = SIGN[(v * 5) | 0];
  c.flat('pave', 0, .004, 0, W, D);
  if (L === 1) { // süpermarket / AVM + otopark
    const bd = D * .55, cz = -D / 2 + bd / 2 + .1;
    c.flat('lot', 0, .006, D / 2 - (D - bd) / 2, W - .1, D - bd - .2);
    for (let k = 0; k < Math.floor(W * 2.5); k++) if (hash(b.id * 5 + k) < .6) c.car(-W / 2 + .3 + k * .4, D / 2 - (D - bd) / 2 + (k % 2 ? .3 : -.3), 0, pick(CARS, hash(b.id + k)));
    c.box('ind_grey', 'gravel', 0, 0, cz, W - .2, .7, bd, { front: sf });
    c.box(sg, sg, 0, .72, cz + bd / 2 - .05, W * .5, .18, .05);
    c.box('metal', 'metal', -W * .2, .7, cz, .4, .14, .3);
  } else if (L === 2) {
    const bw = W - .2, bd = D - .4, cz = D / 2 - .2 - bd / 2;
    c.box('of_ribbon', 'gravel', 0, 0, cz, bw, 4 * FH + .42, bd, { front: 'of_glassB' });
    c.box(sf, null, 0, 0, cz + bd / 2 + .005, bw, .42, .01, { noBack: true });
    c.box(sg, sg, 0, 4 * FH + .2, cz + bd / 2 + .03, bw * .6, .2, .04);
  } else {
    const bw = W - .2, bd = D - .4, cz = D / 2 - .2 - bd / 2;
    c.box('of_glassB', 'gravel', 0, 0, cz, bw, 1.1, bd, { front: sf });
    const g = pick(GLASS, v), h = (10 + Math.round(v * 6)) * FH;
    c.box(g, 'gravel', 0, 1.1, cz - .1, bw * .6, h, bd * .6);
    c.box(sg, sg, 0, 1.1 + h - .25, cz - .1 + bd * .3 + .01, bw * .4, .18, .02);
    c.box('metal', 'metal', 0, 1.1 + h, cz - .1, bw * .3, .2, bd * .3);
  }
}
// ---------------- ofis ----------------
function off(c, b) {
  const W = b.w, D = b.d, v = b.v, L = b.lvl;
  c.flat('pave', 0, .004, 0, W, D);
  const bw = W - .3, bd = D - .45, cz = D / 2 - .2 - bd / 2;
  if (L === 1) {
    const f = pick(['of_ribbon', 'of_stone', 'of_ribbonDark'], v), h = (4 + Math.round(v * 3)) * FH;
    c.box(f, 'gravel', 0, 0, cz, bw, h, bd);
    c.box('concrete', 'concrete', 0, h, cz, bw + .04, .06, bd + .04);
    c.box('metal', 'gravel', bw * .2, h + .06, cz, .4, .2, .3);
    c.tree(-W / 2 + .2, D / 2 - .15, .7, v);
  } else if (L === 2) {
    const f = pick(GLASS, v), h = (10 + Math.round(v * 5)) * FH;
    c.box('glass', 'gravel', 0, 0, cz, bw, .5, bd);
    c.box(f, 'gravel', 0, .5, cz, bw * .9, h, bd * .9);
    c.box('concrete_d', 'gravel', 0, .5 + h, cz, bw * .5, .3, bd * .5);
  } else {
    const f = pick(GLASS, v), h = (24 + Math.round(v * 12)) * FH;
    const tw = bw * .85, td = bd * .85;
    c.box('of_glassD', 'gravel', 0, 0, cz, bw, .6, bd);
    c.box(f, 'gravel', 0, .6, cz, tw, h * .55, td);
    c.box(f, 'gravel', 0, .6 + h * .55, cz, tw * .82, h * .3, td * .82);
    c.box(f, 'gravel', 0, .6 + h * .85, cz, tw * .6, h * .15, td * .6);
    c.taper('metal', 0, .6 + h, cz, .12, .02, 1.4, 8);
    c.box('lamp', 'lamp', 0, .6 + h + 1.4, cz, .05, .05, .05);
  }
}
// ---------------- sanayi ----------------
function ind(c, b) {
  const W = b.w, D = b.d, v = b.v, L = b.lvl, f = pick(IND, v);
  c.flat('lot', 0, .005, 0, W - .05, D - .05);
  if (L === 1) {
    const bw = W * .6, bd = D * .55, cz = -D / 2 + bd / 2 + .15;
    c.box(f, null, -W * .15, 0, cz, bw, .5, bd);
    c.gable('metal', -W * .15, .5, cz, bw + .06, bd + .06, .22);
    for (let k = 0; k < 4; k++) c.box('wood', 'wood', W * .3 - (k % 2) * .2, 0, D / 2 - .35 - ((k / 2) | 0) * .22, .16, .14, .16);
  } else if (L === 2) {
    const bw = W - .3, bd = D * .65, cz = -D / 2 + bd / 2 + .15, h = .7;
    c.box(f, 'metal', 0, 0, cz, bw, h, bd);
    for (let k = 0; k < Math.floor(bd / .35); k++) c.gable('metal_d', 0, h, cz - bd / 2 + .18 + k * .35, bw, .35, .14);
    c.box('metal_d', 'metal_d', 0, 0, cz + bd / 2 + .01, bw * .8, .4, .02);
    // kamyon
    c.box('white', 'white', -bw * .2, 0, D / 2 - .4, .2, .2, .55); c.box('blue', 'blue', -bw * .2, 0, D / 2 - .1, .2, .17, .15);
  } else {
    const bw = W * .55, bd = D * .6, cz = -D / 2 + bd / 2 + .15, h = .9;
    c.box(f, 'metal', -W * .18, 0, cz, bw, h, bd);
    c.box('ind_grey', 'metal', -W * .18 + bw * .2, h, cz, bw * .4, .3, bd * .5);
    const chH = 2.2 + v;
    c.taper('stripe', W * .25, 0, -D / 2 + .5, .15, .1, chH, 14); c.smoke(W * .25, chH + .1, -D / 2 + .5);
    if (W >= 3) { c.taper('stripe', W * .38, 0, -D / 2 + .9, .12, .08, chH * .8, 14); c.smoke(W * .38, chH * .8 + .1, -D / 2 + .9); }
    for (let k = 0; k < 2; k++) { c.cyl('metal', W * .3 - k * .35, 0, D / 2 - .45, .16, .7, 14); c.sphere('metal', W * .3 - k * .35, .7, D / 2 - .45, .16, .5); }
    c.box('metal_d', 'metal_d', W * .1, .5, D / 2 - .45, .9, .05, .05);
  }
}

// ---------------- hizmet binaları ----------------
const SVCM = {
  wind(c, b) { c.flat('grass', 0, .004, 0, 1, 1); c.taper('white', 0, 0, 0, .07, .035, 2.6, 10); c.box('white', 'white', 0, 2.55, -.05, .1, .1, .25); c.dyn.push({ t: 'rotor', p: c.W(0, 2.6, .1), a: c.a }); },
  coal(c, b) {
    c.flat('lot', 0, .005, 0, b.w, b.d);
    c.box('plant', 'metal', -.6, 0, .2, 2.2, 1.2, 1.8);
    c.box('ind_grey', 'metal', .9, 0, .5, 1.2, .7, 1.2);
    for (const x of [1.1, 1.6]) { c.taper('stripe', x, 0, -.9, .2, .13, 3.6, 14); c.smoke(x, 3.7, -.9); }
    c.cyl('concrete', -1.4, 0, -1.0, .35, .4, 16); c.box('black', 'black', -.4, 0, -1.05, 1, .25, .5);
  },
  solar(c, b) { c.flat('grass', 0, .004, 0, b.w, b.d); for (let i = -1.5; i <= 1.5; i += 1) for (let j = -1.5; j <= 1.5; j += .7) { c.box('metal_d', 'solar', i, .05, j, .9, .06, .45); } c.box('white', 'roof_grey', 1.6, 0, 1.75, .5, .3, .4); },
  wtower(c, b) { c.flat('grass', 0, .004, 0, 1, 1); for (const [x, z] of [[-.2, -.2], [.2, -.2], [-.2, .2], [.2, .2]]) c.cyl('metal_d', x, 0, z, .025, 1.1, 6); c.cyl('metal_d', 0, 0, 0, .05, 1.2, 8); c.sphere('white', 0, 1.35, 0, .38, .75); c.cone('white', 0, 1.6, 0, .12, .14, 10); },
  pump(c, b) { c.flat('concrete', 0, .005, 0, 2, 2); c.box('plant', 'gravel', 0, 0, .3, 1.4, .6, .9); c.cyl('blue', -.5, 0, -.6, .1, .2, 10); c.box('blue', 'blue', 0, .1, -.6, 1, .08, .08); c.cyl('metal', .5, 0, -.5, .25, .5, 14); },
  clinic(c, b) { c.flat('pave', 0, .004, 0, 2, 2); c.box('hosp', 'gravel', 0, 0, .1, 1.6, 2 * FH, 1.2); c.box('cross', 'cross', 0, .45, .71, .3, .3, .01); c.box('white', 'white', 0, .3, .85, .8, .03, .3); c.tree(-.75, -.75, .8, .3); c.tree(.75, -.75, .8, .6); },
  hosp(c, b) {
    c.flat('pave', 0, .004, 0, b.w, b.d);
    c.box('hosp', 'gravel', -.3, 0, .2, 2.6, 6 * FH, 1.6);
    c.box('hosp', 'gravel', 1.2, 0, -.2, 1.2, 3 * FH, 2);
    c.flatUV('helipad', -.3, 6 * FH + .01, .2, 1.1, 1.1);
    c.box('cross', 'cross', -.3, 1.7, 1.01, .5, .5, .01);
    c.box('white', 'white', 1.2, .35, 1.05, 1, .04, .4);
    c.box('white', 'white', 1.0, 0, 1.25, .25, .2, .45); c.box('red', 'red', 1.0, .2, 1.25, .25, .02, .45);
    c.tree(-1.7, -1.2, .9, .2); c.tree(1.7, -1.2, .9, .7);
  },
  ilk(c, b) { school(c, b, 2, 'court'); },
  orta(c, b) { school(c, b, 2, 'court', true); },
  lise(c, b) { school(c, b, 3, 'pitch', true); },
  uni(c, b) {
    c.flat('lawn', 0, .004, 0, b.w, b.d);
    c.flat('pave', 0, .006, .3, .6, b.d - .5); c.flat('pave', 0, .006, -.2, b.w - .6, .5);
    c.box('civic', 'roof_grey', 0, 0, -1.5, 2.4, 3 * FH, 1.4); c.gable('roof_grey', 0, 3 * FH, -1.5, 2.5, 1.5, .4);
    for (let k = -1; k <= 1; k++) c.cyl('white', k * .5, 0, -.72, .06, 3 * FH, 10);
    c.box('civic', 'roof_grey', -2.1, 0, .6, 1.2, 3 * FH, 2); c.hip('roof_grey', -2.1, 3 * FH, .6, 1.3, 2.1, .3);
    c.box('school', 'gravel', 2.1, 0, .6, 1.2, 4 * FH, 2);
    c.box('civic', 'civic', 1.2, 0, -1.7, .4, 2.2, .4); c.cone('roof_grey', 1.2, 2.2, -1.7, .3, .5, 4);
    c.box('white', 'white', 1.2, 1.7, -1.49, .2, .2, .01);
    for (const [x, z] of [[-.8, 1.6], [.8, 1.6], [-2.6, 2.2], [2.6, 2.2], [-.9, .5], [.9, .5]]) c.tree(x, z, 1, (x + z + 5) / 10 % 1);
  },
  police(c, b) {
    c.flat('lot', 0, .005, 0, 2, 2);
    c.box('police', 'gravel', 0, 0, -.2, 1.6, 2 * FH, 1.2);
    c.box('blue', 'blue', 0, .55, .41, 1.6, .08, .01);
    c.box('blue', 'blue', 0, 2 * FH, -.2, .5, .15, .3);
    for (const x of [-.5, 0, .5]) { c.box('white', 'white', x, 0, .75, .2, .1, .4); c.box('blue', 'black', x, .1, .75, .18, .07, .2); }
  },
  fire(c, b) {
    c.flat('pave', 0, .004, 0, 2, 3);
    c.box('fire', 'gravel', -.2, 0, .2, 1.4, 2 * FH, 2.2);
    for (const z of [-.4, .2, .8]) c.box('red', 'red', .505, .02, z, .01, .45, .45);
    c.box('fire', 'gravel', -.65, 0, -1.05, .5, 1.6, .5);
    for (const z of [.0, .6]) { c.box('red', 'red', .8, 0, z, .25, .2, .5); c.box('white', 'white', .8, .2, z, .2, .03, .4); }
  },
  park(c, b) { park(c, b, false); },
  play(c, b) {
    c.flat('grass', 0, .004, 0, 2, 2); c.flat('pave', 0, .006, .2, .4, 1.6);
    c.flat('pave', -.5, .007, -.3, .8, .8);
    c.box('red', 'red', -.5, 0, -.3, .3, .3, .3); c.box('yellow', 'yellow', -.5, .3, -.3, .35, .03, .35);
    c.box('blue', 'blue', -.2, 0, -.3, .3, .03, .1);
    for (const x of [.4, .7]) c.box('metal_d', 'metal_d', x, 0, -.5, .03, .4, .03);
    c.box('metal_d', 'metal_d', .55, .4, -.5, .35, .03, .03);
    c.tree(-.75, .7, .9, .4); c.tree(.75, .7, .9, .1); c.tree(.75, -.85, .8, .7);
  },
  plaza(c, b) {
    c.flat('pave', 0, .005, 0, 3, 3);
    c.cyl('concrete', 0, 0, 0, .55, .12, 20); c.cyl('pool', 0, .02, 0, .48, .11, 20); c.cyl('concrete', 0, 0, 0, .08, .4, 8); c.sphere('pool', 0, .42, 0, .08);
    for (const [x, z] of [[-1.1, -1.1], [1.1, -1.1], [-1.1, 1.1], [1.1, 1.1]]) { c.tree(x, z, 1, .3); c.cyl('concrete', x, 0, z, .18, .06, 10); }
    for (const [x, z] of [[0, 1.2], [0, -1.2]]) c.box('wood', 'wood', x, .05, z, .4, .04, .1);
  },
  bigpark(c, b) { park(c, b, true); },
  cop(c, b) {
    c.flat('lot', 0, .005, 0, 3, 3);
    c.box('ind_grey', 'metal', -.6, 0, -.5, 1.6, .6, 1.4); c.gable('metal_d', -.6, .6, -.5, 1.66, 1.46, .25);
    for (const [x, z, r] of [[.9, -.8, .45], [1.0, .2, .35]]) c.cone('brown', x, 0, z, r, .4, 7);
    for (const x of [-.8, -.2]) { c.box('greenc', 'greenc', x, 0, 1.1, .22, .22, .55); c.box('white', 'white', x, .05, .8, .2, .17, .14); }
    c.box('metal_d', null, 0, 0, 1.48, 3, .3, .03);
  },
  cami(c, b) {
    c.flat('pave', 0, .005, 0, 3, 3);
    c.box('civic', 'gravel', 0, 0, -.25, 1.7, .8, 1.7);
    c.cyl('civic', 0, .8, -.25, .62, .18, 24);
    c.sphere('roof_grey', 0, .98, -.25, .62, .75);
    for (const [x, z] of [[.85, -.25], [-.85, -.25], [0, .6], [0, -1.1]]) c.sphere('roof_grey', x, .8, z, .32, .6);
    c.cyl('yellow', 0, 1.44, -.25, .015, .2, 6); c.sphere('yellow', 0, 1.66, -.25, .04);
    for (const x of [-1.15, 1.15]) {
      c.cyl('white', x, 0, .65, .09, 2.5, 12); c.cyl('white', x, 1.85, .65, .13, .05, 12); c.cyl('white', x, 2.2, .65, .11, .04, 12);
      c.cone('roof_grey', x, 2.5, .65, .1, .5, 12); c.cyl('yellow', x, 3, .65, .01, .12, 4);
    }
    c.cyl('concrete', 0, 0, 1.05, .25, .12, 12); c.cone('roof_grey', 0, .35, 1.05, .32, .25, 8); for (let k = 0; k < 6; k++) { const a = k / 6 * 6.28; c.cyl('white', Math.cos(a) * .25, 0, 1.05 + Math.sin(a) * .25, .015, .35, 4); }
    c.tree(-1.2, -1.2, .9, .4); c.tree(1.2, -1.2, .9, .2);
  },
  kutup(c, b) {
    c.flat('pave', 0, .005, 0, 2, 2);
    c.box('civic', 'roof_grey', 0, .12, -.2, 1.5, .7, 1.1); c.gable('roof_grey', 0, .82, -.2, 1.6, 1.2, .3);
    c.box('concrete', 'concrete', 0, 0, .1, 1.6, .12, 1.6);
    for (let k = -2; k <= 2; k++) c.cyl('white', k * .3, .12, .4, .04, .7, 8);
    c.box('civic', null, 0, .82, .45, 1.5, .08, .06);
    c.tree(-.8, .8, .7, .3); c.tree(.8, .8, .7, .6);
  },
  muze(c, b) {
    c.flat('pave', 0, .005, 0, 4, 3);
    c.box('of_glassD', 'gravel', -.3, 0, -.2, 2.6, 1, 1.8);
    c.box('white', 'white', .3, 1, 0, 3.2, .12, 2.2);
    c.box('civic', 'gravel', 1.3, 0, -.4, .9, 1.5, 1.2);
    c.sphere('metal', -1.4, .35, .95, .3); c.box('concrete', 'concrete', -1.4, 0, .95, .3, .1, .3);
    c.flat('pool', .6, .01, 1.1, 1.6, .4);
  },
  busdep(c, b) {
    c.flat('lot', 0, .005, 0, 3, 3);
    c.box('ind_blue', 'metal', 0, 0, -.8, 2.6, .7, 1.2); c.box('white', 'white', 0, .7, -.8, 2.7, .05, 1.3);
    for (let k = 0; k < 4; k++) { c.box('blue', 'blue', -1 + k * .66, 0, .6, .26, .3, .9); c.box('glass', 'glass', -1 + k * .66, .17, .6, .27, .09, .86); }
    c.box('sign_b', 'sign_b', 0, .5, -.19, 1.2, .14, .02);
  },
  busstop(c, b) {
    c.flat('pave', 0, .006, 0, 1, 1);
    c.box('glass', 'metal_d', 0, 0, -.25, .8, .45, .04); c.box('metal_d', 'metal_d', 0, .45, -.1, .9, .03, .35);
    for (const x of [-.4, .4]) c.box('metal_d', null, x, 0, -.1, .03, .45, .03);
    c.box('wood', 'wood', 0, .12, -.18, .6, .03, .1);
    c.cyl('metal_d', .45, 0, .3, .015, .6, 6); c.box('sign_b', 'sign_b', .45, .55, .3, .16, .16, .02);
  },
  metro(c, b) {
    c.flat('pave', 0, .005, 0, 2, 2);
    c.box('of_glassB', 'metal', 0, 0, -.2, 1.2, .45, .8); c.box('metal_d', 'metal_d', 0, .45, -.2, 1.4, .05, 1);
    c.box('black', 'black', 0, -.2, .45, .7, .21, .5);
    c.cyl('metal_d', .75, 0, .75, .02, .9, 6); c.box('sign_r', 'sign_r', .75, .95, .75, .26, .26, .04); c.box('white', 'white', .75, .95, .772, .14, .14, .005);
    c.tree(-.75, .7, .7, .3);
  },
  stadium(c, b) {
    c.flat('lot', 0, .004, 0, b.w, b.d);
    const w = b.w - .4, d = b.d - .4;
    c.flatUV('pitch', 0, .02, 0, w * .62, d * .55);
    // tribünler
    c.box('concrete', 'concrete_d', 0, 0, -d / 2 + .3, w, .5, .5); c.box('concrete', 'concrete_d', 0, 0, d / 2 - .3, w, .5, .5);
    c.box('concrete', 'concrete_d', -w / 2 + .3, 0, 0, .5, .5, d - 1); c.box('concrete', 'concrete_d', w / 2 - .3, 0, 0, .5, .5, d - 1);
    c.box('red', 'red', 0, .5, -d / 2 + .3, w, .02, .5); c.box('red', 'red', 0, .5, d / 2 - .3, w, .02, .5);
    for (const [x, z] of [[-w / 2, -d / 2], [w / 2, -d / 2], [-w / 2, d / 2], [w / 2, d / 2]]) { c.cyl('metal', x, 0, z, .03, 1.6, 6); c.box('lamp', 'lamp', x, 1.6, z, .2, .1, .2); }
  },
};
function school(c, b, fl, field, wing) {
  c.flat('pave', 0, .004, 0, b.w, b.d);
  const h = fl * FH;
  c.box('school', 'gravel', -b.w * .15, 0, -b.d / 2 + .45, b.w * .65, h, .7);
  if (wing) c.box('school', 'gravel', b.w / 2 - .4, 0, -b.d * .1, .55, h, b.d * .6);
  c.flatUV(field, -b.w * .12, .008, b.d / 2 - .55, Math.min(1.6, b.w * .55), .8);
  c.cyl('white', -b.w / 2 + .2, 0, b.d / 2 - .2, .012, .9, 6);
  c.box('flag', 'flag', -b.w / 2 + .32, .7, b.d / 2 - .2, .22, .15, .005);
  c.box('white', 'white', -b.w * .15, h - .05, -b.d / 2 + .81, .4, .12, .01);
  c.tree(b.w / 2 - .2, b.d / 2 - .2, .8, .5);
}
function park(c, b, big) {
  const W = b.w, D = b.d;
  c.flat('grass', 0, .004, 0, W, D);
  c.flat('pave', 0, .006, 0, .3, D); c.flat('pave', 0, .007, 0, W, .3);
  if (big) {
    c.cyl('pave', 0, 0, 0, .9, .01, 24); c.cyl('pool', 1.2, .0, -1.2, .7, .02, 20);
    for (let k = 0; k < 14; k++) { const a = hash(b.id + k) * 6.28, r = 1.2 + hash(b.id * 3 + k) * .9; const x = Math.cos(a) * r, z = Math.sin(a) * r; if (Math.abs(x) < .3 || Math.abs(z) < .3) continue; c.tree(x, z, .9 + hash(k) * .4, hash(k + 9)); }
    c.box('wood', 'wood', -.6, .05, .4, .4, .04, .1); c.box('wood', 'wood', .6, .05, -.4, .4, .04, .1);
  } else {
    c.cyl('concrete', 0, 0, 0, .25, .06, 16); c.cyl('pool', 0, .01, 0, .2, .055, 16);
    for (const [x, z] of [[-.55, -.55], [.55, -.55], [-.55, .55], [.6, .6]]) c.tree(x, z, .9, (x + z + 2) / 4);
    c.box('wood', 'wood', -.45, .05, .25, .3, .04, .08);
    c.box('flowerR', 'flowerR', .5, 0, .25, .3, .04, .12); c.box('flowerY', 'flowerY', -.5, 0, -.25, .3, .04, .12);
  }
}

export function buildModel(b, out) {
  const c = new Ctx(b.x, b.z, b.a, out);
  if (b.svc) SVCM[b.svc](c, b);
  else ({ r1, r2, c1, c2, o: off, i: ind })[b.zt](c, b);
  return c;
}
