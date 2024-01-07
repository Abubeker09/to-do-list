const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if(inputBox.value === ''){
    alert('Please enter a task');
  }
  else{
    let li = document.createElement('li');
    li.className = 'unchecked';
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value='';
    saveData()

    let span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
}

listContainer.addEventListener("click", (e) => {
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }
  else if(e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
},false)

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function getData() {
   listContainer.innerHTML = localStorage.getItem("data")
}

getData()