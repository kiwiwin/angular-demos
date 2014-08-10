var simpleDirectives = angular.module('simpleDirectives', []);

simpleDirectives.directive('person', function() {
	return {
		template: 'Person: {{ person.name }}, age: {{ person.age }}'
	}
})

simpleDirectives.directive('msg', function() {
	return {
		template: 'From: {{ m.from }}, To: {{ m.to }}, Text: {{ m.text }}'
	}
})

simpleDirectives.directive('detail', function() {
	return {
		templateUrl: 'partials/msg.html'
	}
})

simpleDirectives.directive('msgElement', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/msg.html'
	}
})

simpleDirectives.directive('msgScopeElement', function() {
	return {
		restrict: 'E',
		scope: {
			message: "=message"
		},
		templateUrl: 'partials/msg-scope.html'
	}
})