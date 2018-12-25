const unary = fn => {
  return fn.length === 1 ? fn : arg => fn(arg);
};

module.exports = unary;
