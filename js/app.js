/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"./node_modules/@solana/wallet-adapter-wallets/lib/esm/index.mjs\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.mjs\");\n/* harmony import */ var _components_WalletMultiButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/WalletMultiButton */ \"./src/components/WalletMultiButton.vue\");\n\n\n\nconst network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__[\"WalletAdapterNetwork\"].Devnet;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    WalletMultiButton: _components_WalletMultiButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n\n  data() {\n    return {\n      wallets: [new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"CoinbaseWalletAdapter\"](), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"PhantomWalletAdapter\"](), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"GlowWalletAdapter\"](), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"SlopeWalletAdapter\"](), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"SolflareWalletAdapter\"]({\n        network\n      }), new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_0__[\"TorusWalletAdapter\"]()]\n    };\n  }\n\n});\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletConnectButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletConnectButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletIcon */ \"./src/components/WalletIcon.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'WalletConnectButton',\n  components: {\n    WalletIcon: _WalletIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  props: {\n    disabled: Boolean,\n    store: Object\n  },\n  computed: {\n    wallet() {\n      return this.store.wallet;\n    },\n\n    connecting() {\n      return this.store.connecting;\n    },\n\n    connected() {\n      return this.store.connected;\n    },\n\n    content() {\n      if (this.connecting) {\n        return 'Connecting ...';\n      }\n\n      if (this.connected) {\n        return 'Connected';\n      }\n\n      if (this.wallet) {\n        return 'Connect';\n      }\n\n      return 'Connect Wallet';\n    }\n\n  },\n  methods: {\n    onClick(event) {\n      this.$emit('click', event);\n\n      if (event.defaultPrevented) {\n        return;\n      }\n\n      this.store.connect().catch(() => {});\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/components/WalletConnectButton.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletIcon.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletIcon.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'WalletIcon',\n  props: {\n    wallet: {\n      type: Object,\n      default: () => {}\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/WalletIcon.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletModalProvider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletModalProvider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletIcon */ \"./src/components/WalletIcon.vue\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins */ \"./src/components/mixins.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'WalletModalProvider',\n  components: {\n    WalletIcon: _WalletIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\n  props: {\n    featured: {\n      type: Number,\n      default: 3\n    },\n    logo: {\n      type: String,\n      default: ''\n    },\n    dark: Boolean,\n    store: Object\n  },\n\n  data() {\n    return {\n      modalOpened: false,\n      expandedWallets: false\n    };\n  },\n\n  computed: {\n    hasLogo() {\n      return !!this.logo;\n    },\n\n    wallets() {\n      var _this$store;\n\n      return (_this$store = this.store) === null || _this$store === void 0 ? void 0 : _this$store.wallets;\n    },\n\n    featuredWallets() {\n      return this.wallets.slice(0, this.featured);\n    },\n\n    walletsToDisplay() {\n      return this.expandedWallets ? this.wallets : this.featuredWallets;\n    },\n\n    hiddenWallets() {\n      return this.wallets.slice(this.featured);\n    }\n\n  },\n  methods: {\n    closeModal() {\n      this.modalOpened = false;\n    },\n\n    openModal() {\n      this.modalOpened = true;\n    },\n\n    selectWallet(wallet) {\n      var _this$store2;\n\n      (_this$store2 = this.store) === null || _this$store2 === void 0 ? void 0 : _this$store2.select(wallet);\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/components/WalletModalProvider.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMultiButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletStore.js */ \"./src/components/WalletStore.js\");\n/* harmony import */ var _WalletModalProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletModalProvider */ \"./src/components/WalletModalProvider.vue\");\n/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletIcon */ \"./src/components/WalletIcon.vue\");\n/* harmony import */ var _WalletConnectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WalletConnectButton */ \"./src/components/WalletConnectButton.vue\");\n/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins */ \"./src/components/mixins.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'WalletMultiButton',\n  components: {\n    WalletConnectButton: _WalletConnectButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    WalletIcon: _WalletIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    WalletModalProvider: _WalletModalProvider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  },\n  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\n  props: {\n    featured: {\n      type: Number,\n      default: 3\n    },\n    logo: {\n      type: String,\n      default: ''\n    },\n    wallets: {\n      type: Array,\n      default: () => []\n    },\n    autoConnect: {\n      type: Boolean,\n      default: false\n    },\n    trimWalletLength: {\n      type: Number,\n      default: 4\n    },\n    dark: Boolean\n  },\n\n  data() {\n    return {\n      walletStore: {},\n      dropdownOpened: false,\n      canCopy: true,\n      addressCopied: false\n    };\n  },\n\n  computed: {\n    publicKey() {\n      var _this$walletStore;\n\n      return (_this$walletStore = this.walletStore) === null || _this$walletStore === void 0 ? void 0 : _this$walletStore.publicKey;\n    },\n\n    wallet() {\n      var _this$walletStore2;\n\n      return (_this$walletStore2 = this.walletStore) === null || _this$walletStore2 === void 0 ? void 0 : _this$walletStore2.wallet;\n    },\n\n    publicKeyBase58() {\n      var _this$publicKey;\n\n      return (_this$publicKey = this.publicKey) === null || _this$publicKey === void 0 ? void 0 : _this$publicKey.toBase58();\n    },\n\n    publicKeyTrimmed() {\n      if (!this.wallet || !this.publicKeyBase58) {\n        return null;\n      }\n\n      return this.publicKeyBase58.slice(0, this.trimWalletLength) + '..' + this.publicKeyBase58.slice(-1 * this.trimWalletLength);\n    }\n\n  },\n\n  created() {\n    this.walletStore = new _WalletStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      wallets: this.wallets,\n      autoConnect: this.autoConnect\n    });\n  },\n\n  methods: {\n    copyAddress() {\n      this.addressCopied = true;\n      const el = document.createElement('textarea');\n      el.value = this.publicKeyBase58;\n      el.setAttribute('readonly', '');\n      el.style.position = 'absolute';\n      el.style.left = '-9999px';\n      document.body.appendChild(el);\n      const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;\n      el.select();\n      document.execCommand('copy');\n      document.body.removeChild(el);\n\n      if (selected) {\n        document.getSelection().removeAllRanges();\n        document.getSelection().addRange(selected);\n      }\n\n      setTimeout(() => {\n        this.addressCopied = false;\n      }, 2000);\n    },\n\n    closeDropdown() {\n      this.dropdownOpened = false;\n    },\n\n    openDropdown() {\n      this.dropdownOpened = !this.dropdownOpened;\n    },\n\n    disconnect() {\n      var _this$walletStore3;\n\n      return (_this$walletStore3 = this.walletStore) === null || _this$walletStore3 === void 0 ? void 0 : _this$walletStore3.disconnect();\n    }\n\n  }\n});\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73140d1e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", {\n    attrs: {\n      id: \"app\"\n    }\n  }, [_c(\"div\", {\n    staticClass: \"gh-link\"\n  }, [_c(\"a\", {\n    attrs: {\n      href: \"https://github.com/alexx876/solana-wallets-vue-2\",\n      target: \"_blank\",\n      \"aria-label\": \"View source on GitHub\"\n    }\n  }, [_c(\"svg\", {\n    staticStyle: {\n      position: \"absolute\",\n      top: \"0px\",\n      right: \"0px\",\n      border: \"0px\"\n    },\n    attrs: {\n      width: \"80\",\n      height: \"80\",\n      viewBox: \"0 0 250 250\",\n      \"aria-hidden\": \"true\"\n    }\n  }, [_c(\"path\", {\n    attrs: {\n      d: \"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\",\n      fill: \"#151513\"\n    }\n  }), _c(\"path\", {\n    staticClass: \"octo-arm\",\n    staticStyle: {\n      \"transform-origin\": \"130px 106px\"\n    },\n    attrs: {\n      d: \"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\",\n      fill: \"#ffffff\"\n    }\n  }), _c(\"path\", {\n    staticClass: \"octo-body\",\n    attrs: {\n      d: \"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\",\n      fill: \"#ffffff\"\n    }\n  })])])]), _vm._m(0), _c(\"wallet-multi-button\", {\n    attrs: {\n      wallets: _vm.wallets,\n      \"auto-connect\": \"\"\n    }\n  })], 1);\n};\n\nvar staticRenderFns = [function () {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", {\n    staticClass: \"vue-logo\"\n  }, [_c(\"div\", [_vm._v(\"Solana Wallets Vue 2\")])]);\n}];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2273140d1e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73140d1e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_vm._t(\"default\", function () {\n    return [_c(\"button\", {\n      staticClass: \"swv-button swv-button-trigger\",\n      attrs: {\n        disabled: _vm.disabled || !_vm.wallet || _vm.connecting || _vm.connected\n      },\n      on: {\n        click: _vm.onClick\n      }\n    }, [_vm.wallet ? _c(\"wallet-icon\", {\n      attrs: {\n        wallet: _vm.wallet\n      }\n    }) : _vm._e(), _c(\"p\", {\n      domProps: {\n        textContent: _vm._s(_vm.content)\n      }\n    })], 1)];\n  })], 2);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/WalletConnectButton.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2273140d1e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73140d1e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"i\", {\n    staticClass: \"swv-button-icon\"\n  }, [_vm.wallet ? _c(\"img\", {\n    attrs: {\n      src: _vm.wallet.icon,\n      alt: `${_vm.wallet.name} icon`\n    }\n  }) : _vm._e()]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/WalletIcon.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2273140d1e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73140d1e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"div\", {\n    class: _vm.dark ? \"swv-dark\" : \"\"\n  }, [_vm._t(\"default\", null, {\n    openModal: _vm.openModal\n  })], 2), _vm.modalOpened ? _c(\"div\", {\n    directives: [{\n      name: \"scroll-lock\",\n      rawName: \"v-scroll-lock\"\n    }],\n    staticClass: \"swv-modal\",\n    class: _vm.dark ? \"swv-dark\" : \"\",\n    attrs: {\n      \"aria-labelledby\": \"swv-modal-title\",\n      \"aria-modal\": \"true\",\n      role: \"dialog\"\n    }\n  }, [_vm._t(\"overlay\", function () {\n    return [_c(\"div\", {\n      staticClass: \"swv-modal-overlay\",\n      on: {\n        click: _vm.closeModal\n      }\n    })];\n  }), _c(\"div\", {\n    ref: \"modalPanel\",\n    staticClass: \"swv-modal-container\"\n  }, [_vm._t(\"modal\", function () {\n    return [_c(\"div\", {\n      staticClass: \"swv-modal-wrapper\",\n      class: {\n        \"swv-modal-wrapper-no-logo\": !_vm.hasLogo\n      }\n    }, [_vm.hasLogo ? _c(\"div\", {\n      staticClass: \"swv-modal-logo-wrapper\"\n    }, [_vm._t(\"logo\", function () {\n      return [_c(\"img\", {\n        staticClass: \"swv-modal-logo\",\n        attrs: {\n          alt: \"logo\",\n          src: _vm.logo\n        }\n      })];\n    })], 2) : _vm._e(), _c(\"h1\", {\n      staticClass: \"swv-modal-title\",\n      attrs: {\n        id: \"swv-modal-title\"\n      }\n    }, [_vm._v(\" Connect Wallet \")]), _c(\"button\", {\n      staticClass: \"swv-modal-button-close\",\n      on: {\n        click: function ($event) {\n          $event.preventDefault();\n          return _vm.closeModal.apply(null, arguments);\n        }\n      }\n    }, [_c(\"svg\", {\n      attrs: {\n        width: \"14\",\n        height: \"14\"\n      }\n    }, [_c(\"path\", {\n      attrs: {\n        d: \"M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z\"\n      }\n    })])]), _c(\"ul\", {\n      staticClass: \"swv-modal-list\"\n    }, _vm._l(_vm.walletsToDisplay, function (wallet) {\n      return _c(\"li\", {\n        key: wallet.name,\n        on: {\n          click: function ($event) {\n            _vm.selectWallet(wallet.name);\n\n            _vm.closeModal();\n          }\n        }\n      }, [_c(\"button\", {\n        staticClass: \"swv-button\"\n      }, [_c(\"p\", [_vm._v(_vm._s(wallet.name))]), _c(\"wallet-icon\", {\n        attrs: {\n          wallet: wallet\n        }\n      })], 1)]);\n    }), 0), _vm.hiddenWallets.length > 0 ? _c(\"button\", {\n      staticClass: \"swv-button swv-modal-collapse-button\",\n      class: {\n        \"swv-modal-collapse-button-active\": _vm.expandedWallets\n      },\n      attrs: {\n        \"aria-controls\": \"swv-modal-collapse\",\n        \"aria-expanded\": _vm.expandedWallets\n      },\n      on: {\n        click: function ($event) {\n          _vm.expandedWallets = !_vm.expandedWallets;\n        }\n      }\n    }, [_vm._v(\" \" + _vm._s(_vm.expandedWallets ? \"Less\" : \"More\") + \" options \"), _c(\"i\", {\n      staticClass: \"swv-button-icon\"\n    }, [_c(\"svg\", {\n      attrs: {\n        width: \"11\",\n        height: \"6\",\n        xmlns: \"http://www.w3.org/2000/svg\"\n      }\n    }, [_c(\"path\", {\n      attrs: {\n        d: \"m5.938 5.73 4.28-4.126a.915.915 0 0 0 0-1.322 1 1 0 0 0-1.371 0L5.253 3.736 1.659.272a1 1 0 0 0-1.371 0A.93.93 0 0 0 0 .932c0 .246.1.48.288.662l4.28 4.125a.99.99 0 0 0 1.37.01z\"\n      }\n    })])])]) : _vm._e()])];\n  })], 2)], 2) : _vm._e()]);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/WalletModalProvider.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2273140d1e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"73140d1e-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function render() {\n  var _vm = this,\n      _c = _vm._self._c;\n\n  return _c(\"div\", [_c(\"wallet-modal-provider\", {\n    attrs: {\n      featured: _vm.featured,\n      logo: _vm.logo,\n      dark: _vm.dark,\n      store: _vm.walletStore\n    },\n    scopedSlots: _vm._u([{\n      key: \"default\",\n      fn: function ({\n        openModal\n      }) {\n        return [_vm._t(\"default\", function () {\n          return [!_vm.wallet ? _c(\"button\", {\n            staticClass: \"swv-button swv-button-trigger\",\n            on: {\n              click: function ($event) {\n                return openModal();\n              }\n            }\n          }, [_vm._v(\" Select Wallet \")]) : !_vm.publicKeyBase58 ? _c(\"wallet-connect-button\", {\n            attrs: {\n              store: _vm.walletStore\n            }\n          }) : _c(\"div\", {\n            directives: [{\n              name: \"click-outside-modal\",\n              rawName: \"v-click-outside-modal\",\n              value: _vm.closeDropdown,\n              expression: \"closeDropdown\"\n            }],\n            staticClass: \"swv-dropdown\"\n          }, [_vm._t(\"dropdown-button\", function () {\n            return [_c(\"button\", {\n              staticClass: \"swv-button swv-button-trigger\",\n              style: {\n                pointerEvents: _vm.dropdownOpened ? \"none\" : \"auto\"\n              },\n              attrs: {\n                \"aria-expanded\": _vm.dropdownOpened,\n                title: _vm.publicKeyBase58\n              },\n              on: {\n                click: _vm.openDropdown\n              }\n            }, [_c(\"wallet-icon\", {\n              attrs: {\n                wallet: _vm.wallet\n              }\n            }), _c(\"p\", [_vm._v(\" \" + _vm._s(_vm.publicKeyTrimmed) + \" \")])], 1)];\n          }), _vm._t(\"dropdown\", function () {\n            return [_c(\"ul\", {\n              ref: \"dropdownPanel\",\n              staticClass: \"swv-dropdown-list\",\n              class: {\n                \"swv-dropdown-list-active\": _vm.dropdownOpened\n              },\n              attrs: {\n                \"aria-label\": \"dropdown-list\",\n                role: \"menu\"\n              }\n            }, [_vm._t(\"dropdown-list\", function () {\n              return [_vm.canCopy ? _c(\"li\", {\n                staticClass: \"swv-dropdown-list-item\",\n                attrs: {\n                  role: \"menuitem\"\n                },\n                on: {\n                  click: _vm.copyAddress\n                }\n              }, [_vm._v(\" \" + _vm._s(_vm.addressCopied ? \"Copied\" : \"Copy address\") + \" \")]) : _vm._e(), _c(\"li\", {\n                staticClass: \"swv-dropdown-list-item\",\n                attrs: {\n                  role: \"menuitem\"\n                },\n                on: {\n                  click: function ($event) {\n                    openModal();\n\n                    _vm.closeDropdown();\n                  }\n                }\n              }, [_vm._v(\" Change wallet \")]), _c(\"li\", {\n                staticClass: \"swv-dropdown-list-item\",\n                attrs: {\n                  role: \"menuitem\"\n                },\n                on: {\n                  click: function ($event) {\n                    return _vm.disconnect();\n                  }\n                }\n              }, [_vm._v(\" Disconnect \")])];\n            })], 2)];\n          })], 2)];\n        })];\n      }\n    }, {\n      key: \"overlay\",\n      fn: function () {\n        return [_vm._t(\"modal-overlay\")];\n      },\n      proxy: true\n    }, {\n      key: \"modal\",\n      fn: function () {\n        return [_vm._t(\"modal\")];\n      },\n      proxy: true\n    }], null, true)\n  })], 1);\n};\n\nvar staticRenderFns = [];\nrender._withStripped = true;\n\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%2273140d1e-vue-loader-template%22%7D!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);\"]);\n// Module\nexports.push([module.i, \"\\n:root {\\n  /* Buttons. */\\n  --swv-button-background-color: #4f46e5;\\n  --swv-button-text-color: white;\\n  --swv-button-outline-color: #3730a3;\\n  --swv-button-hover-background-color: #4338ca;\\n  --swv-button-disabled-background-color: #475569;\\n  --swv-button-disabled-text-color: #94a3b8;\\n\\n  /* Modal. */\\n  --swv-overlay-background-color: rgba(200, 200, 200, 0.8);\\n  --swv-modal-background-color: white;\\n  --swv-modal-text-color: #1f2937;\\n  --swv-modal-close-button-background-color: #f3f4f6;\\n  --swv-modal-close-button-text-color: #9ca3af;\\n  --swv-modal-close-button-hover-text-color: #374151;\\n  --swv-modal-button-text-color: #1f2937;\\n  --swv-modal-button-hover-background-color: #f3f4f6;\\n  --swv-modal-button-outline-color: var(--swv-button-outline-color);\\n\\n  /* Dropdown. */\\n  --swv-dropdown-background-color: white;\\n  --swv-dropdown-item-hover-background-color: #f3f4f6;\\n  --swv-dropdown-text-color: #1f2937;\\n\\n  /* Shadows. */\\n  --swm-modal-shadow: 0 25px 25px rgb(0 0 0 / 0.15);\\n  --swm-dropdown-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);\\n\\n  /* Radius. */\\n  --swv-button-radius: 6px;\\n  --swv-modal-radius: 10px;\\n  --swv-dropdown-radius: 10px;\\n  --swv-dropdown-item-radius: 6px;\\n}\\n.swv-dark {\\n  /* Modal. */\\n  --swv-overlay-background-color: rgba(0, 0, 0, 0.7);\\n  --swv-modal-background-color: #1e293b;\\n  --swv-modal-text-color: white;\\n  --swv-modal-close-button-background-color: #0f172a;\\n  --swv-modal-close-button-text-color: #64748b;\\n  --swv-modal-close-button-hover-text-color: white;\\n  --swv-modal-button-text-color: white;\\n  --swv-modal-button-hover-background-color: #0f172a;\\n  --swv-modal-button-outline-color: white;\\n\\n  /* Dropdown. */\\n  --swv-dropdown-background-color: #1e293b;\\n  --swv-dropdown-item-hover-background-color: #334155;\\n  --swv-dropdown-text-color: white;\\n\\n  /* Shadows. */\\n  --swm-modal-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);\\n}\\n.swv-button {\\n  background-color: transparent;\\n  border: none;\\n  color: var(--swv-button-text-color);\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n  font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n  font-size: 16px;\\n  font-weight: 600;\\n  height: 48px;\\n  line-height: 48px;\\n  padding: 0 24px;\\n  border-radius: var(--swv-button-radius);\\n}\\n.swv-button > * + * {\\n  margin-left: 12px;\\n}\\n.swv-button-trigger {\\n  background-color: var(--swv-button-background-color);\\n}\\n.swv-button:not([disabled]):focus-visible {\\n  outline-color: var(--swv-button-outline-color);\\n}\\n.swv-button:not([disabled]):hover {\\n  background-color: var(--swv-button-hover-background-color);\\n}\\n.swv-button[disabled] {\\n  background: var(--swv-button-disabled-background-color);\\n  color: var(--swv-button-disabled-text-color);\\n  cursor: not-allowed;\\n}\\n.swv-button-icon,\\n.swv-button-icon img {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 24px;\\n  height: 24px;\\n}\\n.swv-dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n.swv-dropdown-list {\\n  position: absolute;\\n  z-index: 99;\\n  display: grid;\\n  grid-template-rows: 1fr;\\n  grid-row-gap: 10px;\\n  padding: 10px;\\n  top: 100%;\\n  right: 0;\\n  margin: 0;\\n  list-style: none;\\n  background: var(--swv-dropdown-background-color);\\n  color: var(--swv-dropdown-text-color);\\n  border-radius: var(--swv-dropdown-radius);\\n  box-shadow: var(--swm-dropdown-shadow);\\n  opacity: 0;\\n  visibility: hidden;\\n  transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;\\n  font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n}\\n.swv-dropdown-list-active {\\n  opacity: 1;\\n  visibility: visible;\\n  transform: translateY(10px);\\n}\\n.swv-dropdown-list-item {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n  white-space: nowrap;\\n  box-sizing: border-box;\\n  padding: 0 20px;\\n  width: 100%;\\n  border-radius: var(--swv-dropdown-item-radius);\\n  font-size: 14px;\\n  font-weight: 500;\\n  height: 37px;\\n}\\n.swv-dropdown-list-item:not([disabled]):hover {\\n  background-color: var(--swv-dropdown-item-hover-background-color);\\n}\\n.swv-modal-collapse-button {\\n  justify-content: space-between;\\n  border-radius: 0px 0px var(--swv-modal-radius) var(--swv-modal-radius);\\n}\\n.swv-modal-collapse-button svg {\\n  transition: transform ease-in 150ms;\\n  align-self: center;\\n  fill: #999;\\n}\\n.swv-modal-collapse-button.swv-modal-collapse-button-active svg {\\n  transform: rotate(180deg);\\n}\\n.swv-modal {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  opacity: 1;\\n  transition: opacity linear 150ms;\\n  z-index: 1040;\\n  overflow-y: auto;\\n}\\n.swv-modal-logo-wrapper {\\n  padding: 60px;\\n  padding-bottom: 0px;\\n}\\n.swv-modal-logo {\\n  max-width: 100%;\\n  max-height: 100px;\\n}\\n.swv-modal-button-close {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  position: absolute;\\n  top: 18px;\\n  right: 18px;\\n  padding: 12px;\\n  cursor: pointer;\\n  background: var(--swv-modal-close-button-background-color);\\n  color: var(--swv-modal-close-button-text-color);\\n  border: none;\\n  border-radius: 50%;\\n}\\n.swv-modal-button-close:hover {\\n  color: var(--swv-modal-close-button-hover-text-color);\\n}\\n.swv-modal-button-close:focus-visible {\\n  outline-color: var(--swv-modal-button-outline-color);\\n}\\n.swv-modal-button-close svg {\\n  fill: currentColor;\\n  transition: fill 200ms ease 0s;\\n}\\n.swv-modal-overlay {\\n  background: var(--swv-overlay-background-color);\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n}\\n.swv-modal-container {\\n  display: flex;\\n  margin: 3rem;\\n  min-height: calc(100vh - 6rem); /* 100vh - 2 * margin */\\n  align-items: center;\\n  justify-content: center;\\n}\\n@media (max-width: 480px) {\\n.swv-modal-container {\\n    margin: 1rem;\\n    min-height: calc(100vh - 2rem); /* 100vh - 2 * margin */\\n}\\n}\\n.swv-modal-wrapper {\\n  box-sizing: border-box;\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  flex-direction: column;\\n  z-index: 1050;\\n  max-width: 400px;\\n  border-radius: var(--swv-modal-radius);\\n  background: var(--swv-modal-background-color);\\n  color: var(--swv-modal-text-color);\\n  box-shadow: var(--swm-modal-shadow);\\n  font-family: 'DM Sans', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\\n  flex: 1;\\n}\\n.swv-modal-wrapper .swv-button {\\n  width: 100%;\\n  color: var(--swv-modal-button-text-color);\\n}\\n.swv-modal-wrapper .swv-button:not([disabled]):hover {\\n  background: var(--swv-modal-button-hover-background-color);\\n}\\n.swv-modal-wrapper .swv-button:not([disabled]):focus-visible {\\n  outline-color: var(--swv-modal-button-outline-color);\\n}\\n.swv-modal-title {\\n  font-weight: 500;\\n  font-size: 24px;\\n  line-height: 36px;\\n  margin: 0;\\n  padding: 30px 60px;\\n  text-align: center;\\n}\\n@media (max-width: 374px) {\\n.swv-modal-title {\\n    font-size: 18px;\\n}\\n}\\n.swv-modal-list {\\n  margin: 0 0 12px 0;\\n  padding: 0;\\n  width: 100%;\\n  list-style: none;\\n}\\n.swv-modal-list .swv-button {\\n  font-weight: 400;\\n  border-radius: 0;\\n  font-size: 18px;\\n  justify-content: space-between;\\n}\\n.swv-modal-list .swv-button-icon,\\n.swv-modal-list .swv-button-icon img {\\n  width: 28px;\\n  height: 28px;\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html, body, #app {\\n  width: 100%;\\n  height: 100%;\\n  margin: 0;\\n  padding: 0;\\n}\\n.calculator-icon {\\n  display: flex;\\n  margin: auto;\\n  cursor: pointer;\\n}\\n#app {\\n  font-family: \\\"Avenir\\\", Helvetica, Arial, sans-serif;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n  color: #2c3e50;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n#app .gh-link {\\n  align-self: flex-end;\\n  position: sticky;\\n  top: 0;\\n  right: 0;\\n}\\n#app .vue-logo {\\n  margin-top: 2rem;\\n  text-align: center;\\n}\\n#app .vue-logo img {\\n  max-width: 70%;\\n}\\n#app .vue-logo div {\\n  font-weight: bolder;\\n  font-size: 2rem;\\n  padding: 1rem 0;\\n}\\n#app .preview-block {\\n  padding: 1rem;\\n  background-color: #e6e6e6;\\n  min-width: 300px;\\n  max-width: 400px;\\n}\\n#app .preview-block > .input-label {\\n  font-weight: bold;\\n  color: #2c3e50;\\n  margin: 7px 0 5px 0;\\n}\\n#app .preview-block .sample {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: row;\\n  background-color: white;\\n  padding: 3px;\\n}\\n#app .preview-block .sample > input {\\n  max-width: 200px;\\n  height: 40px;\\n  text-align: right;\\n  font-size: 34px;\\n  color: #2c3e50;\\n  border: none;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"aafad97c\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"2465e40d\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/App.vue?./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ \"./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ \"./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&":
/*!*******************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--9-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!../node_modules/cache-loader/dist/cjs.js??ref--13-0!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"73140d1e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/App.vue?");

/***/ }),

/***/ "./src/components/WalletConnectButton.vue":
/*!************************************************!*\
  !*** ./src/components/WalletConnectButton.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true& */ \"./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true&\");\n/* harmony import */ var _WalletConnectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletConnectButton.vue?vue&type=script&lang=js& */ \"./src/components/WalletConnectButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _WalletConnectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"66ab89c3\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/WalletConnectButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/WalletConnectButton.vue?");

/***/ }),

/***/ "./src/components/WalletConnectButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/WalletConnectButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConnectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletConnectButton.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletConnectButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConnectButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/WalletConnectButton.vue?");

