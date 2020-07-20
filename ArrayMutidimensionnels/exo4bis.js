var readline = require("readline-sync");

var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];

var persos = [p1, p2, p3];

while (choseMenu !== 0) {
  displayHyphen();
  console.log(displayMenu());
  var choseMenu = readline.questionInt("Faite votre choix : ");
  switch (choseMenu) {
    case 1:
      for (var i = 0; i < persos.length; i++) {
        console.log(" ***************");
        displayPerso(persos[i]);
      }
      break;
    case 2:
      console.log(
        `La moyenne d'age des personnages est de : ${averageAge(persos)}`
      );
      break;
    case 3:
      var addPerso = addNewPerso();
      persos.push(addPerso);
      console.log("Le personnage à été ajouté");
      displayPerso(addPerso);

      break;
    case 4:
      displayPerso(persos[persos.length - 1]);
      var capture = 0;
      while (capture !== 1 && capture !== 2) {
        capture += readline.questionInt(
          "Voulez-vous vraiment supprimer ce personnage ? ( 1 - oui / 2 - non ) : "
        );
      }
      if (capture === 1) {
        persos.pop();
        console.log("Le dernier personnage ajouté a été supprimé");
      } else {
        console.log("Annulation");
      }
      break;
    case 5:
      var nameFind = readline.question("Quel est le nom : ");
      var indice = searchPerso(nameFind, persos);

      if (indice !== -1) {
        displayPerso(persos[indice]);
      } else {
        console.log(`Ce personnage n'existe pas`);
      }
      break;

    default:
      console.log("cas non pris en compte");
      break;
  }
}

/*
FUNCTIONS
*/

function displayHyphen() {
  var hyphen = "";
  for (var i = 0; i < 56; i++) {
    hyphen += "*";
  }
  return console.log(hyphen);
}

function displayMenu() {
  var menu = "1/ Afficher les personnages\n";
  menu += "2/ Calcule de la moyenne d'Age\n";
  menu += "3/ Ajouter un personnage\n";
  menu += "4/ Supprimer un personnage\n";
  menu += "5/ Afficher un personnage\n";
  menu += "0/ Quitter\n";
  return menu;
}

function displayPerso(tab) {
  console.log(`Nom: ${tab[0]}`);
  console.log(`Age: ${tab[1]}`);
  console.log(`sexe: ${tab[2] ? "Homme" : "Femme"}`);
}

function averageAge(tab) {
  var result = 0;
  for (var cpt = 0; cpt < tab.length; cpt++) {
    result += tab[cpt][1];
  }
  return result / tab.length;
}

function addNewPerso() {
  var newPerso = [];
  newPerso.push(readline.question("Quel est le nom : "));
  newPerso.push(readline.question(`Quel est l'age : `));

  var sexInt = 0;
  while (sexInt !== 1 && sexInt !== 2) {
    sexInt += readline.questionInt(
      `Quel est le sex ( 1 - homme / 2 - femme ) : `
    );
  }

  if (sexInt === 1) {
    newPerso.push(true);
  } else {
    newPerso.push(false);
  }
  return newPerso;
}

function searchPerso(name, tab) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i][0].toLowerCase() === name.toLowerCase()) {
      return i; // i = indice du perso retrouvé
    }
  }
  return -1;
}
