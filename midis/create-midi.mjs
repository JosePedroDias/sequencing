import { MidiWriter } from "./midi-writer.mjs";
import { writeFile } from 'node:fs/promises';

const { Track, NoteEvent, Writer } = MidiWriter;

const tracks = [];

const t0 = new Track();
tracks.push(t0)
t0.setTimeSignature(4, 4);
t0.setTempo(60);

//t0.addEvent(new ProgramChangeEvent({instrument: 10 }));
//t0.controllerChange(10, 10, 10, 10);
t0.controllerChange(0, 10, 10, 0);
//t0.addTrackName('drums');
//t0.addInstrumentName('drum kit');

//t0.addEvent(new NoteEvent({pitch: 'B0', duration: '4'}));
//t0.addEvent(new NoteEvent({pitch: 'B1', duration: '4'})); // bda
//t0.addEvent(new NoteEvent({pitch: 35, duration: '4'})); // bda
//t0.addEvent(new NoteEvent({pitch: 'C1', duration: '4'})); // bd
//t0.addEvent(new NoteEvent({pitch: 'B2', duration: '4'}));
//t0.addEvent(new NoteEvent({pitch: 'B3', duration: '4'}));

//35 - 81
for (let note = 35; note <= 81; ++note) {
    t0.addEvent(new NoteEvent({pitch: note, duration: '4'}));
    t0.addEvent(new NoteEvent({wait: '4'}));
}

const writer = new Writer(tracks);

const arr = writer.buildFile();
await writeFile('demo2.mid', arr, 'binary');
