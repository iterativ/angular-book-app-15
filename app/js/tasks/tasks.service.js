angular.module('itApp.tasks').factory('taskService', taskService);

function taskService(createLocalStorageService) {
    return createLocalStorageService.create('http://jsonplaceholder.typicode.com/todos', 'todos');
}

/*
function userService(createLocalStorageService) {
    return createLocalStorageService.create('userUrl', 'users');
}
*/