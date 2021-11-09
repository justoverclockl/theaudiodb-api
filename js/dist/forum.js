module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/forum/app */ "flarum/forum/app");
/* harmony import */ var flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/DiscussionHero */ "flarum/forum/components/DiscussionHero");
/* harmony import */ var flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2__);
/*
  __ _                              _ _
 / _| |                            (_) |
| |_| | __ _ _ __ _   _ _ __ ___    _| |_
|  _| |/ _` | '__| | | | '_ ` _ \  | | __|
| | | | (_| | |  | |_| | | | | | |_| | |_
|_| |_|\__,_|_|   \__,_|_| |_| |_(_)_|\__|
 */



flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('justoverclock/theaudiodb-api', function () {
  Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, ['oncreate'], function () {
    var isLoggedIn = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.session.user;
    var artistTitle = this.attrs.discussion.title().split(/\s+/).join('%20');
    var languageCode = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('justoverclock-theaudiodb-api.langCode') || 'EN'; // gestiamo gli errori nella risposta

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    }

    if (isLoggedIn) {
      var artistApi = fetch('https://theaudiodb.com/api/v1/json/1/search.php?s=' + artistTitle).then(handleErrors).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        m.redraw();
        var arrayElem = 'strBiography' + languageCode;

        if (data.artists[0][arrayElem] === null) {
          data.artists[0][arrayElem] = 'Oops! Description is not available in your language unfortunately...You can contribute to TheAudioDB.com by adding information about this artists in your language.';
        }

        var descArt = document.getElementById('descArtist').innerText = data.artists[0][arrayElem].substring(0, 400) + '...';
        var thumbArtists = document.getElementById('imgArtists').src = data.artists[0].strArtistThumb;
        var genreArtist = document.getElementById('genreArtist').innerText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-theaudiodb-api.forum.genres') + ': ' + data.artists[0].strStyle;
        var yearBorn = document.getElementById('yearBorn').innerText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-theaudiodb-api.forum.intFormedYear') + ': ' + data.artists[0].intFormedYear;
        var countryArtist = document.getElementById('strcountry').innerText = flarum_forum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans('justoverclock-theaudiodb-api.forum.countryart') + ': ' + data.artists[0].strCountry;
      })["catch"](function (error) {
        return console.log('This Artist does not exist ;) =>', artistTitle);
      });
    }

    Object(flarum_common_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_forum_components_DiscussionHero__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
      items.add('artistDetailMusic', m("div", {
        "class": "artistWrapper"
      }, m("div", {
        id: "containerArtist"
      }, m("div", {
        id: "contentArtist"
      }, m("p", {
        "class": "artistDesc",
        id: "descArtist"
      }), m("div", {
        "class": "itemdescrip"
      }, m("div", {
        "class": "genreArtist",
        id: "genreArtist"
      }), m("div", {
        "class": "yearBorn",
        id: "yearBorn"
      }), m("div", {
        "class": "strcountry",
        id: "strcountry"
      })))), m("div", {
        id: "sidebarImgArtist"
      }, m("img", {
        className: "imgArtist",
        id: "imgArtists",
        src: ""
      }))));
    });
  });
});

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/forum/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['forum/app']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/app'];

/***/ }),

/***/ "flarum/forum/components/DiscussionHero":
/*!************************************************************************!*\
  !*** external "flarum.core.compat['forum/components/DiscussionHero']" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/DiscussionHero'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map