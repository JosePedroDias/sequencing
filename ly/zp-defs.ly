%TEMP
%%\include "oll-core/package.ily"
%%\loadPackage lilypond-export
%%opts.exporter = #exportMusicXML

%doc_title = "title"
%page_no = "1"
%timezp = 4/4
%bpm = 60

handsStyle = {
    \override NoteHead.color = #blue
    \override Stem.color = #blue
    \override Beam.color = #blue
}

feetStyle = {
    \override NoteHead.color = #red
    \override Stem.color = #red
    \override Beam.color = #red
}
