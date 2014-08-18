var phoneApp = angular.module('phoneApp', []);

phoneApp.controller('PhoneListCtrl', function ($scope, $http) {
	$http.get('phones/phones.json').success(function (data) {
		$scope.phones = data;
	});
});