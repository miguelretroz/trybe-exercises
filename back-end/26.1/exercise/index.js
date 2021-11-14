const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const {
  errorHandler,
  firstNameHandler,
  lastNameHandler,
  emailHandler,
  passwordHandler,
} = require('./middlewares');

const { User } = require('./model');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.post(
  '/user',
  [
    firstNameHandler,
    lastNameHandler,
    emailHandler,
    passwordHandler,
    rescue(
      async (req, res) => {
        const {
          firstName,
          lastName,
          email,
          password,
        } = req.body;

        const newUser = await User.create(
          {
            firstName,
            lastName,
            email,
            password,
          },
        );

        res.status(201).json(newUser);
      },
    ),
  ],
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
