const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/hello', handleHelloWorldRequest);

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

function handleHelloWorldRequest(req, res) {
  res.status(200).send('Hello World!');
}