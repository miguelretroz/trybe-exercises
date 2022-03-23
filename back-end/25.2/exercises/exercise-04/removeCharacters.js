// 3. Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
const fs = require('fs').promises;

async function removeCharacters () {
  try {
    const fileData = await fs.readFile('simpsons.json', 'utf-8');
    const simpsons = JSON.parse(fileData);

    const simpsonsFiltered = simpsons.filter(({ id }) => (id !== '6') && (id !== '10'));

    await fs.writeFile('simpsons.json', JSON.stringify(simpsonsFiltered));

    console.log(`Personagens removidos!`);
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

module.exports = removeCharacters;