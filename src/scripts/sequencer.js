const { Tone } = require("tone/build/esm/core/Tone");


const synths = [
    new Tone.Synth().toDestination,
    new Tone.Synth().toDestination,
    new Tone.Synth().toDestination
];


const rows = document.getElementsByClassName('seq')

module.exports = 