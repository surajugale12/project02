let pass = document.querySelector('#pass');
let user= document.querySelector('#user');
let btn= document.querySelector('button');
let form = document.querySelector('form');

form.addEventListener('submit',function(event){
	event.preventDefault();
	console.log(user.value);
	console.log(pass.value);
	console.log("form was submited ");

	alert(`hii ${user.value},and ${pass.value} is set `)
})