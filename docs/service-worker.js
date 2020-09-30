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
    "revision": "3702d3b9e92403172e8d1a6f09d9ca4e"
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
    "revision": "11f94ec4562cf79e956047549dabedba"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "33a4fdb51beffc6d67a9607473061bab"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "bda243dc7e7adc5564c3ebaffe9d9204"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "cf1a22a7fc6b14977e3b57f3abaa6b08"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "0e056059450638e5959bf3897c5019cb"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "dd734cd51198d5e7a0141137fa9c1f9a"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "5c10bb0ec58b91bfce330db40c024352"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "09563225604b82f5539416da15119127"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "b0904f25009d688c36de3f26c6d2d85d"
  },
  {
    "url": "pages/work/index.html",
    "revision": "00be50b7efbc74d66185ad52343e6d8a"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "8f2c8064ad493312d9a0ffef43aa67d9"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "acbda9f60d4731312cbc3519aca4b29c"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "1747ae5e2c2e599c74d6292d2ffb22a2"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "579d6fc010b1114c54b95764680b6aa8"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
