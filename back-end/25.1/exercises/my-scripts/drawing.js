const readline = require('readline-sync');

// const runGame = () => {
//   const userNumber = readline.questionInt('Escolha um número entre 0 e 10: ');

//   const randomNumber = parseInt(Math.random() * 10);

//   if (userNumber === randomNumber) console.log('Parabéns, número correto!');
//   else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}.`);

//   const gameRepeat = readline.question('Deseja jogar novamente? (Sim ou Não) ').toLowerCase();

//   if (gameRepeat !== 'sim'
//     && gameRepeat !== 's') return console.log('OK, até a próxima!');

//   runGame();
// };

// runGame();

let gameRepeat = '';

do {
  const userNumber = readline.questionInt('Escolha um número entre 0 e 10: ');

  const randomNumber = parseInt(Math.random() * 10);

  if (userNumber === randomNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}.`);

  gameRepeat = readline.question('Deseja jogar novamente? ').toLowerCase();

} while(gameRepeat === 'sim' || gameRepeat === 's');

console.log('Ok, até a próxima!');
