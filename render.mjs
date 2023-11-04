import { renderLyPattern, renderAsciiPattern } from './render-vex.mjs';
import { lyPatternToAscii } from './ly-pattern-parser.mjs';
import { asciiPatternToLy } from './ascii-pattern-parser.mjs';
import { button, textEditor, checkbox } from './ui-elements.mjs';

let modeLy = true;
let uiText, uiLinearTime;
let score;

uiText = textEditor(`<hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh`);

async function render() {
    if (score) {
        score.dispose();
        score = undefined;
    }

    const content = uiText.getValue();
    const renderer = modeLy ? renderLyPattern : renderAsciiPattern;
    score = await renderer(content, uiLinearTime.getValue());
}

async function convert() {
    let content = uiText.getValue();
    const converter = modeLy ?  asciiPatternToLy : lyPatternToAscii;
    content = await converter(content);
    uiText.setValue(content);
}

button('render', render);
/* button('play', () => {

}); */

button('change mode', async () => {
    modeLy = !modeLy;
    await convert();
    render();
});

uiLinearTime = checkbox('linear time', render, true);

await render();
