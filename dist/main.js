/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./SFPro.OTF */ \"./src/SFPro.OTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./morning.jpg */ \"./src/morning.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./night.jpg */ \"./src/night.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./search.png */ \"./src/search.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n    font-family: SFPro;\\r\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n*{\\r\\n    font-family: SFPro, sans-serif;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n@keyframes fade {\\r\\n    from {opacity: 0;}\\r\\n    to {opacity: 1;}\\r\\n}\\r\\n\\r\\nbody{\\r\\n    margin: 0px;\\r\\n    height: 100vh;\\r\\n    \\r\\n}\\r\\n\\r\\n.morning{\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat;\\r\\n    background-size: cover;\\r\\n    background-position: center;\\r\\n}\\r\\n\\r\\n.night{\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat;\\r\\n    background-size: cover;\\r\\n    background-position: center;\\r\\n}\\r\\n\\r\\n#content,\\r\\n#main-weather,\\r\\n#sidebar {\\r\\n    display: flex;\\r\\n    flex-direction: column; /* ⬅️ CRITICAL: Forces elements to stack vertically top to bottom */\\r\\n    background-color: rgba(0, 0, 0, 0.2);\\r\\n    backdrop-filter: blur(20px);\\r\\n    width: 400px;\\r\\n    padding: 40px;\\r\\n    box-sizing: border-box; /* Prevents container sizing blowouts from padding additions */\\r\\n}\\r\\n#content{\\r\\n    height: 100vh;\\r\\n}\\r\\n\\r\\n#main{\\r\\n    background-color: rgba(255,255,255,0);\\r\\n    padding: 150px;\\r\\n    display: flex;\\r\\n    width: auto;\\r\\n    flex: 1;\\r\\n    align-items: flex-end;\\r\\n    \\r\\n}\\r\\n\\r\\n#main-weather{\\r\\n    animation: fade 2s linear;\\r\\n    gap: 32px;\\r\\n    height: 120px;\\r\\n    align-items: flex-end;\\r\\n    \\r\\n}\\r\\n\\r\\n#sidebar{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    width: clamp(100px,40vw,600px);\\r\\n    flex-direction: column;\\r\\n    padding: 50px;\\r\\n    gap: 16px;\\r\\n    background-color: rgba(20, 20, 20, 0.3);\\r\\n    backdrop-filter: blur(30px);\\r\\n}\\r\\n\\r\\n#sidebar *{\\r\\n    color: rgba(255,255,255,0.5);\\r\\n    letter-spacing: 1px;\\r\\n}\\r\\n\\r\\n#sidebar-container{\\r\\n    display:flex;\\r\\n    flex-direction: column;\\r\\n    gap: 16px;\\r\\n    animation: fade .8s linear\\r\\n}\\r\\n\\r\\n#location-details{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 2px;\\r\\n}\\r\\n\\r\\n#day-details,\\r\\n#day-details div{\\r\\n    display: flex;\\r\\n}\\r\\n#day-details{\\r\\n    gap: 16px;\\r\\n    font-size: 20px;\\r\\n\\r\\n}\\r\\n\\r\\n#weather{\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n#temperature{\\r\\n    font-size: 120px;\\r\\n    height: 120px;\\r\\n}\\r\\n\\r\\n#city{\\r\\n    font-size: 60px;\\r\\n    text-align: start;\\r\\n}\\r\\n\\r\\n#box-information{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    width: clamp(100px,40vw,600px);\\r\\n    font-size: 16px;\\r\\n    \\r\\n}\\r\\n\\r\\n#search-container{\\r\\n    display: flex;\\r\\n    gap: 8px;\\r\\n    align-items: center;\\r\\n    margin-bottom: 24px;\\r\\n}\\r\\n\\r\\n#search-btn{\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n    background-image:url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\r\\n    background-size: contain;\\r\\n    border: none;\\r\\n    background-color: inherit;\\r\\n    filter: invert(100%);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n#search-bar{\\r\\n    background-color: inherit;\\r\\n    height: 30px;\\r\\n    border-top: none;\\r\\n    border-left: none;\\r\\n    border-right: none;\\r\\n    border-bottom: 2px solid rgba(255,255,255,0.2);;\\r\\n    transition: border-color 0.2s;\\r\\n}\\r\\n#search-bar::placeholder{\\r\\n    color: rgba(255,255,255,0.5);\\r\\n    letter-spacing: 1px;\\r\\n}\\r\\n#search-bar:focus{\\r\\n    color: white;\\r\\n    outline: none;\\r\\n    border-top: none;\\r\\n    border-left: none;\\r\\n    border-right: none;\\r\\n    border-color: white;\\r\\n}\\r\\n\\r\\n#value,\\r\\n#weather-title{\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n#weather-title{\\r\\n    margin-bottom: 24px;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n#weather-icon{\\r\\n    width: 60px;\\r\\n}\\r\\n#weather-container{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.error{\\r\\n    border-top: none;\\r\\n    border-left: none;\\r\\n    border-right: none;\\r\\n    border-bottom: 1px solid red;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/boxDetails.js":
/*!***************************!*\
  !*** ./src/boxDetails.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction boxDetails(title, value) {\r\n  const container = document.createElement('div');\r\n  const key = document.createElement('div');\r\n  const val = document.createElement('div');\r\n\r\n  key.textContent = title;\r\n  val.textContent = value;\r\n\r\n  container.appendChild(key);\r\n  container.appendChild(val);\r\n  container.setAttribute('id', 'box-information');\r\n  val.setAttribute('id', 'value');\r\n  return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boxDetails);\r\n\n\n//# sourceURL=webpack://weather-app/./src/boxDetails.js?");

/***/ }),

