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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZmlsdGVyIiwiVG9uZSIsIkZpbHRlciIsInRvRGVzdGluYXRpb24iLCJzZXQiLCJmcmVxdWVuY3kiLCJ0eXBlIiwicm9sbG9mZiIsIm9zYyIsIlBvbHlTeW50aCIsImJlbmRvc2MiLCJTeW50aCIsInZpYiIsIlZpYnJhdG8iLCJ2aWJvc2MiLCJjb25uZWN0Iiwibm93IiwiZG93biIsInZvaWNlcyIsInBpdGNoZXMiLCJyZXZQaXRjaGVzIiwibWFwIiwieCIsImkiLCJsZW5ndGgiLCJrZXlzIiwic3BsaXQiLCJ1cHBlcktleXMiLCJmb3JFYWNoIiwicCIsImtleU1hcCIsImtleSIsImJlbmQiLCJzdGFydCIsImVuZCIsImZyZXEiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVzIiwiZmlsdHlwZSIsImZpbHRlcm5hbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRldHVuZSIsImlubmVySFRNTCIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmQiLCJpbmRleE9mIiwidHJpZ2dlclJlbGVhc2UiLCJ0cmlnZ2VyQXR0YWNrIiwicmFtcFRvIiwic29wcmFubyIsInByZXNzZWQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiaW5jbHVkZXMiLCJ1bnByZXNzZWQiLCJyZW1vdmUiLCJvbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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QkFBVCxDQUFnQyxVQUFoQyxFQUE0QyxDQUE1QyxDQUFaO0FBQ0EsVUFBSU8sR0FBSixFQUFTQSxHQUFHLENBQUNOLFNBQUosQ0FBY0ssTUFBZCxDQUFxQixVQUFyQjtBQUdUdEIsT0FBQyxDQUFDQyxNQUFGLENBQVNnQixTQUFULENBQW1CQyxHQUFuQixDQUF1QixVQUF2QixFQUw0RSxDQU01RTs7QUFFQXBELFNBQUcsQ0FBQ0osR0FBSixDQUFRO0FBQ04sc0JBQWM7QUFDWixrQkFBUXNDLENBQUMsQ0FBQ0MsTUFBRixDQUFTZ0IsU0FBVCxDQUFtQixDQUFuQjtBQURJO0FBRFIsT0FBUjtBQUtBakQsYUFBTyxDQUFDTixHQUFSLENBQVk7QUFDVixzQkFBYztBQUNaLGtCQUFRc0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNnQixTQUFULENBQW1CLENBQW5CO0FBREk7QUFESixPQUFaO0FBS0E3QyxZQUFNLENBQUNWLEdBQVAsQ0FBVztBQUNULHNCQUFjO0FBQ1osa0JBQVFzQyxDQUFDLENBQUNDLE1BQUYsQ0FBU2dCLFNBQVQsQ0FBbUIsQ0FBbkI7QUFESTtBQURMLE9BQVg7QUFNRDtBQUNGLEdBMUJDO0FBMkJILENBbkdELEU7Ozs7Ozs7Ozs7O0FDOUdBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Ryb3Bkb3duLnNjc3NcIjtcbi8vIGltcG9ydCAqIGFzIFdhdmVmb3JtU2VsZWN0b3IgZnJvbSAnLi9zY3JpcHRzL3dhdmVmb3JtJ1xuLy8gY29uc29sZS5sb2coV2F2ZWZvcm1TZWxlY3Rvci5zeW50aFBhcmFtcylcblxuY29uc3QgZmlsdGVyID0gbmV3IFRvbmUuRmlsdGVyKCkudG9EZXN0aW5hdGlvbigpXG5maWx0ZXIuc2V0KHtcbiAgZnJlcXVlbmN5IDogMTIwMCAsXG4gIHR5cGU6ICdoaWdocGFzcycsXG4gIHJvbGxvZmYgOiAtMjRcbn0pO1xuXG5jb25zdCBvc2MgPSBuZXcgVG9uZS5Qb2x5U3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IGJlbmRvc2MgPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKVxuY29uc3QgdmliID0gbmV3IFRvbmUuVmlicmF0byg1LCAwLjEpLnRvRGVzdGluYXRpb24oKVxuY29uc3Qgdmlib3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcblxudmlib3NjLmNvbm5lY3QodmliKTtcblxub3NjLmNvbm5lY3QoZmlsdGVyKTtcblxuY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcblxubGV0IGRvd24gPSB7fTtcbmxldCB2b2ljZXMgPSB7fTtcblxuXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0UyJywnRjInLCdHYjInLCdHMicsJ0FiMicsJ0EyJywnQmIyJywnQjInLCAgIC8vb2N0YXZlIGRvd25cbi8vICdDMycsJ0RiMycsJ0QzJywnRWIzJywnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4vLyAnQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnXVxuXG5jb25zdCBwaXRjaGVzID0gWydFMycsJ0YzJywnR2IzJywnRzMnLCdBYjMnLCdBMycsJ0JiMycsJ0IzJyxcbidDNCcsJ0RiNCcsJ0Q0JywnRWI0JywnRTQnLCdGNCcsJ0diNCcsJ0c0JywnQWI0JywnQTQnLCdCYjQnLCdCNCcsXG4nQzUnLCdEYjUnLCdENScsJ0ViNScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNSddXG5cbmNvbnN0IHJldlBpdGNoZXMgPSBwaXRjaGVzLm1hcCgoeCxpKSA9PiBwaXRjaGVzW3BpdGNoZXMubGVuZ3RoIC0gaSAtIDFdKVxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzMnLCdEMycsJ0UzJywnRjMnLCdHMycsJ0FiMycsJ0EzJywnQjMnLCAgICAgLy9iYXJyeSBoYXJyaXNcbi8vICdDNCcsJ0Q0JywnRTQnLCdGNCcsJ0c0JywnQWI0JywnQTQnLCdCNCcsXG4vLyAnQzUnLCdENScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNScsJ0E1JywnQjUnLF1cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzInLCdEMicsJ0UyJywnRzInLCdBMicsJ0MzJywnRDMnLCdFMycsJ0czJywnQTMnLCdDNCcsJ0Q0JywnRTQnLCdHNCcsJ0E0JywnQzUnLCdENScsJ0U1JywnRzUnLCdBNSddIC8vIHBlbnRhdG9uaWNcblxuY29uc3Qga2V5cyA9IFwienhjdmJubSwuL2FzZGZnaGprbDsncXdlcnR5dWlvcFtdMTIzNDU2Nzg5MC09XCIuc3BsaXQoJycpXG5jb25zdCB1cHBlcktleXMgPSBcIlpYQ1ZCTk0sLi9BU0RGR0hKS0w7J1FXRVJUWVVJT1BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuXG5rZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cbnVwcGVyS2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG5cbmNvbnN0IGtleU1hcCA9IHt9O1xuXG5rZXlzLmZvckVhY2goKGtleSwgaSkgPT57XG4gIGlmIChpIDwgMTApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaV07XG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2ldO1xuICB9IGVsc2UgaWYgKGkgPCAyMSApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDVdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gNV07XG4gIH0gZWxzZSBpZiAoaSA8IDMzICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMTFdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gMTFdO1xuICB9IGVsc2Uge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMThdXG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2kgLSAxOF07XG4gIH1cbn1cbik7XG5cbmxldCBiZW5kID0ge1xuICBzdGFydDogbnVsbCxcbiAgZW5kOiBudWxsXG59O1xuXG5sZXQgZnJlcSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmVxJyk7XG5sZXQgcmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcycpO1xubGV0IGZpbHR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyJyk7XG5sZXQgZmlsdGVybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItbmFtZScpO1xuXG5mcmVxLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIGZpbHRlci5zZXQoeyBmcmVxdWVuY3k6IGUudGFyZ2V0LnZhbHVlICoqIDIgLyA1IH0pXG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlICoqIDIgLyA1KVxufSlcblxucmVzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB7XG4gIG9zYy5zZXQoeyBkZXR1bmU6IGUudGFyZ2V0LnZhbHVlIH0pXG59KVxuXG5maWx0eXBlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09ICcxJykge1xuICAgIGZpbHRlci5zZXQoeyB0eXBlOiAnbG93cGFzcycgfSk7XG4gICAgZmlsdGVybmFtZS5pbm5lckhUTUwgPSAnTFBGJ1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnMicpIHtcbiAgICBmaWx0ZXIuc2V0KHsgdHlwZTogJ2hpZ2hwYXNzJyB9KSA7XG4gICAgZmlsdGVybmFtZS5pbm5lckhUTUwgPSAnSFBGJ1xuICB9IGVsc2UgaWYgKGUudGFyZ2V0LnZhbHVlID09PSAnMycpIHsgXG4gICAgZmlsdGVyLnNldCh7IHR5cGU6ICdiYW5kcGFzcycgfSk7XG4gICAgZmlsdGVybmFtZS5pbm5lckhUTUwgPSAnQlBGJ1xuICB9IGVsc2Uge1xuICAgIGZpbHRlci5zZXQoeyB0eXBlOiAnYWxscGFzcycgfSk7XG4gICAgZmlsdGVybmFtZS5pbm5lckhUTUwgPSAnQVBGJ1xuXG4gIH1cbn0pXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coZS5rZXkpXG4gICAgLy8gY29uc29sZS5sb2coa2V5TWFwW2Uua2V5XSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzMil7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICB9XG5cblxuXG4gICAgaWYgKCBkb3duW2Uua2V5XSA9PT0gMCkge1xuICAgICAgZG93bltlLmtleV0gPSAxO1xuICAgICAgdm9pY2VzW2tleU1hcFtlLmtleV1dID0gMTtcbiAgICAgIFxuICAgICAgLy8gbGV0IHZvaWNlQXJyID0gT2JqZWN0LmtleXModm9pY2VzKVxuICAgICAgLy8gYmVuZC5zdGFydCA9IHZvaWNlQXJyW3ZvaWNlQXJyLmxlbmd0aCAtIDFdLy9yZXZQaXRjaGVzLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpXG4gICAgICAvLyBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coYmVuZClcblxuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzIpe1xuICAgICAgICBiZW5kLnN0YXJ0ID0gcmV2UGl0Y2hlcy5maW5kKHAgPT4gdm9pY2VzW3BdID09PSAxKVxuICAgICAgICBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgICBjb25zb2xlLmxvZyhiZW5kKVxuICAgICAgICBvc2MudHJpZ2dlclJlbGVhc2UoYmVuZC5zdGFydCwgbm93KSAgICAgICAgXG4gICAgICAgIGJlbmRvc2MudHJpZ2dlckF0dGFjayhiZW5kLnN0YXJ0LCBub3cpXG4gICAgICAgIGJlbmRvc2MuZnJlcXVlbmN5LnJhbXBUbyhiZW5kLmVuZCwgMC4yIClcbiAgICAgIH0gXG4gICAgICBcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBjb25zb2xlLmxvZygnbmVhdCcpXG4gICAgICAgIGNvbnN0IHNvcHJhbm8gPSByZXZQaXRjaGVzLmZpbmQocCA9PiB2b2ljZXNbcF0gPT09IDEpOyBcbiAgICAgICAgXG4gICAgICAgIG9zYy50cmlnZ2VyUmVsZWFzZShzb3ByYW5vLCBub3cpICAgICAgICAgICAgICAgIFxuICAgICAgICB2aWJvc2MudHJpZ2dlckF0dGFjayhzb3ByYW5vLCBub3cpXG4gICAgICB9XG4gICAgICAgIFxuICAgICBvc2MudHJpZ2dlckF0dGFjayhrZXlNYXBbZS5rZXldLCBub3cpO1xuICAgICAgY29uc3QgcHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgICBpZiAocHJlc3NlZCkgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJylcbiAgICB9IFxuICB9KTtcblxuICAgIC8vICAgdmFyIGF1dG9XYWggPSBuZXcgVG9uZS5BdXRvV2FoKDYwLCA0LCAtMzApLnRvTWFzdGVyKCk7XG4gICAgLy8gLy9pbml0aWFsaXplIHRoZSBzeW50aCBhbmQgY29ubmVjdCB0byBhdXRvd2FoXG4gICAgLy8gdmFyIHN5bnRoID0gb3NjLmNvbm5lY3QoYXV0b1dhaCk7XG4gICAgLy8gLy9RIHZhbHVlIGluZmx1ZW5jZXMgdGhlIGVmZmVjdCBvZiB0aGUgd2FoIC0gZGVmYXVsdCBpcyAyXG4gICAgLy8gYXV0b1dhaC5RLnZhbHVlID0gNjtcbiAgICAvLyAvL21vcmUgYXVkaWJsZSBvbiBoaWdoZXIgbm90ZXNcbiAgXG4gIFxuICBcbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKXtcbiAgICAgIGJlbmRvc2MuZnJlcXVlbmN5LnJhbXBUbyhiZW5kLnN0YXJ0LCAwLjIpO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIFxuICAgICAgdmlib3NjLnRyaWdnZXJSZWxlYXNlKG5vdykgICAgXG4gICAgfVxuICAgIGRvd25bZS5rZXldID0gMDtcbiAgICBkZWxldGUgdm9pY2VzW2tleU1hcFtlLmtleV1dIFxuICAgIG9zYy50cmlnZ2VyUmVsZWFzZShrZXlNYXBbZS5rZXldLCBub3cpXG4gICAgaWYgKCFPYmplY3Qua2V5cyh2b2ljZXMpLmluY2x1ZGVzKGJlbmQuc3RhcnQpKSB7XG4gICAgICBiZW5kb3NjLnRyaWdnZXJSZWxlYXNlKG5vdylcbiAgICAgIGJlbmQuc3RhcnQgPSBudWxsO1xuICAgICAgYmVuZC5lbmQgPSBudWxsO1xuICAgIH1cbiAgICBjb25zdCB1bnByZXNzZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBrZXktJHtlLmtleX1gKVswXVxuICAgIGlmICh1bnByZXNzZWQpIHVucHJlc3NlZC5jbGFzc0xpc3QucmVtb3ZlKCdwcmVzc2VkJylcbiAgICB9LCBmYWxzZSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmIChbJ3NpbmUnLCd0cmlhbmdsZScsJ3NxdWFyZScsJ3Nhd3Rvb3RoJ10uaW5jbHVkZXMoZS50YXJnZXQuY2xhc3NMaXN0WzBdKSl7XG4gICAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RlZCcpWzBdXG4gICAgICBpZiAob2xkKSBvbGQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKVxuICAgICAgICBcbiAgICBcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgICAgIC8vIHN5bnRoUGFyYW1zLnR5cGUgPSBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgIFxuICAgICAgb3NjLnNldCh7XG4gICAgICAgICdvc2NpbGxhdG9yJzoge1xuICAgICAgICAgICd0eXBlJzogZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgYmVuZG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZpYm9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIFxuICAgIH1cbiAgfSlcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=