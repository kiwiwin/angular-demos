var simpleControllers = angular.module('simpleControllers', []);

simpleControllers.controller('SimpleCtrl', ['$scope', function ($scope) {
  $scope.messages = [
    {
      "from": "kiwi",
      "to": "rococojie",
      "text": "hello, rococojie"
    },{
      "from": "rococojie",
      "to": "kiwi",
      "text": "hello, kiwi"
    }
  ]
}]);