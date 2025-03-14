'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a34aae2fb7f7ac9bc2ab96253c51afef",
"assets/AssetManifest.bin.json": "5e6055c0d88b018835dee63e38298719",
"assets/AssetManifest.json": "e8199770746d5e16a94bef11eb904bf3",
"assets/assets/audio/correct.mp3": "fd3763e0354565e1893f006a110b0ef7",
"assets/assets/audio/incorrect.mp3": "1a7e6662abd24421e0ef0e9bd31abd23",
"assets/assets/audio/soundtrack.mp3": "013f7b162a67450894f45be500d3a932",
"assets/assets/images/5.png": "4bf0608ab997add88f2927739929399a",
"assets/assets/images/background.jpg": "19fc97726685094b0ca3e9c933556f2e",
"assets/assets/images/background1.jpg": "d2f5418200e6c4a182b37072ad8162e2",
"assets/assets/images/backgroungforanswer.png": "6f3f72641222c82fff2a3bebfdb4ef00",
"assets/assets/images/back_button.png": "676605db2e4b0049c09f8a36ca0ade4e",
"assets/assets/images/check.png": "4d0f478f84eccaa09b8f03eee745f352",
"assets/assets/images/confetti.gif": "550a1d6d0c7ce5e8fc75b04b3eb1f011",
"assets/assets/images/flashcards/left/00.png": "10c3dd6ff2ecf5e5d164d698823059ef",
"assets/assets/images/flashcards/left/10.png": "713dfb766eecb24b1ae4a3654ab5df1f",
"assets/assets/images/flashcards/left/20.png": "1bb3eadddaf49588367f380cd7e68625",
"assets/assets/images/flashcards/left/30.png": "1cf80afd68e417e15f1a9f3ecc43d21d",
"assets/assets/images/flashcards/left/40.png": "c48a4d2ac85dd3b14c4f9af6ff15b9c8",
"assets/assets/images/flashcards/left/50.png": "a6dd2b89740f3cf214e2eebcdd46ec7e",
"assets/assets/images/flashcards/left/60.png": "a54cd63824782b8acdc9552a87345256",
"assets/assets/images/flashcards/left/70.png": "8831600367f56817e972ed2066a310a3",
"assets/assets/images/flashcards/left/80.png": "7849def858ae18196165f1ceb9a4234d",
"assets/assets/images/flashcards/left/90.png": "197460be36ce320dd10ecf002b7d3ca6",
"assets/assets/images/flashcards/right/0.png": "4481e72067200feb3c933f046ccddd5e",
"assets/assets/images/flashcards/right/1.png": "b44954a64c4dfb12f69d888098b5c9f0",
"assets/assets/images/flashcards/right/2.png": "faabfd9b77e4414c50f174a4e396fc9b",
"assets/assets/images/flashcards/right/3.png": "cecf0ca3b78568dc8f4e3c87feeeb7ad",
"assets/assets/images/flashcards/right/4.png": "389374fdccc0844dfa0af422f28b92e5",
"assets/assets/images/flashcards/right/5.png": "b21e78b05fcd5160bd1d9512a930ea41",
"assets/assets/images/flashcards/right/6.png": "f010ea9341b007d4e519e857b02fa6b9",
"assets/assets/images/flashcards/right/7.png": "9437a5f6f529f48ce36b6b22a609e77e",
"assets/assets/images/flashcards/right/8.png": "94e6ec45f5d973b5a16e835c22777c74",
"assets/assets/images/flashcards/right/9.png": "e3753577d75bd7d6b2f2460172cc23ff",
"assets/assets/images/iconbackground.png": "8777e40d6b1128bc32eb2c7fb70ececd",
"assets/assets/images/icon_choise_number1.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number2.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number3.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number4.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_choise_number5.png": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/icon_type_view.jpg": "19670df89ea7e076be4a156f4aef5c7e",
"assets/assets/images/incorrect.gif": "61641556bd4157249d7f741cb88f746d",
"assets/assets/images/listening.png": "b49a529a7ad4872ce102b00968c8d6bd",
"assets/assets/images/pokeball.png": "465c50a0584e76d1f2f979308409d96a",
"assets/assets/images/pokeball_close.png": "45da7cc6f10fa8c301aefaabeee3460d",
"assets/assets/images/pokeball_dark.png": "51b8b7a4abb1e7fc41b65b173ab6f408",
"assets/assets/images/pokeball_open.png": "e4501836a398324aefda31a95937af25",
"assets/assets/images/soroban_h.png": "1cf6243766b73815ac67cb14cbdae58c",
"assets/assets/images/topic1/icon_choise_number1.png": "608abdfcabdc714ba17a34e46eadb61b",
"assets/assets/images/topic1/icon_choise_number2.png": "fbce4a91e36183b711612772d2c8d22d",
"assets/assets/images/topic1/icon_choise_number3.png": "bd6e135806c32a0c23966ca91aac2b7c",
"assets/assets/images/topic1/icon_choise_number4.png": "9c593f1c7ea0a90efce483febfe60a14",
"assets/assets/images/topic1/icon_choise_number5.png": "a158efd3fdb30f60e3f622a977d56c3b",
"assets/assets/images/topic1/icon_type_view.jpg": "19670df89ea7e076be4a156f4aef5c7e",
"assets/assets/images/topic2/icon_choise_number1.png": "e2f9152e45ea5da5f443803b65b74aa6",
"assets/assets/images/topic2/icon_choise_number2.png": "715cd24dcaa38aa67b8ea698c4d7a170",
"assets/assets/images/topic2/icon_choise_number3.png": "fcdd9ce6c942aa00d1c50ba12b8bdc73",
"assets/assets/images/topic2/icon_choise_number4.png": "0ce9a4e5e01c4af55bdf891434292cc1",
"assets/assets/images/topic2/icon_choise_number5.png": "34363a120fb960a47a9aa454cac52e51",
"assets/assets/images/topic2/icon_type_view.jpg": "8d9f95aab55a90e45ee87280bc235eb8",
"assets/assets/images/topic3/icon_choise_number1.png": "6e751317b7367bab105cef7a9f19f8c2",
"assets/assets/images/topic3/icon_choise_number2.png": "50e28fb5d5bc5cbd2d2d3460f6e938ae",
"assets/assets/images/topic3/icon_choise_number3.png": "8b2eed438494a5b0f05c991bcb276343",
"assets/assets/images/topic3/icon_choise_number4.png": "155eed91a98e821264ec1d8b2f827058",
"assets/assets/images/topic3/icon_choise_number5.png": "e3521f3ea75ede1e88b397ef599a0790",
"assets/assets/images/topic3/icon_type_view.jpg": "99be38a1378bf8b0e49e7d35eb427cba",
"assets/assets/images/topic4/icon_choise_number1.png": "af302caf915f2880c3527518fb4deeac",
"assets/assets/images/topic4/icon_choise_number2.png": "f15cef85bc8a388d26bf3bbf435df75c",
"assets/assets/images/topic4/icon_choise_number3.png": "82241cbcce1f5e98c6ea5a69b2503ca0",
"assets/assets/images/topic4/icon_choise_number4.png": "e3488a414daef03f41e7187e49b33150",
"assets/assets/images/topic4/icon_choise_number5.png": "32847566afee818cf9712ac8a74770c5",
"assets/assets/images/topic4/icon_type_view.jpg": "27e1e60caa9010d04e3afe004c1321ee",
"assets/assets/images/topic5/icon_choise_number1.png": "969a6876ee14e5354c0c42fbddb84d60",
"assets/assets/images/topic5/icon_choise_number2.png": "b77a54c8af26affec39d944c840222b8",
"assets/assets/images/topic5/icon_choise_number3.png": "edb08a85398340a1d6cbcbf59525c198",
"assets/assets/images/topic5/icon_choise_number4.png": "78a1d04108884abdc0773ec7e3b1c0a4",
"assets/assets/images/topic5/icon_choise_number5.png": "1cefa9de934f1ba02aa36f676fd5f7e4",
"assets/assets/images/topic5/icon_type_view.jpg": "c67bff36ef3b11d3192695066a82156d",
"assets/assets/images/topic6/icon_choise_number1.png": "c95e2bc8a26f3323529598774371ac8b",
"assets/assets/images/topic6/icon_choise_number2.png": "e0ad02548fd0c3b1cfee2f22d49f5614",
"assets/assets/images/topic6/icon_choise_number3.png": "3d13e74212d5bc2cfd986375128999b2",
"assets/assets/images/topic6/icon_choise_number4.png": "a6364e07e2bd24edf6c2a40ec847a80a",
"assets/assets/images/topic6/icon_choise_number5.png": "202d3ebdf10cf92a69f43787ff470966",
"assets/assets/images/topic6/icon_type_view.jpg": "aa7ee695c04e72c681d929ca2797b8b3",
"assets/assets/images/topic7/icon_choise_number1.png": "808824df508d44ee9af2522fb8749dd0",
"assets/assets/images/topic7/icon_choise_number2.png": "ee83fe3577e1b4ce7c9ce91be0d7f0b5",
"assets/assets/images/topic7/icon_choise_number3.png": "22728c4965b9c12ce855cf48e3e2ad54",
"assets/assets/images/topic7/icon_choise_number4.png": "1a807caab915669ca6b8a624913bab0e",
"assets/assets/images/topic7/icon_choise_number5.png": "9a56083e09ad9c27355a0aea2c81fdc6",
"assets/assets/images/topic7/icon_type_view.jpg": "a5c83bb79381001eec999fb2bdaba21b",
"assets/assets/images/topic8/icon_choise_number1.png": "d79b61138a6e0ff8d923b8ca38f3a212",
"assets/assets/images/topic8/icon_choise_number2.png": "a10785cf7248757d95753241573de9bc",
"assets/assets/images/topic8/icon_choise_number3.png": "15635b2df381631c1cd6d73c4a161719",
"assets/assets/images/topic8/icon_choise_number4.png": "8442c1b4436ea8914d91ba68c83d5d4d",
"assets/assets/images/topic8/icon_choise_number5.png": "b65cd8fe70ff1842b5f51eb2ec8bce33",
"assets/assets/images/topic8/icon_type_view.jpg": "6159e42ab48341af992184c1987cfe9d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2e68a8d086c11f2e027e0963138b9acc",
"assets/NOTICES": "cc5c9383e7371a4ada34d1add84cd0e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "523e27361f225f82c2aa6c80821c4900",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9a934bf5aad15df8ca67dc64c5a1e05d",
"/": "9a934bf5aad15df8ca67dc64c5a1e05d",
"main.dart.js": "492901690ba269d6446327c79dc6bdcc",
"manifest.json": "3c71077d4ba63fdcee2e543af37a2ed0",
"version.json": "08715f3e6e51f29b411d59c6ab00ba6e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
