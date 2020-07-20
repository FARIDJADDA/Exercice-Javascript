/*
> Afficher ce resultat dans la console:
  1 * 9 = 9 
  2 * 9 = 18
  3 * 9 = 27
  4 * 9 = 36
  5 * 9 = 45
  6 * 9 = 54
  7 * 9 = 63
  8 * 9 = 72
  9 * 9 = 81
  10 * 9 = 90
 */

var readline = require("readline-sync");

var tableMultiplication = readline.questionInt(
  "Choisir une table de multiplication : "
);

for (var i = 1; i <= 10; i = i + 1) {
  console.log(`${i} * ${tableMultiplication} = ${i * tableMultiplication}`);
}
