var readline = require("readline-sync");

var msg = "";
while (msg !== "coucou") {
  msg = readline.question("Saisir coucou : ");
}
