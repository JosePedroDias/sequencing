/*
Simple Arithmetics Grammar

Accepts expressions like "2 * (3 + 4)" and computes their value.

this:
2 * (3 + 4)

should return:
14
*/

Expression
  = head:Term tail:(_ ("+" / "-") _ Term)* {
      return tail.reduce((result, [_, op, __, num]) => {
        if (op === "+") { return result + num; }
        if (op === "-") { return result - num; }
      }, head);
    }

Term
  = head:Factor tail:(_ ("*" / "/") _ Factor)* {
      return tail.reduce((result, [_, op, __, num]) => {
        if (op === "*") { return result * num; }
        if (op === "/") { return result / num; }
      }, head);
    }

Factor
  = "(" _ expr:Expression _ ")" { return expr; }
  / Integer

Integer "integer"
  = _ [0-9]+ { return parseInt(text(), 10); }

_ "whitespace"
  = [ \t\n\r]*
