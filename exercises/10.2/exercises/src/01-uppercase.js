const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 50);
};

module.exports = uppercase;