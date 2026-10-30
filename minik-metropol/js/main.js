// Arayüz, girdi ve oyun döngüsü
import { ROADS, ROAD_ORDER, ZONES, ZONE_ORDER, SVC, MILES, CATS, TILE, TILES, WH, LEVEL_REQ, POLICIES, QUESTS } from './data.js';
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
let OPT = { sound: true, gfx: 'high', music: true };
try { Object.assign(OPT, JSON.parse(localStorage.getItem(OPT_KEY) || '{}')); } catch (e) { }
const saveOpt = () => { try { localStorage.setItem(OPT_KEY, JSON.stringify(OPT)); } catch (e) { } };
function save() { if (!S() || isPreview) return; try { localStorage.setItem(SAVE_KEY, Wd.serialize()); } catch (e) { } }
function hasSave() { try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; } }

// ---------- ses ----------
let AC = null;
function initAudio() { if (AC) { if (AC.state === 'suspended') AC.resume(); if (running && OPT.music && !music) startMusic(); return; } try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { AC = null; } if (running && OPT.music) startMusic(); }
function tone(f, d, type = 'sine', v = .1, delay = 0) { if (!AC || !OPT.sound) return; const t0 = AC.currentTime + delay, o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.setValueAtTime(f, t0); g.gain.setValueAtTime(v, t0); g.gain.exponentialRampToValueAtTime(.001, t0 + d); o.connect(g); g.connect(AC.destination); o.start(t0); o.stop(t0 + d + .02); }
// ---------- müzik (prosedürel) ----------
let music = null;
function note(t, midi, dur, type, vol, dest) {
  const o = AC.createOscillator(), g = AC.createGain(); o.type = type; o.frequency.value = 440 * Math.pow(2, (midi - 69) / 12);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + Math.min(.8, dur * .3)); g.gain.exponentialRampToValueAtTime(.0005, t + dur);
  o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + .05);
}
function startMusic() {
  if (!AC || music || !OPT.music) return;
  const out = AC.createGain(); out.gain.value = 0; out.gain.linearRampToValueAtTime(.06, AC.currentTime + 3); out.connect(AC.destination);
  const lp = AC.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200; lp.connect(out);
  const dl = AC.createDelay(); dl.delayTime.value = .375; const fb = AC.createGain(); fb.gain.value = .32; dl.connect(fb); fb.connect(dl); dl.connect(lp);
  const bus = AC.createGain(); bus.connect(lp); bus.connect(dl);
  const DAY = [[48, [0, 4, 7, 11]], [53, [0, 4, 7, 11]], [45, [0, 3, 7, 10]], [43, [0, 4, 7, 10]]];
  const NIGHT = [[45, [0, 3, 7, 10]], [50, [0, 3, 7, 10]], [41, [0, 4, 7, 11]], [52, [0, 3, 7, 10]]];
  let step = 0, next = AC.currentTime + .2;
  const timer = setInterval(() => {
    if (!AC) return;
    while (next < AC.currentTime + .8) {
      const prog = G.night > .5 ? NIGHT : DAY, [root, iv] = prog[Math.floor(step / 16) % 4];
      if (step % 16 === 0) for (const k of iv) { note(next, root + k, 7.5, 'sine', .05, bus); note(next, root + k + 12, 7, 'triangle', .012, bus); }
      if (step % 16 === 0) note(next, root - 12, 7.5, 'sine', .06, bus);
      if (Math.random() < (G.night > .5 ? .3 : .42)) { const k = iv[(Math.random() * iv.length) | 0] + (Math.random() < .5 ? 12 : 24); note(next, root + k, 1.4, 'triangle', .035, bus); }
      next += .375; step++;
    }
  }, 200);
  // ortam sesleri: gündüz kuşlar, gece cırcır böcekleri
  const amb = setInterval(() => {
    if (!AC || !OPT.sound || !running || paused) return;
    const t = AC.currentTime;
    if (G.night < .4 && Math.random() < .35) { const o = AC.createOscillator(), g = AC.createGain(), f = 2400 + Math.random() * 1600; o.type = 'sine'; o.frequency.setValueAtTime(f, t); o.frequency.exponentialRampToValueAtTime(f * (1.2 + Math.random() * .4), t + .08); g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(.012, t + .02); g.gain.exponentialRampToValueAtTime(.0005, t + .12); o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + .15); }
    if (G.night > .6 && Math.random() < .5) for (let k = 0; k < 3; k++) { const o = AC.createOscillator(), g = AC.createGain(); o.type = 'square'; o.frequency.value = 4200 + Math.random() * 300; g.gain.setValueAtTime(0, t + k * .06); g.gain.linearRampToValueAtTime(.004, t + k * .06 + .01); g.gain.exponentialRampToValueAtTime(.0002, t + k * .06 + .04); o.connect(g); g.connect(AC.destination); o.start(t + k * .06); o.stop(t + k * .06 + .05); }
  }, 900);
  music = { out, timer, amb };
}
function stopMusic() { if (!music) return; clearInterval(music.timer); clearInterval(music.amb); const o = music.out; o.gain.linearRampToValueAtTime(0, AC.currentTime + 1); setTimeout(() => o.disconnect(), 1200); music = null; }
G.setBoom(() => { if (AC && OPT.sound) { tone(90 + Math.random() * 60, .5, 'sawtooth', .025); tone(600 + Math.random() * 300, .25, 'sine', .015, .02); } });
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
let cat = 'pan', item = null, brush = 1.6, curveMode = false, elevMode = false, lastRoad = 'street', svcRot = 0, fillMode = false, panLock = false, curveA = null, underMode = false, rbSize = 'm', bStyle = 'beam';
const lastItem = { road: 'street', zone: 'r1', util: 'wind', svc: 'clinic', park: 'park', cult: 'cami', trans: 'busstop', simge: 'saatk' };

