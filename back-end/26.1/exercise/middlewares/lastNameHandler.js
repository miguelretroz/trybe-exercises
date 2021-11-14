const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { lastName } = req.body;

    if (!lastName) return res.status(404).json(
      {
        error: true,
        message: 'O campo \'lastName\' é obrigatório!',
      },
    );

    next();
  },
);
