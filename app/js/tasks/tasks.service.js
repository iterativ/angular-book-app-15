angular.module('itApp.tasks').factory('taskService', taskService);

function taskService($http, $q, $localForage) {
    var tasksUrl = 'http://jsonplaceholder.typicode.com/todos';

    var cache = null;

    function getTasks() {
        if(cache) {
            return $q.when(cache);
        }
        else {
            return $http.get(tasksUrl).then(function(response) {
                console.log(response);
                cache = response.data;
                return $localForage.setItem('todos', response.data).then(function() {
                    return response.data;
                });
            }, function(error) {
                console.log(error);
                return $localForage.getItem('todos');
            });
        }
    }

    return {
        getTasks: getTasks
    }
}