const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');

const app = express();

const PORT = 3000;

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

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
