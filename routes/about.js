var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function (req, res, next) {
  res.render('about', {
    title: 'About | Priyansh Thakar',
    activeAbout: 'active',
    css: 'aboutStyle.css'
  });
});

module.exports = router;