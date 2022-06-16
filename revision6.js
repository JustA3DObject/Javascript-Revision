let student = {}; //Empty object
console.log(typeof student);

let developer = {
  name: "Alpha",
  tech: "JS",
  "work exp": 5,
  laptop: {
    //Object inside an object
    cpu: "i7",
    ram: 4,
    brand: "Lenovo",
  },
};
console.log(developer);
console.log(developer.name);
console.log(developer["name"]);
console.log(developer["work exp"]); //Must use square brackets, can't use dot operator
console.log(developer.laptop.brand);
console.log(developer.laptop.brand.length);
// console.log(developer.laptop.brand1.length); //Gives error
console.log(developer.laptop.brand1?.length); //Checks if the object has the property with ?

for (let key in developer) {
  console.log(key, developer[key]);
}
for (let key in developer.laptop) {
  console.log(key, developer.laptop[key]);
}
