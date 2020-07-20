var readline = require("readline-sync");

/* MAIN */

var chiffre1 = 2;

var chiffre2 = readline.questionInt("Quel nombre voulez-vous ?");
ajoute5(chiffre1);
ajoute5(chiffre2);

/* Function */

function ajoute5(nombreEnEntre) {
  var result = 5 + nombreEnEntre;
  console.log(`Le resultat est ${result}`);
}
