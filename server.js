const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errorhandler = require('errorhandler');
const routers = require('./routers');
const mysql = require('mysql');
const home = require('./routers/home.js');
const api = require('./routers/api.js');
const PaperModel = require('./models/mongo/PaperModel.js');
const UserModel = require('./models/mongo/UserModel.js');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, (req, res)=>{
  console.log('server is listening on port 3000!');
});

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.get('/', (req, res)=>{
  res.sendFile('./public/index.html');
});
app.use(routers);

let onlineUsers = 0;
let userList = {};
let username;

io.on('connection', function (socket) {
  const username = `用户${++onlineUsers}`;
  io.emit('pushMessage', { onlineUsers, message: `${username}加入编辑`});
  socket.on('forceDisconnect', function(msg){
    socket.broadcast.emit('pushMessage', { onlineUsers: onlineUsers - 1, message: `${username}退出编辑` });
    socket.disconnect();
  })
  socket.on('disconnect', function(res){
    onlineUsers--;
    delete userList[socket.id]
  })
  socket.on('updatePaper', function(msg){
    console.log(msg);
    PaperModel.findById(msg.id,  (err, result)=>{
      if(err){
        const message = {
          data: {
            info: err,
            status: 0
          }
        }
        io.emit('updateSuccess', message)
        io.emit('pushMessage', { message: `${username}提交更新` });
      } else {
        const message = {
          data: {
            paper: result,
            info: 'success',
            status: 1
          }
        }
        io.emit('updateSuccess', message)
        io.emit('pushMessage', { message: `${username}提交更新` });
      }
    })
  })
});

app.use(errorhandler());
