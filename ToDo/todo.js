const addTask = document.querySelector(".add-task-conatiner");
const addTaskInput = document.querySelector(".add-task-input");
const addTaskBtn = document.querySelector(".add-task-btn");

const addedTasks = document.querySelector(".added-task-container");
const tasksList = document.querySelector(".tasks-list");


addTaskBtn.addEventListener('click', () => {
    const addedTaskLi = document.createElement("li");

    const newInput = document.createElement("input");
    newInput.value = addTaskInput.value;
    newInput.readOnly = true;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";


    tasksList.appendChild(addedTaskLi);
    addedTaskLi.appendChild(newInput);
    addedTaskLi.appendChild(editBtn);
    addedTaskLi.appendChild(deleteBtn);
    addedTaskLi.appendChild(checkbox);


    deleteBtn.addEventListener('click', () => {
        tasksList.removeChild(addedTaskLi)
    })
    
    editBtn.addEventListener('click', () => {
        
        switch (editBtn.innerText) {

            case "Edit":
                newInput.readOnly = false;
                editBtn.innerText = "Save";
                break;

            case "Save":
                newInput.readOnly = true;
                editBtn.innerText = "Edit";
                break;
        }
    })

    
    addTaskInput.value = "";
})