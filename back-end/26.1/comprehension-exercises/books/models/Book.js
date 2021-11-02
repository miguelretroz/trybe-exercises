const connection = require('./connection');

const serialize = (bookData) => ({
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [book] = await connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );

  return book.map(serialize);
};

const getByAuthorId = async (authorId) => {
  const [book] = await connection.execute(
    `SELECT
      title,
      author_id
      FROM
      model_example.books
      WHERE
      author_id = ${authorId};`,
  );

  return book.map(serialize);
};

module.exports = {
  getAll,
  getByAuthorId,
};
