const checkType = require("./checkType");

const Tuple = function() {
  const tupleType = Array.from(arguments); //Same as Array.prototype.slice.call(arguments, 0);
  const _T = function() {
    const tupleValues = [...arguments]; //Same as Array.from(arguments)
    //--
    if (tupleValues.some(val => val === null || val === undefined)) {
      throw new ReferenceError("Tuples may not have any null values");
    }
    //--
    if (tupleValues.length !== tupleType.length) {
      throw new TypeError("Tuple arity does not match its prototype");
    }
    //--Array.prototype.map((val,index,array)=>{},this)
    //Arrow function's this key word is get automaticly from context
    //in this case,map function's this argument can be omited
    //like line 29
    tupleValues.map((val, index) => {
      this["_" + (index + 1)] = checkType(tupleType[index])(val);
    }, this);

    Object.freeze(this);
  };
  _T.prototype.values = function() {
    return Object.keys(this).map(k => {
      console.log(this[k]);
      return this[k];
    });
  };
  return _T;
};

//test
// const StringPair = Tuple("string", "string");
// const test = new StringPair("true", "bbb");
// [ff, dd] = test.values();
// console.log(test);
// console.log([ff, dd]);

module.exports = Tuple;
