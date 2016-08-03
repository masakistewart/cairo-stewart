var app = angular.module('Cairo-Stewart', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/mainPage.html',
		controller: 'MainController'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.when('/projects', {
		templateUrl: 'views/projects.html',
		controller: 'ProjectsController'
	})
	.when('/contact', {
		templateUrl: 'views/contact.html'
	})
	.when('/stuff', {
		templateUrl: 'views/stuff.html'
	})
	.otherwise({
		templateUrl: 'views/fourohfour.html'
	})
})