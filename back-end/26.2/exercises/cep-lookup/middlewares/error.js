const { statusByErrorCode } = require('../utils');

module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ error: { code: 'invalidData', message: err.details[0].message } });
  }

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { code: err.code, message: err.message } });
};
