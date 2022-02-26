const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
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

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
    );
};

const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await connection();

  const authorData = await db.collection('authors').findOne(new ObjectId(id));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

const create = async (firstName, middleName, lastName) => {
  const db = await connection();

  const result = db.collection('authors').insertOne({ firstName, middleName, lastName });

  return getNewAuthor({ id: result.insertedId, firstName, middleName, lastName });
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
