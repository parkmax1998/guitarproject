`use strict`

// Establish gtrString to read guitar string names
const gtrString = [`lowStringE`, `stringA`, `stringD`, `stringG`, `stringB`, `highStringE`];
var fretName = ``;
const waveType = `sawtooth`; // Determine type of wave used for the oscillators

const C = [`disabled`, `#stringAFret2`, `#stringDFret1`, `open`, `#stringBFret0`, `open`];
const D = [`disabled`, `disabled`, `open`, `#stringGFret1`, `#stringBFret2`, `#highStringEFret1`];
const DMinor = [`disabled`, `disabled`, `open`, `#stringGFret1`, `#stringBFret2`, `#highStringEFret0`];
const E = [`open`, `#stringAFret1`, `#stringDFret1`, `#stringGFret0`, `open`, `open`];
const G = [`#lowStringEFret2`, `#stringAFret1`, `open`, `open`, `#stringBFret2`, `#highStringEFret2`];

// Create Web Audio API context
const audioContext = new AudioContext();

function $(selector){
    return document.querySelector(selector);
}

function dnuGtrString(){
    for(let x = 0; x < 6; x++){
        if ($(`#${gtrString[x]}`).disabled == false){
            this.disabled = true;
            $(`#${gtrString[x]}Enable`).disabled = false;
            $(`#${gtrString[x]}`).disabled = true;
        }
    }
}

function enableString() {
    for(let x = 0; x < 6; x++){
        if ($(`#${gtrString[x]}`).disabled == true) {
            $(`#${gtrString[x]}`).disabled = false;
            $(`#${gtrString[x]}Disable`).disabled = false;
            console.log(`String ${gtrString[x]} has been enabled`);
        }
    }
}

