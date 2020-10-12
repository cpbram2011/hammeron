import "./styles/index.scss";
import "./styles/dropdown.scss";
const osc = new Tone.PolySynth().toDestination()
const now = Tone.now();

let down = {};
let voices = {};
const pitches = ['E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
'C5','Db5','D5','Eb5','E5','F5','Gb5']

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
)

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    
    if ( down[e.key] === 0) {
      down[e.key] = 1;
      voices[keyMap[e.key]] = 1;
      console.log(voices)
      // if (e.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT){
        
      //   const bend = pitches.reverse().find(p => voices[p] === 1)
      //   const osc = new Tone.Oscillator().toDestination();
      //   osc.frequency.value = bend;
      //   const bendEnd = pitches[pitches.indexOf(bend) - 0.3]
      //   osc.frequency.rampTo(bendEnd, 1);
      //   osc.start();
      //   console.log(bend)
      //   console.log(bendEnd)
      // }
      osc.triggerAttack(keyMap[e.key], now);
      const pressed = document.getElementsByClassName(`key-${e.key}`)[0]
      pressed.classList.add('pressed')
    }
  });
  
  
  
  
  document.addEventListener("keyup", (e) => {
    down[e.key] = 0;
    delete voices[keyMap[e.key]] 
    osc.triggerRelease(keyMap[e.key], now)
    const unpressed = document.getElementsByClassName(`key-${e.key}`)[0]
    
    unpressed.classList.remove('pressed')



    }, false)



});