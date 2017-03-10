angular.module("myProduct",[])
.service("productData",function(){
	return [{
		id : 333 ,
		name : "iphone" ,
		price : 5400
	},
	{
		id : 345 ,
		name : "ipad" ,
		price : 3800
	},
	{
		id : 5645 ,
		name : "imac" ,
		price : 13400
	},
	{
		id : 689 ,
		name : "ipad air" ,
		price : 2340
	},
	{
		id : 9798 ,
		name : "ipad mini" ,
		price : 2100
	}]
})
.controller("productController",function($scope,productData){
	$scope.productData = productData ;
	$scope.orderType = "id" ;
	$scope.order = "-" ;
	$scope.changeOrder = function(type){
		$scope.orderType = type ;
		if($scope.order === ''){
			$scope.order = '-' ;
		}else{
			$scope.order = '';
		}
	}
})