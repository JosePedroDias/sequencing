import {
    waitForClick,
    getAudioContext,
    bpmToSecs,
    parseAsciiPattern,
    loadPatternSamples,
    printAscii,
    schedulePatternPlayback,
    //playNoise,
    //playPulse,
    //playSweep,
    fetchText
} from './sequencer.mjs';

printAscii('click to start\n');

const patternString = await fetchText('./patterns/p04-pat01.txt');

await waitForClick();
const audioCtx = getAudioContext();
const pattern = parseAsciiPattern(patternString);
printAscii(patternString);
const samples = await loadPatternSamples(pattern, audioCtx);
//playSample(audioCtx, samples.open_hh);
//playSample(audioCtx, samples.kick);
//playSample(audioCtx, samples.snare);

const dt = bpmToSecs(60, 2, 4);
schedulePatternPlayback(pattern, audioCtx, samples, dt, 3);

//playNoise(audioCtx);
//playPulse(audioCtx);
//playSweep(audioCtx);
