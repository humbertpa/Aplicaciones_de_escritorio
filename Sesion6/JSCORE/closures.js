function sumar(a){
	return function (b){
	return a+b;
	};
}

const resultado = sumar(5)(3);

console.log(resultado);

//closure es una función que es regresada dentro de otra.

const lasuma = sumar(5);
console.log(lasuma(2));
console.log(lasuma(3));
console.log(lasuma(1));