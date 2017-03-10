var myApp = angular.module('myApp',[])
.directive('customTags',function(){
	return {
		restrict : 'ECAM',
		template : '<div>{{user.name}}</div>',
		replace : true ,
		compile:function(tElement,tAttrs,transclude){
			//编译DOM
			tElement.append(angular.element('<div>aaaa</idv>'))
			return {
				pref :function preLink(scope,tElement,iAttrs,controller){
				},
				post :function postLink(scope,tElement,iAttrs,controller){
					tElement.on('click',function(){
						scope.$apply(function(){
							scope.user.name = 'click after'
						})
						
					})
				}
			}
		},
		link : function(){
			
		}
	}
})
.directive('customTags2',function(){
	return {
		restrict : 'ECAM',
		replace : true ,
		compile : function(){

		}
	}
})

.controller('firstController',['$scope',function($scope){
	$scope.users = [
		{
			id : 10,
			name : '张三',
			
		},
		{
			id : 20,
			name : '李四',	
		}
	]
	
}])
