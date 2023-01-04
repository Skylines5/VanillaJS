let mainTextarea = document.getElementById("mainTextarea");
let addedNoteContainer = document.getElementById("addedNoteContainer");
let addBtn = document.getElementById("addBtn");

let textInPopup = document.querySelector(".textInPopup");
let btnPopUpDlt = document.getElementById("btnPopUpDlt");
let overlay = document.getElementById('overlay');
let popUp = document.getElementById('popUp');


addBtn.addEventListener("click", function() {
    let text = mainTextarea.value 

    let addedNoteDiv = document.createElement("div");
    addedNoteDiv.classList.add("addedNote");
    addedNoteContainer.appendChild(addedNoteDiv);

    let addedNoteTitle = document.createElement("h3");
    addedNoteTitle.classList.add("header");
    addedNoteTitle.innerText = "Note";
    addedNoteDiv.appendChild(addedNoteTitle)

    let addedTextarea = document.createElement("textarea");
    addedTextarea.classList.add("textareaAdded");
    addedTextarea.value = text;
    addedTextarea.setAttribute("readonly", "readonly");
    addedNoteDiv.appendChild(addedTextarea);

    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerText = "Edit";
    addedNoteDiv.appendChild(editBtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText = "Delete";
    addedNoteDiv.appendChild(deleteBtn);

    let viewBtn = document.createElement("button");
    viewBtn.classList.add("viewBtn");
    viewBtn.innerText = "View";
    addedNoteDiv.appendChild(viewBtn);


    textInPopup.innerText = text;
    mainTextarea.value = "";

    editBtn.addEventListener("click", function() {
        if(editBtn.innerText.toLocaleLowerCase() == "edit") {
            addedTextarea.removeAttribute("readonly");
            addedTextarea.focus();
            editBtn.innerText = "Save";
        } else {
            addedTextarea.setAttribute("readonly", "readonly");
            editBtn.innerText = "Edit";
        }
    })

    deleteBtn.addEventListener("click", function() {
        addedNoteContainer.removeChild(addedNoteDiv);
    })

    viewBtn.addEventListener("click", function() {
        popUp.classList.add("active");
        overlay.classList.add("active");
    })

    btnPopUpDlt.addEventListener("click", function() {
        popUp.classList.remove("active");
        overlay.classList.remove("active");
    })

})
