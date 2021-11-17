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
    "url": "404.html",
    "revision": "a8131bf102b0c11195c2440245322750"
  },
  {
    "url": "archives/index.html",
    "revision": "b71777532a50e63f93471868d93c9df4"
  },
  {
    "url": "assets/css/0.styles.8d00fbbd.css",
    "revision": "0bd7caf6ebada4027efc7ca28e04dabb"
  },
  {
    "url": "assets/img/loading.18d75e19.gif",
    "revision": "18d75e19791c1d042f102e088f463d8a"
  },
  {
    "url": "assets/js/10.5c7f4e21.js",
    "revision": "ca91d0717c309281caa3f16bba260dae"
  },
  {
    "url": "assets/js/11.c0cbdbb5.js",
    "revision": "54ae1a81d4324377e6380b94b30b675e"
  },
  {
    "url": "assets/js/12.d8ab7885.js",
    "revision": "1a8192f4da390f56923c5b111c520e93"
  },
  {
    "url": "assets/js/13.cc153d85.js",
    "revision": "ef1a33ca61027cdc3ffde466090d69ca"
  },
  {
    "url": "assets/js/14.ce73be64.js",
    "revision": "3047212bb5b0b0761c69ce6e330a162f"
  },
  {
    "url": "assets/js/15.3fe55787.js",
    "revision": "a5dd2a6cec786dc2a5a0ddd656a546f5"
  },
  {
    "url": "assets/js/16.0af459c6.js",
    "revision": "bd969aea2d260914fbfb652d69415b78"
  },
  {
    "url": "assets/js/17.61f6695a.js",
    "revision": "2cf7f96155f5fc38eb8a38ca38f69f0c"
  },
  {
    "url": "assets/js/18.6af49eed.js",
    "revision": "4675dadd6fc2de00193eb27095105175"
  },
  {
    "url": "assets/js/19.b78016e1.js",
    "revision": "91a5c0c41b2e4dec9e3170e719c86fa9"
  },
  {
    "url": "assets/js/2.6dc5bc36.js",
    "revision": "eecd7cc654fbe21002e84df32fc4de9d"
  },
  {
    "url": "assets/js/20.ac79c4cc.js",
    "revision": "b7f60084b7da993609a5d268f8798a0b"
  },
  {
    "url": "assets/js/21.30fb233f.js",
    "revision": "8d9993bc8174fa8be8cecbdb97004630"
  },
  {
    "url": "assets/js/22.258f63c3.js",
    "revision": "a7fb8c2b6e38267ed7444804bf647758"
  },
  {
    "url": "assets/js/23.b732cdb6.js",
    "revision": "510d243675410a9d50e8e703a196c77f"
  },
  {
    "url": "assets/js/24.a97e30cf.js",
    "revision": "2a9501f710fa40a894abc98a3da1a6f9"
  },
  {
    "url": "assets/js/25.cc11d858.js",
    "revision": "813ec1c6308af14e7f73cab2b9a865e7"
  },
  {
    "url": "assets/js/26.cd3c5614.js",
    "revision": "0016906755d52ec90657305e6104e042"
  },
  {
    "url": "assets/js/27.f7abd7f0.js",
    "revision": "24c1e7050b79d2424dca04164c01761f"
  },
  {
    "url": "assets/js/28.ad07ba4f.js",
    "revision": "c52794eb8439fd7f3e0043030c6895e4"
  },
  {
    "url": "assets/js/29.8009be07.js",
    "revision": "1c3ff20c4b7f7fa4a5ea9630ab4a82ce"
  },
  {
    "url": "assets/js/3.d066d63f.js",
    "revision": "40087f7011e75e425855476496a40d2a"
  },
  {
    "url": "assets/js/30.2fb40b0d.js",
    "revision": "200f434bf05036d65d2782d5aa1984b5"
  },
  {
    "url": "assets/js/31.df622938.js",
    "revision": "6514bf6ee8f5976eb3f847a4a2c5d8aa"
  },
  {
    "url": "assets/js/32.48b65c6f.js",
    "revision": "c2d6fecc5d057d50084bdfb860c409ea"
  },
  {
    "url": "assets/js/33.8089d484.js",
    "revision": "87900dc247f9fb53aa50cf7ae7d7f5d5"
  },
  {
    "url": "assets/js/34.5323da19.js",
    "revision": "ce4bb0f1d276548bb77f4c2168fc7165"
  },
  {
    "url": "assets/js/35.ad13ccc9.js",
    "revision": "c6312a7a22cc18f911f1e974c8123336"
  },
  {
    "url": "assets/js/36.3229d22f.js",
    "revision": "0f591538c51f33bce6480786f259c5b0"
  },
  {
    "url": "assets/js/37.d869a2dd.js",
    "revision": "dbedb6a7c2c7e0e93c18327ee6b7aa4e"
  },
  {
    "url": "assets/js/4.9be66004.js",
    "revision": "0c2871f8d4bc615c11f8498dc432893c"
  },
  {
    "url": "assets/js/5.f0b49d37.js",
    "revision": "815183a4ae7bb026eeaf40ee8f13aa37"
  },
  {
    "url": "assets/js/6.6aa20635.js",
    "revision": "53601aaed67f558d1fb98d01fd737199"
  },
  {
    "url": "assets/js/7.9287e267.js",
    "revision": "438009dd0c1aa3fa8f8264df5199a414"
  },
  {
    "url": "assets/js/8.e756ed8e.js",
    "revision": "a7974aef186ac2c0786fcef8f80d4e29"
  },
  {
    "url": "assets/js/9.6534410d.js",
    "revision": "4acf4d1d7f564ce1c8f3a5130169535a"
  },
  {
    "url": "assets/js/app.a97a0581.js",
    "revision": "2125a9ae1cf83bbe9c23c1d549f250f1"
  },
  {
    "url": "bookshop/linkme/index.html",
    "revision": "7e60865b0cbfc7968d07c8e0d26b2648"
  },
  {
    "url": "categories/index.html",
    "revision": "90367894e2433008cd248eb889a74807"
  },
  {
    "url": "img/avatar.jpeg",
    "revision": "0dfc3971d6999e7cd56eb316488680ee"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c8f26794a0ee092e62abbd0f99857064"
  },
  {
    "url": "index.html",
    "revision": "fe9a991246115fecd4d13c654cb3ffc7"
  },
  {
    "url": "love-fe.png",
    "revision": "c631ad86af0196d6257306305dd13659"
  },
  {
    "url": "pages/290a2fbb1e629/index.html",
    "revision": "d74a6a04415133064ba33768db0f55e1"
  },
  {
    "url": "resource-tools/44207a5ef0a8a/index.html",
    "revision": "50e453b85492f314d4fb739a1b6ada01"
  },
  {
    "url": "resource-tools/4c19c32335465/index.html",
    "revision": "ff08c4939994781cbc2f0689de207b83"
  },
  {
    "url": "resource-tools/5f440c9bb4359/index.html",
    "revision": "0d47858fa950461a193606e2ed211383"
  },
  {
    "url": "resource-tools/8396c1c08f1b6/index.html",
    "revision": "c8a7aa4f0627d8f1d5affa17d41f9b01"
  },
  {
    "url": "resource-tools/9d5d91d08c126/index.html",
    "revision": "c43744adc97916ba2d324b4d38fc2767"
  },
  {
    "url": "resource-tools/c618db4b32e39/index.html",
    "revision": "404cc42e15cb77c0416959093099863f"
  },
  {
    "url": "resource-tools/c9e44ab0fce9a/index.html",
    "revision": "e0aa75fd8f0abae6f951a8e831e83297"
  },
  {
    "url": "tags/index.html",
    "revision": "c7dc9960eda618f3a83ca974b0b6d556"
  },
  {
    "url": "web/docs/babel/index.html",
    "revision": "1d1881af99c7ac29ce4ebdcf41484b65"
  },
  {
    "url": "web/docs/distinguish-between-mode/index.html",
    "revision": "8ffbd077c9a153ab14461c3ce962a40e"
  },
  {
    "url": "web/docs/docschina/index.html",
    "revision": "ce10230f78b630f29d08ae3afafa4831"
  },
  {
    "url": "web/docs/es6/index.html",
    "revision": "14831a276c71b0c496927365ae0dba90"
  },
  {
    "url": "web/docs/imooc/wiki/index.html",
    "revision": "2dcd93360ee89b791a92c08eb50c7eea"
  },
  {
    "url": "web/docs/nav/index.html",
    "revision": "513abb329d1ffc794c7aee961693c9d1"
  },
  {
    "url": "web/docs/node/index.html",
    "revision": "cabfe6510bfb1874faf98221486c42d2"
  },
  {
    "url": "web/docs/react-router/index.html",
    "revision": "af413c50e7d67a5c6393851392836d4c"
  },
  {
    "url": "web/docs/react/index.html",
    "revision": "0f5a6752f4c9dd6897336eb75f96ec13"
  },
  {
    "url": "web/docs/reducer/index.html",
    "revision": "790b1e30a1cc1d735afe22433ff67b8f"
  },
  {
    "url": "web/docs/regexp/index.html",
    "revision": "eb9400187baf9411851d8a3a2b42e6cc"
  },
  {
    "url": "web/docs/runoob/index.html",
    "revision": "ff7fd6156ae1f51e6758bfd624f21b67"
  },
  {
    "url": "web/docs/typescript/index.html",
    "revision": "17d30ab0dfcbd889d447930f45d61183"
  },
  {
    "url": "web/docs/vue/index.html",
    "revision": "b942ebd81e5cc52c36f15fe9350ef0f4"
  },
  {
    "url": "web/docs/webpack/index.html",
    "revision": "bb8c36adf76f28430a18d75dc67c86ed"
  },
  {
    "url": "web/docs/webpackToReact/index.html",
    "revision": "54180943524c895039e73f7e7051fba6"
  },
  {
    "url": "web/git/f85d0c838f3f3/index.html",
    "revision": "62688e4aacb19821687738512d4b359d"
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
