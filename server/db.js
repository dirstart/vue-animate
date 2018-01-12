// Schema,Model,Entity或者Documents
// Schema生成Model,Model创造Entity
const User = require('./db/models/user');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/animate');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error', () => {
  console.log('Mongo connection error');
});
db.once('open', () => {
  console.log('Mongo connection successed');
});

// 将模型集中定义在这里
const Models = {
  User: User
};

module.exports = Models;
