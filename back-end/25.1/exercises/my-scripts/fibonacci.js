const readline = require('readline-sync');

let number = 0;

do {
  number =  readline.questionInt('Digite um número: ');
} while(number <= 0);

const fibonacci = [0, 1];

for(let i = 0; i < number; i += 1) {
  fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
};

fibonacci.shift();
fibonacci.pop();

console.log(fibonacci);