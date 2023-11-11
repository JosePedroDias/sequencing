import { getMidi, getMidiInputs, parseMidiMessage, COMMAND_START, DRUMS_NOTE_MAPPING } from './midi.mjs';
import { printAscii } from './utils.mjs';

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
        }
        //printAscii(`command: ${command}, channel: ${channel}, note: ${note}, velocity: ${velocity}`);
    });
} else {
    printAscii('no input sources!');
}