// ---------- HUD ----------
let toastT = 0;
function toast(msg, ms = 2000) { const t = $('toast'); t.innerHTML = msg; t.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), ms); }
function floatAt(x, z, txt, y = 1) { const p = G.project(x, y, z); if (!p) return; const d = document.createElement('div'); d.className = 'fl'; d.textContent = txt; d.style.left = p[0] + 'px'; d.style.top = p[1] + 'px'; $('floaters').appendChild(d); setTimeout(() => d.remove(), 1200); }
const setBar = (el, v) => { const h = Math.abs(v) * 50; el.style.height = h + '%'; el.style.bottom = v >= 0 ? '50%' : (50 - h) + '%'; };
function clock() { const m = (S().tk % 144) * 10; return String((m / 60) | 0).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); }
function updHud() {
  const st = R.st, s = S(); if (!s) return;
  const hr = (s.tk % 144) / 6;
  $('cname').textContent = (s.name ? s.name + ' · ' : '') + MILES[s.ms].title; $('cday').textContent = `${hr >= 6.5 && hr < 19 ? '☀️' : '🌙'} Gün ${Math.floor(s.tk / 144) + 1} · ${clock()}`;
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
  if (c === 'road') return [...ROAD_ORDER.map(k => ({ id: k, i: ROADS[k].i, n: ROADS[k].n, pr: ROADS[k].cost + '/m', lock: ROADS[k].ms > ms ? ROADS[k].ms : 0, sw: k === 'dirt' ? '#9b7b55' : k === 'highway' ? '#9a9a96' : '#3e4147' })),
    { id: 'curve', i: '〰️', n: 'Eğri yol', pr: curveMode ? 'AÇIK' : 'kapalı', on: curveMode }, { id: 'elev', i: '🌉', n: 'Köprü / üst geçit', pr: elevMode ? 'AÇIK' : 'kapalı', on: elevMode }, { id: 'under', i: '🚇', n: 'Alt geçit', pr: underMode ? 'AÇIK' : 'kapalı', on: underMode },
    { id: 'bstyle', i: { beam: '🌉', susp: '🌁', stay: '🎐', arch: '⌒' }[bStyle], n: 'Köprü tipi', pr: { beam: 'Kiriş', susp: 'Asma', stay: 'Eğik askılı', arch: 'Kemer' }[bStyle] },
    { id: 'round', i: '⭕', n: 'Döner kavşak', pr: 'her yere koy' }, { id: 'rsize', i: rbSize === 's' ? '◦' : rbSize === 'm' ? '○' : '◯', n: 'Göbek boyu', pr: { s: 'Küçük', m: 'Orta', l: 'Büyük' }[rbSize] }];
  if (c === 'zone') return [...ZONE_ORDER.map(k => ({ id: k, i: ZONES[k].i, n: ZONES[k].n + ' ' + ZONES[k].sub, lock: ZONES[k].ms > ms ? ZONES[k].ms : 0, sw: ZONES[k].c })), { id: 'x', i: '🚫', n: 'Bölgeyi sil', sw: '#fff' }, { id: 'fill', i: '🪣', n: 'Bloğu doldur', pr: fillMode ? 'AÇIK' : 'kapalı', on: fillMode }, { id: 'brush', i: brush < 1 ? '•' : brush < 2 ? '●' : brush < 3 ? '⬤' : '⭕', n: 'Fırça ' + (brush < 1 ? 'küçük' : brush < 2 ? 'orta' : brush < 3 ? 'büyük' : 'çok büyük') }];
  const cats = { util: ['wind', 'coal', 'solar', 'wtower', 'pump'], svc: ['clinic', 'hosp', 'ilk', 'orta', 'lise', 'uni', 'police', 'fire', 'cop'], park: ['park', 'play', 'plaza', 'bigpark', 'stadium'], cult: ['cami', 'kutup', 'muze'], trans: ['busdep', 'busstop', 'metro'], simge: ['saatk', 'luna', 'tvk', 'fener', 'havali'] }[c];
  if (cats) return [...cats.map(k => ({ id: k, i: SVC[k].i, n: SVC[k].n, pr: '💰' + fmt(SVC[k].cost), lock: SVC[k].ms > ms ? SVC[k].ms : 0 })), { id: 'rot', i: '🔄', n: 'Döndür', pr: ['ön yola', 'sağa', 'arkaya', 'sola'][svcRot] }];
  return [];
}
const HINTS = { pan: 'Kaydırmak için sürükle · Bir şeye dokun: bilgi ve yıkma', road: 'Sürükle: yol çiz · Yollar kesişince kavşak olur · Var olan yola dokun: seçili tipe dönüştür', zone: 'Yolun kenarındaki kareleri parmağınla boya · 🪣 ile bütün bloğu tek dokunuşla doldur', util: 'Bir yolun yanına sürükleyip bırak', svc: 'Bir yolun yanına sürükleyip bırak · Halka etki alanını gösterir', park: 'Bir yolun yanına sürükleyip bırak', land: 'Yeşil araziye dokunup satın al', cult: 'Bir yolun yanına sürükleyip bırak · Çevredeki evleri mutlu eder', simge: 'Turist çeken simge yapılar · Deniz feneri kıyıya kurulur', trans: 'Önce 🚌 garaj, sonra mahallelere 🚏 durak koy · Ⓜ️ metro istasyonları kendiliğinden bağlanır', bull: 'Yıkmak istediğin yola ya da binaya dokun' };
function buildSub() {
  const box = $('sub'); box.innerHTML = '';
  $('subhint').textContent = HINTS[cat] || '';
  for (const it of itemsFor(cat)) {
    const b = document.createElement('button');
    b.className = 'tb' + (item === it.id || it.on ? ' sel' : '') + (it.lock ? ' lock' : '');
    b.innerHTML = `${it.sw ? `<span class="sw" style="background:${it.sw}"></span>` : ''}<span class="ic">${it.lock ? '🔒' : it.i}</span><span class="nm">${it.n}</span>${it.lock ? `<span class="pr">${MILES[it.lock].title}</span>` : it.pr ? `<span class="pr">${it.pr}</span>` : ''}`;
    b.onclick = () => {
      initAudio(); sfx('tap');
      if (it.id === 'brush') { brush = brush < 1 ? 1.6 : brush < 2 ? 2.6 : brush < 3 ? 4 : .7; fillMode = false; buildSub(); return; }
      if (it.id === 'fill') { fillMode = !fillMode; toast(fillMode ? '🪣 Bir yere dokun: yollarla çevrili bütün alan seçili bölgeyle dolar' : 'Fırça modu'); buildSub(); return; }
      if (it.id === 'rot') { svcRot = (svcRot + 1) % 4; buildSub(); return; }
      if (it.id === 'under') { underMode = !underMode; if (underMode) { elevMode = false; curveMode = false; } if (item === 'round') item = lastRoad; toast(underMode ? '🚇 Alt geçit: yol rampayla yerin altına iner, üstteki yolların altından geçer' : 'Normal yol modu'); buildSub(); return; }
      if (it.id === 'bstyle') { bStyle = { beam: 'susp', susp: 'stay', stay: 'arch', arch: 'beam' }[bStyle]; toast('🌉 Köprü tipi: ' + { beam: 'Kiriş', susp: 'Asma', stay: 'Eğik askılı', arch: 'Kemer' }[bStyle] + ' (köprü modunda ve nehir geçişlerinde kullanılır)'); buildSub(); return; }
      if (it.id === 'rsize') { rbSize = { s: 'm', m: 'l', l: 's' }[rbSize]; buildSub(); return; }
      if (it.id === 'elev') { elevMode = !elevMode; if (elevMode) { curveMode = false; underMode = false; } if (item === 'round') item = lastRoad; toast(elevMode ? '🌉 Köprü modu: yol rampalarla yükselir, altından geçen yollarla kesişmez' : 'Normal yol modu'); buildSub(); return; }
      if (it.id === 'curve') { curveMode = !curveMode; if (curveMode) { elevMode = false; underMode = false; } if (item === 'round') item = lastRoad; toast(curveMode ? '〰️ Eğri yol açık: bir yolun ucundan başlayıp sürükle, yol kıvrılarak devam eder' : 'Düz yol modu'); buildSub(); return; }
      if (cat === 'road' && it.id !== 'round') lastRoad = it.id;
      if (it.id === 'round' && item === 'round') return;
      if (it.lock) { toast(`🔒 ${it.n}: şehrin <b>${MILES[it.lock].title}</b> olunca açılır`); return; }
      item = it.id; lastItem[cat] = it.id; buildSub();
    };
    box.appendChild(b);
  }
}
function selCat(c) {
  cat = c; item = lastItem[c] || null; hideInfo(); G.clearGhost(); curveA = null; panLock = false; updLock();
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
  for (const n of R.nodes.values()) { if (Wd.degree(n.id) >= 3 && !n.h && Math.hypot(n.x - x, n.z - z) < Wd.nodeHW(n.id) + .4) return { kind: 'node', id: n.id }; }
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
      h += `<div class="chk"><span>🛣️ Otobana bağlı ${yn(b.conn)}</span><span>⚡ Elektrik ${yn(b.pow)}</span><span>💧 Su ${yn(b.wat)}</span><span>🩺 Sağlık ${yn(c.health)}</span><span>🎓 Eğitim: ${EDU[c.edu || 0]}</span><span>🚓 Polis ${yn(c.police)}</span><span>🚒 İtfaiye ${yn(c.fire)}</span><span>🌳 Park·Kültür ${c.park ? '+' + Math.min(25, c.park) : '—'}</span><span>🗑️ Çöp ${yn(c.garbage)}</span>${c.poll ? `<span>🏭 Kirlilik -${Math.round(Math.min(35, c.poll * 1.5))}</span>` : ''}${c.noise ? `<span>🔊 Otoban gürültüsü</span>` : ''}</div>`;
      const req = LEVEL_REQ[k][b.lvl + 1];
      if (req) {
        const miss = [];
        if (!b.conn) miss.push('otobana bağlı yol'); if (!b.pow) miss.push('elektrik'); if (!b.wat) miss.push('su');
        if (b.hap < req.hap) miss.push(`mutluluk ${req.hap}%`);
        if ((c.edu || 0) < (req.edu || 0)) miss.push(EDU[req.edu]);
        if (req.health && !c.health) miss.push('sağlık'); if (req.garbage && !c.garbage) miss.push('çöp toplama'); if (req.police && !c.police) miss.push('polis'); if (req.fire && !c.fire) miss.push('itfaiye');
        h += `<div class="need">${miss.length ? '⬆️ Büyümesi için: ' + miss.join(', ') : '⬆️ Koşullar tamam, ' + (k === 'R' ? 'dolunca' : 'çalışanlar gelince') + ' büyüyecek'}</div>`;
      } else h += `<div class="need">⭐ En üst seviyede</div>`;
    }
    h += `<div class="acts"><button class="ab red" data-a="del">🧨 Yık</button></div>`;
  } else if (o.kind === 'node') {
    const N = R.nodes.get(o.id); if (!N) { hideInfo(); return; }
    const c = Wd.ctlOf(o.id), J = R.junc.get(o.id);
    h += `<h3>🚦 Kavşak (${J ? J.n : 0} yollu)</h3>Şu an: <b>${{ light: '🚦 Trafik ışığı', stop: '🛑 Dur levhası', none: '➖ Kontrolsüz' }[c]}</b>`;
    h += `<div class="need">Trafik ışığında araçlar sırayla geçer. Dur levhasında her araç durup geçer. Kontrolsüz kavşakta kimse durmaz.</div>`;
    h += `<div class="acts"><button class="ab ${c === 'light' ? 'yel' : ''}" data-a="ctl:light">🚦 Işık</button><button class="ab ${c === 'stop' ? 'yel' : ''}" data-a="ctl:stop">🛑 Dur levhası</button><button class="ab ${c === 'none' ? 'yel' : ''}" data-a="ctl:none">➖ Kontrolsüz</button><button class="ab" data-a="round">⭕ Döner kavşak yap</button></div>`;
  } else {
    const s = R.segs.get(o.id); if (!s) { hideInfo(); return; }
    const g = segGeo(o.id), rt = ROADS[s.t];
    h += `<h3>${rt.i} ${rt.n}</h3>Uzunluk: ${(g.L * 8).toFixed(0)} m · ${R.conn.has(o.id) ? '✅ otobana bağlı' : '❌ bağlı değil'}`;
    h += `<div class="acts">`;
    for (const t of ROAD_ORDER) if (t !== s.t) { const lk = ROADS[t].ms > S().ms; h += `<button class="ab" data-a="up:${t}" ${lk ? 'disabled' : ''}>${ROADS[t].i} ${ROADS[t].n}${lk ? ' 🔒' : ' 💰' + fmt(upgradeCost(o.id, t))}</button>`; }
    if (ROADS[s.t].oneway) h += `<button class="ab" data-a="flip">↔️ Yönü çevir</button>`;
    h += `<button class="ab red" data-a="del">🧨 Yık</button></div>`;
  }
  $('infoBody').innerHTML = h; $('info').style.display = 'block'; selObj = o; G.setSelect(o);
  for (const btn of $('infoBody').querySelectorAll('[data-a]')) btn.onclick = () => { initAudio(); act(o, btn.dataset.a); };
  if (!quiet) sfx('tap');
}
function hideInfo() { $('info').style.display = 'none'; selObj = null; G.setSelect(null); }
function act(o, a) {
  pushUndo();
  if (a === 'del') { if (o.kind === 'bld') { const b = R.blds.get(o.id); removeBld(o.id); sfx('bull'); if (b) G.dust(b.x, b.z); } else { const r = deleteSeg(o.id); if (r !== true) { toast(r); sfx('err'); return; } sfx('bull'); } hideInfo(); afterChange(); return; }
  if (a.startsWith('ctl:')) { Wd.setCtl(o.id, a.slice(4)); sfx('tap'); afterChange(); showInfo(o, true); return; }
  if (a === 'round') { const r = Wd.makeRoundabout(o.id, rbSize); if (r === true) { sfx('road'); toast('⭕ Döner kavşak yapıldı'); hideInfo(); afterChange(); } else { toast(r); sfx('err'); } return; }
  if (a === 'flip') { Wd.flipSeg(o.id); sfx('road'); hideInfo(); afterChange(); return; }
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
  if ((s.hist || []).length > 2) h += `<div style="margin-top:8px"><b>📈 Gelişim</b><canvas id="histC" width="340" height="110" style="width:100%;height:110px;background:rgba(255,255,255,.05);border-radius:8px;margin-top:4px"></canvas><small style="opacity:.75"><span style="color:#6ee36e">■</span> nüfus <span style="color:#ffd65a">■</span> para <span style="color:#5ab4ff">■</span> mutluluk</small></div>`;
  h += `<div style="margin-top:8px"><b>🏛️ Şehir politikaları</b>` + Object.entries(POLICIES).map(([k, p]) => `<label class="srow" style="align-items:center"><span>${p.n}<br><small style="opacity:.7">${p.d}${p.cost ? ' · ' + fmt(p.cost * 6) + '/sa' : ''}</small></span><input type="checkbox" data-pol="${k}" ${s.pol && s.pol[k] ? 'checked' : ''}></label>`).join('') + `</div>`;
  h += `<div style="margin-top:8px">🧾 Vergi oranı: <b id="taxV">${Math.round(s.tax * 10)}%</b><input type="range" id="taxR" min="6" max="16" value="${Math.round(s.tax * 10)}"><small style="opacity:.75">Yüksek vergi gelir getirir ama mutluluğu düşürür.</small></div>`;
  $('statsBody').innerHTML = h; $('statsPanel').style.display = 'block';
  const hc = $('histC'); if (hc) { const g = hc.getContext('2d'), H = s.hist, W = hc.width, Hh = hc.height; g.clearRect(0, 0, W, Hh);
    for (const [k, col] of [[0, '#6ee36e'], [1, '#ffd65a'], [2, '#5ab4ff']]) { let mn = Infinity, mx = -Infinity; for (const r of H) { mn = Math.min(mn, r[k]); mx = Math.max(mx, r[k]); } if (k === 2) { mn = 0; mx = 100; } if (mx === mn) mx = mn + 1; g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); H.forEach((r, i) => { const x = i / (H.length - 1) * (W - 4) + 2, y = Hh - 4 - (r[k] - mn) / (mx - mn) * (Hh - 8); i ? g.lineTo(x, y) : g.moveTo(x, y); }); g.stroke(); } }
  for (const cb of $('statsBody').querySelectorAll('[data-pol]')) cb.onchange = () => { s.pol = s.pol || {}; s.pol[cb.dataset.pol] = cb.checked; Wd.derive(); updHud(); sfx('tap'); };
  $('taxR').oninput = e => { s.tax = e.target.value / 10; $('taxV').textContent = e.target.value + '%'; };
}
$('bStats').onclick = () => { initAudio(); sfx('tap'); if ($('statsPanel').style.display === 'block') $('statsPanel').style.display = 'none'; else showStats(); };
$('statsX').onclick = () => { $('statsPanel').style.display = 'none'; };

