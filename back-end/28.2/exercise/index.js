const express = require('express');

const app = express();

app.get(
  '/',
  (_req, res) => {
    res.status(200).send('Exercicios bloco 28 dia 2 - PM2');
  },
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
