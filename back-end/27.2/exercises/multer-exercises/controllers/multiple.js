module.exports = (req, res) => {
  const { files } = req;

  const { PORT } = process.env;

  const formatedFiles = files.map(({ filename, originalname }) => ({
    file: originalname,
    url: `http://localhost:${PORT}/${filename}`,
  }));

  res.status(200).json(formatedFiles);
};
