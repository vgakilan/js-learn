## 1) Arithmetic Operators (pages 2–4) 

```js
let a = 10;
let b = 3;

a + b;   // 13  addition
a - b;   // 7   subtraction
a * b;   // 30  multiplication
a / b;   // 3.333... division
a % b;   // 1   modulo (remainder)
a ** b;  // 1000 exponentiation

a++;     // increment → 11
b--;     // decrement → 2
```

**Edge case:** dividing by zero gives `Infinity`, not an error.

---

## 2) Order of Operations (PEMDAS) (page 5) 

```js
5 + 2 * 3;      // 11
(5 + 2) * 3;    // 21
5 ** 2 * 2;     // 50
```

Parentheses always win.

---

## 3) Compound Assignment Operators (page 6) 

```js
let x = 10;

x += 5;   // 15
x -= 2;   // 13
x *= 2;   // 26
x /= 2;   // 13
x %= 5;   // 3
x **= 2;  // 9
```

Shortcut rule: `x += y` ⇢ `x = x + y`.

---

## 4) Comparison Operators (pages 7–10) 

```js
5 > 3;     // true
5 < 3;     // false
5 >= 5;    // true
5 <= 4;    // false
```

### `==` vs `===` (classic exam trap)

```js
let x = 2;
let y = "2";

x == y;    // true  (value only)
x === y;   // false (value + type)
x !== y;   // true
```

**Rule:** Always prefer `===`.

---

## 5) Logical Operators (page 11) 

```js
true && false;   // false  (AND)
true || false;   // true   (OR)
!true;           // false  (NOT)
```

Example:

```js
let age = 20;
age >= 18 && age <= 65; // true
```

---

## 6) Expressions (Implicit Idea Across Slides)

An **expression** is anything that produces a value.

```js
5 + 3           // expression → 8
x > y           // expression → true/false
num * 2 + 1     // expression
```

---

## 7) Errors in JavaScript (pages 12–13) 

### Syntax Error (caught before running)

```js
if (x > 5  // ❌ missing )
```

### Runtime Error (happens while running)

```js
let x = y + 1; // ❌ y is undefined
```

---

## 8) `try...catch...finally` (pages 14–15) 

```js
try {
  let result = riskyFunction();
  console.log(result);
} catch (error) {
  console.log("Error occurred:", error.message);
} finally {
  console.log("Always runs");
}
```

---

## 9) Throwing Custom Errors (page 16) 

```js
function divide(a, b) {
  if (b === 0) {
    throw "Cannot divide by zero";
  }
  return a / b;
}

try {
  divide(10, 0);
} catch (e) {
  console.log(e);
}
```

---

## Ultra-Short Memory Hooks

* `+` + string = **concatenation**
* `===` checks **type + value**
* `%` gives **remainder**
* Errors ≠ crashes if handled with `try...catch`
* Expressions always **evaluate to a value**