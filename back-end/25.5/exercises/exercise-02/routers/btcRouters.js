const router = require('express').Router();
const rescue = require('express-rescue');
const axios = require('axios');

const {
  tokenValidator,
} = require('../middlewares');

router.get(
  '/price',
  [
    tokenValidator,
    rescue(
      async (_req, res) => {
        const END_POINT = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

        const { data: { bpi } } = await axios.get(END_POINT);

        res.status(200).json(bpi);
      },
    ),
  ],
);

module.exports = router;
