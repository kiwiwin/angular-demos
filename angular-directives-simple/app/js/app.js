var simpleApp = angular.module('simpleApp', [
  'ngRoute',
  'simpleControllers',
  'simpleDirectives',
  'ui.bootstrap'
]);

simpleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/simple', {
        templateUrl: 'partials/simple.html',
        controller: 'SimpleCtrl'
      }).
      when('/not-simple', {
        templateUrl: 'partials/not-simple.html',
        controller: 'NotSimpleCtrl'
      }).
      otherwise({
        redirectTo: '/simple'
      });
  }]);