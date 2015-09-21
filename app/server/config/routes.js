var viewController = require('../controllers/viewController');
var patternController = require('../controllers/patternController');

module.exports = function (app) {
	// Internal views
	app.get('/', viewController.index);
	app.get('/api/patterns', patternController.getPatterns)

};