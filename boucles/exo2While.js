var readline = require("readline-sync");

var chooseNumber = "";

while (chooseNumber < 1 || chooseNumber > 5) {
  chooseNumber = readline.questionInt(
    "Veuillez saisir un chiffre entre 1 et 5 :"
  );
}
console.log(`Vous avez choisie ${chooseNumber}`);

// do {
//   chooseNumber = readline.questionInt(
//     "Veuillez saisir un chiffre entre 1 et 5 :"
//   );
// } while (chooseNumber < 1 || chooseNumber > 5);
// console.log(`Vous avez choisie ${chooseNumber}`);
