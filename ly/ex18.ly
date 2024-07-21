\version "2.24.2"

doc_title = "ex 18"
page_no = "1"

bpm = 60
timezp = 2/4


pi = \drummode {
    8 8 8 8
    4 r8 8
    8 8 4
    8 8 4
    r8 8 r4
    8 8 r8 8
    r8 8 4
    r8 8 4
}

pii = \drummode {
    r8 8 r8 8
    r2
    r8 8 8 8
    4 8 8
    8 8 r8 8
    r2
    8 8 r4
    8 8 8 8
    r2
    8 8 r8 8
}

piii = \drummode {
    4 8 8
    r4 r8 8
    r8 8 8 8
    8 8 8 8
    8 8 r4
    r8 8 r8 8
    4 8 8
    r8 8 4
    r8 8 8 8
}

piv = \drummode {
    r8 8 r8 8
    8 8 8 8
    r8 8 r8 8
    4 r8 8
    r8 8 4
    8 8 8 r8
    r8 8 8 8
    r8 8 r8 8
    8 8 8 8
    4 r4
}

main = {
    \stemUp

    \pi    \section
    \break
    \pii   \section
    \break
    \piii   \section
    \break
    \piv   \section
    \break
}

\include "./zp-drums.ly"
