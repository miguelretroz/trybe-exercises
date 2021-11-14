const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { email } = req.body;

    if (!email) return res.status(404).json(
      {
        error: true,
        message: 'O campo \'email\' é obrigatório!',
      },
    );

    next();
  },
);
