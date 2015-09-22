app.factory('patternsApi', function ($resource) {
	return {
		patterns: $resource('/api/patterns/:_id')
	};
});