const fun = () => {};
console.log(typeof fun); //function

//pass function like data
const tellType = arg => {
  console.log(typeof arg);
};

tellType(fun); //function

tellType(1); //number

tellType("string"); //string

tellType(true); //boolean

tellType({}); //object

tellType(null); //object

tellType(undefined); //undefined

//call if arg is function
const tellType2 = arg => {
  if (typeof arg === "function") {
    console.log("it's a function");
    arg();
  } else {
    console.log("it's not a function");
  }
};

tellType2(tellType);
