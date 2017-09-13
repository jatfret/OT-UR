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

router.get('/list', (req, res)=>{
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

router.get('/detail', (req, res)=>{
  res.send(" api detail ");
});

module.exports = router;
