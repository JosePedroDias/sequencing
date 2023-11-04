\version "2.24.2"

\header {
  %piece = "MENUET"
  %composer = "Christian Petzold"
  tagline = "4"
}

\paper {
  %page-breaking = #ly:minimal-breaking % only breaks if necessary or force via \pageTurn
  %page-breaking = #ly:one-page-breaking % ends page early, dropping whitespace
  %page-breaking = #ly:page-turn-breaking % breaks at \pageTurn, may break also at \allowPageTurn
}

bpm = 60

pat_o = \drummode {
    r1
}

pat_i = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh
}

pat_ii = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh
}

pat_iii = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh16 bd
}

pat_iv = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh16 bd
}

pat_v = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh8
}

pat_vi = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh bd
}

pat_vii = \drummode {
    %1                   %2               %3               %4
    <hh bd>16 bd hh bd <hh sn>8 hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh bd
}

pat_viii = \drummode {
    %1                   %2               %3                  %4
    <hh bd>16 bd hh bd <hh sn>8 hh16 bd <hh bd> sn <hh bd>8 <hh sn>16 bd hh bd
}

dr = {
    \new DrumStaff \with {
        %instrumentName = "drums"
        instrumentName = "bat."
        shortInstrumentName = "bat."
    }
    \new DrumVoice {
        \clef percussion
        \numericTimeSignature
        \time 4/4
        \tempo 4 = \bpm
        \set Timing.beamExceptions = #'()
        \override Beam.positions = #'(4.8 . 4.8) % keeps beams horizontal

        \stemUp

        \pat_i    \section
        \pat_ii   \section

        \break

        \pat_iii  \section
        \pat_iv   \section

        \break

        \pat_v    \section
        \pat_vi   \section

        \break

        \pat_vii  \section
        \pat_viii \section

        \repeat volta 2 {
            %\pat_viii
        }
        %r2  r2
        %sn8^"L" sn^"R"

        \pageTurn

        %\pat_o
    }
}

\score {
    \dr
    \layout {
        %indent = 3.0\cm
        %short-indent = 1.5\cm
        indent = 0.2\cm
        short-indent = 0.2\cm
    }
}

\score {
    \unfoldRepeats { \dr }
    \midi { \tempo 4 = \bpm }
}
