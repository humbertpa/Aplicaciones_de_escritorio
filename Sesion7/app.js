const {Persona} = require('./common');

const persona1 = new Persona();
const persona2 = new Persona();

persona1.nombre = "Juan";
persona2.nombre = "Pedro";

console.log(persona1.nombre);
console.log(persona2.nombre);