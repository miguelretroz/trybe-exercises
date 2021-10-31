const rescue = require('express-rescue');

module.exports = rescue((req, res, next) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required!' });

  if (username.length <= 3) return res.status(400).json({ message: '"username" must be longer than 3 characters' });

  next();
});