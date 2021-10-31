const usernameValidator = require('./usernameValidator');
const emailValidator = require('./emailValidator');
const passwordValidator = require('./passwordValidator');
const errorMiddleware = require('./errorMiddleware');

module.exports = {
  usernameValidator,
  emailValidator,
  passwordValidator,
  errorMiddleware,
};
