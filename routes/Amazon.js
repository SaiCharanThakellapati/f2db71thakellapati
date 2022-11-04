var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Amazon', {title:'Search Results Amazon'});
});

module.exports = router;