// ---------- geri al ----------
const undoStack = [];
function pushUndo() { if (isPreview || !S()) return; undoStack.push(Wd.serialize()); if (undoStack.length > 10) undoStack.shift(); }
function undo() {
  if (!undoStack.length) { toast('Geri alınacak işlem yok'); sfx('err'); return; }
  const tk = S().tk, snap = undoStack.pop();
  if (Wd.deserialize(snap)) { S().tk = tk; loadWorldGfx(); hideInfo(); afterChange(); toast('↶ Geri alındı'); sfx('tap'); }
}
$('bUndo').onclick = () => { initAudio(); undo(); };

// ---------- bilgi görünümleri ----------
let view = 0;
const VIEWS = [
  null,
  { n: '😊 Mutluluk', leg: [['#2ecc71', 'mutlu'], ['#f1c40f', 'orta'], ['#e74c3c', 'mutsuz']], f: b => b.svc ? null : b.hap >= 65 ? '#2ecc71' : b.hap >= 45 ? '#f1c40f' : '#e74c3c' },
  { n: '⚡💧 Altyapı', leg: [['#2ecc71', 'tam'], ['#f39c12', 'su yok'], ['#e74c3c', 'elektrik yok'], ['#7f8c8d', 'yol yok']], f: b => b.svc ? null : !b.conn ? '#7f8c8d' : !b.pow ? '#e74c3c' : !b.wat ? '#f39c12' : '#2ecc71' },
  { n: '🎓 Eğitim', leg: [['#7f8c8d', 'yok'], ['#e67e22', 'ilk'], ['#f1c40f', 'orta'], ['#2ecc71', 'lise'], ['#3498db', 'ünv']], f: b => b.svc ? null : ['#7f8c8d', '#e67e22', '#f1c40f', '#2ecc71', '#3498db'][b.cov?.edu || 0] },
  { n: '🚌 Toplu taşıma', leg: [['#2ecc71', 'durak/metro yakın'], ['#e74c3c', 'yok'], ['#c2185b', 'metro hattı']], f: b => b.svc ? null : b.cov?.transit ? '#2ecc71' : '#e74c3c' },
  { n: '🩺🚓🚒🗑️ Hizmetler', leg: [['#2ecc71', 'hepsi var'], ['#f1c40f', '1-2 eksik'], ['#e74c3c', 'çoğu yok']], f: b => { if (b.svc) return null; const c = b.cov || {}; const m = [c.health, c.police, c.fire, c.garbage].filter(x => !x).length; return m === 0 ? '#2ecc71' : m <= 2 ? '#f1c40f' : '#e74c3c'; } },
];
function applyView() {
  const v = VIEWS[view]; G.buildOverlay(v ? v.f : null); G.buildMetro(view === 4);
  const L = $('legend'); if (!v) { L.style.display = 'none'; return; }
  L.style.display = 'block'; L.innerHTML = '<b>' + v.n + '</b>' + v.leg.map(([c, t]) => `<i style="background:${c}"></i>${t}`).join('');
}
$('bView').onclick = () => { initAudio(); sfx('tap'); view = (view + 1) % VIEWS.length; applyView(); if (!view) toast('Normal görünüm'); };

