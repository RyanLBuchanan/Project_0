let btn = document.querySelector('#btn');
let div = document.querySelector('#joke');

btn.addEventListener('click', myFunc);

async function myFunc() {
  let category = 'animal';
  let response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  let parsedRes = await response.json();
  div.innerHTML = parsedRes.value;
}



// // Single lin comment
// let myString = "This is my string";

// /* This is a 
// multiline comment */

// function myFunc () {
//   console.log(myString);
// }

// myFunc();

// console.log(`This is a string of text ${placeholder}`);