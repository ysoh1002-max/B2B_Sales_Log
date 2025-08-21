const CACHE_NAME = 'win-win-log-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // 여기에 앱에 필요한 다른 파일들을 추가할 수 있습니다.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
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