// ---------- vatandaş mesajları ----------
let lastFeed = 0, feedT = 0;
function feed() {
  const st = R.st, s = S(); if (!s || isPreview || s.tk - lastFeed < 36) return;
  const opts = [];
  if (st.eDem > st.eSup) opts.push('⚡ <b>Ayşe:</b> Elektrikler kesik, buzdolabım çalışmıyor! Santral lazım.');
  if (st.wDem > st.wSup) opts.push('💧 <b>Mehmet:</b> Musluklardan su akmıyor! Su kulesi kurun.');
  if (st.unemp > .15) opts.push('💼 <b>Can:</b> İş bulamıyorum. Biraz ticaret ve sanayi alanı açın.');
  if (st.Rd > .6) opts.push('🏠 <b>Emlakçı Hasan:</b> Şehre taşınmak isteyen çok kişi var, konut alanı açın!');
  if (st.Cd > .6) opts.push('🛍️ <b>Zeynep:</b> Alışveriş yapacak dükkan yok, ticaret bölgesi istiyoruz.');
  if (st.Id > .6) opts.push('🏭 <b>Usta Ali:</b> Sanayi bölgesi açılsa çok iş olur.');
  const zb = [...R.blds.values()].filter(b => !b.svc);
  if (zb.length > 20) {
    const frac = k => zb.filter(b => !(b.cov && b.cov[k])).length / zb.length;
    if (frac('health') > .4) opts.push('🩺 <b>Fatma Teyze:</b> En yakın sağlık ocağı çok uzak.');
    if (frac('garbage') > .4 && s.maxPop > 150) opts.push('🗑️ <b>Murat:</b> Çöpler toplanmıyor, sokaklar koktu!');
    if (frac('police') > .5) opts.push('🚓 <b>Elif:</b> Mahallede hiç polis görmüyoruz.');
    if (frac('fire') > .5) opts.push('🚒 <b>Kemal:</b> Yangın çıkarsa itfaiye yetişemez.');
    if (zb.filter(b => (b.cov?.edu || 0) === 0).length / zb.length > .4) opts.push('🎒 <b>Selin:</b> Çocuklarımız için okul lazım!');
  }
  if ((R.st.svcCnt.busstop || 0) > 0 && !(R.st.svcCnt.busdep)) opts.push('🚏 <b>Yolcu:</b> Duraklar var ama otobüs yok! Bir otobüs garajı lazım.');
  if (st.pop > 800 && (st.transitCov || 0) < .3) opts.push('🚌 <b>Öğrenci:</b> Okula gitmek için otobüs ya da metro olsa ne güzel olurdu.');
  if (s.money < 2000) opts.push('💸 <b>Belediye muhasebesi:</b> Kasa boşalıyor! Vergileri ya da giderleri gözden geçirin.');
  if (!opts.length && st.pop > 50) opts.push(st.hap > 70 ? '😊 <b>Deniz:</b> Bu şehirde yaşamak harika, başkanımıza teşekkürler!' : '🙂 <b>Burak:</b> Şehir güzelleşiyor, park biraz daha olsa iyi olur.');
  if (!opts.length) return;
  lastFeed = s.tk; showFeed(opts[(Math.random() * opts.length) | 0]);
}
function showFeed(t) { const f = $('feed'); f.innerHTML = '💬 ' + t; f.classList.add('on'); clearTimeout(feedT); feedT = setTimeout(() => f.classList.remove('on'), 6000); }

