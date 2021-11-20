const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: process.env.DB_HOST, // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: process.env.DB_USER, // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: process.env.DB_PASSWORD, // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: process.env.DB});

module.exports = connection;
