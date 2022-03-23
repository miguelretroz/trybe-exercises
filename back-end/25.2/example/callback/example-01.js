const fs = require('fs');

fs.readFile('./arquivo.txt', (err, content) => {
  if(err) {
    console.log(`Error ao ler o arquivo: ${err.message}`);
    return;
  }

  console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
});
