const { ObjectId } = require('mongodb');
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

const getById = async (userId) => {
  if (!ObjectId.isValid(userId)) return null;

  const db = await connection();

  const user = await db.collection('users').findOne(new ObjectId(userId));

  if (!user) return null;

  return serialize(user);
};

const update = async (userId, userData) => {
  if (!ObjectId.isValid(userId)) return null;

  const { firstName, lastName, email, password } = userData;

  const db = await connection();

  await db.collection('users').updateOne(
    {
      _id: new ObjectId(userId),
    },
    {
      $set: {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password,
      },
    },
  );
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};