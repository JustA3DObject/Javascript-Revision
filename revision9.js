function Developer(name, tech) {
  this.name = name;
  this.tech = tech;
  this.intro = function () {
    console.log(`My name is ${name} and I'm good at ${tech} `);
  };
}
let developer1 = new Developer("Alpha", "JS");
let developer2 = new Developer("Beta", "Java");

console.log(developer1, developer2);
developer1.intro();
developer2.intro();
