const express = require('express');
const bookControllers = require('./index');

const router = express.Router({ mergeParams: true });

router.get('/', bookControllers.getAll);
router.get('/:id', bookControllers.getById);
router.post('/', bookControllers.create);

module.exports = router;
