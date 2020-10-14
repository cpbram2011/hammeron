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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiZmlsdGVyIiwiVG9uZSIsIkF1dG9GaWx0ZXIiLCJ0b0Rlc3RpbmF0aW9uIiwic2V0IiwiZnJlcXVlbmN5Iiwicm9sbG9mZiIsIlEiLCJnYWluIiwib3NjIiwiUG9seVN5bnRoIiwiYmVuZG9zYyIsIlN5bnRoIiwidmliIiwiVmlicmF0byIsInZpYm9zYyIsImNvbm5lY3QiLCJub3ciLCJkb3duIiwidm9pY2VzIiwicGl0Y2hlcyIsInJldlBpdGNoZXMiLCJtYXAiLCJ4IiwiaSIsImxlbmd0aCIsImtleXMiLCJzcGxpdCIsInVwcGVyS2V5cyIsImZvckVhY2giLCJwIiwia2V5TWFwIiwia2V5IiwiYmVuZCIsInN0YXJ0IiwiZW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2F0aW9uIiwiS2V5Ym9hcmRFdmVudCIsIkRPTV9LRVlfTE9DQVRJT05fUklHSFQiLCJmaW5kIiwiaW5kZXhPZiIsImNvbnNvbGUiLCJsb2ciLCJ0cmlnZ2VyUmVsZWFzZSIsInRyaWdnZXJBdHRhY2siLCJyYW1wVG8iLCJzb3ByYW5vIiwicHJlc3NlZCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJpbmNsdWRlcyIsInVucHJlc3NlZCIsInJlbW92ZSIsInRhcmdldCIsIm9sZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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LENBQW5CO0FBREk7QUFEUixPQUFSO0FBS0EzQyxhQUFPLENBQUNQLEdBQVIsQ0FBWTtBQUNWLHNCQUFjO0FBQ1osa0JBQVFrQyxDQUFDLENBQUNzQixNQUFGLENBQVNOLFNBQVQsQ0FBbUIsQ0FBbkI7QUFESTtBQURKLE9BQVo7QUFNRDtBQUNGLEdBbkJDO0FBb0JILENBaEdELEU7Ozs7Ozs7Ozs7O0FDN0VBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Ryb3Bkb3duLnNjc3NcIjtcbi8vIGltcG9ydCAqIGFzIFdhdmVmb3JtU2VsZWN0b3IgZnJvbSAnLi9zY3JpcHRzL3dhdmVmb3JtJ1xuLy8gY29uc29sZS5sb2coV2F2ZWZvcm1TZWxlY3Rvci5zeW50aFBhcmFtcylcblxuY29uc3QgZmlsdGVyID0gbmV3IFRvbmUuQXV0b0ZpbHRlcigpLnRvRGVzdGluYXRpb24oKVxuZmlsdGVyLnNldCh7XG4gIGZyZXF1ZW5jeSA6IDIwMCAsXG4gIHJvbGxvZmYgOiAtMTIgLFxuICBRIDogMSAsXG4gIGdhaW4gOiAwXG59KTtcblxuY29uc3Qgb3NjID0gbmV3IFRvbmUuUG9seVN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5jb25zdCBiZW5kb3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYiA9IG5ldyBUb25lLlZpYnJhdG8oNSwgMC4xKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYm9zYyA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5cbnZpYm9zYy5jb25uZWN0KHZpYik7XG5vc2MuY29ubmVjdChmaWx0ZXIpO1xuY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcblxubGV0IGRvd24gPSB7fTtcbmxldCB2b2ljZXMgPSB7fTtcblxuXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0UyJywnRjInLCdHYjInLCdHMicsJ0FiMicsJ0EyJywnQmIyJywnQjInLCAgIC8vb2N0YXZlIGRvd25cbi8vICdDMycsJ0RiMycsJ0QzJywnRWIzJywnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4vLyAnQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnXVxuXG5jb25zdCBwaXRjaGVzID0gWydFMycsJ0YzJywnR2IzJywnRzMnLCdBYjMnLCdBMycsJ0JiMycsJ0IzJyxcbidDNCcsJ0RiNCcsJ0Q0JywnRWI0JywnRTQnLCdGNCcsJ0diNCcsJ0c0JywnQWI0JywnQTQnLCdCYjQnLCdCNCcsXG4nQzUnLCdEYjUnLCdENScsJ0ViNScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNSddXG5cbmNvbnN0IHJldlBpdGNoZXMgPSBwaXRjaGVzLm1hcCgoeCxpKSA9PiBwaXRjaGVzW3BpdGNoZXMubGVuZ3RoIC0gaSAtIDFdKVxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzMnLCdEMycsJ0UzJywnRjMnLCdHMycsJ0FiMycsJ0EzJywnQjMnLCAgICAgLy9iYXJyeSBoYXJyaXNcbi8vICdDNCcsJ0Q0JywnRTQnLCdGNCcsJ0c0JywnQWI0JywnQTQnLCdCNCcsXG4vLyAnQzUnLCdENScsJ0U1JywnRjUnLCdHYjUnLCdHNScsJ0FiNScsJ0E1JywnQjUnLF1cblxuLy8gY29uc3QgcGl0Y2hlcyA9IFsnQzInLCdEMicsJ0UyJywnRzInLCdBMicsJ0MzJywnRDMnLCdFMycsJ0czJywnQTMnLCdDNCcsJ0Q0JywnRTQnLCdHNCcsJ0E0JywnQzUnLCdENScsJ0U1JywnRzUnLCdBNSddIC8vIHBlbnRhdG9uaWNcblxuY29uc3Qga2V5cyA9IFwienhjdmJubSwuL2FzZGZnaGprbDsncXdlcnR5dWlvcFtdMTIzNDU2Nzg5MC09XCIuc3BsaXQoJycpXG5jb25zdCB1cHBlcktleXMgPSBcIlpYQ1ZCTk0sLi9BU0RGR0hKS0w7J1FXRVJUWVVJT1BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuXG5rZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cbnVwcGVyS2V5cy5mb3JFYWNoKHAgPT4ge1xuICBkb3duW3BdID0gMDtcbn0pO1xuXG5cbmNvbnN0IGtleU1hcCA9IHt9O1xuXG5rZXlzLmZvckVhY2goKGtleSwgaSkgPT57XG4gIGlmIChpIDwgMTApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaV07XG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2ldO1xuICB9IGVsc2UgaWYgKGkgPCAyMSApIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDVdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gNV07XG4gIH0gZWxzZSBpZiAoaSA8IDMzICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMTFdO1xuICAgIC8vIGtleU1hcFt1cHBlcktleXNbaV1dID0gcGl0Y2hlc1tpIC0gMTFdO1xuICB9IGVsc2Uge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gMThdXG4gICAgLy8ga2V5TWFwW3VwcGVyS2V5c1tpXV0gPSBwaXRjaGVzW2kgLSAxOF07XG4gIH1cbn1cbik7XG5cbmxldCBiZW5kID0ge1xuICBzdGFydDogbnVsbCxcbiAgZW5kOiBudWxsXG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhlLmtleSlcbiAgICAvLyBjb25zb2xlLmxvZyhrZXlNYXBbZS5rZXldKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDMyKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuXG5cbiAgICBpZiAoIGRvd25bZS5rZXldID09PSAwKSB7XG4gICAgICBkb3duW2Uua2V5XSA9IDE7XG4gICAgICB2b2ljZXNba2V5TWFwW2Uua2V5XV0gPSAxO1xuICAgICAgXG4gICAgICAvLyBsZXQgdm9pY2VBcnIgPSBPYmplY3Qua2V5cyh2b2ljZXMpXG4gICAgICAvLyBiZW5kLnN0YXJ0ID0gdm9pY2VBcnJbdm9pY2VBcnIubGVuZ3RoIC0gMV0vL3JldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgIC8vIGJlbmQuc3RhcnQgPyAoYmVuZC5lbmQgPSBwaXRjaGVzW3BpdGNoZXMuaW5kZXhPZihiZW5kLnN0YXJ0KSArIDJdKSA6IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZyhiZW5kKVxuXG4gIFxuICAgICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jyl7XG4gICAgICAgICAgYmVuZC5zdGFydCA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgICAgICBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJlbmQpXG4gICAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKGJlbmQuc3RhcnQsIG5vdykgICAgICAgIFxuICAgICAgICAgIGJlbmRvc2MudHJpZ2dlckF0dGFjayhiZW5kLnN0YXJ0LCBub3cpXG4gICAgICAgICAgYmVuZG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmQuZW5kLCAwLjIgKVxuICAgICAgICB9IFxuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZWF0JylcbiAgICAgICAgY29uc3Qgc29wcmFubyA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSk7IFxuICAgICAgICBcbiAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKHNvcHJhbm8sIG5vdykgICAgICAgICAgICAgICAgXG4gICAgICAgIHZpYm9zYy50cmlnZ2VyQXR0YWNrKHNvcHJhbm8sIG5vdylcbiAgICAgIH1cbiAgICAgICAgXG4gICAgIG9zYy50cmlnZ2VyQXR0YWNrKGtleU1hcFtlLmtleV0sIG5vdyk7XG4gICAgICBjb25zdCBwcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICAgIGlmIChwcmVzc2VkKSBwcmVzc2VkLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKVxuICAgIH0gXG4gIH0pO1xuXG4gICAgLy8gICB2YXIgYXV0b1dhaCA9IG5ldyBUb25lLkF1dG9XYWgoNjAsIDQsIC0zMCkudG9NYXN0ZXIoKTtcbiAgICAvLyAvL2luaXRpYWxpemUgdGhlIHN5bnRoIGFuZCBjb25uZWN0IHRvIGF1dG93YWhcbiAgICAvLyB2YXIgc3ludGggPSBvc2MuY29ubmVjdChhdXRvV2FoKTtcbiAgICAvLyAvL1EgdmFsdWUgaW5mbHVlbmNlcyB0aGUgZWZmZWN0IG9mIHRoZSB3YWggLSBkZWZhdWx0IGlzIDJcbiAgICAvLyBhdXRvV2FoLlEudmFsdWUgPSA2O1xuICAgIC8vIC8vbW9yZSBhdWRpYmxlIG9uIGhpZ2hlciBub3Rlc1xuICBcbiAgXG4gIFxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgYmVuZG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmQuc3RhcnQsIDAuMik7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgY29uc29sZS5sb2coJ25lYXQnKVxuICAgICAgXG4gICAgICB2aWJvc2MudHJpZ2dlclJlbGVhc2Uobm93KSAgICBcbiAgICB9XG4gICAgZG93bltlLmtleV0gPSAwO1xuICAgIGRlbGV0ZSB2b2ljZXNba2V5TWFwW2Uua2V5XV0gXG4gICAgb3NjLnRyaWdnZXJSZWxlYXNlKGtleU1hcFtlLmtleV0sIG5vdylcbiAgICBpZiAoIU9iamVjdC5rZXlzKHZvaWNlcykuaW5jbHVkZXMoYmVuZC5zdGFydCkpIHtcbiAgICAgIGJlbmRvc2MudHJpZ2dlclJlbGVhc2Uobm93KVxuICAgICAgYmVuZC5zdGFydCA9IG51bGw7XG4gICAgICBiZW5kLmVuZCA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHVucHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgaWYgKHVucHJlc3NlZCkgdW5wcmVzc2VkLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXNzZWQnKVxuICAgIH0sIGZhbHNlKVxuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKFsnc2luZScsJ3RyaWFuZ2xlJywnc3F1YXJlJywnc2F3dG9vdGgnXS5pbmNsdWRlcyhlLnRhcmdldC5jbGFzc0xpc3RbMF0pKXtcbiAgICAgIGNvbnN0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlbGVjdGVkJylbMF1cbiAgICAgIGlmIChvbGQpIG9sZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpXG4gICAgICAvLyBzeW50aFBhcmFtcy50eXBlID0gZS50YXJnZXQuY2xhc3NMaXN0WzBdXG4gICAgICBcbiAgICAgIG9zYy5zZXQoe1xuICAgICAgICAnb3NjaWxsYXRvcic6IHtcbiAgICAgICAgICAndHlwZSc6IGUudGFyZ2V0LmNsYXNzTGlzdFswXVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGJlbmRvc2Muc2V0KHtcbiAgICAgICAgJ29zY2lsbGF0b3InOiB7XG4gICAgICAgICAgJ3R5cGUnOiBlLnRhcmdldC5jbGFzc0xpc3RbMF1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICB9XG4gIH0pXG59KTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9