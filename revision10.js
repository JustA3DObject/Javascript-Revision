let value = new Array();
let value2 = []; //Empty array
let value3 = [1, 2, 3];
console.log(value3.length);
value3.push(4);
console.log(value3, value3.length);
console.log(value3[1]);
console.log(value3[4]);
let value4 = ["Alpha", "Beta", "Charlie"];
value4[3] = "Delta";
console.log(value4);
let value5 = [];
value5[0] = 1;
value5[99] = 100;
console.log(value5);

let data = [
  "Alpha",
  1,
  { code: "123" },
  function () {
    console.log("Hello World");
  },
];
console.log(data);
data[3]();

//Array Methods
let value6 = [1, 2, 3, 4];
console.log(value6.push(5)); //Length of array is printed
console.log(value6);
console.log(value6.pop());
console.log(value6);
console.log(value6.shift()); //Removes data from first index and shifts all the elements to the left
console.log(value6);
console.log(value6.unshift(1)); //Adds value to the first index and shifts all the elements to right
console.log(value6);
console.log(value6.splice(1, 2, 5, 6)); //Prints the values removed
console.log(value6);
