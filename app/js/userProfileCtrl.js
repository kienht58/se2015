quizApp.controller('userProfileCtrl', function($scope, $location){
	$scope.back = function() {
		$location.path('/');
	};
});