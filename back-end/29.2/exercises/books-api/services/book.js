const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);

  if (!book) return {
    error: {
      statusCode: 404,
      message: 'Book not found.',
    },
  };

  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

module.exports = {
  getAll,
  getById,
  create,
};