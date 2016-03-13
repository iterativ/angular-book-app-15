'use strict';

describe('examples component controller', function () {

  var exampleController;

  // load the components module
  beforeEach(module('itApp.examples'));

  // inject $componentController helper service
  beforeEach(inject(function($rootScope, $componentController) {
    // create instance of component controller
    exampleController = $componentController('examples', {
      $scope: $rootScope.$new()
    });
  }));

  it('has initialized $ctrl.testData in controller creation', function () {
    expect(exampleController.testData).toEqual(['a', 'b', 'c']);
  });

});
