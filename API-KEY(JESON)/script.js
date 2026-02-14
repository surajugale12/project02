// let jesOn = `{"fact":"The first formal cat show was held in England in 1871; in America, in 1895.","length":75}`;

// const { DEFAULT_EXCLUDED_ENV_VARS } = require("@google/gemini-cli/dist/src/config/settings");

// console.log(jesOn);

// let validRes = JSON.parse(jesOn);
// console.log(validRes.fact);

// let student = {
// 	name : "suraj",
// 	rollNo : 54,
// 	user : "patil@12"
// }

// let a =  JSON.stringify(student);
// console.log(a);

// let url ="https://mai-ko.com/travel/japanese-history/museum-notes/ninja/"

// fetch(url);

let btn = document.querySelector('button');
let p = document.querySelector('p');

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener('click',async function() {
	let link = await getImage();
	let fact = await getFacts();
	console.log(fact);
	p.innerText=fact;
	let img = document.querySelector('img');
	img.setAttribute("src",link); 
})
async function getImage() {
	try{
		let res = await axios.get(url2);
		return res.data.message;
	}
	catch(e){
		console.log("error -",e);
		return "no fact found ";
	}
}
async function getFacts() {
	try{
		let res = await axios.get(url);
		return res.data.fact;
	}
	catch(e){
		console.log("error -",e);
		return "no fact found ";
	}
}
