 

let gameseq=[];
let userseq=[];
let highScore = 0;

let batns = ["yellow","red","green","purple"];


let start = false;
let  level =0;
let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
	 if(start==false){
		console.log('game start '); 
		start = true;
		
	 }
	 levelUp();
});

function gameFlash(btn){
	btn.classList.add("flash");
	setTimeout(function()  {
		btn.classList.remove("flash");
	}, 250);
}

function userFlash(btn){
	btn.classList.add('userFlash');
	setTimeout(function()  {
		btn.classList.remove("userFlash");
	}, 250);
}

function levelUp(){
	userseq=[];   
	level++;
	h2.innerText = `Level ${level} | High Score: ${highScore}`;

	 let randomIdx = Math.floor(Math.random() * 4);
	 let randColor = batns[randomIdx];
	 let randBtn = document.querySelector(`.${randColor}`);
	//  console.log(randomIdx);
	//  console.log(randColor);
	//  console.log(randBtn);
		gameseq.push(randColor);
		console.log(gameseq);
	gameFlash(randBtn);

}

function checkAns(idx){
	// console.log(`current level: ${level}`);
	
	if(gameseq[idx] === userseq[idx]){
		if(gameseq.length === userseq.length){
			setTimeout(levelUp(),1000);
		}
		else{
			
		}
	}
	else{
		if(level > highScore){
		highScore = level;
		updateFooter();
	}
			h2.innerText =`game is over ! press any key to play <br>your score is : ${level}`  ;
		 	document.querySelector('body').style.backgroundColor ="red";
			setTimeout(function(){
				document.querySelector('body').style.backgroundColor ="white";
			},150);
			reset();
	}
}

function btnPress(){
	let btn = this ;
	userFlash(btn);
	userColor = btn.getAttribute('id');
	userseq.push(userColor);
	checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
	btn.addEventListener('click',btnPress);
}
let footer = document.querySelector('footer');


function updateFooter() {
	footer.innerText = `Highest Score: ${highScore}`;
}


function reset(){
	start = false;
	gameseq = [];
	userseq = [];
	level =0; 
}