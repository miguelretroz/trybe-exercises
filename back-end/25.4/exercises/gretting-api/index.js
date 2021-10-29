const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ messsage: 'pong' }));

app.post('/hello', (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ message: 'O nome é obrigatório!' });

  res.status(200).json({ messsage: `Hello, ${name}!` });
});

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT} `));