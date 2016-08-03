app.controller('MainController', function($http){
	
})

app.controller('ProjectsController', function($http, $scope) {
	var picturePaths = []

	$http.get('/api/photos/projects').then(function(data) {
		$scope.projects = data.data
		console.log(data.data)
	});
})