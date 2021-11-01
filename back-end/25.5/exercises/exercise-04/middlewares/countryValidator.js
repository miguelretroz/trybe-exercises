const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { country } = req.body;

    if (!country) return res.status(400).json({ message: '"country" is required!' });

    if (country.length < 3) return res.status(400).json({ message: '"country" must be greater than 3' });

    next();
  },
);
