import { getPatternsFromLy, parseLyPattern, lyPatternToAscii } from './ly-pattern-parser.mjs';
import { parseAsciiPattern, asciiPatternToLy } from './ascii-pattern-parser.mjs';
import { fetchText, printAscii } from './utils.mjs';

const lyFileContents = await fetchText('./ly/p04.ly');

const lyPatterns = getPatternsFromLy(lyFileContents);
console.log('lyPatterns', lyPatterns);

const lyPattern = lyPatterns[8].contents;
console.log('lyPattern', lyPattern);
printAscii('LY PATTERN:', ['bold']);
printAscii(lyPattern);

const parsedLyPattern = await parseLyPattern(lyPattern);
console.log('parsedLyPattern', parsedLyPattern);

printAscii('ASCII PATTERN:', ['bold']);
const ascii = lyPatternToAscii(parsedLyPattern);
console.log(ascii);
printAscii(ascii);

///

printAscii('LY PATTERN:', ['bold']);
const parsedAsciiPattern = parseAsciiPattern(ascii);
const ly = asciiPatternToLy(parsedAsciiPattern);
console.log(ly);
printAscii(ly);
