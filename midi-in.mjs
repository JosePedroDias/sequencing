import { button } from './ui-elements.mjs';
import { printAscii } from './utils.mjs';
import { getAudioContext, loadPatternSamples, playSample } from './sequencer.mjs';
import { getMidi, getMidiInputs, parseMidiMessage, COMMAND_START, DRUMS_NOTE_MAPPING, JWC } from './midi.mjs';

export const SAMPLE_TPL = `./audio_samples/jam_with_chrome/{N}.ogg`;

/* import { WebMidi } from 'https://cdn.jsdelivr.net/npm/webmidi@3.1.6/+esm';

await WebMidi.enable();

if (WebMidi.inputs.length < 1) {
    printAscii('No MIDI device detected');
} else {
    WebMidi.inputs.forEach((device, index) => {
        printAscii(`${index}: ${device.name}`);
    });

    const input = WebMidi.inputs[0];
    // const input = WebMidi.getInputByName("TYPE NAME HERE!")

    input.channels[1].addListener("noteon", (ev) => {
        console.log(ev);
    });
} */

const midi = await getMidi();

printAscii('MIDI OK!');

const inputs = getMidiInputs(midi);

window.notes = new Set();

const recording = [];
window.recording = recording;

if (inputs?.[0]) {
    printAscii('subscribing to inputs');

    const input = inputs[0];
    input.addEventListener('midimessage', (ev) => {
        const { timeStamp, data } = ev;

        const { command, channel, note, velocity } = parseMidiMessage(data);

        if (command === COMMAND_START && channel === 9) {
            const note2 = DRUMS_NOTE_MAPPING[note] || `?${note}?`;
            window.notes.add(note2);

            const t = (timeStamp / 1000);
            //printAscii(`${note2}  ${(velocity * 100).toFixed(2)}%`);
            printAscii(`${t.toFixed(2)}  ${note2}  ${(velocity * 100).toFixed(2)}%`);

            recording.push([timeStamp/1000, note2, velocity]);
        }
        //printAscii(`command: ${command}, channel: ${channel}, note: ${note}, velocity: ${velocity}`);
    });
} else {
    printAscii('no input sources!');
}

button('play', async () => {
    const audioCtx = getAudioContext();

    const startT = 0.2;

    const lilyNames = Array.from( new Set( recording.map(([t, note, vel]) => note) ) );
    // console.log('lilyNames', lilyNames);

    const pattern = {
        tracks:
            lilyNames.map((ly) => ({
                name: ly,
                url: SAMPLE_TPL.replace('{N}', JWC[ly])
            })),
    };
    // console.log('pattern', pattern);

    const samples = await loadPatternSamples(pattern, audioCtx);
    console.log('samples', samples);

    let firstT;
    for (const [t, note, vel] of recording) {
        if (!firstT) firstT = t;
        const t2 = t - firstT + startT;
        console.log(note, t2);
        playSample(audioCtx, samples[note], t2);
    }
});
