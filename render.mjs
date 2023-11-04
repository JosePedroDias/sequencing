import { getPatternsFromLy, parseLyPattern, lyPatternToAscii } from './ly-pattern-parser.mjs';
import { parseAsciiPattern, asciiPatternToHelperLy } from './ascii-pattern-parser.mjs';
import { fetchText, printAscii } from './utils.mjs';
import { render } from './render-vex.mjs';

const lyFileContents = await fetchText('./ly/p04.ly');
const lyPatterns = getPatternsFromLy(lyFileContents);
const lyPattern = lyPatterns[8].contents.trim();
printAscii('LY PATTERN:', ['bold']);
printAscii(lyPattern);

const parsedLyPattern = await parseLyPattern(lyPattern);

const asciiPattern = lyPatternToAscii(parsedLyPattern)
printAscii('ASCII PATTERN:', ['bold']);
printAscii(asciiPattern);

const parsedAsciiPattern = parseAsciiPattern(asciiPattern);
const arr = asciiPatternToHelperLy(parsedAsciiPattern);
//console.log(arr);

render(arr);
