const forEach = require("./forEach");
const forEachObj = require("./forEach");
const unless = require("./unless");
const times = require("./times");
const every = require("./every");
const some = require("./some");
const sortBy = require("./sortBy");
const tap = require("./tap");

const arr = [1, 2, 3, NaN];

forEach(num => {
  console.log(num * 3);
}, arr);

const obj = { a: 4, b: 1, c: 2, d: 3 };

const arrObj = [
  { a: 4, b: 1, c: 2, d: 3 },
  { a: 1, b: 3, c: 4, d: 3 },
  { a: 2, b: 2, c: 1, d: 3 }
];

forEachObj((key, value) => {
  console.log(`${key}:${value}`);
}, obj);

forEach(num => {
  unless(() => console.log(num + " is even"), num % 2);
}, arr);

times(i => unless(() => console.log(i + " is even"), i % 2), 10);

console.log(every(i => !!i, arr)); //false

console.log(some(i => !!i, arr)); //true

console.log(arrObj.sort(sortBy("a")));
//[ { a: 1, b: 3, c: 4, d: 3 },
//{ a: 2, b: 2, c: 1, d: 3 },
//{ a: 4, b: 1, c: 2, d: 3 } ]

const one = tap(console.log);
one(1);
