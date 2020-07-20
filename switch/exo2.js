/*
> Ecrire un programme permettant de réaliser les affichages suivants, en fonction d'un âge saisi au clavier

16: "Mineur"
17: "Mineur";
18: "Majeur";
19: "Majeur";
20: "Majeur";
21: "Adulte";
22: "Adulte";
23: "Adulte";
24: "Adulte";
Autre: âge non pris en compte

> A) en utilisant un switch case
> B) en utilisant des tests "if"
*/

var readline = require("readline-sync");

// ************SWITCH*CASE**************

var saisie1 = readline.questionInt("Quel est ton age ? (16ans - 24ans)");

switch (saisie1) {
  case 16:
  case 17:
    console.log("Mineur");
    break;
  case 18:
  case 19:
  case 20:
    console.log("Majeur");
    break;
  case 21:
  case 22:
  case 23:
  case 24:
    console.log("Adulte");
    break;

  default:
    console.log("aucune donne saisie");
    break;
}

// *************TESTS*IF******************

var saisie2 = readline.questionInt("Quel est ton age ? (16 - 24)");

if (saisie2 < 18) {
  console.log("Mineur");
} else if (saisie2 >= 18 && saisie2 <= 20) {
  console.log("Majeur");
} else if (saisie2 > 20 && saisie2 <= 24) {
  console.log("Adulte");
}
