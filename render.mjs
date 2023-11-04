import { renderLyPattern, renderAsciiPattern } from './render-vex.mjs';

const linearTime = true;

if (true) {
    //await renderLyPattern(`<hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh`, linearTime); // P1
    await renderLyPattern(`<hh bd>16 bd hh bd <hh sn>8 hh16 bd <hh bd> sn <hh bd>8 <hh sn>16 bd hh bd`, linearTime); // P8
} else {
    await renderAsciiPattern(`4/4 60
hh|o   o   o   o   o   o   o   o   |
bd|o o   o       o o   o     o   o |
sn|        o         o     o       |
`, linearTime);
}
