var express = require('express');
var router = express.Router();

/* GET Test page. */
router.get('/', function(req, res, next) {

    console.log("===== _id : "+req.param('_id'));

    res.redirect('/list');

});

module.exports = router;
