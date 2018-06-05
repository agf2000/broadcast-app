var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

// socket.io midleware
app.use(function (req, res, next) {
    res.io = io;
    next();
});

// app.get('/', function (req, res) {
//     res.send('Hello there');
// });

io.on('connection', function (socket) {
    socket.on('messages', function (msg) {
        io.emit('messages', msg);
    });
});

http.listen(port, function () {
    console.log('listening on *:' + port);
});