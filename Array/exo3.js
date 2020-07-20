var readline = require("readline-sync");

var numberOfNote = readline.questionInt("Combien de note voulez-vous ? ");

var number = [];
for (var i = 1; i <= numberOfNote; i++) {
  number.push(readline.questionInt(`Saisir le note numero ${i} : `));
}

function average(tab) {
  var result = 0;
  for (var cpt = 0; cpt <= tab.length - 1; cpt++) {
    result += tab[cpt];
  }
  var averageNumber = result / tab.length;
  return averageNumber;
}
console.log(`La moyenne est de ${Math.round(average(number) * 10) / 10}`);
