var phoneDirectives = angular.module('phoneDirectives', []);

phoneDirectives.directive('phoneDetail', function() {
    return {
      restrict: 'E',
      scope: {
        phone: "=",
      },
      template: '{{phone.name}} [{{phone.snippet}}]'
    };
});