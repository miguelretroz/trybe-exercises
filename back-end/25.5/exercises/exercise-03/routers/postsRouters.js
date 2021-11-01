const router = require('express').Router();
const rescue = require('express-rescue');

const {
  idValidator,
  readPostsFile,
  getPostById,
  getPosts,
} = require('../middlewares');

router.get(
  '/',
  readPostsFile,
  getPosts,
);

router.get(
  '/:id',
  [
    idValidator,
    readPostsFile,
    getPostById,
  ],
);

module.exports = router;