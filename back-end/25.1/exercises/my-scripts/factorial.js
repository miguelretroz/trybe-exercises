const readline = require('readline-sync');

let number = 0;

do {
  number = readline.questionInt('Digite um número: ');
} while(number <= 0);

let factorial = number;

for(let i = (number - 1); i > 0; i -= 1) {
  factorial *= i;
};

console.log(`A fatorial de ${number} é ${factorial}`);
