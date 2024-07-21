\version "2.24.2"

doc_title = "ex 18"
page_no = "1"
bpm = 60
timezp = 2/4

i = \drummode {
    sn8 8 8 8
    4 r8 8
    8 8 4
    8 8 4
    r8 8 r4
    8 8 r8 8
    r8 8 4
    r8 8 4
}

ii = \drummode {
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

iii = \drummode {
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

iv = \drummode {
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
    \i      \section    \break
    \ii     \section    \break
    \iii    \section    \break
    \iv     \section    \break
}

\include "./zp-drums.ly"
