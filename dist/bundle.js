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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"html {\\r\\n  color: #f9ffee;\\r\\n  background-color: #222831;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n*,\\r\\n::before,\\r\\n::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Segoe UI Light', sans-serif;\\r\\n}\\r\\n\\r\\nh1,\\r\\nh2 {\\r\\n  text-align: center;\\r\\n  color: #efbb35;\\r\\n  font-style: italic;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.section-1,\\r\\n.section-2 {\\r\\n  border-radius: 10px;\\r\\n  background-color: #1f242c;\\r\\n  padding: 0 15px;\\r\\n  min-height: 500px;\\r\\n}\\r\\n\\r\\n.section-1 {\\r\\n  float: left;\\r\\n  margin-right: 50px;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.section-2 {\\r\\n  float: right;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  width: 750px;\\r\\n}\\r\\n\\r\\n.items div {\\r\\n  text-align: center;\\r\\n  margin: 5px;\\r\\n}\\r\\n\\r\\n.cart {\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.item-card {\\r\\n  padding: 5px;\\r\\n  background-color: #1a1d24;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.status-badge {\\r\\n  display: block;\\r\\n  text-align: left;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px;\\r\\n  margin-bottom: 5px;\\r\\n  font-style: italic;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.available {\\r\\n  background-color: rgba(70, 236, 48, 0.1);\\r\\n  color: #45ef35;\\r\\n}\\r\\n\\r\\n.unavailable {\\r\\n  background-color: rgba(236, 76, 48, 0.1);\\r\\n  color: #ef3535;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  transition: ease 0.5s;\\r\\n  font-family: 'Segoe UI', sans-serif;\\r\\n  width: 110px;\\r\\n  height: 30px;\\r\\n  background-color: transparent;\\r\\n  border-width: 1px;\\r\\n  border-style: solid;\\r\\n  color: #f9ffee;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.js-remove-btn {\\r\\n  transition: ease 0.5s;\\r\\n  font-family: 'Segoe UI', sans-serif;\\r\\n  width: 110px;\\r\\n  height: 30px;\\r\\n  background-color: transparent;\\r\\n  border-width: 1px;\\r\\n  border-style: solid;\\r\\n  cursor: pointer;\\r\\n  border-color: #e84279;\\r\\n  color: #e84279;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  transition: 0.1s ease;\\r\\n  border-style: hidden;\\r\\n  color: #1f242c;\\r\\n  background-color: #f9ffee;\\r\\n}\\r\\n.js-remove-btn:hover {\\r\\n  transition: 0.1s ease;\\r\\n  border-style: hidden;\\r\\n  color: #1f242c;\\r\\n\\r\\n  background-color: #e84279;\\r\\n}\\r\\n\\r\\n.btn:disabled {\\r\\n  color: gray;\\r\\n  border-color: slategray;\\r\\n  background-color: transparent;\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\\r\\n.btn:disabled:hover {\\r\\n  color: gray;\\r\\n  border-width: 1px;\\r\\n  border-style: solid;\\r\\n  border-color: slategray;\\r\\n  background-color: transparent;\\r\\n  cursor: not-allowed;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/draw-list.js":
/*!*************************************!*\
  !*** ./src/components/draw-list.js ***!
  \*************************************/
/*! exports provided: drawList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawList\", function() { return drawList; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n //рендерим список товаров на страницу\n\nfunction drawList(list) {\n  _index__WEBPACK_IMPORTED_MODULE_0__[\"itemsListElem\"].innerHTML = '';\n  list.forEach(function (_ref) {\n    var id = _ref.id,\n        name = _ref.name,\n        image = _ref.image,\n        descr = _ref.descr,\n        price = _ref.price,\n        available = _ref.available;\n    var listItem = createItem(id, name, image, descr, price, available);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"itemsListElem\"].insertAdjacentHTML('beforeend', listItem);\n  });\n} //функция создания элемента\n\n\nfunction createItem(id, name, image, descr, price, available) {\n  var newItem = \"\\n      <div class=\\\"item-card\\\" id =\\\"\".concat(id, \"\\\">\\n        <img src=\").concat(image, \" />\\n        <h4>\").concat(name, \"</h4>\\n        <p>\").concat(descr, \"</p>\\n        <h2>\").concat(price, \"</h2>\\n        \").concat(checkAvailability(available), \"\\n      <div>\\n      \");\n  return newItem;\n} //чекаем доступность товара, для UX\n\n\nfunction checkAvailability(status) {\n  if (status) {\n    return \"\\n    <span class='status-badge available'>\\u0412 \\u043D\\u0430\\u043B\\u0438\\u0447\\u0438\\u0438</span>\\n    <button class=\\\"btn\\\" id=\\\"js-cart-btn\\\">\\u0412 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n    \";\n  } else {\n    return \"\\n    <span class='status-badge unavailable'>\\u0417\\u0430\\u043A\\u043E\\u043D\\u0447\\u0438\\u043B\\u0441\\u044F</span>\\n    <button class=\\\"btn\\\"id=\\\"js-cart-btn\\\" disabled>\\u0412 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n    \";\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/components/draw-list.js?");

/***/ }),

