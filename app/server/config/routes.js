var viewController = require('../controllers/viewController');

module.exports = function (app) {
	// Internal views
	app.get('/', viewController.index);

};