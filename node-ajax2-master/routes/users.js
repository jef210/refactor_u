var express = require('express');
var router = express.Router();
/*
 * GET users listing.
 */
router.post('/', function(req, res) {
  var message = req.param('message');
  res.send('Message: ' + message);
});

module.exports = router;
