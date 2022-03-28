function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);

numberArray.push(25);
stringArray.push("Rabbits");

console.log(numberArray);
console.log(stringArray);

function identity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá Mundo!");

interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}

function processIdentity<T, U> (value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumberInterface = processor(100, "Olá");

class ProcessIdentityCls<T, U> {
  _value: T;
  _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity() : T {
    console.log(this._message);
    return this._value;
  }
}

let processorCls = new ProcessIdentityCls<number, string>(100, "Olá");
processorCls.getIdentity();
