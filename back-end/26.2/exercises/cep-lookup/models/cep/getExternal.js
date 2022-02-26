const axios = require('axios');

module.exports = async (cep) => {
  const ENDPOINT = `https://viacep.com.br/ws/${cep}/json/`;

  const { data } = await axios.get(ENDPOINT);

  return data;
};
