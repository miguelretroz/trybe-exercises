const errorMiddleware = require('./errorMiddleware');

const nameValidator = require('./nameValidator');
const initialsValidator = require('./initialsValidator');
const countryValidator = require('./countryValidator');
const readTeamsFile = require('./readTeamsFile');

module.exports = {
  errorMiddleware,
  nameValidator,
  initialsValidator,
  countryValidator,
  readTeamsFile,
};
