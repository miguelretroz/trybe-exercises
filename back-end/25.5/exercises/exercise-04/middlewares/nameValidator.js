const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required!' });

    if (name.length < 5) return res.status(400).json({ message: '"name" must be greater than 5' });

    next();
  },
);
