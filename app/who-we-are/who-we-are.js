'use strict';

angular.module('myApp.who-we-are', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/who-we-are', {
    templateUrl: 'who-we-are/who-we-are.html',
    controller: 'WhoWeAreCtrl'
  });
}])

.controller('WhoWeAreCtrl', [function() {

}]);
