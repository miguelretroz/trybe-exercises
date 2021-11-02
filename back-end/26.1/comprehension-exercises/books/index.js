const express = require('express');

const Book = require('./models/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
