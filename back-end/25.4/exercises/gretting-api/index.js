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

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (!name) return res.status(400).json({ message: 'O nome é obrigatório!'});

  if (!age) return res.status(400).json({ message: 'A idade é obrigatória!'});

  const ageInt = parseInt(age);

  if (ageInt <= 17) return res.status(401).json({ message: 'Unauthorized' });

  res.status(200).json({ message: `Hello, ${name}!` });
});

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT} `));