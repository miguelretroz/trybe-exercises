const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.use(cors());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' });

  res.status(200).json({ message: 'Valid Token!' });
});

app.get('/recipes', (_req, res) => {
  res.json(recipes);
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });

  return res.status(201).json({ message: 'Recipe created successfully!' });
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < parseInt(maxPrice));

  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.put('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  return res.status(204).end();
});

app.delete('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === 1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  return res.status(204).end();
});

// app.get('/xablau', (req, res) => {
//   return res.status(404).json({ message: 'Xablau!' });
// });

app.all('*', (req, res) => {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!'` });
});

app.listen(3000, () => {
  console.log(`Aplicação ouvindo na porta ${PORT}`);
});
