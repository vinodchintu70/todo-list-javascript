let taskInput = document.getElementById("taskInput");
let addTask = document.querySelector(".addTask");
let taskList = document.querySelector(".taskList");
let taskCount = document.querySelector(".taskCount");
let clearAll = document.querySelector(".clearAll");

let completedCount = 0;

addTask.addEventListener("click", addTaskValue);
clearAll.addEventListener("click", clearAllTasks);

function clearAllTasks() {
  taskList.innerHTML = "";
  completedCount = 0;

  taskCount.textContent =
    "Tasks: " + taskList.children.length +
    " | Completed: " + completedCount;
}

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTaskValue();
  }
});


function addTaskValue() {
  let task = taskInput.value;

  if (task !== "") {
    let taskContainer = document.createElement("div");
    let taskElement = document.createElement("p");
    let completedButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    taskElement.textContent = task;
    completedButton.textContent = "Completed";
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    completedButton.addEventListener("click", completedTask);
    deleteButton.addEventListener("click", deleteTask);

    function completedTask() {
      let isCompleted = taskElement.classList.toggle("completed");

      if (isCompleted) {
        completedCount++;
      } else {
        completedCount--;
      }

      taskCount.textContent =
        "Tasks: " + taskList.children.length +
        " | Completed: " + completedCount;
    }

    function deleteTask() {
      if (taskElement.classList.contains("completed")) {
        completedCount--;
      }

      taskContainer.remove();

      taskCount.textContent =
        "Tasks: " + taskList.children.length +
        " | Completed: " + completedCount;
    }

    taskContainer.classList.add("taskContainer");

    taskContainer.append(taskElement);
    taskContainer.append(completedButton);
    taskContainer.append(deleteButton);
    taskList.append(taskContainer);

    taskCount.textContent =
      "Tasks: " + taskList.children.length +
      " | Completed: " + completedCount;
  }

  taskInput.value = "";
}
