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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domLoader */ \"./src/js/domLoader.js\");\n\n\nvar showSecret = false;\n\n_domLoader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].addEventListener('click',toggleSecretState);\nupdateSecretParagraph();\n\nfunction toggleSecretState(){\n    showSecret = !showSecret;\n    updateSecretParagraph();\n    updateSecretButton();\n}\n\nfunction updateSecretButton(){\n    if(showSecret){\n        _domLoader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContext = 'Hide The Secret';\n    }else{\n        _domLoader__WEBPACK_IMPORTED_MODULE_0__[\"secretButton\"].textContext = 'Show The Secret';\n    }\n}\n\nfunction updateSecretParagraph(){\n    if(showSecret){\n        _domLoader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'block';\n    }else{\n        _domLoader__WEBPACK_IMPORTED_MODULE_0__[\"secretParagraph\"].style.display = 'none';\n    }\n\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/domLoader.js":
/*!*****************************!*\
  !*** ./src/js/domLoader.js ***!
  \*****************************/
/*! exports provided: secretButton, secretParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretButton\", function() { return secretButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secretParagraph\", function() { return secretParagraph; });\nvar secretButton = document.querySelector(\"#secretButton\");\nvar secretParagraph = document.querySelector('#secretParagraph');\n\n//# sourceURL=webpack:///./src/js/domLoader.js?");

/***/ })

/******/ });