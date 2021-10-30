module.exports = (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: '"username" is required!' });

  if (username < 3) return res.status(400).json({ message: '"username" must be longer than 3 characters' });

  next();
};