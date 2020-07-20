var readline = require("readline-sync");

var number = [4, 8, 12, 16];
var choseDivider = readline.questionInt("Quel est le diviseur ? ");

// function verifyIsDivider(tab, divider) {
//   for (var i = 0; i < tab.length; i++) {
//     if (tab[i] % divider !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// var isDivider = verifyIsDivider(number, choseDivider);
// if (isDivider) {
//   console.log(
//     `Le tableau contient que des valeurs divisible par ${choseDivider}`
//   );
// } else {
//   console.log(
//     `Le tableau ne contient que des valeurs pas divisible par ${choseDivider}`
//   );
// }

// function verifyIfDivider(tab, divider) {
//   for (var i = 0; i < tab.length; i++) {
//     if (tab[i] % divider !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

// var isDivider = verifyIfDivider(number, choseDivider);
// if (isDivider) {
//   console.log(
//     `Tableau contenant que des valeurs divisible par ${choseDivider}`
//   );
// } else {
//   console.log(
//     `Tableau ne contient pas que des valeurs divisible par ${choseDivider}`
//   );
// }

function verifyIsDivider(tab, divider) {
  for (var i = 0; i < tab.length; i++) {
    if (tab[i] % divider !== 0) {
      return false;
    }
  }
  return true;
}

var isDivider = verifyIsDivider(number, choseDivider);
if (isDivider === true) {
  console.log(`Divisible par ${choseDivider}`);
} else {
  console.log(`Pas divisible par ${choseDivider}`);
}
