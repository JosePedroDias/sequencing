\version "2.24.2"

doc_title = "Ritmos 1"
page_no = "1"

bpm = 60

pat_i = \drummode {
    <bd hh>8 hh <sn hh> hh <bd hh> hh <sn hh> hh
}

pat_ii = \drummode {
    <bd hh>8 <bd hh> <sn hh> hh <bd hh> hh <sn hh> hh
}

pat_iii = \drummode {
    <bd hh>8 hh <sn hh> hh <bd hh> <bd hh> <sn hh> hh
}

pat_iv = \drummode {
    <bd hh>8 <bd hh> <sn hh> hh <bd hh> <bd hh> <sn hh> hh
}

main = {
    \stemUp

    \pat_i \section

    \pat_ii \section

    \break

    \pat_iii \section

    \pat_iv \section

    % \break
}

\include "./zp-drums.ly"
