import Colors from "./Colors";
import Doors from './Doors';
import Directions from "./Directions";

class Car {
  _brand: string;
  _color: Colors;
  _doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  }

  honk(): void {
    console.log("Biiiiii!");
  }

  openTheDoor(door: Doors): void {
    console.log(`A porta ${door} foi aberta!`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`A porta ${door} foi fechada!`);
  }

  turnOn(): void {
    console.log("Carro ligado!");
  }

  turnOff(): void {
    console.log("Carro desligado!");
  }

  speedUp(): void {
    console.log("O carro está 1km/h mais rápido!");
  }

  speedDown(): void {
    console.log("O carro está 1km/h mais devagar!");
  }

  stop(): void {
    console.log("O carro foi parado!");
  }

  turn(direction: Directions): void {
    console.log(`O carro virou à ${direction}`);
  }
}
