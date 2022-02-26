const router = require('express').Router();
const rescue = require('express-rescue');
const crypto = require('crypto');

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

router.post(
  '/login',
  [
    emailValidator,
    passwordValidator,
    rescue(
      (_req, res) => {
        const token = crypto.randomBytes(6).toString('hex');

        res.status(200).json({ token });
      },
    ),
  ],
);

module.exports = router;
