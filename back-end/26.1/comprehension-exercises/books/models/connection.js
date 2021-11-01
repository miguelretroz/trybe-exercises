const mysql = require('mysql2');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'miguelretroz',
  password: '2epQgpHf',
  database: 'model_example'
});

module.exports = connection;
