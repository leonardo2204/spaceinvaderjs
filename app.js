var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var io = require('socket.io');
var UUID = require('node-uuid');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
		extended : false
	}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/views/index.html');
});

var server = app.listen(3000, function () {
		console.log('listening port: ' + server.address().port);
	});

var sio = io.listen(server,{ origins: '*:*' });

sio.sockets.on('connection', function (client) {
	client.userId = UUID();
	client.emit('onconnected', {
		userId : client.userId
	});
	console.log('client connected id: ' + client.userId);
})

module.exports = app;
