const mongoose = require('mongoose');

// 定义Schema
PaperSchema = new mongoose.Schema({
  title: {// 标题
    type: String,
    required: true
  },
  description: { // 描述
    type: String,
    required: true
  },
  topics: { //题目
    type: Array
  },
  created_at: { //创建时间
    type: Date
  }
});

// 定义Model
const PaperModel = mongoose.model('Paper', PaperSchema);

// 暴露接口
module.exports = PaperModel;
