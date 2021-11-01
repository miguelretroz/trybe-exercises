const rescue = require('express-rescue');

module.exports = rescue(
  (req, res) => {
    const { posts } = req;

    res.status(200).json(posts);
  },
);
