//Sets
let nums = new Set("Banana"); //Cant have duplicate elements & is unindexed
console.log(nums);
nums.add(3);
nums.add("Apple");
nums.add(3);
console.log(nums);

nums.forEach((n) => {
  console.log(n);
});

console.log(nums.has(3));
console.log(nums.has(4));

//Maps
let tech = new Map();
tech.set("Java", "Android");
tech.set("Python", "ML");
tech.set("JS", "Web");

console.log(tech.keys());
console.log(tech.has("Java"));
console.log(tech.has("Web")); //Only checks keys

for (let [x, y] of tech) {
  console.log(x, " : ", y);
}

tech.set("Python", "AI");

for (let [x, y] of tech) {
  console.log(x, " : ", y);
}

tech.forEach((x, y) => {
  console.log(x, " : ", y);
});
tech.forEach((y, x) => {
  console.log(x, " : ", y);
});
