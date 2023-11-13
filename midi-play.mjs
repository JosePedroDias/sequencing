import { button } from './ui-elements.mjs';
import { printAscii, fetchJson } from './utils.mjs';
import { getAudioContext, loadPatternSamples, playSample } from './sequencer.mjs';
import { DRUMS_NOTE_MAPPING, JWC } from './midi.mjs';

export const SAMPLE_TPL = `./audio_samples/jam_with_chrome/{N}.ogg`;

const recording0 = await fetchJson('./midis/rhcp-californication.json');
let recording = recording0.map(([t0, note, vel]) => {
    const note2 = DRUMS_NOTE_MAPPING[note];
    if (note2) {
        // console.log(`OK  ${note2}`);
    }
    else {
        console.log(`ERR ${note} NOT MAPPED!`);
    }
    return note2 ? [t0, note2, vel] : undefined;
}).filter((arr) => Boolean(arr));
window.recording0 = recording0;
window.recording = recording;

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
    //console.log('samples', samples);

    let firstT;
    for (const [t, note, vel] of recording) {
        if (!firstT) firstT = t;
        const t2 = t - firstT + startT;
        //console.log(note, t2);
        playSample(audioCtx, samples[note], t2, vel);
    }
});
