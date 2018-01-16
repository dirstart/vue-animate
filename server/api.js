const models = require('./db');
const express = require('express');
const router = express.Router();

// 1.用户注册
router.post('/api/login/createAccount', (req, res) => {
  const newAccount = new models.User({
    account: req.body.account,
    password: req.body.password
  });
  models.User.findOne({ account: newAccount.account } , (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    if (user) {
      console.log("该用户名已经存在");
      res.send({
        success: false,
        msg: "用户已存在"
      });
    } else {
      const users = new models.User(newAccount);
      users.save((err, data) => {
        if (err) {
          res.send({
            success: false,
            msg: "数据库错误"
          });
        } else {
          res.send({
            success: true,
            msg: "创建成功"
          });
          console.log("注册成功");
        }
      });
    }
  });
});

// 2.用户登录
router.post('/api/login/signIn', (req, res) => {
  const _user = {
    account: req.body.account,
    password: req.body.password
  };
  models.User.findOne(_user, (err, user) => {
    if (err) {
      console.log(err)
    }
    if (!user) {
      console.log("用户不存在或者密码错误");
      res.send({
        success: false,
        msg: "用户不存在或者密码错误"
      })
    } else {
      req.session.user = user;
      console.log("登录成功");
      // 本来是在这里return跳页的，但现在前后端分离
      // 以前是后端控制路由
      res.send({
        success: true
      });
    }
  })
});

// 3.退出登录
router.get('/api/logout', (req, res) => {
  delete req.session.user;
  res.send("登出成功");
});

// 4.获取所有电影
router.get('/api/getMovieAll', function(req, res) {
  models.Movie.findAll(function(err, movies) {
    if (err) {
      console.log(err);
    }
    console.log(movies);
    res.send({
      success: true,
      movies: movies
    })
  });
});

// 5.根据类型获取电影
router.post('/api/getMovieByType', function(req, res) {
  models.Movie.findByType(function(err, movies) {
    console.log("这是查询之后的结果", movies);
    res.send({
      success: true,
      movies: movies
    });
  });
});

router.get('/', (req, res) => {
  // console.log('user in session:', req.session.user);
});


module.exports = router;
