https://www.w3.org/2021/06/musicxml40/tutorial/structure-of-musicxml-files/

https://guidodoc.grame.fr/
https://www.npmjs.com/package/@grame/libmusicxml

https://opensheetmusicdisplay.org/demos/public-typescript-demo/
https://github.com/opensheetmusicdisplay/opensheetmusicdisplay

https://github.com/0xfe/vexflow
https://www.vexflow.com/
https://github.com/0xfe/vexflow/wiki/Tutorial


https://tonejs.github.io

https://www.alphatab.net


https://abcnotation.com/
https://abcwiki.org/abc:syntax
https://kmgoto.jp/public/ABC/


```
brew install lilypond
lilypond 1.ly
```

https://lilypond.org/
https://lilypond.org/manuals.html
https://lilypond.org/doc/v2.24/Documentation/snippets/percussion
    https://lilypond.org/doc/v2.23/Documentation/notation/percussion-notes
    https://lilypond.org/doc/v2.24/Documentation/learning/simple-notation#pitches
    https://lilypond.org/doc/v2.24/Documentation/learning/simple-notation#durations-_0028rhythms_0029
    https://lilypond.org/doc/v2.24/Documentation/learning/simple-notation#rests
    https://lilypond.org/doc/v2.24/Documentation/learning/multiple-notes-at-once
    https://lilypond.org/doc/v2.24/Documentation/learning/music-expressions-explained#simultaneous-music-expressions-single-staff
    https://lilypond.org/doc/v2.23/Documentation/notation/the-layout-block

https://lilypond.org/doc/v2.24/Documentation/usage/index.html
https://lilypond.org/doc/v2.24/Documentation/learning/tutorial
https://lilypond.org/doc/v2.22/Documentation/usage/invoking-musicxml2ly
https://lilypond.org/doc/v2.24/Documentation/notation/cheat-sheet

GUI: brew install frescobaldi
https://frescobaldi.org/

pip install python-ly
ly musicxml p04.ly > p04.musicxml
https://python-ly.readthedocs.io/en/latest/command.html#commands
fails. requires python 2?



# lilypond from source

https://lilypond.org/doc/v2.25/Documentation/contributor/compiling
tar -xzf lilypond-2.25.9.tar.gz
cd lilypond-2.25.9
mkdir build/
cd build/
../autogen.sh --noconfigure



# vex flox

https://www.vexflow.com
https://0xfe.github.io/vexflow/api/
https://github.com/0xfe/vexflow/wiki/Using-EasyScore
https://github.com/0xfe/vexflow/wiki/Tutorial

upper case notes, relative mode apparently
pitches in uppercase
beams are manual wrap notes inside score.beam()

/q ~ /4 (quarter note)
/8 8th
/16 16th
add yet a third part /r to render a rest in the location of the original pitch
