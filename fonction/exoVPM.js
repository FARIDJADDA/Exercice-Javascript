var readline = require("readline-sync");

var capitalEmprunt = readline.questionInt("Combien voulez-vous emprunter ? ");
var tauxInteret = readline.questionInt(
  "Quel est le taux propose par votre banquier (par an) ? "
);
var durePret = readline.questionInt(
  "Quel est la duree de l'emprunt en annee ? "
);

var hyphen = "";
for (var i = 0; i <= 10; i++) {
  hyphen += "-";
}

console.log(hyphen);
console.log(
  "Votre mensualité sera de %d par mois",
  monthlyRepayment(capitalEmprunt, tauxInteret, durePret)
);

function monthlyRepayment(owedCapital, interestRate, periodLoan) {
  var i = interestRate / 100 / 12;
  var n = periodLoan * 12;
  var monthly = owedCapital * (i / (1 - Math.pow(1 + i, -n)));
  return Math.round(monthly * 100) / 100;
}
