var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("======= _id : "+req.param('_id'));

  res.render('update', { title: 'Update', vo:'{"_id":"1","id":"admin","pw":"1234"}'});
});

module.exports = router;

//views를 제외하고는 수정하면 서버 내렸다가 올려야함
