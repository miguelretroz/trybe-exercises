const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const imc = peso / (altura ** 2.0);

let category = '';

if (imc < 18.5) category = 'Abaixo do peso (magreza)';
else if (imc >= 18.5 && imc <= 24.9) category = 'Peso normal';
else if (imc >= 25 && imc <= 29.9) category = 'Acima do peso (sobrepeso)';
else if (imc >= 30 && imc <= 34.9) category = 'Obesidade grau I';
else if (imc >= 35 && imc <= 39.9) category = 'Obesidade grau II';
else category = 'Obesidade grau III e IV';

console.log(`IMC: ${imc.toFixed(2)} -> ${category}`);
