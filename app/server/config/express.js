var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/server/views');
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

module.exports = app;