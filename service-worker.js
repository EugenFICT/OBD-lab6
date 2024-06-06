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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "b246a9a58a569869d52a4b3abd3a78cb"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "b7649877e056225d34c41c6ae840b5bb"
  },
  {
    "url": "assets/css/0.styles.4f6bfcd3.css",
    "revision": "0af3f1503a0544373d00d63a52cce262"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-41.3f4a91f3.jpg",
    "revision": "3f4a91f3a9b785c0fc1f0c52609b9448"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-46.67167aa6.jpg",
    "revision": "67167aa66c3cf152d075331c0bcb45a1"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-49.d7fd6b90.jpg",
    "revision": "d7fd6b90779fe972ae3e003b160200a2"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-52.7858282b.jpg",
    "revision": "7858282b0db4b4be34364bd2da816f39"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-55.0dbb72ef.jpg",
    "revision": "0dbb72ef4c2c75ae561dfe2567250007"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-23-57.b4baa82c.jpg",
    "revision": "b4baa82ce9ccbc75e3e093aaa0343086"
  },
  {
    "url": "assets/img/photo_2024-06-06_18-24-01.7df1a767.jpg",
    "revision": "7df1a7677a648d83e139ca2c7e089158"
  },
  {
    "url": "assets/img/relational_scheme.50c04084.png",
    "revision": "50c0408448f359da6c0793e327723a83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35d89b73.js",
    "revision": "0f40f6c197dd3d5e3f2618dc66746103"
  },
  {
    "url": "assets/js/11.3c19866e.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.9a82e5ab.js",
    "revision": "669b3599ad6274169364ffc97b28fbb6"
  },
  {
    "url": "assets/js/13.49bd7085.js",
    "revision": "8bed980e342afb45536e3cd4b0553c22"
  },
  {
    "url": "assets/js/14.1b3343f2.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.0dcddaf1.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.2ed446b3.js",
    "revision": "98f8bfefc8fd54fd579a30ea90974f32"
  },
  {
    "url": "assets/js/17.fda359b2.js",
    "revision": "04cd68050e8be974233c602f7003400d"
  },
  {
    "url": "assets/js/18.0fc04f5f.js",
    "revision": "c635f8e1357175c2d592d9670bf3283b"
  },
  {
    "url": "assets/js/19.040c6f24.js",
    "revision": "013123ad730888cac1022a2ab24cb965"
  },
  {
    "url": "assets/js/2.d3067b7e.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.90003659.js",
    "revision": "c36a40d855f42ee248c03bac7025bc07"
  },
  {
    "url": "assets/js/21.e05a7bdf.js",
    "revision": "d89db354c183560dcbccc2f2a82b1de7"
  },
  {
    "url": "assets/js/22.c693ab35.js",
    "revision": "200546ef56e81cc719f662ba3f45a2b6"
  },
  {
    "url": "assets/js/23.cf94de76.js",
    "revision": "59f5c3e69ef05ffd4b67fd119c166066"
  },
  {
    "url": "assets/js/24.34b35d62.js",
    "revision": "e3a13fc945b23ba20fed61bbc813db92"
  },
  {
    "url": "assets/js/25.039587ec.js",
    "revision": "1b4196966d2455b775c47f807617c5bb"
  },
  {
    "url": "assets/js/27.9a1f882a.js",
    "revision": "2cfd2d40a7d1e99299514d0125139a89"
  },
  {
    "url": "assets/js/3.1e247dfc.js",
    "revision": "65573fad3b4f702aa69770ae835b98d2"
  },
  {
    "url": "assets/js/4.86a4386e.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.53518b16.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.234fb2a8.js",
    "revision": "02eabacfbb06d344213adaa7dcc22fbe"
  },
  {
    "url": "assets/js/7.7990c5f1.js",
    "revision": "3f7fa61d3aa5a271836c22f2a98033ed"
  },
  {
    "url": "assets/js/8.7de00471.js",
    "revision": "ec8f43b9878e92b5af70faee022ec4c9"
  },
  {
    "url": "assets/js/9.0fa86d82.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.05910fbb.js",
    "revision": "367b2261fb0e8e1fdd8eea42a04dc51f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ee786ab4f4c86f34117dd387d580bfe9"
  },
  {
    "url": "design/index.html",
    "revision": "e78e64935ff4ccf32b6eba6ea747987d"
  },
  {
    "url": "index.html",
    "revision": "6989fc433496e6ad3f922135d376cd9b"
  },
  {
    "url": "intro/index.html",
    "revision": "e919833fdad74aac6594dea319a87144"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "5abc417f6dd8f7b2b1a4dfd0d0981e15"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2cc1ae91e653bfde7b3a49c6e4bb2f5a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "76821e244e11c04993d738aaae5114f4"
  },
  {
    "url": "software/index.html",
    "revision": "f52e4f5e020661cacec734958d6aed88"
  },
  {
    "url": "test/index.html",
    "revision": "1fe1dd8657b7535daf48a345e1bd2566"
  },
  {
    "url": "use-cases/index.html",
    "revision": "be23fa0359fdddc2779fe2b8593cb764"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
