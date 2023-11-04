import { getPatternsFromLy, lyPatternToAscii } from './ly-pattern-parser.mjs';
import { asciiPatternToLy } from './ascii-pattern-parser.mjs';
import { fetchText, printAscii } from './utils.mjs';

const lyFileContents = await fetchText('./ly/p04.ly');

const lyPatterns = getPatternsFromLy(lyFileContents);
//console.log('lyPatterns', lyPatterns);

const lyPattern_ = lyPatterns[8].contents;
const lyPattern = lyPattern_.trim();

printAscii('LY PATTERN:', ['bold']);
printAscii(lyPattern);

const asciiPattern = await lyPatternToAscii(lyPattern);

printAscii('ASCII PATTERN:', ['bold']);
printAscii(asciiPattern);

const lyPattern2 = await asciiPatternToLy(asciiPattern);

printAscii('LY PATTERN 22:', ['bold']);
printAscii(lyPattern2);
