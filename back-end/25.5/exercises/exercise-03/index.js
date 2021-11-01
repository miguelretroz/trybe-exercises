const express = require('express');

const {
  postsRouters,
} = require('./routers');

const {
  errorMiddleware,
} = require('./middlewares');

const app = express();

const PORT = 3000;

app.use('/posts', postsRouters);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`🚀 Server is running on PORT ${PORT}`));
