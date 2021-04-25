let firstNumber =  Math.ceil(Math.random() * 100);
let secondNumber = Math.ceil(Math.random() * 100);
let thridNumber = Math.ceil(Math.random() * 100);

console.log(`The numbers chosen were -> ${firstNumber}, ${secondNumber}, ${thridNumber} !`);

if ((firstNumber % 2) === 0 || (secondNumber % 2) === 0 || (thridNumber % 2) === 0) {
    console.log("True!");
} else {
    console.log('False!')
};