var express = require('express');
var router = express.Router();

/* GET Test page. */
router.post('/', function(req, res, next) {
//  res.render('index', { title: 'Index'}); // request.getatrribute와 동일한 내용
                                            // render 사용시, index로 이동해도 계속 teskOK에 남아있음
    console.log(req.param('id'));
    console.log(req.param('pw'));

    if(true){
      res.redirect('/list');
    } else {
      res.redirect('/test');
    }
});

module.exports = router;

//views를 제외하고는 수정하면 서버 내렸다가 올려야함