/***/ }),

/***/ "./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"73140d1e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletConnectButton.vue?vue&type=template&id=66ab89c3&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletConnectButton_vue_vue_type_template_id_66ab89c3_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/WalletConnectButton.vue?");

/***/ }),

/***/ "./src/components/WalletIcon.vue":
/*!***************************************!*\
  !*** ./src/components/WalletIcon.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true& */ \"./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true&\");\n/* harmony import */ var _WalletIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletIcon.vue?vue&type=script&lang=js& */ \"./src/components/WalletIcon.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _WalletIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"eb9dbd7c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/WalletIcon.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/WalletIcon.vue?");

/***/ }),

/***/ "./src/components/WalletIcon.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/WalletIcon.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletIcon.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletIcon.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/WalletIcon.vue?");

/***/ }),

/***/ "./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"73140d1e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletIcon.vue?vue&type=template&id=eb9dbd7c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletIcon_vue_vue_type_template_id_eb9dbd7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/WalletIcon.vue?");

/***/ }),

/***/ "./src/components/WalletModalProvider.vue":
/*!************************************************!*\
  !*** ./src/components/WalletModalProvider.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true& */ \"./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true&\");\n/* harmony import */ var _WalletModalProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletModalProvider.vue?vue&type=script&lang=js& */ \"./src/components/WalletModalProvider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _WalletModalProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0b59ebc5\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/WalletModalProvider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/WalletModalProvider.vue?");

