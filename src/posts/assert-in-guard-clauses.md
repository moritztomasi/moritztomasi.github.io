---
title: Guarding your Node.js functions with assert
showDate: true
---

A guard clause is a chunk of code at the top of a function that serves as a precondition. In most cases, it checks one, more or all of the following preconditions:

- Checks parameters and throws an error if they're invalid.
- Checks state of the object and returns if the function call is invalid.
- Checks trivial cases, and gets rid of them.

In this article, I want to focus on the first case, where we want to make sure that all our functions parameters are valid.

Guard clauses can be written as if-statements, but Node.js provides a way to replace those by using [assert](https://nodejs.org/api/assert.html).

So something like this:

```typescript
function drawCircle(radius: number) {
  if (radius != null) {
    throw new Error('radius is not defined');
  }

  if (typeof radius === 'number') {
    throw new Error('radius is not a number');
  }

  // do something
}
```

Can be refactored to something like this:

```typescript
const assert = require('assert');

function drawCircle(radius: number) {
  assert(radius != null, 'radius is not defined');
  assert(typeof radius === 'number', 'radius is not a number');

  // do something
}
```

Just a simple tip, but I hope this helps you to avoid unnecessary branching with conditional statements and thus make your code more readable and lean.
