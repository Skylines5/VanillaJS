const container = document.getElementById('container');
const input = document.getElementById('input-task');
const addedTask = document.getElementById('added-task');
const addSection = document.getElementById('addedSection')
let btnAdd = document.getElementById('add');


btnAdd.addEventListener('click', function(){
    task = input.value;
    if(!task) {
        alert("Favor de agregar tarea / Please add a task");
        return;
    }
    //create div with the new task and elements
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("added-task")
    addSection.appendChild(taskDiv)

    //add input
    const addedInput = document.createElement("input");
    addedInput.classList.add("added-input");
    addedInput.type = "text";
    addedInput.value = task;
    addedInput.setAttribute("readonly", "readonly");
    taskDiv.appendChild(addedInput);

    //add buttons 
    const editBtn = document.createElement('button');
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "Edit";
    taskDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "X";
    taskDiv.appendChild(deleteBtn);

    input.value = "";

    //give a functionality to the buttons 
    editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLocaleLowerCase() == "edit") {
            addedInput.removeAttribute("readonly");
            addedInput.focus();
            editBtn.innerText = "Save";
        }else {
            addedInput.setAttribute("readonly", "readonly");
            editBtn.innerText = "Edit"
        }
    });

    deleteBtn.addEventListener('click', () => {
        addSection.removeChild(taskDiv)
    });

    //add checkbox
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox"
    taskDiv.appendChild(checkBox);

});

