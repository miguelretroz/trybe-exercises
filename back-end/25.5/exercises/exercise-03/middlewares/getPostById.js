const rescue = require('express-rescue');

module.exports = rescue((req, res) => {
  const { id } = req.params;

  const { posts } = req;

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return res.status(404).json({ message: 'post not found' });

  return res.status(200).json(post);
});
