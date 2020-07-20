var p1 = ["Tya", 21, false];
var p2 = ["Milo", 30, true];
var p3 = ["Lili", 15, false];

var persos = [p1, p2, p3];

for (var i = 0; i < persos.length; i++) {
  console.log("****************");
  console.log(`Perso ${i + 1} : `);
  displayPerso(persos[i]);
}

function displayPerso(tab) {
  console.log(`Nom : ${tab[0]}`);
  console.log(`Age : ${tab[1]}`);
  console.log(`Sexe : ${tab[2] ? "Homme" : "Femme"}`);
}
