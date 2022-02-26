const multer = require('multer');
const path = require('path');

module.exports = multer({ dest: path.resolve('uploads') });
