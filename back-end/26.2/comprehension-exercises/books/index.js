const express = require('express');
const bodyParser = require('body-parser');

const BookController = require('./controllers/Book');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.get('/books', BookController.getBooks);

app.get('/books/:id', BookController.findById);

app.post('/books', BookController.create);

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
