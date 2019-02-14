var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'}); //request.getatrribute와 동일한 내용
});

module.exports = router;

//views를 제외하고는 수정하면 서버 내렸다가 올려야함
