//const id = setInterval(() => {
	//console.log('intervalo medio segundo');
//}, 500);

//setTimeout(() => {
	//console.log('\tIntervalo terminado después de 3 seg');
	//clearInterval(id)
//}, 3000);

let estadoDeEjecución = false

setTimeout(() => {
	estadoDeEjecución = true
}, 2000);

// uso común
const intervalo = setInterval(() => {
	// si se confirma terminarse a si mismo
	if (estadoDeEjecución == true){
		console.log('\n\t == Datos obtenidos con éxito ==\n');
		clearInterval(intervalo)	
		return
	}
	// hasta entonces...
	console.log('esperando datos');
}, 350);
