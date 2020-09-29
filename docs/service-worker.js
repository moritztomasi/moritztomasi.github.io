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
    "revision": "f4c5572774e574dad15e412a36fc6ee3"
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
    "revision": "81b6fd01111200f6848492e29bce5e31"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "manifest.json",
    "revision": "f95395e21d497e068c0b0be4fd382e15"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "b2327e3c46f01d9b479bdf4ad8b28b0e"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "07ea174731e766132645c50bd2b99548"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "4501da9bfcbe8d9c683240d5658227f7"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "4111969891a2df209fd185c1c6dbe626"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "52b9199b5e3fbd2c0d19ce190fe2d260"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "6676f40a76155fcf8b801bf86fc20c7c"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "92e22639bb4b927e389337a7f93d23b5"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "1d1f494f9b83576bdd0ee9e58602d360"
  },
  {
    "url": "pages/work/index.html",
    "revision": "5a7b0d320c5fb337a497d07647473407"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "247988edd4ba39cb2fc5b4b7fecec237"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "5cf577584c4550f2807d880891dd7fd8"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "26ec9848c481de986ce9b39d318090af"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "92314600e785204e261373ac6e0d3986"
  },
  {
    "url": "style.css",
    "revision": "4eabb5187a291e6cbf3aa518a6c64260"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
