var simpleControllers = angular.module('simpleControllers', []);

simpleControllers.controller('SimpleCtrl', ['$scope', function ($scope) {
  $scope.categories = [
    { 
      title: 'Computers',
      categories: [
        {
          title: 'Laptops',
          categories: [
            {
              title: 'Ultrabooks'
            },
            {
              title: 'Macbooks'            
            }
          ]
        },
        {
          title: 'Desktops'
        },
        {
          title: 'Tablets',
          categories: [
            { 
              title: 'Apple'
            },
            {
              title: 'Android'
            }
          ]        
        }
      ]
    },
    {
      title: 'Printers'
    }
  ];
}]);