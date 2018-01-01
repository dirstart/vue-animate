// Schema,Model,Entity或者Documents
// Schema生成Model,Model创造Entity
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

// 定义模式Schema
const loginSchema = new mongoose.Schema({
  account: String,
  password: String
});
// 定义模型Model
const Models = {
  Login: mongoose.model('Login', loginSchema)
};

module.exports = Models;
