var express = require('express');
var router = express.Router();
const { servicesPage } = require('../controllers/servicesController');
const { contactPage }  = require('../controllers/contactController');

/* GET home page. */
router.get('/', (req, res) => {
  res.send('<h1>Hello Node!!!!</h1>\n');
});

router.get('/service', servicesPage);
router.get('/contact', contactPage);

module.exports = router;
