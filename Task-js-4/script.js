let tasks = []
function showToDoList() {
    if (tasks == 0) {
        console.log("no tasks to be showed")
    }
    else {
        console.clear()
        console.table(tasks)

    }
}

function addTask() {
    let addTask = prompt("enter your task")
    tasks.push(addTask)
    showToDoList()
}

function removeTask() {
    let removeTask = +prompt("enter the number of task to be removed (starts from 0)")
    let wantsMultipleRemove = confirm("do you want to remove Multiple task")
    if (wantsMultipleRemove == true) {
        let numberToRemove = +prompt("how many tasks do you want to remove (min is 1)")
        tasks.splice(removeTask, numberToRemove)
    }
    else {
        tasks.splice(removeTask, 1)

    }
    showToDoList()
}

function updateTask() {
    let numberOfTask = +prompt("enter number of task to be replaced with")
    let replacingTask = prompt("enter new task")
    tasks[numberOfTask] = replacingTask
    showToDoList()
}

