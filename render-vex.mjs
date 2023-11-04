import { Flow } from 'https://cdn.jsdelivr.net/npm/vexflow@4.2.3/+esm';
// https://www.vexflow.com
// https://0xfe.github.io/vexflow/api/
// https://github.com/0xfe/vexflow/wiki/Using-EasyScore
// https://github.com/0xfe/vexflow/wiki/Tutorial

export function render() {
    const f = new Flow.Factory({
        renderer: {
            elementId: 'output',
            width: 500,
            height: 200
        },
    });

    const StaveNote = Flow.StaveNote;

    const score = f.EasyScore();
    const system = f.System();

    /*
        upper case notes, relative mode apparently
        pitches in uppercase
        beams are manual wrap notes inside score.beam()

        /q (quarter note)
        /8 8th
        /16 16th
        add yet a third part /r to render a rest in the location of the original pitch
    */

    system
    .addStave({
        voices: [
            // score.voice(score.notes('C#5/q, B4, A4, G#4', { stem: 'up' })),
            //score.voice(score.notes('C#4/h, C#4', { stem: 'down' })),

            //score.voice(score.notes('C5/q, C5/r, C5/2/r'), {}),

            //score.voice(score.notes('C5/q, E5/q/r, D5, A5/8, B5/8'), {}),

            /* score.voice(
                score.notes(
                    'C5/q, E5/q/r, D5'
                )
                .concat(score.beam(score.notes(
                    'A5/8, B5/8'
                ))),
                {}
            ) */

            score.voice(
                [
                    //new StaveNote({ keys: ["a/4"], duration: "8" }),
                    //new StaveNote({ keys: ["b/4"], duration: "8" }),
                    new StaveNote({ keys: ["c/4", "a/4"], duration: "4" }),
                ]
                .concat(score.notes('E5/q/r, D5'))
                .concat(score.beam(score.notes(
                    'A5/8, B5/8'
                ))),
                {}
            )
        ],
    })
    //.addClef('treble')
    .addClef('percussion')
    .addTimeSignature('4/4');

    f.draw();
}
