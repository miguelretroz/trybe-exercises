const rescue = require('express-rescue');
const fs = require('fs/promises');

module.exports = rescue(
  async (req, _res, next) => {
    const posts = JSON.parse(await fs.readFile('./posts.json', 'utf-8'));

    req.posts = posts;

    next();
  },
);
