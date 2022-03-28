type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

class Pizza {
  constructor(flavor: string, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pepperoni = new Pizza("Pepperoni", 8);
console.log(pepperoni);

const margherita: Pizza = {
  flavor: "Margherita",
  slices: 6,
}
console.log(margherita);

const nutella = new Pizza("Nutella", 4);
console.log(nutella);

type CommonFlavors = "Calabresa" | "Chicken" | "Pepperoni";

interface CommonPizza extends Pizza {
  flavor: CommonFlavors;
}

type VegetarianFlavors = "Margherita" | "Heart of Palm" | "Mushroom";

interface VegetarianPizza extends Pizza {
  flavor: VegetarianFlavors;
}

type SweetFlavors = "Nutella" | "Guava" | "Marshmallow";
type SweetSlices = 4;
interface SweetPizza extends Pizza {
  flavor: SweetFlavors;
  slices: SweetSlices;
}

const calabresa: CommonPizza = {
  flavor: "Calabresa",
  slices: 4,
}

const chicken: CommonPizza = {
  flavor: "Chicken",
  slices: 6,
}

const pepperoniTwo: CommonPizza = {
  flavor: "Pepperoni",
  slices: 8,
}

console.log("\nCommon Pizzas");
console.log(calabresa);
console.log(chicken);
console.log(pepperoniTwo);

const heartOfPalm: VegetarianPizza = {
  flavor: "Heart of Palm",
  slices: 6,
}

const mushroom: VegetarianPizza = {
  flavor: "Mushroom",
  slices: 8,
}

console.log("\nVegetarian Pizzas");
console.log(heartOfPalm);
console.log(mushroom);

const marshmallow: SweetPizza = {
  flavor: "Marshmallow",
  slices: 4,
}

console.log("\nSweet Pizzas");
console.log(marshmallow);
