'use strict';

/**
 * @ngdoc function
 * @name challengeApp.controller:FavoriteCtrl
 * @description
 * # FavoriteCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('FavoriteCtrl', function ($scope,$localStorage) {

	console.log($localStorage.food);
	$scope.favorites=$localStorage.favorites;

  });
