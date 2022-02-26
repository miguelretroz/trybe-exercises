const rescue = require('express-rescue');

const emailRegex = new RegExp([
  '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9]',
  '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])',
  '?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'].join(''));

module.exports = rescue((req, res, next) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: '"email" is required!' });

  if (!emailRegex.test(email)) return res.status(400).json({ message: 'Invalid "email"' });

  next();
});