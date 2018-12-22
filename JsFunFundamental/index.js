const forEach = require("./forEach");

const arr = [1, 2, 3, 4];

forEach(num => {
  console.log(num * 3);
}, arr);
