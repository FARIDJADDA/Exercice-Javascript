/*
> Ecrire un algorithme quui permet d'afficher 5 lignes de 20 tirets
-------------
-------------
-------------
-------------
-------------
*/

var tiret = "";

for (var i = 1; i <= 20; i++) {
  tiret += "-";
}
for (var i = 1; i <= 5; i++) {
  console.log(tiret);
}
