console.log(Math.E);
console.log(Math.PI);
console.log(Math.cbrt(8));


console.log(Math.trunc(Math.E));

const iterable = ['hello', 'world'];
for (const elem of iterable) {
	console.log(elem);
}

let sumaDeSiMismo = (x) => x + x;
console.log(sumaDeSiMismo(2));

console.log([1,2,3].map((x) => x + 1)); // sumarles a todos 1
console.log([1,2,3].map((x) => x * 2)); // mult x 2

// callback funcion como argumento
const myArray = ['a', 'b'];
const callback = (x) => console.log(x);
myArray.forEach(callback);

// Parameter default values
function f(x, y = 0) {
	return [x, y];
}
console.log(f(9));

// Rest parameters
//recibe un array y los toma como argumentos


// parametros con nombre, se puede con object literals
function selectEntries({start=0, end=-1, step=1}) {
	return {start, end, step};
}

console.log(selectEntries({start: 2, end: 3, step: 34}));

// Spreading (...) into function calls
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];
arr1.push(...arr2);


// Methods of functions: .call(), .apply(), .bind()
// Functions are objects and have methods. 

// .call argumento extra

//function func(x:any, y:any) {
	//return [this, x, y];
//}

//console.log(func.call('hola','mundo','actual'));

// .apply argumentos en un array

//function func(x:any, y:any) {
	//return [this, x, y];
//}
//const args = ['a', 'b'];

//func.apply('hello',args)
