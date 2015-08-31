'use strict';

/**
 * @ngdoc overview
 * @name challengeApp
 * @description
 * # challengeApp
 *
 * Main module of the application.
 */
angular
  .module('challengeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.bootstrap',
	'ngStorage',
	'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/foodhome.html',
        controller: 'FoodhomeCtrl',
        controllerAs: 'foodhome'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/foodHome', {
        templateUrl: 'views/foodhome.html',
        controller: 'FoodhomeCtrl',
        controllerAs: 'foodHome'
      })
      .when('/foodReport/:id', {
        templateUrl: 'views/foodreport.html',
        controller: 'FoodreportCtrl',
        controllerAs: 'foodReport'
      })
      .when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteCtrl',
        controllerAs: 'favorite'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
