const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );

  return books.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    `SELECT
      id,
      title,
      author_id
      FROM
      model_example.books
      WHERE
      author_id = ?`,
    [authorId],
  );

  return books.map(serialize);
};

const findById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?';
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return serialize(book[0]);
};

module.exports = {
  getAll,
  getByAuthorId,
  findById,
};
