// Arayüz, girdi ve oyun döngüsü
import { ROADS, ROAD_ORDER, ZONES, ZONE_ORDER, SVC, MILES, CATS, TILE, TILES, WH, LEVEL_REQ } from './data.js';
import * as Wd from './world.js';
import { R, planRoad, commitRoad, planSvc, commitSvc, paintZone, nearestSeg, segGeo, deleteSeg, upgradeSeg, upgradeCost, removeBld, tileOf, tileBuyable, buyTile, tileCost, clamp } from './world.js';
import * as G from './gfx.js';
import { cam, updCam, groundAt } from './gfx.js';

const $ = id => document.getElementById(id);
const fmt = n => Math.floor(n).toLocaleString('tr-TR');
const S = () => Wd.S;
document.body.prepend(G.renderer.domElement);

// ---------- ayarlar ----------
const SAVE_KEY = 'minikMetropol_v3', OPT_KEY = 'minikMetropol_opt3';
let OPT = { sound: true, gfx: 'high' };
try { Object.assign(OPT, JSON.parse(localStorage.getItem(OPT_KEY) || '{}')); } catch (e) { }
const saveOpt = () => { try { localStorage.setItem(OPT_KEY, JSON.stringify(OPT)); } catch (e) { } };
function save() { if (!S() || isPreview) return; try { localStorage.setItem(SAVE_KEY, Wd.serialize()); } catch (e) { } }
function hasSave() { try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; } }

// ---------- ses ----------
let AC = null;
function initAudio() { if (AC) { if (AC.state === 'suspended') AC.resume(); return; } try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } }
function tone(f, d, type = 'sine', v = .1, delay = 0) { if (!AC || !OPT.sound) return; const t0 = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.setValueAtTime(f, t0); g.gain.setValueAtTime(v, t0); g.gain.exponentialRampToValueAtTime(.001, t0 + d); o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + d + .02); }
function sfx(k) {
  if (!AC || !OPT.sound) return;
  if (k === 'build') { tone(520, .08, 'triangle'); tone(780, .1, 'triangle', .08, .06); }
  else if (k === 'road') { tone(300, .07, 'square', .03); tone(420, .07, 'square', .03, .05); }
  else if (k === 'paint') tone(880, .03, 'sine', .025);
  else if (k === 'bull') tone(110, .22, 'sawtooth', .06);
  else if (k === 'err') tone(200, .15, 'square', .05);
  else if (k === 'ok') { tone(660, .1); tone(880, .12, 'sine', .1, .08); }
  else if (k === 'win') [523, 659, 784, 1047].forEach((f, j) => tone(f, .2, 'triangle', .1, j * .1));
  else if (k === 'tap') tone(700, .03, 'sine', .04);
}

// ---------- oyun durumu ----------
let isPreview = true, running = false, paused = false, speed = 1;
let cat = 'pan', item = null, brush = 1.6;
const lastItem = { road: 'street', zone: 'r1', util: 'wind', svc: 'clinic', park: 'park' };

