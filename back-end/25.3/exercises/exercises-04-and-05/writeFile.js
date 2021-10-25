const fs = require('fs').promises;

const writeFile = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);

    return 'ok';
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
};

module.exports = writeFile;
