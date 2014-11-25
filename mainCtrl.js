angular.module('calculator')
	.controller('mainCtrl', mainCtrl);

	function mainCtrl($scope, mainService){
		
		$scope.calculate = function() {
			console.log($scope.calc);
			$scope.answer = mainService.calculate($scope.calc);
			$scope.calc = "";
			getAnswers();
		}

		var getAnswers = function() {
			$scope.answers = mainService.getHistory();
		} 
	}