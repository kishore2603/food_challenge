'use strict';

describe('Controller: FoodhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var FoodhomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodhomeCtrl = $controller('FoodhomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FoodhomeCtrl.awesomeThings.length).toBe(3);
  });
});
