# install

    brew install lilypond
    brew install frescobaldi
## commands

generates both a mid and a pdf file:

    lilypond double-croche.ly
    lilypond ex18.ly

# handle midis

play
    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 double-croche.midi
    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 ex18.midi

to wav

    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 -n -L 1 -r 44100 -g 1 -R 0 -F double-croche.wav double-croche.midi

export events

    fluidsynth -i ../midis/FluidR3_GM_GS.sf2 -n -v -F /dev/null double-croche.midi


# convert to musicxml

(I didn't use this.
i opened the midi files directly on musescore with decent results for these files)

http://www.mankin.org.uk/howto/lilypond-to-xml.html

Reference: https://music.stackexchange.com/questions/42315/lilypond-to-musicxml-to-sibelius

    Clone this project to your local machine https://github.com/openlilylib/oll-core
    Clone this project to your local machine https://github.com/openlilylib/lilypond-export
    Set the include path for lilypond to point to the parent folder which contains the two projects above. In Frescobaldi this can be done by opening Preferences > Lilypond Preferences
    Add the following lines at the top of the file:

    \include "oll-core/package.ily"
    \loadPackage lilypond-export

    opts.exporter = #exportMusicXML

    Update the \layout command to be like so:

    \layout{
        \FileExport #opts
    }

Now when running the file through Lilypond it should also produce a .xml file. I find the results to be better than the output from python-ly.
