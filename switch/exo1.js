var readline = require("readline-sync");

var moisEnLettre = readline.questionInt(
  "Quel numero du mois de l'annee voulez-vous ?"
);

switch (moisEnLettre) {
  case 1:
    console.log("Janvier");
    break;
  case 2:
    console.log("Fevrier");
    break;
  case 3:
    console.log("Mars");
    break;
  case 4:
    console.log("Avril");
    break;
  case 5:
    console.log("Mai");
    break;
  case 6:
    console.log("Juin");
    break;
  case 7:
    console.log("Juillet");
    break;
  case 8:
    console.log("Aout");
    break;
  case 9:
    console.log("Septembre");
    break;
  case 10:
    console.log("Octobre");
    break;
  case 11:
    console.log("Novembre");
    break;
  case 12:
    console.log("ecembre");
    break;

  default:
    console.log("aucune donné traitées");
    break;
}

var moisEnChiffre = readline.question("Quel mois de l'annee voulez vous?");

switch (moisEnChiffre) {
  case "janvier":
  case "Janvier":
    console.log(1);
    break;

  case "Fevrier":
  case "fevrier":
    console.log(2);
    break;
  case "Mars":
  case "mars":
    console.log(3);
    break;
  case "Avril":
  case "avril":
    console.log(4);
    break;
  case "Mai":
  case "mai":
    console.log(5);
    break;
  case "Juin":
  case "juin":
    console.log(6);
    break;
  case "Juillet":
  case "juillet":
    console.log(7);
    break;
  case "Aout":
  case "aout":
    console.log(8);
    break;
  case "Septembre":
  case "septembre":
    console.log(9);
    break;
  case "Octobre":
  case "octobre":
    console.log(10);
    break;
  case "Novembre":
  case "novembre":
    console.log(11);
    break;
  case "Decembre":
  case "decembre":
    console.log(12);
    break;

  default:
    console.log("aucune donne traitees");
    break;
}
