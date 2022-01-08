const { bookServices } = require('../../services');

const getAll = async (req, res) => {
  const books = await bookServices.getAll();

  res.status(200).json({ books });
};

const getById = async (req, res) => {
  const { id } = req.params;

  const book = await bookServices.getById(id);

  if (book.error) {
    const { error: { statusCode, message } } = book;

    return res.status(statusCode).json({ message });
  }

  res.status(200).json({ book });
};

const create = async (req, res) => {
  const { title, author, pageQuantity } = req.body;

  const newBook = await bookServices.create({ title, author, pageQuantity });

  res.status(201).json({ books: newBook });
};

module.exports = {
  getAll,
  getById,
  create,
};
