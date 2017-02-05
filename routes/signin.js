var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin ��¼ҳ
router.get('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

// POST /signin �û���¼
router.post('/', checkNotLogin, function(req, res, next) {
  res.send(req.flash());
});

module.exports = router;