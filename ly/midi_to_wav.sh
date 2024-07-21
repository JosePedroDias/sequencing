#!/bin/bash

filename_with_ext=$1
FN="${filename_with_ext%.*}"
#echo "$FN"

fluidsynth -i ../midis/FluidR3_GM_GS.sf2 -n -L 1 -r 44100 -g 1 -R 0 -F $FN.wav $FN.midi
