const models = require('./db');
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
  newAccount.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
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

module.exports = router;
