\version "2.24.2"

doc_title = "rhcp - californication"
page_no = "5"

bpm = 95

pat_i = \drummode {
    r1
}

pat_ii = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh
}

main = {
    \stemUp

    \pat_i    \section
    \pat_ii   \section

    \break
}

\include "./zp-drums.ly"
