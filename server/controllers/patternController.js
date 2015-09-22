var Pattern = require('./../models/pattern');
var seedService = require('./../services/seedService');

module.exports = {
	getPatterns: function (req, res) {
		var descending = req.query.desc ? req.query.desc === "true" : true;
		var start = req.query.start ? +req.query.start : (descending ? seedService.patternCount : 0);
		var limit = 50;

		var query = {number: {}};
		if (descending) {
			query.number.$lte = start;
		} else {
			query.number.$gte = start;
		}

		Pattern.find(query).limit(limit)
			.sort( descending ?  '-number' : 'number' )
			.then(function (patterns) {
				res.json(patterns);
			});
	}
};