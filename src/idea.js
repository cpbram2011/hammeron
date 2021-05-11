import "./styles/index.scss";
import "./styles/dropdown.scss";
import { Tone } from "tone/build/esm/core/Tone";


const chord = new Tone.PolySynth().toDestination();
const melody = new Tone.Synth().toDestination();

const vibrato = new Tone.Vibrato(5, 0.1).toDestination();

const now = Tone.now();

const keys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split('')

const pitches = ['E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5']

const revPitches = pitches.map((x,i) => pitches[pitches.length - i - 1])


let down = {};
let voices = {};
let soprano = null;


keys.forEach(p => {
    down[p] = 0;
  });

  
// pitches.forEach(p => {
//     down[p] = 0;
//   });
  
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



document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("keydown", e => {
      



    });
});
        