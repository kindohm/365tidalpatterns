var Pattern = require('./../models/pattern');

module.exports = {
	getPatterns: function (req, res) {
		Pattern.find()
			.then(function(patterns){
				res.json(patterns);
			});
	}
};