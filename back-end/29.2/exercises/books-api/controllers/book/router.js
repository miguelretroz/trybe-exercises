const express = require('express');
const bookControllers = require('./index');

const router = express.Router({ mergeParams: true });

router.get('/', bookControllers.getAll);

module.exports = router;
