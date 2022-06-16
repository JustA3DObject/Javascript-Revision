//"of" and "in" in loops for arrays
let value = [];
value[0] = 1;
value[9] = 10;
for (let n of value) {
  console.log(n);
}
for (let n in value) {
  console.log(n);
}

//Array destructuring
let value2 = [1, 2, 3, 4];
let [a, b, c, d] = value2;
console.log(a, b, c, d);
let [e, f, , h] = value2;
console.log(e, f, h);

//Swapping values using array destructuring
let x = 5;
let y = 6;
[x, y] = [y, x];
console.log(x, y);

//Making a string an array
let str = "Alpha Beta Charlie Delta Eco".split(" ");
console.log(str, typeof str);
let [i, j, k, l, m] = str;
console.log(i, j, k, l, m);
let [n, o, ...p] = str; //... assigns all the remaining values to one variable
console.log(n, typeof n, o, typeof o, p, typeof p);

//forEach
let array = [1, 2, 3, 4, 5];
array.forEach((x, y, z) => {
  //Function inside a function (arrow function inside forEach)
  console.log(x * 2, y, z);
});
