const multer = require('multer');
const path = require('path');
const fs = require('fs');

const folderPath = path.resolve('uploads');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {

    callback(null, folderPath);
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (_req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    const err = new Error('Extension must be `png`');

    err.statusCode = 403;

    return callback(err);
  }

  const filesList = fs.readdirSync(folderPath);
  const fileAlreadyExists = filesList.some((filename) => filename.split('-')[1] === file.originalname);

  if (fileAlreadyExists) {
    const err = new Error('File already exists');

    err.statusCode = 409;

    return callback(err);
  }

  callback(null, true);
};

module.exports = multer({ storage, fileFilter });
