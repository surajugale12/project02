let body = document.querySelector('body');

let para = document.createElement('p');

para.innerText ="Heyy i`m red!";
body.appendChild(para);
para.style.color="red";

let heading = document.createElement('h3');
heading.innerText = "i`m a blue h3!";

body.append(heading);

heading.style.color="blue";

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "hii  i`m div ";
para2.innerText= "mee too!";

div.append(h1);
div.append(para2);

div.classList.add("div1");

body.append(div);



