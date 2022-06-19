var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Priyansh Thakar',
    activeHome: 'active',
    css: 'indexStyle.css'
  });
});

module.exports = router;