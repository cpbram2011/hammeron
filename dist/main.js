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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2Nzcz85NjMwIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzcz9jODA3Il0sIm5hbWVzIjpbImZpbHRlciIsIlRvbmUiLCJGaWx0ZXIiLCJ0b0Rlc3RpbmF0aW9uIiwic2V0IiwiZnJlcXVlbmN5IiwidHlwZSIsInJvbGxvZmYiLCJvc2MiLCJQb2x5U3ludGgiLCJiZW5kb3NjIiwiU3ludGgiLCJ2aWIiLCJWaWJyYXRvIiwidmlib3NjIiwiY29ubmVjdCIsIm5vdyIsImRvd24iLCJ2b2ljZXMiLCJwaXRjaGVzIiwicmV2UGl0Y2hlcyIsIm1hcCIsIngiLCJpIiwibGVuZ3RoIiwia2V5cyIsInNwbGl0IiwidXBwZXJLZXlzIiwiZm9yRWFjaCIsInAiLCJrZXlNYXAiLCJrZXkiLCJiZW5kIiwic3RhcnQiLCJlbmQiLCJmcmVxIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlcyIsImZpbHR5cGUiLCJmaWx0ZXJuYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJkZXR1bmUiLCJpbm5lckhUTUwiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJsb2NhdGlvbiIsIktleWJvYXJkRXZlbnQiLCJET01fS0VZX0xPQ0FUSU9OX1JJR0hUIiwiZmluZCIsImluZGV4T2YiLCJ0cmlnZ2VyUmVsZWFzZSIsInRyaWdnZXJBdHRhY2siLCJyYW1wVG8iLCJzb3ByYW5vIiwicHJlc3NlZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJpbmNsdWRlcyIsInVucHJlc3NlZCIsInJlbW92ZSIsIm9sZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QUFSLEVBQW1CLFFBQW5CLEVBQTRCLFVBQTVCLEVBQXdDdUIsUUFBeEMsQ0FBaUR2QixDQUFDLENBQUNDLE1BQUYsQ0FBU21CLFNBQVQsQ0FBbUIsQ0FBbkIsQ0FBakQsQ0FBSixFQUE0RTtBQUM1RSxVQUFNTSxHQUFHLEdBQUdoQyxRQUFRLENBQUN5QixzQkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxDQUFaO0FBQ0EsVUFBSU8sR0FBSixFQUFTQSxHQUFHLENBQUNOLFNBQUosQ0FBY0ssTUFBZCxDQUFxQixVQUFyQjtBQUdUekIsT0FBQyxDQUFDQyxNQUFGLENBQVNtQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QixFQUw0RSxDQU01RTs7QUFFQXZELFNBQUcsQ0FBQ0osR0FBSixDQUFRO0FBQ04sc0JBQWM7QUFDWixrQkFBUXNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTbUIsU0FBVCxDQUFtQixDQUFuQjtBQURJO0FBRFIsT0FBUjtBQUtBcEQsYUFBTyxDQUFDTixHQUFSLENBQVk7QUFDVixzQkFBYztBQUNaLGtCQUFRc0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNtQixTQUFULENBQW1CLENBQW5CO0FBREk7QUFESixPQUFaO0FBTUQ7QUFDRixHQXJCQztBQXNCSCxDQWpHRCxFOzs7Ozs7Ozs7OztBQzlHQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9kcm9wZG93bi5zY3NzXCI7XG4vLyBpbXBvcnQgKiBhcyBXYXZlZm9ybVNlbGVjdG9yIGZyb20gJy4vc2NyaXB0cy93YXZlZm9ybSdcbi8vIGNvbnNvbGUubG9nKFdhdmVmb3JtU2VsZWN0b3Iuc3ludGhQYXJhbXMpXG5cbmNvbnN0IGZpbHRlciA9IG5ldyBUb25lLkZpbHRlcigpLnRvRGVzdGluYXRpb24oKVxuZmlsdGVyLnNldCh7XG4gIGZyZXF1ZW5jeSA6IDEyMDAgLFxuICB0eXBlOiAnaGlnaHBhc3MnLFxuICByb2xsb2ZmIDogLTI0XG59KTtcblxuY29uc3Qgb3NjID0gbmV3IFRvbmUuUG9seVN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5jb25zdCBiZW5kb3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYiA9IG5ldyBUb25lLlZpYnJhdG8oNSwgMC4xKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYm9zYyA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5cbnZpYm9zYy5jb25uZWN0KHZpYik7XG5cbm9zYy5jb25uZWN0KGZpbHRlcik7XG5cbmNvbnN0IG5vdyA9IFRvbmUubm93KCk7XG5cbmxldCBkb3duID0ge307XG5sZXQgdm9pY2VzID0ge307XG5cblxuXG4vLyBjb25zdCBwaXRjaGVzID0gWydFMicsJ0YyJywnR2IyJywnRzInLCdBYjInLCdBMicsJ0JiMicsJ0IyJywgICAvL29jdGF2ZSBkb3duXG4vLyAnQzMnLCdEYjMnLCdEMycsJ0ViMycsJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuLy8gJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0J11cblxuY29uc3QgcGl0Y2hlcyA9IFsnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4nQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnLCdHNCcsJ0FiNCcsJ0E0JywnQmI0JywnQjQnLFxuJ0M1JywnRGI1JywnRDUnLCdFYjUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnXVxuXG5jb25zdCByZXZQaXRjaGVzID0gcGl0Y2hlcy5tYXAoKHgsaSkgPT4gcGl0Y2hlc1twaXRjaGVzLmxlbmd0aCAtIGkgLSAxXSlcbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MzJywnRDMnLCdFMycsJ0YzJywnRzMnLCdBYjMnLCdBMycsJ0IzJywgICAgIC8vYmFycnkgaGFycmlzXG4vLyAnQzQnLCdENCcsJ0U0JywnRjQnLCdHNCcsJ0FiNCcsJ0E0JywnQjQnLFxuLy8gJ0M1JywnRDUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnLCdBNScsJ0I1JyxdXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MyJywnRDInLCdFMicsJ0cyJywnQTInLCdDMycsJ0QzJywnRTMnLCdHMycsJ0EzJywnQzQnLCdENCcsJ0U0JywnRzQnLCdBNCcsJ0M1JywnRDUnLCdFNScsJ0c1JywnQTUnXSAvLyBwZW50YXRvbmljXG5cbmNvbnN0IGtleXMgPSBcInp4Y3Zibm0sLi9hc2RmZ2hqa2w7J3F3ZXJ0eXVpb3BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuY29uc3QgdXBwZXJLZXlzID0gXCJaWENWQk5NLC4vQVNERkdISktMOydRV0VSVFlVSU9QW10xMjM0NTY3ODkwLT1cIi5zcGxpdCgnJylcblxua2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG51cHBlcktleXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxuXG5jb25zdCBrZXlNYXAgPSB7fTtcblxua2V5cy5mb3JFYWNoKChrZXksIGkpID0+e1xuICBpZiAoaSA8IDEwKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2ldO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpXTtcbiAgfSBlbHNlIGlmIChpIDwgMjEgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSA1XTtcbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaSAtIDVdO1xuICB9IGVsc2UgaWYgKGkgPCAzMyApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDExXTtcbiAgICAvLyBrZXlNYXBbdXBwZXJLZXlzW2ldXSA9IHBpdGNoZXNbaSAtIDExXTtcbiAgfSBlbHNlIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDE4XVxuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gMThdO1xuICB9XG59XG4pO1xuXG5sZXQgYmVuZCA9IHtcbiAgc3RhcnQ6IG51bGwsXG4gIGVuZDogbnVsbFxufTtcblxubGV0IGZyZXEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJlcScpO1xubGV0IHJlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXMnKTtcbmxldCBmaWx0eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlcicpO1xubGV0IGZpbHRlcm5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLW5hbWUnKTtcblxuZnJlcS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICBmaWx0ZXIuc2V0KHsgZnJlcXVlbmN5OiBlLnRhcmdldC52YWx1ZSAqKiAyIC8gNSB9KVxuICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSAqKiAyIC8gNSlcbn0pXG5cbnJlcy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4ge1xuICBvc2Muc2V0KHsgZGV0dW5lOiBlLnRhcmdldC52YWx1ZSB9KVxufSlcblxuZmlsdHlwZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnMScpIHtcbiAgICBmaWx0ZXIuc2V0KHsgdHlwZTogJ2xvd3Bhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0xQRidcbiAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzInKSB7XG4gICAgZmlsdGVyLnNldCh7IHR5cGU6ICdoaWdocGFzcycgfSkgO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0hQRidcbiAgfSBlbHNlIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJzMnKSB7IFxuICAgIGZpbHRlci5zZXQoeyB0eXBlOiAnYmFuZHBhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0JQRidcbiAgfSBlbHNlIHtcbiAgICBmaWx0ZXIuc2V0KHsgdHlwZTogJ2FsbHBhc3MnIH0pO1xuICAgIGZpbHRlcm5hbWUuaW5uZXJIVE1MID0gJ0FQRidcblxuICB9XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKGUua2V5KVxuICAgIC8vIGNvbnNvbGUubG9nKGtleU1hcFtlLmtleV0pXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG5cblxuICAgIGlmICggZG93bltlLmtleV0gPT09IDApIHtcbiAgICAgIGRvd25bZS5rZXldID0gMTtcbiAgICAgIHZvaWNlc1trZXlNYXBbZS5rZXldXSA9IDE7XG4gICAgICBcbiAgICAgIC8vIGxldCB2b2ljZUFyciA9IE9iamVjdC5rZXlzKHZvaWNlcylcbiAgICAgIC8vIGJlbmQuc3RhcnQgPSB2b2ljZUFyclt2b2ljZUFyci5sZW5ndGggLSAxXS8vcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgLy8gYmVuZC5zdGFydCA/IChiZW5kLmVuZCA9IHBpdGNoZXNbcGl0Y2hlcy5pbmRleE9mKGJlbmQuc3RhcnQpICsgMl0pIDogbnVsbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGJlbmQpXG5cbiAgXG4gICAgICBpZiAoZS5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKXtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnU2hpZnQnKXtcbiAgICAgICAgICBiZW5kLnN0YXJ0ID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgICAgIGJlbmQuc3RhcnQgPyAoYmVuZC5lbmQgPSBwaXRjaGVzW3BpdGNoZXMuaW5kZXhPZihiZW5kLnN0YXJ0KSArIDJdKSA6IG51bGw7XG4gICAgICAgICAgY29uc29sZS5sb2coYmVuZClcbiAgICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2UoYmVuZC5zdGFydCwgbm93KSAgICAgICAgXG4gICAgICAgICAgYmVuZG9zYy50cmlnZ2VyQXR0YWNrKGJlbmQuc3RhcnQsIG5vdylcbiAgICAgICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5lbmQsIDAuMiApXG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25lYXQnKVxuICAgICAgICBjb25zdCBzb3ByYW5vID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKTsgXG4gICAgICAgIFxuICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2Uoc29wcmFubywgbm93KSAgICAgICAgICAgICAgICBcbiAgICAgICAgdmlib3NjLnRyaWdnZXJBdHRhY2soc29wcmFubywgbm93KVxuICAgICAgfVxuICAgICAgICBcbiAgICAgb3NjLnRyaWdnZXJBdHRhY2soa2V5TWFwW2Uua2V5XSwgbm93KTtcbiAgICAgIGNvbnN0IHByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgICAgaWYgKHByZXNzZWQpIHByZXNzZWQuY2xhc3NMaXN0LmFkZCgncHJlc3NlZCcpXG4gICAgfSBcbiAgfSk7XG5cbiAgICAvLyAgIHZhciBhdXRvV2FoID0gbmV3IFRvbmUuQXV0b1dhaCg2MCwgNCwgLTMwKS50b01hc3RlcigpO1xuICAgIC8vIC8vaW5pdGlhbGl6ZSB0aGUgc3ludGggYW5kIGNvbm5lY3QgdG8gYXV0b3dhaFxuICAgIC8vIHZhciBzeW50aCA9IG9zYy5jb25uZWN0KGF1dG9XYWgpO1xuICAgIC8vIC8vUSB2YWx1ZSBpbmZsdWVuY2VzIHRoZSBlZmZlY3Qgb2YgdGhlIHdhaCAtIGRlZmF1bHQgaXMgMlxuICAgIC8vIGF1dG9XYWguUS52YWx1ZSA9IDY7XG4gICAgLy8gLy9tb3JlIGF1ZGlibGUgb24gaGlnaGVyIG5vdGVzXG4gIFxuICBcbiAgXG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5sb2NhdGlvbiA9PT0gS2V5Ym9hcmRFdmVudC5ET01fS0VZX0xPQ0FUSU9OX1JJR0hUKXtcbiAgICAgIGRlYnVnZ2VyXG4gICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5zdGFydCwgMC4yKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBcbiAgICAgIHZpYm9zYy50cmlnZ2VyUmVsZWFzZShub3cpICAgIFxuICAgIH1cbiAgICBkb3duW2Uua2V5XSA9IDA7XG4gICAgZGVsZXRlIHZvaWNlc1trZXlNYXBbZS5rZXldXSBcbiAgICBvc2MudHJpZ2dlclJlbGVhc2Uoa2V5TWFwW2Uua2V5XSwgbm93KVxuICAgIGlmICghT2JqZWN0LmtleXModm9pY2VzKS5pbmNsdWRlcyhiZW5kLnN0YXJ0KSkge1xuICAgICAgYmVuZG9zYy50cmlnZ2VyUmVsZWFzZShub3cpXG4gICAgICBiZW5kLnN0YXJ0ID0gbnVsbDtcbiAgICAgIGJlbmQuZW5kID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdW5wcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICBpZiAodW5wcmVzc2VkKSB1bnByZXNzZWQuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpXG4gICAgfSwgZmFsc2UpXG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAoWydzaW5lJywndHJpYW5nbGUnLCdzcXVhcmUnLCdzYXd0b290aCddLmluY2x1ZGVzKGUudGFyZ2V0LmNsYXNzTGlzdFswXSkpe1xuICAgICAgY29uc3Qgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VsZWN0ZWQnKVswXVxuICAgICAgaWYgKG9sZCkgb2xkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgICAgXG4gICAgXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAvLyBzeW50aFBhcmFtcy50eXBlID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICBcbiAgICAgIG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJlbmRvc2Muc2V0KHtcbiAgICAgICAgJ29zY2lsbGF0b3InOiB7XG4gICAgICAgICAgJ3R5cGUnOiBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG4gIH0pXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9