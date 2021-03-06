const connection = require('../connection');

module.exports = async (cep) => {
  const [row] = await (await connection()).execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );

  return row;
};
