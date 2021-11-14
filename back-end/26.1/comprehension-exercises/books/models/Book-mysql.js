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

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number') return false;

  const [author] = await connection.execute(
    'SELECT id FROM model_example.authors WHERE id = ?;',
    [authorId],
  );
  if (author.length === 0) return false;

  return true;
};

const create = async (title, authorId) => connection.execute(
  'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);',
  [title, authorId],
);

module.exports = {
  getAll,
  getByAuthorId,
  findById,
  isValid,
  create,
};
