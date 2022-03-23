const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);

    return readFilePromise('file2.txt');
  })
  .then((content) => {
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);

    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });