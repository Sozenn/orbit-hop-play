// Servis çalışanı: sayfa ve kod her zaman önce ağdan (güncel sürüm), internet yoksa önbellekten; simgeler önbellek öncelikli.
const CACHE = 'bilye-atolyesi-v6';
const FILES = ["./game.js","./icons/apple-touch-icon.png","./icons/icon-192.png","./icons/icon-512.png","./index.html","./manifest.webmanifest","./style.css"];
const HEAVY = /\.(png|jpg|webp)$/i;
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(FILES.map((f) => fetch(new Request(f, { cache: 'reload' })).then((r) => (r.ok ? c.put(f, r) : null)).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('bilye-atolyesi-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (HEAVY.test(url.pathname)) {
    e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((r) => { if (r.ok && r.status === 200) { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); } return r; })));
    return;
  }
  e.respondWith(fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then((r) => {
    if (r.ok && r.status === 200) { const c = r.clone(); caches.open(CACHE).then((x) => x.put(req, c)); }
    return r;
  }).catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('./index.html'))));
});
