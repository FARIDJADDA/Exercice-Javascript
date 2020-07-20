var readline = require("readline-sync");

var numberChoose = readline.questionInt("Nombre à diviser : ");
var dividerChoose = readline.questionInt("Le diviseur : ");

if (isDivider(numberChoose, dividerChoose)) {
  console.log(`le nombre ${numberChoose} est divisible par ${dividerChoose}`);
} else {
  console.log(
    `Le nombre ${numberChoose} n'est pas divisible par ${dividerChoose}`
  );
}

function isDivider(number, divider) {
  return number % divider === 0;
}
