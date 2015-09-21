var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var settings = require('./settings');

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/server/views');
app.use(bodyParser.json());

// setup routes
require('./routes')(app);

// Export the app instance for unit testing via supertest
module.exports = app;