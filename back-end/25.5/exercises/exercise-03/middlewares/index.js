const errorMiddleware = require('./errorMiddleware');
const idValidator = require('./idValidator');
const readPostsFile = require('./readPostsFile');
const getPostById = require('./getPostById');

module.exports = {
  errorMiddleware,
  idValidator,
  readPostsFile,
  getPostById,
};
