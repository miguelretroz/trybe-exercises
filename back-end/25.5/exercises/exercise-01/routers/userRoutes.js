const router = require('express').Router();
const rescue = require('express-rescue');

const {
  usernameValidator,
  emailValidator,
  passwordValidator,
} = require('../middlewares');

router.post(
  '/register',
  [
    usernameValidator,
    emailValidator,
    passwordValidator,
    rescue((_req, res) => {
      res.status(201).json({ message: 'user created' });
    }),
  ],
);

module.exports = router;
