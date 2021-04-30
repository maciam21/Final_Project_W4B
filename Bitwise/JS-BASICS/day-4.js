//Primatives

const numbers =1;
const string = '';
const boolean = true;
const string = 'string'+ "string" + '${numbers}    ${6}';



// Complex / Containers

const array = [1, 2, 3, 4 ,'hi', true, [], {} ];
const object = {lenths: 5, username: 'v', isActive: true, myArray: array}

console.log(string);

//Document

console.log(document.body);

//HTML


//Create a tag in memory
const pTag = document.createElement('p');

//Place a tag in the view

document.body.appendChild(pTag);


//Write text inside of a tag:
pTag.innerHTML='Day 4 : Overview';



pTag.innerHTML=string;


//CSS
//Change stule of something
pTag.style.backgroundColor ='green';

//CSS examples 
pTag.style.border = '50px solid red';


//Select


const someVariable = document.querySelector('h1');
const oneTag = document.querySelector('h1');   //one item
const multipleTags = Document.querySelectorAll('h1'); // all the items

//Select more that one tag

console.log ('oneTag', oneTag);
console.log ('multipleTags' , multipleTags);


//Logic. Choices


if (numbers ===20) {

console.log;('run this code')
} else {

console.log (don/'t run that code. eun this code.')

} 










