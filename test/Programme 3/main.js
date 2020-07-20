// var sentence = "Bonjour";
// sentence += " Toto, \n"; // \n = retour à la ligne
// sentence += " comment tu vas?"; // sentence = sentence + ""

// console.log(sentence);

console.log("**********EXERCICE 1************* */");

var brand = "Lambo";
var model = "Riyas";
var door = 3;
var year = 2002;

var date = new Date();
var actualYear = date.getFullYear();

var age = actualYear - year;

console.log(`Marque: ${brand}`);
console.log(`Modèle: ${model}`);
console.log(`la voiture dispose de ${door} portes`);
console.log(`le voiture date de ${year}, elle a donc ${age} ans`);

console.log("**********EXERCICE 2************* */");

var name = "Marcs";

// var note1 = 12;
// var note2 = 14;
// var note3 = 16;
var average = 12;
average += 14;
average += 16;
average /= 3;

// var average = (note1 + note2 + note3) / 3;

console.log(`La moyenne de ${name} est de ${average}`);

console.log("**********EXERCICE 3************* */");

var name1 = "tya";
var age1 = 30;
var sexe = false;
var poid = 60;
var eyesColor = "bleue";

console.log(
  `${name1} à ${age1} ans,c'est une ${
    sexe === false ? "fille" : "homme"
  } elle pèse ${poid} kilos et à les yeux ${eyesColor}`
);

name1 = "Milo";
age1 = 31;
sexe = true;
poid = 70;
eyesColor = "marrons";

console.log(
  `${name1} à ${age1} ans,c'est un  ${
    sexe === false ? "fille" : "homme"
  } il pèse ${poid} kilos et à les yeux ${eyesColor}`
);
