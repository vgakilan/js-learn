## 1) `if / else`

Run code only when a condition is true (see the branch diagram idea on pages 2–3). 

```js
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### `else if` chain (page 4) 

```js
let score = 72;

if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else console.log("Needs work");
```

## 2) Ternary operator `condition ? a : b` (page 5) 

Great for short “if/else” decisions.

```js
const isLoggedIn = true;
const msg = isLoggedIn ? "Welcome!" : "Please log in";
console.log(msg);
```

## 3) `switch` (page 6) 

Use when you compare **one expression** against many values.

```js
let day = 3;
let name;

switch (day) {
  case 1: name = "Mon"; break;
  case 2: name = "Tue"; break;
  case 3: name = "Wed"; break;
  default: name = "Unknown";
}
console.log(name);
```

**Gotcha:** If you forget `break`, execution “falls through” to the next case (that’s what the quiz on page 7 is hinting at). 

## 4) Loops

### `for` loop (page 9) 

Best when you know how many times.

```js
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

### `while` and `do...while` (page 16 + loop flowchart page 8) 

`while` checks first, `do...while` runs at least once.

```js
let n = 3;
while (n > 0) {
  console.log(n);
  n--;
}

let m = 0;
do {
  console.log("Runs once even if condition is false");
} while (m > 0);
```

## 5) `for...in` vs `for...of` (pages 10–14) 

These are *not* interchangeable.

### `for...in` → **keys / property names**

* Objects: property keys
* Arrays: **indexes** (as strings)

```js
const arr = [10, 20, 30];

for (const key in arr) {
  console.log(key); // "0", "1", "2"
}
```

### `for...of` → **values**

Works on iterables (arrays, strings, etc.)

```js
const arr = [10, 20, 30];

for (const value of arr) {
  console.log(value); // 10, 20, 30
}
```

(That’s exactly what the quiz on page 14 is testing.) 

## 6) `break` and `continue` (pages 17–18) 

### `break` → exit the loop (or switch)

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // 1, 2
}
```

### `continue` → skip to next iteration

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1, 2, 4, 5
}
```

