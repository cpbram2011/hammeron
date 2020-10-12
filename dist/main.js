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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsib3NjIiwiVG9uZSIsIlBvbHlTeW50aCIsInRvRGVzdGluYXRpb24iLCJub3ciLCJkb3duIiwidm9pY2VzIiwicGl0Y2hlcyIsImtleXMiLCJzcGxpdCIsImZvckVhY2giLCJwIiwia2V5TWFwIiwia2V5IiwiaSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlckF0dGFjayIsInByZXNzZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwidHJpZ2dlclJlbGVhc2UiLCJ1bnByZXNzZWQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNB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QWhELENBQWhCO0FBQ0FRLGFBQU8sQ0FBQ0UsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsU0FBdEI7QUFDRDtBQUNGLEdBckJEO0FBMEJBVCxVQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztBQUN4Q1osUUFBSSxDQUFDWSxDQUFDLENBQUNKLEdBQUgsQ0FBSixHQUFjLENBQWQ7QUFDQSxXQUFPUCxNQUFNLENBQUNNLE1BQU0sQ0FBQ0ssQ0FBQyxDQUFDSixHQUFILENBQVAsQ0FBYjtBQUNBYixPQUFHLENBQUN5QixjQUFKLENBQW1CYixNQUFNLENBQUNLLENBQUMsQ0FBQ0osR0FBSCxDQUF6QixFQUFrQ1QsR0FBbEM7QUFDQSxRQUFNc0IsU0FBUyxHQUFHWCxRQUFRLENBQUNPLHNCQUFULGVBQXVDTCxDQUFDLENBQUNKLEdBQXpDLEdBQWdELENBQWhELENBQWxCO0FBRUFhLGFBQVMsQ0FBQ0gsU0FBVixDQUFvQkksTUFBcEIsQ0FBMkIsU0FBM0I7QUFJQyxHQVZILEVBVUssS0FWTDtBQWNELENBekNELEU7Ozs7Ozs7Ozs7O0FDckNBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Ryb3Bkb3duLnNjc3NcIjtcbmNvbnN0IG9zYyA9IG5ldyBUb25lLlBvbHlTeW50aCgpLnRvRGVzdGluYXRpb24oKVxuY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcblxubGV0IGRvd24gPSB7fTtcbmxldCB2b2ljZXMgPSB7fTtcbmNvbnN0IHBpdGNoZXMgPSBbJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0JywnRzQnLCdBYjQnLCdBNCcsJ0JiNCcsJ0I0JyxcbidDNScsJ0RiNScsJ0Q1JywnRWI1JywnRTUnLCdGNScsJ0diNSddXG5cbmNvbnN0IGtleXMgPSBcInp4Y3Zibm0sLi9hc2RmZ2hqa2w7J3F3ZXJ0eXVpb3BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuXG5rZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cbnBpdGNoZXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxuXG5jb25zdCBrZXlNYXAgPSB7fTtcblxua2V5cy5mb3JFYWNoKChrZXksIGkpID0+e1xuICBpZiAoaSA8IDEwKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2ldXG4gIH0gZWxzZSBpZiAoaSA8IDIxICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gNV1cbiAgfSBlbHNlIGlmIChpIDwgMzMgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSAxMV1cbiAgfSBlbHNlIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDE4XVxuICB9XG59XG4pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgXG4gICAgaWYgKCBkb3duW2Uua2V5XSA9PT0gMCkge1xuICAgICAgZG93bltlLmtleV0gPSAxO1xuICAgICAgdm9pY2VzW2tleU1hcFtlLmtleV1dID0gMTtcbiAgICAgIGNvbnNvbGUubG9nKHZvaWNlcylcbiAgICAgIC8vIGlmIChlLmxvY2F0aW9uID09PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQpe1xuICAgICAgICBcbiAgICAgIC8vICAgY29uc3QgYmVuZCA9IHBpdGNoZXMucmV2ZXJzZSgpLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpXG4gICAgICAvLyAgIGNvbnN0IG9zYyA9IG5ldyBUb25lLk9zY2lsbGF0b3IoKS50b0Rlc3RpbmF0aW9uKCk7XG4gICAgICAvLyAgIG9zYy5mcmVxdWVuY3kudmFsdWUgPSBiZW5kO1xuICAgICAgLy8gICBjb25zdCBiZW5kRW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZCkgLSAwLjNdXG4gICAgICAvLyAgIG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmRFbmQsIDEpO1xuICAgICAgLy8gICBvc2Muc3RhcnQoKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2coYmVuZClcbiAgICAgIC8vICAgY29uc29sZS5sb2coYmVuZEVuZClcbiAgICAgIC8vIH1cbiAgICAgIG9zYy50cmlnZ2VyQXR0YWNrKGtleU1hcFtlLmtleV0sIG5vdyk7XG4gICAgICBjb25zdCBwcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICAgIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpXG4gICAgfVxuICB9KTtcbiAgXG4gIFxuICBcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGRvd25bZS5rZXldID0gMDtcbiAgICBkZWxldGUgdm9pY2VzW2tleU1hcFtlLmtleV1dIFxuICAgIG9zYy50cmlnZ2VyUmVsZWFzZShrZXlNYXBbZS5rZXldLCBub3cpXG4gICAgY29uc3QgdW5wcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICBcbiAgICB1bnByZXNzZWQuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpXG5cblxuXG4gICAgfSwgZmFsc2UpXG5cblxuXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9