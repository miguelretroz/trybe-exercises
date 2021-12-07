const fs = require('fs');
const path = require('path');

const getProfiles = () => JSON.parse(fs.readFileSync('./profiles.json', 'utf-8'));

const saveProfiles = (profiles) => fs.writeFileSync('./profiles.json', JSON.stringify(profiles), 'utf-8');

module.exports = (req, res) => {
  const { name, email, password, bio } = req.body;
  const { filename } = req.file;

  const profiles = getProfiles();

  const newProfile = {
    id: filename,
    name,
    email,
    password,
    bio,
  };

  profiles.push(newProfile);

  saveProfiles(profiles);


  res.status(201).json(newProfile);
};