/***/ }),

/***/ "./src/components/WalletModalProvider.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/WalletModalProvider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletModalProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletModalProvider.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletModalProvider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletModalProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/WalletModalProvider.vue?");

/***/ }),

/***/ "./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"73140d1e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletModalProvider.vue?vue&type=template&id=0b59ebc5&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletModalProvider_vue_vue_type_template_id_0b59ebc5_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/WalletModalProvider.vue?");

/***/ }),

/***/ "./src/components/WalletMultiButton.vue":
/*!**********************************************!*\
  !*** ./src/components/WalletMultiButton.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WalletMultiButton.vue?vue&type=template&id=69ed41dc& */ \"./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc&\");\n/* harmony import */ var _WalletMultiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WalletMultiButton.vue?vue&type=script&lang=js& */ \"./src/components/WalletMultiButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& */ \"./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _WalletMultiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/WalletMultiButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?");

/***/ }),

/***/ "./src/components/WalletMultiButton.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/WalletMultiButton.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletMultiButton.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?");

/***/ }),

/***/ "./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=style&index=0&id=69ed41dc&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_style_index_0_id_69ed41dc_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?");

/***/ }),

/***/ "./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc&":
/*!*****************************************************************************!*\
  !*** ./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"73140d1e-vue-loader-template\"}!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./WalletMultiButton.vue?vue&type=template&id=69ed41dc& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"73140d1e-vue-loader-template\\\"}!./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/WalletMultiButton.vue?vue&type=template&id=69ed41dc&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_73140d1e_vue_loader_template_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WalletMultiButton_vue_vue_type_template_id_69ed41dc___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/WalletMultiButton.vue?");

/***/ }),

