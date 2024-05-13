'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9dbf39d3567fd99cd738c27fd4365d3e",
"index.html": "591bbd698ad8a6b6899927353b73619b",
"/": "591bbd698ad8a6b6899927353b73619b",
"main.dart.js": "0b0f42b1e2df401759a020936b8d0307",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c249140f2335903f13efa00136375183",
"assets/AssetManifest.json": "b1a20bb44fb113a051daa578dfbc6f01",
"assets/NOTICES": "93b1617638f0b12429d510470c44f8d1",
"assets/FontManifest.json": "e7b672a95d73c631b13ed142372825b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "78b427a86f743bd49f7f14691c3d5baf",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/img_footer.png": "6eda7b74a601a8ef3a7f79b27a8976df",
"assets/assets/images/holding_phn.png": "5d000e2405c66846a72bcef205efe695",
"assets/assets/images/ic_hidden_password.svg": "dcdfc6d825478dff1e65012a3fe852a5",
"assets/assets/images/green_circle.svg": "bc18cc1bb4e1924cc86ce188debdeacc",
"assets/assets/images/footer_gradient.png": "7d908de1e871ebcbfce3d9dad6ed8c68",
"assets/assets/images/img_presale_mob.png": "7ca7a7c34887bb451099cf222a68b1db",
"assets/assets/images/img_three.png": "550892fb3c81d8b27eb7b44b251ec692",
"assets/assets/images/img_two.png": "8d46b0a6b3baa0a81e6201d60fde72e0",
"assets/assets/images/img_contact_us.png": "eb438a9cc60b140c55141858e1d2a5dc",
"assets/assets/images/desktop_bg.png": "9ae6f817212415abbbeaa65b4751be7e",
"assets/assets/images/tokners_img.png": "550f2f23ab3e15bacfa8a5c3adbf07ec",
"assets/assets/images/img_web_presale.png": "86d68913bfe6571686be37bda1b35ccf",
"assets/assets/images/img.png": "87f68b2674f16eaee8f61914c7b0033a",
"assets/assets/images/mob_colored_img.png": "2d42982eaa4114d12f4bac24e205a9b5",
"assets/assets/images/img_vector_presale_top.png": "e6cd7f1bfcd870f93c16f9649375c3d3",
"assets/assets/images/ic_eye.svg": "db3c30fb59cb995bd9428d15446814c9",
"assets/assets/images/crown.svg": "deb9e765aac547d96ca79c76e03f7171",
"assets/assets/images/img_white_rounded.png": "aa9c37574e76996e4b10705c104cb4fd",
"assets/assets/images/star.svg": "823ba531850b2717ca123e6fe16bd009",
"assets/assets/images/blue_circle.svg": "cae96ea3113eed9886794a98cc41c040",
"assets/assets/images/colored_img_web.png": "205e019974334f1cad71f1a5da56796e",
"assets/assets/images/logo.svg": "357fb5e40772a929625d7580d25a6c87",
"assets/assets/images/img_vector_presale_bottom.png": "274c0df63bed97692c78b05e69c6f388",
"assets/assets/images/img_one.png": "5f3a7837e1cee0ff7c889244df45821c",
"assets/assets/fonts/CenturyGothic.ttf": "09f6b2ba02572f19a7d7dd2b5f6494ad",
"assets/assets/fonts/Jost-Bold.ttf": "67d4fe2602174cb3c97346ce2b391a60",
"assets/assets/fonts/HankenGrotesk-Medium.ttf": "c5b0b9b7011812c69f0e876182536930",
"assets/assets/fonts/HankenGrotesk-Bold.ttf": "61097ecff9db3db742c750486eba0c5d",
"assets/assets/fonts/manrope.regular.otf": "93bcdc811b863241e3c2f2472764c5c5",
"assets/assets/fonts/manrope.semibold.otf": "809e36f11861afe527bda8afa0cce855",
"assets/assets/fonts/Jost-Medium.ttf": "01d92baf00ccba044b49ca4e0db57265",
"assets/assets/fonts/manrope.medium.otf": "313854186f7ab99de7ff2cd3a229435e",
"assets/assets/fonts/HankenGrotesk-SemiBold.ttf": "adf5a260825f6635b750c6ee14eebc4c",
"assets/assets/fonts/HankenGrotesk-Regular.ttf": "e94ea86690059e4c488a9a8cb789ba2f",
"assets/assets/fonts/manrope.bold.otf": "b2d6510428ad33823191bc451621d1a8",
"assets/assets/fonts/Jost-SemiBold.ttf": "05f7115c8a623b537852e7425c3fc019",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
