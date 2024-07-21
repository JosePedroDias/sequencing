## transformations

ly =( lilypond )=> (pdf + midi)
midi =( musescore )=> musicxml


## cheat sheet

generates both a mid and a pdf file:

    lilypond double-croche.ly
    lilypond ex18.ly

generates musicxml file musescore can read (failing?)

    pip install python-ly
    ly musicxml double-croche.ly > double-croche.musicxml

# install

    brew install lilypond
    brew install frescobaldi


# handle midis

play
    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 double-croche.midi
    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 ex18.midi

to wav

    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 -n -L 1 -r 44100 -g 1 -R 0 -F double-croche.wav double-croche.midi

export events

    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 -n -v -F /dev/null double-croche.midi
