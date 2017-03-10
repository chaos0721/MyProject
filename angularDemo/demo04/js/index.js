angular.module('myApp',[])
//数据
.factory('Data',function(){
	return [
		{
			title : '标题一',
			content : '内容一'
		},
		{
			title : '标题二',
			content : '内容二'
		},
		{
			title : '标题三',
			content : '内容三'
		},
	]
})
//定义属性与标签
.directive('kittencupGroup',function(){
	return {
		restrict : 'E',
		template : '<div class="panel-group" ng-transclude id="accordion"></div>',
		replace : true,
		transclude : true,
		controllerAs : 'toggleOpen',
		controller : function(){
			this.groups = [] ;
			this.closeOther = function(nowScope){
				angular.forEach(this.groups,function(scope){
					if (scope !== nowScope){
						scope.isOpen = true ;
					}
				})
			}
		},
		
	}
})
.directive('kittencupCollapse',function(){
	return {
		restrict : 'E',
		templateUrl : '../demo04/model.html' ,
		replace : true,
		scope : {
			heading:'@'
		},
		require : '^kittencupGroup',
		transclude : true,
		link:function(scope,iElemrnt,iAttrs,toggleOpen){
			scope.isOpen = true ;
			scope.changeOpen = function(){
				scope.isOpen = !scope.isOpen
				toggleOpen.groups.push(scope) ;
				toggleOpen.closeOther(scope)
			};
		}
	}
})
//控制器
.controller('firstController',['$scope','Data',function($scope,Data){
	$scope.data = Data ;
}])
