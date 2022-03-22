// Type boolean
let b: boolean;

let yes: boolean = true;
let no: boolean = false;
console.log('yes', yes);
console.log('no', no);

// Type number
let x: number;

let y: number = 0;
let z: number = 123.456;

// console.log('x', x);
console.log('y', y);
console.log('z', z);

// Type string
let s: string;

let empty: string = '';
let abc: string = 'abc';
console.log('empty', empty);
console.log('abc', abc);

// Type void
function sayHelloWorld(): void {
    console.log('Hello World!');
}
sayHelloWorld()

// Subtypes
let nullValue = null;
let undefinedValue = undefined;
console.log('nullValue', nullValue);
console.log('undefinedValue', undefinedValue);

// Type inference
let flag = true;
console.log('flag', flag);
console.log('type of flag', typeof flag);

const numberPI = 3.14159;
console.log('numberPI', numberPI);
console.log('type of numberPi', typeof numberPI);

let message = 'Hello World!';
console.log('message', message);
console.log('type of message', typeof message);
