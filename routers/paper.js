const express = require('express');
const cookieParser =require('cookie-parser');
const moment = require('moment');
require('../models/mongo/connect.js');
const PaperModel = require('../models/mongo/PaperModel.js');
const router = express.Router();


//创建试卷
router.post("/createPaper", (req, res)=>{
  const paper = new PaperModel({
    title: " ",
    description: " ",
    topics: [],
    created_at: new Date()
  });
  paper.save((err, result)=>{
    if(err){
      console.log("paper save error:", err);
    }
  }).then((result)=>{
    const message = {
      data: {
        id: result.id
      },
      info: 'success',
      status: 1
    };
    res.json(message);
  });
});

//获取试卷列表
router.get("/getPaperList", (req, res)=>{
  PaperModel.find({}, null, (err, result)=>{
    if(err){
      const message = {
        data: {
          info: err,
          status: 0
        }
      }
      res.json(message);
    }else{
      const message = {
        data: {
          papers: result,
          info: 'success',
          status: 1
        }
      }
      res.json(message);
    }
  })
});

//查询试卷
router.get("/getPaper", (req, res)=>{
    PaperModel.findById(req.query.id,  (err, result)=>{
	    if(err){
	      const message = {
		data: {
		  info: err,
		  status: 0
		}
	      }
	      res.json(message);
	    } else {
	      const message = {
		data: {
		  paper: result,
		  info: 'success',
		  status: 1
		}
	      }
	      res.json(message);
	    }
})
});

//更新试卷
router.post("/updatePaper", (req, res)=>{
  const paperJSON = req.body;
  PaperModel.findOneAndUpdate({_id: paperJSON.id || paperJSON._id }, paperJSON, {new: true, upsert: true }, (err, result)=>{
    if(err){
      const message = {
        data: {
          info: err,
          status: 0
        }
      }
      res.json(message);
    } else {
      const message = {
        data: {
          paper: result,
          info: 'success',
          status: 1
        }
      }
      res.json(message);
    }
  })
});

//删除试卷
router.post("/deletePaper", (req, res)=>{
  PaperModel.remove({_id: req.body.id }, (err, result)=>{
    if(err){
      const message = {
        data: {
          info: err,
          status: 0
        }
      }
      res.json(message);
    }else{
      const message = {
        data: {
          info: 'success',
          status: 1
        }
      }
      res.json(message);
    }
  })
});

module.exports = router;
