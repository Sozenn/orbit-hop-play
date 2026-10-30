// Prosedürel dokular ve malzemeler
import * as THREE from '../lib/three.module.js';

let rs = 9137; const rr = () => { rs = (Math.imul(rs, 1664525) + 1013904223) >>> 0; return rs / 4294967296; };
export function canvasTex(w, h, draw, { srgb = true, repeat = true } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}
function noise(g, w, h, n, cols, s = 2) { for (let k = 0; k < n; k++) { g.fillStyle = cols[(rr() * cols.length) | 0]; g.fillRect(rr() * w, rr() * h, s, s); } }

export const nightMats = [];
export const MAT = {};   // key -> { m, us, vs }  (us/vs: dokunun dünya birimi cinsinden boyu)

function std(key, opts, us = 1, vs = 1) { MAT[key] = { m: new THREE.MeshStandardMaterial(opts), us, vs }; return MAT[key].m; }
function col(key, color, o = {}) { return std(key, Object.assign({ color, roughness: .85 }, o)); }

// 4 bölme x 4 kat cephe dokusu
function facade(key, o) {
  const BW = 64, FHp = 64, cols = 4, rows = o.rows || 4, W = BW * cols, H = FHp * rows;
  const lit = [];
  const map = canvasTex(W, H, g => {
    g.fillStyle = o.wall; g.fillRect(0, 0, W, H);
    if (o.brick) { g.strokeStyle = 'rgba(70,25,10,.28)'; g.lineWidth = 1; for (let y = 0; y < H; y += 6) { g.beginPath(); g.moveTo(0, y + .5); g.lineTo(W, y + .5); g.stroke(); for (let x = (y / 6 % 2) * 7; x < W; x += 14) { g.beginPath(); g.moveTo(x + .5, y); g.lineTo(x + .5, y + 6); g.stroke(); } } }
    else if (o.metal) { for (let x = 0; x < W; x += 6) { g.fillStyle = x % 12 ? 'rgba(0,0,0,.10)' : 'rgba(255,255,255,.10)'; g.fillRect(x, 0, 3, H); } }
    else noise(g, W, H, W * H / 25, ['rgba(0,0,0,.04)', 'rgba(255,255,255,.05)'], 2);
    for (let r = 0; r < rows; r++) {
      const y0 = r * FHp;
      if (o.ledge) { g.fillStyle = o.ledge; g.fillRect(0, y0 + FHp - 5, W, 5); }
      if (o.glass) {
        const gr = g.createLinearGradient(0, y0, 0, y0 + FHp); gr.addColorStop(0, o.glass[0]); gr.addColorStop(1, o.glass[1]);
        g.fillStyle = gr; g.fillRect(0, y0 + 4, W, FHp - 8);
        g.fillStyle = o.mullion || 'rgba(30,40,50,.6)'; for (let c = 0; c <= cols; c++) g.fillRect(c * BW - 1, y0, 3, FHp);
        g.fillRect(0, y0 + FHp - 6, W, 6);
        for (let c = 0; c < cols; c++) if (rr() < (o.lit ?? .6)) lit.push([c * BW + 2, y0 + 5, BW - 4, FHp - 12, .6 + rr() * .4]);
        continue;
      }
      if (o.ribbon) {
        g.fillStyle = '#2c3e50'; g.fillRect(0, y0 + 16, W, 30);
        const gr = g.createLinearGradient(0, y0 + 16, 0, y0 + 46); gr.addColorStop(0, '#9fc3dd'); gr.addColorStop(1, '#3d5e7a'); g.fillStyle = gr; g.fillRect(0, y0 + 18, W, 26);
        g.fillStyle = 'rgba(40,50,60,.7)'; for (let c = 0; c < cols * 2; c++) g.fillRect(c * BW / 2, y0 + 16, 2, 30);
        for (let c = 0; c < cols; c++) if (rr() < (o.lit ?? .6)) lit.push([c * BW, y0 + 18, BW, 26, .6 + rr() * .4]);
        continue;
      }
      for (let c = 0; c < cols; c++) {
        const ww = o.ww || 26, wh = o.wh || 34, wx = c * BW + (BW - ww) / 2, wy = y0 + (o.wy || 14);
        if (o.door && r === rows - 1 && c === 1) { g.fillStyle = o.door; g.fillRect(c * BW + 20, y0 + 18, 24, FHp - 18); g.fillStyle = '#d4af37'; g.fillRect(c * BW + 38, y0 + 40, 3, 3); continue; }
        g.fillStyle = o.frame || '#f3f0ea'; g.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);
        const gr = g.createLinearGradient(wx, wy, wx + ww, wy + wh); gr.addColorStop(0, '#a9cbe2'); gr.addColorStop(1, '#3a5a74');
        g.fillStyle = gr; g.fillRect(wx, wy, ww, wh);
        g.fillStyle = 'rgba(255,255,255,.4)'; g.fillRect(wx + ww / 2 - 1, wy, 2, wh); g.fillRect(wx, wy + wh / 2 - 1, ww, 2);
        if (o.shutter) { g.fillStyle = o.shutter; g.fillRect(wx - 11, wy - 3, 7, wh + 6); g.fillRect(wx + ww + 4, wy - 3, 7, wh + 6); }
        if (o.balcony) { g.fillStyle = o.balcony; g.fillRect(c * BW + 4, wy + wh - 4, BW - 8, 12); g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(c * BW + 4, wy + wh + 8, BW - 8, 2); }
        if (o.sill) { g.fillStyle = o.sill; g.fillRect(wx - 4, wy + wh + 2, ww + 8, 4); }
        if (rr() < (o.lit ?? .55)) lit.push([wx, wy, ww, wh, .55 + rr() * .45]);
      }
    }
  });
  const em = canvasTex(W, H, g => {
    g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
    for (const [x, y, w, h, a] of lit) { g.fillStyle = `rgba(255,${(195 + a * 40) | 0},${(120 + a * 30) | 0},${a})`; g.fillRect(x, y, w, h); }
  });
  const m = std(key, { map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: o.glass ? .2 : .9, metalness: o.glass ? .45 : 0 }, (o.bay || .5) * cols, (o.fh || .38) * rows);
  nightMats.push(m);
  return m;
}
function shopFront(key, sign) {
  const W = 256, H = 64, lit = [];
  const map = canvasTex(W, H, g => {
    g.fillStyle = '#d8d2c6'; g.fillRect(0, 0, W, H);
    g.fillStyle = sign; g.fillRect(0, 0, W, 14);
    g.fillStyle = 'rgba(255,255,255,.85)'; for (let x = 10; x < W; x += 64) g.fillRect(x, 4, 34, 6);
    g.fillStyle = '#2a3846'; g.fillRect(0, 16, W, 48);
    const gr = g.createLinearGradient(0, 18, 0, 64); gr.addColorStop(0, 'rgba(190,225,255,.75)'); gr.addColorStop(1, 'rgba(80,110,140,.5)');
    g.fillStyle = gr; for (let x = 0; x < W; x += 64) { g.fillRect(x + 3, 18, 58, 46); }
    g.fillStyle = '#c9c9c9'; for (let x = 0; x < W; x += 64) g.fillRect(x, 16, 3, 48);
    for (let x = 0; x < W; x += 64) lit.push([x + 3, 18, 58, 46]);
  });
  const em = canvasTex(W, H, g => { g.fillStyle = '#000'; g.fillRect(0, 0, W, H); g.fillStyle = sign; g.fillRect(0, 0, W, 14); g.fillStyle = '#ffe6b0'; for (const [x, y, w, h] of lit) g.fillRect(x, y, w, h); });
  const m = std(key, { map, emissiveMap: em, emissive: 0xffffff, emissiveIntensity: 0, roughness: .5 }, 2, .42);
  nightMats.push(m);
}

