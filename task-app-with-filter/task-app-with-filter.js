const textInput = document.getElementById("textInput");
const cancel = document.getElementById("cancel");
const description = document.querySelectorAll(".description");
const errorMessage = document.getElementById("errorMessage");
const todoTable = document.getElementById("todoTable");
const inputedErrorText = document.getElementById("inputedErrorText");

// state
const taskDetails = {
  taskList: [
    {
      sn: 1,
      description: "Do some shopping at mixLand shopping mall",
      status: "done",
      date: "30th Nov, 2023",
      priority: "high",
    },

    {
      sn: 2,
      description: "	Attend coding with George class",
      status: "inprogress",
      date: "30th Nov, 2023",
      priority: "low",
    },

    {
      sn: 3,
      description: "Go to the saloon to make my hair",
      status: "todo",
      date: "30th Nov, 2023",
      priority: "medium",
    },

    {
      sn: 4,
      description: "Go to the saloon to make my hair",
      status: "todo",
      date: "30th Nov, 2023",
      priority: "high",
    },

    {
      sn: 5,
      description: "	Go out and have some fun with friends",
      status: "inprogress",
      date: "30th Nov, 2023",
      priority: "high",
    },
    {
      sn: 6,
      description: "Create a schedule for the Next Day",
      status: "inprogress",
      date: "30th Nov, 2023",
      priority: "low",
    },
    {
      sn: 7,
      description: "	Read my books",
      status: "done",
      date: "30th Nov, 2023",
      priority: "low",
    },
  ],
};




// adding focus event to the search input to display the cancel button
textInput.addEventListener("focus", () => {
  cancel.style.display = "block";
});

// adding blur event to the search input to display the cancel button
textInput.addEventListener("blur", () => {
  cancel.style.display = "none";
});

// empty the search input when cancel btn is clicked
cancel.addEventListener("mousedown", (e) => {
  e.preventDefault();
  textInput.value = "";
createTable(taskDetails.taskList);

});


// create table dynamically 

function createTable(data) {
  const myTable = document.getElementById("myTable");
  myTable.innerHTML=''

  data.forEach(el=>{
    const tr = document.createElement("tr")
    tr.className= 'description'
    tr.innerHTML = `
    <td>${el.sn}</td>
    <td class='des'>${el.description}</td>
    <td><button class="btn ${el.status}">${el.status}</button></td>
    <td>${el.date}</td>
    <td><button class="btn ${el.priority}">${el.priority}</button></td>
    <td><i class="fa-solid fa-ellipsis-vertical"></i></td>
 
    `;

    myTable.append(tr)
  })


}

createTable(taskDetails.taskList);

// filter functionality

textInput.addEventListener("input", () => {
  const value = textInput.value;
  const dataCopy= [...taskDetails.taskList]
  const data = dataCopy.filter(el=> el.description.toLowerCase().includes(value.toLowerCase()) )
  if (data.length <= 0) {
    todoTable.style.visibility="hidden"
    inputedErrorText.textContent=`"${value}"`
    errorMessage.style.display="block"

  }else{
    todoTable.style.visibility="visible"
    inputedErrorText.textContent=''
    errorMessage.style.display="none"
  }
  createTable(data);
});



