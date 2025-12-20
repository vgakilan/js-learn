/*

let person = {
    name: ["Akilan", "Govindaraj"],
    age: 35,
    gender: "Male"
}

person.address = "Alta, Sweden"
person.name.push("Kiruthika")

console.log (person)

*/

/*

let about = "Akilan and Kiruthika are married.";

console.log(about.includes(""))

*/

/*

let a = 4;
a %= 2;
console.log(a)

*/

/*

let a = 2;
let b = "2";

console.log(a === b);

*/

/*

try {
  let x = y + 1; // y does not exist → error
  console.log(x);
} catch {
  console.log("Error happened");
}

*/


// If else practice
/*

let raining = prompt("Enter true or false");


if (raining) {
  console.log("Take umbrella");
} else {
  console.log ("Don't take umbrella")
}


// raining ? console.log ("Take Umbrella") : console.log ("Don't take")



*/

/*
let raining = prompt ("Enter true or false: ")

if (raining === "true") {
  console.log ("Take Umbrella")
}
*/




// Function for rainFunction


// function rainFunction (raining) {
//   /*
//   if (raining) {
//     return "Take Umbrella";
//   } else if (!raining){
//     return "Don't take umbrella";
//   }
//   */

//   return raining 
//     ? "Take Umbrella" 
//     : "Don't take umbrella";
// }

// raining = true

// //console.log(rainFunction(raining))


// console.log (`${rainFunction(raining)}`)

/* 

let a = 10;
let b = 20;
function calOperation(operator) {
  let c
  if (operator === '+') { 
    c = a + b
    // return c
  }
  else if (operator === '-') {
    c = a - b;
    // return c
  }
  return c
}

let operator = "-"
console.log(`User have entered ${operator}. So the result is ${calOperation(operator)}`)
// calOperation(operator);

*/

/*

// Switch

let operation = 5

switch (operation) {
  case 1: console.log(2+2);break;
  case 2: console.log(2-2);break;
  case 3: console.log(2*2);break;
  case 4: console.log(2/2);break;
  default: console.log ("Invalid Number, enter only from 1 to 4")
}

*/


/*

// for loop

const iterable = [1, 2, 3, 4, 5]

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

for (i of iterable) {
  console.log(i)
}

*/

/*

let arr = [12, 13, 14]

//console.log(arr.length)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// step 1: i = 0
// step 2: i < arr.length --> i < 3 --> 1 < 3? --? true
// step 3: i++ --> i = i + 1 --> 0 + 1 --> i = 1
// step 4: print arr[i] --> print arr[0] --> print 12
// step 5: continue until the loop is finished. 

*/

/*

// While loop
let i = 1;

while (i < 4) {
  // i++;
  console.log("You can't break me");
  break;
}

*/

/*

// do...while
let password;

do {
  password = "1234567";
} while(password.length < 6)

console.log("Accepted")

*/

/*

let i = 10;
while (i < 20) {
  if (i !== 13) {
    console.log(i)
    i++;
    continue;
  }
  i++
}

*/

//Functions

// Treditional function

/*

function greet (name) {
  return "Hello, " + name + "!"
}

// let user = "Akilan";
// console.log(greet(user))

// let user1 = "Don Kiruthika"
// console.log(greet(user1));

let message = greet("Don")
console.log(message)

*/


/*

function checkAge(age) {
  if (age >= 18) {
    return "You're an adult.";
  } else {
    return "You're a minor.";
  }
}


kiruthika_age = 28;
arya_age = 2;

console.log(`Age is ${arya_age}. So ${checkAge(arya_age)}`);

console.log(`Age is ${kiruthika_age}. So ${checkAge(kiruthika_age)}`);

*/

/*

function check_age(age) {
  if(age >= 18)
    return "You are an adult"
  return "You are a minor"
}

console.log(check_age(17));

*/

/*

let addition = function(a, b) {
  return a + b;
}

let c = addition(2, 3);
console.log(c);

*/

/*

let addition = function(a, b) {
  return a + b;
}(2, 3)

console.log(addition)

*/

// let x = 5;
// console.log(x++) //6 but prints 5
// console.log(++x) //7

