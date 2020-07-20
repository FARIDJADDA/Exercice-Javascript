var age = 17;
var size = 175;
var residence = "france";

if (
  age > 16 &&
  size > 160 &&
  (residence === "France" || residence === "france")
) {
  console.log("Apte");
} else {
  console.log("inapte");
}
