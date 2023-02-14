//modulo

let algo;

module.exports = function (param) {
    console.log(algo);
}

//index

const fn = require("algo");
const persona = {nombre : "Jose"};
fn(persona);

console.log(persona);