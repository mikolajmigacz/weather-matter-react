const CACHE_NAME = "weather-matter-v1";
const OFFLINE_URL = "/offline.html";
const STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/Icon-192.png",
  "/icons/Icon-512.png",
  "/offline.html",
  "/favicon.png"
];

// APIs that should trigger offline mode when failed
const API_PATTERNS = [
  "dataservice.accuweather.com",
  "firestore.googleapis.com",
  "locations/v1/cities"
];

self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching offline page and static assets');
      return cache.addAll(STATIC_RESOURCES);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

function isApiRequest(url) {
  return API_PATTERNS.some((pattern) => url.includes(pattern));
}

self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  if (isApiRequest(url)) {
    event.respondWith(
      fetch(event.request).catch(async () => {
        console.log('[SW] API request failed, showing offline page');
        const cache = await caches.open(CACHE_NAME);
        const offlinePage = await cache.match(OFFLINE_URL);
        if (offlinePage) {
          return offlinePage;
        }
        return new Response('Offline', { status: 503 });
      })
    );
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    }).catch(() => {
      if (event.request.destination === 'document') {
        return caches.match(OFFLINE_URL);
      }
      return new Response('Offline', { status: 503 });
    })
  );
});
