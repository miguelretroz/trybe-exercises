const BookModel = require('../models/Book');

const create = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) {
    return {
      error : {
        code: 'badRequest',
        message: 'Invalid title',
      },
    };
  }

  if (!authorId || typeof authorId !== 'number') {
    return {
      error: {
        code: 'badRequest',
        message: 'Invalid author ID',
      },
    };
  }

  return await BookModel.create(title, authorId);
};

const getBooks = async (authorId) => authorId
  ? BookModel.getByAuthorId(authorId)
  : BookModel.getAll();

const findById = async (bookId) => await BookModel.findById(bookId);

module.exports = {
  create,
  getBooks,
  findById,
};