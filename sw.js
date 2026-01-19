// sw.js - 一个最简单的 Service Worker，骗过浏览器检查即可
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ephone-store').then((cache) => cache.addAll([
      './index.html',
      './style.css',
      './script.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});