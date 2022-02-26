const rescue = require('express-rescue');

module.exports = rescue(
  (_req, res) => {
    res.status(404).json({ message: 'Opsss, route not found!' });
  },
);
