const some = (fun, arr) => {
  let result = false;
  for (const i of arr) {
    result = result || fun(i);
  }
  return result;
};

module.exports = some;
