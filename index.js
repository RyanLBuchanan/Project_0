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

// Class implementation 
class Car {
  name = 'Toyota Corolla';
  color;
  miles;
  year;

  odometerAdd(distance) {
    this.miles += distance;
  }
}

let myCat = new Car();
let anotherCar = new Car();

// Symbol implementation
// const SYMBOLPROPERTY = Symbol('This is a symbol description');
// let obj = {
//   aProperty: 'a string',
//   [SYMBOLPROPERTY]: 'this value is paired with a symbol',
//   myMethod: () => {
//     console.log('This is a method from an object.');
//   }
// }

// console.log(obj.aProperty);
// console.log(obj[SYMBOLPROPERTY]);
// obj.myMethod();