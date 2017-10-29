self.addEventListener('install', function (event) {
  console.log('SW Installed');
  event.waitUntil(
    caches.open('static')
      .then(function (cache) {
        // cache.add('/');
        // cache.add('/index.html');
        // cache.add('/src/js/app.js');
        cache.addAll([
          '/',
          '/index.html',
          '/main.js',
          '/style.css',
          '/src/1.mp3',
          '/src/2.mp3',
          '/src/3.mp3',
          '/src/4.mp3',
          'https://fonts.googleapis.com/css?family=Raleway:400,700'
        ]);
      })
  );
});

self.addEventListener('activate', function () {
  console.log('SW Activated');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        if (res) {
          return res;
        } else {
          return fetch(event.request);
        }
      })
  );
});