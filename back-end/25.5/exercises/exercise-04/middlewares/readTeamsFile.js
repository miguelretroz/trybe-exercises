const rescue = require('express-rescue');
const fs = require('fs/promise');

module.exports = rescue(
  async (req, _res, next) => {
    const teams = JSON.parse(await fs.readFile('./teams.json', 'utf-8'));

    req.teams = teams;

    next();
  },
);
