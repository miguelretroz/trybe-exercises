// 2. Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
const fs = require('fs').promises;

function getCharacter (requestedId) {
  return new Promise((resolve, reject) => {
    fs.readFile('simpsons.json', 'utf8')
      .then((data) => {
        const charactersList = JSON.parse(data);

        const characterFound = charactersList.find(({ id }) => Number(id) === requestedId);

        if (!characterFound) return reject('id não encontrado');
        resolve(characterFound);
      });
  });
}

module.exports = getCharacter;