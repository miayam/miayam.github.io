/******/ (() => { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
(() => {
/*!*************************************!*\
  !*** ./src/assets/scripts/index.js ***!
  \*************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
const foo = (() => Promise.resolve().then(() => console.log('Hello world')))();
})();

(() => {
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
// extracted by mini-css-extract-plugin
})();

/******/ })()
;
//# sourceMappingURL=main.js.map