console.log("Hello World");
console.log(2 + 2);
let num = 3 + 2;
console.log(num);
console.log((num = 3));
let num2 = 5;
console.log(num2 + num);
let name = "Alpha";
console.log(name);

let radius = 5;
const pi = 3.14; //Contsants can't be changed
let area;

area = pi * radius * radius;
console.log(area);

console.log(typeof num);

let num3 = 5 / 0;
console.log(num3);
let num4 = -5 / 0;
console.log(num4);

let str1 = "Alpha";
let str2 = "Beta";
let concat = str1 + str2;
console.log(concat);
let str3 = '"Alpha"';

let str4 = null;
console.log(str4);
console.log(typeof str4);

console.log(3 / "Alpha");
console.log(typeof (3 / "Alpha"));

let num5 = String(12345);
console.log(num5, typeof num5);

let num6 = 5;
num6 = num6 + "";
console.log(num6, typeof num6);
num6 = num6 - 2;
console.log(num6, typeof num6);
num6 = !num6;
console.log(num6, typeof num6);

let x = "123 Alpha";
console.log(x);
x = Number("123 Alpha");
console.log(x);
x = parseInt("123 Alpha");
console.log(x);
x = parseInt("Alpha 123");
console.log(x);

let num7 = 9,
  num8 = 10;
let result = num7 + num8;
console.log("The sum of " + num7 + " and " + num8 + " is " + result);
console.log(`The sum of ${num7} and ${num8} is ${result}`); //Template literal
