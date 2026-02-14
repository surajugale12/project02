
let max = prompt("Enter the max number ");

let ans  = Math.floor(Math.random() * max+ 1) ;

let guess = prompt(" guess number :");

while(true){
	if( guess == "quit"){
		console.log("User quit");
		break;
	}
	if( guess == ans){
			console.log(" you are right guess !! random values is " ,ans);
			break;
	}
	else if( guess < ans){
		guess =prompt(" hint :your guess was too small !");
	}
	else{
		guess =prompt(" hint :your guess was wrong too big !");
	}
}