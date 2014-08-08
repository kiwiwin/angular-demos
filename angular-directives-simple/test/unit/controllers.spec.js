'use strict';

describe('Simple controllers', function() {
	beforeEach(module('simpleApp'));

	describe('simpleControllers', function() {
		it('should get 2 messages', inject(function($controller) {
	    	var scope = {},
	        	ctrl = $controller('SimpleCtrl', {$scope:scope});

	      	expect(scope.messages.length).toBe(2);
    	}))
	})
});
