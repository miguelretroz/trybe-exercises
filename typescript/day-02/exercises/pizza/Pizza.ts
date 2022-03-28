type slicesNumber = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: slicesNumber;
}

class Pizza {
  constructor(flavor: string, slices: slicesNumber) {
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
