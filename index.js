let btn = document.querySelector('#btn');
let div = document.querySelector('#joke');

btn.addEventListener('click', myFunc);

async function myFunc() {
  let category = 'animal';
  let response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  let parsedRes = await response.json();
  console.log(parsedRes);
  div.innerHTML = parsedRes.value;
}