function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var task = taskInput.value;

  if (task !== "") {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);
    taskInput.value = "";
  }
}