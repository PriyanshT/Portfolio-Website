var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function (req, res, next) {
  res.render('contact', {
    title: 'Contact | Priyansh Thakar',
    activeContact: 'active',
    css: 'contactStyle.css'
  });
});

module.exports = router;