const readline = require('readline-sync');

const scripts = [
  { name: 'Calculador de IMC', script: './imc.js' },
  { name: 'Calculador de velocidade media', script: './speed.js' },
  { name: 'Sorteio', script: './drawing.js' },
  { name: 'Calculador de fatorial', script: './factorial.js' },
  { name: 'Fibonacci', script: './fibonacci.js' },
];

console.log('Escolha um script para executar:');
scripts.forEach(({ name }, index) => console.log(` ${index + 1}. ${name}`));

const scriptNumber = readline.questionInt('Digite o número do escolhido: ') - 1;
console.log();

if (scripts[scriptNumber]) {
  const { name, script } = scripts[scriptNumber];

  console.log(`--- ${name} ---`);

  require(script);
} else console.log('Número inválido.');

console.log();
console.log('Parando a execução...');