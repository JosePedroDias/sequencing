\version "2.24.2"

\include "./zp-defs.ly"

doc_title = "Muse - Knights of Cydonia"
page_no = "1"
bpm = 140
%timezp = 4/4
timeunit = 8

pa = \drummode {
    <cymca bd>8  hh16 tomfl
    <sn bd>8     hh16 tomfl
}

pb = \drummode {
    bd8          hh16 tomfl
    <sn bd>8     hh16 tomfl
}

main = {
    \stemUp
    \pa \repeat unfold 3 { \pb }
    \section \break
}

% Separation of patterns
paHands = \drummode { cymca8 hh16 tomfl sn8 hh16 tomfl }
paFeet  = \drummode { bd8    s8         bd8  s8        }

pbHands = \drummode { hh8    hh16 tomfl sn8 hh16 tomfl }
pbFeet  = \drummode { bd8    s8         bd8  s8        }

% Combine them using the << >> construct
%main2 = <<
%  \new DrumVoice { 
%    \voiceOne % Stems Up
%    \handsStyle
%    \paHands \pbHands \pbHands \pbHands 
%  }
%  \new DrumVoice { 
%    \voiceTwo % Stems Down
%    \feetStyle
%    \paFeet \pbFeet \pbFeet \pbFeet 
%  }
%>>

\include "./zp-drums.ly"
