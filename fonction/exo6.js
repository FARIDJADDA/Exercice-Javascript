var readline = require("readline-sync");

var firstNumber = readline.questionInt("Quel est ton 1er nombre ? ");
var secondNumber = readline.questionInt("Quel est ton 2eme nombre ? ");
var thirdNumber = readline.questionInt("Quel est ton 3eme nombre ? ");
var fourthNumber = readline.questionInt("Quel est ton 4eme nombre ? ");

function average(n1, n2, n3, n4) {
  var resultAverage = (n1 + n2 + n3 + n4) / 4;
  console.log(
    `La moyenne des 4 nombres saisis au clavier est de : ${resultAverage}`
  );
}

average(firstNumber, secondNumber, thirdNumber, fourthNumber);
