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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n\n\nlet contentElement = document.querySelector(\".content\");\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderStartPage)({ contentElement });\n\nlet startMainButton = document.querySelector(\".button-start\");\n\nstartMainButton.addEventListener(\"click\", () => {\n  let buttonRadioOne = document.getElementById(\"radio1\");\n  let buttonRadioTwo = document.getElementById(\"radio2\");\n  let buttonRadioThree = document.getElementById(\"radio3\");\n\n  if (buttonRadioOne.checked) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderEasyPage)({ contentElement });\n  }\n\n  if (buttonRadioTwo.checked) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderAveragePage)({ contentElement });\n  }\n\n  if (buttonRadioThree.checked) {\n    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.renderHardPage)({ contentElement });\n  }\n});\n\n// let buttonGameStart = document.getElementById(\".button-start-game\");\n\n// buttonGameStart.addEventListener(\"click\", () => {\n//   if (buttonGameStart) {\n//     renderStartPage({ contentElement });\n//   }\n// });\n\n\n//# sourceURL=webpack://card-game/./index.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAveragePage: () => (/* binding */ renderAveragePage),\n/* harmony export */   renderEasyPage: () => (/* binding */ renderEasyPage),\n/* harmony export */   renderHardPage: () => (/* binding */ renderHardPage),\n/* harmony export */   renderStartPage: () => (/* binding */ renderStartPage)\n/* harmony export */ });\n// стартовая страница\n\nfunction renderStartPage({ contentElement }) {\n  let contentStartPage = `\n    <div class=\"content-center\">\n            <h1 class=\"heading\">Выбери <br>сложность</h1>\n                <div class=\"buttons\">\n                    <div class=\"form-radio-btn\">\n                        <input id=\"radio1\" type=\"radio\" name=\"radio\" value=\"1\" checked>\n                        <label for=\"radio1\">1</label>\n                    </div>\n                    <div class=\"form-radio-btn\">\n                        <input id=\"radio2\" type=\"radio\" name=\"radio\" value=\"2\">\n                        <label for=\"radio2\">2</label>\n                    </div>\n                    <div class=\"form-radio-btn\">\n                        <input id=\"radio3\" type=\"radio\" name=\"radio\" value=\"3\">\n                        <label for=\"radio3\">3</label>\n                    </div>\n                </div>\n            <div class=\"button-start\"><button class=\"button-start-main\">Старт</button></div>\n        </div>\n    `;\n\n  contentElement.innerHTML = contentStartPage;\n}\n\n// страница с легким уровнем\n\nfunction renderEasyPage({ contentElement }) {\n  let contentEasyPage = `\n    <div class=\"content level-page\">\n    <div class=\"level-page-heading\">\n  <div class=\"time-game\">\n    <div class=\"min-sec\">\n      <p class=\"min-sec\">min</p>\n      <p class=\"min-sec\">sec</p>\n    </div>\n    <h2 class=\"time\">00.00</h2>\n  </div class=\"button-start-game\">\n  <button class=\"button-start-main button-start-game\">Начать заново</button>\n</div>\n<div class=\"cards\">\n  <img class=\"cards-img\" src=\"/img/туз пики.jpg\" alt=\"туз пики\">\n  <img class=\"cards-img\"  src=\"/img/туз черви.jpg\" alt=\"туз черви\">\n  <img class=\"cards-img\"  src=\"/img/туз бубны.jpg\" alt=\"туз бубны\">\n  <img class=\"cards-img\"  src=\"/img/туз крести.jpg\" alt=\"туз крести\">\n</div>\n    </div>\n    `;\n\n  contentElement.innerHTML = contentEasyPage;\n}\n\n// страница со средним уровнем\n\nfunction renderAveragePage({ contentElement }) {\n  let contentAveragePage = `\n  <div class=\"content level-page\">\n  <div class=\"level-page-heading\">\n<div class=\"time-game\">\n  <div class=\"min-sec\">\n    <p class=\"min-sec\">min</p>\n    <p class=\"min-sec\">sec</p>\n  </div>\n  <h2 class=\"time\">00.00</h2>\n</div class=\"button-start-game\">\n<button class=\"button-start-main\">Начать заново</button>\n</div>\n<div class=\"cards\">\n<img class=\"cards-img\" src=\"/img/туз пики.jpg\" alt=\"туз пики\">\n<img class=\"cards-img\" src=\"/img/туз черви.jpg\" alt=\"туз черви\">\n<img class=\"cards-img\" src=\"/img/туз бубны.jpg\" alt=\"туз бубны\">\n<img class=\"cards-img\" src=\"/img/туз крести.jpg\" alt=\"туз крести\">\n</div>\n  </div>\n    `;\n\n  contentElement.innerHTML = contentAveragePage;\n}\n\n// страница с тяжелым уровнем\n\nfunction renderHardPage({ contentElement }) {\n  let contentHardPage = `\n  <div class=\"content level-page\">\n  <div class=\"level-page-heading\">\n<div class=\"time-game\">\n  <div class=\"min-sec\">\n    <p class=\"min-sec\">min</p>\n    <p class=\"min-sec\">sec</p>\n  </div>\n  <h2 class=\"time\">00.00</h2>\n</div class=\"button-start-game\">\n<button class=\"button-start-main\">Начать заново</button>\n</div>\n<div class=\"cards\">\n<img class=\"cards-img\" src=\"/img/туз пики.jpg\" alt=\"туз пики\">\n<img class=\"cards-img\" src=\"/img/туз черви.jpg\" alt=\"туз черви\">\n<img class=\"cards-img\" src=\"/img/туз бубны.jpg\" alt=\"туз бубны\">\n<img class=\"cards-img\" src=\"/img/туз крести.jpg\" alt=\"туз крести\">\n</div>\n  </div>\n    `;\n\n  contentElement.innerHTML = contentHardPage;\n}\n\n\n//# sourceURL=webpack://card-game/./render.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;