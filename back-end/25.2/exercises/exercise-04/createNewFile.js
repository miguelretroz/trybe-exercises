// 4. Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
const fs = require('fs').promises;

function createNewFile () {
  return fs.readFile('simpsons.json', 'utf-8')
    .then((result) => {
      const simpsons = JSON.parse(result);

      const charactersNeeded = simpsons.filter(({ id }) => {
        const idNumber = Number(id);

        return (idNumber >= 1 && idNumber <= 4);
      });

      return fs.writeFile('simpsonFamily.json', JSON.stringify(charactersNeeded), { flag: 'wx' });
    })
    .then(() => console.log('Arquivo criado com sucesso!'))
    .catch((err) => console.log(`Erro: ${err}`));
}

module.exports = createNewFile;
