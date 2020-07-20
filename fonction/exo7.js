var readline = require("readline-sync");

var firstNumber = readline.questionInt("Premier nombre : ");
var secondNumber = readline.questionInt("Deuxieme nombre : ");
var thirdNumber = readline.questionInt("Troisieme nombre : ");
var fourthNumber = readline.questionInt("Quatrieme nombre : ");

var averageAll = average(firstNumber, secondNumber, thirdNumber, fourthNumber);

console.log(
  `La moyenne des 4 nombres saisis au clavier est de : ${averageAll}`
);

function average(n1, n2, n3, n4) {
  return (n1 + n2 + n3 + n4) / 4;
}