function strumGuitar(){

    // Establish half-steps from E2 for fn = 82.41 Hz * (a ** n))
    var hsFromE2 = [0, 5, 10, 15, 19, 24];

    // Go through the loop to play the note for each string
    for(let fN=0; fN<21; fN++){

        for(let x = 0; x<6; x++){
        
            if ($(`#${gtrString[x]}Fret${fN}`).checked && this.id == gtrString[x]){
                if (this.id == `lowStringE`){

                    // Create the Oscillator node to play the note
                    let lowStringEOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: (82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))),
                    });

                    // Create the Gain node (determines volume)
                    lowStringEGain = new GainNode(audioContext, {
                        gain: 1,
                    });

                    // Connect the Oscillator node to the corresponding Gain node
                    lowStringEOsc.connect(lowStringEGain);

                    // Set the frequency for the Oscillator node
                    // lowStringEOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);

                    // Connect to the speaker
                    lowStringEOsc.connect(audioContext.destination);

                    lowStringEOsc.start(); // Start the Oscillator

                    setTimeout(() => {
                        lowStringEOsc.stop(); // Stop after a second
                    }, 1000);

                    return;

                } else if (this.id == `stringA`){
                    let stringAOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringAGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringAOsc.connect(stringAGain);
                    stringAOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);
                    stringAOsc.connect(audioContext.destination);
                    stringAOsc.start();
                    setTimeout(() => {
                        stringAOsc.stop();
                    }, 1000);
                    return;
                } else if (this.id == `stringD`){
                    let stringDOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringDGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringDOsc.connect(stringDGain);
                    stringDOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);
                    stringDOsc.connect(audioContext.destination);
                    stringDOsc.start();
                    setTimeout(() => {
                        stringDOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringG`){
                    let stringGOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringGGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringGOsc.connect(stringGGain);
                    stringGOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);
                    stringGOsc.connect(audioContext.destination);
                    stringGOsc.start();
                    setTimeout(() => {
                        stringGOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringB`){
                    let stringBOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringBGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringBOsc.connect(stringBGain);
                    stringBOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);
                    stringBOsc.connect(audioContext.destination);
                    stringBOsc.start();
                    setTimeout(() => {
                        stringBOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `highStringE`){
                    let highStringEOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let highStringEGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    highStringEOsc.connect(highStringEGain);
                    highStringEOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]+fN+1))/12))), `${audioContext.currentTime}`);
                    highStringEOsc.connect(audioContext.destination);
                    highStringEOsc.start();
                    setTimeout(() => {
                        highStringEOsc.stop();
                    }, 1000);
                    return;
                }
            } else if ($(`#openFret${gtrString[x]}`).checked && this.id == gtrString[x]) {
                if (this.id == `lowStringE`){
                    let lowStringEOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let lowStringEGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    lowStringEOsc.connect(lowStringEGain);
                    lowStringEOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    lowStringEOsc.connect(audioContext.destination);
                    lowStringEOsc.start();
                    setTimeout(() => {
                        lowStringEOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringA`){
                    let stringAOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringAGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringAOsc.connect(stringAGain);
                    stringAOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    stringAOsc.connect(audioContext.destination);
                    stringAOsc.start();
                    setTimeout(() => {
                        stringAOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringD`){
                    let stringDOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringDGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringDOsc.connect(stringDGain);
                    stringDOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    stringDOsc.connect(audioContext.destination);
                    stringDOsc.start();
                    setTimeout(() => {
                        stringDOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringG`){
                    let stringGOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringGGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringGOsc.connect(stringGGain);
                    stringGOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    stringGOsc.connect(audioContext.destination);
                    stringGOsc.start();
                    setTimeout(() => {
                        stringGOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `stringB`){
                    let stringBOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let stringBGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    stringBOsc.connect(stringBGain);
                    stringBOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    stringBOsc.connect(audioContext.destination);
                    stringBOsc.start();
                    setTimeout(() => {
                        stringBOsc.stop();
                    }, 1000);
                    return;

                } else if (this.id == `highStringE`){
                    let highStringEOsc = new OscillatorNode(audioContext, {
                        type: waveType,
                        frequency: null,
                    });
                    let highStringEGain = new GainNode(audioContext, {
                        gain: 1,
                    });
                    highStringEOsc.connect(highStringEGain);
                    highStringEOsc.frequency.setValueAtTime((82.41 * (2 ** (((hsFromE2[x]))/12))), `${audioContext.currentTime}`);
                    highStringEOsc.connect(audioContext.destination);
                    highStringEOsc.start();
                    setTimeout(() => {
                        highStringEOsc.stop();
                    }, 1000);
                    return;
                }
            }
    
        }
    
    }
}

function setChord(){
    const selectChord = $(`#chordSelect`).value;
    var chord = null;
    console.log(selectChord);
    console.log(typeof(selectChord));
    
    if (selectChord == `C`){
        chord = C;
    } else if (selectChord == `D`){
        chord = D;
    } else if (selectChord == `DMinor`){
        chord = DMinor;
    } else if (selectChord == `E`){
        chord = E;
    } else if (selectChord == `G`){
        chord = G;
    } else {
        return;
    }
    for(let x = 0; x < 6; x++){
        if (chord[x] == `open`){
            $(`#openFret${gtrString[x]}`).checked = true;
            if ($(`#${gtrString[x]}`).disabled == true) {
                $(`#${gtrString[x]}`).disabled = false;
                $(`#${gtrString[x]}Disable`).disabled = false;
                console.log(`String ${gtrString[x]} has been enabled`);
                $(`#openFret${gtrString[x]}`).checked = true;
            }
        } else if (chord[x] == `disabled`){
            $(`#${gtrString[x]}`).disabled = true;
        } else {
            $(`${chord[x]}`).checked = true;
            if ($(`#${gtrString[x]}`).disabled == true) {
                $(`#${gtrString[x]}`).disabled = false;
                $(`#${gtrString[x]}Disable`).disabled = false;
                console.log(`String ${gtrString[x]} has been enabled`);
                $(`${chord[x]}`).checked = true;
            }
        }
    }
}

function initialize(){

    for(let fretNum=0; fretNum<21; fretNum++){

        for(let x = 0; x<6; x++){
        
            fretName = `${gtrString[x]}Fret${fretNum}`;

            // String + Fret + Number
        
            fretBoard.innerHTML +=  `<div class="fret"><input type="radio" id="${fretName}" name="${gtrString[x]}" value="${fretName}"></div>`;
    
        }
    }

    for(let x = 0; x<6; x++){

        openFret.innerHTML += `<input type="radio" frets" id="openFret${gtrString[x]}" name="${gtrString[x]}" checked>`;

        $(`#${gtrString[x]}`).addEventListener(`mouseover`, strumGuitar);

    }

    $(`#chordSubmit`).addEventListener(`click`, setChord);

}

document.addEventListener(`DOMContentLoaded`, initialize);