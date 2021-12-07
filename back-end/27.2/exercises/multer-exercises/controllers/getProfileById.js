const fs = require('fs');

const getProfiles = () => JSON.parse(fs.readFileSync('./profiles.json', 'utf-8'));

module.exports = (req, res, next) => {
  const { id } = req.params;

  const profiles = getProfiles();

  const profile = profiles.find((p) => p.id === id);

  if (!profile) return next({ statusCode: 404, message: 'Perfil não encontrado' });

  res.status(200).json(profile);
};