/***/ "./src/components/WalletStore.js":
/*!***************************************!*\
  !*** ./src/components/WalletStore.js ***!
  \***************************************/
/*! exports provided: WALLET_STORAGE_KEY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WALLET_STORAGE_KEY\", function() { return WALLET_STORAGE_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return WalletStore; });\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ \"./node_modules/core-js/modules/es.array.reduce.js\");\n/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.mjs\");\n/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./errors */ \"./src/components/errors.js\");\n\n\n\n\nconst WALLET_STORAGE_KEY = 'walletName';\nclass WalletStore {\n  constructor({\n    wallets,\n    autoConnect,\n    onError,\n    localStorageKey\n  }) {\n    this._name = '';\n    this.wallet = null;\n    this.publicKey = null;\n    this._readyState = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletReadyState\"].NotDetected;\n    this.connected = false;\n    this.disconnecting = false;\n    this.connecting = false;\n    this.wallets = wallets || [];\n    this.autoConnect = autoConnect || false;\n\n    this.onError = onError || (e => {\n      console.error(e);\n    });\n\n    this.localStorageKey = localStorageKey || WALLET_STORAGE_KEY;\n    setTimeout(() => {\n      this.mounted();\n    }, 300);\n  }\n\n  get readyState() {\n    return this._readyState;\n  }\n\n  set readyState(value) {\n    this._readyState = value;\n    this.autoConnector();\n  }\n\n  get ready() {\n    return [_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletReadyState\"].Installed, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletReadyState\"].Loadable].includes(this.readyState);\n  }\n\n  get walletsByName() {\n    return this.wallets.reduce((walletsByName, wallet) => {\n      walletsByName[wallet.name] = wallet;\n      return walletsByName;\n    }, {});\n  }\n\n  get signTransaction() {\n    const _wallet = this.wallet;\n\n    if (!(_wallet && 'signTransaction' in _wallet)) {\n      return false;\n    }\n\n    return async transaction => {\n      if (!this.connected) {\n        throw this.newError(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletNotConnectedError\"]());\n      }\n\n      return await _wallet.signTransaction(transaction);\n    };\n  }\n\n  get signAllTransactions() {\n    const _wallet = this.wallet;\n\n    if (!(_wallet && 'signMessage' in _wallet)) {\n      return false;\n    }\n\n    return async message => {\n      if (!this.connected) {\n        throw this.newError(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletNotConnectedError\"]());\n      }\n\n      return await _wallet.signMessage(message);\n    };\n  }\n\n  get name() {\n    return this._name;\n  }\n\n  set name(value) {\n    this._name = value;\n\n    let _a, _b;\n\n    this.setWallet((_b = (_a = this.walletsByName) === null || _a === void 0 ? void 0 : _a[this.name]) !== null && _b !== void 0 ? _b : null);\n  }\n\n  mounted() {\n    this.name = localStorage.getItem(this.localStorageKey);\n    this.addEventsWindow();\n  }\n\n  async autoConnector() {\n    if (!this.autoConnect || !this.wallet || !this.ready || this.connected || this.connecting) {\n      return;\n    }\n\n    try {\n      await this.connect();\n    } catch (error) {\n      this.name = null;\n    } finally {\n      this.connecting = false;\n    }\n  }\n\n  addEventsWindow() {\n    const onReadyStateChange = () => this.setWallet(this.wallet);\n\n    const onConnect = () => this.setWallet(this.wallet);\n\n    const onDisconnect = () => this.name = null;\n\n    if (typeof window !== 'undefined') {\n      window.addEventListener('beforeunload', onInvalidate => {\n        const _wallet = this.wallet;\n\n        if (!_wallet) {\n          return;\n        }\n\n        _wallet.on('readyStateChange', onReadyStateChange);\n\n        _wallet.on('connect', onConnect);\n\n        _wallet.on('disconnect', onDisconnect);\n\n        _wallet.on('error', this.onError);\n\n        onInvalidate(() => {\n          _wallet.off('readyStateChange', onReadyStateChange);\n\n          _wallet.off('connect', onConnect);\n\n          _wallet.off('disconnect', onDisconnect);\n\n          _wallet.off('error', this.onError);\n        });\n      });\n    }\n  }\n\n  setWallet(newWallet) {\n    let _a, _b, _c;\n\n    this.wallet = newWallet;\n    this.readyState = (_a = newWallet === null || newWallet === void 0 ? void 0 : newWallet.readyState) !== null && _a !== void 0 ? _a : _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletReadyState\"].NotDetected;\n    this.publicKey = (_b = newWallet === null || newWallet === void 0 ? void 0 : newWallet.publicKey) !== null && _b !== void 0 ? _b : null;\n    this.connected = (_c = newWallet === null || newWallet === void 0 ? void 0 : newWallet.connected) !== null && _c !== void 0 ? _c : false;\n  }\n\n  newError(error) {\n    this.onError(error);\n    return error;\n  }\n\n  async select(walletName) {\n    if (this.name === walletName) {\n      return;\n    }\n\n    localStorage.setItem(this.localStorageKey, walletName);\n    this.name = walletName;\n  }\n\n  async connect() {\n    if (this.connected || this.connecting || this.disconnecting) {\n      return;\n    }\n\n    if (!this.wallet) {\n      throw this.newError(new _errors__WEBPACK_IMPORTED_MODULE_3__[\"WalletNotSelectedError\"]());\n    }\n\n    if (!this.ready) {\n      if (typeof window !== 'undefined' && this.wallet._readyState !== 'Installed') {\n        window.open(this.wallet.url, '_blank');\n      }\n\n      this.name = null;\n      throw this.newError(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletNotReadyError\"]());\n    }\n\n    try {\n      this.connecting = true;\n      await this.wallet.connect();\n      this.setWallet(this.wallet);\n    } catch (error) {\n      this.name = null;\n      throw error;\n    } finally {\n      this.connecting = false;\n    }\n  }\n\n  async disconnect() {\n    if (this.disconnecting) {\n      return;\n    }\n\n    if (!this.wallet) {\n      this.name = null;\n      return;\n    }\n\n    try {\n      this.disconnecting = true;\n      await this.wallet.disconnect();\n    } finally {\n      this.name = null;\n      this.disconnecting = false;\n    }\n  }\n\n  async sendTransaction(transaction, connection, options) {\n    if (!this.wallet) {\n      throw this.newError(new _errors__WEBPACK_IMPORTED_MODULE_3__[\"WalletNotSelectedError\"]());\n    }\n\n    if (!this.connected) {\n      throw this.newError(new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_2__[\"WalletNotConnectedError\"]());\n    }\n\n    return await this.wallet.sendTransaction(transaction, connection, options);\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/WalletStore.js?");

