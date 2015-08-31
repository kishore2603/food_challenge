'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:FoodreportCtrl
 * @description
 * # FoodreportCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('FoodreportCtrl', function ($scope,$routeParams,foodService) {
   $scope.foodId=$routeParams.id ;
   
   foodService.getFoodReportById($scope.foodId).then(function(data) {
			var incomingData=data;
			$scope.basicReport=incomingData.report.food;
			
			}); 	
   
   
   
    });
