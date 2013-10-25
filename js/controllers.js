var evernoteControllers = angular.module('evernoteControllers', []);

// List controller for notes application.
evernoteControllers.controller('NotesListCtrl', ['$scope', '$routeParams', function($scope, $routeParams)
{
    $scope.loadNotes = function()
    {
        $scope.notes = []
        for(var key in localStorage)
        {
            // Load all notes from local storage
            if(key.indexOf("note-") == 0)
            {
                $scope.notes.push(JSON.parse(localStorage[key]));
            }
        }
    }

    $scope.delete = function(id) {

        if(localStorage["note-" + id])
        {
            // Remove the specific note from localStorage
            localStorage.removeItem("note-" + id);
            $scope.loadNotes();
            window.location.href = "#/notes";
        }
    }

    // Load the notes
    $scope.loadNotes();

}]);

// Edit controller for notes application
evernoteControllers.controller('NotesEditCtrl', ['$scope', '$routeParams', function($scope, $routeParams)
{
    $scope.cancel = function()
    {
        // Return to the main page
        window.location.href = "#/notes";
    }

    $scope.get = function(id)
    {
        var note;
        // Locate the specific
        if(localStorage["note-" + id])
        {
            note = JSON.parse(localStorage["note-" + id]);
        }
        return note;
    }

    $scope.save = function()
    {
        if(!$scope.note.hasOwnProperty('id'))
        {
            // Dynamicall assign the id to new notes
            $scope.note.id = new Date().getTime();
        }
        // Set the updated timestamp
        $scope.note.updated = new Date();

        // Store the note and redirect
        localStorage["note-" + $scope.note.id] = JSON.stringify($scope.note);
        window.location.href = "#/notes";
    }

    // Set the note to the current noteId on the params
    $scope.note = $scope.get($routeParams.noteId);

}]);