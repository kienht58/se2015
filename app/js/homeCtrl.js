quizApp.controller('HomeCtrl', function($scope, $location) {
	$scope.chooseCategory = function() {
		$location.path('/categories');
	};
	
	$scope.help = function() {
		$location.path('help');
	};
});