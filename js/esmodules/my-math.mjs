// Not exported, private to module
function times(a, b) {
	return a * b;
}
export function square(x) {
	return times(x, x);
}
export const LIGHTSPEED = 299792458;

//tambien  export clauses

//export { square, LIGHTSPEED }; // PUNTO Y COMA 

// o renombrando

//export {
	//square as cuadradoDe,
	//LIGHTSPEED as velocidadDeLaLuz,
//};
