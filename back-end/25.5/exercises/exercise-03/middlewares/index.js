const errorMiddleware = require('./errorMiddleware');
const idValidator = require('./idValidator');
const readPostsFile = require('./readPostsFile');
const getPostById = require('./getPostById');
const getPosts = require('./getPosts');

module.exports = {
  errorMiddleware,
  idValidator,
  readPostsFile,
  getPostById,
  getPosts,
};