// ---------- görevler ----------
function qCheck(id) {
  const st = R.st, s = S(), cnt = k => st.svcCnt[k] || 0, blds = [...R.blds.values()];
  switch (id) {
    case 'ilk_yol': return [...R.segs.values()].some(x => x.t !== 'highway' && R.conn.has(x.id));
    case 'elektrik': return st.eSup > 0;
    case 'su': return st.wSup > 0;
    case 'konut10': return blds.filter(b => !b.svc && ZONES[b.zt].k === 'R').length >= 10;
    case 'nufus100': return st.pop >= 100;
    case 'park3': return cnt('park') + cnt('play') + cnt('plaza') + cnt('bigpark') >= 3;
    case 'kavsak5': return [...R.nodes.values()].filter(n => Wd.degree(n.id) >= 3).length >= 5;
    case 'donerk': return (s.deco || []).length >= 1;
    case 'arazi': return s.tiles.length >= 2;
    case 'kopru': return [...R.nodes.values()].some(n => n.h > 0);
    case 'altgecit': return [...R.nodes.values()].some(n => n.h < 0);
    case 'egitim3': return cnt('ilk') && cnt('orta') && cnt('lise');
    case 'nufus500': return st.pop >= 500;
    case 'apartman': return blds.some(b => b.zt === 'r1' && b.lvl >= 3 || b.zt === 'r2' && b.lvl >= 1);
    case 'cami': return cnt('cami') && cnt('kutup');
    case 'toplu': return cnt('busdep') && cnt('busstop') >= 3;
    case 'mutlu80': return st.pop >= 200 && st.hap >= 80;
    case 'ofis': return blds.some(b => b.zt === 'o');
    case 'nufus1500': return st.pop >= 1500;
    case 'simge': return cnt('saatk') + cnt('luna') + cnt('tvk') + cnt('fener') + cnt('havali') > 0;
    case 'metro2': return cnt('metro') >= 2;
    case 'gokdelen': return blds.some(b => (b.zt === 'r2' && b.lvl >= 5) || (b.zt === 'o' && b.lvl >= 3) || (b.zt === 'c2' && b.lvl >= 3));
    case 'yol10': return st.roadLen * 8 >= 10000;
    case 'nufus5000': return st.pop >= 5000;
    case 'havali': return cnt('havali') > 0;
    case 'nufus15000': return st.pop >= 15000;
    case 'metropol': return st.pop >= 40000;
  }
  return false;
}
function checkQuests() {
  const s = S(); if (!s || isPreview) return; s.qd = s.qd || [];
  for (const q of QUESTS) if (!s.qd.includes(q.id) && qCheck(q.id)) {
    s.qd.push(q.id); s.money += q.r; sfx('win'); G.fireworks(cam.x, cam.z, 6);
    toast(`🎯 Görev tamam: <b>${q.n}</b><br>+${fmt(q.r)} 💰`, 3500);
  }
  if ($('questPanel').style.display === 'block') showQuests();
}
function showQuests() {
  const s = S(), done = s.qd || [];
  const open = QUESTS.filter(q => !done.includes(q.id));
  let h = `<h3>🎯 Görevler · ${done.length}/${QUESTS.length}</h3>`;
  h += open.slice(0, 6).map((q, i) => `<div class="srow" style="${i >= 3 ? 'opacity:.55' : ''}"><span>${i < 3 ? '⬜' : '🔒'} ${q.n}</span><b>+${fmt(q.r)}</b></div>`).join('');
  if (done.length) h += `<div style="margin-top:8px;opacity:.75;font-size:12px">✅ Tamamlananlar: ${QUESTS.filter(q => done.includes(q.id)).map(q => q.n).join(' · ')}</div>`;
  $('questBody').innerHTML = h; $('questPanel').style.display = 'block';
}
$('bQuest').onclick = () => { initAudio(); sfx('tap'); if ($('questPanel').style.display === 'block') $('questPanel').style.display = 'none'; else showQuests(); };
$('questX').onclick = () => { $('questPanel').style.display = 'none'; };

// ---------- olaylar ve hava ----------
function events() {
  const s = S(); if (!s || isPreview) return;
  s.hist = s.hist || [];
  if (s.tk % 6 === 0) { s.hist.push([R.st.pop, Math.round(s.money), R.st.hap]); if (s.hist.length > 300) s.hist.splice(0, s.hist.length - 300); }
  if (s.ev && s.tk > s.ev.until) { if (s.ev.t === 'fest') showFeed('🎉 Festival sona erdi. Herkes çok eğlendi!'); s.ev = null; }
  if (!s.ev && R.st.pop > 80 && Math.random() < .004) {
    const r = Math.random();
    if (r < .45) { s.ev = { t: 'rain', until: s.tk + 30 + (Math.random() * 40 | 0) }; showFeed('🌧️ <b>Meteoroloji:</b> Şehre yağmur geliyor.'); }
    else if (r < .75) { s.ev = { t: 'fest', until: s.tk + 72 }; showFeed('🎉 <b>Belediye:</b> Şehir festivali başladı! Turist geliri ve mutluluk arttı.'); G.fireworks(cam.x, cam.z, 10); }
    else { const bonus = 500 + Math.round(R.st.pop * 2); s.money += bonus; showFeed(`🏗️ <b>Yatırımcı:</b> Şehrinize güveniyoruz! +${fmt(bonus)} 💰 hibe.`); }
  }
  G.setRain(s.ev && s.ev.t === 'rain');
}

