const Animal = require("./animal");

const animal1 = new Animal();
const animal2 = new Animal();

animal1.respira = true;
animal2.respira = false;


console.log(animal1.respira);
console.log(animal2.respira);