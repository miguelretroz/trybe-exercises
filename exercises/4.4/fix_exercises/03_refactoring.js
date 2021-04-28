/* 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

let numberA = 5;
let numberB = 3;


// Sum
function sum (number01, number02) {
    return (number01 + number02);
};

console.log(sum(numberA, numberB));

// Subtraction
function subtraction (number01, number02) {
    return (number01 - number02);
};

console.log(subtraction(numberA, numberB));

// Multiplication
function multiplication (number01, number02) {
    return (number01 * number02);
};

console.log(multiplication(numberA, numberB));

// Division
function division (number01, number02) {
    return (number01 / number02);
};

console.log(division (numberA, numberB));

// Modulus
function modulus (number01, number02) {
    return (number01 % number02);
};

console.log(modulus(numberA, numberB));
