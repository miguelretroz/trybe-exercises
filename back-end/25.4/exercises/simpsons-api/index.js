const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

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
