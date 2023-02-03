let nombre ="Juan";

function renombrar(n) {
    n = "Pedro";
}

renombrar(nombre);
console.log(nombre);

let persona ={nombre:"Juan"};

function renombrar(n) {
	const copia = Object.assign({},n);
	copia.nombre = "Pedro";
	console.log(copia.nombre)
}

renombrar(persona);
console.log(persona.nombre);
