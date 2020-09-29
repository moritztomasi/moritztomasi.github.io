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
    "revision": "d862afcbdfe9b1a67945c741b18361f6"
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
    "revision": "949d8c35ad5e7eda93d628c13d37469b"
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
    "revision": "38481bc80983ba227c3d617000e5dc3e"
  },
  {
    "url": "pages/imprint/index.html",
    "revision": "9dc397e319ce35ad6dbd42593e846006"
  },
  {
    "url": "pages/reading/index.html",
    "revision": "2452c0bca5e6f87386527d44c5733e24"
  },
  {
    "url": "pages/travel/iceland/index.html",
    "revision": "fcfaaf10db49f4354be91e97fe51deeb"
  },
  {
    "url": "pages/travel/index.html",
    "revision": "3f39ed49da5e7460926038c6e55fc50a"
  },
  {
    "url": "pages/travel/israel/index.html",
    "revision": "b0c4b51bfa7f03c7365e8c2859188847"
  },
  {
    "url": "pages/travel/japan/index.html",
    "revision": "65822aaa2b1f06a8af0b4c5fe2107c16"
  },
  {
    "url": "pages/travel/philippines/index.html",
    "revision": "2ec0464a2950efb045603cac62d47eb0"
  },
  {
    "url": "pages/work/index.html",
    "revision": "cf3ae2536c8429510a6caa3e917cefed"
  },
  {
    "url": "posts/assert-in-guard-clauses/index.html",
    "revision": "03c17fadb7ec9047c0f2257c8a9af04d"
  },
  {
    "url": "posts/dark-skyr-mousse/index.html",
    "revision": "a9dc9c29781c5a821ae2e1ea1baa5a86"
  },
  {
    "url": "posts/neapolitan-pizza-dough/index.html",
    "revision": "61c30eef3698e64ff693ae992aff9d8e"
  },
  {
    "url": "posts/white-skyr-mousse/index.html",
    "revision": "df3e94098fa6203cf72fff91a77af8ea"
  },
  {
    "url": "theme.css",
    "revision": "13090b396bc19eed5297c20e51b2834c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
