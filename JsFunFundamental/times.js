const times = (fun, times) => {
  for (let i = 0; i < times; i++) {
    fun(i);
  }
};
module.exports = times;
