// Oyun verileri: yol tipleri, bölgeler, hizmet binaları, kilometre taşları

export const TILE = 36;          // bir arazi parçasının kenarı (birim)
export const TILES = 5;          // 5x5 arazi parçası
export const WORLD = TILE * TILES; // 180
export const WH = WORLD / 2;
export const START_TILE = 12;    // ortadaki parça (2,2)
export const FH = 0.38;          // kat yüksekliği

export const ROADS = {
  dirt: { n: 'Toprak yol', i: '🟫', w: 1.0, cost: 2, up: 0.002, speed: 0.9, lanes: 1, zone: true, ms: 0 },
  street: { n: 'Cadde', i: '🛣️', w: 1.6, cost: 5, up: 0.004, speed: 1.4, lanes: 1, zone: true, ms: 0 },
  avenue: { n: 'Bulvar', i: '🛤️', w: 2.6, cost: 12, up: 0.008, speed: 1.9, lanes: 2, zone: true, ms: 1 },
  highway: { n: 'Otoban', i: '🛣️', w: 3.4, cost: 25, up: 0.014, speed: 3.0, lanes: 2, zone: false, noise: true, ms: 2 },
};
export const ROAD_ORDER = ['dirt', 'street', 'avenue', 'highway'];

// per: hücre başına kişi (konut) ya da iş (diğerleri), seviyeye göre
export const ZONES = {
  r1: { n: 'Konut', sub: 'az yoğun', i: '🏡', c: '#79d36a', k: 'R', maxL: 5, lots: [[1, 2], [2, 2], [1, 1], [2, 3]], per: [3, 4, 5, 6, 7], ms: 0 },
  r2: { n: 'Konut', sub: 'yoğun', i: '🏢', c: '#2b9b3c', k: 'R', maxL: 5, lots: [[2, 2], [2, 3], [3, 3], [2, 4], [3, 5], [4, 4]], per: [10, 14, 19, 25, 32], ms: 1 },
  c1: { n: 'Ticaret', sub: 'az yoğun', i: '🏪', c: '#69b2ff', k: 'C', maxL: 3, lots: [[1, 2], [2, 2], [1, 1]], per: [3, 4, 5], ms: 0 },
  c2: { n: 'Ticaret', sub: 'yoğun', i: '🏬', c: '#2d6fd8', k: 'C', maxL: 3, lots: [[2, 3], [3, 3], [3, 4], [4, 5]], per: [7, 10, 13], ms: 2 },
  o: { n: 'Ofis', sub: 'iş merkezi', i: '🏙️', c: '#b48af0', k: 'O', maxL: 3, lots: [[2, 2], [2, 3], [3, 3], [3, 4]], per: [9, 13, 18], ms: 2 },
  i: { n: 'Sanayi', sub: 'fabrika, depo', i: '🏭', c: '#efbf3c', k: 'I', maxL: 3, lots: [[2, 3], [3, 3], [3, 4], [2, 2], [4, 5], [3, 6]], per: [3, 4, 5], ms: 0 },
};
export const ZONE_ORDER = ['r1', 'r2', 'c1', 'c2', 'o', 'i'];

// Seviye atlama koşulları (hedef seviye -> koşul)
export const LEVEL_REQ = {
  R: { 2: { hap: 50, edu: 1 }, 3: { hap: 57, edu: 2, health: 1 }, 4: { hap: 64, edu: 3, police: 1, garbage: 1 }, 5: { hap: 72, edu: 4, fire: 1 } },
  C: { 2: { hap: 50, edu: 1 }, 3: { hap: 62, edu: 3 } },
  O: { 2: { hap: 52, edu: 2 }, 3: { hap: 64, edu: 4 } },
  I: { 2: { hap: 45, edu: 1 }, 3: { hap: 55, edu: 3 } },
};

