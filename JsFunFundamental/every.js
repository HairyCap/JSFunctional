const every = (fun, arr) => {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    result = result && fun(arr[i]);
  }
  return result;
};

module.exports = every;
