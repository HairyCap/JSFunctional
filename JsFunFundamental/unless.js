//if predicate is false, run fun
const unless = (fun, predicate) => {
  if (!predicate) {
    fun();
  }
};

module.exports = unless;
