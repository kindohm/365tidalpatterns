var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	fileName: String,
	plainName: String,
	number: Number,
	filePath: String
});

module.exports = mongoose.model('Pattern', schema, 'pattern');