const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { firstName } = req.body;

    if (!firstName) return res.status(404).json({
      error: true,
      message: 'O campo \'firstName\' é obrigatório!',
    });

    next();
  },
);
