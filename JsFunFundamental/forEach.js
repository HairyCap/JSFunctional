//put data last,make point free function!
const forEach = (fun, array) => {
  let i;
  for (i = 0; i < array.length; i++) {
    fun(array[i]);
  }
};

const forEachObj = (fun, obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      fun(key, obj[key]);
    }
  }
};
module.exports = forEach;
module.exports = forEachObj;
