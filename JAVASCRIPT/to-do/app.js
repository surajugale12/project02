// let todo =[];
 
// let req = prompt("please enter your request");

// console.log(req);

// while(true){
// 	if(req == "quit"){
// 		console.log("quitting app");
// 		break;
// 	}
// 	if(req  == "list"){
// 	console.log("----------------");
// 	for(task of todo){
// 		console.log(task);
// 	} 
// 	console.log("------------");
// }
// else if(req == "add"){
// 	let task = prompt("please enter the task you want to add");
// 	todo.push(task);
// 	console.log("task added");
// }
// else if( req == "delete"){
// 	let idx = prompt("Please enter the task index ");
// 	todo.splice(idx,1);
// 	console.log("task deleted ");
// }
// else{
// 	console.log("wrong request ");
// }
// req = prompt("please enter your request");
// }


let btn= document.querySelector('button');
let input = document.querySelector('input');
let li = document.querySelectorAll('li');
let ul= document.querySelector('ul');

btn.addEventListener('click',function(){
	let item = document.createElement('li');
	item.innerText=input.value;
	console.log('task added');

	let delBtn = document.createElement("button");
	delBtn.innerText="delete";
	delBtn.classList.add("delete");

	item.appendChild(delBtn);
	ul.appendChild(item);
	input.value="";
})

ul.addEventListener('click',function(event ){
	
	if(event.target.nodeName ="BUTTON"){
		let listitem = event.target.parentElement;
		console.log(listitem);

		console.log("deleted  ");
		listitem.remove();
		alert("deleted ");
	}
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let para = this.parentElement;
//         console.log(para);
//         para.remove();
//     });
// }