/*

// Arrow function

let addition = (a, b) => a + b;

console.log (addition(2, 4))

*/

/*

// defining global variable. 

let a = 20;
let b = 10;

function addition (b = 12) {
  return a + b;
}

console.log(addition())

function subtract(b) {
  return a - b;
}

console.log(subtract(12))

*/

// Block scope

/*

let a = 30;
let b = 40;

{
  let a = 10;
  let b = 20;
}
{
  let c = 30;
  let d = 40;
}

console.log (a, b)

*/

// closure scope:

// without closure first. 

/*

function increase () {
  let count = 0;
  count = count + 1;
  return count;
}

console.log(increase())
console.log(increase())

*/


/*

function createIncrease () {
  let count = 0;
  
  return function () {
    count = count + 1;
    return count;
  };
}

const increase = createIncrease();
const increase1 = createIncrease();

console.log(increase()) //1
console.log(increase()) //2

console.log(increase1()) //1
console.log(increase1()) //2

*/

/*

function createIncrease () {
  let count = 0;
  count = count + 1;
  return count;
}

const increase = createIncrease();

console.log(increase)
console.log(increase)

*/

/*

const increase = (function () {
  let count = 0
  const nested = function () { return count = count + 1 }
  return nested
})()

console.log(increase())
console.log(increase())
console.log(increase())
console.log(increase())

*/

/*

// closure practice
function addition() {
  let a = 10;
  let b = 20;
  return function () {
    return a = a + b;
  }
}

cl_test = addition()
cl_test1 = addition()

console.log(cl_test())

console.log(cl_test1())

*/

// class


/*
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log (this.name + " says woof")
  }

  run() {
    console.log(this.name + " runs")
  }
}

const a = new Dog("Kabali");
const b = new Dog("Kiruthika");
const c = new Dog("Akilan");
const d = new Dog("Vesha Poochi");




a.bark()
a.run()
b.bark()
c.bark()
d.bark()

*/

/*

class Car {
  #make;

  constructor(make, model) {
    this.#make = make;
    this.model = model;
  }
  startEngine() {
    console.log (this.#make + " Durrrrrr")
  }
}



const a = new Car("Toyota", "Corolla")

a.startEngine();   
console.log(a.model);
console.log(a.#make);

*/

/*

// inheritance - extends - super

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  startEngine() {
    console.log (this.make + " durrrrrr")
  }
}

class Auto extends Car {
  constructor(make, model, year) {
    super(make, model)
    this.year = year
  }

  handGear() {
    console.log ("Hand gear is the only option")
  }
}

const auto = new Auto ("Bajaj", "Tuk Tuk", "2019");
auto.handGear()
auto.startEngine()
console.log(auto.model)
console.log(auto.year)

*/

/*

// Task 1: Function Basics

// Objective: Introduce students to JavaScript functions.

// Create a simple JavaScript function named greet that takes a name as a parameter and returns a greeting message. 
// For example, if the input is "Alice," the function should return "Hello, Alice!" Test the function with different names.

function greet (name) {
  return "Hello, " + name + "!"
}

console.log(greet("Kiruthika"))
console.log(greet("Akilan"))

*/

/*

// Task 2: Function Parameters and Return Values

//Objective: Practice using parameters and return values in functions.

//Write a function named calculateCircleArea that takes the radius of a circle as a parameter and returns its area. Test the function with different radius values.
//Create another function named calculateTriangleArea that takes the base and height of a triangle as parameters and returns its area. Test the function with different values for base and height.

// a = 3.141*(r ** 2)

function calculateCircleArea(r) {
  const a = Math.PI*(r ** 2);
  return a;
}

function calculateTriangleArea(b, h) {
  const a = (b * h) / 2;
  return a;
}

const radius = 6;
console.log(`The radius of the cirtcle is ${calculateCircleArea(radius)}.`)

const base = 10;
const height = 12;

console.log(`The are of triangle area is ${calculateTriangleArea(base, height)}.`)

*/

/*

Task 3: Function Expressions

Objective: Introduce function expressions and anonymous functions.

Declare a variable multiply and assign it an anonymous function that takes two numbers as parameters and returns their product. 
Use this function to calculate the product of two numbers.

function expression and anonymous function:
*/

