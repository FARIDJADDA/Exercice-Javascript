var readline = require("readline-sync");

var classeOnLetter = readline.question("Saisir la classe (entre A et F) :");

if (classeOnLetter === "A" || classeOnLetter === "B") {
  console.log("Numéro 1");
} else if (classeOnLetter === "C" || classeOnLetter === "D") {
  console.log("Numéro 2");
} else if (classeOnLetter === "E" || classeOnLetter === "F") {
  console.log("Numéro 3");
}
