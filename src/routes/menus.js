const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('menus');
});

module.exports = router;
