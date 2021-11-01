const rescue = require('express-rescue');

module.exports = rescue(
  (req, res, next) => {
    const { id } = req.params;
  
    if (!id) return res.status(400).json({ message: '"id" is required!' });
  
    if (parseInt(id, 10) === NaN) return res.status(400).json({ message: 'Invalid "id" !' });
  
    next();
  }
);
