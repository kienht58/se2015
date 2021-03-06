quizApp.factory('questionModel', function(){
	return {
		create: function(data) {
			var question = {};
			question.description = data.description;
			question.options = data.answers;
			question.score = data.score;
			question.kind = data.kind;
			question.id = data.id;
			
			question.isFillIn = function() {
				return (question.kind == 3);
			}
			
			return question;
		}
	};
});