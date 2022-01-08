const express = require('express');

const root = express.Router({ mergeParams: true });

root.use('/books', require('./book/router'));

module.exports = root;
