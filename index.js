var path = require('path');
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');
var config = require('config-lite');
var routes = require('./routes');
var pkg = require('./package');

var app = express();

// ����ģ��Ŀ¼
app.set('views', path.join(__dirname, 'views'));
// ����ģ������Ϊ ejs
app.set('view engine', 'ejs');

// ���þ�̬�ļ�Ŀ¼
app.use(express.static(path.join(__dirname, 'public')));
// session �м��
app.use(session({
  name: config.session.key,// ���� cookie �б��� session id ���ֶ�����
  secret: config.session.secret,// ͨ������ secret ������ hash ֵ������ cookie �У�ʹ������ signedCookie ���۸�
  cookie: {
    maxAge: config.session.maxAge// ����ʱ�䣬���ں� cookie �е� session id �Զ�ɾ��
  },
  store: new MongoStore({// �� session �洢�� mongodb
    url: config.mongodb// mongodb ��ַ
  })
}));
// flash �м����������ʾ֪ͨ
app.use(flash());

// ·��
routes(app);

// �����˿ڣ���������
app.listen(config.port, function () {
  console.log(`${pkg.name} listening on port ${config.port}`);
});