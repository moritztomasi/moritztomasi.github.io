/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a87129d4a5e079a10e63d3ff4720c65e"
  },
  {
    "url": "assets/404_icon.webp",
    "revision": "9f0fde33c1f7aa20ef446d2d1c918fcb"
  },
  {
    "url": "assets/android-chrome-192x192.png",
    "revision": "ddecc5eae3d4035b8302bd868b1ee4bb"
  },
  {
    "url": "assets/android-chrome-512x512.png",
    "revision": "321fbc34b892e3ac5a4e32fe04b37639"
  },
  {
    "url": "assets/apple-touch-icon.png",
    "revision": "2498c6be884f90d58c7829302e04e9c2"
  },
  {
    "url": "assets/favicon-16x16.png",
    "revision": "aa4e520944bef4144c16b021c6940b62"
  },
  {
    "url": "assets/favicon-32x32.png",
    "revision": "64507a825488fff96a0d5d84cf398de0"
  },
  {
    "url": "assets/favicon.ico",
    "revision": "f82e222d9b86c21c4f6f13a946f9de83"
  },
  {
    "url": "assets/logo.png",
    "revision": "a31861c368a5eb6b5652c9dea3b783b1"
  },
  {
    "url": "assets/posts/pizza.jpg",
    "revision": "45d73cac8064f03490a7613aeef9cff1"
  },
  {
    "url": "index.html",
    "revision": "f2d0acd4584f2ce7c777fe5a844be259"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "17594762a50645d92d1518748db8ec45"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "0b971b76a212841afefed5537cd6d53b"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "7728abca8dc8c62a4ba059b51e6fbec7"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "7eea22abea024f41ceca5c41a01d28fb"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "5c274b22cd49dba52165311528ffa018"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "3cccb7f0d7651129a1ccfd0184131afb"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "15c65beb485331b0b251b264d38c3af8"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "90574c23c70a0c52f6701e5088b958f4"
  },
  {
    "url": "pages/work/index.html",
    "revision": "4918be0b5f3cf0d27f1925bb6816676b"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "d672006ac59a4633de7afd43c464d315"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "0b931dca77122de0e2b33638b57bfb9f"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "633edcfa0ed7782efea85979bbcc7abd"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "973baa374b50c3967e95b581e0f9e63a"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
