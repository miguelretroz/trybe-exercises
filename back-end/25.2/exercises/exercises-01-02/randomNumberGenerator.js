function randomNumberGenerator (min, max) {
  const randomNumber = (Math.random() * max) + min;
  return randomNumber;
}

module.exports = { randomNumberGenerator };