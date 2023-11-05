import { sampleNameToUrl } from "./sample-mapping.mjs";

export function parseAsciiPattern(patternString) {
    const lines = patternString.split('\n');
    if (lines[lines.length-1].trim() === '') lines.pop();
    const [timeSignature, bpm] = lines.shift().split(' ');
    return {
        timeSignature,
        bpm: parseFloat(bpm),
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

// dt to durations
export const dtToDuration = (dt) => {
    switch (dt) {
        case  1: return 32;
        case  2: return 16;
        case  4: return  8;
        case  8: return  4;
        case 16: return  2;
        case 32: return  1;
        default: return 0; // happens at t=0
    }
};

export function asciiPatternToHelperLy(pattern) {
    const pitchNames = pattern.tracks.map((track) => track.name);
    const times = pattern.tracks.map((track) => track.times);
    const lenT = times[0].length;
    const lenP = pitchNames.length;

    let t = 0;
    let lastIT = 0;
    const sequenceOfPairs = [];
    for (let iT = 0; iT < lenT; ++iT) {
        const dIT = iT - lastIT;
        const tickPitches = [];
        for (let iP = 0; iP < lenP; ++iP) {
            const pn = pitchNames[iP];
            const isOn = times[iP][iT];
            if (isOn) tickPitches.push(pn);
        }
        if (tickPitches.length > 0) {
            lastIT = iT;
            sequenceOfPairs.push([tickPitches, dIT, iT]);
        }
    }

    // [pitches, dtFromPrev, t] => [pitches, durToNext, durFromPrev]
    const sequenceOfPairs2 = sequenceOfPairs.reduceRight(
        ([sop, dIT2], [pitches, dIT, iT], i) => {
            sop[i] = [pitches, dtToDuration(dIT2 === undefined ? lenT - iT : dIT2), dtToDuration(dIT), iT / lenT];
            return [sop, dIT];
        },
        [structuredClone(sequenceOfPairs), undefined]
    )[0];

    //console.log(sequenceOfPairs);
    //console.log(sequenceOfPairs2);
    return sequenceOfPairs2;
}

export function asciiPatternToLy(patternString) {
    const pattern = parseAsciiPattern(patternString);

    let lastD = undefined;
    const sequenceOfPairs2 = asciiPatternToHelperLy(pattern);
    const ly = sequenceOfPairs2.map(([pitches, dur]) => {
        const p = pitches.length > 1 ? `<${pitches.join(' ')}>` : pitches[0];
        const d = lastD === dur ? '' : dur;
        lastD = dur;
        return `${p}${d}`;
    }).join(' ');

    return ly;
}
