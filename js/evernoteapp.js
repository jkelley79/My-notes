var evernoteApp = angular.module('evernoteApp', [ 'evernoteControllers']);

evernoteApp.config(['$routeProvider', function($routeProvider)
{
  $routeProvider.
      when('/notes',
      {
        templateUrl: 'partials/notesList.html',
        controller: 'NotesListCtrl'
      }).
      when('/notes/editor',
      {
        templateUrl: 'partials/notesEdit.html',
        controller: 'NotesEditCtrl'
      }).
      when('/notes/:noteId',
      {
        templateUrl: 'partials/notesEdit.html',
        controller: 'NotesEditCtrl'
      }).
      otherwise({
        redirectTo: '/notes'
      });
}]);