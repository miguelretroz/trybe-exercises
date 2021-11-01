const router = require('express').Router();
const rescue = require('express-rescue');

const {
  idValidator,
  readPostsFile,
  getPostById,
} = require('../middlewares');

router.get(
  '/:id',
  [
    idValidator,
    readPostsFile,
    getPostById,
  ],
);

module.exports = router;