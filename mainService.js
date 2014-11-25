angular.module('calculator')
	.service('mainService', mainService);

	function mainService(){
		var history = [];
		this.calculate = function(maths){
			var num1 = maths.first,
				num2 = maths.second,
				operator = maths.operator,
				answer;
				if(operator === "+"){
					answer = num1 + num2;
				} else if(operator === "-"){
					answer = num1 - num2;
				} else if(operator === "*"){
					answer = num1 * num2;
				}
				history.unshift(answer);
				return answer;
		}

		this.getHistory = function(){
			return history;
		}

	}