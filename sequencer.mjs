import { sampleNameToUrl } from './sample-mapping.mjs';
import { waveTable } from './wave-table.mjs';

export function waitForClick() {
    return new Promise((resolve) => {
        document.addEventListener('click', resolve, { once: true });
    });
}

export function sleepSecs(dt) {
    return new Promise((resolve) => {
        setTimeout(resolve, dt * 1000);
    });
}

export function getAudioContext() {
    return new AudioContext();
}

export function getWave(audioCtx) {
    return new PeriodicWave(audioCtx, {
        real: waveTable.real,
        imag: waveTable.imag,
    });
}

/*
https://muted.io/note-frequencies/
https://www.youtube.com/watch?v=XCVY8eVwfvI

fn = f0 * Math.pow(a, n);
    f0 = 440 Hz (A4)
    a = Math.pow(2, 1/12)
    between a note and the same note in the following octave, frequency duplicates
    12 half notes in the span of an octave
*/
const F0 = 440; // (A4)
const A = Math.pow(2, 1/12);
const noteNames = [
    ['C'],
    ['C#', 'Db'],
    ['D'],
    ['D#', 'Eb'],
    ['E'],
    ['F'],
    ['F#', 'Gb'],
    ['G'],
    ['G#', 'Ab'],
    ['A'], // A is the 10th (#9)
    ['A#', 'Bb'],
    ['B'],
];
// C3, D#4, Eb5 => hz
const frequenciesCache = new Map();
export function noteToFrequency(fullNoteName) {
    if (frequenciesCache.has(fullNoteName)) return frequenciesCache.get(fullNoteName);
    const l = fullNoteName.length;
    const octaveNumber = parseInt(fullNoteName.substring(l-1), 10) - 4;
    const noteName = fullNoteName.substring(0, l - 1);
    const j = noteNames.findIndex((v) => v.includes(noteName));
    if (j === -1) throw new Error(`Note not found: "${noteName}"!`);
    const i = j - 9 + octaveNumber * 12;
    const f = F0 * Math.pow(A, i);
    //console.log({ fullNoteName, noteName, octaveNumber, j, i, f });
    //console.log(fullNoteName, f.toFixed(2));
    frequenciesCache.set(fullNoteName, f);
    return f;
}

// https://muted.io/bpm-to-ms/
// 4 / 4
export function bpmToSecs(bpm, nthNote = 1, numeral = 4) {
    return 60 / 60 / bpm * nthNote * numeral;
}

export function playSample(audioContext, audioBuffer, time = 0) {
    const sampleSource = new AudioBufferSourceNode(audioContext, {
        buffer: audioBuffer,
        playbackRate: 1,
    });
    sampleSource.connect(audioContext.destination);
    sampleSource.start(time);
    return sampleSource;
}

export async function fetchSample(audioContext, filepath) {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}

export async function fetchText(url) {
    const res = await fetch(url);
    const content = await res.text();
    return content;
}

export function parseAsciiPattern(patternString) {
    const lines = patternString.split('\n');
    if (lines[lines.length-1].trim() === '') lines.pop();
    const [a, b] = lines.shift().split(' ');
    return {
        header: {
            a, b
        },
        tracks: lines.map((line) => {
            let pipeIdx = line.indexOf('|');
            let pipeIdx2 = line.indexOf('|', pipeIdx + 1);
            const name = line.substring(0, pipeIdx).trim();
            const url = sampleNameToUrl(name);
            const times = line.substring(pipeIdx + 1, pipeIdx2).split('').map((ch) => ch !== ' ');
            return { name, url, times };
        })
    };
}

export function printAscii(data) {
    const el = document.createElement('code');
    el.className = 'ascii';
    el.appendChild(document.createTextNode(data));
    document.body.appendChild(el);
}

export async function loadPatternSamples(pattern, audioCtx, samples = {}) {
    for (const { url, name } of pattern.tracks) {
        if (samples[name]) continue;
        const sample = await fetchSample(audioCtx, url);
        // console.log(`loaded ${ins.name} with ${url}`);
        samples[name] = sample;
    }
    return samples;
}