/***/ }),

/***/ "./src/components/errors.js":
/*!**********************************!*\
  !*** ./src/components/errors.js ***!
  \**********************************/
/*! exports provided: WalletNotSelectedError, WalletNotInitializedError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WalletNotSelectedError\", function() { return WalletNotSelectedError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WalletNotInitializedError\", function() { return WalletNotInitializedError; });\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"./node_modules/@solana/wallet-adapter-base/lib/esm/index.mjs\");\n\nclass WalletNotSelectedError extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__[\"WalletError\"] {\n  constructor() {\n    super(...arguments);\n    this.name = 'WalletNotSelectedError';\n  }\n\n}\nclass WalletNotInitializedError extends _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_0__[\"WalletError\"] {\n  constructor() {\n    super(...arguments);\n    this.name = 'WalletNotSelectedError';\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/errors.js?");

/***/ }),

/***/ "./src/components/mixins.js":
/*!**********************************!*\
  !*** ./src/components/mixins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  directives: {\n    clickOutsideModal: {\n      bind(el, binding, vnode) {\n        el.clickOutsideEvent = event => {\n          if (!(el === event.target || el.contains(event.target))) {\n            vnode.context[binding.expression](event);\n          }\n        };\n\n        document.body.addEventListener('click', el.clickOutsideEvent);\n      },\n\n      unbind(el) {\n        document.body.removeEventListener('click', el.clickOutsideEvent);\n      }\n\n    },\n    scrollLock: {\n      inserted(el, binding) {\n        if (binding) {\n          Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"disableBodyScroll\"])(el, {});\n        }\n      },\n\n      componentUpdated(el, binding) {\n        if (binding) {\n          Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"disableBodyScroll\"])(el, {});\n        } else {\n          Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"enableBodyScroll\"])(el);\n        }\n      },\n\n      unbind(el) {\n        Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__[\"enableBodyScroll\"])(el);\n      }\n\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/mixins.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./src/App.vue\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.productionTip = false;\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}).$mount('#app');\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 10:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 13:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 14:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 15:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 16:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 17:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 18:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 19:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 20:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");

/***/ }),

/***/ 6:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ }),

/***/ 9:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");

/***/ })

/******/ });