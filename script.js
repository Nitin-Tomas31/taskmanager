let tasks = [];


function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        tasks.push(taskValue);
        taskInput.value = '';
        updateTaskList();
    } else {
        alert("Please enter a task");
    }
}

function removeLastTask() {
    if (tasks.length > 0) {
        tasks.pop();
        updateTaskList();
    } else {
        alert("No tasks to remove");
    }
}

function updateTaskList() {
    const taskUl = document.getElementById('task-ul');
    taskUl.innerHTML = '';

    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskUl.appendChild(li);
    });
}
