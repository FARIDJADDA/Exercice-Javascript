/*
> Afficher ce resultat dans la console:
  10 * 4 = 40
  9 * 4 = 36
  8 * 4 = 32
  7 * 4 = 28
  6 * 4 = 24
  5 * 4 = 20
  4 * 4 = 16
  3 * 4 = 12
  2 * 4 = 8
  1 * 4 = 4
*/

var readline = require("readline-sync");

var tableMultiplication = readline.questionInt(
  "Choisir une table de multiplication : "
);

for (var i = 10; i >= 1; i--) {
  console.log(`${i} * ${tableMultiplication} = ${i * tableMultiplication}`);
}
