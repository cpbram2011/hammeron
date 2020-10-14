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

var square = new Tone.Synth({
  oscillator: {
    type: 'square'
  }
}).toDestination();
var filter = new Tone.Filter().toDestination();
filter.type = 'lowpass';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsic3F1YXJlIiwiVG9uZSIsIlN5bnRoIiwib3NjaWxsYXRvciIsInR5cGUiLCJ0b0Rlc3RpbmF0aW9uIiwiZmlsdGVyIiwiRmlsdGVyIiwib3NjIiwiUG9seVN5bnRoIiwiYmVuZG9zYyIsInZpYiIsIlZpYnJhdG8iLCJ2aWJvc2MiLCJjb25uZWN0Iiwibm93IiwiZG93biIsInZvaWNlcyIsInBpdGNoZXMiLCJyZXZQaXRjaGVzIiwibWFwIiwieCIsImkiLCJsZW5ndGgiLCJrZXlzIiwic3BsaXQiLCJmb3JFYWNoIiwicCIsImtleU1hcCIsImtleSIsImJlbmQiLCJzdGFydCIsImVuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsIktleWJvYXJkRXZlbnQiLCJET01fS0VZX0xPQ0FUSU9OX1JJR0hUIiwiZmluZCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlclJlbGVhc2UiLCJ0cmlnZ2VyQXR0YWNrIiwiZnJlcXVlbmN5IiwicmFtcFRvIiwic29wcmFubyIsInByZXNzZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiaW5jbHVkZXMiLCJ1bnByZXNzZWQiLCJyZW1vdmUiLCJ0YXJnZXQiLCJvbGQiLCJzZXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7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dUIsTUFBRixDQUFTTixTQUFULENBQW1CLENBQW5CO0FBREk7QUFESixPQUFaO0FBTUQ7QUFDRixHQW5CQztBQW9CSCxDQWhHRCxFOzs7Ozs7Ozs7OztBQ3ZFQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kcm9wZG93bi5zY3NzXCI7XG4vLyBpbXBvcnQgKiBhcyBXYXZlZm9ybVNlbGVjdG9yIGZyb20gJy4vc2NyaXB0cy93YXZlZm9ybSdcbi8vIGNvbnNvbGUubG9nKFdhdmVmb3JtU2VsZWN0b3Iuc3ludGhQYXJhbXMpXG5cblxuXG5jb25zdCBzcXVhcmUgPSBuZXcgVG9uZS5TeW50aCh7XG4gIG9zY2lsbGF0b3I6IHtcbiAgICB0eXBlOiAnc3F1YXJlJ1xuICB9XG59KS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IGZpbHRlciA9IG5ldyBUb25lLkZpbHRlcigpLnRvRGVzdGluYXRpb24oKVxuZmlsdGVyLnR5cGUgPSAnbG93cGFzcyc7XG5jb25zdCBvc2MgPSBuZXcgVG9uZS5Qb2x5U3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IGJlbmRvc2MgPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKVxuY29uc3QgdmliID0gbmV3IFRvbmUuVmlicmF0byg1LCAwLjEpLnRvRGVzdGluYXRpb24oKVxuY29uc3Qgdmlib3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbnZpYm9zYy5jb25uZWN0KHZpYik7XG5vc2MuY29ubmVjdChmaWx0ZXIpXG5jb25zdCBub3cgPSBUb25lLm5vdygpO1xubGV0IGRvd24gPSB7fTtcbmxldCB2b2ljZXMgPSB7fTtcblxuXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0UyJywnRjInLCdHYjInLCdHMicsJ0FiMicsJ0EyJywnQmIyJywnQjInLCAgIC8vb2N0YXZlIGRvd25cbi8vICdDMycsJ0RiMycsJ0QzJywnRWIzJywnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4vLyAnQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnXVxuXG5jb25zdCBwaXRjaGVzID0gWydFMycsJ0YzJywnR2IzJywnRzMnLCdBYjMnLCdBMycsJ0JiMycsJ0IzJyxcbidDNCcsJ0RiNCcsJ0Q0JywnRWI0JywnRTQnLCdGNCcsJ0diNCcsJ0c0JywnQWI0JywnQTQnLCdCYjQnLCdCNCcsXG4nQzUnLCdEYjUnLCdENScsJ0ViNScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNSddXG5cbmNvbnN0IHJldlBpdGNoZXMgPSBwaXRjaGVzLm1hcCgoeCxpKSA9PiBwaXRjaGVzW3BpdGNoZXMubGVuZ3RoIC0gaSAtIDFdKVxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzMnLCdEMycsJ0UzJywnRjMnLCdHMycsJ0FiMycsJ0EzJywnQjMnLCAgICAgLy9iYXJyeSBoYXJyaXNcbi8vICdDNCcsJ0Q0JywnRTQnLCdGNCcsJ0c0JywnQWI0JywnQTQnLCdCNCcsXG4vLyAnQzUnLCdENScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNScsJ0E1JywnQjUnLF1cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzInLCdEMicsJ0UyJywnRzInLCdBMicsJ0MzJywnRDMnLCdFMycsJ0czJywnQTMnLCdDNCcsJ0Q0JywnRTQnLCdHNCcsJ0E0JywnQzUnLCdENScsJ0U1JywnRzUnLCdBNSddIC8vIHBlbnRhdG9uaWNcblxuY29uc3Qga2V5cyA9IFwienhjdmJubSwuL2FzZGZnaGprbDsncXdlcnR5dWlvcFtdMTIzNDU2Nzg5MC09XCIuc3BsaXQoJycpXG5cbmtleXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxucGl0Y2hlcy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG5cbmNvbnN0IGtleU1hcCA9IHt9O1xuXG5rZXlzLmZvckVhY2goKGtleSwgaSkgPT57XG4gIGlmIChpIDwgMTApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaV1cbiAgfSBlbHNlIGlmIChpIDwgMjEgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSA1XVxuICB9IGVsc2UgaWYgKGkgPCAzMyApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDExXVxuICB9IGVsc2Uge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMThdXG4gIH1cbn1cbik7XG5cbmxldCBiZW5kID0ge1xuICBzdGFydDogbnVsbCxcbiAgZW5kOiBudWxsXG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICAvLyBjb25zb2xlLmxvZyhrZXlNYXBbZS5rZXldKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuXG5cbiAgICBpZiAoIGRvd25bZS5rZXldID09PSAwKSB7XG4gICAgICBkb3duW2Uua2V5XSA9IDE7XG4gICAgICB2b2ljZXNba2V5TWFwW2Uua2V5XV0gPSAxO1xuICAgICAgXG4gICAgICAvLyBsZXQgdm9pY2VBcnIgPSBPYmplY3Qua2V5cyh2b2ljZXMpXG4gICAgICAvLyBiZW5kLnN0YXJ0ID0gdm9pY2VBcnJbdm9pY2VBcnIubGVuZ3RoIC0gMV0vL3JldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgIC8vIGJlbmQuc3RhcnQgPyAoYmVuZC5lbmQgPSBwaXRjaGVzW3BpdGNoZXMuaW5kZXhPZihiZW5kLnN0YXJ0KSArIDJdKSA6IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZyhiZW5kKVxuXG4gIFxuICAgICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jyl7XG4gICAgICAgICAgYmVuZC5zdGFydCA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgICAgICBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJlbmQpXG4gICAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKGJlbmQuc3RhcnQsIG5vdykgICAgICAgIFxuICAgICAgICAgIGJlbmRvc2MudHJpZ2dlckF0dGFjayhiZW5kLnN0YXJ0LCBub3cpXG4gICAgICAgICAgYmVuZG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmQuZW5kLCAwLjIgKVxuICAgICAgICB9IFxuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZWF0JylcbiAgICAgICAgY29uc3Qgc29wcmFubyA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSk7IFxuICAgICAgICBcbiAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKHNvcHJhbm8sIG5vdykgICAgICAgICAgICAgICAgXG4gICAgICAgIHZpYm9zYy50cmlnZ2VyQXR0YWNrKHNvcHJhbm8sIG5vdylcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICBvc2MudHJpZ2dlckF0dGFjayhrZXlNYXBbZS5rZXldLCBub3cpO1xuICAgICAgY29uc3QgcHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgICBpZiAocHJlc3NlZCkgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJylcbiAgICB9XG4gIH0pO1xuXG4gICAgLy8gICB2YXIgYXV0b1dhaCA9IG5ldyBUb25lLkF1dG9XYWgoNjAsIDQsIC0zMCkudG9NYXN0ZXIoKTtcbiAgICAvLyAvL2luaXRpYWxpemUgdGhlIHN5bnRoIGFuZCBjb25uZWN0IHRvIGF1dG93YWhcbiAgICAvLyB2YXIgc3ludGggPSBvc2MuY29ubmVjdChhdXRvV2FoKTtcbiAgICAvLyAvL1EgdmFsdWUgaW5mbHVlbmNlcyB0aGUgZWZmZWN0IG9mIHRoZSB3YWggLSBkZWZhdWx0IGlzIDJcbiAgICAvLyBhdXRvV2FoLlEudmFsdWUgPSA2O1xuICAgIC8vIC8vbW9yZSBhdWRpYmxlIG9uIGhpZ2hlciBub3Rlc1xuICBcbiAgXG4gIFxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgYmVuZG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmQuc3RhcnQsIDAuMik7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc29sZS5sb2coJ25lYXQnKVxuICAgICAgXG4gICAgICB2aWJvc2MudHJpZ2dlclJlbGVhc2Uobm93KSAgICBcbiAgICB9XG4gICAgZG93bltlLmtleV0gPSAwO1xuICAgIGRlbGV0ZSB2b2ljZXNba2V5TWFwW2Uua2V5XV0gXG4gICAgb3NjLnRyaWdnZXJSZWxlYXNlKGtleU1hcFtlLmtleV0sIG5vdylcbiAgICBpZiAoIU9iamVjdC5rZXlzKHZvaWNlcykuaW5jbHVkZXMoYmVuZC5zdGFydCkpIHtcbiAgICAgIGJlbmRvc2MudHJpZ2dlclJlbGVhc2Uobm93KVxuICAgICAgYmVuZC5zdGFydCA9IG51bGw7XG4gICAgICBiZW5kLmVuZCA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVucHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgaWYgKHVucHJlc3NlZCkgdW5wcmVzc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKVxuICAgIH0sIGZhbHNlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKFsnc2luZScsJ3RyaWFuZ2xlJywnc3F1YXJlJywnc2F3dG9vdGgnXS5pbmNsdWRlcyhlLnRhcmdldC5jbGFzc0xpc3RbMF0pKXtcbiAgICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF1cbiAgICAgIGlmIChvbGQpIG9sZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAvLyBzeW50aFBhcmFtcy50eXBlID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICBcbiAgICAgIG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJlbmRvc2Muc2V0KHtcbiAgICAgICAgJ29zY2lsbGF0b3InOiB7XG4gICAgICAgICAgJ3R5cGUnOiBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG4gIH0pXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9