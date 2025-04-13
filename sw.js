const CACHE_NAME = 'invoice-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap',
  'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js',
  'https://pfst.cf2.poecdn.net/base/image/7c0c25efa2d14e3ef1f1b431dc153d1673a72b4b4a5946f426dcf13830f298b4?w=564&h=146',
  'https://pfst.cf2.poecdn.net/base/image/01ab55892d4ad9d42b0fcec384ec197a2c115b85704f3a6063c8cd461437573a?w=950&h=83'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});