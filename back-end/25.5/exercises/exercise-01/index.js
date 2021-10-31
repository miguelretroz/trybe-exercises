const express = require('express');
const bodyParser = require('body-parser');

const {
  errorMiddleware,
} = require('./middlewares');

const {
  userRoutes,
} = require('./routers');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/user', userRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
