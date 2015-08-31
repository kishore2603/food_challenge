'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:FoodhomeCtrl
 * @description
 * # FoodhomeCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('FoodhomeCtrl', function ($scope,foodService,$localStorage,$rootScope) {
	  console.log("working fine");
	  $scope.total=0;
	  $scope.pageSize=50;
	  $scope.start=0;
	  $scope.items={};
	  $scope.typeaheadItems={};
	  $scope.storage = $localStorage.$default({
          x: 42,
          favorites:[]
        });
	$scope.storage.favorites=[];
	$rootScope.count=0;
	$scope.fillLS=function(){
			foodService.getAllFood().then(function(data) {
			$localStorage.food= data;
			$scope.typeaheadItem=$localStorage.food.list.item;
			}); 	
	};  
	$scope.init=function(val){
		if(val===undefined || val===null || val==='')
		{
			val='';
		}
		 foodService.searchFood(val,$scope.pageSize,$scope.start).then(function(data) {
			$scope.allFoodItems = data;
			$scope.total=$scope.allFoodItems.list.total;
			 $scope.items=$scope.allFoodItems.list.item;
		});
	
		
		
		};
	$scope.pageChanged=function(){
		$scope.start=$scope.paginationSelect * $scope.pageSize;
		$scope.init('');
		console.log('clicked'+$scope.paginationSelect);
		};
		
		$scope.searchClicked=function(){
			$scope.init($scope.searchkey);	
			};
		$scope.AddTofavorite=function(obj){
			
			$scope.storage.favorites.push(obj);
			$rootScope.count=$scope.storage.favorites.length;
			};
		
		$scope.init('');
		$scope.fillLS();
  });
  
