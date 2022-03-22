import readlineSync from 'readline-sync';

const scriptsNamesPt = ['comprimento', 'massa', 'capacidade', 'área', 'volume'];
const scriptsNames = ['length', 'mass', 'capacity', 'area', 'volume'];

const scriptCodeChosen: number =  readlineSync.keyInSelect(scriptsNamesPt, 'Escolha um script: ', { cancel: 'SAIR' });

if (scriptCodeChosen !== -1) require(`./${scriptsNames[scriptCodeChosen]}.js`);

console.log('\nSaindo...');