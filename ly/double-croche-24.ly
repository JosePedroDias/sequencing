\version "2.24.2"

doc_title = "la double croche - 24"
page_no = "2"
bpm = 60
timezp = 3/4

xxiva = \drummode {
    sn8 8 16 16 16 16 16 16 16 16
    16 16 16 16 16 16 16 16 16 16 16 16
    2 16 16 16 16
}
xxivb = \drummode {
    16 16 16 16 16 16 16 16 4
    16 16 16 16 16 16 16 16 16 16 16 16
    8 8 4 16 16 16 16
    16 16 16 16 16 16 16 16 8 8
}
xxivc = \drummode {
    8 8 8 8 16 16 16 16
    8 8 16 16 16 16 8 8
    8 8 16 16 16 16 8 8
    8 8 8 8 8 8
    8 8 16 16 16 16 8 8
}
xxivd = \drummode {
    8 8 8 8 16 16 16 16
    4 16 16 16 16 4
    8 8 8 8 8 8
    8 8 4 16 16 16 16
    4 r4 r4
}

main = {
    \stemUp
    
    \xxiva    \section     \break
    \xxivb    \section     \break
    \xxivc    \section     \break
    \xxivd    \section     \break
}

\include "./zp-drums.ly"
