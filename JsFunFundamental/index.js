const forEach = require("./forEach");
const forEachObj = require("./forEach");
const unless = require("./unless");
const times = require("./times");
const every = require("./every");

const arr = [1, 2, 3, NaN];

forEach(num => {
  console.log(num * 3);
}, arr);

const obj = { a: 1, b: 2 };

forEachObj((key, value) => {
  console.log(`${key}:${value}`);
}, obj);

forEach(num => {
  unless(() => console.log(num + " is even"), num % 2);
}, arr);

times(i => unless(() => console.log(i + " is even"), i % 2), 100);

console.log(every(i => !i, arr));
