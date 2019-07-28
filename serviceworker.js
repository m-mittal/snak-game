var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/snak-game/index.html',
  '/snak-game/drogo.png',
  '/snak-game/egg.png',
  '/snak-game/egg-512.png',
  '/snak-game/drogo-192.png'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
	fetch(e.request).catch(()=>{
		return caches.match(e.request)
	}
	)
  );
});
