#!/bin/bash

# brew install fluidsynth

# download fluid R3 from FluidR3_GM:
# https://archive.org/details/fluidr3-gm-gs

# general user, mono 44100
# fluid guitar sounds better

#BANK=/Users/jdias/Downloads/SOUNDBANKS/GeneralUser_GS_v1.47.sf2
#BANK=/Users/jdias/Downloads/SOUNDBANKS/FluidR3_GM.sf2
BANK=FluidR3_GM_GS.sf2
DIR=.

#FILE_M=rhcp-californication.mid
#FILE_W=rhcp-californication.wav
#FILE_T=rhcp-californication.txt

FILE_M=demo2b.mid
FILE_W=demo2b.wav
#FILE_T=rhcp-californication.txt

#echo generating no drums version...
fluidsynth -n -L 1 -r 44100 -g 1 -i $BANK -F $DIR/$FILE_W $DIR/$FILE_M
#oggenc -q 10 $DIR/no_drums.wav
#rm $DIR/no_drums.wav

#echo generating only drums version...
#fluidsynth -n -L 1 -r 44100 -g 1 -i $BANK -F $DIR/only_drums.wav $DIR/only_drums.mid
#oggenc -q 10 $DIR/only_drums.wav
#rm $DIR/only_drums.wav

#echo extracting drums MIDI events...
##fluidsynth -F /tmp/void.wav -v $DIR/only_drums.mid > only_drums.txt 2>&1
#fluidsynth -n -L 1 -r 44100 -g 1 -i $BANK -v $DIR/$FILE_M > $DIR/$FILE_T 2>&1

#node parse_midi_events.mjs

#echo all done



