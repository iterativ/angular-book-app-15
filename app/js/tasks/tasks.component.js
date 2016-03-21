var itAppTasks = angular.module('itApp.tasks');

itAppTasks.component('tasks', {
    controller: TaskController,
    templateUrl: 'app/js/tasks/tasks.component.html'
});

function TaskController($log, taskService) {
    var $ctrl = this;
    $ctrl.tasks = [];
    $ctrl.taskInput = '';

    activate();

    function activate() {
        $log.debug('TaskController activated');

        taskService.getTasks().then(function(todos) {
            $ctrl.tasks = todos;
        });
    };

    $ctrl.addTask = function() {
        console.log('addTask called');
        if($ctrl.taskInput) {
            $ctrl.tasks.push({
                title: $ctrl.taskInput,
                done: false
            });
            $ctrl.taskInput = '';
        }
    };

    $ctrl.clickTask = function(task) {
        console.log('task clicked');
        task.done = true;
        console.log(task);
    }
}
