const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distância percorrida em metros? ');
const time = readline.questionInt('Qual o tempo em segundos gasto para percorrer? ');

const avg = distance / time;

console.log(`A velocidade média é de ${avg.toFixed(2)}.`)
