var firstName = "Gaston";
var lastName = "Matthieu";

console.log("******Avant correction******");
console.log(`Prenom: ${firstName}`);
console.log(`Nom: ${lastName}`);
var tmp = firstName; // tmp = Gaston, prenom = Gaston, nom = Matthieu
firstName = lastName; // tmp = Gaston, prenom = Matthieu, nom = Matthieu
lastName = tmp; // tmp = Gaston , Prenom = Matthieur, nom = Gaston

console.log("******Apres correction******");
console.log(`Prenom: ${firstName}`);
console.log(`Nom: ${lastName}`);