// ---------- değişiklik sonrası ----------
function afterChange() {
  const d = R.dirty;
  if (!isPreview) for (const e of R.events) if (e.t === 'new' || e.t === 'up') G.startConstruction(e.id);
  if (d.roads) G.buildRoads();
  if (d.blds) { G.syncBuildings(); G.buildMetro(view === 4); }
  if (d.trees) G.buildTrees();
  if (d.cells || d.roads) G.buildCells(cat === 'zone');
  if (d.tiles) G.buildTiles(cat === 'land', tileBuyable, tileCost());
  d.roads = d.blds = d.trees = d.cells = d.tiles = false;
  G.syncIcons(!isPreview);
  for (const e of R.events.splice(0)) {
    if (e.t === 'up') { const b = R.blds.get(e.id); if (b) floatAt(b.x, b.z, '⬆️', 1.5); }
    else if (e.t === 'dust' || e.t === 'gone') G.dust(e.x, e.z);
    else if (e.t === 'fire') { G.setFire(e.id, true); if (e.from) G.spawnSpecial(e.from, e.id, 'fire'); const b = R.blds.get(e.id); if (b) floatAt(b.x, b.z, '🔥', 1.6); showFeed(e.from ? '🔥 <b>İtfaiye:</b> Yangın ihbarı aldık, ekipler yolda!' : '🔥 <b>Komşu:</b> Bina yanıyor ve yakında itfaiye yok!'); }
    else if (e.t === 'fireout') { G.setFire(e.id, false); const b = R.blds.get(e.id); if (b) floatAt(b.x, b.z, '🚒✅', 1.6); }
    else if (e.t === 'burn') { G.dust(e.x, e.z); toast('🔥 Bir bina yanıp yıkıldı. Oraya itfaiye kurmalısın.', 3500); }
    else if (e.t === 'ms') { G.fireworks(cam.x, cam.z, 16); toast('🎉 ' + MILES[e.ms].msg + (MILES[e.ms].bonus ? `<br>+${fmt(MILES[e.ms].bonus)} 💰` : ''), 4500); sfx('win'); buildSub(); }
  }
  checkTut(); updHud(); if (view) applyView();
}

