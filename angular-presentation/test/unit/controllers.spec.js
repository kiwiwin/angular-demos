'use strict';

describe('Simple controllers', function() {
	var scope, ctrl, $httpBackend;

	var phonesRespond = function () {
		[
			{"name": "Nexus S",
			 "snippet": "Fast just got faster with Nexus S."},
			{"name": "Motorola XOOM™ with Wi-Fi",
			 "snippet": "The Next, Next Generation tablet."}
		]		
	}

	beforeEach(module('phoneApp'));


	beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET("phones/phones.json")
			.respond(phonesRespond());

		scope = $rootScope.$new();
		ctrl = $controller('PhoneListCtrl', {$scope: scope});
	}));


	it ('should create "phones" model with 2 phones fetched from xhr', function () {
		expect(scope.phones).toBeUndefined();
		$httpBackend.flush();


		expect(scope.phones).toEqual(phonesRespond());
	});

});
