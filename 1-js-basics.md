## 1) What is JavaScript?

JavaScript is a **high-level, interpreted language** used to make web pages interactive and dynamic (slides 10–12). 

HTML = structure
CSS = style
**JavaScript = behavior**

Example:

```html
<button onclick="alert('Clicked!')">Click me</button>
```

---

## 2) Adding JavaScript to HTML (page 24) 

### Inline script

```html
<p id="message"></p>

<script>
  document.getElementById("message").innerText = "Hello JavaScript!";
</script>
```

### External file

```html
<script src="script.js"></script>
```

---

## 3) Output Methods (page 25) 

```js
alert("Hello World");          // popup
console.log("Hello World");   // browser console (F12)
```

---

## 4) Comments (page 26) 

```js
// Single-line comment

/* Multi-line
   comment */
```

---

## 5) Variables: `var`, `let`, `const` (page 27) 

```js
var x = 10;     // old, function-scoped
let y = 20;     // block-scoped (preferred)
const z = 30;   // cannot be reassigned
```

Rule of thumb:

* Use `let` by default
* Use `const` if value should not change
* Avoid `var`

---

## 6) Variable Naming Rules (page 29) 

Valid:

```js
let myVar;
let _count;
let $price;
```

Invalid:

```js
let 1num;      // cannot start with number
let if;        // reserved keyword
```

---

## 7) Data Types (pages 31–32) 

### Primitive types

```js
let a = "Hello";     // string
let b = 42;          // number
let c = true;        // boolean
let d;               // undefined
let e = null;        // null
```

Check type:

```js
console.log(typeof a); // "string"
```

### Non-primitive types

```js
let arr = [1, "Hi", true];

let obj = {
  id: 1,
  name: "Student"
};
```

---

## 8) Strings (pages 39–40) 

```js
let s1 = "Hello";
let s2 = 'World';
let s3 = `Hello ${s2}`; // template literal
```

---

## 9) Functions (page 33) 

```js
function showMessage(name = "User") {
  console.log("Hello " + name);
}

showMessage("Alex");
showMessage();
```

Button example:

```html
<button onclick="showMessage()">Show Message</button>
```

---

## 10) Objects (page 41) 

```js
let person = {
  name: ["Alex", "Bob"],
  age: 22,
  intro: function () {
    return `Hi, I'm ${this.name[0]}`;
  }
};

console.log(person.intro());
```

---

## 11) Mathematical Operators (page 37) 

```js
let a = 10 + 5;   // 15
let b = 10 - 5;   // 5
let c = 10 * 5;   // 50
let d = 10 / 5;   // 2
let e = 10 % 3;   // 1
let f = 5 ** 3;   // 125
```

---

## 12) Hoisting (pages 34–36) 

`var` declarations are hoisted, `let` and `const` are not.

```js
x = 5;
console.log(x);
var x;   // works
```

```js
y = 5;
let y;   // ❌ ReferenceError
```

---

## 13) JavaScript is Interpreted (pages 19–22) 

* Code runs line-by-line
* Errors appear immediately
* Easier debugging, slightly slower than compiled languages

---

