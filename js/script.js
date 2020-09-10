var $todoTitle = document.querySelector("#todo-title");
var $todoDescrp = document.querySelector("#todo-descrp");
var $saveBtn = document.querySelector("#save-btn");
var $todoList = document.querySelector("#todo-list");
var $editTodo = document.querySelector("#edit-todo");

$todoTitle.focus();
// this is for user value title and description
var todoList = [];

//btn to create todo on click mathod
$saveBtn.addEventListener("click", function () {
  createTodo();
});

window.addEventListener("keyup", function(e) {
  var currentKey = e.key;

  // check enter for create todo
  if(currentKey.toLowerCase() === "enter") {
    createTodo();
  }

  if(e.key === "Escape") {
    window.close();
  }
  
});


//the function will create todo and get the data from user
function createTodo() {
  var titleVal = $todoTitle.value;
  var descrpVal = $todoDescrp.value;
  
  // event entered multiple spaces will be removed by trim() mathod
  if (titleVal.trim() != "") {
    todoList.push({
      title: titleVal,
      descrp: descrpVal
    });

    showDOMList();
    
    // reset user value and make focus on title input
    $todoTitle.value = "";
    $todoDescrp.value = "";
    $todoTitle.focus();
  } else {
    alert("Please enter todo title");
  }
}

// Show all data to the list output
function showDOMList() {

  //it will reset element on every click
  $todoList.innerHTML = "";
 
  
  for(var i=0; i < todoList.length; i++) {

  var iconEdit = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>`;
var iconDelete = `
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>`;

  var listDOM = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${todoList[i].title}</h5>
        <p class="card-text">${todoList[i].descrp}</p>
        
        <button type="button" class="btn btn-primary" 
          data-toggle="modal" data-target="#staticBackdrop"
          onclick="getTodoForUpdate(${i},'${todoList[i].title}', '${todoList[i].descrp.trim()}')">
          ${iconEdit}
        </button>

        <button type="button" class="btn btn-danger" onclick=deleteTodo(${i})>
          ${iconDelete}
        </button>

      </div>
    </div>
    `;

    //new created todo will be show here
    $todoList.insertAdjacentHTML(
      "beforeend",
      listDOM
    );
  }
  
  
}

// this will delete a item
function deleteTodo(index) {
  // delete item from the todo array
  todoList.splice(index,1);
  alert('Todo deleted!!!');

  showDOMList();

 }


 // get and set update value here
function getTodoForUpdate(index, title, descrp) {
  var $editTitle = $editTodo.querySelector("#todo-title-edit");
  var $editDescrp = $editTodo.querySelector("#todo-descrp-edit");
  var $btnUpdateTodo = $editTodo.querySelector("#updateTodo");

  $editTitle.value = title;
  $editDescrp.value = descrp;

  // fire update todo method on click
  $btnUpdateTodo.onclick =  function() {
    var updatedTitle = $editTitle.value;
    var updatedDescrp = $editDescrp.value;

    // update todo
    updateTodo(index, updatedTitle, updatedDescrp);
  }
}

// this will update a todo
function updateTodo(index, updatedTitle, updatedDescrp) {

  // update item from the todo array
  todoList.splice(index, 1, {
      title: updatedTitle,
      descrp: updatedDescrp
    }
  );
  

  showDOMList();
}

//store data upcoming task