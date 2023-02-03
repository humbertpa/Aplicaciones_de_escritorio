const persona = {
	nombre: "Juan",
	apellido: "Perez",
	correo: "juan.perez@iteso.mx"	
}

//const nombre = persona.nombre;
//const apellido = persona.apellido;
//const correo = persona.correo; 


// extracción de valores. Los valores de "persona" son asignadas a variables con el mismo nombre de las propiedades. Se pueden omitir valores si no se agregan al conjunto a lado de const. 

//const {nombre, apellido, correo} = persona;
//const {nombre, apellido, correo} = persona;
//console.log(nombre,apellido,correo);

//const{...copia} = persona; // se crea un clon. "..." significa todo lo demas.
const{nombre,...resto} = persona ; //Se crea una constante llamada "nombre" y un objeto que tiene las otras dos propiedades de persona, omitiendo nombre.
console.log(nombre,resto,resto.apellido);

//a un nuevo objeto se le pueden agregar nuevas propiedades. Ejemplo:
console.log(persona);
const copia = {status : "modificado",...persona};
console.log(copia);
copia.nombre ="Pedro";
console.log(copia);



const numeros = [1,2,3,4,5,1];
const copiaNumeros = [...numeros];
copiaNumeros.sort();
console.log(copiaNumeros);

const [n1,n2,...otros] = numeros;
console.log(n1);
console.log(n2);
console.log(otros);