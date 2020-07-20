var readline = require("readline-sync");

var parcCar = require("./gestionCar");

/**
 * ******MAIN******
 */

while (choseMenu !== 0) {
  displayMenu();
  var choseMenu = readline.questionInt("Quel est votre choix : ");
  switch (choseMenu) {
    case 1:
      console.log("**********************");
      parcCar.displayParc();
      console.log("**********************");
      break;
    case 2:
      parcCar.displayCar();
      break;
    case 3:
      parcCar.modifyParc();
      break;
    case 4:
      var captureItems = readline.question("Saisir le modele à supprimer : ");
      parcCar.deletModel(captureItems);
      break;
    case 0:
      console.log("Annulation");
      break;

    default:
      console.log("cas non pris en compte");
      break;
  }
}

/**
 * ******FUNTION*******
 */

function displayMenu() {
  var menu = "1/ Afficher le parc\n";
  menu += "2/ Afficher mes voitures\n";
  menu += "3/ Modifier les informations du parc\n";
  menu += "4/ Supprimer un model\n";

  menu += "0/ Quitter\n";
  console.log(menu);
}
