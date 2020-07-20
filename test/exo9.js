/*
1) Réaliser un programme permettant de tester les informations relatives à une personne:
  >Age
  >Sexe
  >Ville

2) Mettre en place les 4 cas suivants et afficher un message:
  > Personne agée de Toulouse de sexe Masculin
  > Personne agée de Toulouse de sexe Feminin
  > Personne adulte de Paris ou Marseille de sexe masculin
  > Personne adulte de Paris ou Marseille de sexe masculin
*/

var age = 50;
var sexe = true;
var city = "Paris";

if (age > 70 && city === "Toulouse") {
  // personne agées de Toulouse
  if (sexe) {
    console.log("Personne agée de Toulouse de sexe Masculin");
  } else {
    console.log("Personne agée de Toulouse de sexe Feminin");
  }
} else {
  if (age <= 70 && (city === "Paris" || city === "Marseille")) {
    if (sexe) {
      console.log("Personne adulte de Paris ou Marseille de sexe masculin");
    } else {
      console.log("Personne adulte de Paris ou Marseille de sexe masculin");
    }
  }
}
