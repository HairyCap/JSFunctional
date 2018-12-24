const forEach = require("./forEach");
const forEachObj = require("./forEach");
const unless = require("./unless");

const arr = [1, 2, 3, 4];

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