/*

let a = function() {
  console.log();
}

//

*/

/*
const multiply = function (a, b) {
  return a * b
}
console.log (multiply(5, 6));
*/

/*

/*

Task 4: Classes and Objects

Objective: Explore JavaScript classes and objects.

1. 
Create a class named Person with properties for name, age, and email. 
Implement a constructor to initialize these properties. 
Create an instance of the Person class and display its properties.

2. 
Add a method to the Person class called greet that returns a greeting message including the person's name. 
Use this method to greet the person similar to the function that you created in task1

*/

/*

class Person {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  greet() {
    return "Hello " + this.name + "!"
  }
}

const user = new Person("Kiruthika", 28, "kiruthika_test@gmail.com")

console.log(user.name)
console.log(user.age)
console.log(user.email)

console.log(user.greet())

*/

/*

Task 6: Array Operations (Advanced)

Objective: Practice array manipulation and operations in JavaScript without using for loops.

1. Create an array named numbers and initialize it with a sequence of numbers (e.g., [2, 4, 6, 8, 10]).
2. Use the map method to create a new array named squaredNumbers. In this new array, each element should be the square of the corresponding element in the numbers array.
3. Use the reduce method to calculate the sum of all numbers in the numbers array and store it in a variable called totalSum.
4. Use the Math.max method to find the maximum value in the numbers array and store it in a variable called maxValue.
5. Use the Math.min method to find the minimum value in the numbers array and store it in a variable called minValue.
6. Display the squaredNumbers array, totalSum, maxValue, and minValue in the console.


*/

/*

//1
let numbers = [2, 4, 6, 8, 10];
console.log(numbers)

//2
let squaredNumber1 = numbers.map(num => num ** 2)
console.log(squaredNumber1)

//3

*/

// js-asynchronous: 


/*

function ringBell() {
  console.log("Ding dong!");
}

ringBell()
setTimeout(ringBell, 4000)

*/

/*

function cleanRoom(callback) {
  console.log("Cleaning room...");
  callback();
}

cleanRoom(function () {
  console.log("Mom! I'm done!");
});

*/

/*

function run(fn) {
  fn();
}

function greet() {
  console.log("Hello");
}

run(greet);

*/

/*

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Akilan", sayBye);


// 1. The greet function is called with two arguments:
//    the string "Akilan" and the function sayBye (passed by reference).
// 2. Inside greet, the name parameter receives "Akilan",
//    so console.log("Hello, " + name) prints "Hello, Akilan".
// 3. Then callback() is executed. Since callback refers to sayBye,
//    this is equivalent to calling sayBye(), which prints "Goodbye!".
//
// Output:
// Hello, Akilan
// Goodbye!

*/


/*

// fn = sayWelcome
// fn() = sayWelcome()

function sayHi(fn) {
  console.log("Hi");
  fn();
}

function sayWelcome() {
  console.log("Welcome")
}

function sayBye() {
  console.log("Bye")
}

sayHi(sayWelcome);
sayBye();

*/


/*

sayHi(sayWelcome);
// setTimeout(() => {
//   sayWelcome();
// }, 2000);

sayBye();
// a = 10
// b = 20

function addition(a, b) {
  return a + b;
}

console.log(addition(10, 20));

*/

// Promise: 

/*

let promise = new Promise ((resolved, rejected) => {
  if (condition)
    resolved ("Promise is resolved")
  else
    rejected ("Unfortunately not")
})

*/

