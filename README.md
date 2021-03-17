# aging.js

This library provides a function to calculate a difference between two dates.
0 dependencies, unit tests.

## Installation

```
npm i aging
```

## Usage
```js
import dateDiff from 'aging';

const from = new Date(2019, 2, 22, 10, 15, 40, 350);
const to = new Date(2021, 3, 25, 12, 20, 50, 800);
const diff = dateDiff(from, to);
console.log(diff);
// {
//   years: 2,
//   months: 1,
//   days: 3,
//   hours: 2,
//   minutes: 5,
//   seconds: 10,
//   milliseconds: 450
// }
```

**Important** thing about this lib is that you will always get a positive diff: if `from` date
is coming after the `to` date, they will be swapped before diff calculation.

## Contribution
 - Clone this repo
 - Run `npm install`
 - Add stuff you want
 - Add tests
 - Submit pull request
