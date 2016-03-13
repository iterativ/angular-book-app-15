(function() {
  'use strict';

  angular.module('itApp.books').factory('bookNotesService', bookNotesService);

  function bookNotesService($q) {
    var notes = {};

    function listNotes(bookId) {
      return $q.when(notes[bookId]);
    }

    function saveNote(bookId, note) {
      var bookNotes = notes[bookId] || [];
      bookNotes.push(note);
      notes[bookId] = bookNotes;
      return $q.when(bookNotes);
    }

    return {
      listNotes: listNotes,
      saveNote: saveNote
    };
  }
}());
