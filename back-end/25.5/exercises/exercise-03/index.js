const express = require('express');

const {
  errorMiddleware,
} = require('./middlewares');

const app = express();

const PORT = 3000;

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
