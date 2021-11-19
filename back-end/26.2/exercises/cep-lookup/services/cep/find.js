const cepModel = require('../../models/cep');

const cepRegex = /\d{5}-?\d{3}/;

module.exports = async (cep) => {
  const cepTest = cepRegex.test(cep);

  if (cep.length < 8 || !cepTest) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido',
    },
  };

  const cepResult = await cepModel.find(cep);

  if (cepResult.length === 0) return {
    error: {
      code: 'notFound',
      message: 'CEP não encontrado',
    },
  }

  return { code: 200, cep: cepResult[0] };
};
