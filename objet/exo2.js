var readline = require("readline-sync");

var persos = [];
// for (var i = 0; i < 3; i++) {
//   var perso = generatePerso();
//   persos.push(perso);
// }

var choseMenu = -1;
while (choseMenu !== 0) {
  console.log(displayHyphen());
  displayMenu();
  console.log(displayHyphen());
  choseMenu = readline.questionInt(" Quel est votre choix : ");
  switch (choseMenu) {
    case 1:
      for (var i = 0; i < persos.length; i++) {
        console.log("****************");
        displayPerso(persos[i]);
      }
      break;
    case 2:
      var p = generatePerso();
      persos.push(p);
      break;
    case 0:
      console.log("A bientot ");

      break;

    default:
      console.log("Cas non pris en compte .");
      break;
  }
}

/*
 * FUNCTION
 */

function displayHyphen() {
  var hyphen = "";
  for (var i = 0; i < 58; i++) {
    hyphen += "*";
  }
  return hyphen;
}

function displayMenu() {
  var menu = "1/ Afficher les personnages\n";
  menu += "2/ Ajouter un personnages \n";
  menu += "0/ Quitter";
  console.log(menu);
}

function generatePerso() {
  var persos = {
    name: readline.question("Quel est le nom ? "),
    age: readline.questionInt(`Quel est l'ag ?`),
  };
  return persos;
}

function displayPerso(pers) {
  for (var info in pers) {
    console.log(`${info} : ${pers[info]}`);
  }
}
