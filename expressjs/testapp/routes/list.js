var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('list',{title: 'LIST', datas:'[{"_id":"1","id":"admin","pw":"1234"},{"_id":"2","id":"test","pw":"0000"}]' });
  //_id 는 noSQL에서 번호를 자동으로 생성
});

module.exports = router;
