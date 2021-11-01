const router = require('express').Router();
const rescue = require('express-rescue');
const fs = require('fs/promises');

const {
  nameValidator,
  initialsValidator,
  countryValidator,
  readTeamsFile,
} = require('../middlewares');

router.post(
  '/',
   [
    nameValidator,
    initialsValidator,
    countryValidator,
    readTeamsFile,
    async (req, res) => {
      const { name, initials, country, league } = req.body;
 
      const { teams } = req;
 
      const newTeam = { name, initials, country, league };
 
      teams.push(newTeam);
 
      await fs.writeFile('./teams.json', JSON.stringify(teams));
 
     res.status(201).json(newTeam);
    },
   ],
);

router.get(
  '/',
  [
    readTeamsFile,
    rescue(
      (req, res) => {
        const { teams } = req;

        res.status(200).json(teams);
      },
    ),
  ],
);

module.exports = router;