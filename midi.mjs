/*
https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API
https://www.midi.org/specifications/midi-reference-tables/expanded-midi-1-0-messages-list-status-bytes
https://github.com/cwilso/midi-synth/blob/master/js/midi.js
https://webmidijs.org/docs/
https://en.wikipedia.org/wiki/General_MIDI
*/

// https://musescore.org/sites/musescore.org/files/General%20MIDI%20Standard%20Percussion%20Set%20Key%20Map.pdf
// https://usermanuals.finalemusic.com/SongWriter2012Win/Content/PercussionMaps.htm
// https://lilypond.org/doc/v2.23/Documentation/notation/percussion-notes

export const DRUMS_NOTE_MAPPING = {
    22: '22',// ??
    26: 'hh', // + HH
    35: '35',
    36: 'bd', // Bass Drum 1
    37: '37',
    38: 'sn', // Acoustic Snare
    39: '39',
    40: '40',
    41: '41',
    42: 'hhc', // Closed Hi Hat
    43: 'tomfh', // High Floor Tom
    44: 'hh', // Pedal H-Hat
    45: 'toml', // Low Tom
    46: 'hho', // Open Hi-Hat
    47: '47',
    48: 'tommh', // Hi Mid Tom
    49: 'cymc', // Crash Cymbal 1
    50: '50',
    51: 'cymr', // Ride Cymbal 1
    52: '52',
    53: '53',
    54: '54',
    55: 'cyms', // Splash Cymbal
    56: '56',
    57: '57',
    58: '58',
    59: 'cyma', // Ride Cymbal 2   (cyma or cymb?)
    60: '60',
    61: '61',
    62: '62',
    63: '63',
    64: '64',
    65: '65',
    66: '66',
    67: '67',
    68: '68',
    69: '69',
    70: '70',
    71: '71',
    72: '72',
    73: '73',
    74: '74',
    75: '75',
    76: '76',
    77: '77',
    78: '78',
    79: '79',
    80: '80',
    80: '81',
};

export const COMMAND_STOP       =  8;
export const COMMAND_START      =  9;
export const COMMAND_KNOB       = 11;
export const COMMAND_PITCH_BEND = 14;

export async function getMidi() {
    return await navigator.requestMIDIAccess();
}

export function parseMidiMessage(data) {
    return {
        command:  data[0] >> 4,
        channel:  (data[0] & 0xf), // percussions are the 10th channel (9)
        note:     data[1],
        velocity: data[2] / 127,
    };
}

export function getMidiInputs(midi) {
    return Array.from(midi.inputs.values());
}
