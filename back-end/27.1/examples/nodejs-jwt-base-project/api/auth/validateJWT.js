const jwt = require('jsonwebtoken');
const User = require('../../models/user');

const secret = process.env.SECRET;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findUser(decoded.data.username);

    if (!user) {
      return res.status(401).json({ message: 'Error ao procurar usuário do token' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};
