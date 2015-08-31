'use strict';

/**
 * @ngdoc service
 * @name challengeApp.foodService
 * @description
 * # foodService
 * Service in the challengeApp.
 */
angular.module('challengeApp')
  .service('foodService', function ($q, $timeout, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
	var apiBaseUrl='http://api.nal.usda.gov/ndb/';
	var api_key='ismS4DLhjEvVtFRWrJ2gDYK4hPru8io0jU5tPw0t';
	//list?format=json&lt=f&sort=n&api_key=DEMO_KEY    //list
	//http://api.nal.usda.gov/ndb/search/?format=json&q=butter&api_key=DEMO_KEY search// 
	var foodservice = {
        searchFood: function(searchkey,pagesize,start) {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get(apiBaseUrl+'search/?format=json&q='+searchkey+'&max='+pagesize+'&offset='+start+'&api_key='+api_key).success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        },
		getAllFood: function() {

            var deferred = $q.defer();

            $timeout(function() {
                $http.get(apiBaseUrl+'list?format=json&lt=f&sort=n&api_key='+api_key).success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        },
		
		getFoodReportById:function(id){
			var deferred = $q.defer();

            $timeout(function() {
                $http.get(apiBaseUrl+'reports/?ndbno='+id+'&type=b&format=json&api_key='+api_key).success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
		},
		getNutritionReportById:function(id){
			var deferred = $q.defer();

            $timeout(function() {
                $http.get(apiBaseUrl+'reports/?ndbno='+id+'&type=f&format=json&api_key='+api_key).success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
		}
		
    };
	
	return foodservice;
	
	
  });
