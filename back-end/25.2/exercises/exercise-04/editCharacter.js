// 6. Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
const fs = require('fs').promises;

async function editCharacter () {
  try {
    const fileContent = await fs.readFile('simpsonFamily.json', 'utf-8');

    const simpsonFamily = JSON.parse(fileContent);

    const editedSimpsonFamily = simpsonFamily.map((character) => {
      if (character.name === 'Nelson Muntz') return { id: character.id, name: 'Maggie Simpson' };

      return character;
    });

    await fs.writeFile('simpsonFamily.json', JSON.stringify(editedSimpsonFamily));

    console.log('Personagem alterado com sucesso!');
  } catch (err) {
    console.log(err);
  }
}

module.exports = editCharacter;