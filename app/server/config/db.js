var Promise = require("bluebird");
var mongoose = require('mongoose');
var settings = require("./settings");
var url = "mongodb://" + settings.db.host + ":" + settings.db.port + "/" + settings.db.name;

Promise.promisifyAll(mongoose);

module.exports.connectToMongoose = function () {
	return new Promise(function (resolve, reject) {
		mongoose.connect(url);
		mongoose.connection.once('open', function (err) {
			if (err) return reject(err);
			log.info('connected to database', settings.db);
			resolve();
		});
	});
};
