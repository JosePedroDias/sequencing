\version "2.24.2"

%TEMP
%\include "oll-core/package.ily"
%\loadPackage lilypond-export
%opts.exporter = #exportMusicXML

%doc_title = "title"
%page_no = "1"
%timezp = 4/4
%bpm = 60

\header {
  piece = \doc_title
  composer = "José Pedro Dias / Pedro Nico"
  tagline = \page_no
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
        %\time 4/4
        \time \timezp
        %\tempo 4 = \bpm
        %\tempo \timeunit = \bpm
        \set Timing.beamExceptions = #'()
        \override Beam.positions = #'(4.8 . 4.8) % keeps beams horizontal

        \main
    }
}

% VISUALS
\score {
    \dr
    \layout {
        %indent = 3.0\cm
        %short-indent = 1.5\cm
        indent = 0.2\cm
        short-indent = 0.2\cm
    }
}

% MIDI
\score {
    \unfoldRepeats { \dr }
    \midi { \tempo 4 = \bpm }
    %\midi { \tempo \timeunit = \bpm }

    % TEMP
    %\FileExport #opts
}
