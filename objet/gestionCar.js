var readline = require("readline-sync");

var v1 = {
  Brand: "Yotota",
  Model: "Riyas",
  number: 10,
  Price: 8000,
};
var v2 = {
  Brand: "Yotota",
  Model: "Risau",
  number: 5,
  Price: 7500,
};
var v3 = {
  Brand: "Nautre",
  Model: "Negan",
  number: 13,
  Price: 5000,
};

var parcCar = {
  name: "monSuperParc",
  adress: {
    street: "12 rue des fleurs",
    cedex: "3001",
    city: "Toulouse",
  },

  car: [v1, v2, v3],

  displayCar: function () {
    console.log("****************************");
    console.log("*****Parc Voiture : ********");
    console.log("****************************");
    for (var i = 0; i < this.car.length; i++) {
      console.log(`*** Voiture ${i + 1} ***`);
      console.log(`Marque : ${this.car[i].Brand}`);
      console.log(`Modele : ${this.car[i].Model}`);
      console.log(`Nom : ${this.car[i].number}`);
      console.log(`Prix : ${this.car[i].Price}`);
    }
  },

  displayParc: function () {
    var txt = `Le parc ${this.name} présent à l'adresse :\n`;
    txt += `${this.adress.street} \n`;
    txt += `${this.adress.cedex} ${this.adress.city}`;
    console.log(txt);
  },

  modifyParc: function () {
    function displayMenuBis() {
      var txt = "***************************\n";
      txt += "1/ Modifier le nom\n";
      txt += `2/ Modifier l'adresse\n`;
      txt += "0/ Annuler\n";
      txt += "***************************";
      console.log(txt);
    }
    var capture = -1;
    while (capture !== 0) {
      displayMenuBis();
      capture = readline.questionInt("Quel est votre choix ? ");
      switch (capture) {
        case 1:
          this.name = readline.question("Quel est le nouveau nom ? ");
          break;
        case 2:
          this.adress.street = readline.question("Quel est le libelle ? ");
          this.adress.cedex = readline.question("Quel est le code postal ? ");
          this.adress.city = readline.question("Quelle est la ville ? ");
          break;
        case 0:
          console.log("Annulation");
          break;
        default:
          console.log("cas non pris en compte");
          break;
      }
    }
  },
  deletModel: function (model) {
    var position = this.getPositionModel(model);
    if (position !== -1) {
      this.car.splice(position, 1);
      console.log("suppression reussie");
    } else {
      console.log(`le model n'existe pas `);
    }
  },
  getPositionModel(model) {
    for (var i = 0; this.car.length; i++) {
      if (this.car[i].Model.toLowerCase() === model.toLowerCase()) {
        return i;
      }
    }
    return -1;
  },
};

module.exports = parcCar;
