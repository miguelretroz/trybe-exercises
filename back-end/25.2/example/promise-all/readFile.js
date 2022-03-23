const fs = require('fs').promises;

Promise.all([
  fs.readFile('file1.txt'),
  fs.readFile('file2.txt'),
  fs.readFile('file3.txt'),
])
  .then((filesContent) => {
    const fileSizeSum = filesContent.reduce((acc, curr) => acc + curr.byteLength, 0);
    console.log(`Lido ${filesContent.length} arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivo: ${err.message}`);
  });
