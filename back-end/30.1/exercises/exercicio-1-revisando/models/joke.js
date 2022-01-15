const axios = require('axios').default;

const getJoke = async () => {
  const ENDPOINT = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
  const { data } = await axios.get(ENDPOINT);

  return data.joke;
};

module.exports = {
  getJoke,
};
