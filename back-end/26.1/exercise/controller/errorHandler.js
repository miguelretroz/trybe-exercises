const rescue = require('express-rescue');

module.exports = rescue((err, _req, _res, _next) => {
  if (err.code && err.status) {
    return res.status(err.status).json({ message: err.message, code: err.code });
  }

  return res.status(500).json({ message: err.message });
});
