import { readFileSync, writeFileSync } from 'fs';

/*
fluidsynth: prog        14      0       0
fluidsynth: prog        15      0       0
fluidsynth: cc  0       101     0
fluidsynth: cc  0       100     0
fluidsynth: cc  0       6       12
fluidsynth: cc  0       38      0
fluidsynth: noteon	9	47	95	00024	33.820	1.245	0.000	0
fluidsynth: noteon	9	45	95	00025	33.820	1.245	0.000	1
fluidsynth: noteoff	9	47	0	00024	1.249	2
fluidsynth: noteoff	9	45	0	00025	1.249	2
fluidsynth: noteon	9	45	95	00026	34.183	1.249	0.000	2
*/

function round(n, decimals) {
  return parseFloat( n.toFixed(decimals) );
}

function parse(lines) {
  const events = [];
  let lastLine;
  let noteOns = 0;
  let repeats = 0;
  lines.forEach((l) => {
    const w = l.split(/(\s+)/).filter((s, i) => i % 2 === 0); // ??
    w.shift(); // drop fluidsynth:
    //console.log(w);
    let [ev, ch, note, vel, _, t0/*,t1*/] = w;
    //console.log(ev, ch, note, vel, t0);

    if (ev === 'noteon' && ch === '9') {
      t0 = parseFloat(t0);
      note = parseInt(note, 10);
      vel = parseInt(vel, 10) / 127;

      t0 = round(t0, 3);
      vel = round(vel, 2);

      const ev = [t0, note, vel];

      const s = JSON.stringify([t0, note]);
      if (s !== lastLine) {
        events.push(ev);
        lastLine = s;
        ++noteOns;
      } else {
        ++repeats;
      }
    }
  });
  console.log('noteOns: %s\nrepeats: %s', noteOns, repeats);
  return events;
}

function parseFile(pathTxtIn, pathJsonOut) {
  const str = readFileSync(pathTxtIn).toString();
  const o = parse( str.split('\n') );
  //writeFileSync(pathJsonOut, JSON.stringify(o, null, '\t'));
  writeFileSync(pathJsonOut, JSON.stringify(o));
}

const [_, __, inTxt, outJson] = process.argv;
parseFile(inTxt, outJson);
