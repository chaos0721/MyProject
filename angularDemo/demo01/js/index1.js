angular.module("myApp",[])
.factory("Data",function(){
	//this.$get = function(){}
	return {
		message : "myData" ,
		city : [
		{
			name : "上海",
			py : "shanghai"
		},
		{
			name : "北京",
			py : "beijing"
		},
		{
			name : "四川",
			py : "sichuang"
		}
		]
	};
})
/*用factory或者service方法*/	
.controller("firstController",function($scope,Data,$filter){
	$scope.data = Data ;
	$scope.today = new Date ; 
	//过滤器
	var num = $filter('number')('3000')
	console.log(num) ;
	var jason = $filter('json')($scope.data) ;
	console.log(jason) ;
	
	$scope.checkName = function(obj){
		console.log(obj)
		if(obj.py.indexOf('h') === -1)
			return false ;
		return true ;
	}
	
	
})
