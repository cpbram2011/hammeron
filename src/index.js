import "./styles/index.scss";
import "./styles/dropdown.scss";

const osc = new Tone.PolySynth().toDestination()
const bendosc = new Tone.Synth().toDestination()
const vib = new Tone.Vibrato(5, 0.1).toDestination()
const vibosc = new Tone.Synth().toDestination()
vibosc.connect(vib);
const now = Tone.now();

let down = {};
let voices = {};
window.voices = voices;
// const pitches = ['E2','F2','Gb2','G2','Ab2','A2','Bb2','B2',   //octave down
// 'C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
// 'C4','Db4','D4','Eb4','E4','F4','Gb4']

const pitches = ['E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5']

const revPitches = pitches.map((x,i) => pitches[pitches.length - i - 1])
// const pitches = ['C3','D3','E3','F3','G3','Ab3','A3','B3',     //barry harris
// 'C4','D4','E4','F4','G4','Ab4','A4','B4',
// 'C5','D5','E5','F5','Gb5','G5','Ab5','A5','B5',]

// const pitches = ['C2','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5'] // pentatonic
console.log(pitches)
console.log(revPitches)
const keys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split('')

keys.forEach(p => {
  down[p] = 0;
});

pitches.forEach(p => {
  down[p] = 0;
});


const keyMap = {};

keys.forEach((key, i) =>{
  if (i < 10) {
    keyMap[key] = pitches[i]
  } else if (i < 21 ) {
    keyMap[key] = pitches[i - 5]
  } else if (i < 33 ) {
    keyMap[key] = pitches[i - 11]
  } else {
    keyMap[key] = pitches[i - 18]
  }
}
);

let bend = {
  start: null,
  end: null
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    
    if ( down[e.key] === 0) {
      down[e.key] = 1;
      voices[keyMap[e.key]] = 1;
      
      // let voiceArr = Object.keys(voices)
      // bend.start = voiceArr[voiceArr.length - 1]//revPitches.find(p => voices[p] === 1)
      // bend.start ? (bend.end = pitches[pitches.indexOf(bend.start) + 2]) : null;
      // console.log(bend)

  
      if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        if (e.key === 'Shift'){
          bend.start = revPitches.find(p => voices[p] === 1)
          bend.start ? (bend.end = pitches[pitches.indexOf(bend.start) + 2]) : null;
          console.log(bend)
          osc.triggerRelease(bend.start, now)        
          bendosc.triggerAttack(bend.start, now)
          bendosc.frequency.rampTo(bend.end, 0.2 )
        } 
      }
      if (e.key === 'Enter') {
        console.log('neat')
        const soprano = revPitches.find(p => voices[p] === 1); 
        
        osc.triggerRelease(soprano, now)                
        vibosc.triggerAttack(soprano, now)
      }
        
      osc.triggerAttack(keyMap[e.key], now);
      const pressed = document.getElementsByClassName(`key-${e.key}`)[0]
      if (pressed) pressed.classList.add('pressed')
    }
  });
  
  
  
  
  document.addEventListener("keyup", (e) => {
    if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
      bendosc.frequency.rampTo(bend.start, 0.2);
    }
    if (e.key === 'Enter') {
      console.log('neat')
      
      vibosc.triggerRelease(now)    
    }
    down[e.key] = 0;
    delete voices[keyMap[e.key]] 
    osc.triggerRelease(keyMap[e.key], now)
    if (!Object.keys(voices).includes(bend.start)) {
      bendosc.triggerRelease(now)
      bend.start = null;
      bend.end = null;
    }
    const unpressed = document.getElementsByClassName(`key-${e.key}`)[0]
    if (unpressed) unpressed.classList.remove('pressed')
    }, false)


});