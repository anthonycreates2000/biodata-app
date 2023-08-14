const CACHE_NAME = "biodata-pwa-project-v2";

let urlsToCache = [
    "/",
    "/index.html",
    "./service-worker.js",
    "/manifest.json",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://fonts.gstatic.com/s/materialicons/v70/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
    "/pages/about.html",
    "/pages/contact.html",
    "/pages/home.html",
    "/pages/images-portfolio.html",
    "/pages/nav.html",
    "/materialize/js/materialize.min.js",
    "/materialize/css/materialize.min.css",
    "/css/pages/about-page.css",
    "/css/pages/contact.css",
    "/css/pages/home-page.css",
    "/css/pages/portfolio-page.css",
    "/css/card-component.css",
    "/css/footer.css",
    "/css/header.css",
    "/css/image-card-component.css",
    "/css/main.css",
    "/image/3D-portfolio-projects/android-and-pacman.jpg",
    "/image/3D-portfolio-projects/exterior.jpg",
    "/image/3D-portfolio-projects/flour-sack.jpg",
    "/image/3D-portfolio-projects/interior-modified.jpg",
    "/image/3D-portfolio-projects/robot-dan-hujan.jpg",
    "/logo_192x192.png",
    "/logo_512x512.png",
    "/image/contact/gmail.png",
    "/image/contact/instagram.jpg",
    "/image/contact/line.jpg",
    "/image/tech-skills/3D-modelling.jpg",
    "/image/tech-skills/android.jpg",
    "/image/tech-skills/machine-learning.jpg",
    "/image/tech-skills/unity.jpg",
    "/image/tech-skills/website-development.jpg",
    "/image/about-background.jpg",
    "/image/profile-picture.jpg",
    "/image/web-components.jpg",
    "/image/service-worker.png",
    "/image/xhr.jpg",
    "/js/classes/basic-description-class.js",
    "/js/classes/image-caption-class.js",
    "/js/classes/image-description-class.js",
    "/js/classes/size-class.js",
    "/js/page/about.js",
    "/js/page/contact.js",
    "/js/page/home.js",
    "/js/page/images-portfolio.js",
    "/js/page/init-pages.js",
    "/js/web-component/card/abstract-card-component.js",
    "/js/web-component/card/basic-card-component.js",
    "/js/web-component/card/image-card-component.js",
    "/js/web-component/grid-component.js",
    "/js/nav.js",
    "/js/xml-http-request.js"
];

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log("Inserting caches...");
            return cache.addAll(urlsToCache);
        })
        .catch((reason) => {
            console.log(reason);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches
        .match(event.request, { cacheName: CACHE_NAME })
        .then(function(response) {
          if (response) {
            console.log("ServiceWorker: Currently, we're using cache: ", response.url);
            return response;
          }
          console.log(
            "ServiceWorker: Loading assets from server: ",
            event.request.url
          );
          return fetch(event.request);
        })
    );
  });
  self.addEventListener("activate", function(event){
      event.waitUntil(
          caches.keys().then(function(cacheNames){
            return Promise.all(
              cacheNames.map(function(cacheName){
                if (cacheName != CACHE_NAME){
                  console.log("ServiceWorker: cache " + cacheName + " erased!");
                  return caches.delete(cacheName);
                }
              })
            )
          }
        )
      )
  });