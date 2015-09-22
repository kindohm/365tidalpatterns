(function(){

	app.controller('PatternItemController', function($scope, patternsApi){

		$scope.playing = false;

		$scope.togglePlay = function(){
			console.log('toggling');
			$scope.playing = !$scope.playing;
		};

	});

})();
