'use strict';

describe('Controller: Page7Ctrl', function () {

  // load the controller's module
  beforeEach(module('finalApp'));

  var Page7Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Page7Ctrl = $controller('Page7Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Page7Ctrl.awesomeThings.length).toBe(3);
  });
});
