const express = require('express');
const bodyParser = require('body-parser');

const Book = require('./models/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  const { authorid } = req.query;

  const books = authorid ? await Book
    .getByAuthorId(authorid) : await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.findById(id);

  if (!book) return res.status(404).json({ message: 'Book not found!' });

  res.status(200).json(book);
});

app.post('/books', async (req, res) => {
  const { title, authorId } = req.body;

  if (!(await Book.isValid(title, authorId))) {
    return res.status(400).json({ message: 'Dado inválido!' });
  }

  await Book.create(title, authorId);

  res.status(201).json({ message: 'Livro criado com sucesso!' });
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
