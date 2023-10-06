const miFuncion = () => {
	/// Ejecutar algo ...
	console.log('hola mundo');
	
	setTimeout(miFuncion, 1000)
}

setTimeout(() => {
	miFuncion()
}, 1000);


