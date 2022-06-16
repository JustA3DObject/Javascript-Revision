let num1 = 6,
  num2 = 4,
  num3 = 7;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is greatest");
} else if (num2 > num3) {
  console.log("num2 is greatest");
} else {
  console.log("num3 is greatest");
}

let x = 5;
let result;

// if (x % 2 == 0) {
//     result = "Even";
// } else {
//     result = "Odd";
// }

result = x % 2 == 0 ? "Even" : "Odd"; //terniary operator
console.log(result);
