enum EyeColor {
  Black = "Pretos",
  Blue = "Azuis",
  Green = "Verdes",
  Brown = "Castanhos"
}

class Person {
  name: string;
  birthDate: Date;
  eyeColor?: EyeColor;

  constructor(name: string, birthDate: Date, eyeColor?: EyeColor) {
    this.name = name;
    this.birthDate = birthDate;
    this.eyeColor = eyeColor;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} está andando.`);
  }
}

const personOne = new Person("Jane Doe", new Date("1986-01-01"));
const personTwo = new Person("Jon Doe", new Date("1980-08-05"), EyeColor.Black);

console.log(personOne);
personOne.speak();

personOne.eyeColor = EyeColor.Brown;
console.log(personOne);

console.log(personTwo);
personTwo.walk();
