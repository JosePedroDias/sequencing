Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce((result, [_, op, __, num]) => {
        if (op === "+") { return ['expr', result, '+', num]; }
        if (op === "-") { return ['expr', result, '-', num]; }
      }, head);
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce((result, [_, op, __, num]) => {
        if (op === "*") { return ['term', result, '*', num]; }
        if (op === "/") { return ['term', result, '/', num]; }
      }, head);
    }

Factor
  = "(" _ expr:Expression _ ")" { return ['factor', expr]; }
  / Integer

Integer "integer"
  = _ [0-9]+ { return ['integer', parseInt(text(), 10)]; }

_ "whitespace"
  = [ \t\n\r]*
