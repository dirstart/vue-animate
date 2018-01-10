const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  password: String
});

userSchema.pre('save', (next) => {
  // 这里主要处理一些时间
  next();
});

// 静态方法，为了Model层能够使用
userSchema.static = {
  findById: (id, callback) => {
    return this.findOne({ _id: id }).exec(callback);
  }
};

module.exports = userSchema;
