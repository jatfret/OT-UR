const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const pool = mysql.createPool({
  host: '120.77.36.131',
  port: '3306',
  user: 'root',
  password: 'ottour123',
  database: 'menagerie'
});

router.get('/', (req, res)=>{
  res.send('api page')
})

//获取列表
router.get('/getList', (req, res)=>{
  pool.getConnection((err, connection)=>{
    if (err) {
    console.log(err);
      res.json({ "code": 100, "status": "Error in connection database" });
      return;
    }
    connection.release();
    connection.query('SELECT * from pet', (err, result, fields) => {
      if(err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.json(result);
    });
  });
});

//新增试卷
router.post('/addPaper', (req, res)=>{

});

//删除试卷
router.post('/deletePaper', (req, res)=>{

});

//新增题目
router.post('/addTopic', (req, res)=>{

});

//删除题目
router.post('/deleteTopic', (req, res)=>{

});


router.get('/detail', (req, res)=>{
  res.send(" api detail ");
});

module.exports = router;
