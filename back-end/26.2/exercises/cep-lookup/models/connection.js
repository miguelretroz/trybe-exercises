const mysql = require('mysql2/promise');

const OPTIONS = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
};

let connection = null;

module.exports = () => {
  connection = connection
  ? connection
  : mysql.createPool(OPTIONS);

  return connection;
};
