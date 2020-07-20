var readline = require("readline-sync");

/*
 **********************MAIN**************************
 */

var numberTab = [];

displayMenu();

while (choseMenu !== 0) {
  var choseMenu = readline.questionInt("Quel est votre choix ? ");

  switch (choseMenu) {
    case 1:
      displayTab(numberTab);
      break;
    case 2:
      var average = averageTab(numberTab);
      console.log(`La moyenne est de ${average}`);
      break;
    case 3:
      numberTab = enterTab();
      break;
    case 0:
      console.log("A bientot");
      break;
    default:
      console.log("Cas non traité");
      break;
  }
}

/*
 *********************FUNCTION************************
 */

function enterTab() {
  var numberOfNote = readline.questionInt("Combien de note voulez-vous ? ");

  var number = [];
  for (var i = 1; i <= numberOfNote; i++) {
    number.push(readline.questionInt(`Saisir le note numero ${i} : `));
  }
  return number;
}

function displayMenu() {
  var menu = "1/ Afficher tableau\n";
  menu += "2/ Calculer la moyenne\n";
  menu += "3/ Ajouter votre tableau\n";
  menu += "0/ Sortir\n";
  return console.log(menu);
}

function displayTab(tab) {
  for (let cpt = 0; cpt < tab.length; cpt++) {
    console.log(`indice : ${cpt} - valeur : ${tab[cpt]}`);
  }
}

function averageTab(tab) {
  var result = 0;
  for (var i = 0; i < tab.length; i++) {
    result += tab[i];
  }
  return result / tab.length;
}
