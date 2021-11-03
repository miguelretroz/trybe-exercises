const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors;',
  );

  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const [author] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;',
    [id],
  );

  if (author.length === 0) return null;

  const { firstName, middleName, lastName } = serialize(author[0]);

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)',
  [firstName, middleName, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
