Live Link:
https://cpbram2011.github.io/hammeron/




# MVP / Funtionality 
Hammeron is a digital polyphonic synthesizer app. Users can play chords & melodies using a standard QWERTY keyboard. On screen menus allow users to modify the timbre of the synth, trigger modulation instances, and control a small drum sequencer.
 * Connect keyboard events to Tone start/stop 
 * Create controls that alter timbre 
 * Right shift grabs soprano voice and bends up 1 whole step 
 * Allow scale customization that remaps keys to desired pitch sets (ie: chromatic, ionian, pentatonic, bebop)
 * Drum Sequencer 
    * create 5 by 16 grid 
    * connect audio play to each box (ie: 5th tone on beat 16, 2nd tone on beat 8)
    * Start/Stop button controls loop playback
  * BONUS enter grabs soprano voice and adds vibrato
    
 
 In addition, this projecct will include,
 * Links to github and linkedin
 * a production README


# Technologies, Libraries, APIs
* Vanilla Javascript
* SCSS
* HTML
* Tone.js

# Wireframes
This app will consist of a single screen, displaying a virtual copy of a standard keyboard, menus for adjusting tone, and linkes to github and linkedin. Timbre controls sit above the keboard, and allow the user to adjust various settings (ie: waveform, filter type, frequency and resonance, gain, etc). As a bonus, users can press play/pause on the drum sequencer, as well as an edit button that will show the drum grid in a modal.


![](https://contrafact-seeds.s3.us-east-2.amazonaws.com/wireframe.PNG)



# Implementation Timeline
### Day 1
Setup app skeleton, including node modules, webpack, and basic entry file. Spend time researching Tone.js docs. Start building placeholders for functional elements on main page. Start writing keyboard events that trigger synth attack/release. Investigate feasibility of looping drum sequencer.

### Day 2
Create menu that contains synth timbre controls. Build out pitch bend and pitch vibrato events.

### Day 3
Finish adding timbre controlsAdd dynamic styling to onscreen keyboard (background colors of accidentals, pressed keys, pitch class of pressed keys). 

### Day 4
Finish any incomplete tasks from previous days. Link to Github and Linked In. Complete Styling. 
