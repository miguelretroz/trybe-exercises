const express = require('express');
const fs = require('fs/promises');

const app = express();

const PORT = 3000;

app.get('/:filename', async (req, res, next) => {
  try {
    const file = await fs.readFile(`./${req.params.filename}`);
    res.send(file.toString('utf-8'));
  } catch (err) {
    next(err);
  }
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${ err.message }` });
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});