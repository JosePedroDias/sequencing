\version "2.24.2"

doc_title = "quatro"
page_no = "4"
bpm = 60
timezp = 4/4

pat_o = \drummode {
    r1
}

pat_i = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 hh <hh sn> hh
}

pat_ii = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh
}

pat_iii = \drummode {
    <hh bd>8 hh <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh16 bd
}

pat_iv = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn> hh16 bd
}

pat_v = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh8
}

pat_vi = \drummode {
    <hh bd>16 bd hh8 <hh sn> hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh bd
}

pat_vii = \drummode {
    %1                   %2               %3               %4
    <hh bd>16 bd hh bd <hh sn>8 hh16 bd <hh bd>8 <hh bd> <hh sn>16 bd hh bd
}

pat_viii = \drummode {
    %1                   %2               %3                  %4
    <hh bd>16 bd hh bd <hh sn>8 hh16 bd <hh bd> sn <hh bd>8 <hh sn>16 bd hh bd
}

main = {
    \stemUp

    \pat_i    \section
    \pat_ii   \section

    \break

    \pat_iii  \section
    \pat_iv   \section

    \break

    \pat_v    \section
    \pat_vi   \section

    \break

    \pat_vii  \section
    \pat_viii \section

    \repeat volta 2 {
        %\pat_viii
    }
    %r2  r2
    %sn8^"L" sn^"R"

    \pageTurn

    %\pat_o
}

\include "./zp-drums.ly"
