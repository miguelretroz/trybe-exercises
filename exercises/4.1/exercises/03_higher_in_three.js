// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let firstNumber = Math.ceil(Math.random() * 100);
let secondNumber = Math.ceil(Math.random() * 100);
let thirdNumber = Math.ceil(Math.random() * 100);

let higher = 0;

if (firstNumber > secondNumber) {
    higher = firstNumber;
} else {
    higher = secondNumber;
}

if (thirdNumber > higher) {
    higher = thirdNumber;
}

console.log(`The higher between three is ${higher} !`);