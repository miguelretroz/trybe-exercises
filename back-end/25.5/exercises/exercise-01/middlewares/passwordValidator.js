const rescue = require('express-rescue');

module.exports = rescue((req, res, next) => {
  const { password } = req.body;

  if (!password) return res.status(400).json({ message: '"password" is required!' });

  if (
    parseInt(password, 10) === NaN
    || password.toString().length < 4
    ||password.toString().length > 8
  ) return res.status(400).json({ message: 'Invalid "password"' });

  next();
});