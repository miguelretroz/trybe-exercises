const express = require('express');
const { pid } = require('process');

const app = express();

app.get(
  '/',
  (_req, res) => {
    res.status(200).send(`Exercicios bloco 28 dia 2 - PM2 - Ambiente de ${process.env.ENVIRONMENT} ${pid}`);
  },
);

app.get(
  '/bug',
  (_req, res) => {
    res.status(500).send('Quebrou!');
    process.exit(1);
  },
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
