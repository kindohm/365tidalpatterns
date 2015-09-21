var winston = require('winston');
var moment = require('moment');
var settings = require('./settings');

function now() {
	return moment().format();
}

module.exports = new winston.Logger({
	transports: [
		new winston.transports.Console({
			level: settings.consoleLogLevel,
			colorize: true,
			timestamp: now,
			prettyPrint: true
		})
	]
});
