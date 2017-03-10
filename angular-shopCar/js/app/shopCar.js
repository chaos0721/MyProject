var mycar = angular.module("myCar",[]).controller("carController",function($scope){
	$scope.cart = [
		{
				id : 1000 ,
				name : 'iphone5s',
				quantity : 3,
				price : 4300
			},
			{
				id : 3300 ,
				name : 'iphone5',
				quantity : 30,
				price : 3300 
			},
			{
				id : 232 ,
				name : 'mac',
				quantity : 4,
				price : 23000 
			},
			{
				id : 2000 ,
				name : 'ipad',
				quantity : 5,
				price : 6900
			}
	];
	$scope.totalPrice = function(){
		var total = 0 ;
		angular.forEach($scope.cart,function(item){
			total += item.price * item.quantity ;
		})
		return total ;
	};
	$scope.totalQ = function(){
		var quality = 0 ;
		angular.forEach($scope.cart,function(item){
			quality +=  parseInt(item.quantity) ;
		})
		return quality ;
	};
	/*
	 * 找到索引值
	 */
	var findIndex = function(id){
		var index = -1 ;
		angular.forEach($scope.cart,function(item,key){
			if (item.id === id){
				index = key ;
				return ;
			}
		})
		return index ;
	};
	/*
	 * 移除操作
	 */
	$scope.remove = function(id){
		var index = findIndex(id) ;
		if (index !== -1){
			$scope.cart.splice(index,1)
		}
	};
	//click触发后做一个脏检查，数据双向变化 
	/*添加一个数量*/
	$scope.add = function(id){
		var index = findIndex(id) ;
		if (index !== -1){
			++$scope.cart[index].quantity
		}
	};
	/*移去一个数量*/
	$scope.reduce = function(id){
		var index = findIndex(id) ;
		var content = $scope.cart[index].quantity ;
		if (content > 0){
			--$scope.cart[index].quantity
		}else if(confirm("确认要移除购物车吗？") 
			
		){
			$scope.cart.splice(index,1)
		}else{
			$scope.cart[index].quantity === 0;
		}
	};
	$scope.$watch('cart',function(newValue,oldValue){
		angular.forEach(newValue,function(item,key){
			if(item.quantity < 0){
			var returnKey = confirm("是否移除购物车?") ;
			if (returnKey){
				$scope.remove(item.id)
			}else{
				item.quantity = oldValue[key].quantity;
			}
		  }
		})
	},true)
});