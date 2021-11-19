const cepModel = require('../../models/cep');

const cepRegex = /\d{5}-?\d{3}/;

module.exports = async (cepToFind) => {
  const cepTest = cepRegex.test(cepToFind);

  if (cepToFind.length < 8 || !cepTest) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido',
    },
  };

  const cepResult = await cepModel.find(cepToFind);

  // if (cepResult.length === 0) return {
  //   error: {
  //     code: 'notFound',
  //     message: 'CEP não encontrado',
  //   },
  // }

  if (cepResult.length === 0) {
    const externalResult = await cepModel.getExternal(cepToFind);

    if (externalResult.error) return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    }

    const { logradouro, bairro, localidade, uf } = externalResult;

    const newCep = await cepModel.create(
      {
        cep: cepToFind,
        logradouro,
        bairro,
        localidade,
        uf,
      },
    );

    return { code: 200, cep: newCep };
  }

  return { code: 200, cep: cepResult[0] };
};
