const compose = (...args) => {
  let start = args.length - 1;
  return (...args2) => {
    let i = start;
    let result = args[start].apply(this, args2);
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
};

module.exports = compose;
//test
// trim :: string -> string
// const trim = str => str.replace(/^\s*|\s*$/g, "");
// normalize :: string -> string
// const normalize = str => str.replace(/\-/g, "");
// length :: string -> int
// const length = str => str.length;
// console.log(
//   compose(
//     length,
//     normalize,
//     trim
//   )("333-3333-333")
// );
