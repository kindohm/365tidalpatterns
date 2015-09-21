// set globals
global.log = require('./config/log');
var config = require('./config/settings');

module.exports.run = function (cb) {
	log.info('server - Starting "' + config.environment + '"');
  cb();
};
