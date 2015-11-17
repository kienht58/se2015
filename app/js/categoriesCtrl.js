quizApp.controller('CategoriesCtrl', function CategoriesCtrl($scope, $resource, $location, categoriesModel) {
	$resource('fixtures/categories.json').get(function (data) {
		$scope.categoriesData = categoriesModel.initialize(data);
		$scope.categories = $scope.categoriesData.categories;
	});
	
	$scope.startQuiz = function() {
		$location.path('/quiz');
	};
})