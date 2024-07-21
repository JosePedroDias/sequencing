\version "2.24.2"

doc_title = "la double croche - 22 and 23"
page_no = "1"
bpm = 60
timezp = 4/4

xxiia = \drummode {
    sn2 16 16 16 16 4
    16 16 8 4 16 16 8 16 16 16 16
    8 16 16 4 16 16 16 16 16 16 8
    
}
xxiib = \drummode {
    16 16 16 16 8 16 16 8 8 4
    4 8 16 16 2
    4 16 16 8 16 16 8 16 16 16 16
}
xxiic = \drummode {
    16 16 16 16 8 16 16 8 8 4
    16 16 8 16 16 8 8 16 16 4
    8 16 16 8 8 4 16 16 8
}
xxiid = \drummode {
    16 16 16 16 8 16 16 16 16 8 8 8
    16 16 16 16 16 16 8 16 16 8 8 16 16
    16 16 8 16 16 16 16 8 16 16 16 16 8
}

xxiiia = \drummode {
    2 8 8 16 16 16 16
    8 8 16 16 16 16 2
    16 16 16 16 8 8 2
    4 16 16 16 16 8 8 4
}
xxiiib = \drummode {
    4 4 4 16 16 16 16
    8 8 4 4 16 16 16 16
    16 16 16 16 4 4 4
    16 16 16 16 8 8 4 4
}
xxiiic = \drummode {
    16 16 16 16 16 16 16 16 4 4
    16 16 16 16 4 16 16 16 16 4
    4 16 16 16 16 4 8 8
    4 4 16 16 16 16 16 16 16 16
}
xxiiid = \drummode {
    4 16 16 16 16 2
    4 16 16 16 16 4 16 16 16 16
    4 2 16 16 16 16
    2 4 16 16 16 16
    16 16 16 16 2 4
}

main = {
    \stemUp
    
    \xxiia    \section     \break
    \xxiib    \section     \break
    \xxiic    \section     \break
    \xxiid    \section     \break
    
    \xxiiia   \section     \break
    \xxiiib   \section     \break
    \xxiiic   \section     \break
    \xxiiid   \section     \break
}

\include "./zp-drums.ly"
