//PURPOSE: index.js holds all of the main website routes
//(anything not auth related)s
//========================================
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'AB-Experiment' });
});

router.get('/variant-a', function(req, res) {
  res.render('variant-a', { title: 'AB-Experiment' });
});

router.get('/variant-b', function(req, res) {
  res.render('variant-b', { title: 'AB-Experiment' });
});

router.get('/mail-confirmation', function(req, res) {
  res.render('mail-confirmation', { title: 'Mail-in Process' });
});

router.get('/phone-confirmation', function(req, res) {
  res.render('phone-confirmation', { title: 'Phone-in Process' });
});

router.get('/online-confirmation', function(req, res) {
  res.render('online-confirmation', { title: 'online-confirmation' });
});

module.exports = router;
