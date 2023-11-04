Pattern "pattern"
  = things:(Thing+) {
    return things.filter((thing) => Boolean(thing));
  }

Thing "thing"
  = Parallel
  / Item
  / LineComment

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
  / SN
  / HH
  / R

BD = "bd" { return 'bd'; }
SN = "sn" { return 'sn'; }
HH = "hh" { return 'hh'; }

R  = "r" { return 'r'; }

Duration "duration"
  = _ [0-9]+ { return parseInt(text(), 10); }

LineComment "line_comment"
  = _ "%" [^\n]+ _ { return undefined; }

_ "whitespace"
  = [ \t\n\r]*
