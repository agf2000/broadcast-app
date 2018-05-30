var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

app.use(function (req, res, next) {
    console.log('middleware');
    req.testing = 'testing';
    return next();
});

// Loggedin user array
const loggedInUsers = {};
app.locals.loggedInUsers = loggedInUsers;

app.get('/', function (req, res, next) {
    console.log('get route', req.testing);
    res.end();
});

app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
        ws.send(msg);
    });
    console.log('socket', req.testing);
});

app.listen(3000);