export const SVC = {
  wind: { n: 'Rüzgâr türbini', i: '🌬️', cat: 'util', cost: 1200, up: 0.2, w: 1, d: 1, elec: 25, ms: 0 },
  coal: { n: 'Kömür santrali', i: '🏭', cat: 'util', cost: 7000, up: 1.2, w: 4, d: 3, elec: 260, poll: 12, ms: 0 },
  solar: { n: 'Güneş tarlası', i: '☀️', cat: 'util', cost: 6000, up: 0.6, w: 4, d: 4, elec: 140, ms: 2 },
  wtower: { n: 'Su kulesi', i: '💧', cat: 'util', cost: 900, up: 0.15, w: 1, d: 1, water: 30, ms: 0 },
  pump: { n: 'Su pompa istasyonu', i: '🚰', cat: 'util', cost: 3500, up: 0.6, w: 2, d: 2, water: 220, needWater: true, ms: 1 },
  clinic: { n: 'Sağlık ocağı', i: '🩺', cat: 'health', cost: 2000, up: 0.5, w: 2, d: 2, r: 16, ms: 0 },
  hosp: { n: 'Hastane', i: '🏥', cat: 'health', cost: 9000, up: 1.8, w: 4, d: 3, r: 34, ms: 2 },
  ilk: { n: 'İlkokul', i: '🎒', cat: 'edu', lvl: 1, cost: 2500, up: 0.5, w: 3, d: 2, r: 16, ms: 0 },
  orta: { n: 'Ortaokul', i: '📘', cat: 'edu', lvl: 2, cost: 4000, up: 0.8, w: 3, d: 3, r: 22, ms: 1 },
  lise: { n: 'Lise', i: '🎓', cat: 'edu', lvl: 3, cost: 7000, up: 1.2, w: 4, d: 3, r: 28, ms: 2 },
  uni: { n: 'Üniversite', i: '🏛️', cat: 'edu', lvl: 4, cost: 20000, up: 2.6, w: 6, d: 5, r: 70, ms: 3 },
  police: { n: 'Polis karakolu', i: '🚓', cat: 'police', cost: 2000, up: 0.5, w: 2, d: 2, r: 18, ms: 0 },
  fire: { n: 'İtfaiye', i: '🚒', cat: 'fire', cost: 2000, up: 0.5, w: 2, d: 3, r: 18, ms: 0 },
  park: { n: 'Mahalle parkı', i: '🌳', cat: 'park', cost: 400, up: 0.08, w: 2, d: 2, r: 9, val: 8, ms: 0 },
  play: { n: 'Çocuk parkı', i: '🛝', cat: 'park', cost: 600, up: 0.1, w: 2, d: 2, r: 9, val: 8, ms: 0 },
  plaza: { n: 'Meydan', i: '⛲', cat: 'park', cost: 1500, up: 0.2, w: 3, d: 3, r: 13, val: 11, ms: 1 },
  bigpark: { n: 'Şehir parkı', i: '🏞️', cat: 'park', cost: 4000, up: 0.4, w: 5, d: 5, r: 22, val: 16, ms: 2 },
  cop: { n: 'Çöp toplama merkezi', i: '🗑️', cat: 'garbage', cost: 3000, up: 0.6, w: 3, d: 3, r: 45, poll: 4, ms: 0 },
  cami: { n: 'Cami', i: '🕌', cat: 'culture', cost: 5000, up: 0.3, w: 3, d: 3, r: 20, val: 10, ms: 0 },
  kutup: { n: 'Kütüphane', i: '📚', cat: 'culture', cost: 3000, up: 0.5, w: 2, d: 2, r: 18, val: 7, ms: 1 },
  muze: { n: 'Müze', i: '🖼️', cat: 'culture', cost: 9000, up: 0.9, w: 4, d: 3, r: 35, val: 12, tour: 6, ms: 2 },
  busdep: { n: 'Otobüs garajı', i: '🚌', cat: 'trans', cost: 5000, up: 0.8, w: 3, d: 3, ms: 0 },
  busstop: { n: 'Otobüs durağı', i: '🚏', cat: 'trans', cost: 300, up: 0.05, w: 1, d: 1, r: 10, ms: 0 },
  metro: { n: 'Metro istasyonu', i: 'Ⓜ️', cat: 'trans', cost: 12000, up: 2, w: 2, d: 2, r: 18, ms: 2 },
  stadium: { n: 'Stadyum', i: '🏟️', cat: 'park', cost: 15000, up: 2, w: 6, d: 5, r: 45, val: 14, ms: 3 },
};

export const MILES = [
  { pop: 0, title: 'Köy' },
  { pop: 300, title: 'Kasaba', bonus: 10000, msg: 'Artık bir Kasaba’sın! Bulvar, yoğun konut ve ortaokul açıldı.' },
  { pop: 1500, title: 'İlçe', bonus: 25000, msg: 'İlçe oldun! Otoban, ofis, yoğun ticaret, lise ve hastane açıldı.' },
  { pop: 5000, title: 'Şehir', bonus: 50000, msg: 'Artık bir Şehir’sin! Üniversite ve stadyum açıldı.' },
  { pop: 15000, title: 'Büyükşehir', bonus: 100000, msg: 'Büyükşehir oldun! Muhteşem!' },
  { pop: 40000, title: 'Metropol', bonus: 250000, msg: '🏙️ METROPOL! Gerçek bir dev şehir kurdun!' },
];
export const TILE_PERMITS = [2, 4, 6, 9, 14, 20, 25]; // kilometre taşına göre sahip olunabilecek parça sayısı (indeks = ms)
export const TILE_COST = 15000;

export const CATS = [
  { id: 'pan', n: 'Gez', i: '✋' },
  { id: 'road', n: 'Yol', i: '🛣️' },
  { id: 'zone', n: 'Bölge', i: '🏘️' },
  { id: 'util', n: 'Elektrik·Su', i: '⚡' },
  { id: 'svc', n: 'Hizmet', i: '🏥' },
  { id: 'park', n: 'Park', i: '🌳' },
  { id: 'cult', n: 'Kültür', i: '🕌' },
  { id: 'trans', n: 'Ulaşım', i: '🚌' },
  { id: 'land', n: 'Arazi', i: '🗺️' },
  { id: 'bull', n: 'Yık', i: '🧨' },
];

export const POLICIES = {
  geri: { n: '♻️ Geri dönüşüm', d: 'Çöp toplama alanı %50 büyür', cost: 1.5 },
  yesil: { n: '🌿 Yeşil şehir', d: 'Park ve kültür etkisi %50 artar', cost: 1.5 },
  filtre: { n: '🏭 Sanayi filtreleri', d: 'Kirlilik yarıya iner, sanayi geliri %10 azalır', cost: 1 },
  turizm: { n: '📸 Turizm tanıtımı', d: 'Müze ve stadyum turist geliri ikiye katlanır', cost: 2 },
  toplu: { n: '🎫 Ücretsiz toplu taşıma', d: 'Toplu taşıma olan mahallelerde mutluluk +4', cost: 2.5 },
  gece: { n: '🌃 Gece hayatı', d: 'Ticaret talebi artar, evlerde mutluluk -2', cost: 0 },
  burs: { n: '🎓 Eğitim bursu', d: 'Okulların etki alanı %30 büyür', cost: 2.5 },
};
