\version "2.24.2"

\header {
  %piece = "MENUET"
  %composer = "Christian Petzold"
  tagline = "4"
}

bpm = 60

dr = {
    \new DrumStaff \with { instrumentName = "drums" }
    \new DrumVoice {
        \drummode {
            \time 4/4
            \tempo 4 = \bpm
            \set Timing.beamExceptions = #'()

            \repeat volta 2 {
                \stemUp
                <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh
            }
            %r2  r2
            %sn8^"L" sn^"R"
        }
    }
}

\score {
    \dr
    \layout { }
}

\score {
    \unfoldRepeats { \dr }
    \midi { \tempo 4 = \bpm }
}
