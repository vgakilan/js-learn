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

let i = 10;
while (i < 20) {
  if (i !== 13) {
    console.log(i)
    i++;
    continue;
  }
  i++
}
