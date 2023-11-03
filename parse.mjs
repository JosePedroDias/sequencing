// https://pegjs.org/
//import peg from 'https://cdn.jsdelivr.net/npm/pegjs@0.10.0/+esm';

// https://peggyjs.org/documentation.html
// https://github.com/peggyjs/peggy
// https://github.com/peggyjs/peggy/tree/main/examples
import peggy from 'https://cdn.jsdelivr.net/npm/peggy@3.0.2/+esm';


import { fetchText } from './sequencer.mjs';
//console.log(peggy);

//const definition = await fetchText('./grammars/1.pegjs');
//const definition = await fetchText('./grammars/1meta.pegjs');
const definition = await fetchText('./grammars/ly.pegjs');
//console.log(definition);

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
});
//console.log(parser);

//const input = `2 * (3 + 4)`;
const input = `bd2 hh r hh4 <hh r4 bd>4 <bd hh>`;
console.log(input);

const output = parser.parse(input);
console.log(output);
