const rescue = require('express-rescue');

const initialsRegex = /^[A-Z]{1,3}$/;

module.exports = rescue(
  (req, res, next) => {
    const { initials } = req.body;

    if (!initials) return res.status(400).json({ message: '"inititals" is required!' });

    if (!initialsRegex.test(initials)) {
      return res.status(400)
        .json({ message: '"initials" must have maximum 3 upper case characters' });
    }

    next();
  },
);
