const CACHE_NAME = 'simple-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './https://i.ibb.co/V6tRbh9/Lamborghini-Wallpaper.jpg'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
