const colors = require('chalk');
// Prueba de lectura
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('Como estas? ', (estadoActual) => {
	console.log(colors.blue(`Estado actual: ${estadoActual}`));
	readline.close()
})
