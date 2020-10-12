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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_dropdown_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/dropdown.scss */ "./src/styles/dropdown.scss");
/* harmony import */ var _styles_dropdown_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_dropdown_scss__WEBPACK_IMPORTED_MODULE_1__);


var osc = new Tone.PolySynth().toDestination();
var now = Tone.now();
var down = {};
var voices = {};
var pitches = ['E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5'];
var keys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split('');
keys.forEach(function (p) {
  down[p] = 0;
});
pitches.forEach(function (p) {
  down[p] = 0;
});
var keyMap = {};
keys.forEach(function (key, i) {
  if (i < 10) {
    keyMap[key] = pitches[i];
  } else if (i < 21) {
    keyMap[key] = pitches[i - 5];
  } else if (i < 33) {
    keyMap[key] = pitches[i - 11];
  } else {
    keyMap[key] = pitches[i - 18];
  }
});
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    if (down[e.key] === 0) {
      down[e.key] = 1;
      voices[keyMap[e.key]] = 1;
      console.log(voices); // if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
      //   const bend = pitches.reverse().find(p => voices[p] === 1)
      //   const osc = new Tone.Oscillator().toDestination();
      //   osc.frequency.value = bend;
      //   const bendEnd = pitches[pitches.indexOf(bend) - 0.3]
      //   osc.frequency.rampTo(bendEnd, 1);
      //   osc.start();
      //   console.log(bend)
      //   console.log(bendEnd)
      // }

      osc.triggerAttack(keyMap[e.key], now);
      var pressed = document.getElementsByClassName("key-".concat(e.key))[0];
      pressed.classList.add('pressed');
    }
  });
  document.addEventListener("keyup", function (e) {
    down[e.key] = 0;
    delete voices[keyMap[e.key]];
    osc.triggerRelease(keyMap[e.key], now);
    var unpressed = document.getElementsByClassName("key-".concat(e.key))[0];
    unpressed.classList.remove('pressed');
  }, false);
});

/***/ }),

