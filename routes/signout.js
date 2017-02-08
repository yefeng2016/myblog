var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next) {
  res.session.user = null;
  res.send(req.flash('success','登出成功'));
  res.redirect('/posts');
});

module.exports = router;