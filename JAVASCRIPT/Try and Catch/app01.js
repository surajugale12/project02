
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

try {
	console.log(a);
}catch(err){
	console.log(" a is not defined bahi");
	console.log(err);
}
console.log("hello02");
console.log("hello02");
console.log("hello02");
console.log("hello02");

const multi = (a,b) => (a*b);

console.log(" hii there ");
// setTimeout( ()=> {
// 	console.log("suraj ugale ");
// },5000);
console.log("WElcome to !");
console.log("WElcome to !");
console.log("WElcome to !");

//  let id =setInterval( ()=> {
// 	console.log("set interval"); 
// },2000);  // to stop this function we will use clearinterval(id);

// console.log(id);
const square = (a) => (a*a);

let id =setInterval( () => {
		console.log("hello world !");
	},2000);

setTimeout( ()=> {
	clearInterval(id);
	console.log("clear interval run");
},10000);  



let length = 4;
function callback(){
	console.log(this.length);
}

let ans = [1,2,3,4].reduce((res , el) => (res+el));


let max = [1,2,3,4].reduce((res , el) =>{
	if( res < el ){
		return el ;
	}
	else {
		return res ;
	}
});

let nums = [ 5,10,20, 30,40];

let div = nums.every((el) => el % 10 ==0 ); 


let min = [1,2,3,4].reduce((res , el) =>{
	if( res < el ){
		return res ;
	}
	else {
		return el ;
	}
});