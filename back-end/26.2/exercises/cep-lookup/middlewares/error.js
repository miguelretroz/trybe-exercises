const { statusByErrorCode } = require('../utils');

module.exports = (err, _req, res, _next) => {
  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};
