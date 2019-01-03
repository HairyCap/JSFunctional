const alt = (fun1, fun2) => {
  return val => {
    return fun1(val) || fun2(val);
  };
};

module.exports = alt;
