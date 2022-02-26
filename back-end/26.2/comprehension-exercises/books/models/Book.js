const { ObjectId } = require('mongodb');
const connection = require('./connection');

const serialize = ({ _id, title, author_id }) => ({
  id: _id,
  title,
  authorId: author_id,
});

const create = async (title, authorId) => {
  const db = await connection();

  const result = db.collection('books').insertOne({ title, author_id: authorId });

  return { id: result.insertedId, title, authorId };
};

const getAll = async () => {
  const db = await connection();

  const books = await db.collection('books').find().toArray();

  return books.map(serialize);
};

const findById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return {
    error: {
      code: 'badRequest',
      message: 'Invalid book ID',
    },
  };

  const db = await connection();

  const book = await db.collection('books').findOne(new ObjectId(bookId));

  if (!book) return {
    error: {
      code: 'notFound',
      message: 'Book not found',
    },
  };

  return serialize(book);
};

const getByAuthorId = async (authorId) => {
  const db = await connection();

  const books = await db.collection('books').find(
    {
      author_id: parseInt(authorId, 10),
    }
  ).toArray();

  return books.map(serialize);
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  create,
};