/*

// let random = Math.round(Math.random())
// //let random = Math.random() * 10
// console.log(random)


let promise = new Promise ((resolve, reject) => {
  let random = Math.round((Math.random()) * 10)
  console.log(random)

  if (random % 2 === 0) {
    setTimeout (() => {resolve(random)}, 1000)
  }
  else
    setTimeout (() => {reject(random)}, 1000)
});

promise
  .then(console.log(promise))
  .then(response => { console.log (response, 'Even')})
  .catch(response => { console.log (response, 'Not Even!')})

// random = 2
// 2 % 2 === 0 ? after 1 sec resolve : after 1 sec reject

//JSON

let agent = `
{
  "messageCode": "",
  "timestamp": "2025-12-19-10.39.41.741000",
  "agents": [
    {
      "id": "75677",
      "companyCode": "1",
      "companyName": "NORRFINANS FÖRETAGSFÖRSÄKRING AB",
      "address": {
        "street": "MALMVÄGEN 5B",
        "postalCode": "98130",
        "city": "KIRUNA"
      },
      "phone": "0980-66960",
      "fax": "0980-12500",
      "email": "info@norrfinans.se",
      "organisationNumber": "5565956496",
      "category": "P75",
      "type": "752",
      "typeText": "Sak",
      "fieldOfficeCode": "9100",
      "costCenter": "4773",
      "registrationDate": "2000-10-01",
      "mainAgentId": "75677",
      "paymentType": "3",
      "clearingNumber": "9900",
      "bankAccountNumber": "55717961",
      "umbrellaCode": "03"
    }
  ],
  "diagnostics": {
    "errorNumber": "",
    "errorText": "",
    "sequenceNumber": "101",
    "errorModuleName": "M11C200",
    "callingModuleName": "M11C200",
    "sqlCode": "0",
    "logId": "2025-12-19-10.39.41.741000"
  }
}
`

//console.log(agent)
console.log(typeof(agent))
let agent_obj = JSON.parse(agent)
console.log(agent_obj.timestamp)
console.log(agent_obj)

*/

/*

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => console.log(data));

*/
/*
const p = new Promise((resolve, reject) => {
  // nothing here
});

p.then(v => console.log(v));
*/

/*


let p = new Promise ((resolve, reject) => {
  let arrived = true;
  if (arrived) {
    setTimeout(() => resolve("Arrived"), 1000)
  }
  else {
    setTimeout(() =>reject("Not arrived"), 4000)
  }
})

p
.then((resolve) => console.log(resolve))
.catch((reject) => console.log (reject))

*/

/*

let p = new Promise((resolve, reject) => {
  let arrived = true
  if (arrived) {
    setTimeout(() => resolve("Arrived"), 2000)
  } else {
    reject ("Not arrived")
  }
})

p
.then((rv) => console.log(rv))
.catch((rn) => console.log(rn))

*/

/*

// fetch

document.getElementById('btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
})

*/

// Async await

// Exercise 1 — Your first pause
// Goal: Understand that await pauses a function.
// Task:
// Write an async function that:
// Logs "Start"
// Waits 1 second
// Logs "End"

/*
async function async_learn() {
  console.log("Start");
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log("End")
}

async_learn()
*/


/*
async function async_learn() {
  console.log("Start");

  setTimeout(() => {
    console.log("I ran while waiting");
  }, 1000);

  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log("End");
}

async_learn();
*/

/*

// problem 2:

async function sequential() {
  console.log("A");
  await new Promise (resolve => setTimeout(resolve, 1000))
  console.log("B")
  await new Promise (resolve => setTimeout(resolve, 1000))
  console.log("C")
}

async function parallel() {
  await Promise.all([
    new Promise (resolve => setTimeout(resolve, 1000)),
    new Promise (resolve => setTimeout(resolve, 1000))
    ])
  console.log("Done");
}

sequential();
parallel();

*/

// Exercise 3 — Waiting for data, handling failure

// Goal:

// Learn how await + try / catch work together.

// Task

// 1. Create an async function called getNumber()

// 2. Inside it:
//      Wait 1 second
//      Then randomly:
//        resolve with the number 42
//        or throw an error "Failed"
//      Call the function and:
//        If it succeeds, log "Success: 42"
//        If it fails, log "Error: Failed"

// Rules

//    Use async / await
//    Use try / catch
//    Do not use .then() or .catch()
//    Use setTimeout wrapped in a Promise

async function getNumber() {
  await new Promise (resolve => setTimeout(resolve, 1000))
  if (Math.random() > 0.5) {
    return "42"
  } else {
    throw new Error("Failed")
  }
}

async function run() {
  try {
    const value = await getNumber();
    console.log("Success", value)
  }
  catch (err){
    console.log("Error:", err.message)
  }
}


run();