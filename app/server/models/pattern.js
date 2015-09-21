var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Pattern', schema, 'pattern');