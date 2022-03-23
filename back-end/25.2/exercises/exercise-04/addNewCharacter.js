// 5. Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
const fs = require('fs').promises;

async function addNewCharacter() {
  try {
    const fileContent = await fs.readFile('simpsonFamily.json', 'utf-8');

    const simpsonFamily = JSON.parse(fileContent);

    const newSimpsonFamily = [
      ...simpsonFamily,
      {
        id: `${(simpsonFamily.length + 1)}`,
        name: 'Nelson Muntz',
      },
    ];

    await fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonFamily));

    console.log('Personagem adicionado com sucesso!');
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}

module.exports = addNewCharacter;
