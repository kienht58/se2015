quizApp.controller('HomeCtrl', function($scope, $location) {
	$scope.chooseCategory = function() {
		$location.path('/categories');
	};
	
	$scope.seeProfile = function() {
		$location.path('/profile');
	};
	
	$scope.help = function() {
		$location.path('help');
	};
});