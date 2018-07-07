'use strict';

describe('Controller: CartOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('pizzaApp'));

  var CartOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartOrderCtrl = $controller('CartOrderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartOrderCtrl.awesomeThings.length).toBe(3);
  });
});
