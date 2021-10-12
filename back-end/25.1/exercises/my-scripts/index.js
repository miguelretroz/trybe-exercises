const readline = require('readline-sync');

const scriptNumber = readline.questionInt(`Escolha um script para executar:
  1. IMC
  2. AVG Speed
  3. Drawing
Digite o número do escolhido: `);

if (scriptNumber === 1) require('./imc.js');
else if (scriptNumber === 2) require('./speed.js');
else if (scriptNumber === 3) require('./drawing.js');
else console.log('Número inválido.');

console.log('Parando a execução...');