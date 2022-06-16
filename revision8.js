let laptop = {
  cpu: "i9",
  ram: 16,
  brand: "Lenovo",

  configuration: function () {
    // console.log(laptop.cpu);
    console.log(this.cpu);
  },
};
laptop.configuration();

let laptop1 = {
  cpu: "i7",
  ram: 8,
  brand: "Lenovo",

  compare: function (other) {
    if (this.cpu > other.cpu) {
      console.log("laptop1 is faster");
    } else {
      console.log(`${other} is faster`);
    }
  },

  configuration: function () {
    // console.log(laptop.cpu);
    console.log(this.cpu);
  },
};

let laptop2 = {
  cpu: "i9",
  ram: 16,
  brand: "HP",

  configuration: function () {
    // console.log(laptop.cpu);
    console.log(this.cpu);
  },
};

function fastestlaptop(laptop1, laptop2) {
  if (laptop1.cpu > laptop2.cpu) {
    console.log("laptop1 is faster");
  } else {
    console.log("laptop2 is faster");
  }
}
fastestlaptop(laptop1, laptop2); //A third party function is comparing two laptops
laptop1.compare(laptop2); //The laptop is comapring itself to other
