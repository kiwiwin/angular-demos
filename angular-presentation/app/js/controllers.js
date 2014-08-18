var phoneControllers = angular.module('phoneControllers', []);

	phoneControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('phones/phones.json').success(function (data) {
			$scope.phones = data;
		});
	}]);


phoneControllers.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$http.get('phones/' + $routeParams.phoneId + '.json').success(function (data) {
		$scope.phone = data;
	});
}]);