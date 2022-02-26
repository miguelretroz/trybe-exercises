const connection = require('../connection');

module.exports = async ({ cep, logradouro, bairro, localidade, uf }) => {
  await (await connection()).execute(
    'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);',
    [cep, logradouro, bairro, localidade, uf],
  );

  return { cep, logradouro, bairro, localidade, uf };
};
