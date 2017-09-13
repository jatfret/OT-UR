const express = require('express');
const home = require('./home');
const api = require('./api');

const router = express.Router();

// router.use('/', (req, res)=>{
//   res.send("index page")
// });
router.use('/home', home);
router.use('/api', api);

module.exports = router;
