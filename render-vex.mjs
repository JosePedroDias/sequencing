import { Flow } from 'https://cdn.jsdelivr.net/npm/vexflow@4.2.3/+esm';

import { lyPatternToAscii } from './ly-pattern-parser.mjs';
import { parseAsciiPattern, asciiPatternToHelperLy } from './ascii-pattern-parser.mjs';

const { StaveNote, Stave, Renderer, Voice, Formatter, Beam, EasyScore, System, Factory, Fraction } = Flow;

const lookup = {
    hh: 'G/5/x1', // x(=x2) x0 x1 x2 x3
    sn: 'C/5',
    bd: 'D/4',
};

const colors = {
    hh: '#700',
    sn: '#070',
    bd: '#007',
};

export async function renderLyPattern(lyPattern, linearTime = false) {
    const asciiPattern = await lyPatternToAscii(lyPattern);
    return renderAsciiPattern(asciiPattern, linearTime);
}

export async function renderAsciiPattern(asciiPattern, linearTime = false) {
    const parsedAsciiPattern = parseAsciiPattern(asciiPattern);
    const arr = asciiPatternToHelperLy(parsedAsciiPattern);
    return _render(arr, linearTime);
}

export function _render(arr, linearTime = false) {
    const FOUR_FOUR = {
        num_beats:  4,
        beat_value: 4,
    };

    const PAD_X = 20;
    const PAD_Y = 20;
    const WW = window.innerWidth;
    const W = WW - 2 * PAD_X;
    const H = 150;
    const HH = H + 2 * PAD_Y;

    const containerEl = document.createElement('div');
    document.body.appendChild(containerEl);

    const renderer = new Renderer(
        containerEl,
        Renderer.Backends.SVG,
        //Renderer.Backends.CANVAS,
    );
    renderer.resize(WW, HH);
    const context = renderer.getContext();

    const formatter = new Formatter();

    // posX, posY, W
    const stave = new Stave(PAD_X, PAD_Y, W);
    stave.addClef('percussion').addTimeSignature('4/4');
    stave.setContext(context);
    //stave.draw();

    const noteXs = [];
    const notes = arr.map(([pitches, toNext, fromPrev, ratioOfMeasure]) => {
        noteXs.push(ratioOfMeasure);
        const note = new StaveNote({
            keys: pitches.map((pitch) => lookup[pitch]),
            duration: `${toNext}`,
        });

        // https://github.com/0xfe/vexflow/wiki/Coloring-%26-Styling-Notes
        pitches.forEach((pn, i) => note.setKeyStyle(i, { fillStyle: colors[pn] }));

        return note;
    });

    const voice = new Voice(FOUR_FOUR);
    //voice.setMode(Voice.Mode.STRICT); // SOFT, FULL, STRICT  ??
    voice.addTickables(notes);

    formatter.joinVoices([voice]).format([voice], W);

    if (linearTime) {
        const voiceW = W * 0.9;
        notes.forEach((note, i) => {
            note.getTickContext().setX(voiceW *noteXs[i]);
        });
    }

    voice.draw(context, stave);

    const applyBeams = true;
    let beams;

    if (applyBeams) {
        beams = Beam.generateBeams( voice.getTickables() );
        beams.forEach((beam) => beam.setContext(context).draw());
    }

    if (!linearTime) {
        formatter.joinVoices([voice]).format([voice], W);
    }

    stave.context.clear();

    stave.draw();
    voice.draw(context, stave);

    if (applyBeams) {
        beams.forEach((beam) => beam.setContext(context).draw());
    }

    return {
        dispose() {
            document.body.removeChild(containerEl);
        }
    }
}
