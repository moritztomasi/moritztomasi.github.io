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
    "url": "cv/theme/resume_DE/index.html",
    "revision": "3cc9f59c151a386a3a16b04794f0e076"
  },
  {
    "url": "cv/theme/resume_EN/index.html",
    "revision": "c8d35d940dc0b2a8800cd080df36396d"
  },
  {
    "url": "index.html",
    "revision": "d0cc25d5844b575820fe46dee79da65f"
  },
  {
    "url": "js/alpine.js",
    "revision": "c38420e4928c75940dc22c893b08c017"
  },
  {
    "url": "pages/bio/index.html",
    "revision": "7056ca0c7ee534353ddb39852e285254"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "44e0942677df1449417b1c986a9202ad"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "ff126e5afd4bdd0878d6cd04ffb577d2"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "2eca5f1880b79d47d8a6ba76497d8975"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "7103b2898a76bd648d28652edf77ec8f"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "e85bc87e661abda048520cdb9ab83998"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "2a6a79c256db6dd2c3203b3872821850"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "86ae619a24182746431d2a45dc9d8e3f"
  },
  {
    "url": "pages/work/index.html",
    "revision": "fabeaf0878038dcabc09c2f8ee12d416"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "605aad53af0eb98bc93a920a4d48eaab"
  },
  {
    "url": "recipes/dark-skyr-mousse/index.html",
    "revision": "f8d9b996e3f8326464fc161cae7e2806"
  },
  {
    "url": "recipes/neapolitan-pizza-dough/index.html",
    "revision": "0285e41a232876e330cae5ad98444845"
  },
  {
    "url": "recipes/white-skyr-mousse/index.html",
    "revision": "f4a439e45857a0f823c6988e49341d5d"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