// ---------- HUD ----------
let toastT = 0;
function toast(msg, ms = 2000) { const t = $('toast'); t.innerHTML = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), ms); }
function floatAt(x, z, txt, y = 1) { const p = G.project(x, y, z); if (!p) return; const d = document.createElement('div'); d.className = 'fl'; d.textContent = txt; d.style.left = p[0] + 'px'; d.style.top = p[1] + 'px'; $('floaters').appendChild(d); setTimeout(() => d.remove(), 1200); }
const setBar = (el, v) => { const h = Math.abs(v) * 50; el.style.height = h + '%'; el.style.bottom = v >= 0 ? '50%' : (50 - h) + '%'; };
function clock() { const m = (S().tk % 144) * 10; return String((m / 60) | 0).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
function updHud() {
  const st = R.st, s = S(); if (!s) return;
  const hr = (s.tk % 144) / 6;
  $('cname').textContent = MILES[s.ms].title; $('cday').textContent = `${hr >= 6.5 && hr < 19 ? '☀️' : '🌙'} Gün ${Math.floor(s.tk / 144) + 1} · ${clock()}`;
  const m = $('sMoney'); m.textContent = fmt(s.money); m.className = s.money < 0 ? 'neg' : '';
  const ph = st.net * 6, n = $('sNet'); n.textContent = (ph >= 0 ? '+' : '') + fmt(ph) + '/sa'; n.className = ph >= 0 ? 'pos' : 'neg';
  $('sPop').textContent = fmt(st.pop); $('sHap').textContent = st.pop ? st.hap + '%' : '-';
  const p = $('sPow'); p.textContent = st.eDem + '/' + st.eSup; p.className = st.eDem > st.eSup ? 'neg' : '';
  const w = $('sWat'); w.textContent = st.wDem + '/' + st.wSup; w.className = st.wDem > st.wSup ? 'neg' : '';
  setBar($('dR'), st.Rd); setBar($('dC'), st.Cd); setBar($('dO'), st.Od); setBar($('dI'), st.Id);
  if (selObj) showInfo(selObj, true);
  if ($('statsPanel').style.display === 'block') showStats();
}

// ---------- öğretici ----------
const TUT = [
  { t: '1/6 · <b>🛣️ Yol</b> → <b>Cadde</b> seç. Otobanın ucundan başlayıp parmağını sürükleyerek şehre yol çek.', ok: () => [...R.segs.values()].some(s => s.t !== 'highway' && R.conn.has(s.id)) },
  { t: '2/6 · <b>🏘️ Bölge</b> → <b>🏡 Konut</b> seç, yolların iki yanını boya.', ok: () => R.st.cntZ.r >= 12 },
  { t: '3/6 · <b>⚡ Elektrik·Su</b> → <b>🌬️ Rüzgâr türbini</b> kur (bir yolun yanına).', ok: () => R.st.eSup > 0 },
  { t: '4/6 · Aynı yerden <b>💧 Su kulesi</b> kur.', ok: () => R.st.wSup > 0 },
  { t: '5/6 · İş yeri lazım: <b>🏪 Ticaret</b> ve <b>🏭 Sanayi</b> boya. Sanayiyi evlerden uzak tut.', ok: () => R.st.cntZ.c > 0 && R.st.cntZ.i > 0 },
  { t: '6/6 · <b>🏥 Hizmet</b> → <b>🎒 İlkokul</b> ve <b>🩺 Sağlık ocağı</b> kur. Evler bunlarla büyür.', ok: () => (R.st.svcCnt.ilk || 0) > 0 && (R.st.svcCnt.clinic || 0) > 0 },
];
function checkTut() {
  const s = S(); if (!s || isPreview) { $('hint').style.display = 'none'; return; }
  while (s.tut < TUT.length && TUT[s.tut].ok()) { s.tut++; sfx('ok'); }
  const h = $('hint');
  if (s.tut < TUT.length) { h.style.display = ''; h.innerHTML = '💡 ' + TUT[s.tut].t; } else h.style.display = 'none';
}

// ---------- araç çubukları ----------
function buildCats() {
  const box = $('cats'); box.innerHTML = '';
  for (const c of CATS) {
    const b = document.createElement('button'); b.className = 'cb' + (cat === c.id ? ' sel' : '');
    b.innerHTML = `<span class="ic">${c.i}</span><span class="nm">${c.n}</span>`;
    b.onclick = () => { initAudio(); sfx('tap'); selCat(c.id); };
    box.appendChild(b);
  }
}
function itemsFor(c) {
  const s = S(), ms = s ? s.ms : 0;
  if (c === 'road') return ROAD_ORDER.map(k => ({ id: k, i: ROADS[k].i, n: ROADS[k].n, pr: ROADS[k].cost + '/m', lock: ROADS[k].ms > ms ? ROADS[k].ms : 0, sw: k === 'dirt' ? '#9b7b55' : k === 'highway' ? '#9a9a96' : '#3e4147' }));
  if (c === 'zone') return [...ZONE_ORDER.map(k => ({ id: k, i: ZONES[k].i, n: ZONES[k].n + ' ' + ZONES[k].sub, lock: ZONES[k].ms > ms ? ZONES[k].ms : 0, sw: ZONES[k].c })), { id: 'x', i: '🚫', n: 'Bölgeyi sil', sw: '#fff' }, { id: 'brush', i: brush < 1 ? '•' : brush < 2 ? '●' : '⬤', n: 'Fırça ' + (brush < 1 ? 'küçük' : brush < 2 ? 'orta' : 'büyük') }];
  const cats = { util: ['wind', 'coal', 'solar', 'wtower', 'pump'], svc: ['clinic', 'hosp', 'ilk', 'orta', 'lise', 'uni', 'police', 'fire'], park: ['park', 'play', 'plaza', 'bigpark', 'stadium'] }[c];
  if (cats) return cats.map(k => ({ id: k, i: SVC[k].i, n: SVC[k].n, pr: '💰' + fmt(SVC[k].cost), lock: SVC[k].ms > ms ? SVC[k].ms : 0 }));
  return [];
}
const HINTS = { pan: 'Kaydırmak için sürükle · Bir şeye dokun: bilgi ve yıkma', road: 'Sürükle: yol çiz (kesişince kavşak olur) · Var olan yola dokun: seçili tipe dönüştür', zone: 'Yolun kenarındaki kareleri parmağınla boya', util: 'Bir yolun yanına sürükleyip bırak', svc: 'Bir yolun yanına sürükleyip bırak · Halka etki alanını gösterir', park: 'Bir yolun yanına sürükleyip bırak', land: 'Yeşil araziye dokunup satın al', bull: 'Yıkmak istediğin yola ya da binaya dokun' };
function buildSub() {
  const box = $('sub'); box.innerHTML = '';
  $('subhint').textContent = HINTS[cat] || '';
  for (const it of itemsFor(cat)) {
    const b = document.createElement('button');
    b.className = 'tb' + (item === it.id ? ' sel' : '') + (it.lock ? ' lock' : '');
    b.innerHTML = `${it.sw ? `<span class="sw" style="background:${it.sw}"></span>` : ''}<span class="ic">${it.lock ? '🔒' : it.i}</span><span class="nm">${it.n}</span>${it.lock ? `<span class="pr">${MILES[it.lock].title}</span>` : it.pr ? `<span class="pr">${it.pr}</span>` : ''}`;
    b.onclick = () => {
      initAudio(); sfx('tap');
      if (it.id === 'brush') { brush = brush < 1 ? 1.6 : brush < 2 ? 2.6 : .7; buildSub(); return; }
      if (it.lock) { toast(`🔒 ${it.n}: şehrin <b>${MILES[it.lock].title}</b> olunca açılır`); return; }
      item = it.id; lastItem[cat] = it.id; buildSub();
    };
    box.appendChild(b);
  }
}
function selCat(c) {
  cat = c; item = lastItem[c] || null; hideInfo(); G.clearGhost();
  if (c === 'land' || c === 'bull' || c === 'pan') item = null;
  buildCats(); buildSub();
  G.buildCells(cat === 'zone');
  G.buildTiles(cat === 'land', tileBuyable, tileCost());
}

// ---------- bilgi paneli ----------
let selObj = null;
const yn = v => v ? '✅' : '❌';
const EDU = ['yok', 'ilkokul', 'ortaokul', 'lise', 'üniversite'];
function bldAt(x, z) {
  let best = null;
  for (const b of R.blds.values()) {
    const dx = x - b.x, dz = z - b.z, ca = Math.cos(b.a), sa = Math.sin(b.a);
    const lx = dx * ca - dz * sa, lz = dx * sa + dz * ca;
    if (Math.abs(lx) <= b.w / 2 && Math.abs(lz) <= b.d / 2) { best = b; break; }
  }
  return best;
}
function pickAt(x, z) {
  const b = bldAt(x, z); if (b) return { kind: 'bld', id: b.id, b };
  const ns = nearestSeg(x, z, .3); if (ns && ns.d <= ns.hw + .3) return { kind: 'seg', id: ns.id };
  return null;
}
function showInfo(o, quiet) {
  let h = '';
  if (o.kind === 'bld') {
    const b = R.blds.get(o.id); if (!b) { hideInfo(); return; } o.b = b;
    if (b.svc) {
      const D = SVC[b.svc];
      h += `<h3>${D.i} ${D.n}</h3>`;
      if (D.elec) h += `⚡ ${D.elec} birim elektrik üretir<br>`;
      if (D.water) h += `💧 ${D.water} birim su sağlar<br>`;
      if (D.r) h += `📍 Etki alanı: ${D.r} birim${D.cat === 'edu' ? ' · Eğitim: ' + EDU[D.lvl] : ''}${D.val ? ' · Mutluluk +' + D.val : ''}<br>`;
      h += `🛣️ Yol bağlantısı: ${yn(b.ok)} · Gider: ${fmt(D.up * 6)}/sa`;
      if (!b.ok) h += `<div class="need">Bu binanın önündeki yol otobana bağlı değil.</div>`;
    } else {
      const Z = ZONES[b.zt], k = Z.k, c = b.cov || {};
      h += `<h3>${Z.i} ${Z.n} (${Z.sub}) · Seviye ${b.lvl}/${Z.maxL}</h3>`;
      h += k === 'R' ? `👥 Sakin: ${b.pop}/${b.cap}` : `💼 Çalışan: ${b.pop}/${b.cap}`;
      h += ` · 😊 ${b.hap}%`;
      h += `<div class="chk"><span>🛣️ Otobana bağlı ${yn(b.conn)}</span><span>⚡ Elektrik ${yn(b.pow)}</span><span>💧 Su ${yn(b.wat)}</span><span>🩺 Sağlık ${yn(c.health)}</span><span>🎓 Eğitim: ${EDU[c.edu || 0]}</span><span>🚓 Polis ${yn(c.police)}</span><span>🚒 İtfaiye ${yn(c.fire)}</span><span>🌳 Park ${c.park ? '+' + Math.min(25, c.park) : '—'}</span>${c.poll ? `<span>🏭 Kirlilik -${Math.round(Math.min(35, c.poll * 1.5))}</span>` : ''}${c.noise ? `<span>🔊 Otoban gürültüsü</span>` : ''}</div>`;
      const req = LEVEL_REQ[k][b.lvl + 1];
      if (req) {
        const miss = [];
        if (!b.conn) miss.push('otobana bağlı yol'); if (!b.pow) miss.push('elektrik'); if (!b.wat) miss.push('su');
        if (b.hap < req.hap) miss.push(`mutluluk ${req.hap}%`);
        if ((c.edu || 0) < (req.edu || 0)) miss.push(EDU[req.edu]);
        if (req.health && !c.health) miss.push('sağlık'); if (req.police && !c.police) miss.push('polis'); if (req.fire && !c.fire) miss.push('itfaiye');
        h += `<div class="need">${miss.length ? '⬆️ Büyümesi için: ' + miss.join(', ') : '⬆️ Koşullar tamam, ' + (k === 'R' ? 'dolunca' : 'çalışanlar gelince') + ' büyüyecek'}</div>`;
      } else h += `<div class="need">⭐ En üst seviyede</div>`;
    }
    h += `<div class="acts"><button class="ab red" data-a="del">🧨 Yık</button></div>`;
  } else {
    const s = R.segs.get(o.id); if (!s) { hideInfo(); return; }
    const g = segGeo(o.id), rt = ROADS[s.t];
    h += `<h3>${rt.i} ${rt.n}</h3>Uzunluk: ${(g.L * 8).toFixed(0)} m · ${R.conn.has(o.id) ? '✅ otobana bağlı' : '❌ bağlı değil'}`;
    h += `<div class="acts">`;
    for (const t of ROAD_ORDER) if (t !== s.t) { const lk = ROADS[t].ms > S().ms; h += `<button class="ab" data-a="up:${t}" ${lk ? 'disabled' : ''}>${ROADS[t].i} ${ROADS[t].n}${lk ? ' 🔒' : ' 💰' + fmt(upgradeCost(o.id, t))}</button>`; }
    h += `<button class="ab red" data-a="del">🧨 Yık</button></div>`;
  }
  $('infoBody').innerHTML = h; $('info').style.display = 'block'; selObj = o; G.setSelect(o);
  for (const btn of $('infoBody').querySelectorAll('[data-a]')) btn.onclick = () => { initAudio(); act(o, btn.dataset.a); };
  if (!quiet) sfx('tap');
}
function hideInfo() { $('info').style.display = 'none'; selObj = null; G.setSelect(null); }
function act(o, a) {
  if (a === 'del') { if (o.kind === 'bld') { const b = R.blds.get(o.id); removeBld(o.id); sfx('bull'); if (b) G.dust(b.x, b.z); } else { const r = deleteSeg(o.id); if (r !== true) { toast(r); sfx('err'); return; } sfx('bull'); } hideInfo(); afterChange(); return; }
  if (a.startsWith('up:')) { const r = upgradeSeg(o.id, a.slice(3)); if (r !== true) { toast(r === 'same' ? 'Zaten bu tip' : r); sfx('err'); return; } sfx('road'); hideInfo(); afterChange(); }
}
$('infoX').onclick = hideInfo;

// ---------- istatistik paneli ----------
function showStats() {
  const st = R.st, s = S();
  const row = (a, b) => `<div class="srow"><span>${a}</span><b>${b}</b></div>`;
  let h = `<h3>📊 ${MILES[s.ms].title} istatistikleri</h3>`;
  h += row('👥 Nüfus', fmt(st.pop)) + row('💼 İş yeri / çalışan', fmt(st.jobs) + ' / ' + fmt(st.workers)) + row('📉 İşsizlik', Math.round(st.unemp * 100) + '%');
  h += row('😊 Mutluluk', st.hap + '%') + row('⚡ Elektrik (kullanım/üretim)', st.eDem + ' / ' + st.eSup) + row('💧 Su (kullanım/üretim)', st.wDem + ' / ' + st.wSup);
  h += row('💰 Gelir', '+' + fmt(st.inc * 6) + '/sa') + row('💸 Gider', '-' + fmt(st.exp * 6) + '/sa') + row('🛣️ Yol uzunluğu', fmt(st.roadLen * 8 / 1000 * 10) / 10 + ' km');
  const nx = MILES[s.ms + 1]; if (nx) h += row('🏁 Sonraki unvan', `${nx.title} (${fmt(nx.pop)} kişi)`);
  h += `<div style="margin-top:8px">🧾 Vergi oranı: <b id="taxV">${Math.round(s.tax * 10)}%</b><input type="range" id="taxR" min="6" max="16" value="${Math.round(s.tax * 10)}"><small style="opacity:.75">Yüksek vergi gelir getirir ama mutluluğu düşürür.</small></div>`;
  $('statsBody').innerHTML = h; $('statsPanel').style.display = 'block';
  $('taxR').oninput = e => { s.tax = e.target.value / 10; $('taxV').textContent = e.target.value + '%'; };
}
$('bStats').onclick = () => { initAudio(); sfx('tap'); if ($('statsPanel').style.display === 'block') $('statsPanel').style.display = 'none'; else showStats(); };
$('statsX').onclick = () => { $('statsPanel').style.display = 'none'; };

// ---------- değişiklik sonrası ----------
function afterChange() {
  const d = R.dirty;
  if (d.roads) G.buildRoads();
  if (d.blds) G.syncBuildings();
  if (d.trees) G.buildTrees();
  if (d.cells || d.roads) G.buildCells(cat === 'zone');
  if (d.tiles) G.buildTiles(cat === 'land', tileBuyable, tileCost());
  d.roads = d.blds = d.trees = d.cells = d.tiles = false;
  G.syncIcons(!isPreview);
  for (const e of R.events.splice(0)) {
    if (e.t === 'up') { const b = R.blds.get(e.id); if (b) floatAt(b.x, b.z, '⬆️', 1.5); }
    else if (e.t === 'dust' || e.t === 'gone') G.dust(e.x, e.z);
    else if (e.t === 'ms') { toast('🎉 ' + MILES[e.ms].msg + (MILES[e.ms].bonus ? `<br>+${fmt(MILES[e.ms].bonus)} 💰` : ''), 4500); sfx('win'); buildSub(); }
  }
  checkTut(); updHud();
}

// ---------- girdi ----------
const cv = G.renderer.domElement;
const ptrs = new Map(); let GS = null, lastPaint = 0;
cv.addEventListener('contextmenu', e => e.preventDefault());
function costTag(x, y, txt, ok) { const t = $('costTag'); if (!txt) { t.style.display = 'none'; return; } t.style.display = 'block'; t.style.left = x + 'px'; t.style.top = y + 'px'; t.innerHTML = txt; t.style.color = ok ? '#9ff59f' : '#ff9a8a'; }
function actionDown(x, y) {
  const g = groundAt(x, y); if (!g || !S()) return;
  if (cat === 'zone') { doPaint(g); }
  else if (cat === 'bull') doBull(g, true);
  else if (cat === 'util' || cat === 'svc' || cat === 'park') { GS.plan = planSvc(g[0], g[1], item); G.setGhostBld(GS.plan); costTag(x, y, GS.plan.ok ? '💰 ' + fmt(GS.plan.cost) : GS.plan.msg, GS.plan.ok); }
}
function doPaint(g) {
  if (item === 'brush' || !item) return;
  const n = paintZone(g[0], g[1], brush, item === 'x' ? '' : item);
  G.setBrush(g[0], g[1], brush, item === 'x' ? '#ff6b6b' : ZONES[item].c);
  if (n) { const t = performance.now(); if (t - lastPaint > 80) { sfx('paint'); lastPaint = t; } afterChange(); }
}
function doBull(g, tap) {
  const o = pickAt(g[0], g[1]); if (!o) return;
  if (o.kind === 'bld') { removeBld(o.id); G.dust(o.b.x, o.b.z); sfx('bull'); afterChange(); }
  else if (tap) { const r = deleteSeg(o.id); if (r !== true) { toast(r); sfx('err'); return; } sfx('bull'); afterChange(); }
}
cv.addEventListener('pointerdown', e => {
  initAudio(); if (isPreview || !running) return;
  try { cv.setPointerCapture(e.pointerId); } catch (_) { }
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    const mode = e.button === 2 ? 'rot' : (e.button === 1 || cat === 'pan' || cat === 'land') ? 'pan' : 'act';
    GS = { mode, sx: e.clientX, sy: e.clientY, lx: e.clientX, moved: false, grab: groundAt(e.clientX, e.clientY), start: groundAt(e.clientX, e.clientY) };
    if (mode === 'act' && cat !== 'road') actionDown(e.clientX, e.clientY);
  } else if (ptrs.size === 2) {
    G.clearGhost(); costTag(); const [p1, p2] = [...ptrs.values()];
    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
    GS = { mode: 'pinch', d0: Math.hypot(p1.x - p2.x, p1.y - p2.y) || 1, a0: Math.atan2(p2.y - p1.y, p2.x - p1.x), dist0: cam.dist, yaw0: cam.yaw, grab: groundAt(mx, my) };
  }
});
cv.addEventListener('pointermove', e => {
  if (!ptrs.has(e.pointerId)) { if (e.pointerType === 'mouse' && !isPreview && cat === 'zone' && item && item !== 'brush') { const g = groundAt(e.clientX, e.clientY); if (g) G.setBrush(g[0], g[1], brush, item === 'x' ? '#ff6b6b' : ZONES[item].c); } return; }
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (!GS) return;
  const far = Math.hypot(e.clientX - GS.sx, e.clientY - GS.sy) > 8;
  if (GS.mode === 'pan') { if (far) GS.moved = true; const p = groundAt(e.clientX, e.clientY); if (p && GS.grab) { cam.x += GS.grab[0] - p[0]; cam.z += GS.grab[1] - p[1]; clampCam(); updCam(); } }
  else if (GS.mode === 'rot') { cam.yaw -= (e.clientX - GS.lx) * .008; cam.yawT = cam.yaw; GS.lx = e.clientX; updCam(); }
  else if (GS.mode === 'act') {
    if (far) GS.moved = true;
    const g = groundAt(e.clientX, e.clientY); if (!g) return;
    if (cat === 'road' && GS.moved && GS.start) { GS.plan = planRoad(GS.start[0], GS.start[1], g[0], g[1], item); G.setGhostRoad(GS.plan); costTag(e.clientX, e.clientY, GS.plan.ok ? `${(GS.plan.len * 8).toFixed(0)} m · 💰 ${fmt(GS.plan.cost)}${GS.plan.bridge ? ' · 🌉 köprü' : ''}` : GS.plan.msg, GS.plan.ok); }
    else if (cat === 'zone') doPaint(g);
    else if (cat === 'bull') doBull(g, false);
    else if (cat === 'util' || cat === 'svc' || cat === 'park') { GS.plan = planSvc(g[0], g[1], item); G.setGhostBld(GS.plan); costTag(e.clientX, e.clientY, GS.plan.ok ? '💰 ' + fmt(GS.plan.cost) : GS.plan.msg, GS.plan.ok); }
  } else if (GS.mode === 'pinch' && ptrs.size >= 2) {
    const [p1, p2] = [...ptrs.values()], d = Math.hypot(p1.x - p2.x, p1.y - p2.y), a = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    cam.dist = clamp(GS.dist0 * GS.d0 / d, 6, 120); cam.yaw = GS.yaw0 - (a - GS.a0); cam.yawT = cam.yaw; updCam();
    const p = groundAt((p1.x + p2.x) / 2, (p1.y + p2.y) / 2); if (p && GS.grab) { cam.x += GS.grab[0] - p[0]; cam.z += GS.grab[1] - p[1]; clampCam(); updCam(); }
  }
});
function endPtr(e) {
  if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId);
  if (GS && ptrs.size === 0) {
    const g = groundAt(e.clientX, e.clientY);
    if (GS.mode === 'pan' && !GS.moved && g) {
      if (cat === 'land') { const t = tileOf(g[0], g[1]); if (t >= 0) { const r = buyTile(t); if (r === true) { sfx('win'); toast('🗺️ Yeni arazi alındı!'); afterChange(); G.buildTiles(true, tileBuyable, tileCost()); } else if (r !== 'owned') { toast(r); sfx('err'); } } }
      else { const o = pickAt(g[0], g[1]); if (o) showInfo(o); else hideInfo(); }
    } else if (GS.mode === 'act') {
      if (cat === 'road') {
        if (GS.moved && GS.plan) { if (GS.plan.ok) { commitRoad(GS.plan); sfx('road'); afterChange(); } else { toast(GS.plan.msg); sfx('err'); } }
        else if (!GS.moved && g) { const ns = nearestSeg(g[0], g[1], .3); if (ns && ns.d <= ns.hw + .3) { const s = R.segs.get(ns.id); if (s.t === item) showInfo({ kind: 'seg', id: ns.id }); else { const r = upgradeSeg(ns.id, item); if (r === true) { sfx('road'); toast(`${ROADS[item].i} Yol ${ROADS[item].n} oldu`); afterChange(); } else { toast(r); sfx('err'); } } } }
        G.clearGhost();
      } else if (cat === 'util' || cat === 'svc' || cat === 'park') {
        if (GS.plan) { if (GS.plan.ok) { const p = GS.plan; commitSvc(p); sfx('build'); floatAt(p.x, p.z, '-' + fmt(p.cost)); afterChange(); } else { toast(GS.plan.msg); sfx('err'); } }
        G.clearGhost();
      } else if (cat === 'zone' && e.pointerType !== 'mouse') G.clearGhost();
    }
    costTag(); GS = null;
  } else if (ptrs.size === 1) { const [p] = [...ptrs.values()]; GS = { mode: 'pan', sx: p.x, sy: p.y, moved: true, grab: groundAt(p.x, p.y) }; }
}
cv.addEventListener('pointerup', endPtr); cv.addEventListener('pointercancel', endPtr);
cv.addEventListener('wheel', e => {
  e.preventDefault(); const g0 = groundAt(e.clientX, e.clientY);
  cam.dist = clamp(cam.dist * Math.exp(e.deltaY * .0012), 6, 120); updCam();
  const g1 = groundAt(e.clientX, e.clientY); if (g0 && g1) { cam.x += g0[0] - g1[0]; cam.z += g0[1] - g1[1]; } clampCam(); updCam();
}, { passive: false });
function clampCam() { cam.x = clamp(cam.x, -WH - 10, WH + 10); cam.z = clamp(cam.z, -WH - 10, WH + 10); }
function rotate(dir) { cam.yawT = Math.round((cam.yawT + dir * Math.PI / 4) / (Math.PI / 4)) * (Math.PI / 4); }
$('bRotL').onclick = () => { initAudio(); sfx('tap'); rotate(-1); };
$('bRotR').onclick = () => { initAudio(); sfx('tap'); rotate(1); };
addEventListener('keydown', e => {
  if (e.key === 'Escape') { selCat('pan'); }
  if (e.key === ' ') { togglePause(); e.preventDefault(); }
  if (e.key === 'q' || e.key === 'Q') rotate(-1); if (e.key === 'e' || e.key === 'E') rotate(1);
  const n = parseInt(e.key, 10); if (n >= 1 && n <= CATS.length) selCat(CATS[n - 1].id);
});
document.addEventListener('gesturestart', e => e.preventDefault());

