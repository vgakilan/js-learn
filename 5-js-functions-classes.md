## 1) Functions (pages 2–7) 

Functions are **reusable blocks of code**.

### Declaring & calling

```js
function greet(name) {
  return "Hello, " + name;
}

greet("Alice");
```

### Parameters & return

```js
function add(a, b) {
  return a + b;
}

add(3, 4); // 7
```

### Conditional return

```js
function checkAge(age) {
  if (age >= 18) return "Adult";
  return "Minor";
}
```

---

## 2) Function Variations (page 8) 

### Default parameters

```js
function add(x, y = 10) {
  return x + y;
}
```

### Anonymous function

```js
let sum = function (x, y = 10) {
  return x + y;
};
```

### Self-invoking (IIFE)

```js
let result = (function (x, y = 10) {
  return x + y;
})(5);
```

---

## 3) Scope (pages 9–11) 

### Global vs local

```js
let x = "global";

function test() {
  let x = "local";
  console.log(x);
}
```

### Block scope (`let`, `const`)

```js
if (true) {
  let a = 5;
}
// a is not accessible here
```

`var` has **no block scope** → avoid it.

---

## 4) Closures (pages 12–13) 

A function **remembers variables** from where it was created.

```js
const increase = (function () {
  let count = 0;
  return function () {
    return ++count;
  };
})();

increase(); // 1
increase(); // 2
```

---

## 5) Classes Basics (pages 14–24) 

Classes are **blueprints** for objects.

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started");
  }
}
```

### Creating an object

```js
const myCar = new Car("Toyota", "Camry");
myCar.startEngine();
```

---

## 6) Constructors (pages 25–27) 

* Runs automatically when object is created
* Initializes object data
* If missing → default constructor is used

```js
constructor(make, model) {
  this.make = make;
  this.model = model;
}
```

---

## 7) Inheritance (`extends`) (pages 32–36) 

```js
class Book {
  constructor(author, title, price) {
    this.author = author;
    this.title = title;
    this.price = price;
  }
}

class EBook extends Book {
  constructor(author, title, price, url) {
    super(author, title, price);
    this.url = url;
  }
}
```

**EBook inherits everything from Book**.

---

## 8) `super` Keyword (pages 38–40) 

* Calls parent constructor
* Must be used **before `this`**

```js
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
  }
}
```

---

## 9) Generalization Concept (pages 41–43) 

Move shared features into a parent class.

```js
class Person {
  talk() {
    console.log("Person talking");
  }
}

class Student extends Person {}
class Teacher extends Person {}
```

(Each subclass can later override methods.)

---

## Exam Survival Rules

* Functions can **return only one value**
* `let` / `const` → block scoped
* Closures remember **lexical scope**
* `class` is syntax sugar over JS objects
* `extends` = inheritance
* `super()` must come first in subclass constructor

