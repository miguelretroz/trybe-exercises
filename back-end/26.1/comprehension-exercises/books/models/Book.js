const { ObjectId } = require('mongodb');
const connection = require('./connection');

const serialize = ({ _id, title, author_id }) => ({
  id: _id,
  title,
  authorId: author_id,
});

const getAll = async () => {
  const db = await connection();

  const books = await db.collection('books').find().toArray();

  return books.map(serialize);
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

const findById = async (bookId) => {
  if (!ObjectId.isValid(bookId)) return null;

  const db = await connection();

  const book = await db.collection('books').findOne(new ObjectId(bookId));

  if (!book) return null;

  return serialize(book);
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
};
