!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1),n(2);var r=(new Tone.Filter).toDestination();r.set({frequency:1200,type:"highpass",rolloff:-24});var a=(new Tone.PolySynth).toDestination(),o=(new Tone.Synth).toDestination(),s=new Tone.Vibrato(5,.1).toDestination(),i=(new Tone.Synth).toDestination();i.connect(s),a.connect(r);var l=Tone.now(),c={},u={},d=["E3","F3","Gb3","G3","Ab3","A3","Bb3","B3","C4","Db4","D4","Eb4","E4","F4","Gb4","G4","Ab4","A4","Bb4","B4","C5","Db5","D5","Eb5","E5","F5","Gb5","G5","Ab5"],f=d.map((function(e,t){return d[d.length-t-1]})),y="zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split(""),g="ZXCVBNM,./ASDFGHJKL;'QWERTYUIOP[]1234567890-=".split("");y.forEach((function(e){c[e]=0})),g.forEach((function(e){c[e]=0}));var p={};y.forEach((function(e,t){p[e]=t<10?d[t]:t<21?d[t-5]:t<33?d[t-11]:d[t-18]}));var m={start:null,end:null},v=document.getElementById("freq"),b=document.getElementById("res"),E=document.getElementById("filter"),k=document.getElementById("filter-name");v.addEventListener("input",(function(e){r.set({frequency:Math.pow(e.target.value,2)/5}),console.log(Math.pow(e.target.value,2)/5)})),b.addEventListener("input",(function(e){a.set({detune:e.target.value}),i.set({detune:e.target.value}),o.set({detune:e.target.value})})),E.addEventListener("input",(function(e){"1"===e.target.value?(r.set({type:"lowpass"}),k.innerHTML="LPF"):"2"===e.target.value?(r.set({type:"highpass"}),k.innerHTML="HPF"):"3"===e.target.value?(r.set({type:"bandpass"}),k.innerHTML="BPF"):(r.set({type:"allpass"}),k.innerHTML="APF")})),document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("keydown",(function(e){if(32===e.keyCode&&e.preventDefault(),0===c[e.key]){if(c[e.key]=1,u[p[e.key]]=1,32===e.keyCode&&(m.start=f.find((function(e){return 1===u[e]})),m.start&&(m.end=d[d.indexOf(m.start)+2]),console.log(m),a.triggerRelease(m.start,l),o.triggerAttack(m.start,l),o.frequency.rampTo(m.end,.2)),"Enter"===e.key){console.log("neat");var t=f.find((function(e){return 1===u[e]}));a.triggerRelease(t,l),i.triggerAttack(t,l)}a.triggerAttack(p[e.key],l);var n=document.getElementsByClassName("key-".concat(e.key))[0];n&&n.classList.add("pressed")}})),document.addEventListener("keyup",(function(e){32===e.keyCode&&o.frequency.rampTo(m.start,.2),"Enter"===e.key&&i.triggerRelease(l),c[e.key]=0,delete u[p[e.key]],a.triggerRelease(p[e.key],l),Object.keys(u).includes(m.start)||(o.triggerRelease(l),m.start=null,m.end=null);var t=document.getElementsByClassName("key-".concat(e.key))[0];t&&t.classList.remove("pressed")}),!1),document.addEventListener("click",(function(e){if(["sine","triangle","square","sawtooth"].includes(e.target.classList[0])){var t=document.getElementsByClassName("selected")[0];t&&t.classList.remove("selected"),e.target.classList.add("selected"),a.set({oscillator:{type:e.target.classList[0]}}),o.set({oscillator:{type:e.target.classList[0]}}),i.set({oscillator:{type:e.target.classList[0]}})}}));var e=document.getElementById("modal-container");document.getElementById("help").addEventListener("click",(function(){e.classList.remove("hidden")})),e.addEventListener("click",(function(){e.classList.add("hidden")}))}))},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.js.map