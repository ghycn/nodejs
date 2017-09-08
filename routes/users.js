var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('user', { title: '测试页面' });
  //res.send('index', 'respond with a resource');
});

module.exports = router;
