const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    const folderPath = path.resolve('uploads');

    callback(null, folderPath);
  },
  filename: (_req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

module.exports = multer({ storage });
