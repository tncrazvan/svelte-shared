
importScripts('libs/google/workbox.js');


self.addEventListener('install', function(e) {
  if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);

    workbox.routing.registerRoute(
        /.+/,
        // Use the cache if it's available.
        new workbox.strategies.CacheFirst({
            // Use a custom cache name.
            cacheName: 'app-cache',
            plugins: [
                new workbox.expiration.Plugin({
                    // Cache only 20 images.
                    maxEntries: 99999,
                    // Cache for a maximum of a week.
                    maxAgeSeconds: 5 * 365 * 24 * 60 * 60,
                })
            ],
        })
    );
  } else {
  console.log(`Boo! Workbox didn't load 😬`);
  }
 });

importScripts('libs/cache.js');


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('airhorner').then(function (cache) {
      return cache.addAll([
        "/",
        "worker.js",
        "index.html",
        "favicon.png",
        "build/extra.css",
        "build/bundle.css",
        "build/bundle.js",
        "manifest.json",

        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz0dL_nz.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz4dL_nz.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEz8dL_nz.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzMdL_nz.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzQdL_nz.woff2",
        "fonts/roboto/v20/KFOiCnqEu92Fr1Mu51QrEzwdL_nz.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc0CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc1CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc2CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc3CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc5CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51S7ACc-CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc0CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc1CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc2CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc3CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc5CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TjASc-CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc0CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc1CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc2CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc3CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc5CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TLBCc-CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic0CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic1CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic2CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic3CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic5CsTKlA.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2",
        "fonts/roboto/v20/KFOjCnqEu92Fr1Mu51TzBic-CsTKlA.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxEIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxFIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxGIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxHIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxIIzI.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxLIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1MmgVxMIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xEIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xFIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xGIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xHIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzI.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xLIzIFKw.woff2",
        "fonts/roboto/v20/KFOkCnqEu92Fr1Mu51xMIzIFKw.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfABc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfBBc4.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfBxc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfCBc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfChc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfCRc4EsA.woff2",
        "fonts/roboto/v20/KFOlCnqEu92Fr1MmYUtfCxc4EsA.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu4WxKOzY.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu5mxKOzY.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu72xKOzY.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu7GxKOzY.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu7mxKOzY.woff2",
        "fonts/roboto/v20/KFOmCnqEu92Fr1Mu7WxKOzY.woff2"
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
