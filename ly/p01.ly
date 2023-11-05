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

pat_v = \drummode {
    <bd hh>8 hh <sn hh> hh <bd hh> hh <sn hh> <bd hh>
}

pat_vi = \drummode {
    <bd hh>8 hh <sn hh> <bd hh> <bd hh> hh <sn hh> hh
}

pat_vii = \drummode {
    <bd hh>8 hh <sn hh> <bd hh> <bd hh> hh <sn hh> <bd hh>
}

pat_viii = \drummode {
    <bd hh>8 <bd hh> <sn hh> <bd hh> <bd hh> hh <sn hh> hh
}

main = {
    \stemUp

    \pat_i \section
    \pat_ii \section
    \break

    \pat_iii \section
    \pat_iv \section
    \break

    \pat_v \section
    \pat_vi \section
    \break

    \pat_vii \section
    \pat_viii \section
    \break
}

\include "./zp-drums.ly"
