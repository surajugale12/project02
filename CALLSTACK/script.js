function one(){
	return 1;
};

function two(){
	return one() + one();
};

function three(){
	let ans =  two() + one();
	console.log(ans);

};

three();

let a = 20 ;

let h1 = document.querySelector('h1')


// function changeColor(color, delay){
// 	setTimeout( ()=>{
// 		h1.style.color =color;
// 	},delay);
// };

// 	changeColor("red",1000);
// 	changeColor("green",2000);
// 	changeColor("yellow",3000);




// callback nesting  == callback hell
function changeColor(color, delay){
	return new Promise( (resolve , reject) => {
			setTimeout( ()=>{
			h1.style.color =color;
			console.log(`colr changed to : ${color}`);	 
			resolve("color cahnged ");
		},delay);
	})
};
	async function demo(){
		try{
			await changeColor("red",1000);
			await changeColor("green",1000);
			await changeColor("blue",1000);
			await changeColor("yellow",1000);
		}
		catch (err){
			console.log(" error caght");
			console.log(err);  
		}
	}
	
	// changeColor("red", 1000).
	// then(() => {
	// 	console.log(" red color is completed ");
	// 	return changeColor("orange",1000);
	// })
	// .then(() => {
	// 	console.log("green color is completed ");
	// 	return changeColor("green",1000);
	// })
	// .then(() => {
	// 	console.log(" yellow color is completed ");
	// 	return changeColor("yellow",1000);
	// })
	// .then(() => {
	// 	console.log("pink color is completed ");
	// 	return changeColor("pink",1000);
	// })
	// .catch(() => {
	// 	console.log(" promise was reject ");
	// })


 
// setTimeout( () => {

// 	h1.style.color= " red";
// },2000);

// setTimeout( () => {

// 	h1.style.color= "orange";
// },3000);

// setTimeout( () => {

// 	h1.style.color= "green";
// },4000);




// function savetoDb(data,succes , faliure ){
// 	let internetSped = Math.floor(Math.random() * 10 +1)
// 		if(internetSped > 4){
// 			succes();
// 		 }
// 		else {
// 			faliure();
// 		}
// 	}
	//  savetoDb(
	// 	"apna collage",
	// 	() => {
	// 		console.log("Success : you data was saved");
	// 		savetoDb(
	// 		" suraj ugale",
	// 		() => {
	// 			console.log("Success : you data was saved");
	// 			savetoDb(
	// 			"patil",
	// 			()=>{
	// 			console.log("Success : you data was saved");
	// 			},
	// 			() => {
	// 			console.log("Faliure : you data was not saved");
	// 			}
	// 		);
	// 		},
	// 		() => {
	// 			console.log("Faliure : you data was not saved");
	// 		}
	// 	);

	// 	},
	// 		() => {
	// 			console.log("Faliure : you data was not saved");
	// 	}
	//  );


	 						
	 					// promise 
		 
	//  	function savetoDb(data){

	// 		return new Promise((resolve , reject) => {
	// 			let internetSped = Math.floor(Math.random() * 10 +1)
	// 				if(internetSped > 4){
	// 					resolve("succes : your data was saved ");
	// 				 }
	// 				else {
	// 					reject("Failure : your data was not seved ");
	// 				}

	// 		});
	// }

	// let request = savetoDb("apn collage ")
	//  request
	//  .then((result) => {
	// 	console.log("data1 saved   ");
	// 	console.log(result)
	// 	 return savetoDb(" hello world ") ;
	//  })
	//  .then(()=>{
	// 		console.log("data2 saved ");
	// 		console.log(result)
	// 		return savetoDb("patil");
	// 	})
	// 	.then(()=>{
	// 		console.log("data3 saved ");
	// 		console.log(result)
			
	// 	})
	//  .catch((error) => {
	// 	 console.log(" promise was reject")
	// 	 		console.log(error);

	//  })