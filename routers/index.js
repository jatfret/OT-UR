const express = require('express');
const home = require('./home');
const api = require('./api');
const paper = require('./paper');

const router = express.Router();

// router.use('/', (req, res)=>{
//   res.send("index page")
// });
router.use('/home', home);
router.use('/api', api);
router.use('/paper', paper);

module.exports = router;
