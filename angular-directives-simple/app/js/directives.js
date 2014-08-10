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




//DOM manipulation
simpleDirectives.directive('currentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
	function link(scope, element, attrs) {
		var format, timeoutId;

		function updateTime() {
			element.text(dateFilter(new Date(), format))
		}

		scope.$watch(attrs.currentTime, function (value) {
			format = value;
			updateTime();
		})

		element.on('$destroy', function() {
			$interval.cancel(timeoutId)
		})

		timeoutId = $interval(function() {
			updateTime();
		}, 1000)
	}

	return {
		link: link
	}
}])