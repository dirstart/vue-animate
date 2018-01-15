const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  account: {
    unipue: true,
    // 唯一的
    type: String
  },
  password: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
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
