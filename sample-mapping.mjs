const SAMPLE_MAPPING = {
    kick:      35, // base drum
    snare:     38,
    closed_hh: 41,
    open_hh:   42,
    tom3:      44, // low
    tom2:      45, // mid
    pedal_hh:  46, // pedal hh
    tom1:      48, // high
    crash:     49,
    ride:      51, // ride
    ride_bell: 53,
};

const SAMPLE_TPL = `./audio_samples/jam_with_chrome/{N}.ogg`;

export function sampleNameToUrl(sampleName) {
    return SAMPLE_TPL.replace('{N}', SAMPLE_MAPPING[sampleName]);
}
