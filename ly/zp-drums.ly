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

        \main
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
