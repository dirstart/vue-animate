const connect = require('connect');
// 用mongodb存放session
// 引入session，主要用来做登录注册的这个
const session = require('express-session');
// 引入cookie-parser，暂时不知道干嘛的，看博文里面有这个
// cookie-parser和exprss-session都被  Express 分离了。
const mongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
// 引入文件模块
const fs = require('fs');
// 引入处理路径的模块
const path = require('path');
// 引入api模块
const api = require('./api');
// 引入处理post数据的模块
const bodyParser = require('body-parser');
// 引入express
const express = require('express');
const app = express();

const User = require('./db/models/user');
const port = '8088';
const dbUrl = 'mongodb://localhost:27017/animate';

// 步骤 1,设置session .因为当数据处理到了接口的那一步的时候
//                其实基本上是已经返回数据了，这里一大堆中间件其实
//                是为了做 验证 等操作。
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  name: 'hahah',
  secret: '12345',
  // 用来对 session id 相关的cookie进行签名
  // cookie: { maxAge: 6000 },
  store: new mongoStore({
    url: dbUrl,
    collection: 'sessions'
  }),
  resave: false,
  saveUninitialized: true
}));

app.listen(port);
console.log("success listen " + port + "...");


// app.use((req, res, next) => {
//   // console.log("!!!!!", req.session);
//   const _user = req.session.user;
//   console.log(_user);
//   if (_user) {
//     app.locals.user = _user;
//   }
//   return next();
// });


app.use(api);