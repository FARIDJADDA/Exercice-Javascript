var p1 = {
  name: "Toto",
  Note1: 15,
  Note2: 13,
  Note3: 10,
};
var p2 = {
  name: "Titi",
  Note1: 12,
  Note2: 17,
  Note3: 16,
};
var p3 = {
  name: "Tata",
  Note1: 10,
  Note2: 8,
  Note3: 12,
};

var persos = [p1, p2, p3];

for (var i = 0; i < persos.length; i++) {
  var averageNote = averageStudent(persos[i]);
  console.log(
    `La moyenne de ${persos[i].name} est : ${Math.round(averageNote * 10) / 10}`
  );
}

function averageStudent(perso) {
  var average = 0;
  var nbNote = 0;
  for (var element in perso) {
    if (typeof perso[element] === "number") {
      average += perso[element];
      nbNote++;
    }
  }
  return average / nbNote;
}
