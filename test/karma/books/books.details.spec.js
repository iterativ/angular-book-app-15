'use strict';

describe('booksDetail component controller', function () {

  var bookController;
  var bookNotesService;
  var $q;

  // load the controller's module
  beforeEach(module('itApp'));

  beforeEach(inject(function($componentController, $rootScope, _$q_, _bookNotesService_) {
    $q = _$q_;
    bookNotesService = _bookNotesService_;
    bookController = $componentController('bookDetail', {
      $scope: $rootScope.$new(),
      bookNotesService: bookNotesService
    });
  }));

  it('call of saveNote() will call bookNotesService.saveNote() with the correct parameters', function () {
    spyOn(bookNotesService, 'saveNote').and.returnValue($q.when([]));

    bookController.book = {id: 1};
    bookController.saveNote();

    expect(bookNotesService.saveNote).toHaveBeenCalled();
  });

});
