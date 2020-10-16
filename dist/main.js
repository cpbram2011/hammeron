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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2Nzcz85NjMwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImZpbHRlciIsIlRvbmUiLCJBdXRvRmlsdGVyIiwidG9EZXN0aW5hdGlvbiIsInNldCIsImZyZXF1ZW5jeSIsInJvbGxvZmYiLCJRIiwiZ2FpbiIsIm9zYyIsIlBvbHlTeW50aCIsImJlbmRvc2MiLCJTeW50aCIsInZpYiIsIlZpYnJhdG8iLCJ2aWJvc2MiLCJjb25uZWN0Iiwibm93IiwiZG93biIsInZvaWNlcyIsInBpdGNoZXMiLCJyZXZQaXRjaGVzIiwibWFwIiwieCIsImkiLCJsZW5ndGgiLCJrZXlzIiwic3BsaXQiLCJ1cHBlcktleXMiLCJmb3JFYWNoIiwicCIsImtleU1hcCIsImtleSIsImJlbmQiLCJzdGFydCIsImVuZCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsIktleWJvYXJkRXZlbnQiLCJET01fS0VZX0xPQ0FUSU9OX1JJR0hUIiwiZmluZCIsImluZGV4T2YiLCJjb25zb2xlIiwibG9nIiwidHJpZ2dlclJlbGVhc2UiLCJ0cmlnZ2VyQXR0YWNrIiwicmFtcFRvIiwic29wcmFubyIsInByZXNzZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiaW5jbHVkZXMiLCJ1bnByZXNzZWQiLCJyZW1vdmUiLCJ0YXJnZXQiLCJvbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QUFLQTNDLGFBQU8sQ0FBQ1AsR0FBUixDQUFZO0FBQ1Ysc0JBQWM7QUFDWixrQkFBUWtDLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU04sU0FBVCxDQUFtQixDQUFuQjtBQURJO0FBREosT0FBWjtBQU1EO0FBQ0YsR0FyQkM7QUFzQkgsQ0FqR0QsRTs7Ozs7Ozs7Ozs7QUM3RUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMvZHJvcGRvd24uc2Nzc1wiO1xuLy8gaW1wb3J0ICogYXMgV2F2ZWZvcm1TZWxlY3RvciBmcm9tICcuL3NjcmlwdHMvd2F2ZWZvcm0nXG4vLyBjb25zb2xlLmxvZyhXYXZlZm9ybVNlbGVjdG9yLnN5bnRoUGFyYW1zKVxuXG5jb25zdCBmaWx0ZXIgPSBuZXcgVG9uZS5BdXRvRmlsdGVyKCkudG9EZXN0aW5hdGlvbigpXG5maWx0ZXIuc2V0KHtcbiAgZnJlcXVlbmN5IDogMjAwICxcbiAgcm9sbG9mZiA6IC0xMiAsXG4gIFEgOiAxICxcbiAgZ2FpbiA6IDBcbn0pO1xuXG5jb25zdCBvc2MgPSBuZXcgVG9uZS5Qb2x5U3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IGJlbmRvc2MgPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKVxuY29uc3QgdmliID0gbmV3IFRvbmUuVmlicmF0byg1LCAwLjEpLnRvRGVzdGluYXRpb24oKVxuY29uc3Qgdmlib3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcblxudmlib3NjLmNvbm5lY3QodmliKTtcbm9zYy5jb25uZWN0KGZpbHRlcik7XG5jb25zdCBub3cgPSBUb25lLm5vdygpO1xuXG5sZXQgZG93biA9IHt9O1xubGV0IHZvaWNlcyA9IHt9O1xuXG5cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnRTInLCdGMicsJ0diMicsJ0cyJywnQWIyJywnQTInLCdCYjInLCdCMicsICAgLy9vY3RhdmUgZG93blxuLy8gJ0MzJywnRGIzJywnRDMnLCdFYjMnLCdFMycsJ0YzJywnR2IzJywnRzMnLCdBYjMnLCdBMycsJ0JiMycsJ0IzJyxcbi8vICdDNCcsJ0RiNCcsJ0Q0JywnRWI0JywnRTQnLCdGNCcsJ0diNCddXG5cbmNvbnN0IHBpdGNoZXMgPSBbJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0JywnRzQnLCdBYjQnLCdBNCcsJ0JiNCcsJ0I0JyxcbidDNScsJ0RiNScsJ0Q1JywnRWI1JywnRTUnLCdGNScsJ0diNScsJ0c1JywnQWI1J11cblxuY29uc3QgcmV2UGl0Y2hlcyA9IHBpdGNoZXMubWFwKCh4LGkpID0+IHBpdGNoZXNbcGl0Y2hlcy5sZW5ndGggLSBpIC0gMV0pXG4vLyBjb25zdCBwaXRjaGVzID0gWydDMycsJ0QzJywnRTMnLCdGMycsJ0czJywnQWIzJywnQTMnLCdCMycsICAgICAvL2JhcnJ5IGhhcnJpc1xuLy8gJ0M0JywnRDQnLCdFNCcsJ0Y0JywnRzQnLCdBYjQnLCdBNCcsJ0I0Jyxcbi8vICdDNScsJ0Q1JywnRTUnLCdGNScsJ0diNScsJ0c1JywnQWI1JywnQTUnLCdCNScsXVxuXG4vLyBjb25zdCBwaXRjaGVzID0gWydDMicsJ0QyJywnRTInLCdHMicsJ0EyJywnQzMnLCdEMycsJ0UzJywnRzMnLCdBMycsJ0M0JywnRDQnLCdFNCcsJ0c0JywnQTQnLCdDNScsJ0Q1JywnRTUnLCdHNScsJ0E1J10gLy8gcGVudGF0b25pY1xuXG5jb25zdCBrZXlzID0gXCJ6eGN2Ym5tLC4vYXNkZmdoamtsOydxd2VydHl1aW9wW10xMjM0NTY3ODkwLT1cIi5zcGxpdCgnJylcbmNvbnN0IHVwcGVyS2V5cyA9IFwiWlhDVkJOTSwuL0FTREZHSEpLTDsnUVdFUlRZVUlPUFtdMTIzNDU2Nzg5MC09XCIuc3BsaXQoJycpXG5cbmtleXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxudXBwZXJLZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cblxuY29uc3Qga2V5TWFwID0ge307XG5cbmtleXMuZm9yRWFjaCgoa2V5LCBpKSA9PntcbiAgaWYgKGkgPCAxMCkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpXTtcbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaV07XG4gIH0gZWxzZSBpZiAoaSA8IDIxICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gNV07XG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2kgLSA1XTtcbiAgfSBlbHNlIGlmIChpIDwgMzMgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSAxMV07XG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2kgLSAxMV07XG4gIH0gZWxzZSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSAxOF1cbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaSAtIDE4XTtcbiAgfVxufVxuKTtcblxubGV0IGJlbmQgPSB7XG4gIHN0YXJ0OiBudWxsLFxuICBlbmQ6IG51bGxcbn07XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIC8vIGNvbnNvbGUubG9nKGtleU1hcFtlLmtleV0pXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG5cblxuICAgIGlmICggZG93bltlLmtleV0gPT09IDApIHtcbiAgICAgIGRvd25bZS5rZXldID0gMTtcbiAgICAgIHZvaWNlc1trZXlNYXBbZS5rZXldXSA9IDE7XG4gICAgICBcbiAgICAgIC8vIGxldCB2b2ljZUFyciA9IE9iamVjdC5rZXlzKHZvaWNlcylcbiAgICAgIC8vIGJlbmQuc3RhcnQgPSB2b2ljZUFyclt2b2ljZUFyci5sZW5ndGggLSAxXS8vcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgLy8gYmVuZC5zdGFydCA/IChiZW5kLmVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQuc3RhcnQpICsgMl0pIDogbnVsbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJlbmQpXG5cbiAgXG4gICAgICBpZiAoZS5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKXtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKXtcbiAgICAgICAgICBiZW5kLnN0YXJ0ID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgICAgIGJlbmQuc3RhcnQgPyAoYmVuZC5lbmQgPSBwaXRjaGVzW3BpdGNoZXMuaW5kZXhPZihiZW5kLnN0YXJ0KSArIDJdKSA6IG51bGw7XG4gICAgICAgICAgY29uc29sZS5sb2coYmVuZClcbiAgICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2UoYmVuZC5zdGFydCwgbm93KSAgICAgICAgXG4gICAgICAgICAgYmVuZG9zYy50cmlnZ2VyQXR0YWNrKGJlbmQuc3RhcnQsIG5vdylcbiAgICAgICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5lbmQsIDAuMiApXG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25lYXQnKVxuICAgICAgICBjb25zdCBzb3ByYW5vID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKTsgXG4gICAgICAgIFxuICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2Uoc29wcmFubywgbm93KSAgICAgICAgICAgICAgICBcbiAgICAgICAgdmlib3NjLnRyaWdnZXJBdHRhY2soc29wcmFubywgbm93KVxuICAgICAgfVxuICAgICAgICBcbiAgICAgb3NjLnRyaWdnZXJBdHRhY2soa2V5TWFwW2Uua2V5XSwgbm93KTtcbiAgICAgIGNvbnN0IHByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgICAgaWYgKHByZXNzZWQpIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpXG4gICAgfSBcbiAgfSk7XG5cbiAgICAvLyAgIHZhciBhdXRvV2FoID0gbmV3IFRvbmUuQXV0b1dhaCg2MCwgNCwgLTMwKS50b01hc3RlcigpO1xuICAgIC8vIC8vaW5pdGlhbGl6ZSB0aGUgc3ludGggYW5kIGNvbm5lY3QgdG8gYXV0b3dhaFxuICAgIC8vIHZhciBzeW50aCA9IG9zYy5jb25uZWN0KGF1dG9XYWgpO1xuICAgIC8vIC8vUSB2YWx1ZSBpbmZsdWVuY2VzIHRoZSBlZmZlY3Qgb2YgdGhlIHdhaCAtIGRlZmF1bHQgaXMgMlxuICAgIC8vIGF1dG9XYWguUS52YWx1ZSA9IDY7XG4gICAgLy8gLy9tb3JlIGF1ZGlibGUgb24gaGlnaGVyIG5vdGVzXG4gIFxuICBcbiAgXG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKXtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5zdGFydCwgMC4yKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBcbiAgICAgIHZpYm9zYy50cmlnZ2VyUmVsZWFzZShub3cpICAgIFxuICAgIH1cbiAgICBkb3duW2Uua2V5XSA9IDA7XG4gICAgZGVsZXRlIHZvaWNlc1trZXlNYXBbZS5rZXldXSBcbiAgICBvc2MudHJpZ2dlclJlbGVhc2Uoa2V5TWFwW2Uua2V5XSwgbm93KVxuICAgIGlmICghT2JqZWN0LmtleXModm9pY2VzKS5pbmNsdWRlcyhiZW5kLnN0YXJ0KSkge1xuICAgICAgYmVuZG9zYy50cmlnZ2VyUmVsZWFzZShub3cpXG4gICAgICBiZW5kLnN0YXJ0ID0gbnVsbDtcbiAgICAgIGJlbmQuZW5kID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdW5wcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICBpZiAodW5wcmVzc2VkKSB1bnByZXNzZWQuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpXG4gICAgfSwgZmFsc2UpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAoWydzaW5lJywndHJpYW5nbGUnLCdzcXVhcmUnLCdzYXd0b290aCddLmluY2x1ZGVzKGUudGFyZ2V0LmNsYXNzTGlzdFswXSkpe1xuICAgICAgY29uc3Qgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKVswXVxuICAgICAgaWYgKG9sZCkgb2xkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgXG4gICAgXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAvLyBzeW50aFBhcmFtcy50eXBlID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICBcbiAgICAgIG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJlbmRvc2Muc2V0KHtcbiAgICAgICAgJ29zY2lsbGF0b3InOiB7XG4gICAgICAgICAgJ3R5cGUnOiBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG4gIH0pXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9