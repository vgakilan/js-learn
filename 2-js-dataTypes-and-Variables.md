## 1) Type Conversion (Built-in Functions) (page 3) 

```js
parseInt("10");        // 10
parseFloat("10.5");   // 10.5
isNaN("abc");          // true
String(123);           // "123"
(123).toString();      // "123"
```

---

## 2) Implicit Type Conversion (Quiz Trap) (pages 4–5) 

```js
let num = 10;
let str = "5";

num + str;   // "105"  (string concatenation)
num - str;   // 5      (string converted to number)
```

**Rule:** `+` prefers strings. Other math operators prefer numbers.

---

## 3) Common Input Mistake & Fix (pages 6–7) 

❌ Wrong:

```js
let input = prompt("Enter a number:");
let result = input * 2; // may become NaN
```

✅ Correct:

```js
let input = prompt("Enter a number:");
let num = parseInt(input);

if (!isNaN(num)) {
  console.log(num * 2);
} else {
  console.log("Invalid input");
}
```

---

## 4) Arrays Basics (pages 8–11) 

```js
const cars = ["Saab", "Volvo", "BMW"];
cars[0];           // "Saab"
cars.length;       // 3
cars.push("Audi"); // add at end
```

Arrays can hold mixed types:

```js
const person = ["John", "Doe", 46];
```

---

## 5) Arrays vs Objects (Important Rule) (page 12) 

* **Arrays** → numbered indexes
* **Objects** → named properties

❌ Bad practice:

```js
const person = [];
person["name"] = "John";
person.length; // 0 ❌
```

✅ Use object instead:

```js
const person = {
  name: "John",
  age: 46
};
```

---

## 6) Array Methods (pages 15–17) 

```js
let fruits = ["Apple", "Banana", "Mango"];

fruits.toString();      // "Apple,Banana,Mango"
fruits.join(" - ");     // "Apple - Banana - Mango"

fruits.pop();           // removes last
fruits.push("Orange"); // adds last

fruits.shift();         // removes first
fruits.unshift("Lemon");// adds first
```

---

## 7) Objects & Methods (pages 18–21) 

```js
let person = {
  name: ["Alex", "Bob"],
  age: 22,
  intro() {
    return `Hi, I'm ${this.name[0]}`;
  }
};

person.age;        // 22
person["age"];     // 22
person.intro();    // method call
```

Add new properties:

```js
person.address = "Somewhere";
```

---

## 8) Strings (pages 22–23) 

```js
let s1 = "Hello";
let s2 = new String("Hello");

typeof s1; // "string"
typeof s2; // "object"
```

---

## 9) String Methods (pages 24–28) 

```js
let text = "Learning JavaScript";

text.length;              // 19
text.indexOf("Java");     // 9
text.includes("Learn");   // true
text.toUpperCase();       // "LEARNING JAVASCRIPT"
text.toLowerCase();       // "learning javascript"

text.substring(0, 8);     // "Learning"
text.substr(9, 10);       // "JavaScript"

text.split(" ");          // ["Learning", "JavaScript"]
```

---

## 10) Built-in Objects (pages 29–30) 

### Math

```js
Math.random();     // 0 → 1
Math.round(4.6);  // 5
Math.sqrt(16);    // 4
```

### Date

```js
let now = new Date();
now.getFullYear();
now.getHours();
```

---
