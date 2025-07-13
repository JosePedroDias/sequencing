\version "2.24.2"

doc_title = "green day - boolevard of broken dreams"
page_no = "1"
bpm = 84
timezp = 4/4
timeunit = 8

pint = \drummode {
  \textMark "INTRO"
  \repeat percent 6 { r1 }
}

% 0:17 - 0:49
% 1:17 - 2:03
pa = \drummode {
  \textMark "A"
  \relative {
    <cymc bd> 8 hh <hh sn> hh <hh bd> <hh bd> <hh sn> hh
  }
  \relative {
    \repeat volta 11 {
      <hh bd> hh <hh sn> hh <hh bd> <hh bd> <hh sn>
      \textMark "x 11"
      hh
    }
  }
}

% 0:49 - 0:52
% 2:03 - 2:07
% 2:38 - 2:40
pafill = \drummode {
  \textMark "fill"
  \relative {
    <hh bd> 8 hh
    <hho sn> 4
    <cymc bd> 8 8
    sn 16 16 16 16
  }
}

% 0:52 - 1:11
% 2:07 - 2:26
pchorus = \drummode {
  \textMark "chorus"
  \relative {
    \repeat percent 3 {
      <cymc bd> 8 8
      <cymc sn> cymc
      <cymc bd> 8 8
      <cymc sn> cymc
    }
    
    <cymc bd> 8 8
    <cymc sn> cymc 16 sn 16
    <cymc bd> 8 8
    <cymc sn> cymc
    
    \break
    
    <cymc bd> 8 8
    <cymc sn> cymc
    <cymc bd> 8 8
    <cymc sn> cymc
    
    <cymc bd> 8 8
    <cymc sn> cymc 16 sn 16
    <cymc bd> 8 8
    <cymc sn> cymc
    
    \break
    
    <cymc bd> 8 8
    <cymc sn> cymc
    <cymc bd> 8 8
    <cymc sn> cymc
  }
}

% 1:11 - 1:17
pchorusfill = \drummode {
  \textMark "fill"
  \relative {
    <cymc sn bd> 8 8 8 8 4
    
    % drag (2 grace notes + primary)
    % \grace { sn 32 32 }
    \grace { sn 16 16 }
    sn 16
    tomh 16
    tomfl 8
  }
}

% 2:26 - 2:29
% 3:06 - 3:09
pchorusfillii = \drummode {
  \textMark "fill"
  \relative {
    <cymc sn bd> 8 8 8 8 4
    r4
  }
}

% 2:29 - 2:37
pabridge = \drummode {
  \textMark "A'"
  \relative {
    \repeat volta 3 {
      <hh bd> 8 hh <hh sn> hh <hh bd> <hh bd> <hh sn>
      \textMark "x 3"
      hh
    }
  }
}

% 2:41 - 3:06
psolo = \drummode {
  \textMark "solo"
  \relative {
    \repeat percent 1 {
      <cymc bd> 8 8
      <cymc sn> cymc
      <cymc bd> 8 8
      <cymc sn> cymc
      
      <cymc bd> 8 8
      <cymc sn> cymc
      <cymc bd> 8 8
      <cymc sn> <cymc bd>
    }
    
    \break
    
    <cymc bd> 8 8
    <cymc sn> 8 8
    <cymc bd> 8 8
    <cymc sn>
    % TODO
    %\grace { sn 32 32 }
    <cymc bd> 8
    
    <cymc bd> 8 8
    r4
    <cymc bd> 8 8
    r4
    
    <cymc bd> 8 8
    r4
    <cymc bd> 8 8
    r8
    <cymc sn> 8
  }
}

% 3:09 TODO

main = {
    \stemUp
    
    \pint    \break
    \pa      \break
    \pafill  \break
    \pchorus
    \pchorusfill \break
    \pa      \break
    \pafill  \break
    \pchorus
    \pchorusfillii \break
    \pabridge %\break
    \pafill  \break
    \psolo      \break
    \pchorusfillii \break
    % TODO
}

\include "./zp-drums.ly"
