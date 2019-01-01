const forEach = require("./JsFunFundamental/forEach");
const forEachObj = require("./JsFunFundamental/forEach");
const unless = require("./JsFunFundamental/unless");
const times = require("./JsFunFundamental/times");
const every = require("./JsFunFundamental/every");
const some = require("./JsFunFundamental/some");
const sortBy = require("./JsFunFundamental/sortBy");
const tap = require("./JsFunFundamental/tap");
const unary = require("./JsFunFundamental/unary");
const once = require("./JsFunFundamental/once");

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

const strArrInt = ["1", "3", "5", "9"];
const unaryIntParse = unary(parseInt);
console.log(strArrInt.map(unaryIntParse));

const printOnce = once(console.log);
printOnce("kjasdfkjhsfkj");
printOnce("afsdfasdf");
printOnce(2);
printOnce(2);
