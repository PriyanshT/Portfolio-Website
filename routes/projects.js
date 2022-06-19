var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function (req, res, next) {
  res.render('projects', {
    title: 'Projects | Priyansh Thakar',
    activeProjects: 'active',
    css: 'projectsStyle.css'
  });
});

module.exports = router;