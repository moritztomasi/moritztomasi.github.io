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
    "revision": "f85424945255cb65706356371895d54b"
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
    "revision": "1a506bc2656a6f11183767dddb21d060"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "manifest.json",
    "revision": "ca187b5e64e9f297f0e9be89516de223"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "84f87982e6f83d58923c79a4a8b61c38"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "31e3e90d5e092b6418f257a355e8c840"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "981a5a1f402bbead76bf78f307d1966c"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "72246127fcd61f69aa2ef24e1bce761c"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "b8f6ff9523ad294a8d0d6e285ecce518"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "f63c637a04e98697628b8cc537096337"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "bff1f80ec75c011591e03172effb541c"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "d8143cdb3196c2911aa8e45241289bc8"
  },
  {
    "url": "pages/work/index.html",
    "revision": "3c46a3c46531934c713c5c47a3cc6a09"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "efd0c7c3f568949a030f31a6f37978ee"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "55cc7633f192add758d994850abf9f01"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "0e39c98622e81cdde4572f15b8cd3094"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "51649be5ff22aea161d9ad4f32a8e64e"
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
