function hyphenLine() {
  var hyphen = "";
  for (var i = 0; i <= 50; i++) {
    hyphen += "-";
  }
  console.log(hyphen);
}

function sayHello() {
  console.log("Bonjour");
}

function sayHey() {
  console.log("Coucou");
}

function sayHi() {
  console.log("Salut");
}
function allHyphenLineFor() {
  for (var i = 0; i <= 4; i++) {
    hyphenLine();
  }
}

hyphenLine();
sayHello();
allHyphenLineFor();
sayHey();
allHyphenLineFor();
sayHi();
hyphenLine();
