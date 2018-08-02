# ObjectWithin

## Installation

```
npm install --save objectWithin
```

## Usage

The object within function accepts two parameters, a small object and a large object. It will deeply compare the two,
making sure EVERY field that is in the smaller object exists in the larger one.

```js
const largeObj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 6
    },
    h: 5
  },
  e: 7,
  d: 3,
  j: [
    1,
    2,
    3,
    {
      a: 7,
      b: 8
    },
    4
  ]
}

const smallObj = {
  a: 1,
  c: {
    e: {
      f: 4
    },
    h: 5
  },
  e: 7,
  j: [
    1,
    2,
    3,
    {
      a: 7
    }
  ]
}

expect( objectWithin(smallObj, largeObj) ).to.be.true;
// ==> true :) 
```
