var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'there is nothing to see here ' });
});

module.exports = router;
