function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerText = taskText;
    // Mark as Completed
    span.addEventListener("click", function() {

        if(!li.classList.contains("completed")){
            li.classList.add("completed");
            span.innerText = "✓ " + taskText + " (Completed)";
        }
    });
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}