/***/ "./src/createSidebar.js":
/*!******************************!*\
  !*** ./src/createSidebar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boxDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boxDetails */ \"./src/boxDetails.js\");\n\r\n\r\nfunction createSidebar() {\r\n  const sidebar = document.querySelector('#sidebar');\r\n  if (!sidebar) return;\r\n\r\n  // Clear out old elements if they exist to prevent duplicates\r\n  sidebar.innerHTML = '';\r\n\r\n  // 1. Create a container for our dropdown and search bar controls\r\n  const controlsContainer = document.createElement('div');\r\n  controlsContainer.setAttribute('id', 'controls-container');\r\n  controlsContainer.style.width = '100%';\r\n  controlsContainer.style.display = 'flex';\r\n  controlsContainer.style.flexDirection = 'column';\r\n  controlsContainer.style.gap = '12px';\r\n  controlsContainer.style.marginBottom = '20px';\r\n\r\n  // 2. Create the dropdown selector element\r\n  const unitSelector = document.createElement('select');\r\n  unitSelector.setAttribute('id', 'unit-selector');\r\n  unitSelector.style.width = '100%';\r\n  unitSelector.style.padding = '10px';\r\n  unitSelector.style.background = 'rgba(0, 0, 0, 0.4)';\r\n  unitSelector.style.color = 'white';\r\n  unitSelector.style.border = '1px solid rgba(255, 255, 255, 0.2)';\r\n  unitSelector.style.borderRadius = '4px';\r\n  unitSelector.style.fontSize = '16px';\r\n  unitSelector.style.cursor = 'pointer';\r\n  unitSelector.style.outline = 'none';\r\n\r\n  const celsiusOption = document.createElement('option');\r\n  celsiusOption.value = 'metric';\r\n  celsiusOption.textContent = 'Celsius (°C)';\r\n\r\n  const fahrenheitOption = document.createElement('option');\r\n  fahrenheitOption.value = 'imperial';\r\n  fahrenheitOption.textContent = 'Fahrenheit (°F)';\r\n\r\n  unitSelector.appendChild(celsiusOption);\r\n  unitSelector.appendChild(fahrenheitOption);\r\n  controlsContainer.appendChild(unitSelector);\r\n  \r\n  // Attach the controls panel at the very top of the sidebar\r\n  sidebar.appendChild(controlsContainer);\r\n\r\n  // 3. Create Heading Title\r\n  const weatherTitle = document.createElement('div');\r\n  weatherTitle.textContent = 'Weather Details';\r\n  weatherTitle.setAttribute('id', 'weather-title');\r\n  weatherTitle.style.fontSize = '20px';\r\n  weatherTitle.style.fontWeight = 'bold';\r\n  weatherTitle.style.margin = '10px 0';\r\n  sidebar.appendChild(weatherTitle);\r\n\r\n  // 4. Create Weather Condition Info Rows\r\n  const container = document.createElement('div');\r\n  container.setAttribute('id', 'sidebar-container');\r\n  \r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Feels Like', ''));\r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('High', ''));\r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Low', ''));\r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Humidity', ''));\r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Pressure', ''));\r\n  container.appendChild((0,_boxDetails__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Wind', ''));\r\n  \r\n  sidebar.appendChild(container);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSidebar);\n\n//# sourceURL=webpack://weather-app/./src/createSidebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ \"./src/loadPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _loadMainWeatherContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMainWeatherContainer */ \"./src/loadMainWeatherContainer.js\");\n/* harmony import */ var _createSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createSidebar */ \"./src/createSidebar.js\");\n// ============================================\r\n// WEATHER APP INDEX.JS\r\n// ============================================\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet currentUnits = 'metric'; // Default: Celsius\r\nlet currentCity = 'Tokyo';   // Track the last successfully searched city\r\n\r\n// ============================================\r\n// WEATHER API FETCH\r\n// ============================================\r\nasync function getWeather(location, units) {\r\n    try {\r\n        let response;\r\n        if (typeof location === 'string') {\r\n            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=2a3e6417c89470aaa7587fa599ac7255`);\r\n        } else if (Array.isArray(location)) {\r\n            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location[0]}&lon=${location[1]}&units=${units}&appid=2a3e6417c89470aaa7587fa599ac7255`);\r\n        } else {\r\n            throw new Error(\"Invalid location parameters\");\r\n        }\r\n\r\n        const weatherData = await response.json();\r\n        return weatherData;\r\n    } catch (error) {\r\n        throw new Error(error.message || \"Weather data could not be fetched.\");\r\n    }\r\n}\r\n\r\n// ============================================\r\n// DROPDOWN CREATION FUNCTION\r\n// ============================================\r\nfunction appendUnitDropdown(sidebarElement) {\r\n    const dropdownContainer = document.createElement('div');\r\n    dropdownContainer.setAttribute('id', 'dropdown-container');\r\n    dropdownContainer.style.width = '100%';\r\n    dropdownContainer.style.marginBottom = '20px';\r\n\r\n    const unitSelector = document.createElement('select');\r\n    unitSelector.setAttribute('id', 'unit-selector');\r\n    \r\n    // Style dropdown inline to ensure visibility over backgrounds\r\n    unitSelector.style.width = '100%';\r\n    unitSelector.style.padding = '10px';\r\n    unitSelector.style.background = 'rgba(0, 0, 0, 0.5)';\r\n    unitSelector.style.color = 'white';\r\n    unitSelector.style.border = '1px solid rgba(255, 255, 255, 0.2)';\r\n    unitSelector.style.borderRadius = '4px';\r\n    unitSelector.style.fontSize = '16px';\r\n    unitSelector.style.cursor = 'pointer';\r\n    unitSelector.style.outline = 'none';\r\n    \r\n    const celsiusOption = document.createElement('option');\r\n    celsiusOption.value = 'metric';\r\n    celsiusOption.textContent = 'Celsius (°C)';\r\n    celsiusOption.style.background = '#1e1e2f';\r\n    \r\n    const fahrenheitOption = document.createElement('option');\r\n    fahrenheitOption.value = 'imperial';\r\n    fahrenheitOption.textContent = 'Fahrenheit (°F)';\r\n    fahrenheitOption.style.background = '#1e1e2f';\r\n    \r\n    unitSelector.appendChild(celsiusOption);\r\n    unitSelector.appendChild(fahrenheitOption);\r\n    \r\n    unitSelector.value = currentUnits;\r\n    \r\n    // Update unit states and refresh UI smoothly\r\n    unitSelector.addEventListener('change', (e) => {\r\n        currentUnits = e.target.value;\r\n        setData(currentCity); \r\n    });\r\n    \r\n    dropdownContainer.appendChild(unitSelector);\r\n    \r\n    // Inserts the dropdown cleanly at the top of the sidebar panel\r\n    sidebarElement.insertBefore(dropdownContainer, sidebarElement.firstChild);\r\n}\r\n\r\n// ============================================\r\n// WEATHER DISPLAY FUNCTION\r\n// ============================================\r\nasync function setData(location) {\r\n    try {\r\n        const weatherData = await getWeather(location, currentUnits);\r\n        \r\n        const unitSuffix = currentUnits === 'metric' ? '°C' : '°F';\r\n        const windSuffix = currentUnits === 'metric' ? 'm/s' : 'mph';\r\n\r\n        // Elements are queried here safely AFTER they are attached to the page body\r\n        const tempDiv = document.querySelector('#temperature');\r\n        const cityDiv = document.querySelector('#city');\r\n        const iconImg = document.querySelector('#weather-icon');\r\n        const weatherTextDiv = document.querySelector('#weather');\r\n\r\n        if (tempDiv) tempDiv.textContent = `${Math.ceil(weatherData.main.temp)}${unitSuffix}`;\r\n        if (cityDiv) cityDiv.textContent = weatherData.name;\r\n        if (iconImg) iconImg.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;\r\n        if (weatherTextDiv) weatherTextDiv.textContent = weatherData.weather[0].main;\r\n        \r\n        currentCity = weatherData.name;\r\n        populateSidebar(weatherData, unitSuffix, windSuffix);\r\n        \r\n        const date = getDate(weatherData.timezone);\r\n        setTime(date);\r\n\r\n    } catch (error) {\r\n        console.error(\"Error setting weather display:\", error);\r\n    }\r\n}\r\n\r\n// ============================================\r\n// TIME HANDLERS\r\n// ============================================\r\nfunction getDate(timeOffSet) {\r\n    const date = new Date();\r\n    const localTime = date.getTime();\r\n    const localOffset = date.getTimezoneOffset() * 60000;\r\n    const utc = localTime + localOffset;\r\n    const location = utc + (1000 * timeOffSet);\r\n    return new Date(location);\r\n}\r\n\r\nfunction setTime(date) {\r\n    const hours = date.getHours().toString();\r\n    const minutes = date.getMinutes().toString();\r\n    \r\n    const hourDiv = document.querySelector('#hour');\r\n    const minuteDiv = document.querySelector('#minute');\r\n    const dayDiv = document.querySelector('#day');\r\n    const dateDiv = document.querySelector('#date');\r\n    const monthDiv = document.querySelector('#month');\r\n    \r\n    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];\r\n    \r\n    if (hourDiv) hourDiv.textContent = (hours.length >= 2) ? hours : `0${hours}`;\r\n    if (minuteDiv) minuteDiv.textContent = (minutes.length >= 2) ? `:${minutes}` : `:0${minutes}`;\r\n    if (dayDiv) dayDiv.textContent = `${weekday[date.getDay()]}-`;\r\n    if (dateDiv) dateDiv.textContent = `${date.getDate()}-`;\r\n    if (monthDiv) monthDiv.textContent = months[date.getMonth()];\r\n}\r\n\r\n// ============================================\r\n// SIDEBAR POPULATE\r\n// ============================================\r\nfunction populateSidebar(weatherData, unitSuffix, windSuffix) {\r\n    const boxValues = document.querySelectorAll('#sidebar-container #value'); \r\n    const data = [\r\n        `${Math.ceil(weatherData.main.feels_like)}${unitSuffix}`, \r\n        `${Math.ceil(weatherData.main.temp_max)}${unitSuffix}`, \r\n        `${Math.ceil(weatherData.main.temp_min)}${unitSuffix}`,\r\n        `${weatherData.main.humidity}%`, \r\n        `${weatherData.main.pressure} hPa`,\r\n        `${weatherData.wind.speed} ${windSuffix}`\r\n    ];\r\n    \r\n    for (let index = 0; index < data.length && index < boxValues.length; index += 1) {\r\n        boxValues[index].textContent = data[index];\r\n    }\r\n}\r\n\r\n// ============================================\r\n// GEOLOCATION ROUTER\r\n// ============================================\r\nfunction getLocation() {\r\n    if (navigator.geolocation) {\r\n        navigator.geolocation.getCurrentPosition(\r\n            async (position) => {\r\n                const lat = position.coords.latitude;\r\n                const lon = position.coords.longitude;\r\n                await setData([lat, lon]);\r\n            },\r\n            (error) => {\r\n                setData('Tokyo');\r\n            }\r\n        );\r\n    } else {\r\n        setData('Tokyo');\r\n    }\r\n}\r\n\r\n// ============================================\r\n// APP SETUP MOUNT LIFE-CYCLE\r\n// ============================================\r\ndocument.body.appendChild((0,_loadPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\nconst mainContainer = document.querySelector('#main');\r\nconst sidebarContainer = document.querySelector('#sidebar');\r\n\r\nif (mainContainer) {\r\n    mainContainer.appendChild((0,_loadMainWeatherContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n}\r\n\r\nif (sidebarContainer) {\r\n    (0,_createSidebar__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Sets up your info row divs from your module first\r\n    appendUnitDropdown(sidebarContainer); // Injects our new unit selection dropdown immediately above them\r\n}\r\n\r\ngetLocation();\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/loadMainWeatherContainer.js":
