const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/auth-middleware');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/open', (req, res) => {
  res.send('open!');
});

app.get('/fechado', authMiddleware, (req, res) => {
  res.send('closed!');
});

const recipesRouter = require('./recipesRouter');

app.use('/recipes', recipesRouter);

app.all('*', (req, res) => {
    return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(PORT, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
