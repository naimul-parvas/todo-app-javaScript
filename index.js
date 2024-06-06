const taskForm =document.getElementById("task-form")
const input =document.getElementById("task-input")
const submit =document.getElementById("submit")




 taskForm.addEventListener("submit", (e)=>{
   e.preventDefault();
  const task = input.value;
  if(task){
    console.log(task)
  }
  else{
    alert("please insert a task")
  setAttribute("readonly", "readonly")
  }
 

  //createNewTask()


  const TaskList = document.getElementById("task-list");




const taskDiv = document.createElement("div")


taskDiv.className = "task";
taskDiv.className = "flex";

const inputelement = document.createElement("input")

const taskName =document.createElement("input");
taskName.value =  input.value;
taskName.className = "w-[80%]";
taskName.type = "text";
taskName.setAttribute("readonly", "readonly" )



const buttong = document.createElement("div")
buttong.className = "w-[20%]";
buttong.className = "btn";




const deletebtn = document.createElement("button")

deletebtn.className = "delete";
deletebtn.innerHTML="delete"

const editbtn = document.createElement("button")
editbtn.className = "edit";
editbtn.innerHTML= "edit"




buttong.appendChild(deletebtn)
buttong.appendChild(editbtn)


taskDiv.appendChild(taskName)
taskDiv.appendChild(buttong)
TaskList.appendChild(taskDiv)

input.value =""
editbtn.addEventListener("click", (e)=>{
  if(editbtn.innerText.toLocaleLowerCase() === "edit"){
    editbtn.innerText = "save";
    taskName.removeAttribute("readonly");
    taskName.focus();
  }
  else{
    editbtn.innerText = "edit"
    taskName.setAttribute("readonly", "readonly")
  }
})

deletebtn.addEventListener("click" , (e)=>{
  TaskList.removeChild(taskDiv);
})


  });

  
  //function createNewTask(){
   // taskListDIV.innerHTML += input.value;
  //}


// submit.addEventLiestiner("click",  function (){

//   const inputValue = input.value;
//   console.log(inputValue);
//  })


//  function createTask() {

// const inputValue = input.value;
//  console.log(inputValue);



// }
//  submit.addEventListener("click",  createTask);





