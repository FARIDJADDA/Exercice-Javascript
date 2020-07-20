var readline = require("readline-sync");

var chooseNumber = "";

var menu = "\n";
menu += " 1) Bonjour \n";
menu += " 2) Salut \n";
menu += " 3) Coucou\n";
menu += " 0) Quitter";
console.log(menu);

var chooseNumber = "";

while (chooseNumber !== 0) {
  chooseNumber = readline.questionInt("Quel est votre chiffre (1 - 3) : ");
  switch (chooseNumber) {
    case 1:
      console.log("Bonjour");
      break;
    case 2:
      console.log("Salut");
      break;
    case 3:
      console.log("Coucou");
      break;
    case 0:
      console.log("A bientot");
      break;

    default:
      console.log("pas compris");
      break;
  }
}

// while (chooseNumber < 1 || chooseNumber > 3) {
//   var chooseNumber = readline.questionInt("Quel est votre chiffre (1 - 3) : ");
//   if (chooseNumber === 1) {
//     console.log("Bonjour");
//   } else if (chooseNumber === 2) {
//     console.log("Salut");
//   } else if (chooseNumber === 3) {
//     console.log("Coucou");
//   } else if (chooseNumber === 0) {
//     console.log("A biento");
//   } else {
//     console.log("pas compris");
//   }
// }
