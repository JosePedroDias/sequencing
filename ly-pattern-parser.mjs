// https://peggyjs.org/documentation.html
// https://github.com/peggyjs/peggy
// https://github.com/peggyjs/peggy/tree/main/examples
import peggy from 'https://cdn.jsdelivr.net/npm/peggy@3.0.2/+esm';

import { fetchText } from './utils.mjs';

export function getPatternsFromLy(lyFileContents) {
    const patternRgx = /([a-z_]+) = \\drummode \{([^}]+)\}/gm;
    let m;
    const patterns = [];
    do {
        m = patternRgx.exec(lyFileContents);
        if (m) {
            const [_, name, contents] = m;
            patterns.push({ name, contents: contents });
        }
    } while (m);
    return patterns;
}

export async function parseLyPattern(lyPatternString) {
    const definition = await fetchText('./grammars/ly.pegjs');

    const parser = peggy.generate(definition, {
        optimize: 'speed',
        //optimize: 'size',

        format: 'bare',
        //format: 'es',

        output: 'parser',
        // output: 'ast',
        // output: 'source',

        grammarSource: definition,

        cache: true,

        //trace: true, // LISTS RULE APPLICATIONS

        error:   (stage, msg, loc, notes) => { console.log('ERROR', stage, msg, loc, notes); }, // NOT BEING CALLED?
        warning: (stage, msg, loc, notes) => { console.log('WARN ', stage, msg, loc, notes); }, // NOT BEING CALLED?
        //info:    (stage, msg, loc, notes) => { console.log('INFO ', stage, msg, loc, notes); }, // WORKS
    });

    const output = parser.parse(lyPatternString, {
        grammarSource: definition,
        tracer: {
            trace({ type, rule }) {
                console.log('TRACER', type, rule);
            }
        }
    });

    return output;
}

const adaptDur = (dur) => {
    switch (dur) {
        case 16: return  2;
        case  8: return  4;
        case  4: return  8;
        case  2: return 16;
        case  1: return 32;
        default: throw dur;
    }
};

export function lyPatternToAscii(parsedLyPattern) {
    let currentDur = 1;
    let cursor = 0;
    const pitches = {};
    let pitchesNames = new Set();
    for (let [kind, content, dur] of parsedLyPattern) {
        //console.log(kind, content, dur);

        if (kind === 'item') pitchesNames.add(content);
        else if (kind === 'parallel') content.forEach(([kind2, content2, dur2]) => pitchesNames.add(content2));

        if (dur != undefined) currentDur = adaptDur(dur);
        cursor += currentDur;
    }
    pitchesNames = Array.from(pitchesNames);

    pitchesNames.forEach((pn) => {
        const arr = new Array(cursor);
        arr.fill(false);
        pitches[pn] = arr;
    });


    cursor = 0;
    for (let [kind, content, dur] of parsedLyPattern) {
        //console.log(kind, content, dur);

        if (kind === 'item') pitches[content][cursor] = true;
        else if (kind === 'parallel') content.forEach(([kind2, content2, dur2]) => { pitches[content2][cursor] = true; });

        if (dur != undefined) currentDur = adaptDur(dur);
        cursor += currentDur;
    }

    const maxPitchNameLength = pitchesNames.reduce((prev, curr) => Math.max(prev, curr.length), 0);

    const ascii = Object.entries(pitches).map(([pn, arr]) => {
        const pn2 = pn.padEnd(maxPitchNameLength);
        const arr2 = arr.map((v) => v ? 'o' : ' ').join('');
        return `${pn2}|${arr2}|`;
    }).join('\n');

    return `TODO
${ascii}`;
}
