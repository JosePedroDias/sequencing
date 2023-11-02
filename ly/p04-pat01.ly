\version "2.24.2"

\header {
  %piece = "MENUET"
  %composer = "Christian Petzold"
  tagline = "4"
}

\paper {
    %#(set-default-paper-size "a4")
}

% \drums {
%         \time 4/4
%         \tempo 4 = 60
%         <hh bd>8 hh <hh sn> hh bd4 <hh bd> hh8 <hh sn> hh
%         r2  r2

%         %sn8^"L" sn^"R"
% }

dr = \drummode {
        \time 4/4
        \tempo 4 = 60

        \set Timing.beamExceptions = #'()
        %\set Timing.baseMoment = #(ly:make-moment 1/4)
        %\set Timing.beatStructure = 1,1,1,1

        \repeat volta 2 {
            <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh
        }
        %r2  r2
        %sn8^"L" sn^"R"
      }

\score {
  <<
    \new DrumStaff \with { instrumentName = "drums" }
    <<
      \new DrumVoice { \dr }
    >>
  >>
  \layout { }
}

\score {
  \unfoldRepeats {
  <<
    \new DrumStaff \with { instrumentName = "drums" }
    <<
      \new DrumVoice { \dr }
    >>
  >>
  }
  \midi { \tempo 4 = 60 }
}
