/* Service Worker — Delicias' Caseras (Vibras Positivas HM) */
const CACHE = "delicias-caseras-v1";
const ASSETS = [
  "./", "./index.html", "./manifest.json",
  "./img/logo.jpg", "./img/icon-192.png", "./img/icon-512.png",
  "./img/desayuno-chicharron.jpg", "./img/calentado-salchichas.jpg",
  "./img/calentado-completo.jpg", "./img/desayuno-americano.jpg",
  "./img/bolitas-platano.jpg", "./img/desayuno-ranchero.jpg",
  "./img/chorizo-arepa.jpg", "./img/chuleta-cerdo.jpg",
  "./img/filete-apanado.jpg", "./img/mojarra-frita.jpg",
  "./img/pescado-frito.jpg"
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

