const BookModel = require('../models/Book');

const create = async (title, authorid) => {
  return await BookModel.create(title, authorid);
};

const getAll = async () => await BookModel.getAll();

const findById = async (bookId) => await BookModel.findById(bookId);

const getByAuthorId = async (authorId) => await BookModel.getByAuthorId(authorId);

module.exports = {
  create,
  getAll,
  findById,
  getByAuthorId,
};