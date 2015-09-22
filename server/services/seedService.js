var Promise = require('bluebird');
var Pattern = require('./../models/pattern');
var fs = require('fs');
var recursiveAsync = Promise.promisify(require("recursive-readdir"));
var mongoose = require('mongoose');
var path = require('path');
var _ = require('lodash');

Promise.promisifyAll(fs);

var dropCollection = function (collection) {
	return new Promise(function (resolve, reject) {

		log.info('checking if collection exists');
		mongoose.connection.db.listCollections({name: collection})
			.next(function (err, collinfo) {
				if (err) {
					log.error('Error checking if collection exists', err);
					return reject();
				}

				if (collinfo) {
					mongoose.connection.collections[collection]
						.drop(function (err) {
							if (err) {
								log.error('error dropping pattern collection', err);
								reject();
							}
							else {
								log.info('pattern collection dropped');
								resolve();
							}
						});

				} else {
					log.info('collection does not exist. not dropping.');
					return resolve();
				}
			});

	});

};

var insertAllPatterns = function (patterns) {
	return new Promise(function (resolve, reject) {

		log.info('inserting lots of patterns', patterns.length);
		Pattern.collection.insert(patterns, function (err, result) {
			if (err) {
				log.error('error inserting patterns', err);
				reject(err);
			} else {
				resolve(result);
			}
		});
	});

};

var exports = {
	patternCount: 0
};

exports.run = Promise.method(function () {

	var patternsPath = __dirname + '/../../patterns';

	return dropCollection('pattern')
		.then(function () {
			log.info('loading patterns from path', patternsPath);
			return recursiveAsync(patternsPath, []);
		})
		.then(function (files) {
			return Promise.map(files, function (file) {
				return fs.readFileAsync(file, 'utf8')
					.then(function (contents) {
						return {fullPath: file, contents: contents};
					});
			});
		})
		.then(function (files) {
			return _.map(files, function (file) {
				var plainName = path.basename(file.fullPath, '.tidal');
				var fileName = path.basename(file.fullPath);
				var audioPath = "/audio/" + plainName + ".mp3";
				var number = plainName.substr(7);
				var filePath = (path.relative(__dirname, file.fullPath)
					.replace('..' + path.sep, '')
					.replace('..' + path.sep, '')
					.replace('..' + path.sep, ''));

				return {
					fileName: fileName,
					number: +number,
					plainName: plainName,
					filePath: filePath,
					audioPath: audioPath,
					code: file.contents
				};
			});
		}).then(function (patterns) {
			return insertAllPatterns(patterns);
		}).then(function (result) {
			exports.patternCount = result.insertedCount;
			log.info('bulk insert success', {insertedCount: result.insertedCount});
			return;
		});
});


module.exports = exports;