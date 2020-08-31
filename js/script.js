var $todoTitle = document.querySelector('#todo-title');
var $todoDescrp = document.querySelector('#todo-descrp');
var $saveBtn = document.querySelector('#save-btn');
var $todoList = document.querySelector('#todo-list');


	//for user value title and description
	var todoList = [
	{
		title: "dummy",
		descrp: "just description"
		}
	];
	
	//btn to handle create
	
	$saveBtn.addEventListener('click', function(){
			createTodo();
		
		
		
	});
	
	//the function will create todo and get the data
	
	function createTodo(){
	
		var titleVal = $todoTitle.value;
		var descrpVal = $todoDescrp.value;
		
		todoList.push({
			title: titleVal,
			descrp: descrpVal
		});
		
		//new created todo will show
		$todoList.insertAdjacentHTML("beforeend", 
		"<li>"+titleVal+" </li>"+"<p>"+descrpVal+"</p>");
		
	}