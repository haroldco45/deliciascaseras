/* Service Worker — Delicias' Caseras (Vibras Positivas HM) */
const CACHE = "delicias-caseras-v2";
const ASSETS = [
  "./", "./index.html", "./manifest.json",
  "./logo.jpg", "./icon-192.png", "./icon-512.png",
  "./desayuno-chicharron.jpg", "./calentado-salchichas.jpg",
  "./calentado-completo.jpg", "./desayuno-americano.jpg",
  "./bolitas-platano.jpg", "./desayuno-ranchero.jpg",
  "./chorizo-arepa.jpg", "./chuleta-cerdo.jpg",
  "./filete-apanado.jpg", "./mojarra-frita.jpg",
  "./pescado-frito.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(hit => hit ||
      fetch(e.request).then(res => {
        const copia = res.clone();
        if (e.request.url.startsWith(self.location.origin)) {
          caches.open(CACHE).then(c => c.put(e.request, copia));
        }
        return res;
      }).catch(() => caches.match("./index.html"))
    )
  );
});
