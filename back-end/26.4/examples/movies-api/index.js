const express = require('express');
const bodyParser = require('body-parser');

const MoviesController = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());

app.post('/movies', MoviesController.create);

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
