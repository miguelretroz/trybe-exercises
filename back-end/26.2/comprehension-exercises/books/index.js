const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./models/Book');
const BookService = require('./services/Book');

const { errorMiddleware } = require('./middlewares');

const app = express();

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  const { authorid } = req.query;

  const books = authorid
  ? await BookService.getByAuthorId(authorid)
  : await BookService.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await BookService.findById(id);

  if (!book) return res.status(404).json({ message: 'Book not found!' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;

  if (!(await Book.isValid(title, authorId))) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  await BookService.create(title, authorId);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
