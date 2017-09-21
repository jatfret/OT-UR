const mongoose = require('mongoose');

// 定义Schema
UserSchema = new mongoose.Schema({
  name: {// 名称
    type: String,
    required: true
  },
  created_at: { //加入时间
    join_time: Date
  }
});

// 定义Model
const UserModel = mongoose.model('User', UserSchema);

// 暴露接口
module.exports = UserModel;
