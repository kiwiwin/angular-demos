'use strict';

describe('Simple controllers', function() {
	beforeEach(module('phoneApp'));

	describe('phone controllers', function() {
		it('should get 2 phones', inject(function($controller) {
	    	var scope = {},
	        	ctrl = $controller('PhoneListCtrl', {$scope:scope});

	      	expect(scope.phones.length).toBe(2);
    	}))
	})
});
