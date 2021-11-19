const Joi = require('joi');

const cepFormatValidator = (cep) => {
  const cepRegex = /\d{5}-\d{3}/;

  return cepRegex.test(cep);
};

module.exports = (cepData) => {
  const { error } = Joi.object(
    {
      cep: Joi.string().min(9).max(9).required(),
      logradouro: Joi.string().not().empty().required(),
      bairro: Joi.string().not().empty().required(),
      localidade: Joi.string().not().empty().required(),
      uf: Joi.string().not().empty().required(),
    },
  ).validate(cepData);

  if (error) {
    return {
      error
    };
  }

  if (!cepFormatValidator(cepData.cep)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido',
    },
  }

  return {};
};
