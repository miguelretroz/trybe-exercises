const express = require('express');
const bodyParser = require('body-parser');

const {
  teamsRouters,
} = require('./routers');

const {
  errorMiddleware,
} = require('./middlewares');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.use('/teams', teamsRouters);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
