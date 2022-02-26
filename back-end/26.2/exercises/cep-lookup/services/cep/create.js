const cepModel = require('../../models/cep');

module.exports = async (
  {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  }
) => {
  const cepFormated = cep.replace('-', '');

  const cepAlreadyExists = await cepModel.find(cepFormated);

  if (cepAlreadyExists.length > 0) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
    },
  };

  const newCep = await cepModel.create(
    {
      cep: cepFormated,
      logradouro,
      bairro,
      localidade,
      uf,
    },
  );

  return { code: 201, cep: newCep };
};