/***/ "./src/styles/dropdown.scss":
/*!**********************************!*\
  !*** ./src/styles/dropdown.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2Nzcz85NjMwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbIm9zYyIsIlRvbmUiLCJQb2x5U3ludGgiLCJ0b0Rlc3RpbmF0aW9uIiwibm93IiwiZG93biIsInZvaWNlcyIsInBpdGNoZXMiLCJrZXlzIiwic3BsaXQiLCJmb3JFYWNoIiwicCIsImtleU1hcCIsImtleSIsImkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXJBdHRhY2siLCJwcmVzc2VkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsInRyaWdnZXJSZWxlYXNlIiwidW5wcmVzc2VkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7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QyxHQUFnRCxDQUFoRCxDQUFoQjtBQUNBUSxhQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCO0FBQ0Q7QUFDRixHQXJCRDtBQTBCQVQsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87QUFDeENaLFFBQUksQ0FBQ1ksQ0FBQyxDQUFDSixHQUFILENBQUosR0FBYyxDQUFkO0FBQ0EsV0FBT1AsTUFBTSxDQUFDTSxNQUFNLENBQUNLLENBQUMsQ0FBQ0osR0FBSCxDQUFQLENBQWI7QUFDQWIsT0FBRyxDQUFDeUIsY0FBSixDQUFtQmIsTUFBTSxDQUFDSyxDQUFDLENBQUNKLEdBQUgsQ0FBekIsRUFBa0NULEdBQWxDO0FBQ0EsUUFBTXNCLFNBQVMsR0FBR1gsUUFBUSxDQUFDTyxzQkFBVCxlQUF1Q0wsQ0FBQyxDQUFDSixHQUF6QyxHQUFnRCxDQUFoRCxDQUFsQjtBQUVBYSxhQUFTLENBQUNILFNBQVYsQ0FBb0JJLE1BQXBCLENBQTJCLFNBQTNCO0FBSUMsR0FWSCxFQVVLLEtBVkw7QUFjRCxDQXpDRCxFOzs7Ozs7Ozs7OztBQ3JDQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kcm9wZG93bi5zY3NzXCI7XG5jb25zdCBvc2MgPSBuZXcgVG9uZS5Qb2x5U3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IG5vdyA9IFRvbmUubm93KCk7XG5cbmxldCBkb3duID0ge307XG5sZXQgdm9pY2VzID0ge307XG5jb25zdCBwaXRjaGVzID0gWydFMycsJ0YzJywnR2IzJywnRzMnLCdBYjMnLCdBMycsJ0JiMycsJ0IzJyxcbidDNCcsJ0RiNCcsJ0Q0JywnRWI0JywnRTQnLCdGNCcsJ0diNCcsJ0c0JywnQWI0JywnQTQnLCdCYjQnLCdCNCcsXG4nQzUnLCdEYjUnLCdENScsJ0ViNScsJ0U1JywnRjUnLCdHYjUnXVxuXG5jb25zdCBrZXlzID0gXCJ6eGN2Ym5tLC4vYXNkZmdoamtsOydxd2VydHl1aW9wW10xMjM0NTY3ODkwLT1cIi5zcGxpdCgnJylcblxua2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG5waXRjaGVzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cblxuY29uc3Qga2V5TWFwID0ge307XG5cbmtleXMuZm9yRWFjaCgoa2V5LCBpKSA9PntcbiAgaWYgKGkgPCAxMCkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpXVxuICB9IGVsc2UgaWYgKGkgPCAyMSApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDVdXG4gIH0gZWxzZSBpZiAoaSA8IDMzICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMTFdXG4gIH0gZWxzZSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSAxOF1cbiAgfVxufVxuKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgIFxuICAgIGlmICggZG93bltlLmtleV0gPT09IDApIHtcbiAgICAgIGRvd25bZS5rZXldID0gMTtcbiAgICAgIHZvaWNlc1trZXlNYXBbZS5rZXldXSA9IDE7XG4gICAgICBjb25zb2xlLmxvZyh2b2ljZXMpXG4gICAgICAvLyBpZiAoZS5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKXtcbiAgICAgICAgXG4gICAgICAvLyAgIGNvbnN0IGJlbmQgPSBwaXRjaGVzLnJldmVyc2UoKS5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgLy8gICBjb25zdCBvc2MgPSBuZXcgVG9uZS5Pc2NpbGxhdG9yKCkudG9EZXN0aW5hdGlvbigpO1xuICAgICAgLy8gICBvc2MuZnJlcXVlbmN5LnZhbHVlID0gYmVuZDtcbiAgICAgIC8vICAgY29uc3QgYmVuZEVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQpIC0gMC4zXVxuICAgICAgLy8gICBvc2MuZnJlcXVlbmN5LnJhbXBUbyhiZW5kRW5kLCAxKTtcbiAgICAgIC8vICAgb3NjLnN0YXJ0KCk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGJlbmQpXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGJlbmRFbmQpXG4gICAgICAvLyB9XG4gICAgICBvc2MudHJpZ2dlckF0dGFjayhrZXlNYXBbZS5rZXldLCBub3cpO1xuICAgICAgY29uc3QgcHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgICBwcmVzc2VkLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKVxuICAgIH1cbiAgfSk7XG4gIFxuICBcbiAgXG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBkb3duW2Uua2V5XSA9IDA7XG4gICAgZGVsZXRlIHZvaWNlc1trZXlNYXBbZS5rZXldXSBcbiAgICBvc2MudHJpZ2dlclJlbGVhc2Uoa2V5TWFwW2Uua2V5XSwgbm93KVxuICAgIGNvbnN0IHVucHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgXG4gICAgdW5wcmVzc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKVxuXG5cblxuICAgIH0sIGZhbHNlKVxuXG5cblxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==