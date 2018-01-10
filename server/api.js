const models = require('./db');
const User = require('./db/models/user');
const express = require('express');
const router = express.Router();
// console.log(models);

router.post('/api/login/createAccount', (req, res) => {
  // 这里的req.body能够使用就在index.js中
  // 引入 const bodyParser = require('body-parser');
  const newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  });
  // 保存newAccount数据进 MongoDB
  console.log("收到数据为", req.body, "开始保存到mongodb");
  const users = new User(newAccount);
  users.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      // 这里就是服务器返回来的数据，按照常理，格式应该是
      // {
      //   data: ['balbala一大堆数据，前端都往这里取的哈哈'],
      //   success: true or false;
      // }
      res.send('createAccount Successed');
    }
  });
});

// 获取已有账号接口
router.get('/api/login/getAccount', (req, res) => {
  // 通过模型去查找数据库
  models.Login.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send('data');
    }
  });
});

router.get('/', (req, res) => {
  console.log('user in session', req.session.user);
});

module.exports = router;
