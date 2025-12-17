## 1) What is an Event? (pages 2–4) 

An **event** is something that happens in the browser.

* **User actions**: click, hover, type
* **Browser actions**: page load, resize
* **Form actions**: submit, input

JavaScript **listens** for events and reacts.

---

## 2) Event Listener Pattern (Core Formula) (page 5) 

### 3 required steps

```js
// 1. Get element
const button = document.getElementById("myBtn");

// 2. Add listener
button.addEventListener("click", sayHello);

// 3. Define function
function sayHello() {
  alert("Hello World!");
}
```

**Mental model:**

> Element → Event → Function

---

## 3) Common Events (page 2) 

```js
"click"     // mouse click
"submit"   // form submission
"keyup"    // key released
"load"     // page loaded
```

---

## 4) Page Load Event (Browser Action) (page 6) 

Runs JavaScript **after HTML is fully loaded**.

```js
document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  document.getElementById("message").textContent =
    "DOM Fully loaded. JS Ready";
}
```

Use this to avoid “null element” errors.

---

## 5) Modifying the DOM with Events (page 7) 

```js
const container = document.getElementById("container");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", addNewParagraph);

function addNewParagraph() {
  const p = document.createElement("p");
  p.textContent = "New Paragraph made with JS";
  container.appendChild(p);
}
```

---

## 6) Form Submission Handling (page 8) 

Prevent page reload and handle with JavaScript.

```js
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted via JavaScript");
});
```

`event.preventDefault()` stops the browser’s default behavior.

---

## 7) Anonymous vs Named Event Handlers

Named:

```js
button.addEventListener("click", handleClick);

function handleClick() {
  console.log("Clicked");
}
```

Anonymous:

```js
button.addEventListener("click", function () {
  console.log("Clicked");
});
```

---

## Exam Gold Rules

* Events **do nothing** without listeners
* `addEventListener()` is preferred over inline HTML events
* `DOMContentLoaded` prevents timing bugs
* `preventDefault()` is essential for forms
* DOM manipulation always starts with `document.getElementById`