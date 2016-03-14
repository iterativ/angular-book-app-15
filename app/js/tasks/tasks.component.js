angular.module('itApp.tasks').component('tasks', {
    controller: TaskController,
    templateUrl: 'app/js/tasks/tasks.component.html'
});

function TaskController() {
    var $ctrl = this;
    $ctrl.tasks = [];
    $ctrl.taskInput = '';

    $ctrl.addTask = function() {
        console.log('addTask called');
        if($ctrl.taskInput) {
            $ctrl.tasks.push({
                name: $ctrl.taskInput,
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
