// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let angleA = 30;
let angleB = 90;
let angleC = 60;

let angleTotal = angleA + angleB + angleC;

if ((angleA > 0 || angleB > 0 || angleC > 0) && angleTotal === 180) {
    console.log('True!');
} else {
    console.log('False!');
};