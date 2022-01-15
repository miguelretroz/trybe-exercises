const axios = require('axios').default;

const getCategories = async () => {
  const ENDPOINT = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios.get(ENDPOINT);

  return data;
};

module.exports = {
  getCategories,
};
