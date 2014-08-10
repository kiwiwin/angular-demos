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

  $scope.person = {
    name: "jack",
    age: 18
  }
}]);

simpleControllers.controller('NotSimpleCtrl', ['$scope', function ($scope) {
  $scope.m = {
    from: "kiwi win",
    to: "rococojie cao",
    text: "hello, my dear rococojie cao"
  }
}]);