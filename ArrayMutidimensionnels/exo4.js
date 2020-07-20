var readline = require("readline-sync");

/********************MAIN********************/

// var perso = [
//   ["Tya", 21, false],
//   ["Milo", 30, true],
//   ["Lili", 15, false],
// ];

var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];

var persos = [p1, p2, p3];

displayHyphen();

var choseMenu = -1;
while (choseMenu !== 0) {
  console.log(displayMenu());
  displayHyphen();
  choseMenu = readline.questionInt("Faites votre choix : ");

  switch (choseMenu) {
    case 1:
      displayPersos(persos);
      break;
    case 2:
      var averageStudents = averageAge(persos);
      console.log(
        `La moyenne d'age des personnages est de : ${averageStudents}`
      );
      break;
    case 3:
      var addNewPerso = addPerso();
      persos.push(addNewPerso);
      console.log("Personnage ajouté");
      displayPerso(addNewPerso);
      break;
    case 4:
      if (persos.length > 0) {
        displayPerso(persos[persos.length - 1]);
        var capture = 0;
        while (capture !== 1 && capture !== 2) {
          capture = readline.questionInt(
            "Voulez-vous vraiment supprimer ? (1 : oui / 2 : non)"
          );
        }
        if (capture === 1) {
          persos.pop();
          console.log("Le personnage à bien été supprimé");
        } else {
          console.log("Annulation");
        }
      } else {
        console.log("le tableau est vide");
      }

      break;
    case 5:
      var name = readline.question("Quel est le nom recherche ? ");
      var indice = searchPerso(name, persos);
      if (indice !== -1) {
        displayPerso(persos[indice]);
      } else {
        console.log(`Le personnage ayant le nom : ${name} n'existe pas . `);
      }

      break;
    case 0:
      break;

    default:
      console.log("cas non prit en compte");
      break;
  }
}

/******************FUNCTION******************/

/**
 * Function permettant d'afficher le menu
 */

function displayMenu() {
  var menu = "1/ Afficher les personnages\n";
  menu += "2/ Calcule de la moyenne d'Age\n";
  menu += "3/ Ajouter un personnage\n";
  menu += "4/ Supprimer un personnage\n";
  menu += "5/ Afficher un personnage\n";
  menu += "0/ Quitter\n";
  return menu;
}

/**
 * Function permettant d'afficher les *
 */

function displayHyphen() {
  var hyphen = "";
  for (var i = 0; i < 56; i++) {
    hyphen += "*";
  }
  return console.log(hyphen);
}

/**
 * Fonction qui permet d'afficher une liste de personnages
 * @param{Array} tab tab : tableau de personnages
 */

function displayPersos(tab) {
  for (var i = 0; i < tab.length; i++) {
    console.log("****************");
    console.log(`Perso ${i + 1} :`);
    displayPerso(tab[i]);
  }
}

/**
 * Fuction qui permer d'affciher un personnage
 * @param {Array} tab tab : tableau contenant les information du personnage
 */

function displayPerso(tab) {
  console.log(`Nom : ${tab[0]}`);
  console.log(`Age : ${tab[1]}`);
  console.log(`Sexe : ${tab[2] ? "Homme" : "Femme"}`);
}

/**
 * Function qui permet de calculer la moyenne d'age des personnages
 * @param {Array} students students : tableau de personnages
 * @return {number} retourne la moyenne d'age
 */

function averageAge(students) {
  var total = 0;
  for (var cpt = 0; cpt < students.length; cpt++) {
    total += students[cpt][1];
  }
  return total / students.length;
}
/**
 * Fonction permettatn de créer un nouveau personnage
 * @return {Array} retourne un tableu contenant les information du nouveau personnage
 */

function addPerso() {
  var newPerso = [];
  newPerso.push(readline.question("Quel est le nom ?"));
  newPerso.push(readline.questionInt(`Quel est l'age ?`));

  var sexInt = 0;
  while (sexInt !== 1 && sexInt !== 2) {
    sexInt += readline.questionInt(
      "Quel est le sexe ? (1 : homme / 2 : femme) "
    ); // on sort quand sexInt = 1 ou = 2
  }
  if (sexInt === 1) {
    newPerso.push(true);
  } else {
    newPerso.push(false);
  }
  return newPerso;
}

/**
 * Fonction qui permet de rechercher un personnage dans le tableau
 * @param {string} name
 * @param {Array} tab
 */

function searchPerso(name, tab) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i][0].toLowerCase() === name.toLowerCase()) {
      return i;
    }
  }
  return -1;
}
