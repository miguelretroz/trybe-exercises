module.exports = (err, _req, _res, _next) => {
  if (err.code && err.status) {
    return res.status(res.status)
      .json({ message: err.message, code: err.code });
  }

  res.status(500).json({ message: err.message });
};
