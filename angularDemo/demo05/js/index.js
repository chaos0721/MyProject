angular.module('myApp',[])
.filter('cityFilter',function(){
	return function(data,parent){
		var filterData = [] ;
		angular.forEach(data,function(obj,key){
			if(obj.parent===parent){
				filterData.push(obj)
			}
		})
		return filterData ;
	}
})
.service('hobbies',function(){
	return [
		{
			id : 1,
			name : '游戏'
		},
		{
			id : 2,
			name : '写代码'
		},
		{
			id : 3,
			name : '睡觉'
		},
		{
			id : 4,
			name : '看书'
		}
	]
})
.service('cities',function(){
	return [
		{
			name :'上海',
			parent : 0,
			id:1
		},
		{
			name :'上海市',
			parent:1,
			id:2
		},
		{
			name :'徐汇区',
			parent:2,
			id:8
		},
		{
			name :'长宁区',
			parent:2,
			id:3
		},
		{
			name :'北京',
			parent:0,
			id:4
		},
		{
			name :'北京市',
			parent:4,
			id:5
		},
		{
			name :'东城区',
			parent:5,
			id:6
		},
		{
			name :'丰台区',
			parent:5,
			id:7
		},
		{
			name :'浙江',
			parent:0,
			id:9
		},
		{
			name :'杭州',
			parent:9,
			id:100
		},
		{
			name :'宁波',
			parent:9,
			id:11
		},
		{
			name :'西湖区',
			parent:100,
			id:12
		},
		{
			name :'北仓区',
			parent:11,
			id:13
		},
	]
})
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
.controller('firstController',['$scope','hobbies','cities',function($scope,hobbies,cities){
	//默认
	$scope.data = {
		hobbyEle : [] ,
		area : 3
	};
	$scope.hobbies = hobbies ;
	$scope.cities = cities ;
	//checkbox
	$scope.toggleHobbySelction = function(id){
		var index = $scope.data.hobbyEle.indexOf(id) ;
		if(index === -1){
			$scope.data.hobbyEle.push(id)
		}else{
			$scope.data.hobbyEle.splice(index,1)
		}
	}
	//下拉框默认显示
	this.findCityId = function(parent){
		var id;
		angular.forEach($scope.cities,function(city){
			if(city.id === parent){
				id = city.parent ;
				return ;
			}
		})
		return id
	}
	
	if($scope.data.area !== undefined){
		$scope.data.city = this.findCityId($scope.data.area)
		$scope.data.province = this.findCityId($scope.data.city) ;
	}
	//reset
	$scope.origData = angular.copy($scope.data)
	$scope.reset = function(){
		$scope.data = angular.copy($scope.origData)
		$scope.myForm.$setPristine() ;
	}
	console.log($scope.dataa)
}])