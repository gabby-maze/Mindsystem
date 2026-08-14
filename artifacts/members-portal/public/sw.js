// Minimal service worker for PWA installability.
// No offline caching beyond the bare minimum — network-first passthrough.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network passthrough; required for install criteria in some browsers.
  event.respondWith(fetch(event.request));
});
