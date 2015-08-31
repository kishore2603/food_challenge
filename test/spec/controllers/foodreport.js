'use strict';

describe('Controller: FoodreportCtrl', function () {

  // load the controller's module
  beforeEach(module('challengeApp'));

  var FoodreportCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodreportCtrl = $controller('FoodreportCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FoodreportCtrl.awesomeThings.length).toBe(3);
  });
});
