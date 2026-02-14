function helo(){
	console.log("hello world !");
}

function PrintName(){
	console.log(" suraj ugale");
	console.log("hello world !")
}
helo();
PrintName();
printPoem();
dice();
dice();
dice();
dice();
dice();
printnameof("suraj");
average(1,2,4);
average(1,7,6);
console.log(average(1,12,34));
createtable(5);

function printPoem(){
	console.log(" twinmkle twinkel star ");
	console.log(" how i what  star !");
}

function dice(){
	let random = Math.floor(Math.random()* 6 +1);
	console.log("you got ",random);
}


function printnameof(name){
	console.log(name);
}

function average(a,b,c){
	let d = (a+b+c)/3;
	 return d;
}


function createtable(a){
	for( let i=1 ; i<=10 ; i++){
		let  b= a*i;
		 console.log(b);
	}
}

function calculatesum(n) {
	let d=0;
	for( let i =0 ; i<=n ; i++){
		d=i+d;
	}
	return d;
}

console.log(calculatesum(6));

let str = ["hi","hello","bye","!","patil"];

function concatstring(str) {
	let ans = "";
	let size = str.length;
	for(let i= 0; i<size ; i++){
	 ans  = ans.concat(str[i]);
	 
	}
	return ans;
}
console.log(concatstring(str));

let greet = "hello";  // global scope
function change(){
	let greet = "namaster"; //function scope
	console.log(greet);
	function innergreet(){
		console.log(greet); // lexical scope 
	}
	innergreet();
}
console.log(greet);
change();

// high oreder function 
function multipletime(fun, count){
	for( let i=1 ;  i<=count ; i++){
		fun();
	}
}

let greet01 = function(){
	console.log("helloo");
}
multipletime(greet01,7);