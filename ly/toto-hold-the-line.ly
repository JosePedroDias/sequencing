\version "2.24.2"

doc_title = "toto - hold the line"
page_no = "1"
bpm = 147
timezp = 8/2

intro = \drummode {
  \textMark "intro"
  \relative {
    \tuplet 3/8 {
      <hh bd>8 hh hh
    }
    \tuplet 3/8 {
      <hh sn bd> hh hh
    }
    \tuplet 3/8 {
      <hh bd> hh hh
    }
    \tuplet 3/8 {
      <hh sn bd> hh hh
    }
    
    \tuplet 3/8 {
      <hh bd>8 hh hh
    }
    \tuplet 3/8 {
      <hh sn bd> hh hh
    }
    \tuplet 3/8 {
      <hh bd> hh <hh bd>
    }
    \tuplet 3/8 {
      <hh sn bd> hh hh
    }
  }
}

verso = \drummode {
  \textMark "verso"
  \relative {
    \tuplet 3/8 {
      <hh bd>8 hh <hh bd>
    }
    \tuplet 3/8 {
      <hh sn> <hh bd> <hh bd>
    }
    \tuplet 3/8 {
      <hh bd>8 hh <hh bd>
    }
    \tuplet 3/8 {
      <hh sn> <hh bd> <hh bd>
    }
    
    \tuplet 3/8 {
      <hh bd>8 hh <hh bd>
    }
    \tuplet 3/8 {
      <hh sn> <hh bd> <hh bd>
    }
    \tuplet 3/8 {
      <hh bd>8 hh <hh bd>
    }
    \tuplet 3/8 {
      <hh sn> <hh bd> hh
    }
  }
}

main = {
    \stemUp
    
    \intro    \section     \break
    \verso    \section     \break
}

\include "./zp-drums.ly"
