var readline = require("readline-sync");

var moisEnLettre = readline.question(
  "Quel numero du mois de l'annee voulez-vous ?"
);

if (moisEnLettre === "Janvier") {
  console.log(1);
} else if (moisEnLettre === "Fevrier") {
  console.log(2);
} else if (moisEnLettre === "Mars") {
  console.log(3);
} else if (moisEnLettre === "Avril") {
  console.log(4);
} else if (moisEnLettre === "Mai") {
  console.log(5);
} else if (moisEnLettre === "Juin") {
  console.log(6);
} else if (moisEnLettre === "Juillet") {
  console.log(7);
} else if (moisEnLettre === "Aout") {
  console.log(8);
} else if (moisEnLettre === "Septembre") {
  console.log(9);
} else if (moisEnLettre === "Octobre") {
  console.log(10);
} else if (moisEnLettre === "Novembre") {
  console.log(11);
} else if (moisEnLettre === "Decembre") {
  console.log(12);
}
