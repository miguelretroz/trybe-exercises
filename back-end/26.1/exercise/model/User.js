const connection = require('./connection');

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

module.exports = {
  create,
};