import { MidiWriter } from "./midi-writer.mjs";
import { writeFile } from 'node:fs/promises';

const { Track, NoteEvent, Writer, ProgramChangeEvent } = MidiWriter;

const tracks = [];

const t0 = new Track();
tracks.push(t0)
t0.setTimeSignature(4, 4);
t0.setTempo(60);

// number, value, channel, delta
//t0.controllerChange(121,   0,  10);  // 9 121   0

/*t0.addEvent(new ProgramChangeEvent({
    instrument: 0,
    channel:    9,
}));*/

// number, value, channel, delta
/*t0.controllerChange(  7, 100,  10);  // 9   7 100
t0.controllerChange( 10,  64,  10);  // 9  10  64
t0.controllerChange( 91,   0,  10);  // 9  91   0
t0.controllerChange( 93,   0,  10);  // 9  93   0*/

//t0.addTrackName('drums');
//t0.addInstrumentName('drum kit');

//t0.addEvent(new NoteEvent({pitch: 'B0', duration: '4'}));
//t0.addEvent(new NoteEvent({pitch: 'B1', duration: '4'})); // bda
//t0.addEvent(new NoteEvent({pitch: 35, duration: '4'})); // bda
//t0.addEvent(new NoteEvent({pitch: 'C1', duration: '4'})); // bd
//t0.addEvent(new NoteEvent({pitch: 'B2', duration: '4'}));
//t0.addEvent(new NoteEvent({pitch: 'B3', duration: '4'}));

// creates a note roughly every 3 seconds
//35 - 81
const NOTE0 = 35;
const NOTE1 = 81;
for (let note = NOTE0; note <= NOTE1; ++note) {
    t0.addEvent(new NoteEvent({pitch: note, duration: '4', channel: 10 })); // velocity default 0.5?
    t0.addEvent(new NoteEvent({wait: '4', channel: 10 }));
}

const writer = new Writer(tracks);

const arr = writer.buildFile();
await writeFile('drum.mid', arr, 'binary');
