var readline = require("readline-sync");

var chosenumber = readline.questionInt("Quel est votre nombre ?");

function numberPair(number) {
  if (number % 2 === 0) {
    console.log(`Le nombre${number} est pair`);
  } else {
    console.log(`Le nombre ${number} est impair`);
  }
}

numberPair(chosenumber);
