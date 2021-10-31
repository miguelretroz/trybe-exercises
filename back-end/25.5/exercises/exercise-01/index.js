const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');

const {
  userRoutes,
} = require('./routers');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRoutes);

// app.post(
//   '/user/register',
//   [
//     usernameValidator,
//     emailValidator,
//     passwordValidator,
//     rescue((_req, res) => {
//       res.status(201).json({ message: 'user created' });
//     }),
//   ],
// );

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
