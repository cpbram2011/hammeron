import "./styles/index.scss";


window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loading").classList.add('done');
    
  }, 500)
})



const filter = new Tone.Filter().toDestination()
filter.set({
  frequency : 1200 ,
  type: 'highpass',
  rolloff : -24
});

const osc = new Tone.PolySynth().toDestination()

osc.connect(filter);

const now = Tone.now();

let down = {};
let voices = {};

// const pitches = ['E2','F2','Gb2','G2','Ab2','A2','Bb2','B2','C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','C4','Db4','D4','Eb4','E4','F4','Gb4'] //octave down
// const pitches = ['C3','D3','E3','F3','G3','Ab3','A3','B3','C4','D4','E4','F4','G4','Ab4','A4','B4','C5','D5','E5','F5','Gb5','G5','Ab5','A5','B5',] //barry haris
// const pitches = ['C2','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5'] // pentatonic

const pitches = ['E3','F3','Gb3','G3','Ab3','A3','Bb3','B3',
'C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4',
'C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5']

const revPitches = pitches.map((x,i) => pitches[pitches.length - i - 1])

const keys = "zxcvbnm,./asdfghjkl;'qwertyuiop[]1234567890-=".split('')
const upperKeys = "ZXCVBNM,./ASDFGHJKL;'QWERTYUIOP[]1234567890-=".split('')
  keys.forEach(p => {
    down[p] = 0;
  });
  upperKeys.forEach(p => {
    down[p] = 0;
  });

const keyMap = {};

keys.forEach((key, i) =>{
  if (i < 10) {
    keyMap[key] = pitches[i];
    // keyMap[upperKeys[i]] = pitches[i];
  } else if (i < 21 ) {
    keyMap[key] = pitches[i - 5];
    // keyMap[upperKeys[i]] = pitches[i - 5];
  } else if (i < 33 ) {
    keyMap[key] = pitches[i - 11];
    // keyMap[upperKeys[i]] = pitches[i - 11];
  } else {
    keyMap[key] = pitches[i - 18]
    // keyMap[upperKeys[i]] = pitches[i - 18];
  }
}
);


document.addEventListener("DOMContentLoaded", () => {

  let freq = document.getElementById('freq');
  let res = document.getElementById('res');
  let filtype = document.getElementById('filter');
  let filtername = document.getElementById('filter-name');

  freq.addEventListener('input', e => {
    filter.set({ frequency: e.target.value ** 2 / 5 })
  })

  res.addEventListener('input', e => {
    osc.set({ detune: e.target.value })
  })

  filtype.addEventListener('input', (e) => {
      if (e.target.value === '1') {
      filter.set({ type: 'lowpass' });
      filtername.innerHTML = 'LPF'
    } else if (e.target.value === '2') {
      filter.set({ type: 'highpass' }) ;
      filtername.innerHTML = 'HPF'
    } else if (e.target.value === '3') { 
      filter.set({ type: 'bandpass' });
      filtername.innerHTML = 'BPF'
    } else {
      filter.set({ type: 'allpass' });
      filtername.innerHTML = 'APF'

    }
  })

  document.addEventListener("keydown", e => {

    if ( down[e.key] === 0) {
      down[e.key] = 1;
      voices[keyMap[e.key]] = 1;
      
      osc.triggerAttack(keyMap[e.key], now);
      const pressed = document.getElementsByClassName(`key-${e.key}`)[0]
      if (pressed) pressed.classList.add('pressed')
    } 
  });

  
  document.addEventListener("keyup", (e) => {
    down[e.key] = 0;
    delete voices[keyMap[e.key]]

    osc.triggerRelease(keyMap[e.key], now)

    const unpressed = document.getElementsByClassName(`key-${e.key}`)[0]
    if (unpressed) unpressed.classList.remove('pressed')
    }, false)

    document.addEventListener("click", e => {
      if (['sine','triangle','square','sawtooth'].includes(e.target.classList[0])){
      const old = document.getElementsByClassName('selected')[0]
      if (old) old.classList.remove('selected')
        
    
      e.target.classList.add('selected')
      // synthParams.type = e.target.classList[0]
      
      osc.set({
        'oscillator': {
          'type': e.target.classList[0]
        }
      });
    }
  });

  const modalcontainer = document.getElementById('modal-container')
  const help = document.getElementById('help')
  help.addEventListener('click', () => {
    modalcontainer.classList.remove('hidden')
  })
  modalcontainer.addEventListener('click', () => {
    modalcontainer.classList.add('hidden')
  })


});