/***/ "./src/components/make-list.js":
/*!*************************************!*\
  !*** ./src/components/make-list.js ***!
  \*************************************/
/*! exports provided: itemList, makeList, loadList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemList\", function() { return itemList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeList\", function() { return makeList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadList\", function() { return loadList; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n/* harmony import */ var _draw_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./draw-list */ \"./src/components/draw-list.js\");\nvar itemList = []; // Общий массив товаров\n\nvar pageList = []; // Массив таваров отображаемых на странице\n\nvar numberPerPage = 15; // Кол-во элементов per page\n\nvar numberOfPages = 0; // Всего страниц (необходимо для пагинации)\n\nvar numberOfItems = 3000; // Общее кол-во элементов в массиве\n\n\n //получаем общее кол-во страниц\n\nfunction getNumberOfPages() {\n  return Math.ceil(itemList.length / numberPerPage);\n} //Заполняем массив позициями\n\n\nfunction makeList() {\n  for (var id = 0; id < numberOfItems; id++) {\n    itemList.push({\n      id: id,\n      name: \"Item \".concat((~~(Math.random() * 1e8)).toString(16)),\n      image: \"https://via.placeholder.com/150.png\",\n      descr: \"\\u0421\\u0443\\u043F\\u0435\\u0440 \\u0441\\u0442\\u0443\\u043B \".concat((~~(Math.random() * 1e8)).toString(16)),\n      price: \"\".concat(Math.floor(Math.random() * 9999), \"\\u20BD\"),\n      available: Math.random() < 0.7,\n      count: 0\n    });\n  }\n\n  numberOfPages = getNumberOfPages();\n} //Получаем кусок массива дл отображния на странице\n\n\nfunction loadList() {\n  var begin = (_index__WEBPACK_IMPORTED_MODULE_0__[\"currentPage\"] - 1) * numberPerPage;\n  var end = begin + numberPerPage;\n  pageList = itemList.slice(begin, end); //вырезаем нужный нам кусок\n\n  Object(_draw_list__WEBPACK_IMPORTED_MODULE_1__[\"drawList\"])(pageList); //рендерим на странице\n\n  check();\n} //чекаем своё положение, для откл. кнопок\n\n\nfunction check() {\n  document.getElementById('next').disabled = _index__WEBPACK_IMPORTED_MODULE_0__[\"currentPage\"] == numberOfPages ? true : false;\n  document.getElementById('previous').disabled = _index__WEBPACK_IMPORTED_MODULE_0__[\"currentPage\"] == 1 ? true : false;\n}\n\n\n\n//# sourceURL=webpack:///./src/components/make-list.js?");

/***/ }),

