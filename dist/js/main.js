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
/******/ 	__webpack_require__.p = "http://localhost:1234/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/css/game.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./src/css/game.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin: 0;\\r\\n    \\r\\n}\\r\\n\\r\\n.section--play {\\r\\n    margin: 0 auto;\\r\\n    width: 65vw;\\r\\n    height: 70vh;\\r\\n    display: none;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.section__div--points {\\r\\n    width: 150px;\\r\\n    height: 50px;\\r\\n    background: #FFF;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-self: flex-start;\\r\\n    margin: 0 30px;\\r\\n}\\r\\n\\r\\n.section__div--points h3,\\r\\ndiv {\\r\\n    line-height: 50px;\\r\\n    font-weight: 100;\\r\\n    font-size: 25px;\\r\\n}\\r\\n\\r\\n.div--play-container {\\r\\n    padding: 7% 0;\\r\\n    width: 55%;\\r\\n    height: 100%;\\r\\n    background: #4B73CE;\\r\\n    display: inherit;\\r\\n    justify-content: space-between;\\r\\n    align-items: inherit;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n.play--word {\\r\\n    width: 72%;\\r\\n    height: 38%;\\r\\n    background: #C4C4C4;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.wrong {\\r\\n    -webkit-animation-name: wrong;\\r\\n            animation-name: wrong;\\r\\n    -webkit-animation-duration: 1s;\\r\\n            animation-duration: 1s;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes wrong {\\r\\n    0% {\\r\\n        transform: translateX(40px);  \\r\\n    }\\r\\n    20% {\\r\\n        transform: translateX(-30px); \\r\\n    }\\r\\n    40% {\\r\\n        transform: translateX(20px); \\r\\n    }\\r\\n    60% {\\r\\n        transform: translateX(-10px); \\r\\n    }\\r\\n    80% {\\r\\n        transform: translateX(5px); \\r\\n    }\\r\\n    100% {\\r\\n        transform: translateX(0px); \\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes wrong {\\r\\n    0% {\\r\\n        transform: translateX(40px);  \\r\\n    }\\r\\n    20% {\\r\\n        transform: translateX(-30px); \\r\\n    }\\r\\n    40% {\\r\\n        transform: translateX(20px); \\r\\n    }\\r\\n    60% {\\r\\n        transform: translateX(-10px); \\r\\n    }\\r\\n    80% {\\r\\n        transform: translateX(5px); \\r\\n    }\\r\\n    100% {\\r\\n        transform: translateX(0px); \\r\\n    }\\r\\n}\\r\\n\\r\\n.play--word h2 {\\r\\n    font-size: 50px;\\r\\n    font-weight: 200;\\r\\n    color: green;\\r\\n}\\r\\n\\r\\n.play--speak {\\r\\n    width: 72%;\\r\\n    height: 38%;\\r\\n    background: #3A3940;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.play--speak h4 {\\r\\n    font-size: 40px;\\r\\n    font-weight: 100;\\r\\n    color: #DCDCDC;\\r\\n}\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/game.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/css/styles.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src!./src/css/styles.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600&display=swap);\", \"\"]);\n// Module\nexports.push([module.i, \"* {\\r\\n    margin: 0;\\r\\n    \\r\\n}\\r\\n.section--play {\\r\\n    margin: 0 auto;\\r\\n    width: 65vw;\\r\\n    height: 70vh;\\r\\n    display: none;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.section__div--points {\\r\\n    width: 150px;\\r\\n    height: 50px;\\r\\n    background: #FFF;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n    align-self: flex-start;\\r\\n    margin: 0 30px;\\r\\n}\\r\\n.section__div--points h3,\\r\\ndiv {\\r\\n    line-height: 50px;\\r\\n    font-weight: 100;\\r\\n    font-size: 25px;\\r\\n}\\r\\n.div--play-container {\\r\\n    padding: 7% 0;\\r\\n    width: 55%;\\r\\n    height: 100%;\\r\\n    background: #4B73CE;\\r\\n    display: inherit;\\r\\n    justify-content: space-between;\\r\\n    align-items: inherit;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.play--word {\\r\\n    width: 72%;\\r\\n    height: 38%;\\r\\n    background: #C4C4C4;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.wrong {\\r\\n    animation-name: wrong;\\r\\n    animation-duration: 1s;\\r\\n}\\r\\n@keyframes wrong {\\r\\n    0% {\\r\\n        transform: translateX(40px);  \\r\\n    }\\r\\n    20% {\\r\\n        transform: translateX(-30px); \\r\\n    }\\r\\n    40% {\\r\\n        transform: translateX(20px); \\r\\n    }\\r\\n    60% {\\r\\n        transform: translateX(-10px); \\r\\n    }\\r\\n    80% {\\r\\n        transform: translateX(5px); \\r\\n    }\\r\\n    100% {\\r\\n        transform: translateX(0px); \\r\\n    }\\r\\n}\\r\\n.play--word h2 {\\r\\n    font-size: 50px;\\r\\n    font-weight: 200;\\r\\n    color: green;\\r\\n}\\r\\n.play--speak {\\r\\n    width: 72%;\\r\\n    height: 38%;\\r\\n    background: #3A3940;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.play--speak h4 {\\r\\n    font-size: 40px;\\r\\n    font-weight: 100;\\r\\n    color: #DCDCDC;\\r\\n}\\r\\n*,\\r\\n::after,\\r\\n::before {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    font-family: 'Source Sans Pro', sans-serif;\\r\\n}\\r\\nmain {\\r\\n    background: #777C82;\\r\\n    min-height: 100vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n}\\r\\n.section--home {\\r\\n    margin: 0 auto;\\r\\n    width: 60vw;\\r\\n    height: 60vh;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.section__div--title {\\r\\n    width: 100%;\\r\\n    height: 40%;\\r\\n    background: #FFF;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    margin: 7%;\\r\\n}\\r\\n.section__div--title h1 {\\r\\n    font-size: 50px;\\r\\n    font-weight: 200;\\r\\n    color: #707070;\\r\\n}\\r\\n.section__div--play {\\r\\n    background: #FFF;\\r\\n    width: 50%;\\r\\n    height: 15%;\\r\\n    display: inherit;\\r\\n    justify-content: inherit;\\r\\n    align-items: inherit;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.section__div--play h3 {\\r\\n    font-size: 35px;\\r\\n    font-weight: 300;\\r\\n    color: #707070;\\r\\n}\\r\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/css/styles.css?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/game.css":
/*!**************************!*\
  !*** ./src/css/game.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src!./game.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/css/game.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/game.css?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../node_modules/postcss-loader/src!./styles.css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./src/css/styles.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar toPrintPoints = document.getElementById('points');\nvar toPrintWords = document.getElementById('words');\nvar speakBtn = document.getElementById('speak-button');\nvar wordWrap = document.querySelector(\".play--word\");\nvar divs = {\n  toPrintPoints: toPrintPoints,\n  toPrintWords: toPrintWords,\n  speakBtn: speakBtn,\n  wordWrap: wordWrap\n};\nvar SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\nvar SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;\nvar grammar = '#JSGF V1.0';\nvar recognition = new SpeechRecognition();\nvar speechRecognitionList = new SpeechGrammarList();\nrecognition.lang = 'en-US';\nspeechRecognitionList.addFromString(grammar, 1);\nrecognition.grammars = speechRecognitionList;\nrecognition.interimResults = false;\nvar words = ['Hello', 'Window', 'Guitar', 'Thunder', 'Phone', 'Mouse', 'Keyboard', 'Glass', 'Speaker', 'Box'];\n\nvar Pronunciation =\n/*#__PURE__*/\nfunction () {\n  function Pronunciation(words, divs) {\n    _classCallCheck(this, Pronunciation);\n\n    this.wordsDiv = divs.toPrintWords;\n    this.pointsDiv = divs.toPrintPoints;\n    this.points = 0;\n    this.level = 6;\n    this.numberWords = words.length;\n    this.start();\n    this.printPoints(this.points);\n  }\n\n  _createClass(Pronunciation, [{\n    key: \"start\",\n    value: function start() {\n      do {\n        this.number = Math.floor(Math.random() * this.numberWords);\n        this.wordToSay = this.numberToWord(this.number);\n        this.printWords();\n        this.recognitionIsStart();\n      } while (this.points <= 7);\n\n      speakBtn.addEventListener('click', function () {\n        recognition.start();\n      });\n\n      recognition.onspeechend = function () {\n        recognition.stop();\n      };\n    }\n  }, {\n    key: \"printPoints\",\n    value: function printPoints(points) {\n      this.pointsDiv.textContent = points;\n    }\n  }, {\n    key: \"printWords\",\n    value: function printWords() {\n      this.wordsDiv.textContent = this.wordToSay;\n    }\n  }, {\n    key: \"numberToWord\",\n    value: function numberToWord(n) {\n      switch (n) {\n        case n:\n          return words[n];\n      }\n    }\n  }, {\n    key: \"increasePoints\",\n    value: function increasePoints() {\n      this.points++;\n      this.printPoints(this.points);\n    }\n  }, {\n    key: \"recognitionIsStart\",\n    value: function recognitionIsStart() {\n      recognition.onstart = function () {\n        console.log('voice is active');\n      };\n\n      this.preValidation(this.wordToSay);\n    }\n  }, {\n    key: \"preValidation\",\n    value: function preValidation(word) {\n      this.wordToSay = word.toLowerCase();\n      this.onResult(this.wordToSay, this);\n    }\n  }, {\n    key: \"saidToLower\",\n    value: function saidToLower(said) {\n      return said.toLowerCase();\n    }\n  }, {\n    key: \"onResult\",\n    value: function onResult(say, self) {\n      recognition.onresult = function (event) {\n        console.log(event);\n        var current = event.resultIndex;\n        var wordSaid = event.results[current][0].transcript;\n        var wordSay = say;\n        s; // content.textContent = transcript;\n\n        var WORD_SAID = self.saidToLower(wordSaid);\n        self.validation(WORD_SAID, wordSay);\n      };\n    }\n  }, {\n    key: \"validation\",\n    value: function validation(Said, Say) {\n      if (Said == Say) {\n        console.log('You did it!');\n        this.increasePoints();\n        this.start();\n      } else {\n        this.tryAgain();\n      }\n    }\n  }, {\n    key: \"tryAgain\",\n    value: function tryAgain() {\n      wordWrap.classList.add('wrong');\n\n      function remove() {\n        if (wordWrap.classList.contains('wrong')) {\n          wordWrap.classList.remove('wrong');\n        }\n      }\n\n      remove();\n    }\n  }]);\n\n  return Pronunciation;\n}();\n\nfunction newGame() {\n  var startGame = new Pronunciation(words, divs);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newGame);\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/game.css */ \"./src/css/game.css\");\n/* harmony import */ var _css_game_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_game_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n\n\n\nvar home = document.getElementById('home');\nvar playGame = document.getElementById('play-game');\nvar game = document.getElementById('game');\nvar tl = new TimelineMax();\nplayGame.addEventListener('click', function () {\n  tl.fromTo(home, 1, {\n    display: 'flex',\n    opacity: '1'\n  }, {\n    display: 'none',\n    opacity: '.0'\n  }).fromTo(game, .2, {\n    display: 'none',\n    opacity: '.4'\n  }, {\n    display: 'flex',\n    opacity: '1'\n  }).fromTo('.div--play-container', 1, {\n    x: -120,\n    opacity: '.4'\n  }, {\n    x: 0,\n    opacity: '1'\n  }, '-=0.4').fromTo(\".section__div--points\", 1, {\n    opacity: '0'\n  }, {\n    opacity: '1'\n  });\n  Object(_game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });