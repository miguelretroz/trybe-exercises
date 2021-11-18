require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
