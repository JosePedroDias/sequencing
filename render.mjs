import { renderLyPattern, renderAsciiPattern } from './render-vex.mjs';

const linearTime = true;

if (false) {
    await renderLyPattern(`<hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh`, linearTime);
} else {
    await renderAsciiPattern(`4/4 60
hh|o   o   o   o   o   o   o   o   |
bd|o o   o       o o   o     o   o |
sn|        o         o     o       |
`, linearTime);
}