// ---------- girdi ----------
const cv = G.renderer.domElement;
const ptrs = new Map(); let GS = null, lastPaint = 0;
cv.addEventListener('contextmenu', e => e.preventDefault());
function angTxt(p) {
  const f = a => a === null || a === undefined ? '' : (a === 90 ? '<b style="color:#ffd65a">90° ✓</b>' : a + '°');
  const a = f(p.angA), b = f(p.angB);
  return a || b ? '<br>∠ ' + [a && 'başlangıç ' + a, b && 'bitiş ' + b].filter(Boolean).join(' · ') : '';
}
function roadTags(plan) {
  const ids = ['tagA', 'tagB', 'tagM'];
  if (!plan) { for (const i of ids) $(i).style.display = 'none'; return; }
  const P = (plan.curve || plan.elev) && plan.pts && plan.pts.length ? plan.pts : [plan.A, plan.B];
  const A = P[0], B = P[P.length - 1], M = P[Math.floor(P.length / 2)] && P.length > 2 ? P[Math.floor(P.length / 2)] : { x: (A.x + B.x) / 2, z: (A.z + B.z) / 2 };
  const put = (id, pt, html, cls) => { const s = pt && G.project(pt.x, .3, pt.z); const el = $(id); if (!s || !html) { el.style.display = 'none'; return; } el.style.display = 'block'; el.style.left = s[0] + 'px'; el.style.top = s[1] + 'px'; el.innerHTML = html; el.className = 'rtag ' + (cls || ''); };
  const ang = a => a === null || a === undefined ? '' : a === 90 ? '∠ 90° ✓' : '∠ ' + a + '°';
  put('tagA', A, ang(plan.angA), plan.angA === 90 ? 'right' : '');
  put('tagB', B, ang(plan.angB), plan.angB === 90 ? 'right' : '');
  put('tagM', M, plan.ok ? `${plan.elev ? '🌉 ' : plan.curve ? '〰️ ' : ''}${(plan.len * 8).toFixed(0)} m · 💰 ${fmt(plan.cost)}` : '⚠️ ' + plan.msg, plan.ok ? 'len' : 'bad');
}
function costTag(x, y, txt, ok) { const t = $('costTag'); if (!txt) { t.style.display = 'none'; return; } t.style.display = 'block'; t.style.left = x + 'px'; t.style.top = y + 'px'; t.innerHTML = txt; t.style.color = ok ? '#9ff59f' : '#ff9a8a'; }
function actionDown(x, y) {
  const g = groundAt(x, y); if (!g || !S()) return;
  if (cat === 'zone' || cat === 'bull') pushUndo();
  if (cat === 'zone') { doPaint(g, true); }
  else if (cat === 'bull') doBull(g, true);
  else if (cat === 'util' || cat === 'svc' || cat === 'park' || cat === 'cult' || cat === 'trans' || cat === 'simge') { GS.plan = planSvc(g[0], g[1], item, svcRot); G.setGhostBld(GS.plan); costTag(x, y, GS.plan.ok ? '💰 ' + fmt(GS.plan.cost) : GS.plan.msg, GS.plan.ok); }
}
function doPaint(g, first) {
  if (item === 'brush' || item === 'fill' || !item) return;
  if (fillMode) { if (!first) return; const n = Wd.fillZone(g[0], g[1], item === 'x' ? '' : item); if (n) { sfx('paint'); toast(`🪣 ${n} kare boyandı`); afterChange(); } return; }
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
  if (photo && ptrs.size === 0) { ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); GS = { mode: 'pan', sx: e.clientX, sy: e.clientY, moved: false, grab: groundAt(e.clientX, e.clientY), photo: true }; return; }
  try { cv.setPointerCapture(e.pointerId); } catch (_) { }
  ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (ptrs.size === 1) {
    const mode = e.button === 2 ? 'rot' : (e.button === 1 || cat === 'pan' || cat === 'land' || panLock) ? 'pan' : 'act';
    GS = { mode, sx: e.clientX, sy: e.clientY, lx: e.clientX, moved: false, grab: groundAt(e.clientX, e.clientY), start: groundAt(e.clientX, e.clientY) };
    if (mode === 'act' && cat !== 'road') actionDown(e.clientX, e.clientY);
  } else if (ptrs.size === 2) {
    G.clearGhost(); costTag(); const [p1, p2] = [...ptrs.values()];
    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
    GS = { mode: 'pinch', d0: Math.hypot(p1.x - p2.x, p1.y - p2.y) || 1, a0: Math.atan2(p2.y - p1.y, p2.x - p1.x), dist0: cam.dist, yaw0: cam.yaw, grab: groundAt(mx, my), zoomOn: false, rotOn: false };
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
    if (cat === 'road' && item === 'round') { GS.plan = Wd.planRoundabout(g[0], g[1], rbSize); G.setGhostRing(GS.plan); costTag(e.clientX, e.clientY, GS.plan.ok ? '⭕ 💰 ' + fmt(GS.plan.cost) : GS.plan.msg, GS.plan.ok); }
    else if (cat === 'road' && curveMode && curveA) { GS.plan = Wd.planCurve(curveA.A[0], curveA.A[1], g[0], g[1], item, curveA.C); G.setGhostRoad(GS.plan); roadTags(GS.plan); edgePan(e.clientX, e.clientY); }
    else if (cat === 'road' && GS.moved && GS.start) {
      edgePan(e.clientX, e.clientY);
      if (curveMode) { const t = Wd.planCurve(GS.start[0], GS.start[1], g[0], g[1], item); GS.curveStage1 = !!t.noTangent; GS.plan = t.noTangent ? Object.assign(planRoad(GS.start[0], GS.start[1], g[0], g[1], item), { stage1: true }) : t; }
      else GS.plan = (elevMode || underMode) ? Wd.planElevated(GS.start[0], GS.start[1], g[0], g[1], item, underMode) : planRoad(GS.start[0], GS.start[1], g[0], g[1], item); G.setGhostRoad(GS.plan); roadTags(GS.plan); }
    else if (cat === 'zone') doPaint(g);
    else if (cat === 'bull') doBull(g, false);
    else if (cat === 'util' || cat === 'svc' || cat === 'park' || cat === 'cult' || cat === 'trans' || cat === 'simge') { GS.plan = planSvc(g[0], g[1], item, svcRot); G.setGhostBld(GS.plan); costTag(e.clientX, e.clientY, GS.plan.ok ? '💰 ' + fmt(GS.plan.cost) : GS.plan.msg, GS.plan.ok); }
  } else if (GS.mode === 'pinch' && ptrs.size >= 2) {
    const [p1, p2] = [...ptrs.values()], d = Math.hypot(p1.x - p2.x, p1.y - p2.y), a = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    let da = a - GS.a0; while (da > Math.PI) da -= 6.283; while (da < -Math.PI) da += 6.283;
    if (!GS.zoomOn && Math.abs(d / GS.d0 - 1) > .08) { GS.zoomOn = true; GS.d0 = d; GS.dist0 = cam.dist; }
    if (!GS.rotOn && Math.abs(da) > .22) { GS.rotOn = true; GS.a0 = a; GS.yaw0 = cam.yaw; da = 0; }
    if (GS.zoomOn) cam.dist = clamp(GS.dist0 * GS.d0 / d, 6, 120);
    if (GS.rotOn) { cam.yaw = GS.yaw0 - da; cam.yawT = cam.yaw; }
    updCam();
    const p = groundAt((p1.x + p2.x) / 2, (p1.y + p2.y) / 2); if (p && GS.grab) { cam.x += GS.grab[0] - p[0]; cam.z += GS.grab[1] - p[1]; clampCam(); updCam(); }
  }
});
function endPtr(e) {
  if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId);
  if (GS && GS.photo && ptrs.size === 0) { if (!GS.moved) setPhoto(false); GS = null; return; }
  if (GS && ptrs.size === 0) {
    const g = groundAt(e.clientX, e.clientY);
    if (GS.mode === 'pan' && !GS.moved && g) {
      if (cat === 'land') { const t = tileOf(g[0], g[1]); if (t >= 0) { pushUndo(); const r = buyTile(t); if (r === true) { sfx('win'); toast('🗺️ Yeni arazi alındı!'); afterChange(); G.buildTiles(true, tileBuyable, tileCost()); } else if (r !== 'owned') { toast(r); sfx('err'); } } }
      else { const o = pickAt(g[0], g[1]); if (o) showInfo(o); else hideInfo(); }
    } else if (GS.mode === 'act') {
      if (cat === 'road' && item === 'round') {
        const p = g && Wd.planRoundabout(g[0], g[1], rbSize);
        if (p && p.ok) { pushUndo(); Wd.commitRoundabout(p); sfx('road'); toast('⭕ Döner kavşak yapıldı'); afterChange(); } else if (p) { toast(p.msg); sfx('err'); }
        G.clearGhost();
      } else if (cat === 'road' && curveMode && curveA) {
        if (!GS.plan && g) GS.plan = Wd.planCurve(curveA.A[0], curveA.A[1], g[0], g[1], item, curveA.C);
        if (GS.plan && GS.plan.ok) { pushUndo(); Wd.commitCurve(GS.plan); sfx('road'); afterChange(); } else if (GS.plan) { toast(GS.plan.msg); sfx('err'); }
        curveA = null; G.clearGhost();
      } else if (cat === 'road' && curveMode && GS.moved && GS.plan && GS.plan.stage1) {
        curveA = { A: [GS.plan.A.x, GS.plan.A.z], C: [GS.plan.B.x, GS.plan.B.z] };
        G.setGhostRoad(GS.plan); setTimeout(() => roadTags(GS && GS.plan || null), 0); toast('〰️ Kavis yönü tamam. Şimdi bitiş noktasına sürükle ya da dokun.', 3000); sfx('tap');
      } else if (cat === 'road') {
        if (GS.moved && GS.plan) { if (GS.plan.ok) { pushUndo(); if (GS.plan.elev) { GS.plan.bs = bStyle; Wd.commitElevated(GS.plan); } else if (bStyle !== 'beam' && GS.plan.bridge > 0) { GS.plan.bs = bStyle; commitRoad(GS.plan); } else if (GS.plan.curve) Wd.commitCurve(GS.plan); else commitRoad(GS.plan); sfx('road'); afterChange(); } else { toast(GS.plan.msg); sfx('err'); } }
        else if (!GS.moved && g && item !== 'round') { const ns = nearestSeg(g[0], g[1], .3); if (ns && ns.d <= ns.hw + .3) { const s = R.segs.get(ns.id); if (s.t === item) showInfo({ kind: 'seg', id: ns.id }); else { pushUndo(); const r = upgradeSeg(ns.id, item); if (r === true) { sfx('road'); toast(`${ROADS[item].i} Yol ${ROADS[item].n} oldu`); afterChange(); } else { toast(r); sfx('err'); } } } }
        G.clearGhost();
      } else if (cat === 'util' || cat === 'svc' || cat === 'park' || cat === 'cult' || cat === 'trans' || cat === 'simge') {
        if (GS.plan) { if (GS.plan.ok) { pushUndo(); const p = GS.plan; commitSvc(p); sfx('build'); floatAt(p.x, p.z, '-' + fmt(p.cost)); afterChange(); } else { toast(GS.plan.msg); sfx('err'); } }
        G.clearGhost();
      } else if (cat === 'zone' && e.pointerType !== 'mouse') G.clearGhost();
    }
    costTag(); roadTags(null); GS = null; edgeVX = edgeVY = 0;
  } else if (ptrs.size === 1) { const [p] = [...ptrs.values()]; GS = { mode: 'pan', sx: p.x, sy: p.y, moved: true, grab: groundAt(p.x, p.y) }; }
}
cv.addEventListener('pointerup', endPtr); cv.addEventListener('pointercancel', endPtr);
cv.addEventListener('wheel', e => {
  e.preventDefault(); const g0 = groundAt(e.clientX, e.clientY);
  cam.dist = clamp(cam.dist * Math.exp(e.deltaY * .0012), 6, 120); updCam();
  const g1 = groundAt(e.clientX, e.clientY); if (g0 && g1) { cam.x += g0[0] - g1[0]; cam.z += g0[1] - g1[1]; } clampCam(); updCam();
}, { passive: false });
function clampCam() { cam.x = clamp(cam.x, -WH - 10, WH + 10); cam.z = clamp(cam.z, -WH - 10, WH + 10); }
let edgeVX = 0, edgeVY = 0;
function edgePan(x, y) { const m = 46; edgeVX = x < m ? -1 : x > G.VW - m ? 1 : 0; edgeVY = y < m + 60 ? -1 : y > G.VH - 200 && y < G.VH - 150 ? 1 : 0; }
function rotate(dir) { cam.yawT = Math.round((cam.yawT + dir * Math.PI / 4) / (Math.PI / 4)) * (Math.PI / 4); }
function updLock() { const b = $('bLock'); b.style.display = (cat === 'pan' || cat === 'land') ? 'none' : 'flex'; b.textContent = panLock ? '✋' : '✏️'; b.style.background = panLock ? 'rgba(46,134,222,.9)' : ''; }
$('bLock').onclick = () => { initAudio(); sfx('tap'); panLock = !panLock; updLock(); toast(panLock ? '✋ Kaydırma modu: tek parmakla haritayı gez' : '✏️ Çizim modu: tek parmakla inşa et'); };
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
function updOpts() { $('oMusic').textContent = OPT.music ? '🎵 Müzik: Açık' : '🎵 Müzik: Kapalı'; $('oSound').textContent = OPT.sound ? '🔊 Ses: Açık' : '🔇 Ses: Kapalı'; $('oGfx').textContent = OPT.gfx === 'high' ? '✨ Grafik: Yüksek' : '⚡ Grafik: Hızlı'; }
$('oSound').onclick = () => { initAudio(); OPT.sound = !OPT.sound; saveOpt(); updOpts(); sfx('tap'); };
$('oMusic').onclick = () => { initAudio(); OPT.music = !OPT.music; saveOpt(); updOpts(); if (!OPT.music) stopMusic(); };
let photo = false;
function setPhoto(on) { photo = on; document.body.classList.toggle('photo', on); if (on) { $('menu').style.display = 'none'; running = true; toast('📷 Fotoğraf modu: gezin, çıkmak için dokun', 2500); } }
$('mPhoto').onclick = () => { initAudio(); if (isPreview) return; setPhoto(true); };
$('oGfx').onclick = () => { OPT.gfx = OPT.gfx === 'high' ? 'low' : 'high'; saveOpt(); updOpts(); G.setQuality(OPT.gfx === 'high'); };
function openMenu() {
  $('mPhoto').style.display = isPreview ? 'none' : 'block';
  running = false; confirmNew = false; $('menu').style.display = 'flex'; $('loading').style.display = 'none'; $('maps').style.display = 'none';
  const has = (!isPreview && S()) || hasSave();
  $('mCont').style.display = has ? 'block' : 'none'; $('mNew').style.display = 'block';
  $('mNew').textContent = 'Yeni şehir'; $('mNew').className = has ? 'btn sec' : 'btn'; updOpts();
}
function loadWorldGfx() {
  G.resetWorldGfx(); G.clearTraffic(); G.clearPeople(); G.buildWater((S().terr || 1) >= 2);
  R.dirty.roads = R.dirty.blds = R.dirty.trees = R.dirty.cells = R.dirty.tiles = true;
}
function startGame() {
  isPreview = false; loadWorldGfx(); afterChange();
  $('menu').style.display = 'none'; running = true; paused = false; $('bPause').textContent = '⏸';
  selCat('pan');
}
$('mCont').onclick = () => {
  initAudio(); sfx('tap'); setTimeout(() => { if (OPT.music) startMusic(); }, 100);
  if (!isPreview && S()) { $('menu').style.display = 'none'; running = true; return; }
  try { if (Wd.deserialize(localStorage.getItem(SAVE_KEY))) { const hw = [...R.nodes.values()].find(n => !n.out); cam.x = -6; cam.z = 2; cam.dist = 34; startGame(); return; } } catch (e) { console.error(e); }
  toast('Kayıt açılamadı');
};
$('mNew').onclick = () => {
  initAudio(); sfx('tap'); undoStack.length = 0;
  if (((!isPreview && S()) || hasSave()) && !confirmNew) { confirmNew = true; $('mNew').textContent = 'Eminsen tekrar dokun (eski şehir silinir)'; return; }
  showMaps();
};
function showMaps() {
  const box = $('maps'); box.innerHTML = '<input id="cityName" maxlength="18" placeholder="Şehrinin adı" value="Yeni Şehir" style="width:100%;padding:12px;border-radius:12px;border:0;font-size:16px;font-weight:700;margin:6px 0;text-align:center"><div style="font-weight:700;margin:6px 0">🗺️ Harita seç</div>';
  for (const [k, m] of Object.entries(Wd.MAPS)) {
    const b = document.createElement('button'); b.className = 'btn sec mapb';
    b.innerHTML = `<span style="font-size:22px">${m.i}</span> <b>${m.n}</b><br><small style="opacity:.75;font-weight:500">${m.d}</small>`;
    b.onclick = () => { initAudio(); sfx('tap'); const nm = ($('cityName').value || '').trim().slice(0, 18); box.style.display = 'none'; newCity(k, nm); };
    box.appendChild(b);
  }
  box.style.display = 'block';
}
function newCity(mapType, nm) {
  setTimeout(() => { if (OPT.music) startMusic(); }, 100);
  undoStack.length = 0;
  Wd.newGame(mapType); S().name = nm || 'Yeni Şehir'; cam.x = -6; cam.z = 2; cam.dist = 34; cam.yaw = cam.yawT = Math.PI * .25; updCam();
  startGame(); save(); setTimeout(() => toast('Hoş geldin, Başkan! 👋 Otoban seni bekliyor.', 2600), 300);
};
$('mHelp').onclick = () => { const h = $('help'); h.style.display = h.style.display === 'block' ? 'none' : 'block'; };
document.addEventListener('visibilitychange', () => { if (document.hidden) { save(); if (running && !paused) togglePause(); } });
addEventListener('pagehide', save);
addEventListener('resize', G.resize);

