// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// For in loop
let numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let y in numbers) {
    txt += numbers[y];
}
console.log(txt);

//For each loop
let nums = [45, 4, 9, 16, 25];

let t = "";
nums.forEach(myFunction);

function myFunction(value) {
    t += value;
}
console.log(t);

//For of loop
let cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x;
}
console.log(text);

// While loop
let x = 11;
while (x <= 15) {
    console.log(x);
    x++;
}

// Do while loop
let j = 21;
do {
    console.log(j);
    j++;
} while (j <= 25);

// Switch case
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("7 am");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("4 am");
        break;
    case "Friday":
        console.log("9 am");
        break;
    case "Saturday":
    case "Sunday":
        console.log("8 am");
        break;
    default:
        console.log("No match");
}