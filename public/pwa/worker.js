//importScripts('libs/google/workbox.js');
importScripts('libs/cache/cache.js');

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});


function notify(title,body,vibrate=[200, 100, 200],icon='/logo.png'){
  this.registration.showNotification(title, {
      body: body,
      icon: icon,
      vibrate: vibrate,
      tag: 'Sferanet'
  });
}

let vars = {
  notifications: {
    enabled: true
  }
};

self.addEventListener('message', function(event){
  switch(event.data.action){
      case "vars":
          let data = JSON.parse(event.data.body);
          for(let key in a) vars[key] = event.data.body[key];
      break;
  }
});

self.addEventListener('sync', function(event) {
  let request;
  (async function poll(){
      if(notifications === 'enabled'){
          console.log("Notification: ",notifications);
          notify("Sfera","Notifica periodica...");
      }
      setTimeout(poll,10000);
  })();
});


self.addEventListener('install', function(e) {
  console.log("Website saved locally.");
 });



self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('airhorner').then(function (cache) {
      return cache.addAll([
        /*"/",
        "index.html",
        "fonts/Framework7Icons-Regular.eot",
        "fonts/Framework7Icons-Regular.ttf",
        "fonts/Framework7Icons-Regular.woff",
        "fonts/Framework7Icons-Regular.woff2",
        "fonts/MaterialIcons-Regular.eot",
        "fonts/MaterialIcons-Regular.ttf",
        "fonts/MaterialIcons-Regular.woff",
        "fonts/MaterialIcons-Regular.woff2",
        "static/images/icons/apple-touch-icon.png",
        "static/images/icons/favicon.png",
        "bundle.css",
        "bundle.css.map",
        "bundle.js",
        "bundle.js.map",
        "extra.css",
        "framework7.css"*/
      ]);
    })
  );
});
