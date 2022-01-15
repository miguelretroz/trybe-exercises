const express = require('express');

const CategoriesController = require('./controllers/categories');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (_req, res) => {
  res.redirect('/categories');
});
app.get('/categories', CategoriesController.listCategories);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
