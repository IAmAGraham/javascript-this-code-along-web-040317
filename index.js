var pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles"
}

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
}

var blt = new Sandwich("white", ["bacon","lettuce","tomato","mayo"],"rectangle");
var reuben = new Sandwich("rye", ["corned beef","sauerkraut","swiss","russian dressing"],"diagonal");

//yo
