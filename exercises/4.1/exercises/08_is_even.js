/* 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

Bonus: use somente um if . */

let firstNumber =  Math.ceil(Math.random() * 100);
let secondNumber = Math.ceil(Math.random() * 100);
let thridNumber = Math.ceil(Math.random() * 100);

console.log(`The numbers chosen were -> ${firstNumber}, ${secondNumber}, ${thridNumber} !`);

if ((firstNumber % 2) === 0 || (secondNumber % 2) === 0 || (thridNumber % 2) === 0) {
    console.log("True!");
} else {
    console.log('False!')
};