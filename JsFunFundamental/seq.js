const seq = (...funs) => {
  return val => {
    funs.forEach(fun => {
      fun(val);
    });
  };
};

//test
//        :: Number -> Number
const compose = require("./compose");
const tap = require("./tap");
const add1 = val => val + 1;
const add2 = val => val + 2;

seq(
  compose(
    console.log,
    add1
  ),
  compose(
    console.log,
    add2
  )
)(3);
module.exports = seq;
