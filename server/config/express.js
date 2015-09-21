var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var browserDir = path.resolve(__dirname + '/../../browser');
log.info('browserDir', browserDir);
app.use('/browser', express.static(browserDir));

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/views');
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

module.exports = app;