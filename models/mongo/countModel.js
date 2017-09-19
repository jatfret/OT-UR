const mongoose = require('mongoose');

// 定义Schema
CountSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
  }
  paper_id: {
    type: Number,
    require: true,
  }
});

// 定义Model
const CountModel = mongoose.model('Count', CountSchema);

// 暴露接口
module.exports = CountModel;
