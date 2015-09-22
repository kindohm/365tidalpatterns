var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var bowerDir = path.resolve(__dirname + '/../../bower_components');
app.use('/bower_components', express.static(bowerDir));

var browserDir = path.resolve(__dirname + '/../../browser');
app.use('/browser', express.static(browserDir));

var audioDir = path.resolve(__dirname + '/../../audio');
app.use('/audio', express.static(audioDir));

var viewsDir = path.resolve(__dirname + '/../views');

app.set('view engine', 'ejs');
app.set('views', viewsDir);
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

module.exports = app;