var express = require('express');
var router = express.Router();

const pcGamingController = require('../controllers/pcGamingController');

router.get('/', pcGamingController.root);
router.get('/:category', pcGamingController.byCategory);

module.exports = router;
