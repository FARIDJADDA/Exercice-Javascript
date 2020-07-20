/*
> Ecrire un algorithme qui permet d'afficher la factorielle (symbole mathématique: !)d'un nombre saisi au clavier
> Exemple:
  > !3 = 1 * 2 * 3
  > !4 = 1 * 2 * 3 * 4 
  > !7 = 1 * 2 * 3 * 4 * 5 * 6 * 7 

  resultat pour 7 :
        Choisir un nombre : 7
      1er passage - total = 1   
      2eme passage - total =2   
      3eme passage - total =6   
      4eme passage - total =24  
      5eme passage - total =120 
      6eme passage - total =720 
      7eme passage - total =5040
*/

var readline = require("readline-sync");

var numberFactorial = readline.questionInt("Choisir un nombre : ");

var result = 1;

for (var i = 1; i <= numberFactorial; i = i + 1) {
  result = result * i;
  if (i !== 1) {
    console.log(`${i}eme passage - total =${result}`);
  } else {
    console.log(`${i}er passage - total = ${result}`);
  }
}
