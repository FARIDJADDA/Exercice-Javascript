/*

> Créer le menu d'une application qui permettra :

  > Ajouter un joueur
  > Modifier les informations d'un joueur 
  > Supprimer un joueur

  > Dans chacun des cas ,nous réaliserons simplement un affichage d'une phrase comme :
  "vous avez sélectionné l'ajout d'un joueur"
  > Vous ajouterez une saisie clavier permettant de séléctionner l'un des 3 cas du menu
  > Voici le résiltat attendu

  */

var readline = require("readline-sync");

var menu = "1/ Ajouter un joueur\n";
menu += "2/ Modifier un joueur\n";
menu += "3/ Supprimer un joueur\n";
menu += "0/ Quitter le programme";
console.log(menu);

var selectionMenu = readline.questionInt("Faites un choix :");

switch (selectionMenu) {
  case 1:
    console.log("vous avez sélectionné l'ajout d'un joueur");
    break;
  case 2:
    console.log("vous avez modifie un joueur");
    break;
  case 3:
    console.log("vous avez supprime un joueur");
    break;
  case 0:
    console.log("A bientot");
    break;

  default:
    console.log("erreur de saisi veuillez recommencer");
    break;
}
