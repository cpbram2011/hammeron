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
var bendosc = new Tone.Synth().toDestination();
var vib = new Tone.Vibrato(5, 0.1).toDestination();
var vibosc = new Tone.Synth().toDestination();
vibosc.connect(vib);
var now = Tone.now();
var down = {};
var voices = {};
window.voices = voices; // const pitches = ['E2','F2','Gb2','G2','Ab2','A2','Bb2','B2',   //octave down
// 'C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
// 'C4','Db4','D4','Eb4','E4','F4','Gb4']

var pitches = ['E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5'];
var revPitches = pitches.map(function (x, i) {
  return pitches[pitches.length - i - 1];
}); // const pitches = ['C3','D3','E3','F3','G3','Ab3','A3','B3',     //barry harris
// 'C4','D4','E4','F4','G4','Ab4','A4','B4',
// 'C5','D5','E5','F5','Gb5','G5','Ab5','A5','B5',]
// const pitches = ['C2','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5'] // pentatonic

console.log(pitches);
console.log(revPitches);
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
  });
  document.addEventListener("keyup", function (e) {
    if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZHJvcGRvd24uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsib3NjIiwiVG9uZSIsIlBvbHlTeW50aCIsInRvRGVzdGluYXRpb24iLCJiZW5kb3NjIiwiU3ludGgiLCJ2aWIiLCJWaWJyYXRvIiwidmlib3NjIiwiY29ubmVjdCIsIm5vdyIsImRvd24iLCJ2b2ljZXMiLCJ3aW5kb3ciLCJwaXRjaGVzIiwicmV2UGl0Y2hlcyIsIm1hcCIsIngiLCJpIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImtleXMiLCJzcGxpdCIsImZvckVhY2giLCJwIiwia2V5TWFwIiwia2V5IiwiYmVuZCIsInN0YXJ0IiwiZW5kIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImxvY2F0aW9uIiwiS2V5Ym9hcmRFdmVudCIsIkRPTV9LRVlfTE9DQVRJT05fUklHSFQiLCJmaW5kIiwiaW5kZXhPZiIsInRyaWdnZXJSZWxlYXNlIiwidHJpZ2dlckF0dGFjayIsImZyZXF1ZW5jeSIsInJhbXBUbyIsInNvcHJhbm8iLCJwcmVzc2VkIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsIk9iamVjdCIsImluY2x1ZGVzIiwidW5wcmVzc2VkIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxHQUFHLElBQUlDLElBQUksQ0FBQ0MsU0FBVCxHQUFxQkMsYUFBckIsRUFBWjtBQUNBLElBQU1DLE9BQU8sR0FBRyxJQUFJSCxJQUFJLENBQUNJLEtBQVQsR0FBaUJGLGFBQWpCLEVBQWhCO0FBQ0EsSUFBTUcsR0FBRyxHQUFHLElBQUlMLElBQUksQ0FBQ00sT0FBVCxDQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUF5QkosYUFBekIsRUFBWjtBQUNBLElBQU1LLE1BQU0sR0FBRyxJQUFJUCxJQUFJLENBQUNJLEtBQVQsR0FBaUJGLGFBQWpCLEVBQWY7QUFDQUssTUFBTSxDQUFDQyxPQUFQLENBQWVILEdBQWY7QUFDQSxJQUFNSSxHQUFHLEdBQUdULElBQUksQ0FBQ1MsR0FBTCxFQUFaO0FBRUEsSUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFDQSxJQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBQyxNQUFNLENBQUNELE1BQVAsR0FBZ0JBLE1BQWhCLEMsQ0FDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUUsT0FBTyxHQUFHLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxLQUFYLEVBQWlCLElBQWpCLEVBQXNCLEtBQXRCLEVBQTRCLElBQTVCLEVBQWlDLEtBQWpDLEVBQXVDLElBQXZDLEVBQ2hCLElBRGdCLEVBQ1gsS0FEVyxFQUNMLElBREssRUFDQSxLQURBLEVBQ00sSUFETixFQUNXLElBRFgsRUFDZ0IsS0FEaEIsRUFDc0IsSUFEdEIsRUFDMkIsS0FEM0IsRUFDaUMsSUFEakMsRUFDc0MsS0FEdEMsRUFDNEMsSUFENUMsRUFFaEIsSUFGZ0IsRUFFWCxLQUZXLEVBRUwsSUFGSyxFQUVBLEtBRkEsRUFFTSxJQUZOLEVBRVcsSUFGWCxFQUVnQixLQUZoQixFQUVzQixJQUZ0QixFQUUyQixLQUYzQixDQUFoQjtBQUlBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRSxHQUFSLENBQVksVUFBQ0MsQ0FBRCxFQUFHQyxDQUFIO0FBQUEsU0FBU0osT0FBTyxDQUFDQSxPQUFPLENBQUNLLE1BQVIsR0FBaUJELENBQWpCLEdBQXFCLENBQXRCLENBQWhCO0FBQUEsQ0FBWixDQUFuQixDLENBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxPQUFaO0FBQ0FNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixVQUFaO0FBQ0EsSUFBTU8sSUFBSSxHQUFHLGdEQUFnREMsS0FBaEQsQ0FBc0QsRUFBdEQsQ0FBYjtBQUVBRCxJQUFJLENBQUNFLE9BQUwsQ0FBYSxVQUFBQyxDQUFDLEVBQUk7QUFDaEJkLE1BQUksQ0FBQ2MsQ0FBRCxDQUFKLEdBQVUsQ0FBVjtBQUNELENBRkQ7QUFJQVgsT0FBTyxDQUFDVSxPQUFSLENBQWdCLFVBQUFDLENBQUMsRUFBSTtBQUNuQmQsTUFBSSxDQUFDYyxDQUFELENBQUosR0FBVSxDQUFWO0FBQ0QsQ0FGRDtBQUtBLElBQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUFKLElBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNHLEdBQUQsRUFBTVQsQ0FBTixFQUFXO0FBQ3RCLE1BQUlBLENBQUMsR0FBRyxFQUFSLEVBQVk7QUFDVlEsVUFBTSxDQUFDQyxHQUFELENBQU4sR0FBY2IsT0FBTyxDQUFDSSxDQUFELENBQXJCO0FBQ0QsR0FGRCxNQUVPLElBQUlBLENBQUMsR0FBRyxFQUFSLEVBQWE7QUFDbEJRLFVBQU0sQ0FBQ0MsR0FBRCxDQUFOLEdBQWNiLE9BQU8sQ0FBQ0ksQ0FBQyxHQUFHLENBQUwsQ0FBckI7QUFDRCxHQUZNLE1BRUEsSUFBSUEsQ0FBQyxHQUFHLEVBQVIsRUFBYTtBQUNsQlEsVUFBTSxDQUFDQyxHQUFELENBQU4sR0FBY2IsT0FBTyxDQUFDSSxDQUFDLEdBQUcsRUFBTCxDQUFyQjtBQUNELEdBRk0sTUFFQTtBQUNMUSxVQUFNLENBQUNDLEdBQUQsQ0FBTixHQUFjYixPQUFPLENBQUNJLENBQUMsR0FBRyxFQUFMLENBQXJCO0FBQ0Q7QUFDRixDQVZEO0FBYUEsSUFBSVUsSUFBSSxHQUFHO0FBQ1RDLE9BQUssRUFBRSxJQURFO0FBRVRDLEtBQUcsRUFBRTtBQUZJLENBQVg7QUFLQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREQsVUFBUSxDQUFDQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBQyxDQUFDLEVBQUk7QUFFeEMsUUFBS3RCLElBQUksQ0FBQ3NCLENBQUMsQ0FBQ04sR0FBSCxDQUFKLEtBQWdCLENBQXJCLEVBQXdCO0FBQ3RCaEIsVUFBSSxDQUFDc0IsQ0FBQyxDQUFDTixHQUFILENBQUosR0FBYyxDQUFkO0FBQ0FmLFlBQU0sQ0FBQ2MsTUFBTSxDQUFDTyxDQUFDLENBQUNOLEdBQUgsQ0FBUCxDQUFOLEdBQXdCLENBQXhCLENBRnNCLENBSXRCO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFVBQUlNLENBQUMsQ0FBQ0MsUUFBRixLQUFlQyxhQUFhLENBQUNDLHNCQUFqQyxFQUF3RDtBQUN0RCxZQUFJSCxDQUFDLENBQUNOLEdBQUYsS0FBVSxPQUFkLEVBQXNCO0FBQ3BCQyxjQUFJLENBQUNDLEtBQUwsR0FBYWQsVUFBVSxDQUFDc0IsSUFBWCxDQUFnQixVQUFBWixDQUFDO0FBQUEsbUJBQUliLE1BQU0sQ0FBQ2EsQ0FBRCxDQUFOLEtBQWMsQ0FBbEI7QUFBQSxXQUFqQixDQUFiO0FBQ0FHLGNBQUksQ0FBQ0MsS0FBTCxHQUFjRCxJQUFJLENBQUNFLEdBQUwsR0FBV2hCLE9BQU8sQ0FBQ0EsT0FBTyxDQUFDd0IsT0FBUixDQUFnQlYsSUFBSSxDQUFDQyxLQUFyQixJQUE4QixDQUEvQixDQUFoQyxHQUFxRSxJQUFyRTtBQUNBVCxpQkFBTyxDQUFDQyxHQUFSLENBQVlPLElBQVo7QUFDQTVCLGFBQUcsQ0FBQ3VDLGNBQUosQ0FBbUJYLElBQUksQ0FBQ0MsS0FBeEIsRUFBK0JuQixHQUEvQjtBQUNBTixpQkFBTyxDQUFDb0MsYUFBUixDQUFzQlosSUFBSSxDQUFDQyxLQUEzQixFQUFrQ25CLEdBQWxDO0FBQ0FOLGlCQUFPLENBQUNxQyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QmQsSUFBSSxDQUFDRSxHQUE5QixFQUFtQyxHQUFuQztBQUNEO0FBQ0Y7O0FBQ0QsVUFBSUcsQ0FBQyxDQUFDTixHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlAsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBLFlBQU1zQixPQUFPLEdBQUc1QixVQUFVLENBQUNzQixJQUFYLENBQWdCLFVBQUFaLENBQUM7QUFBQSxpQkFBSWIsTUFBTSxDQUFDYSxDQUFELENBQU4sS0FBYyxDQUFsQjtBQUFBLFNBQWpCLENBQWhCO0FBRUF6QixXQUFHLENBQUN1QyxjQUFKLENBQW1CSSxPQUFuQixFQUE0QmpDLEdBQTVCO0FBQ0FGLGNBQU0sQ0FBQ2dDLGFBQVAsQ0FBcUJHLE9BQXJCLEVBQThCakMsR0FBOUI7QUFDRDs7QUFFRFYsU0FBRyxDQUFDd0MsYUFBSixDQUFrQmQsTUFBTSxDQUFDTyxDQUFDLENBQUNOLEdBQUgsQ0FBeEIsRUFBaUNqQixHQUFqQztBQUNBLFVBQU1rQyxPQUFPLEdBQUdiLFFBQVEsQ0FBQ2Msc0JBQVQsZUFBdUNaLENBQUMsQ0FBQ04sR0FBekMsR0FBZ0QsQ0FBaEQsQ0FBaEI7QUFDQSxVQUFJaUIsT0FBSixFQUFhQSxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFNBQXRCO0FBQ2Q7QUFDRixHQWxDRDtBQXVDQWhCLFVBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3hDLFFBQUlBLENBQUMsQ0FBQ0MsUUFBRixLQUFlQyxhQUFhLENBQUNDLHNCQUFqQyxFQUF3RDtBQUN0RGhDLGFBQU8sQ0FBQ3FDLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCZCxJQUFJLENBQUNDLEtBQTlCLEVBQXFDLEdBQXJDO0FBQ0Q7O0FBQ0QsUUFBSUksQ0FBQyxDQUFDTixHQUFGLEtBQVUsT0FBZCxFQUF1QjtBQUNyQlAsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUVBYixZQUFNLENBQUMrQixjQUFQLENBQXNCN0IsR0FBdEI7QUFDRDs7QUFDREMsUUFBSSxDQUFDc0IsQ0FBQyxDQUFDTixHQUFILENBQUosR0FBYyxDQUFkO0FBQ0EsV0FBT2YsTUFBTSxDQUFDYyxNQUFNLENBQUNPLENBQUMsQ0FBQ04sR0FBSCxDQUFQLENBQWI7QUFDQTNCLE9BQUcsQ0FBQ3VDLGNBQUosQ0FBbUJiLE1BQU0sQ0FBQ08sQ0FBQyxDQUFDTixHQUFILENBQXpCLEVBQWtDakIsR0FBbEM7O0FBQ0EsUUFBSSxDQUFDc0MsTUFBTSxDQUFDMUIsSUFBUCxDQUFZVixNQUFaLEVBQW9CcUMsUUFBcEIsQ0FBNkJyQixJQUFJLENBQUNDLEtBQWxDLENBQUwsRUFBK0M7QUFDN0N6QixhQUFPLENBQUNtQyxjQUFSLENBQXVCN0IsR0FBdkI7QUFDQWtCLFVBQUksQ0FBQ0MsS0FBTCxHQUFhLElBQWI7QUFDQUQsVUFBSSxDQUFDRSxHQUFMLEdBQVcsSUFBWDtBQUNEOztBQUNELFFBQU1vQixTQUFTLEdBQUduQixRQUFRLENBQUNjLHNCQUFULGVBQXVDWixDQUFDLENBQUNOLEdBQXpDLEdBQWdELENBQWhELENBQWxCO0FBQ0EsUUFBSXVCLFNBQUosRUFBZUEsU0FBUyxDQUFDSixTQUFWLENBQW9CSyxNQUFwQixDQUEyQixTQUEzQjtBQUNkLEdBbkJILEVBbUJLLEtBbkJMO0FBc0JELENBOURELEU7Ozs7Ozs7Ozs7O0FDNURBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL2Ryb3Bkb3duLnNjc3NcIjtcblxuY29uc3Qgb3NjID0gbmV3IFRvbmUuUG9seVN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG5jb25zdCBiZW5kb3NjID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYiA9IG5ldyBUb25lLlZpYnJhdG8oNSwgMC4xKS50b0Rlc3RpbmF0aW9uKClcbmNvbnN0IHZpYm9zYyA9IG5ldyBUb25lLlN5bnRoKCkudG9EZXN0aW5hdGlvbigpXG52aWJvc2MuY29ubmVjdCh2aWIpO1xuY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcblxubGV0IGRvd24gPSB7fTtcbmxldCB2b2ljZXMgPSB7fTtcbndpbmRvdy52b2ljZXMgPSB2b2ljZXM7XG4vLyBjb25zdCBwaXRjaGVzID0gWydFMicsJ0YyJywnR2IyJywnRzInLCdBYjInLCdBMicsJ0JiMicsJ0IyJywgICAvL29jdGF2ZSBkb3duXG4vLyAnQzMnLCdEYjMnLCdEMycsJ0ViMycsJ0UzJywnRjMnLCdHYjMnLCdHMycsJ0FiMycsJ0EzJywnQmIzJywnQjMnLFxuLy8gJ0M0JywnRGI0JywnRDQnLCdFYjQnLCdFNCcsJ0Y0JywnR2I0J11cblxuY29uc3QgcGl0Y2hlcyA9IFsnRTMnLCdGMycsJ0diMycsJ0czJywnQWIzJywnQTMnLCdCYjMnLCdCMycsXG4nQzQnLCdEYjQnLCdENCcsJ0ViNCcsJ0U0JywnRjQnLCdHYjQnLCdHNCcsJ0FiNCcsJ0E0JywnQmI0JywnQjQnLFxuJ0M1JywnRGI1JywnRDUnLCdFYjUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnXVxuXG5jb25zdCByZXZQaXRjaGVzID0gcGl0Y2hlcy5tYXAoKHgsaSkgPT4gcGl0Y2hlc1twaXRjaGVzLmxlbmd0aCAtIGkgLSAxXSlcbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MzJywnRDMnLCdFMycsJ0YzJywnRzMnLCdBYjMnLCdBMycsJ0IzJywgICAgIC8vYmFycnkgaGFycmlzXG4vLyAnQzQnLCdENCcsJ0U0JywnRjQnLCdHNCcsJ0FiNCcsJ0E0JywnQjQnLFxuLy8gJ0M1JywnRDUnLCdFNScsJ0Y1JywnR2I1JywnRzUnLCdBYjUnLCdBNScsJ0I1JyxdXG5cbi8vIGNvbnN0IHBpdGNoZXMgPSBbJ0MyJywnRDInLCdFMicsJ0cyJywnQTInLCdDMycsJ0QzJywnRTMnLCdHMycsJ0EzJywnQzQnLCdENCcsJ0U0JywnRzQnLCdBNCcsJ0M1JywnRDUnLCdFNScsJ0c1JywnQTUnXSAvLyBwZW50YXRvbmljXG5jb25zb2xlLmxvZyhwaXRjaGVzKVxuY29uc29sZS5sb2cocmV2UGl0Y2hlcylcbmNvbnN0IGtleXMgPSBcInp4Y3Zibm0sLi9hc2RmZ2hqa2w7J3F3ZXJ0eXVpb3BbXTEyMzQ1Njc4OTAtPVwiLnNwbGl0KCcnKVxuXG5rZXlzLmZvckVhY2gocCA9PiB7XG4gIGRvd25bcF0gPSAwO1xufSk7XG5cbnBpdGNoZXMuZm9yRWFjaChwID0+IHtcbiAgZG93bltwXSA9IDA7XG59KTtcblxuXG5jb25zdCBrZXlNYXAgPSB7fTtcblxua2V5cy5mb3JFYWNoKChrZXksIGkpID0+e1xuICBpZiAoaSA8IDEwKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2ldXG4gIH0gZWxzZSBpZiAoaSA8IDIxICkge1xuICAgIGtleU1hcFtrZXldID0gcGl0Y2hlc1tpIC0gNV1cbiAgfSBlbHNlIGlmIChpIDwgMzMgKSB7XG4gICAga2V5TWFwW2tleV0gPSBwaXRjaGVzW2kgLSAxMV1cbiAgfSBlbHNlIHtcbiAgICBrZXlNYXBba2V5XSA9IHBpdGNoZXNbaSAtIDE4XVxuICB9XG59XG4pO1xuXG5sZXQgYmVuZCA9IHtcbiAgc3RhcnQ6IG51bGwsXG4gIGVuZDogbnVsbFxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICBcbiAgICBpZiAoIGRvd25bZS5rZXldID09PSAwKSB7XG4gICAgICBkb3duW2Uua2V5XSA9IDE7XG4gICAgICB2b2ljZXNba2V5TWFwW2Uua2V5XV0gPSAxO1xuICAgICAgXG4gICAgICAvLyBsZXQgdm9pY2VBcnIgPSBPYmplY3Qua2V5cyh2b2ljZXMpXG4gICAgICAvLyBiZW5kLnN0YXJ0ID0gdm9pY2VBcnJbdm9pY2VBcnIubGVuZ3RoIC0gMV0vL3JldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgIC8vIGJlbmQuc3RhcnQgPyAoYmVuZC5lbmQgPSBwaXRjaGVzW3BpdGNoZXMuaW5kZXhPZihiZW5kLnN0YXJ0KSArIDJdKSA6IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZyhiZW5kKVxuXG4gIFxuICAgICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jyl7XG4gICAgICAgICAgYmVuZC5zdGFydCA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSlcbiAgICAgICAgICBiZW5kLnN0YXJ0ID8gKGJlbmQuZW5kID0gcGl0Y2hlc1twaXRjaGVzLmluZGV4T2YoYmVuZC5zdGFydCkgKyAyXSkgOiBudWxsO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJlbmQpXG4gICAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKGJlbmQuc3RhcnQsIG5vdykgICAgICAgIFxuICAgICAgICAgIGJlbmRvc2MudHJpZ2dlckF0dGFjayhiZW5kLnN0YXJ0LCBub3cpXG4gICAgICAgICAgYmVuZG9zYy5mcmVxdWVuY3kucmFtcFRvKGJlbmQuZW5kLCAwLjIgKVxuICAgICAgICB9IFxuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduZWF0JylcbiAgICAgICAgY29uc3Qgc29wcmFubyA9IHJldlBpdGNoZXMuZmluZChwID0+IHZvaWNlc1twXSA9PT0gMSk7IFxuICAgICAgICBcbiAgICAgICAgb3NjLnRyaWdnZXJSZWxlYXNlKHNvcHJhbm8sIG5vdykgICAgICAgICAgICAgICAgXG4gICAgICAgIHZpYm9zYy50cmlnZ2VyQXR0YWNrKHNvcHJhbm8sIG5vdylcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICBvc2MudHJpZ2dlckF0dGFjayhrZXlNYXBbZS5rZXldLCBub3cpO1xuICAgICAgY29uc3QgcHJlc3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYGtleS0ke2Uua2V5fWApWzBdXG4gICAgICBpZiAocHJlc3NlZCkgcHJlc3NlZC5jbGFzc0xpc3QuYWRkKCdwcmVzc2VkJylcbiAgICB9XG4gIH0pO1xuICBcbiAgXG4gIFxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgaWYgKGUubG9jYXRpb24gPT09IEtleWJvYXJkRXZlbnQuRE9NX0tFWV9MT0NBVElPTl9SSUdIVCl7XG4gICAgICBiZW5kb3NjLmZyZXF1ZW5jeS5yYW1wVG8oYmVuZC5zdGFydCwgMC4yKTtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBjb25zb2xlLmxvZygnbmVhdCcpXG4gICAgICBcbiAgICAgIHZpYm9zYy50cmlnZ2VyUmVsZWFzZShub3cpICAgIFxuICAgIH1cbiAgICBkb3duW2Uua2V5XSA9IDA7XG4gICAgZGVsZXRlIHZvaWNlc1trZXlNYXBbZS5rZXldXSBcbiAgICBvc2MudHJpZ2dlclJlbGVhc2Uoa2V5TWFwW2Uua2V5XSwgbm93KVxuICAgIGlmICghT2JqZWN0LmtleXModm9pY2VzKS5pbmNsdWRlcyhiZW5kLnN0YXJ0KSkge1xuICAgICAgYmVuZG9zYy50cmlnZ2VyUmVsZWFzZShub3cpXG4gICAgICBiZW5kLnN0YXJ0ID0gbnVsbDtcbiAgICAgIGJlbmQuZW5kID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdW5wcmVzc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShga2V5LSR7ZS5rZXl9YClbMF1cbiAgICBpZiAodW5wcmVzc2VkKSB1bnByZXNzZWQuY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpXG4gICAgfSwgZmFsc2UpXG5cblxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==