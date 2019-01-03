const curry2 = fun => fstArg => secArg => fun(fstArg, secArg);

//test
// const name = curry2(function(last, first) {
//   return `${last}, ${first}`;
// });

// console.log(name("nan")("ddd"));
module.exports = curry2;
