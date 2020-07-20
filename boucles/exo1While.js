var readline = require("readline-sync");

var tableMultiplication = readline.questionInt(
  "Choisir une table de multiplication : "
);

var i = 0;

while (i < 10) {
  i++;
  console.log(`${i} * ${tableMultiplication} = ${i * tableMultiplication}`);
}
