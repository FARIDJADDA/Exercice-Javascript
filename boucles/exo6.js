/*
> Ecrire un algorithme qui permet d'afficher 5 lignes de 20 tirets
\\\\\\\\\\\\\\\\\\\\
////////////////////
\\\\\\\\\\\\\\\\\\\\
////////////////////
\\\\\\\\\\\\\\\\\\\\
*/

var slash = "";
var backSlash = "";

for (var i = 1; i <= 20; i++) {
  slash += "/";
  backSlash += "\\";
}

for (var i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log(slash);
  } else {
    console.log(backSlash);
  }
}

// var slash = "";
// var backSlash = "";

// for (var i = 1; i <= 20; i++) {
//   slash += "/";
// }
// for (var i = 1; i <= 20; i++) {
//   backSlash += "\\";
// }
// for (var i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log(slash);
//   } else {
//     console.log(backSlash);
//   }
// }