export function schedulePatternPlayback(pattern, audioCtx, samples, tickStepInSecs, numRepeats = 1, startSecs = 0.2) {
    const numTicks = pattern.tracks[0].times.length;
    const patternInSecs = numTicks * tickStepInSecs;
    // console.log(`numTicks: ${numTicks}, tick length: ${tickStepInSecs.toFixed(2)}, patternDuration: ${patternInSecs.toFixed(1)}s`);
    for (const { name, times } of pattern.tracks) {
        const sample = samples[name];
        times.forEach((isOn, i) => {
            if (isOn) {
                //playSample(audioCtx, sample, i * tickStepInSecs);
                for (let j = 0; j < numRepeats; ++j) {
                    playSample(audioCtx, sample, i * tickStepInSecs + patternInSecs * j + startSecs);
                }
            }
        });
    }
}

export function scheduleMetronome(audioContext, tickStepInSecs) {
    // TODO
}

// TODO MAY NOT USE, DUNNO

export function playSweep(audioCtx, attackTime = 0.2, releaseTime = 0.5, sweepLength = 2, time = 0) {
    const wave = getWave(audioCtx);

    const osc = new OscillatorNode(audioCtx, {
        //frequency: noteToFrequency('C0'),
        //frequency: noteToFrequency('A0'),

        //frequency: noteToFrequency('C1'),
        //frequency: noteToFrequency('A1'),

        //frequency: noteToFrequency('C2'),
        //frequency: noteToFrequency('A2'),

        //frequency: noteToFrequency('C3'),
        //frequency: noteToFrequency('A3'),

        //frequency: noteToFrequency('B3'),
        //frequency: noteToFrequency('C4'),
        //frequency: noteToFrequency('C#4'),
        //frequency: noteToFrequency('D4'),
        //frequency: noteToFrequency('D#4'),
        //frequency: noteToFrequency('E4'),
        //frequency: noteToFrequency('F4'),
        //frequency: noteToFrequency('F#4'),
        //frequency: noteToFrequency('G4'),
        //frequency: noteToFrequency('G#4'),
        //frequency: noteToFrequency('A4'), //
        //frequency: noteToFrequency('A#4'),
        //frequency: noteToFrequency('B4'),
        //frequency: noteToFrequency('C5'),

        //frequency: noteToFrequency('A5'),

        frequency: noteToFrequency('C6'),
        //frequency: noteToFrequency('A6'),

        //frequency: noteToFrequency('C6'),
        //frequency: noteToFrequency('A7'),
        //frequency: 680,
        //frequency: 380,
        //frequency: 180,
        type: "custom",
        periodicWave: wave,
    });

    const sweepEnv = new GainNode(audioCtx);
    sweepEnv.gain.cancelScheduledValues(time);
    sweepEnv.gain.setValueAtTime(0, time);
    sweepEnv.gain.linearRampToValueAtTime(1, time + attackTime);
    sweepEnv.gain.linearRampToValueAtTime(
        0,
        time + sweepLength - releaseTime
    );

    osc.connect(sweepEnv).connect(audioCtx.destination);
    osc.start(time);
    osc.stop(time + sweepLength);
}

export function playNoise(audioCtx, bandHz = 1000, noiseDuration = 0.1, time = 0) {
    const bufferSize = audioCtx.sampleRate * noiseDuration; // set the time of the note

    // Create an empty buffer
    const noiseBuffer = new AudioBuffer({
        length: bufferSize,
        sampleRate: audioCtx.sampleRate,
    });

    // Fill the buffer with noise
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
    }

    // Create a buffer source for our created data
    const noise = new AudioBufferSourceNode(audioCtx, {
        buffer: noiseBuffer,
    });

    // Filter the output
    const bandpass = new BiquadFilterNode(audioCtx, {
        type: "bandpass",
        frequency: bandHz,
    });

    // Connect our graph
    noise.connect(bandpass).connect(audioCtx.destination);
    noise.start(time);

    return noise;
}

export function playPulse(audioCtx, pulseHz = 880, lfoHz = 30, pulseTime = 0.1, time = 0) {
    // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
    const osc = new OscillatorNode(audioCtx, {
        type: 'sine', //"sine", "square", "sawtooth", "triangle" and "custom"
        //type: 'square',
        //type: 'sawtooth',
        //type: 'triangle',
        frequency: pulseHz,
    });

    const amp = new GainNode(audioCtx, {
        value: 1,
    });

    const lfo = new OscillatorNode(audioCtx, {
        type: "square",
        frequency: lfoHz,
    });

    lfo.connect(amp.gain);
    osc.connect(amp).connect(audioCtx.destination);
    lfo.start();
    osc.start(time);
    osc.stop(time + pulseTime);

    return osc;
}
