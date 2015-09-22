var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var bowerDir = path.resolve(__dirname + '/../../bower_components');
app.use('/bower_components', express.static(bowerDir));

var browserDir = path.resolve(__dirname + '/../../browser');
app.use('/browser', express.static(browserDir));

var viewsDir = path.resolve(__dirname + '/../views');

log.info("paths",
	{
		dirname: __dirname,
		cwd: process.cwd(),
		browserDir: browserDir,
		viewsDir: viewsDir
	});


app.set('view engine', 'ejs');
app.set('views', viewsDir);
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

module.exports = app;