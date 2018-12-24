const every = (fun, arr) => {
  let result = true;
  for (let i of arr) {
    //for ..of iterate array
    result = result && fun(i);
  }
  return result;
};

module.exports = every;
