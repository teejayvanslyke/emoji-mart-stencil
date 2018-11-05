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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/emoji-mart.js",
    "revision": "5f6871229314d05643860b8ef325065c"
  },
  {
    "url": "build/emoji-mart/bb8qprn2.entry.js",
    "revision": "6dbf3e429467d9ee780eb57be64ebb3c"
  },
  {
    "url": "build/emoji-mart/bb8qprn2.sc.entry.js",
    "revision": "6dbf3e429467d9ee780eb57be64ebb3c"
  },
  {
    "url": "build/emoji-mart/emoji-mart.feqflsqi.js",
    "revision": "7c4a9f2ecaa2743f7491f9737c0d7a65"
  },
  {
    "url": "build/emoji-mart/emoji-mart.ijguhgsb.js",
    "revision": "8a31948604813019e8632065b33585d6"
  },
  {
    "url": "build/emoji-mart/index.es5.js",
    "revision": "b2ffe4a6dc9fa15eec47b6a4f993a05f"
  },
  {
    "url": "build/emoji-mart/index.js",
    "revision": "4f9a74edd05cb8a98c8739f6e06d6dce"
  },
  {
    "url": "index.html",
    "revision": "0dfe81387cf3cbd43611e578e408575e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
