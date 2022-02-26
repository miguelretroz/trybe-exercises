const axios = require('axios').default;

const getByCategory = async (category) => {
  const ENDPOINT = `https://api.chucknorris.io/jokes/random?category=${category}`;
  const { data } = await axios.get(ENDPOINT);

  return data.value;
};

const getRandom = async () => {
  const ENDPOINT = 'https://api.chucknorris.io/jokes/random';
  const { data } = await axios.get(ENDPOINT);

  return data.value;
};

module.exports = {
  getByCategory,
  getRandom,
};
