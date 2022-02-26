const express = require('express');

const {
  btcRouters,
} = require('./routers');

const {
  errorMiddleware,
} = require('./middlewares');

const app = express();

const PORT = 3000;

app.use('/btc', btcRouters);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
