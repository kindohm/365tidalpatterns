window.app = angular.module('patternsApp', [
	'ngResource',
	'ui.router'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/browser/home/pattern-list.html',
			controller: 'PatternListController',
			controllerAs: 'list'
		});

});