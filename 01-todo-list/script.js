const todoForm = document.querySelector("#todo-form");
const taskLIst = document.querySelector("#task-list")
const newTaskInput = document.querySelector("#new-task")


todoForm.addEventListener("submit", function(e){
    e.preventDefault();

    const taskText = newTaskInput.value.trim();

    if(taskText === "") return;

    const li = document.createElement("li")
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn")

    li.appendChild(deleteBtn)

    taskLIst.appendChild(li);

    newTaskInput.value ="";

    deleteBtn.addEventListener("click", ()=>{
        li.remove();
    })
})