var environment = process.env.NODE_ENV || 'development';
var settings = require('./env/' + environment);
module.exports = settings;
