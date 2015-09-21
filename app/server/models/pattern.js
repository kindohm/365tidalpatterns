var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	fileName: String,
	plainName: String,
	number: Number
});

module.exports = mongoose.model('Pattern', schema, 'pattern');