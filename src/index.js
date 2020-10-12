import "./styles/index.scss";
const osc = new Tone.PolySynth().toDestination()
const now = Tone.now();
document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", e => {
    switch (e.keyCode) {
      case 81:
       
        osc.triggerAttack('C4, now')
        console.log('noice')
        break;
    
      default:
        console.log('nope')
        break;
    }
  }, {once: true});
  document.addEventListener("keyup", (e) => {
    osc.triggerRelease('C4', now + 0.5)
    console.log(e)
  })




});