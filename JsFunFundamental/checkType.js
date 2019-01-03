const curry2 = require("./curry2");

// checkType :: Type -> Type -> Type | TypeError
const checkType = curry2((typeDef, val) => {
  if (typeDef === typeof val) {
    return val;
  } else {
    throw new TypeError(
      `Type mismatch. Expected [${typeDef}] but found [${typeof val}]`
    );
  }
});

//test
// console.log(checkType("string")("jjjj"));
// console.log(checkType("string")(11));

module.exports = checkType;
