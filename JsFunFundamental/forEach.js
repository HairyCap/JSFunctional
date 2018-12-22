//put data last,make point free function!
const forEach = (fun, array) => {
  let i;
  for (i = 0; i < array.length; i++) {
    fun(array[i]);
  }
};
module.exports = forEach;
