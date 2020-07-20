var readline = require("readline-sync");

// *******MAIN*******
var whatChoice = -1;
while (whatChoice !== 0) {
  menu();
  whatChoice = readline.questionInt("Quel est votre choix ? ");
  switch (whatChoice) {
    case 1:
      console.log("calcule de la factorielle"); // Factorielle
      var number = readline.questionInt("Quel nombre voulez-vous ?");
      var factorial = calculatedFactorial(number);
      console.log(`La factorielle de ${number} est = ${factorial}`);
      break;
    case 2:
      console.log("Calcule de la somme "); // Somme
      var number = readline.questionInt("Quel nombre voulez-vous ?");
      var somme = calculatedSomme(number);
      console.log(`La somme des ${number} est = ${somme}`);

      break;
    case 0:
      console.log("A bientot"); // Quitter
      break;

    default:
      console.log("Cas non prit en compte");
      break;
  }
}

// var whatNumber = readline.questionInt("Quel Nombre voulez-vous ? ");

// ******FUNCTION******
function menu() {
  var txt = "1/ Factorielle\n";
  txt += "2/ Somme\n";
  txt += "0/ Quitter\n";
  console.log(txt);
}

function calculatedFactorial(number) {
  var result = 1;
  for (var i = 1; i <= number; i++) {
    result *= i; // resultat = resultat * i
  }
  return result;
}
function calculatedSomme(number) {
  var result = 0;
  for (i = 1; i <= number; i++) {
    // console.log(`ici : ${number}`);
    result += i;
  }
  return result;
}

var stars = "";
for (var i = 0; i <= 15; i++) {
  stars += "*";
}

console.log(stars);
