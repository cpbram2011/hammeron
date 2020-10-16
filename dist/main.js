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

 // import * as WaveformSelector from './scripts/waveform'
// console.log(WaveformSelector.synthParams)

var filter = new Tone.AutoFilter().toDestination();
filter.set({
  frequency: 200,
  rolloff: -12,
  Q: 1,
  gain: 0
});
var osc = new Tone.PolySynth().toDestination();
var bendosc = new Tone.Synth().toDestination();
var vib = new Tone.Vibrato(5, 0.1).toDestination();
var vibosc = new Tone.Synth().toDestination();
vibosc.connect(vib);
osc.connect(filter);
var now = Tone.now();
var down = {};
var voices = {}; // const pitches = ['E2','F2','Gb2','G2','Ab2','A2','Bb2','B2',   //octave down
// 'C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
// 'C4','Db4','D4','Eb4','E4','F4','Gb4']

var pitches = ['E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5'];
var revPitches = pitches.map(function (x, i) {
  return pitches[pitches.length - i - 1];
}); // const pitches = ['C3','D3','E3','F3','G3','Ab3','A3','B3',     //barry harris
// 'C4','D4','E4','F4','G4','Ab4','A4','B4',
// 'C5','D5','E5','F5','Gb5','G5','Ab5','A5','B5',]
// const pitches = ['C2','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5'] // pentatonic

