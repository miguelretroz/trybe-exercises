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

module.exports = {
  getAll,
};
