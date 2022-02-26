const express = require('express');

const CategoriesController = require('./controllers/categories');
const JokeController = require('./controllers/joke');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.redirect('/categories');
});
app.get('/categories', CategoriesController.listCategories);
app.get('/jokes', JokeController.listRandom);
app.get('/jokes/:category', JokeController.listByCategory);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
