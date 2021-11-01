const errorMiddleware = require('./errorMiddleware');
const routeNotFound = require('./routeNotFound');

const idValidator = require('./idValidator');
const readPostsFile = require('./readPostsFile');
const getPostById = require('./getPostById');
const getPosts = require('./getPosts');

module.exports = {
  errorMiddleware,
  routeNotFound,
  idValidator,
  readPostsFile,
  getPostById,
  getPosts,
};
