var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var abc="Hello World"
  //res.render('index', { title: 'Express Route Application' });

  res.render('index', { title: 'Express Route Application from Master Branch' });

});

module.exports = router;
