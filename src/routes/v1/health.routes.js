const express = require('express');

const router = express.Router();

router.all('/', (req, res) => {
  res.status(200).send();
});

module.exports = router;
