(function(){

	app.controller('PatternListController', function(patternsApi){

		this.message = 'llkajsdf';
		this.patterns = patternsApi.patterns.query();

	});

})();
