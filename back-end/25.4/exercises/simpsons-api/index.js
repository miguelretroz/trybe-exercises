const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const authorization = require('./middlewares/authorization');

const fs = require('fs/promises');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if (!email || !password || !firstName || !phone) return res.status(401).json({ message: 'Missing fields' });

  const token = crypto.randomBytes(8).toString('hex');

  res.status(200).json({ message: token });
});

app.use(authorization);

app.get('/simpsons', rescue(
  async (_req, res) => {
    const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));

    res.status(200).json(simpsons);
  },
));

app.get('/simpsons/:id', rescue(
  async (req, res) => {
    const { id } = req.params;

    const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));

    const character = simpsons.find((simpson) => simpson.id === id);

    if (!character) return res.status(404).json({ message: 'simpson not found' });

    return res.status(200).json(character);
  },
));

app.post('/simpsons', rescue(
  async (req, res) => {
    const { id, name } = req.body;

    if (!id || !name) return res.status(400).json({ message: '"id" and "name" is required!' });

    const simpsons = JSON.parse(await fs.readFile('./simpsons.json', 'utf-8'));

    const simpsonIndex = simpsons.findIndex((simpson) => simpson.id === `${id}`);

    if (simpsonIndex !== -1) return res.status(409).json({ message: 'id already exists' });

    simpsons.push({ id: `${id}`, name });

    await fs.writeFile('./simpsons.json', JSON.stringify(simpsons));

    res.status(204).end();
  },
));

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
