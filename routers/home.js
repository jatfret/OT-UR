const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.send(" home page ");
})

router.get('/detail', (req, res)=>{
  res.send(" home detail page !");
});

module.exports = router;
