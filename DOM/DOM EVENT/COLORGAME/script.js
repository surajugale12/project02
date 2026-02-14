let button = document.querySelectorAll('button');
console.dir(button);

button.onclick = function(){
	console.log("button was clicked ");
	alert('heloo');
}

for(btn of button){
	btn.addEventListener("click",sayHelo);
	btn.addEventListener("click",apna);
}

function sayHelo(){
	alert("clicked ");
 console.log("i am suraj")
}
function apna(){
	alert("suraj ugale");
}

// activity 

let btn = document.querySelector('button');
let div = document.querySelector('div');


btn.addEventListener('click', function() {
	let h1 = document.querySelector('h1');
	let randomcolor = getRandom();
	h1.innerText = randomcolor;
	div.style.backgroundColor=randomcolor;
})

function getRandom(){
	let red = Math.floor(Math.random() * 255);
	let green = Math.floor(Math.random() * 255);
	let blue = Math.floor(Math.random() * 255);

	let color = `rgb(${red},${green},${blue})`;
	return color;
}


// keyword events 

let input = document.querySelector('input');

input.addEventListener("keydown",function(){
	 console.log("key was pressed ")
})

input.addEventListener("keyup",function(event){
	console.log("key :",event.key);
	console.log("code  :",event.code);
	 console.log("key was relesed  ");

})