/***/ "./src/components/storage-cart.js":
/*!****************************************!*\
  !*** ./src/components/storage-cart.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StorageCart; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar StorageCart =\n/*#__PURE__*/\nfunction () {\n  //при инициализации StorageCart смотрим в хранилище,\n  //если там что-то есть, то берем и помещаем в this.items,\n  //если хранилище пустое, то просто создаем пустой массив this.items = [];\n  function StorageCart() {\n    _classCallCheck(this, StorageCart);\n\n    this.items = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];\n  } //Добавим метод для получения this.items\n\n\n  _createClass(StorageCart, [{\n    key: \"getItems\",\n    value: function getItems() {\n      return this.items;\n    } //Метод добавление товара в корзину\n\n  }, {\n    key: \"add\",\n    value: function add(id, itemName, image, price, count) {\n      if (count == 1) {\n        //проверяем уникальность\n        this.items.push({\n          id: id,\n          name: itemName,\n          image: image,\n          price: price,\n          count: count\n        });\n      } else {\n        //если товар не уникален, инкрементим счетчик сущ. позиции\n        //и обновляем ценник\n        this.items.find(function (item) {\n          if (item.id == id) {\n            ++item.count;\n            item.price = parseInt(price) * item.count;\n          }\n        });\n      }\n    } //метод удаления товара из корзины\n\n  }, {\n    key: \"remove\",\n    value: function remove(id, price) {\n      var _this = this;\n\n      id = parseInt(id);\n      this.items.find(function (item) {\n        //смотрим в массив, находим нужный товар\n        //проверяем на количество, если последний то удаляем\n        if (item.id == id && item.count == 1) {\n          var filtrArr = _this.items.filter(function (item) {\n            return item.id !== id;\n          });\n\n          _this.items = filtrArr;\n        } //в противном случае декриментим счетчик и правим цену\n\n\n        if (item.id == id && item.count > 1) {\n          --item.count;\n          item.price = parseInt(price) * item.count;\n        }\n      });\n    } //метод создания элемента\n\n  }, {\n    key: \"createCartItem\",\n    value: function createCartItem(id, name, image, price, count) {\n      var newItem = \"\\n    <div id =\\\"\".concat(id, \"\\\">\\n      <h3>\").concat(name, \"</h3>\\n      <img src=\").concat(image, \" />\\n      <h4>\").concat(price, \"</h4>\\n      <button class=\\\"js-remove-btn\\\">\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C</button>\\n      <span>x\").concat(count, \"</span>\\n\\n    <div>\\n    \");\n      return newItem;\n    } //метод подсчета суммы для корзины + вставка на страничку\n    //!!по хорошему нужно разбить на 2!!\n\n  }, {\n    key: \"getTotalSumm\",\n    value: function getTotalSumm() {\n      var priceArr = [];\n      this.items.forEach(function (_ref) {\n        var price = _ref.price;\n        priceArr.push(parseInt(price));\n      });\n\n      var reducer = function reducer(accumulator, currentValue) {\n        return accumulator + currentValue;\n      };\n\n      return \"<br><hr>\\n    <p><b>\\u0418\\u0442\\u043E\\u0433\\u043E: \".concat(priceArr.reduce(reducer, 0), \"\\u20BD\\n    <b/></p>\");\n    } //сохраняем корзину в localStorage\n\n  }, {\n    key: \"saveItems\",\n    value: function saveItems() {\n      localStorage.items = JSON.stringify(Array.from(this.items));\n    }\n  }]);\n\n  return StorageCart;\n}();\n\n\n\n//# sourceURL=webpack:///./src/components/storage-cart.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: itemsListElem, currentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemsListElem\", function() { return itemsListElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentPage\", function() { return currentPage; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_storage_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/storage-cart */ \"./src/components/storage-cart.js\");\n/* harmony import */ var _components_make_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/make-list */ \"./src/components/make-list.js\");\n\n\n\nvar cartElem = document.querySelector('.js-cart');\nvar itemsListElem = document.querySelector('.js-items');\nvar currentPage = 1; // Страница обитания\n//Создаем экз. списка для сохранения в localStorage\n\nvar newCart = new _components_storage_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //проверка наличия товаров в локальном хранилище\n//если есть -> формируем элементы, иначе выводим сообщение \"cart is empty\"\n\nfunction makeCartList() {\n  cartElem.innerHTML = '';\n\n  if (newCart.getItems().length) {\n    newCart.getItems().forEach(function (_ref) {\n      var id = _ref.id,\n          name = _ref.name,\n          image = _ref.image,\n          price = _ref.price,\n          count = _ref.count;\n      var newCartItem = newCart.createCartItem(id, name, image, price, count);\n      cartElem.insertAdjacentHTML('afterbegin', newCartItem);\n    });\n    cartElem.insertAdjacentHTML('beforeend', newCart.getTotalSumm());\n  } else {\n    cartElem.textContent = 'Корзина пуста';\n  }\n} //Поехали\n\n\nObject(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"makeList\"])();\nObject(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"loadList\"])();\nmakeCartList(); //EventListener получился громоздким, и по хорошему в реальном проекте\n//его лучше разбить на несколько обработчиков, для ясности кода\n//а ещё лучше React :)\n\ndocument.addEventListener('click', function (evt) {\n  //довабление товара в корзину\n  if (evt.target.id == 'js-cart-btn') {\n    _components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"itemList\"].find(function (item) {\n      var targetId = parseInt(event.target.parentNode.id);\n\n      if (targetId == item.id) {\n        ++item.count;\n        newCart.add(item.id, item.name, item.image, item.price, item.count);\n        newCart.saveItems();\n        makeCartList();\n      }\n    });\n  } //удание товара из корзины\n\n\n  if (evt.target.className == 'js-remove-btn') {\n    _components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"itemList\"].find(function (item) {\n      var targetId = parseInt(event.target.parentNode.id);\n\n      if (targetId == item.id) {\n        --item.count;\n        newCart.remove(targetId, item.price);\n        newCart.saveItems();\n        makeCartList();\n        if (item.cont < 1) evt.target.parentNode.remove();\n      }\n    });\n  } //сортировка по цене (возрастание)\n\n\n  if (evt.target.id == 'js-price-ascending') {\n    _components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"itemList\"].sort(function (a, b) {\n      return parseFloat(a.price) - parseFloat(b.price);\n    });\n    itemsListElem.innerHTML = '';\n    Object(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"loadList\"])();\n  } //сортировка по наличию\n\n\n  if (evt.target.id == 'js-available-ascending') {\n    _components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"itemList\"].sort(function (a, b) {\n      return b.available - a.available;\n    });\n    itemsListElem.innerHTML = '';\n    Object(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"loadList\"])();\n  } //обработчик на кнопку \"пред. стр.\"\n\n\n  if (evt.target.id == 'previous') {\n    currentPage -= 1;\n    Object(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"loadList\"])();\n  } //тоже самое, только для \"сл. стр\"\n\n\n  if (evt.target.id == 'next') {\n    currentPage += 1;\n    Object(_components_make_list__WEBPACK_IMPORTED_MODULE_2__[\"loadList\"])();\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });