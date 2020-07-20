var readline = require("readline-sync");

var moisEnChiffre = readline.questionInt("Quel mois de l'annee voulez-vous ?");

if (moisEnChiffre === 1) {
  console.log(`le ${moisEnChiffre}er mois est Janvier`);
} else if (moisEnChiffre === 2) {
  console.log(`le ${moisEnChiffre}eme mois est Fevrier`);
} else if (moisEnChiffre === 3) {
  console.log(`le ${moisEnChiffre}eme mois est Mars`);
} else if (moisEnChiffre === 4) {
  console.log(`le ${moisEnChiffre}eme mois est Avril`);
} else if (moisEnChiffre === 5) {
  console.log(`le ${moisEnChiffre}eme mois est Mai`);
} else if (moisEnChiffre === 6) {
  console.log(`le ${moisEnChiffre}eme mois est Juin`);
} else if (moisEnChiffre === 7) {
  console.log(`le ${moisEnChiffre}eme mois est Juillet`);
} else if (moisEnChiffre === 8) {
  console.log(`le ${moisEnChiffre}eme mois est Aout`);
} else if (moisEnChiffre === 9) {
  console.log(`le ${moisEnChiffre}eme mois est Septembre`);
} else if (moisEnChiffre === 10) {
  console.log(`le ${moisEnChiffre}eme mois est Octobre`);
} else if (moisEnChiffre === 11) {
  console.log(`le ${moisEnChiffre}eme mois est Novembre`);
} else if (moisEnChiffre === 12) {
  console.log(`le ${moisEnChiffre}eme mois est Decembre`);
}
