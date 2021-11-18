const rescue = require('express-rescue');
const BookService = require('../services/Book');

const create = rescue(
  async (req, res, next) => {
    const { title, authorId } = req.body;

    const book = await BookService.create(title, authorId);

    if (book.error) return next(book.error);

    res.status(201).json(book);
  },
);

const getBooks = rescue(
  async (req, res, next) => {
    const { authorid } = req.query;

    const books = await BookService.getBooks(authorid);

    if (books.error) return next(books.error);

    res.status(200).json(books);
  },
);

const findById = rescue(
  async (req, res, next) => {
    const { id } = req.params;

    const book = await BookService.findById(id);

    if (book.error) return next(book.error);

    res.status(200).json(book);
  },
);

module.exports = {
  create,
  getBooks,
  findById,
};
