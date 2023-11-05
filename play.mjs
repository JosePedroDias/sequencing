import { parseAsciiPattern } from './ascii-pattern-parser.mjs';
import { button, textEditor, integerRange } from './ui-elements.mjs';
import {
    getAudioContext,
    bpmToSecs,
    loadPatternSamples,
    schedulePatternPlayback,
} from './sequencer.mjs';

const uiText = textEditor(`4/4 60
hh|o   o   o   o   o   o   o   o   |
bd|o o   o       o o   o     o   o |
sn|        o         o     o       |
`);

const uiNumRepeats = integerRange('repeats:' , () => {}, 1, 4, 1);

button('play', async () => {
    const patternString = uiText.getValue();
    const audioCtx = getAudioContext();
    const pattern = parseAsciiPattern(patternString);
    const samples = await loadPatternSamples(pattern, audioCtx);

    const numRepeats = uiNumRepeats.getValue();

    const dt = bpmToSecs(pattern.bpm, 2, 4); // TODO REVIEW THIS PART
    schedulePatternPlayback(pattern, audioCtx, samples, dt, numRepeats);
});
