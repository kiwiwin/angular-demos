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