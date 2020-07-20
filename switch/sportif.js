var readline = require("readline-sync");

var sport = readline.questionInt("Quel sport voulez-vous ?(1 - 3)");

switch (sport) {
  case 1:
    console.log("footballeur");
    break;
  case 2:
    console.log("rugbyman");
    break;
  case 3:
    console.log("tennisman");
    break;
  default:
    console.log("cas non traité");
    break;
}
