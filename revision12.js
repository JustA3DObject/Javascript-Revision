let array = [1, 2, 3, 4, 5];
console.log(array.filter((x) => x % 2 === 0));
/*"Filter" takes elements that pass through the conditions in the func. inside & returns an array of them*/
array.forEach((y) => {
  console.log(y);
});
console.log("\n");

//forEach with filter and map
array
  .filter((z) => z % 2 === 0) //Filter the elements
  .map((z) => z * 2) //Doubles the filterelements
  .forEach((z) => {
    console.log(z);
  });

//Map reduce
let result = array
  .filter((z) => z % 2 === 0) //Filter the elements
  .map((z) => z * 2)
  .reduce((a, b) => a + b);
console.log(result);
