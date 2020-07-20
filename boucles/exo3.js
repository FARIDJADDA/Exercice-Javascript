/*
> Ecrire un algorithme qui permet d'afficher la somme des 100 premiers nombres pairs :
> 2+4+6...
> Afficherc dans la console :
    Le somme des 100 premiers nombres pair est égale à : 10100
*/

var result = 0; // contient l'évolution du resutat

//*******SANS*MODULO******/
// for (var i = 0; i <= 200; i = i + 2) {
//   result += i;
// }

//*******AVEC*MODULO******/

for (var i = 0; i <= 200; i = i + 1) {
  // est-ce que i est pair ou non (modulo)
  if (1 % 2 === 0) {
    result += i;
  }
}
console.log(`La somme des 100 premiers nombres pair est gale à : ${result}`);
