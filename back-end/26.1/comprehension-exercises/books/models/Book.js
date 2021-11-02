const connection = require('./connection');

const serialize = (bookData) => ({
  title: bookData.title,
  authorId: bookData.author_id,
});

const getAll = async () => {
  const [book] = connection.execute(
    'SELECT title, author_id FROM model_example.books;',
  );

  return book.map(serialize);
};

module.exports = {
  getAll,
};
