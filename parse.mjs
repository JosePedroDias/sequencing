import { getPatternsFromLy, parseLyPattern, lyPatternToAscii } from './ly-pattern-parser.mjs';
import { fetchText, printAscii } from './utils.mjs';

const lyFileContents = await fetchText('./ly/p04.ly');

const patterns = getPatternsFromLy(lyFileContents);
console.log('patterns', patterns);

const pattern = patterns[8].contents;
console.log('pattern', pattern);
printAscii('PATTERN:', ['bold']);
printAscii(pattern);

const parsedPattern = await parseLyPattern(pattern);
console.log('parsedPattern', parsedPattern);

printAscii('ASCII:', ['bold']);
const ascii = lyPatternToAscii(parsedPattern);
console.log(ascii);
printAscii(ascii);