/*!*****************************************!*\
  !*** ./src/loadMainWeatherContainer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMainWeatherContainer() {\r\n  const container = document.createElement('div');\r\n  const temp = document.createElement('div');\r\n  const locationDetails = document.createElement('div');\r\n  const city = document.createElement('div');\r\n  const dayDetails = document.createElement('div');\r\n  const time = document.createElement('div');\r\n  const fullDate = document.createElement('div');\r\n  const weather = document.createElement('div');\r\n  const weatherContainer = document.createElement('div');\r\n  const weatherIcon = document.createElement('img');\r\n\r\n  dayDetails.appendChild(time);\r\n  dayDetails.appendChild(fullDate);\r\n  locationDetails.appendChild(city);\r\n  locationDetails.appendChild(dayDetails);\r\n\r\n  temp.setAttribute('id', 'temperature');\r\n  city.setAttribute('id', 'city');\r\n  time.setAttribute('id', 'time');\r\n  fullDate.setAttribute('id', 'fullDate');\r\n  weather.setAttribute('id', 'weather');\r\n\r\n  locationDetails.setAttribute('id', 'location-details');\r\n  dayDetails.setAttribute('id', 'day-details');\r\n\r\n  const hour = document.createElement('div');\r\n  const minute = document.createElement('div');\r\n  hour.setAttribute('id', 'hour');\r\n  minute.setAttribute('id', 'minute');\r\n  time.appendChild(hour);\r\n  time.appendChild(minute);\r\n\r\n  const day = document.createElement('div');\r\n  const date = document.createElement('div');\r\n  const month = document.createElement('div');\r\n  day.setAttribute('id', 'day');\r\n  date.setAttribute('id', 'date');\r\n  month.setAttribute('id', 'month');\r\n\r\n  fullDate.appendChild(day);\r\n  fullDate.appendChild(date);\r\n  fullDate.appendChild(month);\r\n\r\n  weatherIcon.setAttribute('id', 'weather-icon');\r\n  weatherContainer.appendChild(weatherIcon);\r\n  weatherContainer.appendChild(weather);\r\n  weatherContainer.setAttribute('id', 'weather-container');\r\n\r\n  container.appendChild(temp);\r\n  container.appendChild(locationDetails);\r\n  container.appendChild(weatherContainer);\r\n  container.setAttribute('id', 'main-weather');\r\n  return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMainWeatherContainer);\r\n\n\n//# sourceURL=webpack://weather-app/./src/loadMainWeatherContainer.js?");

/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadPage() {\r\n  const content = document.createElement('div');\r\n  const main = document.createElement('div');\r\n  const sidebar = document.createElement('div');\r\n\r\n  content.setAttribute('id', 'content');\r\n  main.setAttribute('id', 'main');\r\n  sidebar.setAttribute('id', 'sidebar');\r\n\r\n  content.appendChild(main);\r\n  content.appendChild(sidebar);\r\n  return content;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n\n\n//# sourceURL=webpack://weather-app/./src/loadPage.js?");

/***/ }),

/***/ "./src/SFPro.OTF":
/*!***********************!*\
  !*** ./src/SFPro.OTF ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d1f5e6e16dd4f75c3950.OTF\";\n\n//# sourceURL=webpack://weather-app/./src/SFPro.OTF?");

/***/ }),

/***/ "./src/morning.jpg":
/*!*************************!*\
  !*** ./src/morning.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a647d94762f184792c5.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/morning.jpg?");

/***/ }),

/***/ "./src/night.jpg":
/*!***********************!*\
  !*** ./src/night.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51496e92506300e2ec40.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/night.jpg?");

/***/ }),

/***/ "./src/search.png":
/*!************************!*\
  !*** ./src/search.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9af906ce3b12167b5a03.png\";\n\n//# sourceURL=webpack://weather-app/./src/search.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;