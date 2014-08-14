var simpleApp = angular.module('simpleApp', [
  'ngRoute',
  'simpleControllers',
  'ui.bootstrap'
]);

simpleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/simple', {
        templateUrl: 'partials/simple.html',
        controller: 'SimpleCtrl'
      }).
      otherwise({
        redirectTo: '/simple'
      });
  }]);