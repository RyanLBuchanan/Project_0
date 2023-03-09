// import { myString, mySuperCoolFunction} from "./myJsModule.js";

let btn = document.querySelector('#btn');
let div = document.querySelector('#joke');
// let div = document.getElementById('joke');


btn.addEventListener('click', myFunc);
// btn.addEventListener('mouseover', myOtherFunc);

async function myFunc() {
  let category = 'animal';
  let response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
  let parsedRes = await response.json();
  console.log(parsedRes);
  div.innerHTML = parsedRes.value;
}

// function myOtherFunc() {
//   console.log('This is my other func');
// }

// function funcSwitch(x) {
//   switch (x) {
//     case 1: {
//       console.log('this is 1');
//       break;
//     }
//     case 2: {
//       console.log('this is 2');
//       break;
//     }
//   }
// }

// funcSwitch(1);


// mySuperCoolFunction();

// Class implementation 
// class Car {
//   name = 'Toyota Corolla';
//   color;
//   miles;
//   year;

//   constructor(name, color, miles, year){
//     this.name = name;
//     this.color = color;
//     this.miles = miles;
//     this._year = year;
//   }

//   odometerAdd(distance) {
//     this.miles += distance;
//   }

//   get age () {
//     const n = new Date();
//     console.log(n.getFullYear() - this.year);
//   }

//   set year(year) {
//     this._year = year;
//   }
// }

// let myCar = new Car('Dodge Challenger', 'black', 3, 2015);
// let anotherCar = new Car();
// console.log(myCar.name);
// myCar.odometerAdd(3000);
// console.log(myCar);
// console.log(`My car is ${myCar.age} years old.`);
// console.log(myCar);
// myCar.age;
// myCar.year = 1990;
// console.log(myCar);
// console.log('Something!');

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