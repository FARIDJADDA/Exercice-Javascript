var hyphen = "";
for (let i = 0; i <= 10; i++) {
  hyphen += "-";
}
console.log(hyphen);
console.log(sayHello("FR") + "Matthieu");
console.log(hyphen);
console.log(sayHello("ES") + "Matthieu");
console.log(hyphen);
console.log(sayHello("EN") + "Matthieu");
console.log(hyphen);
console.log(hyphen);

function sayHello(language) {
  switch (language.toLowerCase()) {
    case "fr":
      return "Bonjour";
      break;
    case "es":
      return "Hola";
      break;
    case "en":
      return "Hello";
      break;

    default:
      console.log("Mauvaise saisie");
      break;
  }
}