// ---------- döngü ----------
let lastT = performance.now(), acc = 0, fpsAcc = 0, fpsN = 0, fpsChecked = false;
function frame(tm) {
  const dtMs = Math.min(100, tm - lastT); lastT = tm; const dt = dtMs / 1000;
  if (running && !fpsChecked && !document.hidden) { fpsAcc += tm - (frame.prev || tm); fpsN++; if (fpsN > 240) { const fps = 1000 / (fpsAcc / fpsN); fpsChecked = true; if (fps < 26 && OPT.gfx === 'high') { OPT.gfx = 'low'; saveOpt(); G.setQuality(false); toast('⚡ Telefonun için grafik "Hızlı" moda alındı (menüden değiştirebilirsin)', 3500); } } }
  frame.prev = tm;
  let simDt = 0;
  if (S() && (running || isPreview) && !paused) {
    if (running) { acc += dtMs * speed; let n = 0; while (acc >= 1000 && n++ < 4) { acc -= 1000; Wd.tick(); if (S().tk % 30 === 0) save(); afterChange(); feed(); checkQuests(); events(); } if (acc > 3000) acc = 0; }
    simDt = dt * (running ? speed : 1);
    G.updTraffic(simDt); G.updPeople(simDt);
  }
  if (isPreview && $('menu').style.display !== 'none') { cam.yawT += dt * .05; cam.yaw = cam.yawT; }
  if ((edgeVX || edgeVY) && GS && GS.mode === 'act') { const sp = cam.dist * .9 * dt, cy = Math.cos(cam.yaw), sy = Math.sin(cam.yaw); cam.x += (edgeVX * cy + edgeVY * -sy) * sp; cam.z += (-edgeVX * sy + edgeVY * -cy) * sp; clampCam(); }
  else { edgeVX = edgeVY = 0; }
  if (Math.abs(cam.yawT - cam.yaw) > 1e-3) cam.yaw += (cam.yawT - cam.yaw) * Math.min(1, dt * 8);
  updCam();
  if (S() && G.updConstruction(simDt, tm)) G.syncBuildings();
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
window.__mm = { Wd, R, G, cam, updCam, selCat, afterChange, get S() { return Wd.S; }, startGame: () => startGame() };
