import { getPatternsFromLy, parseLyPattern, lyPatternToAscii } from './ly-pattern-parser.mjs';
import { fetchText } from './sequencer.mjs';

const lyFileContents = await fetchText('./ly/p04.ly');

const patterns = getPatternsFromLy(lyFileContents);
console.log('patterns', patterns);

const pattern = patterns[8].contents;
console.log('pattern', pattern);

const parsedPattern = await parseLyPattern(pattern);
console.log('parsedPattern', parsedPattern);

const ascii = lyPatternToAscii(parsedPattern);
console.log(ascii);
