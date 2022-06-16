function greet() {
  console.log("Hello World");
}
greet();

function greet2() {
  return "Hello World";
}
let str = greet2();
console.log(str);

function greet3(user) {
  return `Hello ${user}`;
}
let user = "Alpha";
let str2 = greet3(user);
console.log(str2);

//Function expression
let add = function (num1, num2) {
  //Anonymus function
  return num1 + num2;
};
let result = add(5, 6); //Can treat add as a function
console.log(result);

//Arrow function
// let greet4 = function () {
//   console.log("Hello World");
//   return 1;
// };
// console.log(greet4());

let greet5 = () => {
  console.log("Hello World");
  return 1;
};
console.log(greet5());

let add2 = (num9, num10) => num9 + num10;
let result11 = add(6, 7);
console.log(result11);

//Method
let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "Lenovo",

  greet: function () {
    console.log("Hello World");
  },
};

laptop.greet();
