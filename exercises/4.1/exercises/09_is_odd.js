let firstNumber = Math.ceil(Math.random() * 50);
let secondNumber = Math.ceil(Math.random() * 50);
let thridNumber = Math.ceil(Math.random() * 50);

console.log('The numbers chosen were => ' + firstNumber + ", " + secondNumber + ', ' + thridNumber);

if ((firstNumber % 2) !== 0 || (secondNumber % 2) !== 0 || (thridNumber % 2) !== 0) {
    console.log("True!");
} else {
    console.log("False!");
};