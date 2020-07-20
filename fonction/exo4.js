var readline = require("readline-sync");

var hyphen = "";
for (var i = 0; i <= 10; i++) {
  hyphen += "-";
}

console.log(hyphen);
sayHello("FR", "Matthieu");
console.log(hyphen);
sayHello("ES", "Tya");
console.log(hyphen);
sayHello("EN", "Milo");
console.log(hyphen);
console.log(hyphen);

var sayYourLanguage = readline.question("Quel est la langue (FR / EN / ES) ? ");
var sayYourPseudo = readline.question("Quel est ton pseudo ? ");

function sayHello(language, pseudo) {
  //   if (language.toLowerCase() === "fr") {
  //     console.log(`Bonjour ${pseudo}`);
  //   } else if (language === "EN" || language === "en") {
  //     console.log(`Hello ${pseudo}`);
  //   } else if (language === "ES" || language === "es") {
  //     console.log(`Hola ${pseudo}`);
  //   } else {
  //     console.log("Mauvaise saisie");
  //   }
  // }

  switch (language.toLowerCase()) {
    case "fr":
      console.log(`Bonjour ${pseudo}`);
      break;
    case "es":
      console.log(`Hola ${pseudo}`);
      break;
    case "en":
      console.log(`Hello ${pseudo}`);
      break;

    default:
      console.log("Mauvaise saisie");
      break;
  }
}

sayHello(sayYourLanguage, sayYourPseudo);
console.log(hyphen);
