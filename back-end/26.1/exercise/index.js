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

app.get(
  '/user',
  rescue(
    async (_req, res) => {
      const users = await User.getAll();

      res.status(200).json(users);
    },
  ),
);

app.get(
  '/user/:id',
  rescue(
    async (req, res) => {
      const { id } = req.params;

      const user = await User.getById(id);

      if (!user) return res.status(404).json(
        {
          error: true,
          message: "Usuário não encontrado",
        },
      );

      res.status(200).json(user);
    },
  ),
);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
