Pattern "pattern"
  = Thing+

Thing "thing"
  = Parallel
  / Item

Parallel "parallel"
  = "<" it:(Item+) ">" d:(Duration?) _ {
    return ['parallel', it, d];
  }

Item "item"
  = p:Pitch d:(Duration?) _ {
    return ['item', p, d];
  }

/* PitchOrRest "pitch or rest"
  = Pitch
  / R */

Pitch "pitch"
  = BD
  / SD
  / HH
  / R

BD = "bd" { return 'bd'; }
SD = "sd" { return 'sd'; }
HH = "hh" { return 'hh'; }

R  = "r" { return 'r'; }

Duration "duration"
  = _ [0-9]+ { return parseInt(text(), 10); }

_ "whitespace"
  = [ \t\n\r]*
