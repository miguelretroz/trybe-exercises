const readLine = require('readline-sync');

const name = readLine.question('Qual seu nome? ');
const age = readLine.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
