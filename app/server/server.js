global.log = require('./config/log');

var settings = require('./config/settings');
var Promise = require('bluebird');
var db = require('./config/db');

// this kicks off express.js and makes its methods async
var app = Promise.promisifyAll(require('./config/express'));

module.exports.run = function (cb) {
	log.info('server - Starting "' + settings.environment + '"');

	db.connectToMongoose()
		.then(function () {
			return app.listenAsync(settings.express.port);
		}).then(cb);
};
