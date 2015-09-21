var log = require('./config/log');
var settings = require('./config/settings');
var Promise = require('bluebird');
var app = Promise.promisifyAll(require('./config/express'));

module.exports.run = function (cb) {
	log.info('server - Starting "' + settings.environment + '"');
	app.listenAsync(settings.express.port).then(cb);
};
