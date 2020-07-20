const readline = require("readline-sync");

var pseudo = "Matthieu";
sayHello(pseudo);

function sayHello(pseudo) {
  console.log(`Bonjour ${pseudo}`);
  console.log(`Hello ${pseudo}`);
  console.log(`Hola ${pseudo}`);
}

console.log("------------------");

var giveName = readline.question("Quel est votre prenom ?");
sayHello(giveName);