export function initMaterials() {
  // konut cepheleri
  facade('h_cream', { wall: '#efe4ca', shutter: '#4c7a55', bay: .42, fh: .36, sill: '#fff' });
  facade('h_white', { wall: '#f5f2ec', shutter: '#2f5a7c', bay: .42, fh: .36, sill: '#ddd' });
  facade('h_peach', { wall: '#efcfb4', frame: '#fff', bay: .42, fh: .36, sill: '#fff' });
  facade('h_blue', { wall: '#d6e2ea', shutter: '#5a4032', bay: .42, fh: .36 });
  facade('h_sand', { wall: '#e2cfa4', frame: '#f7f2e6', bay: .42, fh: .36, sill: '#fff' });
  facade('h_brick', { wall: '#b5654a', brick: true, frame: '#f3efe6', bay: .42, fh: .36 });
  facade('h_modern', { wall: '#f4f4f2', glass: ['#7fa8c8', '#2a4a66'], mullion: 'rgba(40,40,40,.8)', bay: .7, fh: .38, lit: .5 });
  // apartman
  facade('ap_beige', { wall: '#ddd0b8', ledge: 'rgba(0,0,0,.12)', balcony: '#f2efe8', bay: .5, fh: .36, ww: 30 });
  facade('ap_grey', { wall: '#c3c6c8', ledge: 'rgba(0,0,0,.12)', balcony: '#e7e7e4', bay: .5, fh: .36, ww: 30 });
  facade('ap_white', { wall: '#eeeceb', ledge: 'rgba(0,0,0,.1)', balcony: '#9aa4ab', bay: .5, fh: .36, ww: 30 });
  facade('ap_pink', { wall: '#e8c8c0', ledge: 'rgba(0,0,0,.1)', sill: '#fff', bay: .5, fh: .36 });
  facade('ap_brick', { wall: '#a9583e', brick: true, frame: '#ece6da', ledge: 'rgba(0,0,0,.15)', bay: .5, fh: .36 });
  facade('ap_modern', { wall: '#e6e8ea', glass: ['#6f93b0', '#273d52'], mullion: '#f0f0f0', bay: .5, fh: .36, lit: .55 });
  // ofis
  facade('of_glassB', { glass: ['#8fbbe0', '#2f5a85'], wall: '#5a7ea0', bay: .5, fh: .38 });
  facade('of_glassG', { glass: ['#9fd6c8', '#2e6a62'], wall: '#4f8a80', bay: .5, fh: .38 });
  facade('of_glassD', { glass: ['#5e6b78', '#1d252e'], wall: '#2b333b', mullion: 'rgba(160,170,180,.5)', bay: .5, fh: .38, lit: .7 });
  facade('of_glassGold', { glass: ['#e0c88a', '#7a5a2a'], wall: '#8a7040', mullion: 'rgba(60,40,10,.6)', bay: .5, fh: .38 });
  facade('of_ribbon', { wall: '#d9d6cf', ribbon: true, bay: .5, fh: .38 });
  facade('of_ribbonDark', { wall: '#55606b', ribbon: true, bay: .5, fh: .38 });
  facade('of_stone', { wall: '#cbbf9f', ww: 20, wh: 40, wy: 10, frame: '#a99a76', bay: .45, fh: .4 });
  // sanayi
  facade('ind_grey', { wall: '#a3a9ae', metal: true, ww: 40, wh: 10, wy: 6, frame: '#6a7075', bay: .6, fh: .5, lit: .4 });
  facade('ind_blue', { wall: '#6f8fa8', metal: true, ww: 40, wh: 10, wy: 6, frame: '#4a5f70', bay: .6, fh: .5, lit: .4 });
  facade('ind_red', { wall: '#a8584a', metal: true, ww: 40, wh: 10, wy: 6, frame: '#6a3a32', bay: .6, fh: .5, lit: .4 });
  facade('ind_brick', { wall: '#9c5a40', brick: true, ww: 18, wh: 34, wy: 18, frame: '#5a3a2a', bay: .5, fh: .5, lit: .4 });
  // kamu
  facade('hosp', { wall: '#f4f6f7', ribbon: true, bay: .5, fh: .38 });
  facade('school', { wall: '#c8714a', brick: true, frame: '#f2efe8', ledge: 'rgba(255,255,255,.5)', bay: .5, fh: .38 });
  facade('civic', { wall: '#e3d8bd', ww: 18, wh: 42, wy: 10, frame: '#c4b48e', bay: .45, fh: .44 });
  facade('police', { wall: '#e9edf0', ribbon: true, bay: .5, fh: .38 });
  facade('fire', { wall: '#b33a2c', brick: true, frame: '#f2efe8', bay: .5, fh: .4 });
  facade('plant', { wall: '#b4b9be', metal: true, ww: 44, wh: 12, wy: 8, frame: '#7d848a', bay: .6, fh: .5 });
  for (const [k, c] of [['red', '#c0392b'], ['blue', '#2e86de'], ['green', '#27ae60'], ['orange', '#e67e22'], ['purple', '#8e44ad'], ['teal', '#16a085']]) shopFront('sf_' + k, c);

  // düz renkler
  col('roof_red', '#b4483a', { flatShading: true, roughness: .8 }); col('roof_brown', '#7e4b36', { flatShading: true }); col('roof_grey', '#5d646b', { flatShading: true }); col('roof_dark', '#3d4248', { flatShading: true }); col('roof_green', '#4f6e57', { flatShading: true });
  std('gravel', { map: canvasTex(128, 128, g => { g.fillStyle = '#8f9396'; g.fillRect(0, 0, 128, 128); noise(g, 128, 128, 2400, ['#7e8285', '#a3a7aa', '#6f7376'], 2); }), roughness: 1 }, 2, 2);
  col('concrete', '#b9b8b3'); col('concrete_d', '#8f918f'); col('metal', '#aeb5bb', { metalness: .6, roughness: .4 }); col('metal_d', '#5e656c', { metalness: .5, roughness: .5 });
  col('white', '#f1f1ee'); col('glass', '#253545', { roughness: .15, metalness: .6 }); col('black', '#22262a');
  col('red', '#c62f2f'); col('blue', '#2b6cb8'); col('yellow', '#e8b923'); col('greenc', '#2f8f4a'); col('orange', '#e07b24'); col('wood', '#8a5a35'); col('brown', '#6b4a2e');
  std('grass', { map: canvasTex(128, 128, g => { g.fillStyle = '#76b452'; g.fillRect(0, 0, 128, 128); noise(g, 128, 128, 3000, ['#6aa548', '#84c05e', '#70ad4e'], 2); }), roughness: 1 }, 2, 2);
  std('lawn', { map: canvasTex(128, 128, g => { for (let y = 0; y < 128; y += 16) { g.fillStyle = (y / 16) % 2 ? '#7cbb55' : '#86c560'; g.fillRect(0, y, 128, 16); } }), roughness: 1 }, 2, 2);
  std('pave', { map: canvasTex(128, 128, g => { g.fillStyle = '#cfc8b8'; g.fillRect(0, 0, 128, 128); g.strokeStyle = 'rgba(0,0,0,.12)'; for (let k = 0; k <= 128; k += 16) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, 128); g.stroke(); g.beginPath(); g.moveTo(0, k); g.lineTo(128, k); g.stroke(); } }), roughness: .95 }, 1, 1);
  std('lot', { map: canvasTex(128, 128, g => { g.fillStyle = '#4a4d52'; g.fillRect(0, 0, 128, 128); noise(g, 128, 128, 1500, ['#55585d', '#404348'], 2); g.fillStyle = '#e8e8e8'; for (let x = 4; x < 128; x += 32) g.fillRect(x, 0, 3, 44); for (let x = 4; x < 128; x += 32) g.fillRect(x, 84, 3, 44); }), roughness: .9 }, 2, 2);
  std('court', { map: canvasTex(128, 128, g => { g.fillStyle = '#c0573b'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#fff'; g.lineWidth = 3; g.strokeRect(10, 10, 108, 108); g.beginPath(); g.moveTo(10, 64); g.lineTo(118, 64); g.stroke(); g.beginPath(); g.arc(64, 64, 16, 0, 7); g.stroke(); }), roughness: .9 }, 1, 1);
  std('pitch', { map: canvasTex(256, 160, g => { for (let x = 0; x < 256; x += 32) { g.fillStyle = (x / 32) % 2 ? '#4f9a3f' : '#59a648'; g.fillRect(x, 0, 32, 160); } g.strokeStyle = '#fff'; g.lineWidth = 3; g.strokeRect(8, 8, 240, 144); g.beginPath(); g.moveTo(128, 8); g.lineTo(128, 152); g.stroke(); g.beginPath(); g.arc(128, 80, 22, 0, 7); g.stroke(); g.strokeRect(8, 50, 30, 60); g.strokeRect(218, 50, 30, 60); }, { repeat: false }), roughness: 1 }, 1, 1);
  std('track', { color: '#b5523a', roughness: 1 });
  std('solar', { map: canvasTex(128, 128, g => { g.fillStyle = '#1b2c4a'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#8aa0c0'; g.lineWidth = 1.5; for (let k = 0; k <= 128; k += 16) { g.beginPath(); g.moveTo(k, 0); g.lineTo(k, 128); g.stroke(); g.beginPath(); g.moveTo(0, k); g.lineTo(128, k); g.stroke(); } }), roughness: .25, metalness: .5 }, 1, 1);
  std('stripe', { map: canvasTex(32, 128, g => { for (let k = 0; k < 8; k++) { g.fillStyle = k % 2 ? '#f2f2f2' : '#c0392b'; g.fillRect(0, k * 16, 32, 16); } }), roughness: .8 }, 1, 2.4);
  std('water', { color: '#3e8ec4', roughness: .1, metalness: .2 });
  col('pool', '#4fc3e8', { roughness: .1 });
  col('leaf1', '#4f8f3a', { flatShading: true }); col('leaf2', '#3f7a35', { flatShading: true }); col('leaf3', '#6aa040', { flatShading: true }); col('hedge', '#3d6e2f', { flatShading: true });
  col('flowerR', '#d6455a'); col('flowerY', '#f1c40f');
  std('helipad', { map: canvasTex(128, 128, g => { g.fillStyle = '#3f4448'; g.fillRect(0, 0, 128, 128); g.strokeStyle = '#f5d33b'; g.lineWidth = 5; g.beginPath(); g.arc(64, 64, 50, 0, 7); g.stroke(); g.fillStyle = '#fff'; g.font = 'bold 64px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('H', 64, 68); }, { repeat: false }), roughness: .9 }, 1, 1);
  std('cross', { map: canvasTex(64, 64, g => { g.fillStyle = '#fff'; g.fillRect(0, 0, 64, 64); g.fillStyle = '#e53935'; g.fillRect(24, 8, 16, 48); g.fillRect(8, 24, 48, 16); }, { repeat: false }), emissiveMap: canvasTex(64, 64, g => { g.fillStyle = '#000'; g.fillRect(0, 0, 64, 64); g.fillStyle = '#e53935'; g.fillRect(24, 8, 16, 48); g.fillRect(8, 24, 48, 16); }, { repeat: false }), emissive: 0xffffff, emissiveIntensity: .3 }, 1, 1);
  nightMats.push(MAT.cross.m);
  std('flag', { map: canvasTex(96, 64, g => { g.fillStyle = '#e30a17'; g.fillRect(0, 0, 96, 64); g.fillStyle = '#fff'; g.beginPath(); g.arc(36, 32, 16, 0, 7); g.fill(); g.fillStyle = '#e30a17'; g.beginPath(); g.arc(40, 32, 13, 0, 7); g.fill(); g.fillStyle = '#fff'; g.beginPath(); for (let k = 0; k < 10; k++) { const a = k * Math.PI / 5, r = k % 2 ? 3.4 : 8; g.lineTo(57 + Math.cos(a) * r, 32 + Math.sin(a) * r); } g.fill(); }, { repeat: false }), side: THREE.DoubleSide }, 1, 1);
  for (const [k, c] of [['sign_r', '#d63031'], ['sign_b', '#0984e3'], ['sign_g', '#00b894'], ['sign_y', '#fdcb6e'], ['sign_p', '#6c5ce7']]) { const m = col(k, c, { emissive: c, emissiveIntensity: 0 }); nightMats.push(m); }
  for (const g of ['A', 'B']) { col('tl' + g + '_r', '#ff3b30', { emissive: '#ff3b30', emissiveIntensity: .9 }); col('tl' + g + '_g', '#34c759', { emissive: '#34c759', emissiveIntensity: .9 }); }
  col('lamp', '#fff3c4', { emissive: '#ffd27a', emissiveIntensity: 0 }); nightMats.push(MAT.lamp.m);
}

// Yol dokuları: genişlik boyunca u, uzunluk boyunca v (kare doku = w x w)
export function roadTexture(type) {
  const S2 = 256;
  return canvasTex(S2, S2, g => {
    const sw = type === 'dirt' ? 0 : type === 'highway' ? 0 : type === 'avenue' ? 26 : type === 'oneway' ? 48 : 40;
    if (type === 'dirt') {
      g.fillStyle = '#9b7b55'; g.fillRect(0, 0, S2, S2); noise(g, S2, S2, 4000, ['#8a6c48', '#a98a62', '#7d6142', '#b09068'], 3);
      g.fillStyle = 'rgba(70,50,30,.25)'; g.fillRect(56, 0, 28, S2); g.fillRect(172, 0, 28, S2);
      g.fillStyle = 'rgba(110,150,70,.55)'; for (let k = 0; k < 160; k++) { const y = rr() * S2; g.fillRect(rr() < .5 ? rr() * 18 : S2 - rr() * 18, y, 4, 6); }
      return;
    }
    g.fillStyle = '#bdb8ad'; g.fillRect(0, 0, S2, S2);
    if (sw) { g.strokeStyle = 'rgba(0,0,0,.1)'; for (let y = 0; y < S2; y += 20) { g.beginPath(); g.moveTo(0, y); g.lineTo(sw, y); g.moveTo(S2 - sw, y); g.lineTo(S2, y); g.stroke(); } }
    g.fillStyle = '#85827b'; g.fillRect(sw - 3, 0, S2 - 2 * sw + 6, S2);
    g.fillStyle = '#3e4147'; g.fillRect(sw, 0, S2 - 2 * sw, S2);
    g.save(); g.beginPath(); g.rect(sw, 0, S2 - 2 * sw, S2); g.clip(); noise(g, S2, S2, 3000, ['#46494f', '#36393e', '#4c4f55', '#303338'], 2); g.restore();
    const C = S2 / 2;
    if (type === 'oneway') {
      g.fillStyle = '#f2f2ee'; g.fillRect(sw + 6, 0, 3, S2); g.fillRect(S2 - sw - 9, 0, 3, S2);
      // yön oku (v artınca a->b yönü; tuvalde yukarı = +v)
      g.beginPath(); g.moveTo(C, 70); g.lineTo(C - 22, 110); g.lineTo(C - 8, 110); g.lineTo(C - 8, 170); g.lineTo(C + 8, 170); g.lineTo(C + 8, 110); g.lineTo(C + 22, 110); g.closePath(); g.fill();
    } else if (type === 'street') {
      g.fillStyle = '#f2f2ee'; for (let y = 8; y < S2; y += 64) g.fillRect(C - 3, y, 6, 34); g.fillRect(sw + 8, 0, 3, S2); g.fillRect(S2 - sw - 11, 0, 3, S2);
    } else if (type === 'avenue') {
      g.fillStyle = '#6f9e4a'; g.fillRect(C - 9, 0, 18, S2); g.fillStyle = '#d9d5c9'; g.fillRect(C - 11, 0, 2, S2); g.fillRect(C + 9, 0, 2, S2);
      g.fillStyle = '#f2f2ee'; const lw = (S2 - 2 * sw - 22) / 4;
      for (const x of [sw + lw, S2 - sw - lw]) for (let y = 8; y < S2; y += 64) g.fillRect(x - 2, y, 4, 34);
    } else if (type === 'highway') {
      g.fillStyle = '#f2f2ee'; g.fillRect(14, 0, 4, S2); g.fillRect(S2 - 18, 0, 4, S2);
      g.fillStyle = '#9a9a96'; g.fillRect(C - 6, 0, 12, S2);
      g.fillStyle = '#f2f2ee'; for (const x of [(14 + C - 6) / 2, (S2 - 18 + C + 6) / 2]) for (let y = 8; y < S2; y += 64) g.fillRect(x - 2, y, 4, 34);
    }
  });
}
export const grassTexture = () => canvasTex(512, 512, (g, w, h) => {
  g.fillStyle = '#69a347'; g.fillRect(0, 0, w, h);
  for (let k = 0; k < 40; k++) { const x = rr() * w, y = rr() * h, r = 20 + rr() * 60; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, rr() < .5 ? 'rgba(130,180,80,.2)' : 'rgba(80,130,50,.18)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2); }
  noise(g, w, h, 5000, ['#64a046', '#70ab4d', '#6aa548', '#5f9a43'], 2);
  noise(g, w, h, 600, ['#7fb85a', '#5a9440'], 3);
});
export const softTexture = () => canvasTex(64, 64, g => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.5, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); }, { repeat: false });
export function labelTexture(text, bg = 'rgba(20,30,40,.85)', fg = '#fff') {
  return canvasTex(256, 64, g => { g.fillStyle = bg; g.beginPath(); g.roundRect(4, 4, 248, 56, 16); g.fill(); g.fillStyle = fg; g.font = 'bold 28px system-ui,sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 128, 34); }, { repeat: false });
}
