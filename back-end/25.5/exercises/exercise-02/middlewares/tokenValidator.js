const rescue = require('express-rescue');

module.exports = rescue((req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(400).json({ message: 'token is required!' });

  if (authorization.length !== 12) return res.status(400).json({ message: 'Invalid token!' });

  next();
});
