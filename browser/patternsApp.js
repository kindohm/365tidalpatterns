window.app = angular.module('patternsApp', [
	'ngResource',
	'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

	//$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('pattern.list', {
			url: '/',
			templateUrl: '/browser/home/pattern-list.html',
			controller: 'PatternListController',
			controllerAs: 'list'
		});

});