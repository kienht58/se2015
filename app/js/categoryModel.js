quizApp.factory('categoryModel', function() {
	return {
		create: function(data) {
			var category = {};
			category.id = data.id;
			category.imgUrl = data.iconUrl;
			category.name = data.name;
			
			return category;
		}
	};
});