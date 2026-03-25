\version "2.24.2"

doc_title = "Muse - Knights of Cydonia"
page_no = "1"
bpm = 140
%timezp = 4/4
timeunit = 8

pa = \drummode {
  \relative {
    <cymca bd>8  hh16 tomfl
    <sn bd>8     hh16 tomfl
  }
}

pb = \drummode {
  \relative {
    bd8          hh16 tomfl
    <sn bd>8     hh16 tomfl
  }
}

main = {
    \stemUp
    \pa \pb \pb \pb
    \section \break
}

\include "./zp-drums.ly"
