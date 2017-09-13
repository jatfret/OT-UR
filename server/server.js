const express = require('express');
const errorhandler = require('errorhandler');
const routers = require('./routers');
const mysql = require('mysql');
const home = require('./routers/home.js');
const api = require('./routers/api.js');

const app = express();

app.use(express.static('public'));

app.use(routers);
// app.use('/home', home);
// app.use('/api', api);

app.listen(3000, (req, res)=>{
  console.log('server is listening on port 3000!');
});

app.use(errorhandler());

