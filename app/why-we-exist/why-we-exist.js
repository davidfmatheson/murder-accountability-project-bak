'use strict';

angular.module('myApp.why-we-exist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/why-we-exist', {
    templateUrl: 'why-we-exist/why-we-exist.html',
    controller: 'WhyWeExistCtrl'
  });
}])

.controller('WhyWeExistCtrl', [function() {

}]);
