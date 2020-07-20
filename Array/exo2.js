const tab = [5, 12, 18, 13, 14, 10, 7];
console.log(tab);

var result = 0;
for (var i = 0; i <= tab.length - 1; i++) {
  result += tab[i];
}
var average = result / tab.length;

console.log(`La moyenne est de ${Math.round(average * 10) / 10}`);
