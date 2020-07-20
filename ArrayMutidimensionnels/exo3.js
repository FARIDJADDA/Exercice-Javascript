var students = [
  ["Toto", 4, 17],
  ["Titi", 11, 12],
  ["Tata", 12, 14],
];

for (var i = 0; i < students.length; i++) {
  var averageStudents = average(students[i]);
  console.log(`La moyenne de : ${students[i][0]} est : ${averageStudents}`);
}

function average(tab) {
  var total = 0;
  var numberOfNote = 0;
  for (var i = 0; i < tab.length; i++) {
    if (typeof tab[0][i] === "number") {
      total += tab[0][i];
      numberOfNote++;
    }
  }
  total /= numberOfNote;
  return total;
}
