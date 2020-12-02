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

var filter = new Tone.Filter().toDestination();
filter.set({
  frequency: 1200,
  type: 'highpass',
  rolloff: -24
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
// const pitches = ['C3','D3','E3','F3','G3','Ab3','A3','B3',     //barry harris
// 'C4','D4','E4','F4','G4','Ab4','A4','B4',
// 'C5','D5','E5','F5','Gb5','G5','Ab5','A5','B5',]
// const pitches = ['C2','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5'] // pentatonic

var pitches = ['E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5'];
var revPitches = pitches.map(function (x, i) {
  return pitches[pitches.length - i - 1];
});
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
var freq = document.getElementById('freq');
var res = document.getElementById('res');
var filtype = document.getElementById('filter');
var filtername = document.getElementById('filter-name');
freq.addEventListener('input', function (e) {
  filter.set({
    frequency: Math.pow(e.target.value, 2) / 5
  });
  console.log(Math.pow(e.target.value, 2) / 5);
});
res.addEventListener('input', function (e) {
  osc.set({
    detune: e.target.value
  });
  vibosc.set({
    detune: e.target.value
  });
  bendosc.set({
    detune: e.target.value
  });
});
filtype.addEventListener('input', function (e) {
  if (e.target.value === '1') {
    filter.set({
      type: 'lowpass'
    });
    filtername.innerHTML = 'LPF';
  } else if (e.target.value === '2') {
    filter.set({
      type: 'highpass'
    });
    filtername.innerHTML = 'HPF';
  } else if (e.target.value === '3') {
    filter.set({
      type: 'bandpass'
    });
    filtername.innerHTML = 'BPF';
  } else {
    filter.set({
      type: 'allpass'
    });
    filtername.innerHTML = 'APF';
  }
});
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

      if (e.keyCode === 32) {
        bend.start = revPitches.find(function (p) {
          return voices[p] === 1;
        });
        bend.start ? bend.end = pitches[pitches.indexOf(bend.start) + 2] : null;
        console.log(bend);
        osc.triggerRelease(bend.start, now);
        bendosc.triggerAttack(bend.start, now);
        bendosc.frequency.rampTo(bend.end, 0.2);
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
    if (e.keyCode === 32) {
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
      vibosc.set({
        'oscillator': {
          'type': e.target.classList[0]
        }
      });
    }
  });
  var modalcontainer = document.getElementById('modal-container');
  var help = document.getElementById('help');
  help.addEventListener('click', function () {
    modalcontainer.classList.remove('hidden');
  });
  modalcontainer.addEventListener('click', function () {
    modalcontainer.classList.add('hidden');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2Nzcz85NjMwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImZpbHRlciIsIlRvbmUiLCJGaWx0ZXIiLCJ0b0Rlc3RpbmF0aW9uIiwic2V0IiwiZnJlcXVlbmN5IiwidHlwZSIsInJvbGxvZmYiLCJvc2MiLCJQb2x5U3ludGgiLCJiZW5kb3NjIiwiU3ludGgiLCJ2aWIiLCJWaWJyYXRvIiwidmlib3NjIiwiY29ubmVjdCIsIm5vdyIsImRvd24iLCJ2b2ljZXMiLCJwaXRjaGVzIiwicmV2UGl0Y2hlcyIsIm1hcCIsIngiLCJpIiwibGVuZ3RoIiwia2V5cyIsInNwbGl0IiwidXBwZXJLZXlzIiwiZm9yRWFjaCIsInAiLCJrZXlNYXAiLCJrZXkiLCJiZW5kIiwic3RhcnQiLCJlbmQiLCJmcmVxIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlcyIsImZpbHR5cGUiLCJmaWx0ZXJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXR1bmUiLCJpbm5lckhUTUwiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJmaW5kIiwiaW5kZXhPZiIsInRyaWdnZXJSZWxlYXNlIiwidHJpZ2dlckF0dGFjayIsInJhbXBUbyIsInNvcHJhbm8iLCJwcmVzc2VkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImluY2x1ZGVzIiwidW5wcmVzc2VkIiwicmVtb3ZlIiwib2xkIiwibW9kYWxjb250YWluZXIiLCJoZWxwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QyxRQUFoQztBQUNELEdBRkQ7QUFHQUUsZ0JBQWMsQ0FBQ3pCLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07QUFDN0N5QixrQkFBYyxDQUFDUCxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QjtBQUNELEdBRkQ7QUFLRCxDQTlHRCxFOzs7Ozs7Ozs7OztBQ2pIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kcm9wZG93bi5zY3NzXCI7XG4vLyBpbXBvcnQgKiBhcyBXYXZlZm9ybVNlbGVjdG9yIGZyb20gJy4vc2NyaXB0cy93YXZlZm9ybSdcbi8vIGNvbnNvbGUubG9nKFdhdmVmb3JtU2VsZWN0b3Iuc3ludGhQYXJhbXMpXG5cbmNvbnN0IGZpbHRlciA9IG5ldyBUb25lLkZpbHRlcigpLnRvRGVzdGluYXRpb24oKVxuZmlsdGVyLnNldCh7XG4gIGZyZXF1ZW5jeSA6IDEyMDAgLFxuICB0eXBlOiAnaGlnaHBhc3MnLFxuICByb2xsb2ZmIDogLTI0XG59KTtcblxuY29uc3Qgb3NjID0gbmV3IFRvbmUuUG9seVN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5jb25zdCBiZW5kb3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYiA9IG5ldyBUb25lLlZpYnJhdG8oNSwgMC4xKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYm9zYyA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5cbnZpYm9zYy5jb25uZWN0KHZpYik7XG5cbm9zYy5jb25uZWN0KGZpbHRlcik7XG5cbmNvbnN0IG5vdyA9IFRvbmUubm93KCk7XG5cbmxldCBkb3duID0ge307XG5sZXQgdm9pY2VzID0ge307XG5cblxuXG4vLyBjb25zdCBwaXRjaGVzID0gWydFMicsJ0YyJywnR2IyJywnRzInLCdBYjInLCdBMicsJ0JiMicsJ0IyJywgICAvL29jdGF2ZSBkb3duXG4vLyAnQzMnLCdEYjMnLCdEMycsJ0ViMycsJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuLy8gJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0J11cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzMnLCdEMycsJ0UzJywnRjMnLCdHMycsJ0FiMycsJ0EzJywnQjMnLCAgICAgLy9iYXJyeSBoYXJyaXNcbi8vICdDNCcsJ0Q0JywnRTQnLCdGNCcsJ0c0JywnQWI0JywnQTQnLCdCNCcsXG4vLyAnQzUnLCdENScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNScsJ0E1JywnQjUnLF1cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzInLCdEMicsJ0UyJywnRzInLCdBMicsJ0MzJywnRDMnLCdFMycsJ0czJywnQTMnLCdDNCcsJ0Q0JywnRTQnLCdHNCcsJ0E0JywnQzUnLCdENScsJ0U1JywnRzUnLCdBNSddIC8vIHBlbnRhdG9uaWNcblxuY29uc3QgcGl0Y2hlcyA9IFsnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4nQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnLCdHNCcsJ0FiNCcsJ0E0JywnQmI0JywnQjQnLFxuJ0M1JywnRGI1JywnRDUnLCdFYjUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnXVxuXG5jb25zdCByZXZQaXRjaGVzID0gcGl0Y2hlcy5tYXAoKHgsaSkgPT4gcGl0Y2hlc1twaXRjaGVzLmxlbmd0aCAtIGkgLSAxXSlcblxuY29uc3Qga2V5cyA9IFwienhjdmJubSwuL2FzZGZnaGprbDsncXdlcnR5dWlvcFtdMTIzNDU2Nzg5MC09XCIuc3BsaXQoJycpXG5jb25zdCB1cHBlcktleXMgPSBcIlpYQ1ZCTk0sLi9BU0RGR0hKS0w7J1FXRVJUWVVJT1BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuXG5rZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cbnVwcGVyS2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG5cbmNvbnN0IGtleU1hcCA9IHt9O1xuXG5rZXlzLmZvckVhY2goKGtleSwgaSkgPT57XG4gIGlmIChpIDwgMTApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaV07XG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2ldO1xuICB9IGVsc2UgaWYgKGkgPCAyMSApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDVdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gNV07XG4gIH0gZWxzZSBpZiAoaSA8IDMzICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMTFdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gMTFdO1xuICB9IGVsc2Uge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMThdXG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2kgLSAxOF07XG4gIH1cbn1cbik7XG5cbmxldCBiZW5kID0ge1xuICBzdGFydDogbnVsbCxcbiAgZW5kOiBudWxsXG59O1xuXG5sZXQgZnJlcSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVxJyk7XG5sZXQgcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcycpO1xubGV0IGZpbHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XG5sZXQgZmlsdGVybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItbmFtZScpO1xuXG5mcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIGZpbHRlci5zZXQoeyBmcmVxdWVuY3k6IGUudGFyZ2V0LnZhbHVlICoqIDIgLyA1IH0pXG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlICoqIDIgLyA1KVxufSlcblxucmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIG9zYy5zZXQoeyBkZXR1bmU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIHZpYm9zYy5zZXQoeyBkZXR1bmU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIGJlbmRvc2Muc2V0KHsgZGV0dW5lOiBlLnRhcmdldC52YWx1ZSB9KVxufSlcblxuZmlsdHlwZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnMScpIHtcbiAgICBmaWx0ZXIuc2V0KHsgdHlwZTogJ2xvd3Bhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0xQRidcbiAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzInKSB7XG4gICAgZmlsdGVyLnNldCh7IHR5cGU6ICdoaWdocGFzcycgfSkgO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0hQRidcbiAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzMnKSB7IFxuICAgIGZpbHRlci5zZXQoeyB0eXBlOiAnYmFuZHBhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0JQRidcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIuc2V0KHsgdHlwZTogJ2FsbHBhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0FQRidcblxuICB9XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIC8vIGNvbnNvbGUubG9nKGtleU1hcFtlLmtleV0pXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG5cblxuICAgIGlmICggZG93bltlLmtleV0gPT09IDApIHtcbiAgICAgIGRvd25bZS5rZXldID0gMTtcbiAgICAgIHZvaWNlc1trZXlNYXBbZS5rZXldXSA9IDE7XG4gICAgICBcbiAgICAgIC8vIGxldCB2b2ljZUFyciA9IE9iamVjdC5rZXlzKHZvaWNlcylcbiAgICAgIC8vIGJlbmQuc3RhcnQgPSB2b2ljZUFyclt2b2ljZUFyci5sZW5ndGggLSAxXS8vcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgLy8gYmVuZC5zdGFydCA/IChiZW5kLmVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQuc3RhcnQpICsgMl0pIDogbnVsbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJlbmQpXG5cbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDMyKXtcbiAgICAgICAgYmVuZC5zdGFydCA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgICAgYmVuZC5zdGFydCA/IChiZW5kLmVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQuc3RhcnQpICsgMl0pIDogbnVsbDtcbiAgICAgICAgY29uc29sZS5sb2coYmVuZClcbiAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKGJlbmQuc3RhcnQsIG5vdykgICAgICAgIFxuICAgICAgICBiZW5kb3NjLnRyaWdnZXJBdHRhY2soYmVuZC5zdGFydCwgbm93KVxuICAgICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5lbmQsIDAuMiApXG4gICAgICB9IFxuICAgICAgXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25lYXQnKVxuICAgICAgICBjb25zdCBzb3ByYW5vID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKTsgXG4gICAgICAgIFxuICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2Uoc29wcmFubywgbm93KSAgICAgICAgICAgICAgICBcbiAgICAgICAgdmlib3NjLnRyaWdnZXJBdHRhY2soc29wcmFubywgbm93KVxuICAgICAgfVxuICAgICAgICBcbiAgICAgb3NjLnRyaWdnZXJBdHRhY2soa2V5TWFwW2Uua2V5XSwgbm93KTtcbiAgICAgIGNvbnN0IHByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgICAgaWYgKHByZXNzZWQpIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpXG4gICAgfSBcbiAgfSk7XG5cbiAgICAvLyAgIHZhciBhdXRvV2FoID0gbmV3IFRvbmUuQXV0b1dhaCg2MCwgNCwgLTMwKS50b01hc3RlcigpO1xuICAgIC8vIC8vaW5pdGlhbGl6ZSB0aGUgc3ludGggYW5kIGNvbm5lY3QgdG8gYXV0b3dhaFxuICAgIC8vIHZhciBzeW50aCA9IG9zYy5jb25uZWN0KGF1dG9XYWgpO1xuICAgIC8vIC8vUSB2YWx1ZSBpbmZsdWVuY2VzIHRoZSBlZmZlY3Qgb2YgdGhlIHdhaCAtIGRlZmF1bHQgaXMgMlxuICAgIC8vIGF1dG9XYWguUS52YWx1ZSA9IDY7XG4gICAgLy8gLy9tb3JlIGF1ZGlibGUgb24gaGlnaGVyIG5vdGVzXG4gIFxuICBcbiAgXG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMil7XG4gICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5zdGFydCwgMC4yKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBcbiAgICAgIHZpYm9zYy50cmlnZ2VyUmVsZWFzZShub3cpICAgIFxuICAgIH1cbiAgICBkb3duW2Uua2V5XSA9IDA7XG4gICAgZGVsZXRlIHZvaWNlc1trZXlNYXBbZS5rZXldXSBcbiAgICBvc2MudHJpZ2dlclJlbGVhc2Uoa2V5TWFwW2Uua2V5XSwgbm93KVxuICAgIGlmICghT2JqZWN0LmtleXModm9pY2VzKS5pbmNsdWRlcyhiZW5kLnN0YXJ0KSkge1xuICAgICAgYmVuZG9zYy50cmlnZ2VyUmVsZWFzZShub3cpXG4gICAgICBiZW5kLnN0YXJ0ID0gbnVsbDtcbiAgICAgIGJlbmQuZW5kID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB1bnByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgIGlmICh1bnByZXNzZWQpIHVucHJlc3NlZC5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJylcbiAgICB9LCBmYWxzZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmIChbJ3NpbmUnLCd0cmlhbmdsZScsJ3NxdWFyZScsJ3Nhd3Rvb3RoJ10uaW5jbHVkZXMoZS50YXJnZXQuY2xhc3NMaXN0WzBdKSl7XG4gICAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdXG4gICAgICBpZiAob2xkKSBvbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICBcbiAgICBcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgIC8vIHN5bnRoUGFyYW1zLnR5cGUgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgIFxuICAgICAgb3NjLnNldCh7XG4gICAgICAgICdvc2NpbGxhdG9yJzoge1xuICAgICAgICAgICd0eXBlJzogZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmVuZG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZpYm9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG1vZGFsY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWNvbnRhaW5lcicpXG4gIGNvbnN0IGhlbHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVscCcpXG4gIGhlbHAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSlcbiAgbW9kYWxjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfSlcblxuXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9