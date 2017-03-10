/*var firstController = function ($scope) {
	$scope.name = "张三" ；
}
var secondController = function ($scope){
	$scope.name = "李四" ;
}*/
var my = angular.moduel("myApp",[]) ;
my.controller("firstController",function($scope){
	$scope.name = "张三" ；
})