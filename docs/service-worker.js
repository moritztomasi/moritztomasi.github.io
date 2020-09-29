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
    "revision": "213f2a38fc61a3a20a823b5bd66663be"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "eb98801fcdf52aec48731d195f5dd4bb"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "cf49ed15d55f27febc369615bdd75d97"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "4d6e70e857cbf04ed1cad603d75fb9b2"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "e9063b57b6b96042ad2035794dc84e8c"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "fdb296923470f509cb0e5002570b2640"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "73acda089c2aac127444f0dde4fec19e"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "b567f4ee8cf0a17e1f8847bea383b870"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "b880edae3b8b52003640c401e207e078"
  },
  {
    "url": "pages/work/index.html",
    "revision": "6db7c49d036098cf998494997135a98c"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "f2a58e01effd0a8515a4606f28c10da4"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "faedee3ba52aae5cbab89f9f1b8ee0d3"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "b4a9016695663eee82b2528c019fe5b5"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "42d1caafbc8dcd86903e8ff46e81dd58"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
