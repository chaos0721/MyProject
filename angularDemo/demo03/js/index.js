var myApp = angular.module('myApp',[])
.directive('bookList',function(){
	return {
		restrict : 'ECAM',
		controller : function($scope){
				$scope.books = [
					{
						name : 'php'
					},
					{
						name : 'java'
					},
					{
						name : 'javascript'
					},
				];
				this.addBooks = function(){
						$scope.$apply(function(){
							$scope.books.push({
							name : 'nodejs'
						})
					})
					
				}
		},
		controllerAs : 'bookListController',
		template : '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
		replace : true
	}
})
.directive('bookAdd',function(){
	return {
		restrict : 'ECAM',
		template : '<button type="button">添加</button>' ,
		replace : true ,
		require : '^bookList',
		link : function(scope,iElement,iAttrs,bookListController){
			iElement.on('click',bookListController.addBooks)
		}
	}

})
.controller('firstController',['$scope',function($scope){
		
}]) ;
