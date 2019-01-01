const once = fn => {
  let done = false;
  return (...arg) => {
    done ? undefined : ((done = true), fn.apply(this, arg));
  };
};
module.exports = once;
