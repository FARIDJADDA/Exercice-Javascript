/*
    > Ecrire un programme qui va afficher 
    la factorielle se rapprochant au plus prés 
    d'un nombre saisi au clavier,

  > Affichage de la console 
      Quel nombre voulez-vous ? :30                               
    2eme passage - resultat : 1
    3eme passage - resultat : 2
    4eme passage - resultat : 6
    5eme passage - resultat : 24
    6eme passage - resultat : 120
 */

var readline = require("readline-sync");

var chooseFactorial = readline.questionInt("Quel nombre voulez-vous ? :");

var resultFactorial = 1;
var i = 1;

while (resultFactorial < chooseFactorial) {
  resultFactorial = resultFactorial * i; // resultat du Factorial
  i++;
  console.log(`${i}eme passage - resultat : ${resultFactorial}`);
}
