var express = require('express');
var cors = require('cors');
var app = express();
// const http = require('http').createServer(app);
app.use(cors({
    credentials: true,
  }));

var server = app.listen(3000);
// app.use(express.static('public'));

var socket = require('socket.io');

var io = socket(server);
// const io = require('socket.io')(http);

io.sockets.on('connection',newConnection);

function newConnection(socket){
    console.log("hello");
    // console.log(socket);

    socket.on('mouse',mouseMessage);

    function mouseMessage(data){
        console.log(data);
        socket.broadcast.emit('mouse',data);

    }

    socket.on('clicking',clickMessage);

    function clickMessage(data){
        console.log(data);
        socket.broadcast.emit('clicking',data);

    }




//     socket.on('disconnect')

}