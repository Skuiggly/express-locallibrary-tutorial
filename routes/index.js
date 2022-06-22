var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('layout.ejs', {title: 'test layout'});
  //res.redirect('/catalog');
});

module.exports = router;
