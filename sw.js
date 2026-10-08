// Offline jen pro samotnou aplikaci (data se vždy berou z Disku). Nejdřív síť, při výpadku mezipaměť.
const CACHE = "imp-shell-v1";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;     // Google API a přihlášení mimo mezipaměť
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request)));
});