function togglePause() { paused = !paused; $('bPause').textContent = paused ? '▶️' : '⏸'; if (paused) toast('Duraklatıldı'); }
$('bPause').onclick = () => { initAudio(); togglePause(); };
$('bSpeed').onclick = () => { initAudio(); speed = speed === 1 ? 2 : speed === 2 ? 4 : 1; $('bSpeed').textContent = speed + 'x'; if (paused) togglePause(); };
$('bMenu').onclick = () => { save(); openMenu(); };

// ---------- menü ----------
let confirmNew = false;
function updOpts() { $('oSound').textContent = OPT.sound ? '🔊 Ses: Açık' : '🔇 Ses: Kapalı'; $('oGfx').textContent = OPT.gfx === 'high' ? '✨ Grafik: Yüksek' : '⚡ Grafik: Hızlı'; }
$('oSound').onclick = () => { initAudio(); OPT.sound = !OPT.sound; saveOpt(); updOpts(); sfx('tap'); };
$('oGfx').onclick = () => { OPT.gfx = OPT.gfx === 'high' ? 'low' : 'high'; saveOpt(); updOpts(); G.setQuality(OPT.gfx === 'high'); };
function openMenu() {
  running = false; confirmNew = false; $('menu').style.display = 'flex'; $('loading').style.display = 'none';
  const has = (!isPreview && S()) || hasSave();
  $('mCont').style.display = has ? 'block' : 'none'; $('mNew').style.display = 'block';
  $('mNew').textContent = 'Yeni şehir'; $('mNew').className = has ? 'btn sec' : 'btn'; updOpts();
}
function loadWorldGfx() {
  G.resetWorldGfx(); G.clearTraffic(); G.buildWater();
  R.dirty.roads = R.dirty.blds = R.dirty.trees = R.dirty.cells = R.dirty.tiles = true;
}
function startGame() {
  isPreview = false; loadWorldGfx(); afterChange();
  $('menu').style.display = 'none'; running = true; paused = false; $('bPause').textContent = '⏸';
  selCat('pan');
}
$('mCont').onclick = () => {
  initAudio(); sfx('tap');
  if (!isPreview && S()) { $('menu').style.display = 'none'; running = true; return; }
  try { if (Wd.deserialize(localStorage.getItem(SAVE_KEY))) { const hw = [...R.nodes.values()].find(n => !n.out); cam.x = -6; cam.z = 2; cam.dist = 34; startGame(); return; } } catch (e) { console.error(e); }
  toast('Kayıt açılamadı');
};
$('mNew').onclick = () => {
  initAudio(); sfx('tap');
  if (((!isPreview && S()) || hasSave()) && !confirmNew) { confirmNew = true; $('mNew').textContent = 'Eminsen tekrar dokun (eski şehir silinir)'; return; }
  Wd.newGame(); cam.x = -6; cam.z = 2; cam.dist = 34; cam.yaw = cam.yawT = Math.PI * .25; updCam();
  startGame(); save(); setTimeout(() => toast('Hoş geldin, Başkan! 👋 Otoban seni bekliyor.', 2600), 300);
};
$('mHelp').onclick = () => { const h = $('help'); h.style.display = h.style.display === 'block' ? 'none' : 'block'; };
document.addEventListener('visibilitychange', () => { if (document.hidden) { save(); if (running && !paused) togglePause(); } });
addEventListener('pagehide', save);
addEventListener('resize', G.resize);

