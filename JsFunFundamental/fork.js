const fork = (join, fun1, fun2) => {
  return val => {
    return join(fun1(val), fun2(val));
  };
};

module.exports = fork;
