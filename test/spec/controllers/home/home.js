'use strict';

describe('Controller: HomeHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('pizzaApp'));

  var HomeHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeHomeCtrl = $controller('HomeHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomeHomeCtrl.awesomeThings.length).toBe(3);
  });
});