// ---------- döngü ----------
let lastT = performance.now(), acc = 0;
function frame(tm) {
  const dtMs = Math.min(100, tm - lastT); lastT = tm; const dt = dtMs / 1000;
  let simDt = 0;
  if (S() && (running || isPreview) && !paused) {
    if (running) { acc += dtMs * speed; let n = 0; while (acc >= 1000 && n++ < 4) { acc -= 1000; Wd.tick(); if (S().tk % 30 === 0) save(); afterChange(); } if (acc > 3000) acc = 0; }
    simDt = dt * (running ? speed : 1);
    G.updTraffic(simDt);
  }
  if (isPreview && $('menu').style.display !== 'none') { cam.yawT += dt * .05; cam.yaw = cam.yawT; }
  if (Math.abs(cam.yawT - cam.yaw) > 1e-3) cam.yaw += (cam.yawT - cam.yaw) * Math.min(1, dt * 8);
  updCam();
  if (S()) { G.updLight(S().tk + (running && !paused ? acc / 1000 : 0), OPT.gfx === 'high'); G.updFx(dt, simDt, tm); G.bobIcons(tm); }
  G.render();
  requestAnimationFrame(frame);
}

// ---------- başlat ----------
G.setQuality(OPT.gfx === 'high'); G.resize();
async function boot() {
  let demo = null;
  try { demo = (await import('./demo.js')).DEMO; } catch (e) { }
  if (demo && Wd.deserialize(demo)) { cam.x = -4; cam.z = 0; cam.dist = 42; }
  else { Wd.newGame(); }
  isPreview = true; loadWorldGfx(); afterChange(); G.syncIcons(false);
  updCam(); openMenu(); buildCats();
  requestAnimationFrame(frame);
}
boot();
window.__mm = { Wd, R, G, cam, selCat, afterChange, get S() { return Wd.S; }, startGame: () => startGame() };
