var readline = require("readline-sync");
var number = readline.questionInt("Quel est le nombre ? ");
var divider = readline.questionInt("Quel est le diviseur ? ");

function verifyNumber(number, divider) {
  if (number % divider === 0) {
    console.log(`le nombre ${number} est divisible par ${divider}`);
  } else {
    console.log(`le nombre ${number} n'est pas divisible par ${divider} `);
  }
}

verifyNumber(number, divider);
