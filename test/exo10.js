/*
> Nombre saisi au clavier modulo 2 estp paire : oui -> pair / impair
> Nombre saisi au clavier est divisible par 4 : oui -> divisible par 4 / Non divisible par 4
*/

var readline = require("readline-sync");

var age = 20;
var sport = false;
var sexe = false;
var numberKeyPair = true;
var numberKeyFour = true;

console.log(age < 18 ? "Mineur" : "Majeur");
console.log(sport ? "bien" : "Devrait faire du sport");
console.log(sexe ? "Femme" : "Homme");

var saisie1 = readline.questionInt("choisir un nombre : ");

var parite = saisie1 % 2 === 0 ? "pair" : "impair";

console.log(`Parite: ${parite}`);

var saisie2 = readline.questionInt("choisir un 2eme nombre : ");

var divise4 = saisie2 % 4 === 0 ? "divisible par 4" : "non divisible par 4";

console.log(divise4);
