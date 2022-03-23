// 1. Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
const fs = require('fs').promises;

async function readAllData () {
  try {
    const rawFileData = await fs.readFile('simpsons.json', 'utf8');

    const simpsons = JSON.parse(rawFileData);

    simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

module.exports = readAllData;