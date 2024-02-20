const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter"){addTask();}});
listContainer.addEventListener('click', (event) => {
    if (event.target.tagName === "LI"){event.target.classList.toggle("checked")}
    else if (event.target.tagName === "SPAN"){event.target.parentElement.remove()}
    saveData()
}, false)

function addTask(){
    if(inputBox.value === ''){
        alert("Error: Task have to have a name!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span");
        span.innerHTML =  "\u00d7";
        li.appendChild(span)
        saveData();
    }
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();