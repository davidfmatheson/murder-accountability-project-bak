'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'googlechart',
  'myApp.home',
  'myApp.view2',
  'myApp.why-we-exist',
  'myApp.who-we-are',
  'myApp.clearance-rates',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