var keys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split('');
var upperKeys = "ZXCVBNM,./ASDFGHJKL;'QWERTYUIOP[]1234567890-=".split('');
keys.forEach(function (p) {
  down[p] = 0;
});
upperKeys.forEach(function (p) {
  down[p] = 0;
});
var keyMap = {};
keys.forEach(function (key, i) {
  if (i < 10) {
    keyMap[key] = pitches[i]; // keyMap[upperKeys[i]] = pitches[i];
  } else if (i < 21) {
    keyMap[key] = pitches[i - 5]; // keyMap[upperKeys[i]] = pitches[i - 5];
  } else if (i < 33) {
    keyMap[key] = pitches[i - 11]; // keyMap[upperKeys[i]] = pitches[i - 11];
  } else {
    keyMap[key] = pitches[i - 18]; // keyMap[upperKeys[i]] = pitches[i - 18];
  }
});
var bend = {
  start: null,
  end: null
};
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (e) {
    // console.log(e.key)
    // console.log(keyMap[e.key])
    if (e.keyCode === 32) {
      e.preventDefault();
    }

    if (down[e.key] === 0) {
      down[e.key] = 1;
      voices[keyMap[e.key]] = 1; // let voiceArr = Object.keys(voices)
      // bend.start = voiceArr[voiceArr.length - 1]//revPitches.find(p => voices[p] === 1)
      // bend.start ? (bend.end = pitches[pitches.indexOf(bend.start) + 2]) : null;
      // console.log(bend)

      if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
        if (e.key === 'Shift') {
          bend.start = revPitches.find(function (p) {
            return voices[p] === 1;
          });
          bend.start ? bend.end = pitches[pitches.indexOf(bend.start) + 2] : null;
          console.log(bend);
          osc.triggerRelease(bend.start, now);
          bendosc.triggerAttack(bend.start, now);
          bendosc.frequency.rampTo(bend.end, 0.2);
        }
      }

      if (e.key === 'Enter') {
        console.log('neat');
        var soprano = revPitches.find(function (p) {
          return voices[p] === 1;
        });
        osc.triggerRelease(soprano, now);
        vibosc.triggerAttack(soprano, now);
      }

      osc.triggerAttack(keyMap[e.key], now);
      var pressed = document.getElementsByClassName("key-".concat(e.key))[0];
      if (pressed) pressed.classList.add('pressed');
    }
  }); //   var autoWah = new Tone.AutoWah(60, 4, -30).toMaster();
  // //initialize the synth and connect to autowah
  // var synth = osc.connect(autoWah);
  // //Q value influences the effect of the wah - default is 2
  // autoWah.Q.value = 6;
  // //more audible on higher notes

  document.addEventListener("keyup", function (e) {
    if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      debugger;
      bendosc.frequency.rampTo(bend.start, 0.2);
    }

    if (e.key === 'Enter') {
      console.log('neat');
      vibosc.triggerRelease(now);
    }

    down[e.key] = 0;
    delete voices[keyMap[e.key]];
    osc.triggerRelease(keyMap[e.key], now);

    if (!Object.keys(voices).includes(bend.start)) {
      bendosc.triggerRelease(now);
      bend.start = null;
      bend.end = null;
    }

    var unpressed = document.getElementsByClassName("key-".concat(e.key))[0];
    if (unpressed) unpressed.classList.remove('pressed');
  }, false);
  document.addEventListener("click", function (e) {
    if (['sine', 'triangle', 'square', 'sawtooth'].includes(e.target.classList[0])) {
      var old = document.getElementsByClassName('selected')[0];
      if (old) old.classList.remove('selected');
      e.target.classList.add('selected'); // synthParams.type = e.target.classList[0]

      osc.set({
        'oscillator': {
          'type': e.target.classList[0]
        }
      });
      bendosc.set({
        'oscillator': {
          'type': e.target.classList[0]
        }
      });
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2Nzcz85NjMwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImZpbHRlciIsIlRvbmUiLCJBdXRvRmlsdGVyIiwidG9EZXN0aW5hdGlvbiIsInNldCIsImZyZXF1ZW5jeSIsInJvbGxvZmYiLCJRIiwiZ2FpbiIsIm9zYyIsIlBvbHlTeW50aCIsImJlbmRvc2MiLCJTeW50aCIsInZpYiIsIlZpYnJhdG8iLCJ2aWJvc2MiLCJjb25uZWN0Iiwibm93IiwiZG93biIsInZvaWNlcyIsInBpdGNoZXMiLCJyZXZQaXRjaGVzIiwibWFwIiwieCIsImkiLCJsZW5ndGgiLCJrZXlzIiwic3BsaXQiLCJ1cHBlcktleXMiLCJmb3JFYWNoIiwicCIsImtleU1hcCIsImtleSIsImJlbmQiLCJzdGFydCIsImVuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsIktleWJvYXJkRXZlbnQiLCJET01fS0VZX0xPQ0FUSU9OX1JJR0hUIiwiZmluZCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlclJlbGVhc2UiLCJ0cmlnZ2VyQXR0YWNrIiwicmFtcFRvIiwic29wcmFubyIsInByZXNzZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiaW5jbHVkZXMiLCJ1bnByZXNzZWQiLCJyZW1vdmUiLCJ0YXJnZXQiLCJvbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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U0FBVCxDQUFtQixDQUFuQjtBQURJO0FBRFIsT0FBUjtBQUtBM0MsYUFBTyxDQUFDUCxHQUFSLENBQVk7QUFDVixzQkFBYztBQUNaLGtCQUFRa0MsQ0FBQyxDQUFDc0IsTUFBRixDQUFTTixTQUFULENBQW1CLENBQW5CO0FBREk7QUFESixPQUFaO0FBTUQ7QUFDRixHQXJCQztBQXNCSCxDQWxHRCxFOzs7Ozs7Ozs7OztBQzdFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kcm9wZG93bi5zY3NzXCI7XG4vLyBpbXBvcnQgKiBhcyBXYXZlZm9ybVNlbGVjdG9yIGZyb20gJy4vc2NyaXB0cy93YXZlZm9ybSdcbi8vIGNvbnNvbGUubG9nKFdhdmVmb3JtU2VsZWN0b3Iuc3ludGhQYXJhbXMpXG5cbmNvbnN0IGZpbHRlciA9IG5ldyBUb25lLkF1dG9GaWx0ZXIoKS50b0Rlc3RpbmF0aW9uKClcbmZpbHRlci5zZXQoe1xuICBmcmVxdWVuY3kgOiAyMDAgLFxuICByb2xsb2ZmIDogLTEyICxcbiAgUSA6IDEgLFxuICBnYWluIDogMFxufSk7XG5cbmNvbnN0IG9zYyA9IG5ldyBUb25lLlBvbHlTeW50aCgpLnRvRGVzdGluYXRpb24oKVxuY29uc3QgYmVuZG9zYyA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5jb25zdCB2aWIgPSBuZXcgVG9uZS5WaWJyYXRvKDUsIDAuMSkudG9EZXN0aW5hdGlvbigpXG5jb25zdCB2aWJvc2MgPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKVxuXG52aWJvc2MuY29ubmVjdCh2aWIpO1xub3NjLmNvbm5lY3QoZmlsdGVyKTtcbmNvbnN0IG5vdyA9IFRvbmUubm93KCk7XG5cbmxldCBkb3duID0ge307XG5sZXQgdm9pY2VzID0ge307XG5cblxuXG4vLyBjb25zdCBwaXRjaGVzID0gWydFMicsJ0YyJywnR2IyJywnRzInLCdBYjInLCdBMicsJ0JiMicsJ0IyJywgICAvL29jdGF2ZSBkb3duXG4vLyAnQzMnLCdEYjMnLCdEMycsJ0ViMycsJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuLy8gJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0J11cblxuY29uc3QgcGl0Y2hlcyA9IFsnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4nQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnLCdHNCcsJ0FiNCcsJ0E0JywnQmI0JywnQjQnLFxuJ0M1JywnRGI1JywnRDUnLCdFYjUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnXVxuXG5jb25zdCByZXZQaXRjaGVzID0gcGl0Y2hlcy5tYXAoKHgsaSkgPT4gcGl0Y2hlc1twaXRjaGVzLmxlbmd0aCAtIGkgLSAxXSlcbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MzJywnRDMnLCdFMycsJ0YzJywnRzMnLCdBYjMnLCdBMycsJ0IzJywgICAgIC8vYmFycnkgaGFycmlzXG4vLyAnQzQnLCdENCcsJ0U0JywnRjQnLCdHNCcsJ0FiNCcsJ0E0JywnQjQnLFxuLy8gJ0M1JywnRDUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnLCdBNScsJ0I1JyxdXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MyJywnRDInLCdFMicsJ0cyJywnQTInLCdDMycsJ0QzJywnRTMnLCdHMycsJ0EzJywnQzQnLCdENCcsJ0U0JywnRzQnLCdBNCcsJ0M1JywnRDUnLCdFNScsJ0c1JywnQTUnXSAvLyBwZW50YXRvbmljXG5cbmNvbnN0IGtleXMgPSBcInp4Y3Zibm0sLi9hc2RmZ2hqa2w7J3F3ZXJ0eXVpb3BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuY29uc3QgdXBwZXJLZXlzID0gXCJaWENWQk5NLC4vQVNERkdISktMOydRV0VSVFlVSU9QW10xMjM0NTY3ODkwLT1cIi5zcGxpdCgnJylcblxua2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG51cHBlcktleXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxuXG5jb25zdCBrZXlNYXAgPSB7fTtcblxua2V5cy5mb3JFYWNoKChrZXksIGkpID0+e1xuICBpZiAoaSA8IDEwKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2ldO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpXTtcbiAgfSBlbHNlIGlmIChpIDwgMjEgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSA1XTtcbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaSAtIDVdO1xuICB9IGVsc2UgaWYgKGkgPCAzMyApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDExXTtcbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaSAtIDExXTtcbiAgfSBlbHNlIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDE4XVxuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gMThdO1xuICB9XG59XG4pO1xuXG5sZXQgYmVuZCA9IHtcbiAgc3RhcnQ6IG51bGwsXG4gIGVuZDogbnVsbFxufTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZS5rZXkpXG4gICAgLy8gY29uc29sZS5sb2coa2V5TWFwW2Uua2V5XSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMil7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cblxuXG4gICAgaWYgKCBkb3duW2Uua2V5XSA9PT0gMCkge1xuICAgICAgZG93bltlLmtleV0gPSAxO1xuICAgICAgdm9pY2VzW2tleU1hcFtlLmtleV1dID0gMTtcbiAgICAgIFxuICAgICAgLy8gbGV0IHZvaWNlQXJyID0gT2JqZWN0LmtleXModm9pY2VzKVxuICAgICAgLy8gYmVuZC5zdGFydCA9IHZvaWNlQXJyW3ZvaWNlQXJyLmxlbmd0aCAtIDFdLy9yZXZQaXRjaGVzLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpXG4gICAgICAvLyBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coYmVuZClcblxuICBcbiAgICAgIGlmIChlLmxvY2F0aW9uID09PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQpe1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdTaGlmdCcpe1xuICAgICAgICAgIGJlbmQuc3RhcnQgPSByZXZQaXRjaGVzLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpXG4gICAgICAgICAgYmVuZC5zdGFydCA/IChiZW5kLmVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQuc3RhcnQpICsgMl0pIDogbnVsbDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhiZW5kKVxuICAgICAgICAgIG9zYy50cmlnZ2VyUmVsZWFzZShiZW5kLnN0YXJ0LCBub3cpICAgICAgICBcbiAgICAgICAgICBiZW5kb3NjLnRyaWdnZXJBdHRhY2soYmVuZC5zdGFydCwgbm93KVxuICAgICAgICAgIGJlbmRvc2MuZnJlcXVlbmN5LnJhbXBUbyhiZW5kLmVuZCwgMC4yIClcbiAgICAgICAgfSBcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb25zb2xlLmxvZygnbmVhdCcpXG4gICAgICAgIGNvbnN0IHNvcHJhbm8gPSByZXZQaXRjaGVzLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpOyBcbiAgICAgICAgXG4gICAgICAgIG9zYy50cmlnZ2VyUmVsZWFzZShzb3ByYW5vLCBub3cpICAgICAgICAgICAgICAgIFxuICAgICAgICB2aWJvc2MudHJpZ2dlckF0dGFjayhzb3ByYW5vLCBub3cpXG4gICAgICB9XG4gICAgICAgIFxuICAgICBvc2MudHJpZ2dlckF0dGFjayhrZXlNYXBbZS5rZXldLCBub3cpO1xuICAgICAgY29uc3QgcHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgICBpZiAocHJlc3NlZCkgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJylcbiAgICB9IFxuICB9KTtcblxuICAgIC8vICAgdmFyIGF1dG9XYWggPSBuZXcgVG9uZS5BdXRvV2FoKDYwLCA0LCAtMzApLnRvTWFzdGVyKCk7XG4gICAgLy8gLy9pbml0aWFsaXplIHRoZSBzeW50aCBhbmQgY29ubmVjdCB0byBhdXRvd2FoXG4gICAgLy8gdmFyIHN5bnRoID0gb3NjLmNvbm5lY3QoYXV0b1dhaCk7XG4gICAgLy8gLy9RIHZhbHVlIGluZmx1ZW5jZXMgdGhlIGVmZmVjdCBvZiB0aGUgd2FoIC0gZGVmYXVsdCBpcyAyXG4gICAgLy8gYXV0b1dhaC5RLnZhbHVlID0gNjtcbiAgICAvLyAvL21vcmUgYXVkaWJsZSBvbiBoaWdoZXIgbm90ZXNcbiAgXG4gIFxuICBcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmxvY2F0aW9uID09PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQpe1xuICAgICAgZGVidWdnZXJcbiAgICAgIGJlbmRvc2MuZnJlcXVlbmN5LnJhbXBUbyhiZW5kLnN0YXJ0LCAwLjIpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGNvbnNvbGUubG9nKCduZWF0JylcbiAgICAgIFxuICAgICAgdmlib3NjLnRyaWdnZXJSZWxlYXNlKG5vdykgICAgXG4gICAgfVxuICAgIGRvd25bZS5rZXldID0gMDtcbiAgICBkZWxldGUgdm9pY2VzW2tleU1hcFtlLmtleV1dIFxuICAgIG9zYy50cmlnZ2VyUmVsZWFzZShrZXlNYXBbZS5rZXldLCBub3cpXG4gICAgaWYgKCFPYmplY3Qua2V5cyh2b2ljZXMpLmluY2x1ZGVzKGJlbmQuc3RhcnQpKSB7XG4gICAgICBiZW5kb3NjLnRyaWdnZXJSZWxlYXNlKG5vdylcbiAgICAgIGJlbmQuc3RhcnQgPSBudWxsO1xuICAgICAgYmVuZC5lbmQgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1bnByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgIGlmICh1bnByZXNzZWQpIHVucHJlc3NlZC5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJylcbiAgICB9LCBmYWxzZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmIChbJ3NpbmUnLCd0cmlhbmdsZScsJ3NxdWFyZScsJ3Nhd3Rvb3RoJ10uaW5jbHVkZXMoZS50YXJnZXQuY2xhc3NMaXN0WzBdKSl7XG4gICAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdXG4gICAgICBpZiAob2xkKSBvbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICBcbiAgICBcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgIC8vIHN5bnRoUGFyYW1zLnR5cGUgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgIFxuICAgICAgb3NjLnNldCh7XG4gICAgICAgICdvc2NpbGxhdG9yJzoge1xuICAgICAgICAgICd0eXBlJzogZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmVuZG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfSlcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=