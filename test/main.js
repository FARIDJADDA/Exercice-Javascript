console.log("******EXERCICE*1*****");

var yearOfConstruction = 1998;
var yearConform = 2000;

var pollutingCar = "Voiture polluante";
var noPullutingCar = "Voiture conforme";

if (yearOfConstruction <= yearConform) {
  console.log(pollutingCar);
} else {
  console.log(noPullutingCar);
}

console.log("******EXERCICE*2*****");

var sexe = true;

if (sexe) {
  console.log("Je suis une Femme");
} else {
  console.log("Je suis un Homme");
}

console.log("******EXERCICE*3*****");

var user = "Marvin";

if (user.substr(0, 1) === "M") {
  console.log("Bravo");
}

console.log("******EXERCICE*4*****");

var level = 7;

if (level < 3) {
  console.log("Mage");
} else if (level < 5) {
  console.log("Archer");
} else {
  console.log("Guerrier");
}
