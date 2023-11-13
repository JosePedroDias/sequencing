#!/bin/bash

# brew install fluidsynth
# download fluid R3 from FluidR3_GM: https://archive.org/details/fluidr3-gm-gs

# general user, mono 44100
# fluid guitar sounds better

BANK=FluidR3_GM_GS.sf2

filename_with_ext=$1
FN="${filename_with_ext%.*}"
echo "$FN"

# -d (dump midi events)
# -g NUM (set the master gain. default 0.2)
# -r NUM (sampling rate)
# -R NUM (reverb 0/1. default 1)
# -n (no midi in)
# -F (fast render)
# -L NUM (number of audio channels)
# -q (no info/welcome)
# -v (verbose)

echo generating WAV...
fluidsynth -i $BANK -n -L 1 -r 44100 -g 1 -R 0 -F $FN.wav $FN.mid

echo extracting MIDI events to TXT...
#fluidsynth -i $BANK -n -d $FN.mid -q -F /dev/null > $FN.txt  # has no timing info!
fluidsynth -i $BANK -n $FN.mid -v -F /dev/null > $FN.txt 2>&1

echo TXT events to JSON..
node parse-midi-events.mjs $FN.txt $FN.json

echo all done
