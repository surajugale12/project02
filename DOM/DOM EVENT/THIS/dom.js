

// let smallimg = document.getElementsByClassName("oldimg");

// for(let i=0 ; i<smallimg.length ; i++ ){
// 	smallimg[i].src ="images.jfif";
// 	console.log(` value of cahnging index is ${i} done`);
// }
let anch = document.querySelectorAll('ul li a');

console.dir(anch);

// for( let i =0 ; i<anch.length ; i++){
// 	anch[i].style.color ="red";
// }

// for(link of anch){
// 	link.style.color= "green";
// }
anch.forEach( link => {
	link.color="yellow";
});