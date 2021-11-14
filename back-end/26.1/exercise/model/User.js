const connection = require('./connection');

const serialize = ({ _id, firstName, lastName, email }) => ({
  id: _id,
  firstName,
  lastName,
  email,
});

const create = async ({ firstName, lastName, email, password }) => {
  const db = await connection();

  const result = await db.collection('users').insertOne({ firstName, lastName, email, password });

  return {
    id: result.insertedId,
    firstName,
    lastName,
    email,
  };
};

const getAll = async () => {
  const db = await connection();

  const users = await db.collection('users').find().toArray();

  return users.map(serialize);
};

module.exports = {
  create,
  getAll,
};