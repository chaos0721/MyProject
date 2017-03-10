angular.module('myApp',[])
.directive('textChange',function(){
	return {
		restrict : 'E',
		template : '<div contenteditable="true"></div>',
		replace : true,
		require : 'ngModel',
		link : function(scope,ele,iattrs,ngModelController){
			ele.on('keyup',function(){
				scope.$apply(function(){
					ngModelController.$setViewValue(ele.html());
				})
			})
			ngModelController.$render = function(){
				ele.html(ngModelController.$viewValue)
			}
		}
	}
})
.controller('firstController',function(){})